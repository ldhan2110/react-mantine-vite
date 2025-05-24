import { Breadcrumbs, Burger, Container, Flex } from '@mantine/core';
import classes from './Header.module.css';
import { IconHome } from '@tabler/icons-react';
import { useRouter } from '@/hooks';
import { findBreadcrumbLabels, findLinkByLabel } from '@/utils';
import { routes } from '@/routes';

type HeaderProps = {
  desktopOpened: boolean;
  toggleMobile: () => void;
};

export const Header = ({ desktopOpened, toggleMobile }: HeaderProps) => {
  const { navigate, location } = useRouter();
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
      </Flex>
    </Container>
  );
};
