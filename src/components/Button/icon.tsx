import React, { MouseEvent } from 'react';
import { useAppSelector } from '../../hooks';
import { getConfig } from '../../store/slices/config';

import { BasicVariants, icon as variant } from './variants';

interface IconProps extends BasicVariants {
  children: React.ReactNode,
  outlined?: boolean,
  onClick: (event: MouseEvent<HTMLButtonElement>) => void,
  e2e?: null | string,
  disabled?: boolean
}

export const IconBtn: React.FC<IconProps> = ({ children, outlined = false, onClick, e2e = null, disabled = false }) => {
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
