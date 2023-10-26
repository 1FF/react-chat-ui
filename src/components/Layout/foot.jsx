import { useRef, useState } from 'react';
import intent from '@/services/intentions';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { ResponseForm, EmailForm } from '@/components/Form/';
import { getEmailIntentions, getLinkIntentions, getPaymentIntentions, getResponseIntentions, setIsPaymentButtonVisible, setIsPaymentSuccessful, setLink, setPaymentFormVisibility } from '@/store/slices/intentions';
import { PaymentButton, Link } from '@/components/Payment';
import { appendHistory, getStream } from '@/store/slices/stream';
import { roles } from '@/config/roles';
import { PaymentScene } from '@/components/Scenes/payment';
import { getConfig } from '@/store/slices/config';
import { track } from '@/plugins/socketio';
import { customEvents } from '@/config/analytics';
import { getMeta } from '@/store/slices/meta';
import { Ellipsis } from '@/components/Stream/ellipsis';

export const LayoutFoot = () => {
  const dispatch = useAppDispatch();
  const { isFormVisible: isEmailFormVisible, currentEmail } = useAppSelector(getEmailIntentions);
  const { isFormVisible: isResponseFormVisible } = useAppSelector(getResponseIntentions);
  const { cid, systemType, marketing } = useAppSelector(getMeta);
  const { translations } = useAppSelector(getConfig);
  const { isPaymentButtonVisible, isPaymentFormVisible } = useAppSelector(getPaymentIntentions);
  const { isVisible: isCtaVisible, text: ctaText, href: ctaHref } = useAppSelector(getLinkIntentions);
  const { isLoading } = useAppSelector(getStream);

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

    // // in case the user does not click on take the quiz button
    setTimeout(() => {
      ctaAfterPayButton.current.click();
    }, 7000);
  };

  const initializePaymentForm = () => {
    intent.core.emit(intent.type.payment, { setIsPaymentContainerVisible, onPaymentSuccess });
    setDisabled(true);
  };

  const onClickCtaPay = (e) => {
    // TODO must check what happen when cta is clicked;
    console.log('clicked redirect', e.currentTarget);

    track({
      eventType: customEvents.linkClicked,
      systemType,
      utmParams: marketing.lastUtmParams,
      customerUuid: cid,
      email: currentEmail
    });

    // this.mainContainer.innerHTML = '';
    // scroll.add();
    // this.closeSocket();
    // localStorage.setItem(CHAT_SEEN_KEY, true);
  };

  return (
    <div>
      { isPaymentFormVisible && <PaymentScene onClose={ onClosePaymentForm } /> }
      { isLoading && <Ellipsis /> }
      { isCtaVisible
        && (
          <Link
            forwardedRef={ ctaAfterPayButton }
            text={ ctaText }
            onClick={ onClickCtaPay }
            href={ ctaHref }
          />
        ) }

      { isEmailFormVisible && <EmailForm /> }
      { isResponseFormVisible && <ResponseForm /> }

      { isPaymentButtonVisible && (
        <PaymentButton
          text={ translations.payButton }
          onClick={ initializePaymentForm }
          disabled={ disabled }
        />
      ) }
    </div>
  );
};

export default LayoutFoot;
