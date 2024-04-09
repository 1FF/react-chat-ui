import { useAppSelector, useWindowSize } from '../../hooks';
import { LayoutBaseProps } from '../../interfaces/component';
import { getConfig } from '../../store/slices/config';
import { MediaModal } from '../Media/modal';
import { layoutBase as variant } from './variants';

export const LayoutBase = ({ head, stream, foot }: LayoutBaseProps) => {
  const { themeId: theme, isPluginMode, mediaModal } = useAppSelector(getConfig);
  const { base, wrapper } = variant();
  const [width, height] = useWindowSize();

  return (
    <div
      data-e2e="base-container"
      style={{ height: `${height}px` }}
      className={base({ minimized: isPluginMode }) + ' ' + theme}
    >
      {mediaModal.isVisible && <MediaModal props={mediaModal} />}
      <div className={wrapper()}>
        {head}
        {stream}
        {foot}
      </div>
    </div>
  );
};

export default LayoutBase;
