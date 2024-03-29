import { ScreenOrientation } from '../../config/enums';
import { useAppSelector } from '../../hooks';
import { ProfileProps } from '../../interfaces/component';
import { getConfig } from '../../store/slices/config';
import { profile as variant } from './variants';

export const Profile = ({ orientation = ScreenOrientation.horizontal, minimized = false }: ProfileProps) => {
  const { aiProfile } = useAppSelector(getConfig);
  const { base, avatar, info, name, role, imgWrapper } = variant({ orientation, minimized });

  return (
    <div className={base()}>
      <span className={imgWrapper()}>
        <img
          className={avatar()}
          src={aiProfile.imgSrc}
          alt="img"
        />
      </span>
      <div className={info()}>
        <div className={name()}>{aiProfile.name}</div>
        <div className={role()}>{aiProfile.role}</div>
      </div>
    </div>
  );
};

export default Profile;
