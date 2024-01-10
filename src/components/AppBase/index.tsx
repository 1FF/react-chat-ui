import { useAppDispatch } from '../../hooks';

import { setConfig } from '../../store/slices/config';
import { setMeta } from '../../store/slices/meta';

import { LayoutBase, LayoutHead, LayoutFoot } from '../Layout';
import { StreamBase } from '../Stream';


//TODO: define each prop into an interface or type(if we dont want to extend the interface additionally)
interface AppConfig {
  app: object;
  meta: object;
  theme: object;
}

interface AppBaseProps {
  config: AppConfig;
}

export const AppBase: React.FC<AppBaseProps> = ({ config }) => {
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
