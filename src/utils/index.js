/**
 * @description Check if value is of type 'null'
 * @param val
 * @returns {boolean}
 */
export const isNull = val => val === null;

/**
 * @description Check if value is of type 'array'
 * @param val
 * @returns {boolean}
 */
export const isArr = val => Array.isArray(val);

/**
 * @description Check if value is of type 'object'
 * @param val
 * @returns {boolean}
 */
export const isObj = val => typeof val === 'object' && !isArr(val) && !isNull(val);

/**
 * @description Check if value is of type 'number'
 * @param val
 * @returns {boolean}
 */
// eslint-disable-next-line no-restricted-globals
export const isNum = val => typeof val === 'number' && !isNaN(val);

/**
 * @description Check if value is of type 'function'
 * @param val
 * @returns {boolean}
 */
export const isFunc = val => typeof val === 'function';

/**
 * @description Check if value is of type 'string'
 * @param val
 * @returns {boolean}
 */
export const isStr = val => typeof val === 'string';

/**
 * @description Check if value is of type 'undefined'
 * @param val
 * @returns {boolean}
 */
export const isUndef = val => typeof val === 'undefined';

/**
 * @description Check if value is of type 'boolean'
 * @param val
 * @returns {boolean}
 */
export const isBool = val => typeof val === 'boolean';

/**
 * @description Is non empty string
 * @param val
 * @returns {boolean|boolean}
 */
export const isNonEmptyStr = val => isStr(val) && val !== '';

/**
  * @description Is non empty array
  * @param val
  * @returns {boolean|boolean}
  */
export const isNonEmptyArr = val => isArr(val) && val.length > 0;

/**
 * @description To int
 * @param val
 * @returns {number}
 */
export const toInt = val => parseInt(val, 10);

/**
 * @description Check if object has property
 * @param obj
 * @param prop
 * @returns {boolean}
 */
export const hasProp = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);

/**
 * @description Check if object has method
 * @param obj
 * @param method
 * @returns {boolean}
 */
export const hasMethod = (obj, method) => hasProp(obj, method) && isFunc(obj[method]);

/**
 * @description Get object keys
 * @param obj
 * @returns {Array}
 */
export const getKeys = obj => Object.keys(obj);

/**
 * @description Check if object has key
 * @param obj
 * @param key
 * @returns {boolean}
 */
export const hasKey = (obj, key) => getKeys(obj).indexOf(key) > -1;

/**
 * @description Has keys
 * @param obj
 * @returns {boolean}
 */
export const hasKeys = obj => getKeys(obj).length > 0;

/**
 * @description Iterate over each key of an object
 * @param obj
 * @param callback
 */
export const eachKey = (obj, callback) => {
  Object.keys(obj).forEach((key, index) => callback(key, obj[key], index));
};

/**
 * @description Linear iterator for object properties
 * @param obj
 * @param callback
 */
export const eachProp = (obj, callback) => {
  eachKey(obj, (key, prop, index) => callback(prop, key, index));
};

/**
 * @description Extract nested prop
 * @param obj
 * @param keysText
 * @returns {*}
 */
export const extractNestedProp = (obj, keysText) => {
  const keys = keysText.split('.');
  const keysLength = keys.length - 1;
  let keysIndex = 0;
  let isValidKey = true;
  let targetObj = { ...obj };
  let targetProp;
  let nextTarget;

  if (keys.length > 0) {
    while (isValidKey) {
      nextTarget = targetObj[keys[keysIndex]];

      if (keysIndex === keysLength) {
        targetProp = !isUndef(nextTarget) && !isNull(nextTarget)
          ? nextTarget
          : undefined;
        break;
      }

      if (!isObj(nextTarget)) {
        isValidKey = false;
        break;
      }

      targetObj = nextTarget;
      keysIndex += 1;
    }
  }

  return targetProp;
};

/**
 * @description Debounce
 * @returns {function}
 */
export const debounce = ({ timeout, id }) => {
  const timers = {};

  return callback => {
    if (timers[id]) {
      clearTimeout(timers[id]);
    }
    timers[id] = setTimeout(callback, timeout);
  };
};

/**
 * @description Hide page scroll
 */
export const hidePageScroll = () => {
  document.documentElement.classList.add('hide-scroll');
};

/**
 * @description Show page scroll
 */
export const showPageScroll = () => {
  document.documentElement.classList.remove('hide-scroll');
};

/**
 * Checks if a URL contains query parameters.
 *
 * @param {string} url - The URL to check for query parameters.
 * @returns {boolean} `true` if the URL contains query parameters, `false` otherwise.
 */
export const hasQueryParams = (url) => {
  // Regular expression pattern to match query parameters
  const pattern = /[?&]([^=#]+)=([^&#]*)/g;

  // Check if the pattern matches any query parameters
  return pattern.test(url);
};

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
 * Checks if 24 hours have passed since the given date.
 *
 * @function isExpired
 * @param {string} date - The date to compare in ISO 8601 format (e.g., "2023-07-04T14:11:00.097Z").
 * @returns {boolean} Returns true if 24 hours have passed since the given date, or false otherwise.
 */
export const isExpired = (date, maxHours = 24) => {
  const currentDate = new Date();
  const givenDate = new Date(date);
  const elapsedMilliseconds = currentDate - givenDate;
  const elapsedHours = elapsedMilliseconds / (1000 * 60 * 60); // Convert milliseconds to hours

  return elapsedHours >= maxHours;
};
