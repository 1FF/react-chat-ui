import { EventEmitter } from 'node:events';

import { intentions } from '@/config';

export const intent = {
  type: intentions,
  core: new EventEmitter()
};

export default intent;
