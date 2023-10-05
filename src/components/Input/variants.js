/* eslint-disable spaced-comment */
import { tv } from 'tailwind-variants';

export const basic = /*tw*/ tv({
  slots: {
    base: 'tw--relative tw--flex tw--items-center',
    input: 'tw--w-full tw--px-4 tw--py-3 tw--rounded-full focus:tw--outline-none',
    loader: 'tw--absolute tw--right-4 tw--top-[50%] tw--translate-y-[-50%]',
  },
  variants: {
    theme: {
      light: {
        base: '',
        input: 'tw--bg-light-lumina tw--text-black',
        loader: '',
      },
      dark: {
        base: '',
        input: 'tw--bg-dark-lumina tw--text-white',
        loader: '',
      },
    },
  },
});

export default basic;
