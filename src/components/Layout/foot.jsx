import { useAppSelector } from '@/hooks';

import { layoutFoot as variant } from './variants';

export const LayoutFoot = () => {
  const { themeId: theme } = useAppSelector((state) => state.config);
  const { base } = variant({ theme });

  return (
    <div className={ base() }>test chat foot component</div>
  );
};

export default LayoutFoot;
