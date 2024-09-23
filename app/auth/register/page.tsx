import FormInput from '@/components/form-input';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';
import Link from 'next/link';
import { FC } from 'react';

interface Props {}

const RegistrationPage: FC<Props> = () => {
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
        <form className="flex flex-col gap-5 mb-3">
          <FormInput label="Username" placeholder="e.g johndoe" />

          <FormInput
            label="Password"
            placeholder="Enter your password"
            type="password"
          />

          <FormInput
            label="Confirm password"
            placeholder="Confirm your password"
            type="password"
          />

          <div className="mt-5">
            <Button className="w-full h-12 text-base">
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Create account
            </Button>
          </div>
        </form>

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
