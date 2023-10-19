import { useDispatch } from 'react-redux';
import { useRef, useState } from 'react';
import intent from '@/services/intentions';
import { useAppSelector } from '@/hooks';
import { EmailForm } from '@/components/Form/email';
import { getEmailIntentions, getLinkIntentions, getPaymentIntentions, setIsPaymentButtonVisible, setIsPaymentSuccessful, setLink, setPaymentFormVisibility } from '@/store/slices/intentions';
import { PaymentButton, Link } from '@/components/Payment';
import { appendHistory } from '@/store/slices/stream';
import { roles } from '@/config/roles';
import { PaymentScene } from '@/components/Scenes/payment';
import { getConfig } from '@/store/slices/config';

export const LayoutFoot = () => {
  const dispatch = useDispatch();
  const { isEmailFieldVisible } = useAppSelector(getEmailIntentions);
  const { translations } = useAppSelector(getConfig);
  const { isPaymentButtonVisible, isPaymentFormVisible } = useAppSelector(getPaymentIntentions);
  const { isVisible: isCtaVisible, text: ctaText, href: ctaHref } = useAppSelector(getLinkIntentions);
  const ctaAfterPayButton = useRef(null);
  const [disabled, setDisabled] = useState(false);

  const setIsPaymentContainerVisible = (isVisible) => {
    dispatch(setPaymentFormVisibility(isVisible));
  };

  const onClosePaymentForm = (e) => {
    e.currentTarget.disabled = true;
    intent.core.emit(intent.type.destroy);
    setIsPaymentContainerVisible(false);
    setDisabled(false);
  };

  const onPaymentSuccess = () => {
    // TODO: set in store to be persisted the GO THROUGH QUIZ button
    dispatch(appendHistory({ role: roles.assistant, message: translations.tm1226 }));

    // // in case the user does not click on take the quiz button
    setTimeout(() => {
      ctaAfterPayButton.current.click();
    }, 7000);

    dispatch(setIsPaymentSuccessful(true));
    dispatch(setIsPaymentButtonVisible(false));
    setIsPaymentContainerVisible(false);

    dispatch(setLink({ href: '/', isVisible: true, text: translations.tm530 }));
  };

  const initializePaymentForm = () => {
    intent.core.emit(intent.type.payment, { setIsPaymentContainerVisible, onPaymentSuccess });
    setDisabled(true);
  };

  const onClickCtaPay = (e) => {
    // TODO must check what happen when cta is clicked;
    console.log('clicked redirect', e.currentTarget);
    // this.track(customEventTypes.linkProvided);
    // this.elements.ctaButton.addEventListener('click', () => {
    //   this.track(customEventTypes.linkClicked);
    // });
    // this.mainContainer.innerHTML = '';
    // scroll.add();
    // this.closeSocket();
    // localStorage.setItem(CHAT_SEEN_KEY, true);
  };

  return (
    <>
      { isPaymentFormVisible && <PaymentScene onClose={ onClosePaymentForm } /> }

      { isCtaVisible
        && (
          <Link
            forwardedRef={ ctaAfterPayButton }
            text={ ctaText }
            onClick={ onClickCtaPay }
            href={ ctaHref }
          />
        ) }

      { isEmailFieldVisible && <EmailForm /> }

      { isPaymentButtonVisible && (
        <PaymentButton
          text={ translations.payButton }
          onClick={ initializePaymentForm }
          disabled={ disabled }
        />
      ) }
    </>
  );
};

export default LayoutFoot;
