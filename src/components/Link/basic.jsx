import { string, func } from 'prop-types';
import { useAppSelector } from '@/hooks';
import { getConfig } from '@/store/slices/config';

import { basic as variant } from './variants';

export const Link = ({ text = null, href = null, onClick = null }) => {
  const { themeId: theme } = useAppSelector(getConfig);
  const { base } = variant({ theme });

  return (
    <a
      href={ href }
      onClick={ onClick }
      className={ base() }
    >
      { text }
    </a>
  );
};

Link.propTypes = {
  href: string.isRequired,
  text: string.isRequired,
  onClick: func,
};

export default Link;
