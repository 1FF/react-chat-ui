import { tv } from 'tailwind-variants';

export const basic = /* tw*/ tv({
  slots: {
    base: 'tw--relative tw--flex tw--items-center',
    input: 'tw--w-full tw--px-[15px] tw--py-[11px] tw--rounded-[20px] focus:tw--outline-none focus:!tw--bg-lumina tw--bg-lumina tw--text-zephyr-100 tw--font-density-different',
    loader: 'tw--absolute tw--right-4 tw--top-[50%] tw--translate-y-[-50%]',
    spin: 'tw--block tw--w-6 tw--h-6 tw--border-solid tw--border-[5px] tw--rounded-3xl tw--animate-rotate tw--m-auto tw--border-zephyr-200 tw--border-t-zephyr-600 tw--border-l-zephyr-600'
  },
});

export default basic;
