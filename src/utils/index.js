
/**
 * Retrieves certain query parameter from a URL.
 *
 * @example getQueryParam(window.location.search, 'utm_chat')
 * @param {string} url
 * @param {string} param
 */
export const getQueryParam = (url, param) => {
  const urlParams = new URLSearchParams(url);

  return urlParams.get(param);
};

const formatDateByLocaleOptions = {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
};

/**
 * Formats a date string according to the locale, including the date and time.
 *
 * @param {number} inputDate - The date string to be formatted.
 * @returns {string} - The formatted date and time string.
 */
export function formatDateByLocale(inputDate, options = formatDateByLocaleOptions) {
  const date = new Date(inputDate);

  const formattedDate = date.toLocaleDateString(undefined, options);

  return `${formattedDate}`.toUpperCase();
}

export function uuidV4() {
  const uuid = new Array(36);
  for (let i = 0; i < 36; i++) {
    uuid[i] = Math.floor(Math.random() * 16);
  }
  uuid[14] = 4;
  uuid[19] = uuid[19] &= ~(1 << 2);
  uuid[19] = uuid[19] |= (1 << 3);
  uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
  return uuid.map((x) => x.toString(16)).join('');
}
