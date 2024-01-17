import { useAppDispatch } from '../../hooks';

import { setConfig } from '../../store/slices/config';
import { setMeta } from '../../store/slices/meta';

import { LayoutBase, LayoutHead, LayoutFoot } from '../Layout';
import { StreamBase } from '../Stream';
import { ConfigState, MetaState } from '../../interfaces/index';

export const AppBase = ({ config }: { config: { app: ConfigState, meta: MetaState } }) => {
  const dispatch = useAppDispatch();

  // Set defaults
  dispatch(setMeta(config.meta));
  dispatch(setConfig(config.app));

  return (
    <LayoutBase
      head={<LayoutHead />}
      stream={<StreamBase />}
      foot={<LayoutFoot />}
    />
  );
};

export default AppBase;
