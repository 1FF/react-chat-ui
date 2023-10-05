import { func } from 'prop-types';
import { useAppSelector } from '@/hooks';
import { getConfig } from '@/store/slices/config';

import { basic as variant } from './variants';

export const IconBtn = ({ onClick = null }) => {
  const { themeId: theme } = useAppSelector(getConfig);
  const { base } = variant({ theme });

  return (
    <button
      onClick={ onClick }
      className={ base() }
      type="button"
    >
      { /* { children } */ }
    </button>
  );
};

IconBtn.propTypes = {
  onClick: func,
};

export default IconBtn;
