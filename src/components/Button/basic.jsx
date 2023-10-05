import { string, func } from 'prop-types';
import { useAppSelector } from '@/hooks';
import { getConfig } from '@/store/slices/config';

import { basic as variant } from './variants';

export const Btn = ({ text = null, onClick = null }) => {
  const { themeId: theme } = useAppSelector(getConfig);
  const { base } = variant({ theme });

  return (
    <button
      onClick={ onClick }
      className={ base() }
      type="button"
    >
      { text }
    </button>
  );
};

Btn.propTypes = {
  text: string.isRequired,
  onClick: func,
};

export default Btn;
