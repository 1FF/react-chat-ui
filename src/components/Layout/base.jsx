import { node } from 'prop-types';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector, useWindowSize } from '@/hooks';

import { getConfig } from '@/store/slices/config';
import { mustHideChat, setClosed } from '@/store/slices/chat';
import { layoutBase as variant } from './variants';

export const LayoutBase = ({ head, stream, foot }) => {
  const dispatch = useAppDispatch();
  const redirectLink = useAppSelector(mustHideChat);
  const { themeId: theme, isPluginMode } = useAppSelector(getConfig);
  const { base, wrapper } = variant({ theme });
  const [_, height] = useWindowSize();

  useEffect(() => {
    if (redirectLink) {
      window.location.href = redirectLink;
      dispatch(setClosed(true));
    }
  });

  return (
    <div
      data-e2e="base-container"
      style={ { height: `${height}px` } }
      className={ base({ minimized: isPluginMode }) }
    >
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
