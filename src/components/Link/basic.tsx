import { useAppSelector } from '../../hooks';
import { LinkProps } from '../../interfaces/component';
import { getConfig } from '../../store/slices/config';
import { basic as variant } from './variants';

export const Link = ({ text, href, onClick }: LinkProps) => {
  const { themeId: theme } = useAppSelector(getConfig);
  const { base } = variant({ theme });

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
