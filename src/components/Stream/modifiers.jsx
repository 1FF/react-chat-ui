import { curlyBraces, link } from '@/config/patterns';
import { constructLink } from '@/utils/formatting';
/**
* Replaces all string links with anchor tags.
* @example { replaceLinksWithAnchors('hello nice to see you here is a link to diet http://www.yourketo.diet') }
*/
export const replaceLinksWithAnchors = (val) => {
  const parts = val.split(link);

  return parts.map((part) => {
    if (link.test(part)) {
      const urlWithParams = constructLink(part);
      return (
        <a
          key={ `link-idx-${Math.random()}` }
          className="underline"
          href={ urlWithParams }
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
