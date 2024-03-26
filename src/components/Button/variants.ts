/* eslint-disable spaced-comment */
import { tv, type VariantProps } from 'tailwind-variants';

export const basic = /*tw*/ tv({
  slots: {
    base: 'tw--flex-1 tw--w-full tw--px-[15px] tw--py-[11px] tw--rounded-[20px] tw--border select-none tw--bg-glazeBg tw--text-glazeText tw--border-glaze  tw--font-density-different',
  },
});

export const icon = /*tw*/ tv({
  slots: {
    base: 'tw--flex-1 tw--text-dots',
  },
  variants: {
    outlined: {
      true: 'tw--p-0.5 tw--bg-white tw--rounded-full tw--shadow',
      false: 'tw--bg-[transparent]',
    },
  },
});

export type BasicVariants = VariantProps<typeof basic>;
export type IconVariants = VariantProps<typeof icon>;
