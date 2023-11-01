import { useRef, useState } from 'react';
import intent from '@/services/intentions';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { ResponseForm, EmailForm } from '@/components/Form/';
import { getEmailIntentions, getLinkIntentions, getPaymentIntentions, getResponseIntentions, setIsPaymentButtonVisible, setIsPaymentSuccessful, setLink, setPaymentFormVisibility, setPaymentIntentError } from '@/store/slices/intentions';
import { PaymentButton, Link } from '@/components/Payment';
import { appendHistory, getStream, setClosed } from '@/store/slices/chat';
import { roles } from '@/config/roles';
import { PaymentScene } from '@/components/Scenes/payment';
import { getConfig } from '@/store/slices/config';
import { track } from '@/services/tracking';
import { customEvents } from '@/config/analytics';
import { getMeta } from '@/store/slices/meta';
import { Ellipsis } from '@/components/Stream/ellipsis';
import { CHAT_SEEN_KEY } from '@/config/env';

export const LayoutFoot = () => {
  const dispatch = useAppDispatch();
  const { isFormVisible: isResponseFormVisible } = useAppSelector(getResponseIntentions);
  const { cid, systemType, marketing } = useAppSelector(getMeta);
  const { translations } = useAppSelector(getConfig);
  const { isVisible: isCtaVisible, text: ctaText, href: ctaHref } = useAppSelector(getLinkIntentions);
  const { isLoading } = useAppSelector(getStream);
  const { error: streamError } = useAppSelector(store => store.chat);
  const { isFormVisible: isEmailFormVisible, current, error: emailError } = useAppSelector(getEmailIntentions);
  const { isButtonVisible: isPaymentButtonVisible, isFormVisible: isPaymentFormVisible, error: paymentIntentError } = useAppSelector(getPaymentIntentions);
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
    dispatch(appendHistory({ role: roles.assistant, content: translations.tm1226 }));
    dispatch(setIsPaymentSuccessful(true));
    dispatch(setIsPaymentButtonVisible(false));
    dispatch(setLink({ href: '/', isVisible: true, text: translations.ctaTextContent }));
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

  const onClickCtaPay = () => {
    track({
      eventType: customEvents.linkClicked,
      systemType,
      utmParams: marketing.lastUtmParams,
      customerUuid: cid,
      email: current
    });

    dispatch(setClosed());
    localStorage.setItem(CHAT_SEEN_KEY, true);
  };

  return (
    <div>
      { error && <div className="tw--pl-[35px] tw--text-[#ff0043] tw--font-medium">{ error }</div> }
      { isPaymentFormVisible && <PaymentScene onClose={ onClosePaymentForm } /> }
      { isLoading && <Ellipsis /> }
      { isCtaVisible
        && (
          <Link
            forwardedRef={ ctaAfterPayButton }
            text={ ctaText }
            onClick={ onClickCtaPay }
            href={ ctaHref }
            e2e="quiz-trigger-btn"
          />
        ) }

      { isEmailFormVisible && <EmailForm /> }
      { isResponseFormVisible && <ResponseForm /> }

      { isPaymentButtonVisible && (
        <PaymentButton
          text={ translations.payButton }
          onClick={ initializePaymentForm }
          disabled={ disabled }
          e2e="payment-form-trigger-btn"
        />
      ) }
    </div>
  );
};

export default LayoutFoot;
