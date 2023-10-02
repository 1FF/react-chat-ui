import { useAppSelector } from '@/hooks';
import { getConfig } from '@/store/slices/config';

import { StreamHead } from './head';
import { StreamRow } from './row';
import { streamBase as variant } from './variants';

export const StreamBase = () => {
  const { themeId: theme } = useAppSelector(getConfig);
  const { history, downstreamQueue } = useAppSelector((state) => state.stream);
  const isAwaitingResponse = false; // DEV Note: will be comming from global state
  const { base } = variant({ theme });

  return (
    <div className={ base() }>
      <StreamHead titleTxt="Chat for 1 min, and get diet advise for free!" />

      { history.map((message) => (
        <StreamRow key={ message.id } item={ message } />)
      ) }
      { downstreamQueue && <StreamRow item={ downstreamQueue } /> }
      { isAwaitingResponse && <div>loading</div> }
    </div>
  );
};

export default StreamBase;
