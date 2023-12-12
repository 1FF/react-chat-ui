import { forwardRef } from 'react';

import { BasicInputProps } from '../../interfaces/component';
import { basic as variant } from './variants';

export const Input = forwardRef<HTMLInputElement, BasicInputProps>((props, ref) => {
  const {
    disabled,
    e2e,
    isLoading,
    onChange,
    onKeyUp,
    placeholder,
    type,
    value,
  } = props;

  const { base, input, loader, spin } = variant();

  return (
    <div className={base()}>
      <input
        className={input()}
        data-e2e={e2e}
        disabled={isLoading || disabled}
        onChange={onChange}
        onKeyUp={onKeyUp}
        placeholder={placeholder}
        ref={ref}
        type={type}
        value={value}
      />

      {isLoading && (
        <span className={loader()}>
          <span className={spin()} />
        </span>
      )}
    </div>
  );
});

Input.displayName = 'Input';

export default Input;
