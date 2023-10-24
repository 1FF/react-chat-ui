import { func } from 'prop-types';
import { close as variants } from './variants';

export const CloseButton = ({ onClick }) => {
  const { base } = variants();
  return (
    <button
      type="button" className={ base() }
      onClick={ onClick }
    >
      <svg
        fill="none"
        viewBox="0 0 18 18"
      >
        <path
          d="M13.725 4.282a.747.747 0 0 0-1.058 0L9 7.942 5.332 4.276a.748.748 0 1 0-1.057 1.057L7.942 9l-3.667 3.668a.748.748 0 1 0 1.057 1.057L9 10.057l3.667 3.668a.748.748 0 1 0 1.058-1.057L10.057 9l3.668-3.668a.752.752 0 0 0 0-1.05z"
          fill="currentColor"
        />
      </svg>
    </button>
  );
};

CloseButton.propTypes = {
  onClick: func.isRequired
};

export default CloseButton;
