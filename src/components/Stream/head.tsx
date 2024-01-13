import { useAppSelector } from '../../hooks';
import { isNonEmptyStr } from '../../utils';

import { Orientation, Profile } from '../../components/Profile';
import { getConfig } from '../../store/slices/config';
import { streamHead as variant } from './variants';

export const StreamHead = ({ titleTxt = '' }) => {
  const { themeId: theme } = useAppSelector(getConfig);
  const { base, title } = variant({ theme });

  const hasTitle = isNonEmptyStr(titleTxt);

  return (
    <div className={ base() }>
      { hasTitle && <div className={ title() }>{ titleTxt }</div> }
      <Profile orientation={Orientation.vertical} />
    </div>
  );
};

export default StreamHead;
