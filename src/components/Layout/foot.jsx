import { useAppSelector } from '@/hooks';

import { getConfig } from '@/store/slices/config';
import { layoutFoot as variant } from './variants';

export const LayoutFoot = () => {
  const { themeId: theme } = useAppSelector(getConfig);
  const { base } = variant({ theme });

  return (
    <div className={ base() }>test chat foot component</div>
  );
};

export default LayoutFoot;
