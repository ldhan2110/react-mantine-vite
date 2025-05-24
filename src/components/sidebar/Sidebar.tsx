import { Burger, Flex, Group, ScrollArea, Image } from '@mantine/core';
import { LinkGroup } from '@components/link-group/LinkGroup';
import classes from './Sidebar.module.css';
import type { Route } from '@/types';

type SidebarProps = {
  routes: Route[];
  toggleMenu: () => void;
};

export function Sidebar({ routes, toggleMenu }: SidebarProps) {
  const links = routes.map(item => (
    <LinkGroup icon={item.icon} label={item.label} link={item.link} links={item.links || []} key={item.label} />
  ));

  return (
    <nav className={classes.navbar}>
      <div className={classes.header}>
        <Group justify="space-between">
           <Image src="/images/sidebar-logo.png" width={88} height={32} alt="sidebar"/>
          <Burger opened={false} onClick={toggleMenu} color="white" size={15} />
        </Group>
      </div>

      <ScrollArea className={classes.links}>
        <Flex direction={'column'} gap={5}>
          {links}
        </Flex>
      </ScrollArea>
    </nav>
  );
}
