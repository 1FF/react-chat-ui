/* eslint-disable spaced-comment */
import { tv } from 'tailwind-variants';

export const payment = /*tw*/ tv({
  slots: {
    btn: 'tw--flex-1 tw--space-x-2 tw--max-h-14 tw--text-white tw--bg-dark-neon tw--max-w-[280px] tw--mx-auto tw--px-4 tw--py-3 tw--font-bold tw--rounded-[20px] tw--shadow-[0px_12px_24px_-4px_rgba(1,154,255,0.2)] tw--flex tw--justify-center tw--items-center tw--cursor-pointer tw--relative tw--w-full tw--text-base tw--mb-5',
  }
});

export const wrapper = /*tw*/ tv({
  slots: {
    base: 'tw--absolute tw--top-0 tw--left-0 tw--w-full tw--h-screen tw--flex tw--flex-col tw--justify-center tw--items-center tw--px-5 tw--z-50',
  },
  variants: {
    theme: {
      light: 'tw--bg-light-lumina',
      dark: 'tw--bg-dark-lumina'
    }
  }
});

export const head = /*tw*/ tv({
  slots: {
    wrapper: 'tw--flex tw--justify-between tw--w-full tw--mb-7',
    left: 'tw--flex tw--flex-col',
    leftTop: 'tw--flex tw--flex-row',
    icon: 'tw--pr-[5px] tw--mr-[5px] tw--flex tw--items-center tw--border-r tw--border-r-[#cacadb]',
    text: 'tw--flex tw--flex-col tw--justify-center tw--text-left tw--text-[10px] tw--leading-[1] tw--text-muted-blue',
    bottom: 'tw--opacity-60 tw--text-[10px] tw--leading-[2] tw--text-muted-blue',
    right: 'tw--flex tw--flex-col tw--items-end',
    price: 'tw--text-light-seraph tw--font-bold tw--leading-[1.4] tw--text-[20px]',
    info: 'tw--leading-[2] tw--text-[10px] tw--text-muted-blue',
  },
});

export const close = /*tw*/ tv({
  slots: {
    base: 'tw--absolute tw--top-[-30px] tw--right-[-10px] tw--w-6 tw--h-6 tw--p-1 tw--bg-white tw--rounded-full tw--cursor-pointer tw--text-muted-blue',
  },
});

export const foot = tv({
  slots: {
    base: 'tw--mt-[30px] tw--flex tw--items-center tw--justify-center tw--text-[12.8px] tw--leading-[1.56] tw--text-light-seraph tw--font-bold',
    icon: 'tw--mr-[5px]'
  },
});

export const loader = tv({
  slots: {
    wrapper: 'loader js-payment-loader tw--max-w-[335px] tw--relative tw--flex tw--w-full tw--flex-col tw--items-center tw--justify-center tw--rounded-xl tw--p-5',
    inner: 'tw--absolute tw--left-0 tw--top-8 tw--flex tw--h-8 tw--w-full tw--items-center tw--justify-center',
    dots: 'tw--relative tw--flex tw--items-center tw--justify-center tw--p-3',
    dotsIn: 'tw--relative tw--mx-auto tw--my-4 tw--box-content tw--block tw--h-4 tw--w-4 tw--rounded-full',
    progressCheckmark: 'tw--mb-6 tw--mt-24 tw--box-border tw--flex tw--w-full tw--items-center tw--justify-center tw--text-center',
    panelTitle: 'js-payment-message tw--text-lg tw--font-bold tw--leading-5',
    icon: 'tw--mr-5 tw--h-6 tw--w-6 tw--rounded-full',
    spinningTexts: 'tw--mx-10 tw--w-64 tw--shrink-0 tw--text-[16px] tw--leading-[1.63]',
    filmContainer: 'js-msg-spin tw--flex tw--justify-center tw--overflow-hidden tw--text-center',
    film: 'tw--animate-text-spin tw--flex tw--w-full tw--max-w-xs tw--translate-x-72'
  },
  variants: {
    theme: {
      light: {
        wrapper: 'tw--shadow-light-card tw--bg-light-loader',
        dotsIn: 'tw--bg-light-pale-dots tw--shadow-light-loading-dots tw--animate-light-shadow-dots',
        icon: 'tw--bg-light-iota-dots',
        spinningTexts: 'tw--text-light-zeta tw--opacity-60'
      },
      dark: {
        wrapper: 'tw--shadow-dark-card tw--bg-dark-loader',
        dotsIn: 'tw--bg-dark-pale-dots tw--shadow-dark-loading-dots tw--animate-dark-shadow-dots',
        icon: 'tw--bg-dark-iota-dots',
        spinningTexts: 'tw--text-dark-zeta tw--opacity-60'
      }
    }
  }
});

export default payment;
