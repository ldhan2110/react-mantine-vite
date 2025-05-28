import { Button, Tabs, type Tab, TabsPanel, HomeTab } from '@/components';
import { useNotification } from '@/hooks';
import { BaseLayout } from '@/layouts';
import { Flex } from '@mantine/core';

const TABS: Tab[] = [
  { key: 'Home', label: 'Home' },
  { key: 'Profile', label: 'Profile' },
  { key: 'Settings', label: 'Settings' },
  { key: 'Messages', label: 'Messages' },
  { key: 'Notifications', label: 'Notifications' },
];

export function DemoPage() {
  const { notifyInfo, notifyWarning, notifySuccess, notifyError } = useNotification();

  return (
    <BaseLayout>
      <div className="p-4">
        <Tabs tabs={TABS}>
          <TabsPanel value="Home">
            <HomeTab />
          </TabsPanel>
          <TabsPanel value="Profile">This is the Profile tab content.</TabsPanel>
          <TabsPanel value="Settings">This is the Settings tab content.</TabsPanel>
          <TabsPanel value="Messages">This is the Messages tab content.</TabsPanel>
          <TabsPanel value="Notifications">This is the Notifications tab content.</TabsPanel>
        </Tabs>
      </div>

      <Flex gap={10} direction="column">
        <Flex gap={5}>
          <Button type="primary" disabled>
            Click me
          </Button>
          <Button type="link" onClick={() => notifySuccess('This is a link button!')}>
            Click me
          </Button>
          <Button type="secondary" onClick={() => notifyWarning('This is a secondary button!')} color="red">
            Click me
          </Button>
          <Button onClick={() => notifyError('This is a danger button!')} danger={true}>
            Click me
          </Button>
          <Button onClick={() => notifyError('This is a danger button!')}>Click me</Button>
        </Flex>
      </Flex>
    </BaseLayout>
  );
}
