import { FC, ReactElement, MouseEvent } from 'react';
import { useAppSelector } from '../../hooks';
import { getConfig } from '../../store/slices/config';
import { BasicVariants, basic as variant } from './variants';

interface BtnProps extends BasicVariants {
  text?: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  e2e?: string;
}

export const Btn: FC<BtnProps> = ({ text = '', onClick, e2e }): ReactElement => {
  const { themeId: theme } = useAppSelector(getConfig);
  const { base } = variant({ theme });

  return (
    <button
      onClick={onClick}
      className={base()}
      type="button"
      data-e2e={e2e}
    >
      {text}
    </button>
  );
};

export default Btn;
