import UserName from './6-UserName';
import type { UsernameProps } from './types/username.type';

const ProfileSection = ({ name }: UsernameProps) => {
  return <UserName name={name} />;
};

export default ProfileSection;
