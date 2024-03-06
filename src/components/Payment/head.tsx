import { useAppSelector } from '../../hooks';
import { head as variants } from './variants';
interface PaymentHeadProps {
  config: {
    price: string;
    period: string;
  }
}

export const PaymentHead = ({ config }: PaymentHeadProps) => {
  const { translations } = useAppSelector((state) => state.config);
  const { wrapper, left, leftTop, icon, text, bottom, right, price, info } = variants();

  return (
    <header>
      <div className={wrapper()}>
        <span className={left()}>
          <div className={leftTop()}>
            <span className={icon()}>
              <svg width="26" height="26">
                <use xlinkHref="/img/sprite.svg#secured-check" />
              </svg>
            </span>
            { /* DEV NOTE: be aware that the text is not coming from an input so in the future it is not a good practice to use this attribute */}
            <span className={text()} dangerouslySetInnerHTML={{ __html: translations.paymentHeaderTxt1 }} />
          </div>
          <div className={bottom()}>
            {translations.paymentHeaderTxt2}
          </div>
        </span>
        <div className={right()}>
          <div className={price()}>{config.price}</div>
          <div className={info()}>
            {config.period}
          </div>
        </div>
      </div>
    </header>
  );
};

export default PaymentHead;
