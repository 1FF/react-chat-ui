import { RootState, AppDispatch } from '../store/index';
import chatbotPurpose, { ChatbotOptions } from '../config/purpose';
import { getConfig } from '../store/slices/config';
import { getEmailIntentions, getLinkIntentions, getPaymentIntentions, getResponseIntentions } from '../store/slices/intentions';
import { getMeta } from '../store/slices/meta';
import { useLayoutEffect, useState } from 'react';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

type DispatchFunc = () => AppDispatch;
export const useAppDispatch: DispatchFunc = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// TODO maybe this will be removed
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
  const { themeId: theme, close, purpose } = useAppSelector(getConfig);
  const { cid, systemType, marketing } = useAppSelector(getMeta);
  const extendedOptions = getPurpose(purpose);

  return {
    theme,
    closeVisible: close.visible && extendedOptions.close,
    cid,
    systemType,
    marketing
  };
};

