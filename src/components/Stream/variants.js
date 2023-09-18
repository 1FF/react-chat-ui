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
      response: {
        base: 'tw--justify-self-start',
      },
      request: {
        base: 'tw--justify-self-end',
      },
    },
  },
  compoundSlots: [
    {
      slots: ['base'],
      theme: 'light',
      type: 'request',
      class: 'tw--bg-light-seraph tw--text-white',
    },
    {
      slots: ['base'],
      theme: 'light',
      type: 'response',
      class: 'tw--bg-light-lumina',
    },
    {
      slots: ['base'],
      theme: 'dark',
      type: 'request',
      class: 'tw--bg-dark-seraph',
    },
    {
      slots: ['base'],
      theme: 'dark',
      type: 'response',
      class: 'tw--bg-dark-lumina',
    },
  ],
});

export default { streamBase, streamHead, streamRow, streamBubble };
