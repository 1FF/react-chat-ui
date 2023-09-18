/* eslint-disable spaced-comment */
import { tv } from 'tailwind-variants';

export const profile = /*tw*/ tv({
  slots: {
    base: 'tw--flex tw--items-center',
    avatar: 'tw--rounded-full',
    info: 'tw--pl-3',
    name: 'tw--font-semibold',
    role: 'tw--text-opacity-80',
  },
  variants: {
    theme: {
      light: {
        role: 'tw--text-light-zephyr',
      },
      dark: {
        role: 'tw--text-dark-zephyr',
      },
    },
    orientation: {
      horizontal: {
        base: 'tw--flex-row',
        avatar: 'tw--shrink',
      },
      vertical: {
        base: 'tw--flex-col tw--text-center',
        role: 'tw--text-opacity-60',
      },
    },
    minimized: {
      false: {
        avatar: 'tw--h-14',
        name: 'tw--text-xl/7',
        role: 'tw--text-lg/6',
      },
      true: {
        avatar: 'tw--w-10',
        name: 'tw--text-sm/5',
        role: 'tw--text-xs/3',
      },
    },
  },
  compoundSlots: [
    {
      slots: ['avatar'],
      orientation: 'vertical',
      minimized: false,
      class: 'tw--h-16',
    },
    {
      slots: ['name'],
      orientation: 'vertical',
      minimized: false,
      class: 'tw--font-medium tw--text-2xl/8',
    },
    {
      slots: ['role'],
      orientation: 'vertical',
      minimized: false,
      class: 'tw--text-lg/8',
    },
  ],
});

export default profile;
