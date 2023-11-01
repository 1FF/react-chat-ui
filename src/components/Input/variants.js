/* eslint-disable spaced-comment */
import { tv } from 'tailwind-variants';

export const basic = /*tw*/ tv({
  slots: {
    base: 'tw--relative tw--flex tw--items-center',
    input: 'tw--w-full tw--px-[15px] tw--py-[11px] tw--rounded-[20px] focus:tw--outline-none',
    loader: 'tw--absolute tw--right-4 tw--top-[50%] tw--translate-y-[-50%]',
    spin: 'tw--block tw--w-6 tw--h-6 tw--border-solid tw--border-[5px] tw--rounded-3xl tw--animate-rotate tw--m-auto'
  },
  variants: {
    theme: {
      light: {
        base: '',
        input: 'tw--bg-light-lumina tw--text-light-zephyr-100 tw--font-semibold',
        loader: '',
        spin: 'tw--border-light-zephyr-200 tw--border-t-light-zephyr-600 tw--border-l-light-zephyr-600',
      },
      dark: {
        base: '',
        input: 'tw--bg-dark-lumina tw--text-dark-zephyr-100 tw--font-bold',
        loader: '',
        spin: 'w--border-dark-zephyr-200 tw--border-t-dark-zephyr-600 tw--border-l-dark-zephyr-600',
      },
    },
  },
});

export default basic;
