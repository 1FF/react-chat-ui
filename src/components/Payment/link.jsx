import { func, object, string } from 'prop-types';
import payment from './variants';

export const Link = ({ href, text, onClick, forwardedRef, e2e = null }) => {
  const { link } = payment();
  return (
    <a
      href={ href } ref={ forwardedRef }
      onClick={ onClick }
      className={ link() }
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
