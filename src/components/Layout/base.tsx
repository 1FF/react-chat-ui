import { useAppSelector, useWindowSize } from '../../hooks';
import { LayoutBaseProps } from '../../interfaces/component';
import { getConfig } from '../../store/slices/config';
import { layoutBase as variant } from './variants';

export const LayoutBase = ({ head, stream, foot }: LayoutBaseProps) => {
  const { themeId: theme, isPluginMode } = useAppSelector(getConfig);
  const { base, wrapper } = variant();
  const data = useWindowSize();

  return (
    <div
      data-e2e="base-container"
      style={{ height: `${data[1]}px` }}
      className={base({ minimized: isPluginMode }) + ' ' + theme }
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
