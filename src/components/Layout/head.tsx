import { MouseEvent } from 'react';

import { AllEvents } from '../../config/enums';
import { CLOSE_AFTER_TIMEOUT } from '../../config/env';
import { useAppDispatch, useHeadControls } from '../../hooks';
import { track } from '../../services/tracking';
import { setClosed } from '../../store/slices/chat';
import { IconBtn } from '../Button';
import { Profile } from '../Profile';
import { layoutHead as variant } from './variants';

export const LayoutHead = () => {
  const dispatch = useAppDispatch();
  const headState = useHeadControls();
  const { base } = variant({ theme: headState.theme });

  const onClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.disabled = true;
    track({
      eventType: AllEvents.closeClicked,
      systemType: headState.systemType,
      utmParams: headState.marketing.lastUtmParams,
      customerUuid: headState.cid,
    });
    setTimeout(() => {
      dispatch(setClosed());
    }, CLOSE_AFTER_TIMEOUT);
  };

  return (
    <div className={base()} data-e2e="chat-heading">
      <Profile />
      {headState.closeVisible && (
        <IconBtn e2e="chat-close-btn" onClick={onClick}>
          <svg
            height="24px" viewBox="0 0 24 24"
            width="24px"
          >
            <g
              stroke="currentColor" strokeLinecap="round"
              strokeWidth="2"
            >
              <line
                x1="6" x2="18"
                y1="6" y2="18"
              />
              <line
                x1="6" x2="18"
                y1="18" y2="6"
              />
            </g>
          </svg>
        </IconBtn>
      )}
    </div>
  );
};

export default LayoutHead;
