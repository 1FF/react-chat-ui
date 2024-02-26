import { useAppSelector } from '../../hooks';
import { getConfig } from '../../store/slices/config';

import { icon as variant } from './variants';
import { IconProps } from '../../interfaces/component';

export const IconBtn = ({ children, outlined = false, onClick, e2e = null, disabled = false }: IconProps) => {
  const { themeId: theme } = useAppSelector(getConfig);
  const { base } = variant({ theme, outlined });

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
