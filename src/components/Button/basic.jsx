import { string, func } from 'prop-types';
import { useAppSelector } from '@/hooks';
import { getConfig } from '@/store/slices/config';

import { basic as variant } from './variants';

export const Btn = ({ text = null, onClick = null, e2e = null }) => {
  const { themeId: theme } = useAppSelector(getConfig);
  const { base } = variant({ theme });

  return (
    <button
      onClick={ onClick }
      className={ base() }
      type="button"
      data-e2e={ e2e }
    >
      { text }
    </button>
  );
};

Btn.propTypes = {
  text: string.isRequired,
  onClick: func,
  e2e: string,
};

export default Btn;
