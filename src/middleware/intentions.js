import intent from '@/services/intentions';
import { setIsEmailLoading, setEmailSuccess, setIsEmailFieldVisible } from '@/store/slices/intentions';
import { setUpstreamItem } from '@/store/slices/stream';

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
    // !!important!! track the user with the socket and save the analytics data;
    // this.track(customEventTypes.emailEntered);
  });

  intent.core.on(intent.type.emailError, (response) => {
    store.dispatch(setIsEmailLoading(false));

    if (response.status === 409) {
      console.log(response);
      // this.track(customEventTypes.emailExist);
      // localStorage.setItem(ALREADY_REGISTERED_KEY, 'true');
      // this.showOptionsForRegisteredUser();
      return;
    }

    //   if (response.status === 422) {
    //     this.elements.errorEmail.textContent = response.errors.email[0];
    //     this.elements.errorEmail.classList.remove('hidden');
    //     this.track(customEventTypes.emailWrong);
    //   }
    console.log('email error');
  });

  // add logic to listen when correct email is being submitted
  return action => next(action);
};

export default intentionsMiddleware;
