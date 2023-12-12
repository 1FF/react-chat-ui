import { LinkProps } from '../../interfaces/component';
import { basic as variant } from './variants';

export const Link = ({ text, href, onClick }: LinkProps) => {
  const { base } = variant();

  return (
    <a
      href={href}
      onClick={onClick}
      className={base()}
    >
      {text}
    </a>
  );
};

export default Link;
