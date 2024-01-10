import { useAppSelector } from '../../hooks';
import { getConfig } from '../../store/slices/config';
import overlay from './variants';

export const Overlay = ({ children }: { children: React.ReactNode }) => {
  const { themeId: theme } = useAppSelector(getConfig);
  const { base } = overlay({ theme });
  return (
    <div className={base()}>
      {children}
    </div>
  );
};

export default Overlay;
