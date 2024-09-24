import { FC } from 'react';

interface Props {}

const MessagesPage: FC<Props> = () => {
  return (
    <>
      <div className="py-5 md:py-7 flex flex-col min-h-[calc(100vh-56px)] md:min-h-[calc(100vh-70px)]">
        <div className="pb-4 md:pb-5">
          <span className="block pb-1 md:pb-2 text-muted-foreground font-medium text-sm sm:text-base">
            Hello, Chidera
          </span>

          <h1 className="inline-block font-bold text-xl sm:text-2xl md:text-3xl">
            Your messages
          </h1>
        </div>

        <div className="flex-1 bg-secondary dark:bg-slate-900 px-8 py-9 rounded-[16px] border">
          <span>Messages Page!</span>
        </div>
      </div>
    </>
  );
};

export default MessagesPage;
