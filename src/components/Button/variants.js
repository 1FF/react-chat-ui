/* eslint-disable spaced-comment */
import { tv } from 'tailwind-variants';

export const basic = /*tw*/ tv({
  slots: {
    base: 'tw--flex-1 tw--text-[inherit]',
  },
  variants: {
    theme: {
      light: {
        base: '',
      },
      dark: {
        base: '',
      },
    },
  },
});

export const icon = /*tw*/ tv({
  slots: {
    base: 'tw--flex-1 tw--px-4 tw--py-2',
  },
});
