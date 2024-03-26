import { tv } from 'tailwind-variants';

export const streamBase = /* tw*/ tv({
  slots: {
    base: 'tw--pt-10 tw--w-full tw--h-full tw--pb-5 tw--px-5 tw--overflow-y-scroll tw--flex tw--flex-col-reverse tw--translate-z-0 tw--text-zephyr-100 tw--font-density-different tw--mt-0 tw--mb-auto',
    second: 'tw--mt-0 tw--mb-auto',
    date: 'tw--text-center tw--text-sm tw--pb-[5px] tw--opacity-40'
  },
});

export const streamHead = /* tw*/ tv({
  slots: {
    base: 'tw--flex tw--flex-col tw--items-center tw--w-full tw--mx-auto tw--pt-5 tw--pb-10',
    title: 'tw--pb-[30px] tw--max-w-[400px] tw--text-center tw--mx-[30px] select-none  tw--font-density-different',
  },
});

export const streamRow = /* tw*/ tv({
  slots: {
    base: 'tw--grid tw--break-words',
  },
});

export const flickerEffect = /* tw */ tv({
  slots: {
    base: 'after:tw--inline-block after:tw--ml-1 after:tw--h-4 after:tw--w-1 select-none after:tw--bg-zephyr-100',
  },
  variants: {
    isTyping: {
      true: 'after:tw--animate-blink',
      false: 'after:tw--hidden'
    },
  }
});

export const streamBubble = /* tw*/ tv({
  slots: {
    base: 'tw--relative tw--max-w-[375px] tw--whitespace-pre-wrap tw--rounded-[20px] tw--mb-5 tw--space-y-5 tw--font-density-different',
    action: 'tw--absolute tw--bottom-[-16px] tw--right-[-10px] tw--text-seraph',
    separator: 'tw--px-[15px] tw--py-[11px] tw--rounded-[20px] tw--w-fit tw--ml-auto tw--mr-0'
  },
  compoundSlots: [
    {
      slots: ['base'],
      type: 'assistant',
      class: 'tw--bg-lumina tw--px-[15px] tw--py-[11px]',
    },
    {
      slots: ['base'],
      type: 'user',
      class: 'tw--justify-self-end',
    },
    {
      slots: ['separator'],
      type: 'user',
      class: 'tw--bg-seraph tw--text-white'
    },
  ],
});

export const ellipsis = tv({
  slots: {
    dotFirst: 'tw--inline-block tw--h-[12px] tw--w-[12px] tw--rounded-full tw--opacity-40 tw--animate-wave tw--bg-zephyr-100',
    dotSecond: 'tw--inline-block tw--h-[12px] tw--w-[12px] tw--rounded-full tw--opacity-40 tw--animate-wave-delay tw--bg-zephyr-100',
    dotThird: 'tw--inline-block tw--h-[12px] tw--w-[12px] tw--rounded-full tw--opacity-40 tw--animate-wave-delay-2 tw--bg-zephyr-100',
  },
});

export default { streamBase, streamHead, streamRow, streamBubble, ellipsis };
