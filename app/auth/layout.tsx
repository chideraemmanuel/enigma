import { FC } from 'react';

interface Props {
  children: React.ReactNode;
}

const AuthPagesLayout: FC<Props> = ({ children }) => {
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
