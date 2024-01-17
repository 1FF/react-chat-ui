import { Middleware } from '@reduxjs/toolkit';
import { AllEvents } from '../config/analytics';
import { track } from '../services/tracking';
import intent from '../services/intentions';
import { setIsEmailLoading, setEmailSuccess, setIsEmailFormVisible, setEmailError, setLink } from '../store/slices/intentions';
import { setPd, setMarketing } from '../store/slices/meta';
import { addPredefinedAssistantMessage, fillUserHistoryData, setOutgoing } from '../store/slices/chat';
import { STORING_CHECKER_INTERVAL } from '../config/env';
import { PredefinedMessagePayload } from '../interfaces/index';
import { RootState, AppDispatch } from '../store';

type PaymentDataSetterProps = {
  billingFrequencyTmsg: string, billingOptionType: 'one-time' | 'subscription', frequencyInMonths: string
}
type setPaymentDataTranslationAccordingly = (data: PaymentDataSetterProps) => PaymentDataSetterProps;

export const intentionsMiddleware: Middleware = store => next => {

  const setPaymentDataTranslationAccordingly: setPaymentDataTranslationAccordingly = (data) => {
    const { meta } = store.getState();
    if (!meta.pd) return {} as PaymentDataSetterProps;
    data.billingFrequencyTmsg = data.billingOptionType === 'one-time'
      ? meta.pd.oneTimer
      : meta.pd.subscriberBillingFrequency.replace('{1}', data.frequencyInMonths);

    return data;
  };

  intent.core.on(intent.type.emailSuccess, () => {
    const { meta, intentions } = store.getState();

    store.dispatch(setIsEmailLoading(false));
    store.dispatch(setEmailError(''));
    store.dispatch(fillUserHistoryData({ content: intentions.email.current }));
    store.dispatch(setOutgoing(intentions.email.current));

    // DEV: setEmailSuccess this status is for us to know if mail is validated in the endpoint
    store.dispatch(setEmailSuccess(true));
    store.dispatch(setIsEmailFormVisible(false));
    track({
      eventType: AllEvents.emailEntered,
      systemType: meta.systemType,
      utmParams: meta.marketing.lastUtmParams,
      customerUuid: meta.cid,
      email: intentions.email.current
    });
  });

  intent.core.on(intent.type.emailError, (response) => {
    const { meta, intentions, config } = store.getState();
    const { tm716, tm526, tm715, tm505 } = config.translations;

    store.dispatch(setIsEmailLoading(false));

    if (response.status === 409) {
      store.dispatch(addPredefinedAssistantMessage({
        content: tm716,
        buttons: [
          { sequence: 1, id: 'opt-1', text: tm526, value: 'link', link: response.data.buttonLink, noStream: true },
          { sequence: 2, id: 'opt-2', text: tm715, value: 'button', link: '', noStream: true }
        ]
      } as PredefinedMessagePayload));

      track({
        eventType: AllEvents.emailExist,
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
      store.dispatch(setEmailError(response.errors.email[0] || tm505));

      track({
        eventType: AllEvents.emailWrong,
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
        eventType: AllEvents.linkProvided,
        systemType: meta.systemType,
        utmParams: meta.marketing.lastUtmParams,
        customerUuid: meta.cid,
        email: intentions.email.current
      });
    }
    next(action);
  };
};

const dataIntervalChecker = (
  key: string, store: RootState, setValue: (data: any) => void, transformData?: setPaymentDataTranslationAccordingly
) => {
  const intervalId = setInterval(() => {
    let storedItem: string | PaymentDataSetterProps = localStorage.getItem(key) || '';

    try {
      storedItem = JSON.parse(storedItem);
    } catch (e) {
      storedItem = localStorage.getItem(key) || '';
    }


    if (transformData && storedItem) {
      storedItem = transformData(storedItem as PaymentDataSetterProps);
    }

    if (transformData && storedItem) {
      store.dispatch(setValue(storedItem));
      clearInterval(intervalId);
    }
  }, STORING_CHECKER_INTERVAL);
};

export default intentionsMiddleware;
