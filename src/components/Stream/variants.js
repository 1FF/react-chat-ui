/* eslint-disable spaced-comment */
import { tv } from 'tailwind-variants';

export const streamBase = /*tw*/ tv({
  slots: {
    base: 'tw--flex-1 tw--px-4 tw--py-2',
  },
});

export const streamHead = /*tw*/ tv({
  slots: {
    base: 'tw--flex tw--flex-col tw--items-center tw--w-full',
    title: 'tw--pt-12 tw--pb-6 tw--text-lg',
  },
});

export const streamRow = /*tw*/ tv({
  slots: {
    base: 'tw--grid tw--py-5',
  },
});

export const streamBubble = /*tw*/ tv({
  slots: {
    base: 'tw--max-w-[50%] tw--px-4 tw--py-3',
  },
  variants: {
    theme: {
      light: {
        base: 'tw--rounded-3xl',
      },
      dark: {
        base: 'tw--rounded-3xl',
      },
    },
    type: {
      assistant: {
        base: 'tw--justify-self-start',
      },
      user: {
        base: 'tw--justify-self-end',
      },
    },
  },
  compoundSlots: [
    {
      slots: ['base'],
      theme: 'light',
      type: 'assistant',
      class: 'tw--bg-light-lumina',
    },
    {
      slots: ['base'],
      theme: 'light',
      type: 'user',
      class: 'tw--bg-light-seraph tw--text-white',
    },
    {
      slots: ['base'],
      theme: 'dark',
      type: 'assistant',
      class: 'tw--bg-dark-lumina',
    },
    {
      slots: ['base'],
      theme: 'dark',
      type: 'user',
      class: 'tw--bg-dark-seraph',
    },
  ],
});

export default { streamBase, streamHead, streamRow, streamBubble };
