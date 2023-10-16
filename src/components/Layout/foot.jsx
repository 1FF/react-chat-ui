import { useAppSelector } from '@/hooks';
import { EmailForm } from '@/components/Form/email';

export const LayoutFoot = () => {
  const { isEmailFieldVisible } = useAppSelector(state => state.intentions.email);

  return (
    isEmailFieldVisible && <EmailForm />
  );
};

export default LayoutFoot;
