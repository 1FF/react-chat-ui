import { ButtonProps } from '../../interfaces/component';
import { useAppSelector } from '../../hooks';
import { getConfig } from '../../store/slices/config';
import { basic as variant } from './variants';

export const Btn = ({ text = '', onClick, e2e }: ButtonProps) => {
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
