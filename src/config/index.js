import { colors as baseThemeColors } from './themes/base';

export { config, events } from './socket';
export { roles } from './roles';
export { intentions } from './intentions';

export const dateFormattingOptions = {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
};

export const colors = {
  white: '#ffffff',
  black: '#000000',
  'muted-blue': 'rgba(15, 14, 30, 0.6)',
  ...baseThemeColors,
};

export default { colors };
