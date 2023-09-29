import { bool, func, string } from 'prop-types';
import { wrapper, pin } from './variants';

const Toggler = ({ toggle, on = false, title = '' }) => {
  const { base: toggleWrapper } = wrapper({ color: on ? 'on' : 'off' });
  const { base: togglePin } = pin({ position: on ? 'on' : 'off' });
  return (
    <div className="tw--flex tw--flex-col tw--text-white">
      <span className="tw--pb-1">{ title }</span>
      <button
        type="button"
        className={ toggleWrapper() }
        onClick={ toggle }
      >
        <span className={ togglePin() } />
      </button>
    </div>
  );
};

Toggler.propTypes = {
  toggle: func.isRequired,
  on: bool,
  title: string
};

export default Toggler;
