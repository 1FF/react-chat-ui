import { object } from 'prop-types';
import { useAppSelector } from '@/hooks';

import { StreamBubble } from './bubble';
import { streamRow as variant } from './variants';

export const StreamRow = ({ item = {} }) => {
  const { themeId: theme } = useAppSelector((state) => state.config);
  const { base } = variant({ theme });

  return (
    <div className={ base() }>
      <StreamBubble item={ item } />
    </div>
  );
};

StreamRow.propTypes = {
  item: object.isRequired,
};

export default StreamRow;
