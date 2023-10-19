import { func, object, string } from 'prop-types';
import payment from './variants';

export const Link = ({ href, text, onClick, forwardedRef }) => {
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

Link.propTypes = {
  onClick: func.isRequired,
  text: string.isRequired,
  forwardedRef: object.isRequired,
  href: string.isRequired,
};

export default Link;
