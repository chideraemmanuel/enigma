import FormInput from '@/components/form-input';
import { Button } from '@/components/ui/button';
import PasswordResetInitiationForm from '@/containers/password-reset-initiation-form';
import getUser from '@/lib/get-user';
import { Loader2 } from 'lucide-react';
import Link from 'next/link';
import { redirect, RedirectType } from 'next/navigation';
import { FC } from 'react';

interface Props {}

const PasswordResetInitiationPage: FC<Props> = async () => {
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
              Reset your password
            </h1>
            <p className="text-muted-foreground text-sm sm:text-base w-[90%] mx-auto">
              Enter your username or email address to reset your password. We
              will send an email to your registered email if you added any.
            </p>
          </div>
        </header>

        {/* form */}
        <PasswordResetInitiationForm />

        <Button variant={'outline'} asChild className="w-full h-12 text-base">
          <Link href={'/auth/login'}>Go to login page</Link>
        </Button>
      </div>
    </>
  );
};

export default PasswordResetInitiationPage;

// ! "next-share": "^0.27.0",
// ! "nodemailer": "^6.9.14",
// ! "uuid": "^10.0.0"
