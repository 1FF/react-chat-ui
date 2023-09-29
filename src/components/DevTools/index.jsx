import { useAppDispatch, useAppSelector } from '@/hooks';
import { getConfig, setTheme, togglePluginMode } from '@/store/slices/config';
import { wrapper } from './variants';
import Toggler from '../Toggle';

export const DevTools = () => {
  const dispatch = useAppDispatch();
  const { enableDevTools, themeId, isPluginMode } = useAppSelector(getConfig);
  const setUiTheme = () => dispatch(setTheme(themeId === 'light' ? 'dark' : 'light'));
  const { base } = wrapper({ hidden: !enableDevTools });

  return (
    <div className={ base() }>
      <Toggler
        title="Theme" on={ themeId === 'light' }
        toggle={ setUiTheme }
      />
      <Toggler
        title="Plugin mode" on={ isPluginMode }
        toggle={ () => dispatch(togglePluginMode()) }
      />
    </div>
  );
};

export default DevTools;
