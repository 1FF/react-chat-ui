import { node } from 'prop-types';
import { useAppSelector } from '@/hooks';
import { getConfig } from '@/store/slices/config';
import overlay from './variants';

export const Overlay = ({ children }) => {
  const { themeId: theme } = useAppSelector(getConfig);
  const { base } = overlay({ theme });
  return (
    <div className={ base() }>
      { children }
    </div>
  );
};

Overlay.propTypes = { children: node.isRequired };

export default Overlay;
