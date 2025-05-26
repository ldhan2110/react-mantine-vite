import {
  Avatar,
  Image,
  Burger,
  Container,
  Flex,
  Group,
  UnstyledButton,
  Text,
  Divider,
  ActionIcon,
} from '@mantine/core';
import classes from './Header.module.css';
import { IconChevronDown, IconBell } from '@tabler/icons-react';
import { useToggle } from '@/hooks';
import cx from 'clsx';
import { InputSearch } from '../input-search/InputSearch';

type HeaderProps = {
  desktopOpened: boolean;
  toggleMobile: () => void;
};

const user = {
  name: 'Jane Spoonfighter',
  email: 'janspoon@fighter.dev',
  image: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-5.png',
};

export const Header = ({ desktopOpened, toggleMobile }: HeaderProps) => {
  const { isToggle } = useToggle();

  return (
    <Container
      fluid
      className={!desktopOpened ? classes.headerContainerOpened : classes.headerContainer}
      style={{
        borderBottom: '1px solid var(--mantine-color-gray-3)',
        backgroundColor: 'white',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
      }}
    >
      <Flex justify="space-between" pr="xs">
        <Burger onClick={toggleMobile} hiddenFrom="md" size="md" />
        <Group justify="space-between">
          <Group>
            <Image src="/vite.svg" h={32} w="auto" fit="contain" alt="sidebar" />
            <Text fw={500} size="sm" lh={1} mr={3}>
              Vite App
            </Text>
          </Group>
          <InputSearch />
        </Group>

        <Group gap={5}>
          <ActionIcon variant="default" aria-label="Notification">
            <IconBell size={16} stroke={1.5} color="gray" />
          </ActionIcon>
          <Divider orientation="vertical" h={24} mx={10} my={5} />
          <UnstyledButton className={cx(classes.user, { [classes.userActive]: isToggle })}>
            <Group gap={7}>
              <Avatar src={user.image} name={user.name} radius="xl" size={20} />
              <Text fw={500} size="sm" lh={1} mr={3}>
                {user.name}
              </Text>
              <IconChevronDown size={12} stroke={1.5} />
            </Group>
          </UnstyledButton>
        </Group>
      </Flex>
    </Container>
  );
};
