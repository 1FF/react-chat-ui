import { useLayoutEffect, useState } from 'react';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import chatbotPurpose, { ChatbotOptions } from '../config/purpose';
import { AppDispatch,RootState } from '../store/index';
import { getConfig } from '../store/slices/config';
import { getEmailIntentions, getLinkIntentions, getPaymentIntentions, getResponseIntentions } from '../store/slices/intentions';
import { getMeta } from '../store/slices/meta';

type DispatchFunc = () => AppDispatch;
export const useAppDispatch: DispatchFunc = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const getPurpose = (purpose: keyof typeof chatbotPurpose): ChatbotOptions => {
  return chatbotPurpose[purpose];
}

export const useWindowSize = () => {
  const [size, setSize] = useState<number[]>([0, 0]);
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
  const extendedOptions = getPurpose(purpose);

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
  const { isStreaming, error: streamError, isLoading } = useAppSelector((store) => store.chat);
  const { isFormVisible: isEmailFormVisible, current, error: emailError } = useAppSelector(getEmailIntentions);
  const {
    isButtonVisible: isPaymentButtonVisible,
    isFormVisible: isPaymentFormVisible,
    error: paymentIntentError
  } = useAppSelector(getPaymentIntentions);
  const extendedOptions = getPurpose(purpose);
  const error = emailError || paymentIntentError || streamError;

  return {
    cid,
    ctaHref,
    ctaText,
    current,
    emailError,
    error,
    isCtaVisible: isCtaVisible && extendedOptions.cta,
    isEmailFormVisible: isEmailFormVisible && extendedOptions.email,
    isLoading,
    isPaymentButtonVisible: isPaymentButtonVisible && extendedOptions.payment,
    isPaymentFormVisible: isPaymentFormVisible && extendedOptions.payment,
    isResponseFormVisible: isResponseFormVisible && extendedOptions.response,
    isStreaming,
    marketing,
    paymentIntentError,
    streamError,
    systemType,
    translations,
  };
};
