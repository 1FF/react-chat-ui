import { CHAT_SEEN_KEY, CID } from '../config/env';

export const filters = ['email_intent', 'payment_intent', 'MerchantSite', 'NewSupportTicket'];
// TODO must extract the data that is incoming
/**
 * Extracts options from a string enclosed in square brackets.
 *
 * @param {string} val - The input string possibly containing options enclosed in square brackets.
 * @returns {Object} An object containing the content with options removed and an array of extracted options.
 * @property {string} message - The content with options removed.
 * @property {Array<{id: string, label: string, value: string}>} options - An array of extracted options as objects.
 */
export const getExtractedData = (val: string, filterOptions = filters): object => {
  const match = /\[(.*?)\]/.exec(val);

  if (!match || match.length <= 1) {
    return { content: val, options: [] };
  }

  const extractedOptions = match[1].split('|');

  return {
    content: val.replace(match[0], ''),
    options: extractedOptions.map((item, index) => ({ id: `opt-${index}`, label: item, value: item })).filter(item => !filterOptions.includes(item.value)),
    filtered: extractedOptions.filter((item) => filterOptions.includes(item)),
  };
};

/**
 * Extracts a link from a given string and appends query parameters if specified.
 *
 * @param {string} link - The input string from which the link will be extracted.
 * @example constructLink('here is a link to a diet website https://usa.example.com', '12311231a2', hasQueryParams('https://usa.example.com'));
 * //output: https://usa.example.com/?utm_chat=salesmen-keto-redirect&chatSeen=true&cid=12311231a2
 * @returns {string} The extracted link with optional query parameters or `false` if no link is found.
 */
export const constructLink = (link: string): string => {
  const hasQueryParams = (url: string) => {
    // Regular expression pattern to match query parameters
    const pattern = /[?&]([^=#]+)=([^&#]*)/g;

    // Check if the pattern matches any query parameters
    return pattern.test(url);
  };

  // matching example: 'Secure site: https://www.example.com' will give [ https://www.example.com ]

  let search: string;

  if (window.location.search) {
    let searchParams = new URLSearchParams(window.location.search);

    searchParams.append(CHAT_SEEN_KEY, 'true');
    searchParams.append(CID, localStorage.getItem('__cid') || '');

    search = '/?' + searchParams;
  } else {
    search = '';
  }

  if (hasQueryParams(link)) {
    return link;
  }

  return link + search;
};
