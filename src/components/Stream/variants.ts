import { tv } from 'tailwind-variants';

export const streamBase = /* tw*/ tv({
  slots: {
    base: 'tw--pt-10 tw--w-full tw--h-full tw--pb-5 tw--px-5 tw--overflow-y-scroll tw--flex tw--flex-col-reverse tw--translate-z-0',
    second: 'tw--mt-0 tw--mb-auto',
    date: 'tw--text-center tw--text-sm tw--pb-[5px] tw--opacity-40'
  },
  variants: {
    theme: {
      light: {
        base: 'tw--text-light-zephyr-100 tw--font-medium',
      },
      dark: {
        base: 'tw--text-dark-zephyr-100'
      }
    }
  }
});

export const streamHead = /* tw*/ tv({
  slots: {
    base: 'tw--flex tw--flex-col tw--items-center tw--w-full tw--mx-auto tw--pt-5 tw--pb-10',
    title: 'tw--pb-[30px] tw--max-w-[400px] tw--text-center tw--mx-[30px] select-none',
  },
  variants: {
    theme: {
      light: { title: 'tw--font-medium' },
      dark: { title: '' },
    }
  }
});

export const streamRow = /* tw*/ tv({
  slots: {
    base: 'tw--grid tw--break-words',
  },
});

export const flickerEffect = /* tw */ tv({
  slots: {
    base: 'after:tw--inline-block after:tw--ml-1 after:tw--h-4 after:tw--w-1 select-none',
  },
  variants: {
    isTyping: {
      true: 'after:tw--animate-blink',
      false: 'after:tw--hidden'
    },
    theme: {
      light: 'after:tw--bg-light-zephyr-100',
      dark: 'after:tw--bg-dark-zephyr-100'
    }
  }
});

export const streamBubble = /* tw*/ tv({
  slots: {
    base: 'tw--relative tw--max-w-[375px] tw--whitespace-pre-wrap tw--rounded-[20px] tw--mb-5 tw--space-y-5',
    action: 'tw--absolute tw--bottom-[-16px] tw--right-[-10px]',
    separator: 'tw--px-[15px] tw--py-[11px] tw--rounded-[20px] tw--w-fit tw--ml-auto tw--mr-0'
  },
  variants: {
    theme: {
      light: {
        action: 'tw--text-light-seraph',
        base: 'tw--font-medium',
      },
      dark: {
        action: 'tw--text-dark-seraph',
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
      class: 'tw--bg-light-lumina tw--px-[15px] tw--py-[11px]',
    },
    {
      slots: ['base'],
      theme: 'dark',
      type: 'assistant',
      class: 'tw--bg-dark-lumina tw--px-[15px] tw--py-[11px]',
    },
    {
      slots: ['separator'],
      theme: 'dark',
      type: 'user',
      class: 'tw--bg-dark-seraph'
    },
    {
      slots: ['separator'],
      theme: 'light',
      type: 'user',
      class: 'tw--bg-light-seraph tw--text-white'
    },
  ],
});

export const ellipsis = tv({
  slots: {
    dotFirst: 'tw--inline-block tw--h-[12px] tw--w-[12px] tw--rounded-full tw--opacity-40 tw--animate-wave',
    dotSecond: 'tw--inline-block tw--h-[12px] tw--w-[12px] tw--rounded-full tw--opacity-40 tw--animate-wave-delay',
    dotThird: 'tw--inline-block tw--h-[12px] tw--w-[12px] tw--rounded-full tw--opacity-40 tw--animate-wave-delay-2',
  },
  compoundSlots: [{
    slots: ['dotFirst', 'dotSecond', 'dotThird'],
    theme: 'light',
    class: 'tw--bg-light-zephyr-100',
  },
  {
    slots: ['dotFirst', 'dotSecond', 'dotThird'],
    theme: 'dark',
    class: 'tw--bg-dark-zephyr-100',
  }]
});

export default { streamBase, streamHead, streamRow, streamBubble, ellipsis };
