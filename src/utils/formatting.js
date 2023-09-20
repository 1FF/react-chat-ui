import { CHAT_SEEN_KEY, CID } from '../config/env';
// eslint-disable-next-line import/prefer-default-export

/**
 * Extracts options from a string enclosed in square brackets.
 *
 * @param {string} val - The input string possibly containing options enclosed in square brackets.
 * @returns {Object} An object containing the content with options removed and an array of extracted options.
 * @property {string} content - The content with options removed.
 * @property {Array<{id: string, label: string, value: string}>} options - An array of extracted options as objects.
 */
export const extractOptionSet = (val) => {
  const match = /\[(.*?)\]/.exec(val);

  if (!match || match.length <= 1) {
    return { content: val, options: [] };
  }

  const [, optionsStr] = match;
  const options = optionsStr.split('|');

  return {
    content: val.replace(match[0], ''),
    options: options.map((item, index) => ({ id: `opt-${index}`, label: item, value: item })),
  };
};

const dateFormattingOptions = {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
};

/**
 * Formats a date string according to the locale, including the date and time.
 *
 * @param {string} dateString - The date string to be formatted.
 * @returns {string} - The formatted date and time string.
 */
export const formatDateByLocale = (dateString, locale = undefined, options = dateFormattingOptions) => {
  const date = new Date(dateString);
  const formattedDate = date.toLocaleDateString(locale, options);

  return `${formattedDate}`.toUpperCase();
};

/**
 * Extracts a link from a given string and appends query parameters if specified.
 *
 * @param {string} string - The input string from which the link will be extracted.
 * @param {string} userId - The user ID used for query parameter construction.
 * @param {boolean} [hasQuery=false] - Indicates whether to append query parameters.
 * @example constructLink('here is a link to a diet website https://usa.example.com', '12311231a2', hasQueryParams('https://usa.example.com'));
 * //output: https://usa.example.com/?utm_chat=salesmen-keto-redirect&chatSeen=true&cid=12311231a2
 * @returns {string|boolean} The extracted link with optional query parameters or `false` if no link is found.
 */
export const constructLink = (string, userId, hasQuery = false) => {
  // matching example: 'Secure site: https://www.example.com' will give [ https://www.example.com ]
  const REGEX_URL = /\b((?:https?:\/\/|www\.)[^\s/$.?#][^\s{}[\]()<>]*)\b/gi;
  let search = '';

  if (window.location.search) {
    search = new URLSearchParams(window.location.search);

    search.append(CHAT_SEEN_KEY, 'true');
    search.append(CID, userId);
    search = '/?' + search;
  }

  // Extract the link from the string
  const matches = string.match(REGEX_URL);
  const link = matches ? matches[0] : '';

  if (!link) {
    return false;
  }

  if (hasQuery) {
    return link;
  }

  return link + search;
};
