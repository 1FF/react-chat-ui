import { object } from 'prop-types';
import { useAppSelector } from '@/hooks';

import { getConfig } from '@/store/slices/config';
import { StreamBubble } from './bubble';
import { streamRow as variant } from './variants';

export const StreamRow = ({ item = {} }) => {
  const { themeId: theme } = useAppSelector(getConfig);
  const { base } = variant({ theme });

  return (
    <div className={ base() } data-e2e="history-item">
      <StreamBubble item={ item } />
    </div>
  );
};

StreamRow.propTypes = {
  item: object.isRequired,
};

export default StreamRow;
