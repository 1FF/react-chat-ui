import { MouseEvent, forwardRef } from 'react';
import payment from './variants';

type LinkProps = {
  href: string,
  text: string,
  onClick?: (event: MouseEvent<HTMLAnchorElement>) => void,
  e2e?: string
};

export const Link = forwardRef<HTMLAnchorElement, LinkProps>((props, ref) => {
  const { link } = payment();
  const { href, text, onClick, e2e = null } = props;

  return (
    <a
      className={link()}
      data-e2e={e2e}
      href={href}
      onClick={onClick}
      ref={ref}
    >
      {text}
    </a>
  );
});

export default Link;
