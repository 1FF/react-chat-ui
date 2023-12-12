import { OverlayProps } from '../../interfaces/component';
import overlay from './variants';

export const Overlay = ({ children }: OverlayProps) => {
  const { base } = overlay();
  return (
    <div className={base()}>
      {children}
    </div>
  );
};

export default Overlay;
