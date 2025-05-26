import { Avatar, Group, UnstyledButton, Text, Menu } from '@mantine/core';
import { IconChevronDown, IconLogout, IconSettings, IconSwitchHorizontal } from '@tabler/icons-react';
import classes from './AvatarMenu.module.css';
import cx from 'clsx';
import { useToggle } from '@/hooks';

const user = {
  name: 'Jane Spoonfighter',
  email: 'janspoon@fighter.dev',
  image: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-5.png',
};

export const AvatarMenu = () => {
  const { isToggle, toggle: openMenu } = useToggle(false);
  return (
    <Menu
      width={200}
      position="bottom-end"
      transitionProps={{ transition: 'pop-top-right' }}
      onClose={openMenu}
      onOpen={openMenu}
      withinPortal
    >
      <Menu.Target>
        <UnstyledButton className={cx(classes.user, { [classes.userActive]: isToggle })}>
          <Group gap={7}>
            <Avatar src={user.image} name={user.name} radius="xl" size={20} />
            <Text fw={500} size="sm" lh={1} mr={3} visibleFrom="sm">
              {user.name}
            </Text>
            <IconChevronDown size={12} stroke={1.5} />
          </Group>
        </UnstyledButton>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Label>Settings</Menu.Label>
        <Menu.Item leftSection={<IconSettings size={16} stroke={1.5} />}>Account settings</Menu.Item>
        <Menu.Item leftSection={<IconSwitchHorizontal size={16} stroke={1.5} />}>Change account</Menu.Item>
        <Menu.Item color="red" leftSection={<IconLogout size={16} stroke={1.5} />}>
          Logout
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};
