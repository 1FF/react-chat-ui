/* eslint-disable spaced-comment */
import { tv } from 'tailwind-variants';

export const profile = /*tw*/ tv({
  slots: {
    base: 'tw--flex tw--items-center tw--select-none',
    avatar: 'tw--rounded-full',
    info: '',
    name: '',
    role: '',
    imgWrapper: ''
  },
  variants: {
    theme: {
      light: {
        role: '',
      },
      dark: {
        role: '',
      },
    },
    orientation: {
      horizontal: {
        base: 'tw--flex-row tw--text-left',
        avatar: 'tw--shrink',
        name: 'tw--text-xl/7 tw--font-bold tw--leading-[30px]',
        info: 'tw--pl-[10px]'
      },
      vertical: {
        base: 'tw--flex-col tw--text-center',
        name: 'tw--text-[24px] tw--font-semibold',
      },
    },
  },
  compoundSlots: [
    {
      slots: ['role'],
      orientation: 'vertical',
      theme: 'light',
      class: 'tw--text-light-zephyr-600 tw--font-medium'
    },
    {
      slots: ['role'],
      orientation: 'horizontal',
      theme: 'light',
      class: 'tw--text-light-zephyr-800'
    },
    {
      slots: ['role'],
      orientation: 'vertical',
      theme: 'dark',
      class: 'tw--text-dark-zephyr-600'
    },
    {
      slots: ['role'],
      orientation: 'horizontal',
      theme: 'dark',
      class: 'tw--text-dark-zephyr-800'
    },
    {
      slots: ['imgWrapper'],
      orientation: 'horizontal',
      minimized: false,
      class: 'tw--relative tw--h-fit after:tw--absolute after:tw--w-[10px] after:tw--h-[10px] after:tw--bottom-[-2px] after:tw--left-[37px] after:tw--z-10 after:tw--rounded-full after:tw--bg-light-iota-dots' },
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
