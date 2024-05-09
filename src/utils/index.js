import { QueryParams } from '../config/enums';

/**
 * Retrieves certain query parameter from a URL.
 *
 * @example getQueryParam('utm_chat')
 * @param {string} param
 */
export const getQueryParam = (param = QueryParams.chat) => {
  const urlParams = new URLSearchParams(window.location.search);

  return urlParams.get(param) || '';
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

  const formattedDate = date.toLocaleDateString([], options);

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

export const extractVideoCode = (url) => {
  const regex = /^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=|shorts\/))((\w|-){11})(?:\S+)?$/gm;
  const matches = regex.exec(url)
  let videoId;

  if (matches) {
    videoId = matches[1];
  }

  return videoId || '';
}