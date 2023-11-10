/* eslint-disable spaced-comment */
import { tv } from 'tailwind-variants';

export const layoutBase = /*tw*/ tv({
  slots: {
    base: 'tw--flex tw--self-stretch tw--justify-self-stretch tw--items-stretch tw--justify-center tw--overflow-hidden tw--h-full',
    wrapper: 'tw--flex tw--flex-col tw--w-full md:tw--max-w-[800px] tw--max-h-screen tw--h-full',
  },
  variants: {
    theme: {
      light: {
        base: 'tw--bg-light-lumina',
        wrapper: 'tw--bg-light-whisper tw--text-light-zephyr-100',
      },
      dark: {
        base: 'tw--bg-dark-lumina',
        wrapper: 'tw--bg-dark-whisper tw--text-white',
      }
    },
    minimized: {
      true: 'tw--fixed tw--right-0 tw--bottom-0 tw--max-h-[700px] tw--max-w-md'
    }
  },
});

export const layoutHead = /*tw*/ tv({
  slots: {
    base: 'tw--flex tw--px-5 tw--py-[11px] tw--shadow-[-1px_2px_5px_0]',
  },
  variants: {
    theme: {
      light: 'tw--shadow-light-zephyr-200',
      dark: 'tw--shadow-dark-zephyr-200',
    },
  },
});

export const layoutFoot = /*tw*/ tv({
  slots: {
    base: 'tw--flex tw--items-center tw--flex-wrap tw--px-5 tw--mt-[11px]',
    input: 'tw--flex-1 tw--pr-2',
    button: 'tw--flex tw--grow-0',
  },
});

export default { layoutBase, layoutHead, layoutFoot };
