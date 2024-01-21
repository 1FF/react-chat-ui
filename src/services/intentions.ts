import { EventEmitter } from 'node:events';
import { Intentions } from '../config/enums';

export const intent = {
  type: Intentions,
  core: new EventEmitter()
};

export default intent;
