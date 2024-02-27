/* eslint-disable react-hooks/rules-of-hooks */
import { customEvents } from '../../config/analytics';
import { LINK_CLICKED_KEY, SUPPORT_PURPOSE } from '../../config/env';
import { curlyBraces, link } from '../../config/patterns';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { track } from '../../services/tracking';
import { setClosed } from '../../store/slices/chat';
import { getConfig } from '../../store/slices/config';
import { getMeta } from '../../store/slices/meta';
import { constructLink } from '../../utils/formatting';


// TODO: check if this is used anywhere all code is refined in chat-support branch;

/**
* Replaces all string links with anchor tags.
* ../..example { replaceLinksWithAnchors('hello nice to see you here is a link to diet http://www.yourketo.diet') }
*/
export const replaceLinksWithAnchors = (val) => {
  const dispatch = useAppDispatch();
  const { cid, systemType, marketing } = useAppSelector(getMeta);
  const { purpose } = useAppSelector(getConfig);

  const parts = val.split(link);

  const onClick = (e) => {
    if (purpose !== SUPPORT_PURPOSE) {
      localStorage.setItem(LINK_CLICKED_KEY, e.currentTarget.href);
    }
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
          key={`link-idx-${Math.random()}`}
          className="tw--underline"
          href={urlWithParams}
          onClick={onClick}
        >
          {part}
        </a>
      );
    }
    return part;
  });
};

/**
 * Replaces the string in curly brackets with a string wrapped in <strong> tags or anchor if link exists.
 *
 * ../..param {string} input - The input string to process.
 * ../..example { replaceStringInCurlyBracketsWithStrong('this is a strong {tagged} text {g') }
 * ../..returns {React.ReactNode} A React element with replaced content.
 */
export const textModifier = (input) => {
  const parts = input.split(curlyBraces);
  return parts.map((part, index) => {
    if (index % 2 === 0) {
      return replaceLinksWithAnchors(part);
    }
    return <strong key={`strong-${Math.random()}`}>{replaceLinksWithAnchors(part)}</strong>;
  });
};
