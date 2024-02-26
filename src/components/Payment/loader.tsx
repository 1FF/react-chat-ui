import { useAppSelector } from '../../hooks';
import { getConfig } from '../../store/slices/config';
import { loader as variants } from './variants';

export const PaymentLoader = ({ texts = [], title = '' }) => {
  const { themeId: theme } = useAppSelector(getConfig);
  const { wrapper, inner, dots, dotsIn, icon, progressCheckmark, panelTitle, spinningTexts, filmContainer, film } = variants({ theme });
  return (
    <div
      className={ wrapper() }
    >
      <div className={ inner() }>
        <div className={ dots() }>
          <span
            className={ dotsIn() }
          />
        </div>
      </div>

      <div className={ progressCheckmark() }>
        <span className={ icon() }>
          <svg
            width="24" height="24"
            fill="none"
            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="12" cy="12"
              r="12"
            />
            <path
              d="m9.75 15.127-2.602-2.602a.748.748 0 0 0-1.058 1.057l3.135 3.136a.747.747 0 0 0 1.058 0l7.935-7.935a.748.748 0 0 0-1.058-1.058l-7.41 7.402z"
              fill="white"
            />
          </svg>
        </span>
        <p className={ panelTitle() }>{ title }</p>
      </div>

      <div className={ filmContainer() }>
        <div className={ film() }>
          { texts.map((txt) => (
            <div className={ spinningTexts() } key={ txt }>
              { txt }
            </div>
          )) }
        </div>
      </div>
    </div>
  );
};

export default PaymentLoader;
