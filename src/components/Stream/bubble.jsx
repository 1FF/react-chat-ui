import { object } from 'prop-types';
import { useAppSelector, useAppDispatch } from '@/hooks';
import { getConfig } from '@/store/slices/config';
import { setUpstreamItem } from '@/store/slices/stream';
import { isNonEmptyArr } from '@/utils';

import { Btn, IconBtn } from '@/components/Button';
import { flickerEffect, streamBubble as variant } from './variants';
import { replaceStringInCurlyBracketsWithStrong } from './modifiers';

export const StreamBubble = ({ item = {} }) => {
  const dispatch = useAppDispatch();
  const { themeId: theme } = useAppSelector(getConfig);
  const { downstreamQueue } = useAppSelector(state => state.stream);
  const { base, action } = variant({ theme, type: item.role });
  const { base: baseFlicker } = flickerEffect({ isTyping: !!downstreamQueue && !item.id, theme });

  const currentPointer = useAppSelector((state) => state.stream.history[state.stream.history.length - 1].id);
  const displayOptionList = isNonEmptyArr(item.options) && item.id === currentPointer;
  const displayActionButton = false; // DEV NOTE: get from store state

  const setOption = (val) => {
    dispatch(setUpstreamItem(val));
  };

  const OptionList = ({ items = [] }) => (
    items.map(({ id, label, value }) => (
      <div key={ id } className="tw--my-2">
        <Btn text={ label } onClick={ () => setOption(value) } />
      </div>
    ))
  );

  return (
    <div className={ base() }>
      <span className={ baseFlicker() }>{ replaceStringInCurlyBracketsWithStrong(item.message) }</span>

      { displayOptionList && (
        <div className="tw--flex tw--flex-col">
          <OptionList items={ item.options } />
        </div>
      ) }

      { displayActionButton && (
        <div className={ action() }>
          <IconBtn outlined>
            <svg
              fill="currentColor" viewBox="0 0 24 24"
              width="20px" height="20px"
            >
              <path fill="none" d="M0 0h24v24H0V0z" />
              <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" />
            </svg>
          </IconBtn>
        </div>
      ) }
    </div>
  );
};

StreamBubble.propTypes = {
  item: object.isRequired,
};

export default StreamBubble;
