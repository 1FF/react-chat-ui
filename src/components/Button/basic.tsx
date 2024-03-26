import { ButtonProps } from '../../interfaces/component';
import { basic as variant } from './variants';

export const Btn = ({ text = '', onClick, e2e }: ButtonProps) => {
  const { base } = variant();

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
