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
