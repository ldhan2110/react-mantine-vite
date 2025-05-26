import { Avatar, Breadcrumbs, Burger, Container, Flex, Group, UnstyledButton, Text } from '@mantine/core';
import classes from './Header.module.css';
import { IconChevronDown, IconHome } from '@tabler/icons-react';
import { useRouter, useToggle } from '@/hooks';
import { findBreadcrumbLabels, findLinkByLabel } from '@/utils';
import cx from 'clsx';
import { routes } from '@/routes';

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
  const { navigate, location } = useRouter();
  const { isToggle } = useToggle();
  const labels = findBreadcrumbLabels(routes, location.pathname) || [];

  return (
    <Container fluid className={!desktopOpened ? classes.headerContainerOpened : classes.headerContainer}>
      <Flex justify="space-between" pr="xs">
        <Burger onClick={toggleMobile} hiddenFrom="md" size="md" />
        <Breadcrumbs separator="/" separatorMargin={7} visibleFrom="md">
          <div className={classes.home} onClick={() => navigate('/')}>
            <IconHome size="1.25em" color="gray" />
          </div>
          {labels.map((label, index) => {
            const link = findLinkByLabel(routes, label);
            return (
              <div
                className={classes.headerUrl}
                key={index}
                onClick={() => {
                  if (link) navigate(link);
                }}
              >
                {label}
              </div>
            );
          })}
        </Breadcrumbs>

        <UnstyledButton className={cx(classes.user, { [classes.userActive]: isToggle })}>
          <Group gap={7}>
            <Avatar src={user.image} name={user.name} radius="xl" size={20} />
            <Text fw={500} size="sm" lh={1} mr={3}>
              {user.name}
            </Text>
            <IconChevronDown size={12} stroke={1.5} />
          </Group>
        </UnstyledButton>
      </Flex>
    </Container>
  );
};
