import { Burger, Flex, Group, ScrollArea, Image, Text } from '@mantine/core';
import { LinkGroup } from '@/components/common/link-group/LinkGroup';
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
          <Group>
            <Image src="/vite.svg" h={32} w="auto" fit="contain" alt="sidebar" />
            <Text fw={500} size="sm" lh={1} mr={3} c="white">
              Vite App
            </Text>
          </Group>
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
