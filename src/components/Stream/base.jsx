import { useAppSelector } from '@/hooks';
import { getConfig } from '@/store/slices/config';
import { formatDateByLocale } from '@/utils';
import { uid } from 'uid';
import { StreamHead } from './head';
import { StreamBubble } from './bubble';
import { streamBase, streamRow } from './variants';

export const StreamBase = () => {
  const { themeId: theme } = useAppSelector(getConfig);
  const { aiProfile } = useAppSelector(getConfig);
  const historyIds = useAppSelector(state => state.chat.historyIds);
  const historyData = useAppSelector(state => state.chat.historyData);
  const { base, second, date } = streamBase({ theme });
  const { base: baseRow } = streamRow({ theme });
  const time = historyIds.length > 0 && (historyData[historyIds[0]][0].time || new Date().getTime());

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
