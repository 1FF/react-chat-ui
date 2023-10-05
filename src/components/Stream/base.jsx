import { useAppSelector } from '@/hooks';
import { getConfig } from '@/store/slices/config';

import { getStream } from '@/store/slices/stream';
import { Ellipsis } from './ellipsis';
import { StreamHead } from './head';
import { StreamRow } from './row';
import { streamBase as variant } from './variants';

export const StreamBase = () => {
  const { themeId: theme } = useAppSelector(getConfig);
  const { history, downstreamQueue, isLoading } = useAppSelector(getStream);
  const { base } = variant({ theme });

  return (
    <div className={ base() }>
      <StreamHead titleTxt="Chat for 1 min, and get diet advise for free!" />

      { history.map((message) => (
        <StreamRow key={ message.id } item={ message } />)
      ) }
      { downstreamQueue && <StreamRow item={ downstreamQueue } /> }
      { isLoading && <Ellipsis /> }
    </div>
  );
};

export default StreamBase;
