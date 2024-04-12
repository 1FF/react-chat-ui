import { MouseEvent } from 'react';

import { AllEvents } from '../../config/enums';
import { CLOSE_AFTER_TIMEOUT } from '../../config/env';
import { useAppDispatch, useHeadControls } from '../../hooks';
import { track } from '../../services/tracking';
import { setClosed } from '../../store/slices/chat';
import { IconBtn } from '../Button';
import { Profile } from '../Profile';
import { layoutHead as variant } from './variants';
import { Close } from '../Icons/Close';

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
          <Close />
        </IconBtn>
      )}
    </div>
  );
};

export default LayoutHead;
