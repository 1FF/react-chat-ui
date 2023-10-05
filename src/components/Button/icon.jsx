import { func, element } from 'prop-types';
import { useAppSelector } from '@/hooks';
import { getConfig } from '@/store/slices/config';

import { basic as variant } from './variants';

// eslint-disable-next-line react/prop-types
export const IconBtn = ({ onClick = null, children }) => {
  const { themeId: theme } = useAppSelector(getConfig);
  const { base } = variant({ theme });

  return (
    <button
      onClick={ onClick }
      className={ base() }
      type="button"
    >
      { children }
    </button>
  );
};

IconBtn.propTypes = {
  onClick: func,
  children: element.isRequired, // DEV NOTE: this explicitly validates for a single child to be passed
};

export default IconBtn;
