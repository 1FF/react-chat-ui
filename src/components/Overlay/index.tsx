import { useAppSelector } from '../../hooks';
import { OverlayProps } from '../../interfaces/component';
import { getConfig } from '../../store/slices/config';
import overlay from './variants';

export const Overlay = ({ children }: OverlayProps) => {
  const { themeId: theme } = useAppSelector(getConfig);
  const { base } = overlay({ theme });
  return (
    <div className={base()}>
      {children}
    </div>
  );
};

export default Overlay;
