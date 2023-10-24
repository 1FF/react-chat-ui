import { customEvents } from '@/config/analytics';
import { track } from '@/plugins/socketio';
import intent from '@/services/intentions';
import { setIsEmailLoading, setEmailSuccess, setIsEmailFieldVisible, setEmailError, setLink } from '@/store/slices/intentions';
import { setPd, setMarketing } from '@/store/slices/meta';
import { appendHistory, setUpstreamItem } from '@/store/slices/stream';

export const intentionsMiddleware = store => next => {
  intent.core.on(intent.type.emailSuccess, () => {
    const { meta, intentions } = store.getState();

    store.dispatch(setIsEmailLoading(false));
    store.dispatch(setUpstreamItem(intentions.email.currentEmail));

    // DEV: setEmailSuccess this status is for us to know if mail is validated in the endpoint
    store.dispatch(setEmailSuccess(true));
    store.dispatch(setIsEmailFieldVisible(false));
    track({
      eventType: customEvents.emailEntered,
      systemType: meta.systemType,
      utmParams: meta.marketing.lastUtmParams,
      customerUuid: meta.cid,
      email: intentions.email.currentEmail
    });
  });

  intent.core.on(intent.type.emailError, (response) => {
    const { meta, intentions, config } = store.getState();
    const { tm716, tm526, tm715 } = config.translations;

    store.dispatch(setIsEmailLoading(false));

    if (response.status === 409) {
      store.dispatch(appendHistory({
        role: 'assistant',
        message: tm716,
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
        email: intentions.email.currentEmail
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
        email: intentions.email.currentEmail
      });
    }
  });

  dataIntervalChecker('marketing', store, setMarketing);
  dataIntervalChecker('__pd', store, setPd);

  // add logic to listen when correct email is being submitted
  return action => {
    if (setLink.match(action) && action.payload.isVisible) {
      const { meta, intentions } = store.getState();

      track({
        eventType: customEvents.linkProvided,
        systemType: meta.systemType,
        utmParams: meta.marketing.lastUtmParams,
        customerUuid: meta.cid,
        email: intentions.email.currentEmail
      });
    }
    next(action);
  };
};

const dataIntervalChecker = (key, store, setValue) => {
  const intervalId = setInterval(() => {
    const data = JSON.parse(localStorage.getItem(key));
    if (data) {
      store.dispatch(setValue(data));
      clearInterval(intervalId);
    }
  }, 1000);
};

export default intentionsMiddleware;
