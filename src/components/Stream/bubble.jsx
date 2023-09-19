import { object } from 'prop-types';
import { useAppSelector } from '@/hooks';
import { roles } from '@/config';
import { isNonEmptyArr } from '../../utils';

import { streamBubble as variant } from './variants';

const OptionList = ({ items = [] }) => (
  items.map(({ id, label }) => (
    <button
      key={ id } type="button"
      className="tw--bg-light-seraph tw--p-5 tw--mb-1"
    >
      { label }
    </button>
  ))
);

export const StreamBubble = ({ item = {} }) => {
  const { themeId: theme } = useAppSelector((state) => state.config);
  const { base } = variant({ theme, type: roles[item.role] });
  const hasOptions = isNonEmptyArr(item.options);

  return (
    <div className={ base() }>
      { item.content }
      { hasOptions && <div className="tw--flex tw--flex-col"><OptionList items={ item.options } /></div> }
    </div>
  );
};

StreamBubble.propTypes = {
  item: object.isRequired,
};

export default StreamBubble;
