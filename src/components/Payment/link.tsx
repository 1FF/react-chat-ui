import { forwardRef } from 'react';

import { LinkProps } from '../../interfaces/component';
import payment from './variants';

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

Link.displayName = 'Link'; 
export default Link;
