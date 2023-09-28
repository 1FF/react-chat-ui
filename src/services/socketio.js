import { io } from 'socket.io-client';
import { config, events } from '@/config';

const { chatHistory, disconnect, streamStart, streamData, streamEnd } = events;

export const connectSocket = (serverUrl, { onConnect, onHistory, onStreamStart, onStreamData, onStreamEnd }) => {
  const socket = io.connect(serverUrl, config);

  socket.on(events.connect, () => {
    socket.emit(events.chatHistory, { user_id: localStorage.getItem('__cid') }); // Extract this from store meta slice
    onConnect();
  });

  socket.on(chatHistory, onHistory);
  socket.on(disconnect, () => console.log('Disconnected from socket'));
  socket.on(streamStart, onStreamStart);
  socket.on(streamData, onStreamData);
  socket.on(streamEnd, onStreamEnd);
  // socket.on(streamError, onStreamError); // DEV Note: add to action param destructuring if needed

  return socket;
};

export default connectSocket;
