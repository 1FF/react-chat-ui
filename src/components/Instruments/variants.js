import { tv } from 'tailwind-variants';

const buttons = /* tw */ tv({
  slots: {
    base: 'tw--fixed tw--flex tw--gap-2 tw--p-3 tw--bg-black tw--text-white',
  },
  variants: {
    hidden: {
      true: 'tw--hidden',
    }
  }
});

export default buttons;
