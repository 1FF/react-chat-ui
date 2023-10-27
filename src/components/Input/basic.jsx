import { string, func, bool } from 'prop-types';
import { useAppSelector } from '@/hooks';
import { getConfig } from '@/store/slices/config';

import { basic as variant } from './variants';

export const Input = ({ type, ref = null, placeholder = '', onChange = null, onKeyUp = null, isLoading = false, value = null, e2e = null }) => {
  const { themeId: theme } = useAppSelector(getConfig);
  const { base, input, loader, spin } = variant({ theme });

  return (
    <div className={ base() }>
      <input
        className={ input() }
        type={ type }
        disabled={ isLoading }
        ref={ ref }
        placeholder={ placeholder }
        onChange={ onChange }
        onKeyUp={ onKeyUp }
        value={ value }
        data-e2e={ e2e }
      />

      { isLoading && (
        <span className={ loader() }>
          <span className={ spin() } />
        </span>
      ) }
    </div>
  );
};

Input.propTypes = {
  type: string.isRequired,
  ref: string,
  value: string,
  placeholder: string,
  onChange: func,
  onKeyUp: func,
  isLoading: bool,
  e2e: string,
};

export default Input;
