import { useAppSelector } from '@/hooks';
import { getConfig } from '@/store/slices/config';
import { isObj } from '@/utils';

import { StreamHead } from './head';
import { StreamRow } from './row';
import { streamBase as variant } from './variants';

export const StreamBase = () => {
  const { themeId: theme } = useAppSelector(getConfig);
  const { history, upstreamQueue } = useAppSelector((state) => state.stream);
  const isAwaitingResponse = false; // DEV Note: will be comming from global state
  const { base } = variant({ theme });

  const hasUpstreamItem = isObj(upstreamQueue);

  return (
    <div className={ base() }>
      <StreamHead titleTxt="Chat for 1 min, and get diet advise for free!" />

      { history.map((message) => (
        <StreamRow key={ message.id } item={ message } />)
      ) }

      { hasUpstreamItem && <StreamRow item={ upstreamQueue } /> }

      { isAwaitingResponse && <div>loading</div> }
    </div>
  );
};

export default StreamBase;
