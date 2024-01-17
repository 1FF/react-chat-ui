/* eslint-disable spaced-comment */
import { tv } from 'tailwind-variants';

export const wrapper = /*tw*/ tv({
  slots: {
    base: 'tw--cursor-pointer tw--h-8 tw--relative tw--w-16 tw--rounded-3xl tw--border-0',
  },
  variants: {
    color: {
      enabled: 'tw--bg-light-seraph',
      disabled: 'tw--bg-light-zephyr-100'
    }
  }
});

export const pin = /*tw*/ tv({
  slots: {
    base: 'tw--h-8 tw--w-8 tw--absolute tw---top-1/2 tw--translate-y-1/2 tw--bottom-1 tw--bg-white tw--rounded-full',
  },
  variants: {
    position: {
      enabled: 'tw--left-0',
      disabled: 'tw--right-0'
    }
  }
});

export default { wrapper, pin };
