import { useAppDispatch, useAppSelector } from '@/hooks';

import { Profile } from '@/components/Profile';
import { getConfig } from '@/store/slices/config';
import { IconBtn } from '@/components/Button';
import { customEvents } from '@/config/analytics';
import { track } from '@/services/tracking';
import { getMeta } from '@/store/slices/meta';
import { setClosed } from '@/store/slices/chat';
import { layoutHead as variant } from './variants';

export const LayoutHead = () => {
  const { themeId: theme, closeVisible } = useAppSelector(getConfig);
  const dispatch = useAppDispatch();
  const { cid, systemType, marketing } = useAppSelector(getMeta);
  const { base } = variant({ theme });

  const onClick = (e) => {
    e.currentTarget.disabled = true;
    track({
      eventType: customEvents.closeClicked,
      systemType,
      utmParams: marketing.lastUtmParams,
      customerUuid: cid,
    });
    setTimeout(() => {
      dispatch(setClosed());
    }, 500);
  };

  return (
    <div className={ base() }>
      <Profile />
      { closeVisible && (
        <IconBtn e2e="chat-close-btn" onClick={ onClick }>
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
      ) }
    </div>
  );
};

export default LayoutHead;
