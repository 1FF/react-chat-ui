import { useAppDispatch, useAppSelector } from '@/hooks';
import { getConfig, setTheme } from '@/store/slices/config';
import { wrapper } from './variants';

export const DevTools = () => {
  const dispatch = useAppDispatch();
  const setUiTheme = (theme = null) => dispatch(setTheme(theme));
  const { enableDevTools } = useAppSelector(getConfig);
  const { base } = wrapper({ hidden: !enableDevTools });

  return (
    <div className={ base() }>
      <button
        type="button"
        onClick={ () => setUiTheme('light') }
      >
        Light
      </button>

      <button
        type="button"
        onClick={ () => setUiTheme('dark') }
      >
        Dark
      </button>
    </div>
  );
};

export default DevTools;
