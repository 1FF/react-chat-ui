import { string, func, bool } from 'prop-types';
import { useAppSelector } from '@/hooks';
import { getConfig } from '@/store/slices/config';

import { payment as variant } from './variants';

export const PaymentButton = ({ text = null, onClick = null, e2e = null, disabled = false }) => {
  const { themeId: theme } = useAppSelector(getConfig);
  const { btn } = variant({ theme });

  return (
    <button
      onClick={ onClick }
      className={ btn() }
      disabled={ disabled }
      type="button"
      data-e2e={ e2e }
    >
      <svg
        width="24" height="24"
        viewBox="0 0 24 24" fill="none"
      >
        <path
          opacity=".3" d="M4 12h16v6H4v-6zm0-6h16v2H4V6z"
          fill="currentColor"
        />
        <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z" fill="currentColor" />
      </svg>
      <span>{ text }</span>
    </button>
  );
};

PaymentButton.propTypes = {
  text: string.isRequired,
  onClick: func.isRequired,
  disabled: bool,
  e2e: string
};

export default PaymentButton;
