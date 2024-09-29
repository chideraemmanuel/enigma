import SessionUpdater from '@/components/session-updater';
import { Button } from '@/components/ui/button';
import AddEmailDialog from '@/containers/add-email-dialog';
import getUser from '@/lib/get-user';
import { updateSession } from '@/lib/session';
import updateSessionViaAPI from '@/lib/update-session-via-api';
import { redirect } from 'next/navigation';
import { FC } from 'react';

interface Props {}

const ProfilePage: FC<Props> = async () => {
  const user = await getUser();

  if (!user) {
    redirect('/auth/login');
  }

  // await updateSessionViaAPI();

  return (
    <>
      <SessionUpdater />
      <AddEmailDialog showDialog={!user.completed_onboarding} />

      <div className="py-5 md:py-7 flex flex-col min-h-[calc(100vh-56px)] md:min-h-[calc(100vh-70px)]">
        <div className="pb-4 md:pb-5">
          <span className="inline-block pb-1 md:pb-2 font-bold text-xl sm:text-2xl md:text-3xl">
            {/* Welcome, Chidera. 👋🏾 */}
            Welcome, {user.username}. 👋🏾
          </span>

          <h1 className="text-muted-foreground font-medium text-sm sm:text-base">
            Your profile
          </h1>
        </div>

        <div className="flex-1 bg-secondary dark:bg-slate-900 px-5 md:px-8 py-9 rounded-[16px] border">
          <p className="text-sm sm:text-base md:text-lg text-center text-muted-foreground mb-10 md:mb-20">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita in
            iure iusto suscipit, molestiae numquam consequatur libero quisquam
            sed quod accusamus aspernatur voluptates a est.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 mb-7">
            <div className="flex items-center justify-between gap-5 p-3 md:p-5 h-16 md:h-20 border border-primary rounded-full">
              <span className="w-[80%] truncate text-sm md:text-base">
                {/* https://enigma.vercel.app/chidera */}
                https://enigma.vercel.app/{user.username}
              </span>
              <Button className="px-3 md:px-3">Copy link</Button>
            </div>
            <Button className="h-16 md:h-20">Share on WhatsApp</Button>
            <Button className="h-16 md:h-20">Share on WhatsApp</Button>
            <Button className="h-16 md:h-20">Share on WhatsApp</Button>
          </div>

          <Button className="h-16 md:h-20 w-full">View Messages</Button>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
