import { useEffect, MouseEvent } from 'react';
import { getPurpose, useAppDispatch, useAppSelector } from '../../hooks';
import formatting from '../../utils/formatting';
import { LINK_CLICKED_KEY } from '../../config/env';
import { track } from '../../services/tracking';
import { setClosed } from '../../store/slices/chat';
import { getMeta } from '../../store/slices/meta';
import { setLink } from '../../store/slices/intentions';
import { getConfig } from '../../store/slices/config';
import { AllEvents } from '../../config/enums';
import { MarkdownLinkProps } from '../../interfaces/component';

export const MarkdownLink = ({ properties }: MarkdownLinkProps) => {
  const { translations, purpose } = useAppSelector(getConfig);
  const extendedOptions = getPurpose(purpose);
  const { cid, marketing, systemType } = useAppSelector(getMeta);
  const dispatch = useAppDispatch();
  const link = properties.href ? formatting.constructLink(properties.href) : '#';

  // TODO add the special condition on which the button will be available
  const supportNeeded = true;

  useEffect(() => {
    dispatch(setLink({
      isVisible: extendedOptions.cta || supportNeeded,
      href: link,
      text: translations.mealButton
    }));
  });

  const onClick = (e: MouseEvent<HTMLAnchorElement>) => {
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
