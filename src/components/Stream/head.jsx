import { string } from 'prop-types';
import { useAppSelector } from '@/hooks';
import { isNonEmptyStr } from '@/utils';

import { Profile } from '@/components/Profile';
import { streamHead as variant } from './variants';

export const StreamHead = ({ titleTxt = '' }) => {
  const { themeId: theme } = useAppSelector((state) => state.config);
  const { base, title } = variant({ theme });

  const hasTitle = isNonEmptyStr(titleTxt);

  return (
    <div className={ base() }>
      { hasTitle && <div className={ title() }>{ titleTxt }</div> }
      <Profile orientation="vertical" />
    </div>
  );
};

StreamHead.propTypes = {
  titleTxt: string,
};

export default StreamHead;
