import { func } from 'prop-types';
import { Overlay } from '@/components/Overlay';
import { PaymentHead, CloseButton, PaymentFooter, PaymentLoader } from '@/components/Payment';
import { useAppSelector } from '@/hooks';
import { wrapper } from '../Payment/variants';

export const PaymentScene = ({ onClose }) => {
  const { displayPlanPrice, billingFrequencyTmsg } = useAppSelector(state => state.meta.pd);
  const { translations, themeId: theme } = useAppSelector(state => state.config);
  const { base } = wrapper({ theme });

  return (
    (
      <div className={ base() }>
        <div
          id="chat-payment-view"
          className="light-pink-blue tw--max-w-[500px] tw--bg-white tw--w-full tw--min-h-[400px] tw--relative tw--rounded-lg tw--flex tw--flex-col tw--p-7"
        >
          <Overlay>
            <PaymentLoader texts={ translations.loaderTexts } title={ translations.tm1224 } />
          </Overlay>
          <CloseButton onClick={ onClose } />
          <div id="primer-form-container" className="tw--w-full h-full">
            <PaymentHead config={ { price: displayPlanPrice, period: billingFrequencyTmsg } } />
          </div>
          <PaymentFooter />
        </div>
      </div>
    )
  );
};

PaymentScene.propTypes = {
  onClose: func.isRequired,
};

export default PaymentScene;
