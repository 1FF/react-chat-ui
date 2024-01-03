/* eslint-disable no-unused-vars */
import { object } from 'prop-types';
import { useAppDispatch } from '@/hooks';

import { setConfig } from '@/store/slices/config';
import { setMeta } from '@/store/slices/meta';

import { LayoutBase, LayoutHead, LayoutFoot } from '@/components/Layout';
import { StreamBase } from '@/components/Stream';

export const AppBase = ({ config = {} }) => {
  const dispatch = useAppDispatch();

  // Set defaults
  dispatch(setMeta(config.meta));
  dispatch(setConfig(config.app));

  return (
    <LayoutBase
      head={ <LayoutHead /> }
      stream={ <StreamBase /> }
      foot={ <LayoutFoot /> }
    />
  );
};

AppBase.propTypes = {
  config: object.isRequired,
};

export default AppBase;
