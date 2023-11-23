import { useAppSelector } from '@/hooks';
import { getConfig } from '@/store/slices/config';

import { getChat } from '@/store/slices/chat';
import { formatDateByLocale } from '@/utils';
import { StreamHead } from './head';
import { StreamRow } from './row';
import { streamBase as variant } from './variants';

export const StreamBase = () => {
  const { themeId: theme } = useAppSelector(getConfig);
  const { aiProfile } = useAppSelector(getConfig);
  const { history, incoming } = useAppSelector(getChat);
  const { base, second, date } = variant({ theme });
  const firstMessage = history && history.length > 0 && history[0];

  return (
    <div className={ base() }>
      <div className={ second() }>
        <StreamHead titleTxt={ aiProfile.welcome } />
        { firstMessage && <div className={ date() } data-e2e="stream-assistant-msg-date">{ formatDateByLocale(firstMessage.time) }</div> }
        { history.map((message) => (
          <StreamRow key={ message.id } item={ message } />)
        ) }
        { incoming && <StreamRow item={ incoming } /> }
      </div>
    </div>
  );
};

export default StreamBase;
