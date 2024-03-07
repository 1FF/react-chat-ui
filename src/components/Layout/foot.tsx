import { useRef, useState } from 'react';

import { PaymentScene } from '../../components/Scenes/payment';
import { Ellipsis } from '../../components/Stream/ellipsis';
import { AllEvents } from '../../config/enums';
import { LINK_CLICKED_KEY } from '../../config/env';
import { useAppDispatch, useFootControls } from '../../hooks';
import intent from '../../services/intentions';
import { track } from '../../services/tracking';
import { addPredefinedAssistantMessage, setClosed } from '../../store/slices/chat';
import { setIsPaymentButtonVisible, setIsPaymentSuccessful, setLink, setPaymentFormVisibility, setPaymentIntentError } from '../../store/slices/intentions';
import { EmailForm,ResponseForm } from '../Form/';
import { Link,PaymentButton } from '../Payment';

export const LayoutFoot = () => {
  const dispatch = useAppDispatch();
  const footState = useFootControls();
  const ctaAfterPayButton = useRef<HTMLAnchorElement | null>(null);
  const [disabled, setDisabled] = useState(false);

  const setIsPaymentContainerVisible = (isVisible: boolean): void => {
    dispatch(setPaymentFormVisibility(isVisible));
  };

  const onClosePaymentForm = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.disabled = true;
    intent.core.emit(intent.type.destroy);
    setIsPaymentContainerVisible(false);
    setDisabled(false);
  };

  const onPaymentSuccess = () => {
    dispatch(addPredefinedAssistantMessage({ content: footState.translations.tm1226 }));
    dispatch(setIsPaymentSuccessful(true));
    dispatch(setIsPaymentButtonVisible(false));
    dispatch(setLink({ href: '/', isVisible: true, text: footState.translations.ctaTextContent }));
    setIsPaymentContainerVisible(false);

    setTimeout(() => {
      if (ctaAfterPayButton.current) {
        ctaAfterPayButton.current.click();
      }
    }, 7000);
  };

  const onError = (message: string): void => {
    dispatch(setPaymentIntentError(message));
  };

  const initializePaymentForm = () => {
    intent.core.emit(intent.type.payment, { setIsPaymentContainerVisible, onPaymentSuccess, onError });
    setDisabled(true);
  };

  const onClickCta = (e: React.MouseEvent<HTMLAnchorElement>) => {
    localStorage.setItem(LINK_CLICKED_KEY, e.currentTarget.href);
    track({
      eventType: AllEvents.linkClicked,
      systemType: footState.systemType,
      utmParams: footState.marketing.lastUtmParams,
      customerUuid: footState.cid,
      email: footState.current
    });
    dispatch(setClosed());
  };

  return (
    <div className="tw--space-y-[11px] tw--pb-[11px]" data-e2e="chat-foot">
      {footState.error && <div className="tw--pl-[35px] tw--text-[#ff0043] tw--font-medium">{footState.error}</div>}
      {footState.isPaymentFormVisible && <PaymentScene onClose={onClosePaymentForm} />}
      {footState.isLoading && <Ellipsis />}
      {footState.isCtaVisible
        && (
          <Link
            ref={ctaAfterPayButton}
            text={footState.ctaText}
            onClick={onClickCta}
            href={footState.ctaHref}
            e2e="quiz-trigger-btn"
          />
        )}

      {!footState.isStreaming && footState.isEmailFormVisible && <EmailForm />}
      {!footState.isStreaming && footState.isResponseFormVisible && !footState.isCtaVisible && <ResponseForm />}

      {footState.isPaymentButtonVisible && (
        <PaymentButton
          text={footState.translations.payButton}
          onClick={initializePaymentForm}
          disabled={disabled}
          e2e="payment-form-trigger-btn"
        />
      )}
    </div>
  );
};

export default LayoutFoot;
