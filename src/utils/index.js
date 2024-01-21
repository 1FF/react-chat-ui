
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

/**
 * Formats a date string according to the locale, including the date and time.
 *
 * @param {string} dateString - The date string to be formatted.
 * @returns {string} - The formatted date and time string.
 */
export function formatDateByLocale(dateString) {
  const date = new Date(dateString);

  const options = {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  };

  const formattedDate = date.toLocaleDateString(undefined, options);

  return `${formattedDate}`.toUpperCase();
}
