import { useEffect } from 'react';
import { PaymentButtonProps } from '../../interfaces/component';
import { useAppSelector } from '../../hooks';
import { getConfig } from '../../store/slices/config';
import { payment as variant } from './variants';
import { track } from '../../services/tracking';
import { AllEvents } from '../../config/enums';

export const PaymentButton = ({ text, onClick, e2e, disabled = false }: PaymentButtonProps) => {
  const { themeId: theme } = useAppSelector(getConfig);
  const meta = useAppSelector(state => state.meta);
  const currentEmail = useAppSelector(state => state.intentions.email.current);
  const { btn } = variant({ theme });

  useEffect(() => {
    const data = {
      eventType: AllEvents.addToCart,
      systemType: meta.systemType,
      utmParams: meta.marketing.lastUtmParams,
      customerUuid: meta.cid,
      email: currentEmail
    };

    track(data);

    data.eventType = AllEvents.priceSeen;
    track(data);
  }, [])

  return (
    <button
      onClick={onClick}
      className={btn()}
      disabled={disabled}
      type="button"
      data-e2e={e2e}
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
      <span>{text}</span>
    </button>
  );
};

export default PaymentButton;
