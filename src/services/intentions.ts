import { EventEmitter } from 'node:events';
import { intentions } from '../config/intentions';

export const intent = {
  type: intentions,
  core: new EventEmitter()
};

export default intent;
