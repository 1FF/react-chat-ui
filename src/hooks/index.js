import { useDispatch, useSelector } from 'react-redux';

// DEV NOTE: We prep the react-redux hooks to be aliased with types when we switch to TS
export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector;
