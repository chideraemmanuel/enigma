import { getSession } from '@/lib/session';
import connectToDatabase from '@/lib/connect-to-database';
import { redirect, RedirectType } from 'next/navigation';
import { FC } from 'react';

interface Props {
  children: React.ReactNode;
}

const AuthPagesLayout: FC<Props> = async ({ children }) => {
  // await connectToDatabase();
  // const session = await getSession();

  // if (session) {
  //   redirect('/profile', RedirectType.replace);
  // }

  return (
    <>
      <div className="flex items-center justify-center bg-purple-300 px-4 py-14 min-h-screen">
        <div className="w-[min(700px,_100%)] bg-background rounded-3xl">
          {children}
        </div>
      </div>
    </>
  );
};

export default AuthPagesLayout;
