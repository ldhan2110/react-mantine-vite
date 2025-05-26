import { Image, Burger, Container, Flex, Group, Text, Divider, ActionIcon } from '@mantine/core';
import classes from './Header.module.css';
import { IconBell } from '@tabler/icons-react';
import { InputSearch } from '../input-search/InputSearch';
import { AvatarMenu } from '../avatar-menu/AvatarMenu';

type HeaderProps = {
  desktopOpened: boolean;
  toggleMobile: () => void;
};

export const Header = ({ desktopOpened, toggleMobile }: HeaderProps) => {
  return (
    <Container fluid className={!desktopOpened ? classes.headerContainerOpened : classes.headerContainer}>
      <Flex justify="space-between" pr="xs">
        <Burger onClick={toggleMobile} hiddenFrom="md" size="md" />
        <Group justify="space-between">
          <Group>
            <Image src="/vite.svg" h={32} w="auto" fit="contain" alt="sidebar" />
            <Text fw={500} size="sm" lh={1} mr={3}>
              Vite App
            </Text>
          </Group>
          <InputSearch visibleFrom="sm" />
        </Group>

        <Group gap={2}>
          <ActionIcon variant="default" aria-label="Notification">
            <IconBell size={16} stroke={1.5} color="gray" />
          </ActionIcon>
          <Divider orientation="vertical" h={24} mx={10} my={8} />
          <AvatarMenu />
        </Group>
      </Flex>
    </Container>
  );
};
