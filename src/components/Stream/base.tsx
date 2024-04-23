import { useAppSelector } from '../../hooks';
import { getFirstMessageTime, getHistoryIds } from '../../store/slices/chat';
import { getConfig } from '../../store/slices/config';
import { uuidV4 } from '../../utils';
import { MemoizedStreamBubble } from './bubble';
import { StreamHead } from './head';
import { streamBase, streamRow } from './variants';

export const StreamBase = () => {
  const { aiProfile } = useAppSelector(getConfig);
  const historyIds = useAppSelector(getHistoryIds);
  const firstMessageTime = useAppSelector(getFirstMessageTime);
  const { base, second, date } = streamBase();
  const { base: baseRow } = streamRow();

  return (
    <div className={base()}>
      <div className={second()} data-e2e="history-container">
        <StreamHead titleTxt={aiProfile.welcome} />
        {<div className={date()} data-e2e="stream-assistant-msg-date">{firstMessageTime}</div>}
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
