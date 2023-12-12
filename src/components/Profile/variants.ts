/* eslint-disable spaced-comment */
import { tv } from 'tailwind-variants';

export const profile = /*tw*/ tv({
  slots: {
    base: 'tw--flex tw--items-center tw--select-none',
    avatar: 'tw--rounded-full',
    info: '',
    name: '',
    role: '',
    imgWrapper: '',
    minimized: ''
  },
  variants: {
    orientation: {
      horizontal: {
        base: 'tw--flex-row tw--text-left',
        avatar: 'tw--shrink',
        name: 'tw--text-xl/7 tw--font-bold tw--leading-[30px]',
        info: 'tw--pl-[10px]',
        role: 'tw--text-zephyr-800',
        imgWrapper: 'after:tw--absolute after:tw--w-[10px] after:tw--h-[10px] after:tw--bottom-[-2px] after:tw--left-[37px] after:tw--z-10 after:tw--rounded-full after:tw--bg-iota-dots'
      },
      vertical: {
        base: 'tw--flex-col tw--text-center',
        name: 'tw--text-[24px] tw--font-semibold',
        role: 'tw--font-density-different tw--text-zephyr-600'
      },
    },
    minimized: {
      true: '',
      false: '',
    },
  },
  compoundSlots: [
    {
      slots: ['imgWrapper'],
      orientation: 'horizontal',
      minimized: false,
      class: 'tw--relative tw--h-fit'
    },
    {
      slots: ['avatar'],
      orientation: 'horizontal',
      minimized: false,
      class: 'tw--h-[50px]',
    },
    {
      slots: ['avatar'],
      orientation: 'vertical',
      minimized: false,
      class: 'tw--h-[60px]',
    },
  ],
});

export default profile;
