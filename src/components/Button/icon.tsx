import { IconProps } from '../../interfaces/component';
import { icon as variant } from './variants';

export const IconBtn = ({ children, color = 'main', outlined = false, onClick, e2e = null, disabled = false, }: IconProps) => {
  const { base } = variant({ outlined, color });

  return (
    <button
      onClick={onClick}
      className={base()}
      data-e2e={e2e}
      disabled={disabled}
      type="button"
    >
      {children}
    </button>
  );
};

export default IconBtn;
