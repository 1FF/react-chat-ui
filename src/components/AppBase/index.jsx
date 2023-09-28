/* eslint-disable no-unused-vars */
import { object } from 'prop-types';
import { EventEmitter } from 'node:events';
import { useAppDispatch } from '@/hooks';
import { connectSocket } from '@/services';

import { setConfig, setDevToolsStatus } from '@/store/slices/config';
import { setMeta } from '@/store/slices/meta';
import { setHistory } from '@/store/slices/stream';

import { LayoutBase, LayoutHead, LayoutFoot } from '@/components/Layout';
import { StreamBase } from '@/components/Stream';
import { DevTools } from '@/components/DevTools';

const eventEmitter = new EventEmitter();
console.log(eventEmitter);

export const AppBase = ({ config = {} }) => {
  const dispatch = useAppDispatch();

  // Set defaults
  dispatch(setMeta(config.meta));
  dispatch(setConfig(config.app));
  dispatch(setDevToolsStatus(process.env.NODE_ENV === 'development')); // DEV Note: set this in a global plugin

  const onConnect = () => console.log('connected');

  const onHistory = ({ user_id, history, errors }) => {
    // console.log(user_id);
    // console.log(history);
    // console.log(errors);
    dispatch(setHistory(history));
  };

  const onStreamData = (data) => {
    // console.log(data);
  };

  const onStreamEnd = (data) => {
    // console.log(data);
  };

  const onStreamStart = (data) => {
    // console.log(data);
  };

  const socket = connectSocket('https://chat-ws.test', {
    onConnect,
    onHistory,
    onStreamData,
    onStreamEnd,
    onStreamStart,
  });

  return (
    <>
      <DevTools />

      <LayoutBase
        head={ <LayoutHead /> }
        stream={ <StreamBase /> }
        foot={ <LayoutFoot /> }
      />
    </>
  );
};

AppBase.propTypes = {
  config: object.isRequired,
};

export default AppBase;
