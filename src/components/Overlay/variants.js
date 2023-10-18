import { tv } from 'tailwind-variants';

export const overlay = tv({
  slots: {
    base: 'loader js-payment-loader tw--hidden tw--fixed tw--left-0 tw--top-0 tw--z-[101] tw--m-0 tw--flex tw--h-screen tw--w-screen tw--items-center tw--justify-center tw--px-5'
  },
  variants: {
    theme: {
      light: {
        base: 'tw--bg-light-overlay'
      },
      dark: {
        base: 'tw--bg-light-overlay'
      }
    }
  }
});

export default overlay;
