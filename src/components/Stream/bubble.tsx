import React from 'react';

import { Roles } from '../../config/enums';
import { useAppSelector } from '../../hooks';
import { getRecordById } from '../../store/slices/chat';
import { uuidV4 } from '../../utils';
import { User } from '../Stream';
import { MemoizedAssistant } from './assistant';
import { streamBubble as variant } from './variants';

const StreamBubble = ({ itemId }: { itemId: string }) => {
  const record = useAppSelector(getRecordById(itemId));

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
        [...record.content].map((record) =>
          <User
            key={uuidV4()}
            record={{
              text: record.text || '',
              resend: record.resend || false,
              sent: record.sent || true,
              groupId: record.groupId || '',
              itemId
            }}
          />)
      }
    </div>
  ));
};

export const MemoizedStreamBubble = React.memo(StreamBubble);
export default MemoizedStreamBubble;
