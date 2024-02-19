import { useAppSelector } from '../../hooks';
import { getConfig } from '../../store/slices/config';
import { formatDateByLocale, uuidV4 } from '../../utils';
import { StreamHead } from './head';
import { MemoizedStreamBubble } from './bubble';
import { streamBase, streamRow } from './variants';

export const StreamBase = () => {
  const { themeId: theme } = useAppSelector(getConfig);
  const { aiProfile } = useAppSelector(getConfig);
  const historyIds = useAppSelector(state => state.chat.historyIds || []);
  const firstMessage = useAppSelector(state => state.chat.historyData[historyIds[0]]);
  const { base, second, date } = streamBase({ theme });
  const { base: baseRow } = streamRow({ theme });
  const time = formatDateByLocale(firstMessage?.time || new Date().getTime());

  return (
    <div className={base()}>
      <div className={second()} data-e2e="history-container">
        <StreamHead titleTxt={aiProfile.welcome} />
        {<div className={date()} data-e2e="stream-assistant-msg-date">{time}</div>}
        {historyIds.map((id: string) => (
          <div
            key={uuidV4()} className={baseRow()}
            data-e2e="history-item"
          >
            <MemoizedStreamBubble itemId={id} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default StreamBase;
