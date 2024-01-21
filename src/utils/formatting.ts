import { CHAT_SEEN_KEY, CID } from '../config/env';

/**
 * Extracts a link from a given string and appends query parameters if specified.
 *
 * @param {string} val - The input string from which the link will be extracted.
 * @example constructLink('here is a link to a diet website https://usa.example.com', '12311231a2', hasQueryParams('https://usa.example.com'));
 * //output: https://usa.example.com/?utm_chat=salesmen-keto-redirect&chatSeen=true&cid=12311231a2
 * @returns {string} The extracted link with optional query parameters or `false` if no link is found.
 */
const constructLink = (val: string) => {
  const hasQueryParams = (url: string) => {
    // Regular expression pattern to match query parameters
    const pattern = /[?&]([^=#]+)=([^&#]*)/g;

    // Check if the pattern matches any query parameters
    return pattern.test(url);
  };

  // matching example: 'Secure site: https://www.example.com' will give [ https://www.example.com ]
  const REGEX_URL = /\b((?:https?:\/\/|www\.)[^\s/$.?#][^\s{}[\]()<>]*)\b/gi;
  let search: string;

  if (window.location.search) {
    let searchParams = new URLSearchParams(window.location.search);

    searchParams.append(CHAT_SEEN_KEY, 'true');
    searchParams.append(CID, localStorage.getItem('__cid') || '');

    search = '/?' + searchParams;
  } else {
    search = '';
  }

  // Extract the link from the string
  const matches = val.match(REGEX_URL);
  const link = matches ? matches[0] : '';

  if (!link) {
    return '';
  }

  if (hasQueryParams(link)) {
    return link;
  }

  return link + search;
};


export default { constructLink };
