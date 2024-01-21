import { uid } from 'uid';
import { useAppSelector } from '../../hooks';
import { getConfig } from '../../store/slices/config';
import { Roles } from '../../config/enums';
import { Assistant, User } from '../Stream';
import { streamBubble as variant } from './variants';
import { UserMessageContent } from '../../interfaces';

export const StreamBubble = ({ itemId }: { itemId: string }) => {
  const { themeId: theme } = useAppSelector(getConfig);
  const record = useAppSelector(state => state.chat.historyData[itemId]);
  const isLast = useAppSelector(state => state.chat.historyIds.length - 1 === state.chat.historyIds.indexOf(itemId));

  return (record && (
    <div className={variant({ theme, type: record.role }).base()}>
      {record.role === Roles.assistant
        ? (
          <Assistant
            message={record}
            isLast={isLast}
          />
        )
        :
        record.content.map(({ message }: UserMessageContent) => <User key={uid()} message={message} resend={record.resend} sent={record.sent} />)
      }
    </div>
  ));
};

export default StreamBubble;
