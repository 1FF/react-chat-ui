import { CHAT_SEEN_KEY, CID } from '../config/env';

/**
 * Extracts a link from a given string and appends query parameters if specified.
 *
 * @param {string} link - The input string from which the link will be extracted.
 * @example constructLink('here is a link to a diet website https://usa.example.com', '12311231a2', hasQueryParams('https://usa.example.com'));
 * //output: https://usa.example.com/?utm_chat=salesmen-keto-redirect&chatSeen=true&cid=12311231a2
 * @returns {string} The extracted link with optional query parameters or `false` if no link is found.
 */
const constructLink = (link: string): string => {
  const hasQueryParams = (url: string) => {
    // Regular expression pattern to match query parameters
    const pattern = /[?&]([^=#]+)=([^&#]*)/g;

    // Check if the pattern matches any query parameters
    return pattern.test(url);
  };

  // matching example: 'Secure site: https://www.example.com' will give [ https://www.example.com ]

  let search: string;

  if (window.location.search) {
    const searchParams = new URLSearchParams(window.location.search);

    searchParams.append(CHAT_SEEN_KEY, 'true');
    searchParams.append(CID, localStorage.getItem('__cid') || '');

    search = `/?${  searchParams}`;
  } else {
    search = '';
  }

  if (hasQueryParams(link)) {
    return link;
  }

  return link + search;
};


export default { constructLink };
