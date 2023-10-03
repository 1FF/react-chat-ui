import { config, events } from '@/config';
import { appendHistory, resetDownstreamItem, resetUpstreamItem, setDownstreamItem, setDownstreamMessage, setHistory, setUpstreamItem } from '@/store/slices/stream';
import { getQueryParam } from '@/utils';
import { io } from 'socket.io-client';

const chatMiddleware = store => next => {
  const socket = io.connect('https://chat-ws.test', config);

  socket.on('connect', () => {
    socket.emit(events.chatHistory, { user_id: localStorage.getItem('__cid') }); // Extract this from store meta slice and use the param
  });

  socket.on(events.chatHistory, (data) => {
    if (data.history.length) {
      store.dispatch(setHistory(data.history));
    } else {
      socket.emit(events.chat, {
        role: 'assistant',
        term: getQueryParam(window.location.search, 'utm_chat'),
        user_id: localStorage.getItem('__cid'),
        message: store.getState().config.aiProfile.initialMessage
      });
      store.dispatch(setHistory([{ role: 'assistant', content: store.getState().config.aiProfile.initialMessage }]));
    }
  });

  socket.on(events.streamStart, () => {
    store.dispatch(resetUpstreamItem());
    store.dispatch(setDownstreamItem(''));
  });

  socket.on(events.streamData, ({ chunk }) => {
    store.dispatch(setDownstreamMessage({ chunk }));
  });

  socket.on(events.streamEnd, () => {
    store.dispatch(appendHistory(store.getState().stream.downstreamQueue));
    store.dispatch(resetDownstreamItem());
  });

  socket.on(events.streamError, () => {
    console.log('streamError');
  });

  return action => {
    // here we listen for actions applied to the store and do stuff with the socket
    if (setUpstreamItem.match(action) && socket.connected) {
      const data = {
        term: getQueryParam(window.location.search, 'utm_chat'),
        user_id: localStorage.getItem('__cid'),
        role: 'user',
        message: action.payload,
      };
      store.dispatch(appendHistory(data));
      socket.emit(events.chat, data);
    }

    next(action);
  };
};

export default chatMiddleware;
