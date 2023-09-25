import { node } from 'prop-types';
import { useAppSelector } from '@/hooks';

import { getConfig } from '@/store/slices/config';
import { layoutBase as variant } from './variants';

export const LayoutBase = ({ head, stream, foot }) => {
  const { themeId: theme } = useAppSelector(getConfig);
  const { base, wrapper } = variant({ theme });

  return (
    <div className={ base() }>
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
