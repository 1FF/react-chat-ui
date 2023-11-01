import { node } from 'prop-types';
import { useAppSelector } from '@/hooks';

import { getConfig } from '@/store/slices/config';
import { useEffect, useRef } from 'react';
import { layoutBase as variant } from './variants';

export const LayoutBase = ({ head, stream, foot }) => {
  const { themeId: theme, isPluginMode } = useAppSelector(getConfig);
  const containerRef = useRef(null);
  const { base, wrapper } = variant({ theme });

  useEffect(() => {
    containerRef.current.style.height = `${window.innerHeight}px`;
  }, []);

  return (
    <div ref={ containerRef } className={ base({ minimized: isPluginMode }) }>
      <div className={ wrapper() }>
        { head }
        { stream }
        { foot }
      </div>
    </div>
  );
};

LayoutBase.propTypes = {
  head: node.isRequired,
  stream: node.isRequired,
  foot: node.isRequired,
};

export default LayoutBase;
