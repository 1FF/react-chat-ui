import { string, func } from 'prop-types';
import { useAppSelector } from '@/hooks';

import { basic as variant } from './variants';

export const Button = ({ text = null, onClick = null }) => {
  const { themeId: theme } = useAppSelector((state) => state.config);
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

Button.propTypes = {
  text: string.isRequired,
  onClick: func,
};

export default Button;
