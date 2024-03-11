import { useLayoutEffect, useState } from 'react';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import { AppDispatch, RootState } from '../store/index';
import { getConfig } from '../store/slices/config';
import { getMeta } from '../store/slices/meta';

type DispatchFunc = () => AppDispatch;
export const useAppDispatch: DispatchFunc = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

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
  const { themeId: theme, close } = useAppSelector(getConfig);
  const { cid, systemType, marketing } = useAppSelector(getMeta);

  return {
    theme,
    closeVisible: close.visible,
    cid,
    systemType,
    marketing
  };
};
