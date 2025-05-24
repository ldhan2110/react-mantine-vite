import { Header, Sidebar, SidebarMinimal } from '@/components';
import { routes } from '@/routes';
import { AppShell, Flex } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

import React from 'react';

export const BaseLayout = ({
  children,
  backgroundColor = 'white',
}: {
  children: React.ReactNode;
  backgroundColor?: string;
}) => {
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);

  return (
    <AppShell
      header={{ height: 60, offset: false }}
      navbar={{
        width: 250,
        breakpoint: 'md',
        collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
      }}
      withBorder={false}
    >
      <AppShell.Navbar className='bg-[rgba(0,0,0,0.45)]'>
        <Sidebar
          toggleMenu={() => {
            if (mobileOpened) toggleMobile();
            else toggleDesktop();
          }}
          routes={routes}
        />
      </AppShell.Navbar>

      <AppShell.Main className="h-full">
        <Flex className="h-full">
          <SidebarMinimal toggleMenu={toggleDesktop} hidden={desktopOpened} routes={routes} />
          <Flex direction="column" style={{ minWidth: 0 }}>
            <Header desktopOpened={desktopOpened} toggleMobile={toggleMobile} />
            <div className="flex-grow overflow-y-auto" style={{ backgroundColor: backgroundColor }}>
              {children}
            </div>
          </Flex>
        </Flex>
      </AppShell.Main>
    </AppShell>
  );
};
