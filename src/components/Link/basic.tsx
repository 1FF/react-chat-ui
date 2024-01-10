import React from 'react';
import { useAppSelector } from '../../hooks';
import { getConfig } from '../../store/slices/config';

import { basic as variant } from './variants';

type LinkProps = {
  text: string,
  href: string,
  onClick: (e: React.MouseEvent<HTMLAnchorElement>) => void,
};

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
