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

export const flickerEffect = /* tw */ tv({
  slots: {
    base: 'after:tw--inline-block after:tw--ml-1 after:tw--h-4 after:tw--w-1',
  },
  variants: {
    isTyping: {
      true: 'after:tw--animate-blink',
      false: 'after:tw--hidden'
    },
    theme: {
      light: 'after:tw--bg-light-zephyr',
      dark: 'after:tw--bg-dark-zephyr'
    }
  }
});

export const streamBubble = /*tw*/ tv({
  slots: {
    base: 'tw--max-w-xs tw--px-4 tw--py-3',
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

export const ellipsis = tv({
  slots: {
    dotFirst: 'tw--inline-block tw--h-[12px] tw--w-[12px] tw--rounded-full tw--mx-1 tw--my-1 tw--opacity-40 tw--animate-wave',
    dotSecond: 'tw--inline-block tw--h-[12px] tw--w-[12px] tw--rounded-full tw--mx-1 tw--my-1 tw--opacity-40 tw--animate-wave-delay',
    dotThird: 'tw--inline-block tw--h-[12px] tw--w-[12px] tw--rounded-full tw--mx-1 tw--my-1 tw--opacity-40 tw--animate-wave-delay-2',
  },
  compoundSlots: [{
    slots: ['dotFirst', 'dotSecond', 'dotThird'],
    theme: 'light',
    class: 'tw--bg-light-zephyr',
  },
  {
    slots: ['dotFirst', 'dotSecond', 'dotThird'],
    theme: 'dark',
    class: 'tw--bg-dark-zephyr',
  }]
});

export default { streamBase, streamHead, streamRow, streamBubble, ellipsis };
