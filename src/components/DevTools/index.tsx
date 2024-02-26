import { useAppDispatch, useAppSelector } from '../../hooks';
import { getConfig, setTheme, togglePluginMode } from '../../store/slices/config';
import { Toggler } from '../Toggle';
import { wrapper } from './variants';

export const DevTools = () => {
  const dispatch = useAppDispatch();
  const { enableDevTools, themeId, isPluginMode } = useAppSelector(getConfig);
  // DEV NOTE: when more than 2 themes are available the toggler must be replaced by another component
  const setUiTheme = () => dispatch(setTheme(themeId === 'light' ? 'dark' : 'light'));
  const { base } = wrapper({ hidden: !enableDevTools });

  return (
    <div className={ base() }>
      <Toggler
        title="Theme" on={ themeId === 'light' }
        onToggle={ setUiTheme }
      />
      <Toggler
        title="Plugin mode" on={ isPluginMode }
        onToggle={ () => dispatch(togglePluginMode()) }
      />
    </div>
  );
};

export default DevTools;
