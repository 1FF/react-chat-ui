/* eslint-disable spaced-comment */
import { tv } from 'tailwind-variants';

export const basic = /*tw*/ tv({
  slots: {
    base: 'tw--flex-1 tw--px-4 tw--py-3 tw--rounded-full',
  },
  variants: {
    theme: {
      light: {
        base: 'tw--bg-light-glaze tw--text-white',
      },
      dark: {
        base: 'tw--bg-dark-glazeBg tw--text-dark-glazeText',
      },
    },
  },
});

export const icon = /*tw*/ tv({
  slots: {
    base: 'tw--flex-1 tw--px-4 tw--py-2',
  },
});
