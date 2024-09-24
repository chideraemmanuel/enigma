import { FC } from 'react';
import { ThemeProvider } from './theme-provider';

interface Props {
  children: React.ReactNode;
}

const Providers: FC<Props> = ({ children }) => {
  return (
    <>
      <ThemeProvider>{children}</ThemeProvider>
    </>
  );
};

export default Providers;
