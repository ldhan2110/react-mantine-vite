import { Header, Sidebar, SidebarMinimal } from '@/components';
import { useToggle } from '@/hooks';
import { routes } from '@/routes';
import { AppShell, Flex } from '@mantine/core';
import type { ReactNode } from 'react';

export const BaseLayout = ({
  children,
  backgroundColor = 'white',
}: {
  children: ReactNode;
  backgroundColor?: string;
}) => {
  const { isToggle: mobileOpened, toggle: toggleMobile } = useToggle();
  const { isToggle: desktopOpened, toggle: toggleDesktop } = useToggle();

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
      <AppShell.Navbar className="bg-[rgba(0,0,0,0.45)]">
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
