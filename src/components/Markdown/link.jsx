import { object } from 'prop-types';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { setLink } from '@/store/slices/intentions';
import { constructLink } from '@/utils/formatting';
import { getConfig } from '@/store/slices/config';
import { useEffect } from 'react';
import { LINK_CLICKED_KEY } from '@/config/env';
import { customEvents } from '@/config/analytics';
import { track } from '@/services/tracking';
import { setClosed } from '@/store/slices/chat';
import { getMeta } from '@/store/slices/meta';

export const MarkdownLink = ({ properties }) => {
  const { translations } = useAppSelector(getConfig);
  const { cid, marketing, systemType } = useAppSelector(getMeta);
  const dispatch = useAppDispatch();
  const link = constructLink(properties.href);
  useEffect(() => {
    dispatch(setLink({
      isVisible: true,
      href: link,
      text: translations.mealButton
    }));
  });

  const onClick = (e) => {
    localStorage.setItem(LINK_CLICKED_KEY, e.currentTarget.href);
    track({
      eventType: customEvents.linkClicked,
      systemType,
      utmParams: marketing.lastUtmParams,
      customerUuid: cid,
    });
    dispatch(setClosed());
  };

  return (
    <a
      href={ link } onClick={ onClick }
      className="tw--underline"
    >{ properties.href }
    </a>
  );
};

MarkdownLink.propTypes = {
  properties: object.isRequired
};

export default MarkdownLink;
