import { constructLink } from '@/utils/formatting';
/**
* Replaces all string links with anchor tags.
* @example { replaceLinksWithAnchors('hello nice to see you here is a link to diet http://www.yourketo.diet') }
*/
export const replaceLinksWithAnchors = (val) => {
  // This pattern will exclude {https://test.test.test} or any of those symbols {}[]()<> at the end of the link
  const pattern = /((?:https?:\/\/|www\.)[^\s/$.?#].[^\s{}[\]()<>]*)/gi;

  const parts = val.split(pattern);

  return parts.map((part) => {
    if (pattern.test(part)) {
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
 * Replaces the string in curly brackets with a string wrapped in <strong> tags.
 *
 * @param {string} input - The input string to process.
 * @example { replaceStringInCurlyBracketsWithStrong('this is a strong {tagged} text {g') }
 * @returns {React.ReactNode} A React element with replaced content.
 */
export const replaceStringInCurlyBracketsWithStrong = (input) => {
  const parts = input.split(/\{([^}]+)\}/g);
  return parts.map((part, index) => {
    if (index % 2 === 0) {
      return part;
    }
    return <strong key={ `strong-${Math.random()}` }>{ part }</strong>;
  });
};
