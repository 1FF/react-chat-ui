import { string, func, bool, object } from 'prop-types';
import { useAppSelector } from '@/hooks';
import { getConfig } from '@/store/slices/config';

import { basic as variant } from './variants';

export const Input = ({ type, passRef = null, placeholder = '', onChange = null, onKeyUp = null, isLoading = false, value = null, e2e = null, disabled = false }) => {
  const { themeId: theme } = useAppSelector(getConfig);
  const { base, input, loader, spin } = variant({ theme });

  return (
    <div className={ base() }>
      <input
        className={ input() }
        data-e2e={ e2e }
        disabled={ isLoading || disabled }
        onChange={ onChange }
        onKeyUp={ onKeyUp }
        placeholder={ placeholder }
        ref={ passRef }
        type={ type }
        value={ value }
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
  passRef: object,
  value: string,
  placeholder: string,
  onChange: func,
  onKeyUp: func,
  isLoading: bool,
  disabled: bool,
  e2e: string,
};

export default Input;
