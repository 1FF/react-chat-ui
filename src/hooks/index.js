import chatbotPurpose from '@/config/purpose';
import { getChat } from '@/store/slices/chat';
import { getConfig } from '@/store/slices/config';
import { getEmailIntentions, getLinkIntentions, getPaymentIntentions, getResponseIntentions } from '@/store/slices/intentions';
import { getMeta } from '@/store/slices/meta';
import { useLayoutEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// DEV NOTE: We prep the react-redux hooks to be aliased with types when we switch to TS
export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector;

export const useWindowSize = () => {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
};

export const useHeadControls = () => {
  const { themeId: theme, closeVisible, purpose } = useAppSelector(getConfig);
  const { cid, systemType, marketing } = useAppSelector(getMeta);
  const extendedOptions = chatbotPurpose[purpose];

  return {
    theme,
    closeVisible: closeVisible && extendedOptions.close,
    cid,
    systemType,
    marketing
  };
};

export const useFootControls = () => {
  const { isFormVisible: isResponseFormVisible } = useAppSelector(getResponseIntentions);
  const { cid, systemType, marketing } = useAppSelector(getMeta);
  const { translations, purpose } = useAppSelector(getConfig);
  const { isVisible: isCtaVisible, text: ctaText, href: ctaHref } = useAppSelector(getLinkIntentions);
  const { isLoading } = useAppSelector(getChat);
  const { error: streamError } = useAppSelector(store => store.chat);
  const { isFormVisible: isEmailFormVisible, current, error: emailError } = useAppSelector(getEmailIntentions);
  const { isButtonVisible: isPaymentButtonVisible, isFormVisible: isPaymentFormVisible, error: paymentIntentError } = useAppSelector(getPaymentIntentions);
  const extendedOptions = chatbotPurpose[purpose];

  return {
    streamError,
    emailError,
    paymentIntentError,
    cid,
    systemType,
    marketing,
    translations,
    ctaText,
    ctaHref,
    isLoading,
    current,
    isEmailFormVisible: isEmailFormVisible && extendedOptions.email,
    isResponseFormVisible: isResponseFormVisible && extendedOptions.response,
    isPaymentButtonVisible: isPaymentButtonVisible && extendedOptions.payment,
    isPaymentFormVisible: isPaymentFormVisible && extendedOptions.payment,
    isCtaVisible: isCtaVisible && extendedOptions.cta,
  };
};
