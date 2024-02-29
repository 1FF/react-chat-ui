import React from 'react';
import { useAppSelector } from '../../hooks';
import { getConfig } from '../../store/slices/config';
import { Roles } from '../../config/enums';
import { User } from '../Stream';
import { MemoizedAssistant } from './assistant';
import { streamBubble as variant } from './variants';
import { uuidV4 } from '../../utils';
import { UserMessageContent } from 'src/interfaces';


const StreamBubble = ({ itemId }: { itemId: string }) => {
  const { themeId: theme } = useAppSelector(getConfig);
  const record = useAppSelector(state => state.chat.historyData[itemId]);

  return (record && (
    <div className={variant({ theme, type: record.role }).base()}>
      {record.role === Roles.assistant
        ? (
          <MemoizedAssistant
            message={record}
            itemId={itemId}
          />
        )
        :
        record.content.map((record: UserMessageContent) => <User key={uuidV4()} record={{ ...record, itemId }} />)
      }
    </div>
  ));
};

export const MemoizedStreamBubble = React.memo(StreamBubble);
export default MemoizedStreamBubble;
