/* eslint-disable import/prefer-default-export */
import { bool, func, string } from 'prop-types';
import { wrapper, pin } from './variants';

export const Toggler = ({ onToggle, on = false, title = '' }: { onToggle: any, on: boolean, title: string }) => {
  const { base: outline } = wrapper({ color: on ? 'enabled' : 'disabled' });
  const { base: toggle } = pin({ position: on ? 'enabled' : 'disabled' });
  return (
    <div className="tw--flex tw--flex-col tw--text-white">
      <span className="tw--pb-1">{title}</span>
      <button
        type="button"
        className={outline()}
        onClick={onToggle}
      >
        <span className={toggle()} />
      </button>
    </div>
  );
};

Toggler.propTypes = {
  onToggle: func.isRequired,
  title: string.isRequired,
  on: bool,
};
