/* eslint-disable max-len */
import { useAppSelector } from '@/hooks';

import { StreamHead } from './head';
import { StreamRow } from './row';
import { streamBase as variant } from './variants';

const demoMessages = [
  {
    id: 1,
    type: 'request',
    msg: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    timestamp: 'Jun 7, 7:44am',
  },
  {
    id: 2,
    type: 'response',
    msg: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    timestamp: 'Jun 8, 8:12am',
  },
  {
    id: 3,
    type: 'request',
    msg: 'Turpis massa sed elementum tempus. In aliquam sem fringilla ut morbi tincidunt augue.',
    timestamp: 'Jun 9, 8:11am',
  },
  {
    id: 4,
    type: 'request',
    msg: 'Turpis massa sed elementum tempus. In aliquam sem fringilla ut morbi tincidunt augue.',
    timestamp: 'Jun 9, 8:11am',
  },
  {
    id: 5,
    type: 'response',
    msg: 'Turpis massa sed elementum tempus. In aliquam sem fringilla ut morbi tincidunt augue.',
    timestamp: 'Jun 9, 8:11am',
  },
];

export const StreamBase = () => {
  const { themeId: theme } = useAppSelector((state) => state.config);
  const isAwaitingResponse = false; // DEV Note: will be comming from global state
  const { base } = variant({ theme });

  return (
    <div className={ base() }>
      <StreamHead titleTxt="Chat for 1 min, and get diet advise for free!" />

      { demoMessages.map((message) => (
        <StreamRow key={ message.id } item={ message } />)
      ) }

      { isAwaitingResponse && <div>loading</div> }
    </div>
  );
};

export default StreamBase;
