/* eslint-disable no-unused-vars */
import { object } from 'prop-types';
import { useAppDispatch } from '@/hooks';

import { setConfig, setDevToolsStatus } from '@/store/slices/config';
import { setMeta } from '@/store/slices/meta';

import { LayoutBase, LayoutHead, LayoutFoot } from '@/components/Layout';
import { StreamBase } from '@/components/Stream';
import { DevTools } from '@/components/DevTools';

export const AppBase = ({ config = {} }) => {
  const dispatch = useAppDispatch();

  // Set defaults
  dispatch(setMeta(config.meta));
  dispatch(setConfig(config.app));
  dispatch(setDevToolsStatus(false)); // DEV Note: set this in a global plugin process.env.NODE_ENV === 'development'

  return (
    <>
      <DevTools />

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
