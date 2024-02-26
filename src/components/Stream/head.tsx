import { useAppSelector } from '../../hooks';

import { Profile } from '../../components/Profile';
import { getConfig } from '../../store/slices/config';
import { streamHead as variant } from './variants';
import { ScreenOrientation } from '../../config/enums';

export const StreamHead = ({ titleTxt = '' }) => {
  const { themeId: theme } = useAppSelector(getConfig);
  const { base, title } = variant({ theme });

  return (
    <div className={base()}>
      {title && <div className={title()}>{titleTxt}</div>}
      <Profile orientation={ScreenOrientation.vertical} />
    </div>
  );
};

export default StreamHead;
