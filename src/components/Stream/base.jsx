import { useAppSelector } from '@/hooks';
import { getConfig } from '@/store/slices/config';
import { formatDateByLocale } from '@/utils';
import { uid } from 'uid';
import { useAppSelector } from '../../hooks';
import { getConfig } from '../../store/slices/config';

import { formatDateByLocale } from '../../utils';
import { StreamHead } from './head';
import { StreamBubble } from './bubble';
import { streamBase, streamRow } from './variants';


export const StreamBase = () => {
  const { themeId: theme } = useAppSelector(getConfig);
  const { aiProfile } = useAppSelector(getConfig);
  const incoming = useAppSelector(state => state.chat.incoming);
  const history = useAppSelector(state => state.chat.history);
  const { base, second, date } = variant({ theme });
  const firstMessage = history && history.length > 0 && history[0];

  return (
    <div className={ base() }>
      <div className={ second() } data-e2e="history-container">
        <StreamHead titleTxt={ aiProfile.welcome } />
        { time && <div className={ date() } data-e2e="stream-assistant-msg-date">{ formatDateByLocale(time) }</div> }
        { historyIds.map((id) => (
          <div
            key={ uid() } className={ baseRow() }
            data-e2e="history-item"
          >
            <StreamBubble itemId={ id } />
          </div>
        )) }
      </div>
    </div>
  );
};

export default StreamBase;
