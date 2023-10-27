import { useAppSelector } from '@/hooks';
import { getConfig } from '@/store/slices/config';

import { getStream } from '@/store/slices/chat';
import { StreamHead } from './head';
import { StreamRow } from './row';
import { streamBase as variant } from './variants';

export const StreamBase = () => {
  const { themeId: theme } = useAppSelector(getConfig);
  const { history, incoming } = useAppSelector(getStream);
  const { base, second } = variant({ theme });

  return (
    <div className={ base() }>
      <div className={ second() }>
        <StreamHead titleTxt="Chat for 1 min, and get diet advise for free!" />
        { history.map((message) => (
          <StreamRow key={ message.id } item={ message } />)
        ) }
        { incoming && <StreamRow item={ incoming } /> }
      </div>
    </div>
  );
};

export default StreamBase;
