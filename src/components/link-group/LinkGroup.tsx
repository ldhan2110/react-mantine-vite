import { useState, type ReactNode } from 'react';
import { Box, Collapse, Group, Text, UnstyledButton } from '@mantine/core';
import { SlArrowRight } from "react-icons/sl";
import classes from './LinkGroup.module.css';
import { useRouter } from '@/hooks';
import type { Icon } from '@tabler/icons-react';

interface LinksGroupProps {
  icon?: Icon | ReactNode;
  label: string;
  initiallyOpened?: boolean;
  link?: string;
  links?: { label: string; link: string }[];
}

export function LinkGroup({ icon, label, initiallyOpened, links, link }: LinksGroupProps) {
  const hasLinks = Array.isArray(links) && links.length != 0;
  const [opened, setOpened] = useState(initiallyOpened || false);
  const { location, navigate} = useRouter();
  const items = (hasLinks ? links : []).map(link => (
    <Text
      className={classes.link}
      key={link.label}
      data-active={location.pathname === link.link}
      onClick={() => handleRedirect(link.link)}
    >
      {link.label}
    </Text>
  ));

  function handleRedirect(url?: string) {
    if (url) navigate(url);
    else if (link) navigate(link);
  }

  return (
    <>
      <UnstyledButton
        onClick={() => {
          if (link) {
            handleRedirect();
          } else setOpened(o => !o);
        }}
        className={classes.control}
        data-active={location.pathname === link}
        data-child-active={links?.some(link => location.pathname === link.link)}
      >
        <Group justify="space-between" gap={0}>
          {icon && (
            <Box style={{ display: 'flex', alignItems: 'center' }}>
              {<>{icon}</>}
              <Box ml="md">{label}</Box>
            </Box>
          )}
          {hasLinks && (
            <SlArrowRight 
              className={classes.chevron}
              size={16}
              style={{ transform: opened ? 'rotate(90deg)' : 'none' }}
            />
          )}
        </Group>
      </UnstyledButton>
      {hasLinks ? (
        <Collapse in={opened} className={classes.collapse}>
          {items}
        </Collapse>
      ) : null}
    </>
  );
}
