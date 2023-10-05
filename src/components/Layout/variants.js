/* eslint-disable spaced-comment */
import { tv } from 'tailwind-variants';

export const layoutBase = /*tw*/ tv({
  slots: {
    base: 'tw--flex tw--self-stretch tw--justify-self-stretch tw--items-stretch tw--justify-center',
    wrapper: 'tw--flex tw--flex-col tw--w-full md:tw--max-w-3xl tw--border-x',
  },
  variants: {
    theme: {
      light: {
        base: 'tw--bg-light-lumina',
        wrapper: 'tw--bg-light-whisper tw--text-light-zephyr tw--border-light-ember tw--border-opacity-30',
      },
      dark: {
        base: 'tw--bg-dark-lumina',
        wrapper: 'tw--bg-dark-whisper tw--text-white tw--border-black',
      }
    },
    minimized: {
      true: 'tw--fixed tw--right-0 tw--bottom-0 tw--max-h-[700px] tw--max-w-md'
    }
  },
  responsiveVariants: true, // ['sm', 'md']
});

export const layoutHead = /*tw*/ tv({
  slots: {
    base: 'tw--flex tw--px-4 tw--py-2 tw--shadow-[0_2px_7px_-6px]',
  },
  variants: {
    theme: {
      light: 'tw--shadow-light-zephyr',
      dark: 'tw--shadow-dark-zephyr',
    },
  },
});

export const layoutFoot = /*tw*/ tv({
  slots: {
    base: 'tw--flex tw--flex-wrap tw--px-4 tw--py-2',
    input: 'tw--flex-1 tw--pr-2',
    button: 'tw--grow-0',
  },
  variants: {
    theme: {
      light: '',
      dark: '',
    },
  },
});

export default { layoutBase, layoutHead, layoutFoot };
