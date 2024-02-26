import { foot as variants } from './variants';

export const PaymentFooter = () => {
  const { base, icon } = variants();
  return (
    <footer className={ base() }>
      <svg
        className={ icon() }
        fill="none"
        height="12"
        width="12"
        viewBox="0 0 12 12"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9 4h-.5V3a2.5 2.5 0 0 0-5 0v1H3c-.55 0-1 .45-1 1v5c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1zM6 8.5c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zM7.55 4h-3.1V3c0-.855.695-1.55 1.55-1.55.855 0 1.55.695 1.55 1.55v1z"
          fill="currentColor"
        />
      </svg>
      <span>SSL Secure Connection</span>
    </footer>
  );
};

export default PaymentFooter;
