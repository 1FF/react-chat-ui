import { useRef, useState } from 'react';
import intent from '@/services/intentions';
import { useAppDispatch, useFootControls } from '@/hooks';
import { ResponseForm, EmailForm } from '@/components/Form/';
import { setIsPaymentButtonVisible, setIsPaymentSuccessful, setLink, setPaymentFormVisibility, setPaymentIntentError } from '@/store/slices/intentions';
import { PaymentButton, Link } from '@/components/Payment';
import { addPredefinedAssistantMessage, getChat, setClosed } from '@/store/slices/chat';
import { appendHistory, setClosed } from '@/store/slices/chat';
import { roles } from '@/config/roles';
import { PaymentScene } from '@/components/Scenes/payment';
import { track } from '@/services/tracking';
import { customEvents } from '@/config/analytics';
import { Ellipsis } from '@/components/Stream/ellipsis';
import { LINK_CLICKED_KEY } from '@/config/env';

export const LayoutFoot = () => {
  const dispatch = useAppDispatch();
  const { isFormVisible: isResponseFormVisible } = useAppSelector(getResponseIntentions);
  const { cid, systemType, marketing } = useAppSelector(getMeta);
  const { translations } = useAppSelector(getConfig);
  const { isVisible: isCtaVisible, text: ctaText, href: ctaHref } = useAppSelector(getLinkIntentions);
  const { isStreaming, error: streamError, isLoading } = useAppSelector(getChat);
  const {
    isFormVisible: isEmailFormVisible,
    current,
    error: emailError
  } = useAppSelector(getEmailIntentions);
  const {
    isButtonVisible: isPaymentButtonVisible,
    isFormVisible: isPaymentFormVisible,
    error: paymentIntentError
  } = useAppSelector(getPaymentIntentions);
  const error = streamError || emailError || paymentIntentError;
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
    dispatch(addPredefinedAssistantMessage({ content: translations.tm1226 }));
    dispatch(setIsPaymentSuccessful(true));
    dispatch(setIsPaymentButtonVisible(false));
    dispatch(setLink({ href: '/', isVisible: true, text: footState.translations.ctaTextContent }));
    setIsPaymentContainerVisible(false);

    setTimeout(() => {
      ctaAfterPayButton.current.click();
    }, 7000);
  };

  const onError = (message) => {
    dispatch(setPaymentIntentError(message));
  };

  const initializePaymentForm = () => {
    intent.core.emit(intent.type.payment, { setIsPaymentContainerVisible, onPaymentSuccess, onError });
    setDisabled(true);
  };

  const onClickCta = (e) => {
    localStorage.setItem(LINK_CLICKED_KEY, e.currentTarget.href);
    track({
      eventType: customEvents.linkClicked,
      systemType: footState.systemType,
      utmParams: footState.marketing.lastUtmParams,
      customerUuid: footState.cid,
      email: footState.current
    });
    dispatch(setClosed());
  };

  return (
    <div className="tw--space-y-[11px] tw--pb-[11px]" data-e2e="chat-foot">
      { error && <div className="tw--pl-[35px] tw--text-[#ff0043] tw--font-medium">{ error }</div> }
      { footState.isPaymentFormVisible && <PaymentScene onClose={ onClosePaymentForm } /> }
      { footState.isLoading && <Ellipsis /> }
      { footState.isCtaVisible
        && (
          <Link
            forwardedRef={ ctaAfterPayButton }
            text={ footState.ctaText }
            onClick={ onClickCta }
            href={ footState.ctaHref }
            e2e="quiz-trigger-btn"
          />
        ) }

      { !isStreaming && isEmailFormVisible && <EmailForm /> }
      { !isStreaming && isResponseFormVisible && !isCtaVisible && <ResponseForm /> }

      { footState.isPaymentButtonVisible && (
        <PaymentButton
          text={ footState.translations.payButton }
          onClick={ initializePaymentForm }
          disabled={ disabled }
          e2e="payment-form-trigger-btn"
        />
      ) }
    </div>
  );
};

export default LayoutFoot;
