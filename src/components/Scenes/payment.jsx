import { func } from 'prop-types';
import { Overlay } from '@/components/Overlay';
import { PaymentHead, CloseButton, PaymentFooter, PaymentLoader } from '@/components/Payment';
import { useAppSelector } from '@/hooks';

export const PaymentScene = ({ onClose }) => {
  const { displayPlanPrice } = useAppSelector(state => state.meta.pd);
  const { translations } = useAppSelector(state => state.config);

  return (
    (
      <div className="tw--absolute tw--bg-dark-whisper tw--top-0 tw--left-0 tw--w-full tw--h-screen tw--flex tw--flex-col tw--justify-center tw--items-center tw--px-5 tw--z-50">
        { /* DEV NOTE the id chat-payment-view is needed for now because rz uses
        it to select the payment form especially for chat must be refactored on a later stage */ }
        <div
          id="chat-payment-view"
          className="light-pink-blue tw--max-w-[500px] tw--bg-white tw--w-full tw--min-h-[400px] tw--relative tw--rounded-lg tw--flex tw--flex-col tw--p-7"
        >
          <Overlay><PaymentLoader texts={ translations.loaderTexts } title={ translations.tm1224 } /></Overlay>
          <CloseButton onClick={ onClose } />
          <div id="primer-form-container" className="tw--w-full h-full">
            <PaymentHead config={ { price: displayPlanPrice, period: translations.billingFrequencyTmsg } } />
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
