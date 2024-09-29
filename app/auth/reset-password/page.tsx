import FormInput from '@/components/form-input';
import { Button } from '@/components/ui/button';
import getUser from '@/lib/get-user';
import { Loader2 } from 'lucide-react';
import Link from 'next/link';
import { redirect, RedirectType } from 'next/navigation';
import { FC } from 'react';

interface Props {}

const PassowordResetCompletionPage: FC<Props> = async () => {
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
            {/* <p className="text-muted-foreground text-sm sm:text-base">
              Fill in the details to create an account
            </p> */}
          </div>
        </header>

        {/* form */}
        <form className="flex flex-col gap-5 mb-3">
          <FormInput
            label="New password"
            placeholder="Enter your new password"
            type="password"
          />

          <FormInput
            label="Confirm new password"
            placeholder="Confirm your new password"
            type="password"
          />

          <div className="mt-5">
            <Button className="w-full h-12 text-base">
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Reset password
            </Button>
          </div>
        </form>

        <Button variant={'outline'} asChild className="w-full h-12 text-base">
          <Link href={'/auth/login'}>Go to login page</Link>
        </Button>
      </div>
    </>
  );
};

export default PassowordResetCompletionPage;
