import RegistrationForm from '@/containers/registration-form';
import { getSession } from '@/lib/session';
import connectToDatabase from '@/lib/connect-to-database';
import Link from 'next/link';
import { redirect, RedirectType } from 'next/navigation';
import { FC } from 'react';
import getUser from '@/lib/get-user';

interface Props {}

const RegistrationPage: FC<Props> = async () => {
  // await connectToDatabase();
  // const session = await getSession();

  // if (session) {
  //   redirect('/profile', RedirectType.replace);
  // }

  // const user = await getUser();

  // if (user) {
  //   redirect('/profile', RedirectType.replace);
  // }

  return (
    <>
      <div className="px-4 sm:px-6 py-10 sm:py-12">
        {/* header */}
        <header className="flex flex-col items-center gap-5 mb-7">
          <span className="text-xl font-semibold font-geistMono">Enigma</span>

          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl font-medium mb-1">
              Create an account
            </h1>
            <p className="text-muted-foreground text-sm sm:text-base">
              Fill in the details to create an account
            </p>
          </div>
        </header>

        {/* form */}
        <RegistrationForm />

        <p className="text-center text-sm text-muted-foreground">
          Already have an account?{' '}
          <Link
            href="/auth/login"
            className="underline underline-offset-2 hover:text-primary transition-colors"
          >
            Login
          </Link>
        </p>
      </div>
    </>
  );
};

export default RegistrationPage;
