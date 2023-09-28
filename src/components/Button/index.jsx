import { string } from 'prop-types';
import { useAppSelector } from '@/hooks';
import { getConfig } from '@/store/slices/config';

export const Button = ({ text = null }) => {
  const { themeId: theme } = useAppSelector(getConfig);

  return (
    <button type="button">{ text }</button>
  );
};

Button.propTypes = {
  text: string.isRequired,
};

export default Button;
