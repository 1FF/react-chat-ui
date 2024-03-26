import { tv } from 'tailwind-variants';

export const wrapper = /* tw */ tv({
  slots: {
    base: 'tw--fixed tw--flex tw--gap-2 tw--flex-col tw--p-3 tw--space-y-4 tw--bg-[#0f0e1e] tw--rounded-lg',
  },
  variants: {
    hidden: {
      true: 'tw--hidden',
    }
  }
});
