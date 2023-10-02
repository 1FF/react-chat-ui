import { object } from 'prop-types';
import { useAppSelector, useAppDispatch } from '@/hooks';
import { getConfig } from '@/store/slices/config';
import { isNonEmptyArr } from '@/utils';
import { setQueueItem } from '@/store/slices/stream';

import { Button } from '@/components/Button';
import { streamBubble as variant } from './variants';
import Typewriter from '../Typewriter';

export const StreamBubble = ({ item = {} }) => {
  const dispatch = useAppDispatch();
  const { themeId: theme } = useAppSelector(getConfig);
  const { base } = variant({ theme, type: item.role });
  const hasOptions = isNonEmptyArr(item.options);
  const setOption = (val) => {
    dispatch(setQueueItem(val));
  };

  const OptionList = ({ items = [] }) => (
    items.map(({ id, label, value }) => (
      <Button
        key={ id } text={ label }
        onClick={ () => setOption(value) }
      />
    ))
  );

  return (
    <div className={ base() }>
      { /* DEVNOTE: need a flag to use the typewriter */ }
      <Typewriter text={ item.content } />
      { hasOptions && <div className="tw--flex tw--flex-col"><OptionList items={ item.options } /></div> }
    </div>
  );
};

StreamBubble.propTypes = {
  item: object.isRequired,
};

export default StreamBubble;
