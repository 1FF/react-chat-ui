// import { useState } from 'react';
import { object } from 'prop-types';
import { useAppDispatch } from '@/hooks';
import { connectSocket } from '@/services';
// import { STORAGE_KEY } from '@/config/env';

import { setConfig, setTheme } from '@/store/slices/config';
import { setMeta } from '@/store/slices/meta';
import { setHistory } from '@/store/slices/stream';

import { LayoutBase, LayoutHead, LayoutFoot } from '@/components/Layout';
import { StreamBase } from '@/components/Stream';

// console.log(connectSocket);
// console.log(STORAGE_KEY);

export const AppBase = ({ config = {} }) => {
  const dispatch = useAppDispatch();
  const setUiTheme = (theme = null) => dispatch(setTheme(theme));

  // Set defaults
  dispatch(setMeta(config.meta));
  dispatch(setConfig(config.app));

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
      <div className="tw--fixed tw--flex tw--gap-2 tw--p-3 tw--bg-black tw--text-white">
        <button
          type="button"
          onClick={ () => setUiTheme('light') }
        >
          Light
        </button>

        <button
          type="button"
          onClick={ () => setUiTheme('dark') }
        >
          Dark
        </button>
      </div>

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
