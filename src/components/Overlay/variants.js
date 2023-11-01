import { tv } from 'tailwind-variants';

// eslint-disable-next-line spaced-comment
export const overlay = /*tw*/ tv({
  slots: {
    base: 'loader js-payment-loader tw--hidden tw--fixed tw--left-0 tw--top-0 tw--z-[101] tw--m-0 tw--flex tw--h-screen tw--w-screen tw--items-center tw--justify-center tw--px-5'
  },
  variants: {
    theme: {
      light: {
        base: 'tw--bg-light-lumina'
      },
      dark: {
        base: 'tw--bg-dark-lumina'
      }
    }
  }
});

export default overlay;
