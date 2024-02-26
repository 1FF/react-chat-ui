import { LayoutBaseProps } from '../../interfaces/component';
import { useAppSelector, useWindowSize } from '../../hooks';

import { getConfig } from '../../store/slices/config';
import { layoutBase as variant } from './variants';

export const LayoutBase = ({ head, stream, foot }: LayoutBaseProps) => {
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
