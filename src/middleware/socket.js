import { config, events } from '@/config';
import { setHistory } from '@/store/slices/stream';
import { useDispatch } from 'react-redux';
import { io } from 'socket.io-client';

const chatMiddleware = store => next => {
  const socket = io.connect('https://chat-ws.test', config);

  socket.on('connect', () => {
    socket.emit(events.chatHistory, { user_id: localStorage.getItem('__cid') }); // Extract this from store meta slice and use the param
  });

  socket.on(events.chatHistory, (data) => {
    store.dispatch(setHistory(data.history));
    console.log(data);
  });

  // socket.onChat = (method) => socket.on(chat, method);
  // socket.onStreamStart = (method) => socket.on(streamStart, method);
  // socket.onStreamData = (method) => socket.on(streamData, method);
  // socket.onStreamEnd = (method) => socket.on(streamEnd, method);
  // socket.onStreamError = (method) => socket.on(streamError, method);
  // socket.emitChat = (payload) => socket.emit(chat, payload);
  // store.dispatch

  return action => {
    // here we listen for actions applied to the store and do stuff with the socket
    console.log(action);
    next(action);
  };
};

export default chatMiddleware;
