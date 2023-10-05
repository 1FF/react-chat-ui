/* eslint-disable spaced-comment */
import { tv } from 'tailwind-variants';

export const basic = /*tw*/ tv({
  slots: {
    base: 'tw--flex-1 tw--w-full tw--px-4 tw--py-3 tw--rounded-full',
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
    base: 'tw--flex-1 tw--text-[inherit]',
  },
  variants: {
    theme: {
      light: null,
      dark: null,
    },
    outlined: {
      true: 'tw--p-0.5 tw--bg-white tw--rounded-full tw--shadow',
      false: 'tw--bg-[transparent]',
    },
  },
});
