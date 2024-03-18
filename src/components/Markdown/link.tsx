import { MouseEvent,useEffect } from 'react';

import { AllEvents } from '../../config/enums';
import { LINK_CLICKED_KEY, SUPPORT_PURPOSE } from '../../config/env';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { MarkdownLinkProps } from '../../interfaces/component';
import { track } from '../../services/tracking';
import { setClosed } from '../../store/slices/chat';
import { getConfig } from '../../store/slices/config';
import { setLink } from '../../store/slices/intentions';
import { getMeta } from '../../store/slices/meta';
import { constructLink } from '../../utils/formatting';

export const MarkdownLink = ({ properties }: MarkdownLinkProps) => {
  const { purpose } = useAppSelector(getConfig);
  const { cid, marketing, systemType } = useAppSelector(getMeta);
  const dispatch = useAppDispatch();
  const link = properties.href ? constructLink(properties.href) : '#';
  useEffect(() => {
    dispatch(setLink(link));
  });

  const onClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (purpose !== SUPPORT_PURPOSE) {
      localStorage.setItem(LINK_CLICKED_KEY, e.currentTarget.href);
    }
    
    track({
      eventType: AllEvents.linkClicked,
      systemType,
      utmParams: marketing.lastUtmParams,
      customerUuid: cid,
    });
    dispatch(setClosed());
  };

  return (
    <a
      href={link}
      onClick={onClick}
      className="tw--underline"
    >{properties.href}
    </a>
  );
};

export default MarkdownLink;
