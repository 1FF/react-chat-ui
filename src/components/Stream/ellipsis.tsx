import { useAppSelector } from '../../hooks';
import { getConfig } from '../../store/slices/config';
import { ellipsis as variant } from './variants';

export const Ellipsis = () => {
  const { themeId: theme } = useAppSelector(getConfig);
  const { dotFirst, dotSecond, dotThird } = variant({ theme });
  return (
    <div className="tw--ml-7 tw--space-x-[6px]" data-e2e="stream-response-loader">
      <span className={ dotFirst() } />
      <span className={ dotSecond() } />
      <span className={ dotThird() } />
    </div>
  );
};

export default Ellipsis;
