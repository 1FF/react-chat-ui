import { uid } from 'uid';
import { useAppSelector } from '../../hooks';
import { getConfig } from '../../store/slices/config';
import { roles } from '../../config';
import { Assistant, User, UserProps } from '../Stream';
import { streamBubble as variant } from './variants';

export const StreamBubble = ({ itemId }: { itemId: string }) => {
  const { themeId: theme } = useAppSelector(getConfig);
  const content = useAppSelector(state => state.chat.historyData[itemId]);
  const isLast = useAppSelector(state => state.chat.historyIds.length - 1 === state.chat.historyIds.indexOf(itemId));
  const { role } = content[0];

  return (content && (
    <div className={variant({ theme, type: role }).base()}>
      {role === roles.assistant
        ? (
          <Assistant
            message={content}
            isLast={isLast}
          />
        )
        : content.map(({ content, sent, resend }: UserProps) => (
          <User
            key={uid()}
            content={content}
            sent={sent}
            resend={resend}
          />
        ))}
    </div>
  ));
};

export default StreamBubble;
