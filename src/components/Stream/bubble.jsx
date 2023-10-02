import { object } from 'prop-types';
import { useAppSelector, useAppDispatch } from '@/hooks';
import { getConfig } from '@/store/slices/config';
import { setUpstreamItem } from '@/store/slices/stream';
import { isNonEmptyArr } from '@/utils';

import { Button } from '@/components/Button';
import { flickerEffect, streamBubble as variant } from './variants';
import { replaceStringInCurlyBracketsWithStrong } from './modifiers';

export const StreamBubble = ({ item = {} }) => {
  const dispatch = useAppDispatch();
  const { themeId: theme } = useAppSelector(getConfig);
  const currentPointer = useAppSelector((state) => state.stream.history[state.stream.history.length - 1].id);
  const displayOptionList = isNonEmptyArr(item.options) && item.id === currentPointer;
  const { downstreamQueue } = useAppSelector(state => state.stream);
  const { base } = variant({ theme, type: item.role });
  const { base: baseFlicker } = flickerEffect({ isTyping: !!downstreamQueue && !item.id, theme });

  const setOption = (val) => {
    dispatch(setUpstreamItem(val));
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
      <span className={ baseFlicker() }>{ replaceStringInCurlyBracketsWithStrong(item.message) }</span>
      { displayOptionList && <div className="tw--flex tw--flex-col"><OptionList items={ item.options } /></div> }
    </div>
  );
};

StreamBubble.propTypes = {
  item: object.isRequired,
};

export default StreamBubble;
