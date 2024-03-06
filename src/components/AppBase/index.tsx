import { useAppDispatch } from '../../hooks';
import { AppProps } from '../../interfaces/component';
import { setConfig } from '../../store/slices/config';
import { setMeta } from '../../store/slices/meta';
import { LayoutBase, LayoutFoot,LayoutHead } from '../Layout';
import { StreamBase } from '../Stream';

export const AppBase = ({ config }: AppProps) => {
  const dispatch = useAppDispatch();
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
