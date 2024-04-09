export const createStateSyncMiddleware = (config = defaultConfig) => {
  return ({ getState, dispatch }) => next => action => {
    return next(action);
  };
};

export const initMessageListener = jest.fn();
