import { object } from 'prop-types';
import { useAppDispatch } from '@/hooks';

import { setConfig, setTheme } from '@/store/slices/config';
import { setMeta } from '@/store/slices/meta';

import { LayoutBase, LayoutHead, LayoutFoot } from '@/components/Layout';
import { StreamBase } from '@/components/Stream';

export const AppBase = ({ config = {} }) => {
  const dispatch = useAppDispatch();
  const setUiTheme = (theme = null) => dispatch(setTheme(theme));

  // Set defaults
  dispatch(setMeta(config.meta));
  dispatch(setConfig(config.app));

  return (
    <>
      <div className="tw--fixed tw--flex tw--gap-2 tw--p-3 tw--bg-black tw--text-white">
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

      <LayoutBase
        head={ <LayoutHead /> }
        stream={ <StreamBase /> }
        foot={ <LayoutFoot /> }
      />
    </>
  );
};

AppBase.propTypes = {
  config: object.isRequired,
};

export default AppBase;
