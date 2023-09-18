import { useAppSelector } from '@/hooks';

import { Profile } from '@/components/Profile';
import { layoutHead as variant } from './variants';

export const LayoutHead = () => {
  const { themeId: theme } = useAppSelector((state) => state.config);
  const { base } = variant({ theme });

  return (
    <div className={ base() }>
      <Profile />
    </div>
  );
};

export default LayoutHead;
