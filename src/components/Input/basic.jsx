import { string, func, bool } from 'prop-types';
import { useAppSelector } from '@/hooks';
import { getConfig } from '@/store/slices/config';

import { basic as variant } from './variants';

export const Input = ({ type, ref = null, placeholder = '', onChange = null, onKeyUp = null, isLoading = false }) => {
  const { themeId: theme } = useAppSelector(getConfig);
  const { base, input, loader } = variant({ theme });

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
      />

      { isLoading && (
        <div className={ loader() }>
          spinner
        </div> /* DEV Note: will be added with an icon component  */
      ) }
    </div>
  );
};

Input.propTypes = {
  type: string.isRequired,
  ref: string,
  placeholder: string,
  onChange: func,
  onKeyUp: func,
  isLoading: bool,
};

export default Input;
