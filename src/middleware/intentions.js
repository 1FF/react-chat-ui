import intent from '@/services/intentions';
import { setIsEmailLoading, setEmailSuccess, setIsEmailFieldVisible, setEmailError } from '@/store/slices/intentions';
import { appendHistory, setUpstreamItem } from '@/store/slices/stream';

export const intentionsMiddleware = store => next => {
  intent.core.on(intent.type.emailSuccess, () => {
    const { currentEmail } = store.getState().intentions.email;
    console.log('email success');
    store.dispatch(setIsEmailLoading(false));
    store.dispatch(setUpstreamItem(currentEmail));

    // !!important!! the the email must be set into RZ localStorage
    // store.set('answers', { 'saved-email': currentEmail });

    // DEV: setEmailSuccess this status is for us to know if mail is validated in the endpoint
    store.dispatch(setEmailSuccess(true));
    store.dispatch(setIsEmailFieldVisible(false));

    // DEV NOTE: add trackings;
    // !!important!! track the user with the socket and save the analytics data;
    // this.track(customEventTypes.emailEntered);
  });

  intent.core.on(intent.type.emailError, (response) => {
    const { tm716, tm526, tm715 } = store.getState().config.translations;

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

      // DEV NOTE: add trackings;
      // this.track(customEventTypes.emailExist);

      // DEV NOTE: this must be persisted so on refresh the message with options is still part of the history;
      // localStorage.setItem(ALREADY_REGISTERED_KEY, 'true');
      return;
    }

    if (response.status === 422) {
      store.dispatch(setEmailError(response.errors.email[0]));

      // DEV NOTE: add trackings;
      // this.track(customEventTypes.emailWrong);
    }
    console.log('email error');
  });

  // add logic to listen when correct email is being submitted
  return action => next(action);
};

export default intentionsMiddleware;
