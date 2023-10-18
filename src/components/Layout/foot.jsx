import { useDispatch } from 'react-redux';
import { useRef, useState } from 'react';
import intent from '@/services/intentions';
import { useAppSelector } from '@/hooks';
import { EmailForm } from '@/components/Form/email';
import { setIsPaymentButtonVisible, setIsPaymentSuccessful, setPaymentFormVisibility } from '@/store/slices/intentions';
import { PaymentButton, PaymentHead, CloseButton, PaymentFooter, Anchor, PaymentLoader } from '@/components/Payment';
import { appendHistory } from '@/store/slices/stream';
import { roles } from '@/config/roles';
import { Overlay } from '@/components/Overlay';

export const LayoutFoot = () => {
  const dispatch = useDispatch();
  const { isEmailFieldVisible } = useAppSelector(state => state.intentions.email);
  const { displayPlanPrice } = useAppSelector(state => state.meta.pd);
  const { translations } = useAppSelector(state => state.config);
  const { isPaymentButtonVisible, isPaymentFormVisible, isPaymentSuccessful } = useAppSelector(state => state.intentions.payment);
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
  };

  const initializePaymentForm = () => {
    intent.core.emit(intent.type.payment, { setIsPaymentContainerVisible, onPaymentSuccess });
    setDisabled(true);
  };

  const onClickCtaPay = (e) => {
    // TODO must check what happen when cta is clicked;
    console.log('clicked redirect', e.currentTarget);
  };

  return (
    <>
      { isPaymentFormVisible && (
        <div className="tw--absolute tw--bg-dark-whisper tw--top-0 tw--left-0 tw--w-full tw--h-screen tw--flex tw--flex-col tw--justify-center tw--items-center tw--px-5 tw--z-50">
          <div
            id="chat-payment-view"
            className="light-pink-blue tw--max-w-[500px] tw--bg-white tw--w-full tw--min-h-[400px] tw--relative tw--rounded-lg tw--flex tw--flex-col tw--p-7"
          >
            <Overlay><PaymentLoader texts={ translations.loaderTexts } title={ translations.tm1224 } /></Overlay>
            <CloseButton onClick={ onClosePaymentForm } />
            <div id="primer-form-container" className="tw--w-full h-full">
              <PaymentHead config={ { price: displayPlanPrice, period: translations.billingFrequencyTmsg } } />
            </div>
            <PaymentFooter />
          </div>
        </div>
      ) }

      { isPaymentSuccessful
        && (
          <Anchor
            forwardedRef={ ctaAfterPayButton } text={ translations.tm530 }
            onClick={ onClickCtaPay }
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
