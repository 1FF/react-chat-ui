import { tv } from 'tailwind-variants';

// eslint-disable-next-line import/prefer-default-export
export const typewriter = /* tw */ tv({
  slots: {
    base: 'after:tw--inline-block after:tw--ml-1 after:tw--h-4 after:tw--w-1',
  },
  variants: {
    isTyping: {
      true: 'after:tw--animate-blink',
      false: 'after:tw--hidden'
    },
    theme: {
      light: 'after:tw--bg-light-zephyr',
      dark: 'after:tw--bg-dark-zephyr'
    }
  }
});
