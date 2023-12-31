import { string, bool } from 'prop-types';
import { useAppSelector } from '@/hooks';

import { getConfig } from '@/store/slices/config';
import { profile as variant } from './variants';

export const Profile = ({ orientation = 'horizontal', minimized = false }) => {
  const { aiProfile, themeId: theme } = useAppSelector(getConfig);
  const { base, avatar, info, name, role, imgWrapper } = variant({ theme, orientation, minimized });

  return (
    <div className={ base() }>
      <span className={ imgWrapper() }>
        <img
          className={ avatar() }
          src={ aiProfile.imgSrc } alt="img"
        />
      </span>
      <div className={ info() }>
        <div className={ name() }>{ aiProfile.name }</div>
        <div className={ role() }>{ aiProfile.role }</div>
      </div>
    </div>
  );
};

Profile.propTypes = {
  orientation: string,
  minimized: bool,
};

export default Profile;
