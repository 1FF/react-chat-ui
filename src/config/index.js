import { colors as baseThemeColors } from './themes/base';

export { config, events } from './socket';
export { roles } from './roles';
export { intentions } from './intentions';

export const colors = {
  white: '#ffffff',
  black: '#000000',
  ...baseThemeColors,
};

export default { colors };
