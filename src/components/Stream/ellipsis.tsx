import { ellipsis as variant } from './variants';

export const Ellipsis = () => {
  const { dotFirst, dotSecond, dotThird } = variant();
  return (
    <div className="tw--ml-7 tw--space-x-[6px]" data-e2e="stream-response-loader">
      <span className={ dotFirst() } />
      <span className={ dotSecond() } />
      <span className={ dotThird() } />
    </div>
  );
};

export default Ellipsis;
