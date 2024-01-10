import { useAppSelector, useWindowSize } from '../../hooks';

import { getConfig } from '../../store/slices/config';
import { layoutBase as variant } from './variants';

type LayoutBaseProps = {
  head: React.ReactNode;
  stream: React.ReactNode;
  foot: React.ReactNode;
}

export const LayoutBase: React.FC<LayoutBaseProps> = ({ head, stream, foot }) => {
  const { themeId: theme, isPluginMode } = useAppSelector(getConfig);
  const { base, wrapper } = variant({ theme });
  const [_, height] = useWindowSize();

  return (
    <div
      data-e2e="base-container"
      style={{ height: `${height}px` }}
      className={base({ minimized: isPluginMode })}
    >
      <div className={wrapper()}>
        {head}
        {stream}
        {foot}
      </div>
    </div>
  );
};

export default LayoutBase;
