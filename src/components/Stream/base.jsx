import { useAppSelector } from '@/hooks';
import { getConfig } from '@/store/slices/config';

import { getStream } from '@/store/slices/stream';
import { StreamHead } from './head';
import { StreamRow } from './row';
import { streamBase as variant } from './variants';

export const StreamBase = () => {
  const { themeId: theme } = useAppSelector(getConfig);
  const { history, downstreamQueue } = useAppSelector(getStream);
  const { base, second } = variant({ theme });

  return (
    <div className={ base() }>
      <div className={ second() }>
        <StreamHead titleTxt="Chat for 1 min, and get diet advise for free!" />
        { history.map((message) => (
          <StreamRow key={ message.id } item={ message } />)
        ) }
        { downstreamQueue && <StreamRow item={ downstreamQueue } /> }
      </div>
    </div>
  );
};

export default StreamBase;
