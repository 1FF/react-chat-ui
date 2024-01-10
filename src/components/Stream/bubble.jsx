/* eslint-disable react/jsx-props-no-spreading */
import { string } from 'prop-types';
import { useAppSelector } from '@/hooks';
import { useAppSelector, useAppDispatch } from '@/hooks';
import { getConfig } from '@/store/slices/config';
import { roles } from '@/config';
import { Assistant } from '@/components/Stream/assistant';
import { User } from '@/components/Stream/user';
import { uid } from 'uid';
import { streamBubble as variant } from './variants';

export const StreamBubble = ({ itemId }) => {
  const { themeId: theme } = useAppSelector(getConfig);
  const content = useAppSelector(state => state.chat.historyData[itemId]);
  const isLast = useAppSelector(state => state.chat.historyIds.length - 1 === state.chat.historyIds.indexOf(itemId));
  const { role } = content[0];

  return (content && (
    <div className={ variant({ theme, type: role }).base() }>
      { role === roles.assistant
        ? (
          <Assistant
            message={ content }
            isLast={ isLast }
          />
        )
        : content.map(({ content, sent, resend }) => (
          <User
            key={ uid() }
            content={ content } sent={ sent }
            resend={ resend }
          />
        )) }
    </div>
  ));
};

StreamBubble.propTypes = {
  itemId: string.isRequired,
};

export default StreamBubble;
