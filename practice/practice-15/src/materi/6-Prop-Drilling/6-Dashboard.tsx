import ProfileSection from './6-ProfileSection';
import type { UsernameProps } from './types/username.type';

function Dashboard({ name }: UsernameProps) {
  return <ProfileSection name={name} />;
}
export default Dashboard;
