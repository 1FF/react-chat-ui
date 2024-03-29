import React from 'react';

import { Roles } from '../../config/enums';
import { useAppSelector } from '../../hooks';
import { UserMessageContent } from '../../interfaces';
import { uuidV4 } from '../../utils';
import { User } from '../Stream';
import { MemoizedAssistant } from './assistant';
import { streamBubble as variant } from './variants';

const StreamBubble = ({ itemId }: { itemId: string }) => {
  const record = useAppSelector((state) => state.chat.historyData[itemId]);

  return (record && (
    <div className={variant({ type: record.role }).base()}
      data-e2e={record.role === Roles.assistant ? 'stream-assistant-msg' : 'user-msg'}
    >
      {record.role === Roles.assistant
        ? (
          <MemoizedAssistant
            message={record}
            itemId={itemId}
          />
        )
        :
        [...record.content].map((record: UserMessageContent) => <User key={uuidV4()} record={{ ...record, itemId }} />)
      }
    </div>
  ));
};

export const MemoizedStreamBubble = React.memo(StreamBubble);
export default MemoizedStreamBubble;
