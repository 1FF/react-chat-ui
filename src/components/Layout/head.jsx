import { useAppSelector } from '@/hooks';

import { Profile } from '@/components/Profile';
import { getConfig } from '@/store/slices/config';
import { layoutHead as variant } from './variants';

export const LayoutHead = () => {
  const { themeId: theme } = useAppSelector(getConfig);
  const { base } = variant({ theme });

  return (
    <div className={ base() }>
      <Profile />
    </div>
  );
};

export default LayoutHead;
