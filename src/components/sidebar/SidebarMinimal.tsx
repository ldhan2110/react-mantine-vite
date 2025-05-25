import { type ReactNode, useState } from 'react';
import { Burger, Center, Popover, Stack, UnstyledButton } from '@mantine/core';
import classes from './SidebarMinimal.module.css';
import type { Icon } from '@tabler/icons-react';
import { useRouter } from '@/hooks';
import type { Route } from '@/types';

interface NavbarLinkProps {
  icon?: Icon | ReactNode;
  label: string;
  active?: boolean;
  onClick?: () => void;
  subContext?: {
    label: string;
    link: string;
  }[];
}

type NavbarMinimalProps = {
  hidden: boolean;
  routes: Route[];
  toggleMenu: () => void;
};

function NavbarLink({ icon, label, active, onClick, subContext }: NavbarLinkProps) {
  const { navigate } = useRouter();
  const [opened, setOpened] = useState(false);
  const IconComponent = icon as Icon;

  return (
    <Popover
      opened={opened}
      position="right"
      shadow="md"
      withArrow
      transitionProps={{ duration: 450, transition: 'pop-top-left' }}
    >
      <Popover.Target>
        <UnstyledButton
          onClick={subContext ? undefined : onClick}
          className={classes.link}
          data-active={active || undefined}
          onMouseEnter={() => setOpened(true)}
          onMouseLeave={() => setOpened(false)}
        >
          {<IconComponent />}
        </UnstyledButton>
      </Popover.Target>

      <Popover.Dropdown
        onMouseEnter={() => setOpened(true)}
        onMouseLeave={() => setOpened(false)}
        className={classes.dropDown}
      >
        {subContext ? (
          subContext?.map((item, index) => (
            <div
              key={index}
              onClick={() => navigate(item.link || '#')}
              className={classes.subContext}
              data-active={location.pathname === item.link}
            >
              {item.label}
            </div>
          ))
        ) : (
          <div className={classes.links}>{label}</div>
        )}
      </Popover.Dropdown>
    </Popover>
  );
}

export function SidebarMinimal({ routes, hidden, toggleMenu }: NavbarMinimalProps) {
  const { location, navigate } = useRouter();

  const links = routes.map(link => (
    <NavbarLink
      {...link}
      key={link.label}
      active={link.link === location.pathname || link.links?.some(child => location.pathname === child.link)}
      onClick={() => navigate(link.link || '#')}
      subContext={link.links}
    />
  ));

  return (
    <>
      {!hidden && (
        <nav className={classes.navbar}>
          <Center className={classes.menuCollapse}>
            <Burger opened={false} onClick={toggleMenu} color="white" size={15} />
          </Center>

          <div className={classes.navbarMain}>
            <Stack justify="center" gap={10}>
              {links}
            </Stack>
          </div>
        </nav>
      )}
    </>
  );
}
