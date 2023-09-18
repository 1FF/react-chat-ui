import { object } from 'prop-types';
import { useAppSelector } from '@/hooks';

import { streamBubble as variant } from './variants';

export const StreamBubble = ({ item = {} }) => {
  const { themeId: theme } = useAppSelector((state) => state.config);
  const { base } = variant({ theme, type: item.type });

  return (
    <div className={ base() }>{ item.msg }</div>
  );
};

StreamBubble.propTypes = {
  item: object.isRequired,
};

export default StreamBubble;
