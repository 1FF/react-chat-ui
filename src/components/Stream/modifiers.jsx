/* eslint-disable react-hooks/rules-of-hooks */
import { customEvents } from '@/config/analytics';
import { CHAT_SEEN_KEY } from '@/config/env';
import { curlyBraces, link } from '@/config/patterns';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { track } from '@/services/tracking';
import { setClosed } from '@/store/slices/chat';
import { getMeta } from '@/store/slices/meta';
import { constructLink } from '@/utils/formatting';
/**
* Replaces all string links with anchor tags.
* @example { replaceLinksWithAnchors('hello nice to see you here is a link to diet http://www.yourketo.diet') }
*/
export const replaceLinksWithAnchors = (val) => {
  const dispatch = useAppDispatch();
  const { cid, systemType, marketing } = useAppSelector(getMeta);

  const parts = val.split(link);

  const onClick = (e) => {
    localStorage.setItem(CHAT_SEEN_KEY, e.currentTarget.href || true);
    track({
      eventType: customEvents.linkClicked,
      systemType,
      utmParams: marketing.lastUtmParams,
      customerUuid: cid,
    });
    dispatch(setClosed());
  };

  return parts.map((part) => {
    if (link.test(part)) {
      const urlWithParams = constructLink(part);
      return (
        <a
          key={ `link-idx-${Math.random()}` }
          className="tw--underline"
          href={ urlWithParams }
          onClick={ onClick }
        >
          { part }
        </a>
      );
    }
    return part;
  });
};

/**
 * Replaces the string in curly brackets with a string wrapped in <strong> tags or anchor if link exists.
 *
 * @param {string} input - The input string to process.
 * @example { replaceStringInCurlyBracketsWithStrong('this is a strong {tagged} text {g') }
 * @returns {React.ReactNode} A React element with replaced content.
 */
export const textModifier = (input) => {
  const parts = input.split(curlyBraces);
  return parts.map((part, index) => {
    if (index % 2 === 0) {
      return replaceLinksWithAnchors(part);
    }
    return <strong key={ `strong-${Math.random()}` }>{ replaceLinksWithAnchors(part) }</strong>;
  });
};
