import { func, object, string } from 'prop-types';
import payment from './variants';

export const Anchor = ({ href = '/', text, onClick, forwardedRef }) => {
  const { btn } = payment();
  return (
    <a
      href={ href } ref={ forwardedRef }
      onClick={ onClick }
      className={ btn() }
    >{ text }
    </a>
  );
};

Anchor.propTypes = {
  onClick: func.isRequired,
  text: string.isRequired,
  forwardedRef: object.isRequired,
  href: string,
};

export default Anchor;
