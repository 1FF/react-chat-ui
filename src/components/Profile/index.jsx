import { string, bool } from 'prop-types';
import { useAppSelector } from '@/hooks';

import { profile as variant } from './variants';

export const Profile = ({ orientation = 'horizontal', minimized = false }) => {
  const { aiProfile, themeId: theme } = useAppSelector((state) => state.config);
  const { base, avatar, info, name, role } = variant({ theme, orientation, minimized });

  return (
    <div className={ base() }>
      <img
        className={ avatar() }
        src={ aiProfile.imgSrc } alt="img"
      />
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
