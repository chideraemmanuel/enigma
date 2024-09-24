'use client';

import ThemeSwitcher from '@/components/theme-switcher';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { NAVIGATION_LINKS } from '@/constants';
import { cn } from '@/lib/helpers/cn';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FC } from 'react';

interface Props {}

const ProfileHeader: FC<Props> = () => {
  const pathname = usePathname();

  return (
    <>
      <header className="border-b h-14 md:h-[70px] sticky top-0 bg-background">
        <div className="md:container px-3 h-full flex items-center gap-5">
          <div className="flex-1 flex items-center gap-4 md:gap-10">
            <span className="text-lg md:text-xl font-semibold font-geistMono">
              Enigma
            </span>

            <ul className="flex items-center gap-2 md:gap-3">
              {NAVIGATION_LINKS.map((link, index) => (
                <li>
                  <Link
                    href={link.href}
                    className={cn(
                      'text-xs md:text-sm text-muted-foreground hover:text-primary transition-colors capitalize',
                      link.href === pathname && 'text-primary font-semibold'
                    )}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex gap-2 md:gap-2">
            <ThemeSwitcher />

            <Avatar className="h-8 md:h-10 w-8 md:w-10">
              <AvatarFallback className="text-sm md:text-base">
                C
              </AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>
    </>
  );
};

export default ProfileHeader;
