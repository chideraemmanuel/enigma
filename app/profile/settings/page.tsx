import FormInput from '@/components/form-input';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/helpers/cn';
import { Loader2 } from 'lucide-react';
import { FC } from 'react';

type Requirement =
  | 'Min. 8 characters'
  // | 'Capital'
  // | 'Lowercase'
  | 'Number'
  | 'Symbol';

const passwordRequirements = [
  'Min. 8 characters',
  // 'Capital',
  // 'Lowercase',
  'Number',
  'Symbol',
];

interface Props {}

const SettingsPage: FC<Props> = () => {
  // const validate = (requirement: Requirement) => {
  //   if (requirement === 'Min. 8 characters') {
  //     if (watchedPasswordChange.password?.length > 7) {
  //       return true;
  //     } else {
  //       return false;
  //     }
  //   }
  //   // if (requirement === 'Capital') {
  //   //   if (/[A-Z]/.test(watchedPasswordChange.password)) {
  //   //     return true;
  //   //   } else {
  //   //     return false;
  //   //   }
  //   // }
  //   // if (requirement === 'Lowercase') {
  //   //   if (
  //   //     /[a-z]/.test(watchedPasswordChange.password) &&
  //   //     watchedPasswordChange.password?.length > 0
  //   //   ) {
  //   //     return true;
  //   //   } else {
  //   //     return false;
  //   //   }
  //   // }
  //   if (requirement === 'Number') {
  //     if (/[0-9]/.test(watchedPasswordChange.password)) {
  //       return true;
  //     } else {
  //       return false;
  //     }
  //   }

  //   if (requirement === 'Symbol') {
  //     if (/[$-/:-?{-~!"^_`\[\]]/.test(watchedPasswordChange.password)) {
  //       return true;
  //     } else {
  //       return false;
  //     }
  //   }
  // };

  return (
    <>
      <div className="py-5 md:py-7 flex flex-col min-h-[calc(100vh-56px)] md:min-h-[calc(100vh-70px)]">
        <div className="pb-4 md:pb-5">
          {/* <span className="block pb-1 md:pb-2 text-muted-foreground font-medium text-sm sm:text-base">
            Hello, Chidera
          </span> */}

          <h1 className="inline-block font-bold text-xl sm:text-2xl md:text-3xl">
            {/* Settings */}
            Manage profile
          </h1>
        </div>

        <div className="flex-1 flex flex-col gap-12 bg-secondary dark:bg-slate-900 px-5 md:px-8 py-9 rounded-[16px] border">
          <form
            className="flex flex-col md:flex-row items-start gap-4 md:gap-14"
            // onSubmit={handlePersonalDetailsChangeSubmit(
            //   onPersonalDetailsChangeSubmit
            // )}
          >
            <div className="flex flex-col gap-[6px] min-w-[305px]">
              <h3 className="font-bold text-base">Personal Information</h3>
              <p className="text-muted-foreground text-sm max-w-[auto] md:max-w-[200px]">
                Update your personal details here
              </p>
            </div>

            <div className="w-[min(546px,_100%)]">
              <div className="pb-9 flex flex-col gap-5">
                <FormInput
                  label="Username"
                  id="username"
                  placeholder="Enter your username"
                  // defaultValue={account.first_name || ''}
                  // {...registerPersonalDetailsChangeField('first_name', {
                  //   required: {
                  //     value: true,
                  //     message: 'First name is required',
                  //   },
                  // })}
                  // error={personalDetailsChangeFormErrors.first_name?.message}
                  // disabled={isUpdatingAccount}
                />
                <FormInput
                  label="Email Address"
                  placeholder="Enter your email address"
                />
              </div>

              <Button
                className="self-start"
                // disabled={isUpdatingAccount || !formChanged}
              >
                {/* {isUpdatingAccount && ( */}
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                {/* )} */}
                Save changes
              </Button>
            </div>
          </form>

          <div className="flex flex-col md:flex-row items-start gap-4 md:gap-14">
            <div className="flex flex-col gap-[6px] min-w-[305px]">
              <h3 className="font-bold text-base">Account Password</h3>
              <p className="text-muted-foreground text-sm max-w-[auto] md:max-w-[200px]">
                Update your account password here
              </p>
            </div>

            {/* <div> */}
            <div className="w-[min(546px,_100%)]">
              <div className="flex flex-col gap-12">
                <form
                // onSubmit={handlePasswordChangeSubmit(
                //   onPasswordChangeSubmit
                // )}
                >
                  <h4 className="mb-4 font-bold text-[20px] leading-[140%] tracking-[-1.44%] hidden md:block">
                    Create a new password
                  </h4>

                  <div className="pb-9 flex flex-col gap-5">
                    <FormInput
                      label="New password"
                      id="password"
                      type="password"
                      placeholder="Enter your password"
                      // {...registerPasswordChangeField('password', {
                      //   required: {
                      //     value: true,
                      //     message: 'Please enter a password',
                      //   },
                      //   pattern: {
                      //     value: passwordRegex,
                      //     message:
                      //       'Password must be 8-16 characters long, and contain at least one numeric digit, and a special character',
                      //   },
                      // })}
                      // error={passwordChangeFormErrors.password?.message}
                    />

                    <FormInput
                      label="Repeat new password"
                      id="confirm_password"
                      type="password"
                      placeholder="Enter your password"
                      // {...registerPasswordChangeField('confirm_password', {
                      //   required: {
                      //     value: true,
                      //     message: 'Please enter a password',
                      //   },
                      //   validate: (fieldValue) => {
                      //     return (
                      //       fieldValue ===
                      //         getPasswordChangeFormValues('password') ||
                      //       'Passwords do not match'
                      //     );
                      //   },
                      // })}
                      // error={
                      //   passwordChangeFormErrors.confirm_password?.message
                      // }
                    />

                    <div className="flex flex-wrap items-center gap-2 pt-6">
                      {passwordRequirements.map((requirement) => (
                        <span
                          key={requirement}
                          className={cn(
                            'bg-muted text-muted-foreground inline-block py-2 px-4 text-sm leading-[140%] tracking-[-1.44%] text-center rounded'
                            // validate(requirement as Requirement)
                            //   ? 'bg-[#ECFDF3] text-[#027A48]'
                            //   : 'bg-[#F2F4F7] text-gray-400'
                          )}
                        >
                          {requirement}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Button
                  // disabled={isUpdatingAccount}
                  >
                    {/* {isUpdatingAccount && ( */}
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    {/* )} */}
                    Create new password
                  </Button>
                </form>
              </div>
            </div>
            {/* </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default SettingsPage;
