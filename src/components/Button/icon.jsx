import { element, bool, func } from 'prop-types';
import { useAppSelector } from '@/hooks';
import { getConfig } from '@/store/slices/config';

import { icon as variant } from './variants';

// eslint-disable-next-line react/prop-types
export const IconBtn = ({ children, outlined = false, onClick = null }) => {
  const { themeId: theme } = useAppSelector(getConfig);
  const { base } = variant({ theme, outlined });

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
  children: element.isRequired, // DEV NOTE: this explicitly validates for a single child to be passed
  outlined: bool,
  onClick: func,
};

export default IconBtn;
