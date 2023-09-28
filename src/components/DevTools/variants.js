/* eslint-disable import/prefer-default-export */
import { tv } from 'tailwind-variants';

export const wrapper = /* tw */ tv({
  slots: {
    base: 'tw--fixed tw--flex tw--gap-2 tw--p-3 tw--bg-black tw--text-white',
  },
  variants: {
    hidden: {
      true: 'tw--hidden',
    }
  }
});
