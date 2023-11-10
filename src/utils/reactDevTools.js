/* eslint-disable no-unused-expressions */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-underscore-dangle */

export default function disableReactDevTools() {
  if (typeof window.__REACT_DEVTOOLS_GLOBAL_HOOK__ === 'object') {
    for (const prop in window.__REACT_DEVTOOLS_GLOBAL_HOOK__) {
      if (prop === 'renderers') {
        window.__REACT_DEVTOOLS_GLOBAL_HOOK__[prop] = new Map();
      } else {
        window.__REACT_DEVTOOLS_GLOBAL_HOOK__[prop] = typeof window.__REACT_DEVTOOLS_GLOBAL_HOOK__[prop] === 'function'
          ? () => {}
          : null;
      }
    }
  }
}
