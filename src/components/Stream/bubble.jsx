import { object } from 'prop-types';
import { useAppSelector } from '@/hooks';

import { getConfig } from '@/store/slices/config';
import { streamBubble as variant } from './variants';

export const StreamBubble = ({ item = {} }) => {
  const { themeId: theme } = useAppSelector(getConfig);
  const { base } = variant({ theme, type: item.type });

  return (
    <div className={ base() }>{ item.msg }</div>
  );
};

StreamBubble.propTypes = {
  item: object.isRequired,
};

export default StreamBubble;
