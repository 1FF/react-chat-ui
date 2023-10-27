import { func, object, string } from 'prop-types';
import payment from './variants';

export const Link = ({ href, text, onClick, forwardedRef, e2e = null }) => {
  const { btn } = payment();
  return (
    <a
      href={ href } ref={ forwardedRef }
      onClick={ onClick }
      className={ btn() }
      data-e2e={ e2e }
    >{ text }
    </a>
  );
};

Link.propTypes = {
  onClick: func.isRequired,
  text: string.isRequired,
  e2e: string,
  forwardedRef: object.isRequired,
  href: string.isRequired,
};

export default Link;
