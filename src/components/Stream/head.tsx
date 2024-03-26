import { Profile } from '../../components/Profile';
import { ScreenOrientation } from '../../config/enums';
import { streamHead as variant } from './variants';

export const StreamHead = ({ titleTxt }: { titleTxt: string }) => {
  const { base, title } = variant();

  return (
    <div className={base()}>
      {title && <div className={title()}>{titleTxt}</div>}
      <Profile orientation={ScreenOrientation.vertical} />
    </div>
  );
};

export default StreamHead;
