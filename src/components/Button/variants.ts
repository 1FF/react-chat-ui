/* eslint-disable spaced-comment */
import { tv, type VariantProps } from 'tailwind-variants';

export const basic = /*tw*/ tv({
  slots: {
    base: 'tw--flex-1 tw--w-full tw--px-[15px] tw--py-[11px] tw--rounded-[20px] tw--border select-none',
  },
  variants: {
    theme: {
      light: {
        base: 'tw--bg-light-glazeBg tw--text-light-glazeText tw--border-light-seraph tw--font-medium',
      },
      dark: {
        base: 'tw--bg-dark-glazeBg tw--text-dark-glazeText tw--border-dark-glaze',
      },
    },
  },
});

export const icon = /*tw*/ tv({
  slots: {
    base: 'tw--text-[inherit]',
  },
  variants: {
    theme: {
      light: { base: 'tw--text-light-status' },
      dark: { base: 'tw--text-dark-seraph' },
    },
    outlined: {
      true: 'tw--p-0.5 tw--bg-white tw--rounded-full tw--shadow',
      false: 'tw--bg-[transparent]',
    },
  },
});

export type BasicVariants = VariantProps<typeof basic>;
export type IconVariants = VariantProps<typeof icon>;
