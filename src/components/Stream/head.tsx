import { Profile } from '../../components/Profile';
import { ScreenOrientation } from '../../config/enums';
import { useAppSelector } from '../../hooks';
import { getConfig } from '../../store/slices/config';
import { streamHead as variant } from './variants';

export const StreamHead = ({ titleTxt }: { titleTxt: string }) => {
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
