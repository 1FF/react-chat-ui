import { customEvents } from '@/config/analytics';
import { track } from '@/services/tracking';
import intent from '@/services/intentions';
import { setIsEmailLoading, setEmailSuccess, setIsEmailFormVisible, setEmailError, setLink } from '@/store/slices/intentions';
import { setPd, setMarketing } from '@/store/slices/meta';
import { appendHistory, setOutgoing } from '@/store/slices/chat';

export const intentionsMiddleware = store => next => {
  const setPaymentDataTranslationAccordingly = (data) => {
    const { meta } = store.getState();
    data.billingFrequencyTmsg = data.billingOptionType === 'one-time'
      ? meta.pd.oneTimer
      : meta.pd.subscriberBillingFrequency.replace('{1}', data.frequencyInMonths);

    return data;
  };

  intent.core.on(intent.type.emailSuccess, () => {
    const { meta, intentions } = store.getState();

    store.dispatch(setIsEmailLoading(false));
    store.dispatch(setEmailError(''));
    store.dispatch(setOutgoing(intentions.email.current));

    // DEV: setEmailSuccess this status is for us to know if mail is validated in the endpoint
    store.dispatch(setEmailSuccess(true));
    store.dispatch(setIsEmailFormVisible(false));
    track({
      eventType: customEvents.emailEntered,
      systemType: meta.systemType,
      utmParams: meta.marketing.lastUtmParams,
      customerUuid: meta.cid,
      email: intentions.email.current
    });
  });

  intent.core.on(intent.type.emailError, (response) => {
    const { meta, intentions, config } = store.getState();
    const { tm716, tm526, tm715 } = config.translations;

    store.dispatch(setIsEmailLoading(false));

    if (response.status === 409) {
      store.dispatch(appendHistory({
        role: 'assistant',
        content: tm716,
        options: [
          { id: 'opt-1', label: tm526, value: 'link', link: response.data.buttonLink },
          { id: 'opt-2', label: tm715, value: 'button', noStream: true }
        ]
      }));

      track({
        eventType: customEvents.emailExist,
        systemType: meta.systemType,
        utmParams: meta.marketing.lastUtmParams,
        customerUuid: meta.cid,
        email: intentions.email.current
      });

      // DEV NOTE: this must be persisted so on refresh the message with options is still part of the history;
      // localStorage.setItem(ALREADY_REGISTERED_KEY, 'true');
      return;
    }

    if (response.status === 422) {
      store.dispatch(setEmailError(response.errors.email[0]));

      track({
        eventType: customEvents.emailWrong,
        systemType: meta.systemType,
        utmParams: meta.marketing.lastUtmParams,
        customerUuid: meta.cid,
        email: intentions.email.current
      });
    }
  });

  dataIntervalChecker('marketing', store, setMarketing);
  dataIntervalChecker('__pd', store, setPd, setPaymentDataTranslationAccordingly);

  return action => {
    if (setLink.match(action) && action.payload.isVisible) {
      const { meta, intentions } = store.getState();

      track({
        eventType: customEvents.linkProvided,
        systemType: meta.systemType,
        utmParams: meta.marketing.lastUtmParams,
        customerUuid: meta.cid,
        email: intentions.email.current
      });
    }
    next(action);
  };
};

const dataIntervalChecker = (key, store, setValue, transformData = null) => {
  const intervalId = setInterval(() => {
    let storedItem = localStorage.getItem(key);

    try {
      storedItem = JSON.parse(storedItem);
    } catch (e) {
      storedItem = localStorage.getItem(key);
    }

    if (transformData && storedItem) {
      storedItem = transformData(storedItem);
    }

    if (storedItem) {
      store.dispatch(setValue(storedItem));
      clearInterval(intervalId);
    }
  }, 1000);
};

export default intentionsMiddleware;
