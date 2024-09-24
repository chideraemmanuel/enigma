import ProfileHeader from '@/containers/profile-header';
import { FC } from 'react';

interface Props {
  children: React.ReactNode;
}

const ProfileLayout: FC<Props> = ({ children }) => {
  return (
    <>
      <ProfileHeader />
      <div className="md:container px-4">{children}</div>
    </>
  );
};

export default ProfileLayout;
