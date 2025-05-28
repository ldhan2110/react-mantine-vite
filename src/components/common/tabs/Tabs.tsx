import { Tabs as MantineTabs } from '@mantine/core';
import classes from './Tabs.module.css';
import type { ReactNode } from 'react';
import type { Icon } from '@tabler/icons-react';

export type Tab = {
  key: string;
  label: string;
  icon?: Icon | ReactNode;
  disabled?: boolean;
};

type TabsProps = {
  tabs: Tab[];
  children?: ReactNode;
};

export const Tabs = ({ tabs, children }: TabsProps) => {
  const items = tabs.map(tab => (
    <MantineTabs.Tab
      key={tab.key}
      value={tab.key}
      disabled={tab.disabled}
      leftSection={tab.icon ? <>{tab.icon}</> : undefined}
    >
      {tab.label}
    </MantineTabs.Tab>
  ));

  return (
    <MantineTabs
      defaultValue="Home"
      variant="outline"
      classNames={{
        root: classes.tabs,
        list: classes.tabsList,
        tab: classes.tab,
      }}
    >
      <MantineTabs.List>{items}</MantineTabs.List>
      <>{children}</>
    </MantineTabs>
  );
};

export const TabsPanel = MantineTabs.Panel;
