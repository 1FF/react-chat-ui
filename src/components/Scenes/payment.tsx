import { MouseEvent } from 'react';

import { useAppSelector } from '../../hooks';
import { Overlay } from '../Overlay';
import { CloseButton, PaymentFooter, PaymentHead, PaymentLoader, } from '../Payment';
import { wrapper } from '../Payment/variants';

export const PaymentScene = ({ onClose }: { onClose: (e: MouseEvent<HTMLButtonElement>) => void }) => {
  const { displayPlanPrice, billingFrequencyTmsg } = useAppSelector((state) => state.meta.pd);
  const { translations } = useAppSelector((state) => state.config);
  const { base } = wrapper();

  return (
    (
      <div className={base()}>
        <div
          id="chat-payment-view"
          className="light-pink-blue tw--max-w-[500px] tw--bg-white tw--w-full tw--min-h-[400px] tw--relative tw--rounded-lg tw--flex tw--flex-col tw--p-7"
        >
          <Overlay>
            <PaymentLoader texts={translations.loaderTexts} title={translations.tm1224} />
          </Overlay>
          <CloseButton onClick={onClose} />
          <div id="primer-form-container" className="h-full primer-theme tw--w-full">
            <PaymentHead config={{ price: displayPlanPrice, period: billingFrequencyTmsg }} />
          </div>
          <PaymentFooter />
        </div>
      </div>
    )
  );
};

export default PaymentScene;
