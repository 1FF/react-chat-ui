import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import formatting from '../../utils/formatting';
import { LINK_CLICKED_KEY } from '../../config/env';
import { track } from '../../services/tracking';
import { setClosed } from '../../store/slices/chat';
import { getMeta } from '../../store/slices/meta';
import { setLink } from '../../store/slices/intentions';
import { getConfig } from '../../store/slices/config';
import { AllEvents } from '../../config/enums';

export type MarkdownProperties = {
  href?: string | undefined,
}

type MarkdownLinkProps = {
  properties: MarkdownProperties
}

export const MarkdownLink = ({ properties }: MarkdownLinkProps) => {
  const { translations } = useAppSelector(getConfig);
  const { cid, marketing, systemType } = useAppSelector(getMeta);
  const dispatch = useAppDispatch();
  const link = properties.href ? formatting.constructLink(properties.href) : '#';
  useEffect(() => {
    dispatch(setLink({
      isVisible: true,
      href: link,
      text: translations.mealButton
    }));
  });

  const onClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    localStorage.setItem(LINK_CLICKED_KEY, e.currentTarget.href);
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
