import { Button, DatePicker, DateRangePicker, Input } from '@/components';
import { useNotification } from '@/hooks';
import { BaseLayout } from '@/layouts';
import { Flex } from '@mantine/core';

export function AssetPage() {
  const { notifyInfo, notifyWarning, notifySuccess, notifyError } = useNotification();

  return (
    <BaseLayout>
      <Flex gap={10} direction="column">
        <Flex gap={5}>
          <Button type="primary" onClick={() => notifyInfo('This is a primary button!')}>
            Click me
          </Button>
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

        <Flex gap={5}>
          <Input label="Input label" required placeholder="Input label" maxLength={100} value={'Hello World'} />
          <DatePicker label="Execute Date" required placeholder="Input execute date" value={'2023/03/03'} />
          <DateRangePicker
            label="Approval Date"
            required
            placeholder="Input Approval Date"
            value={['2023/03/03', '2023/03/03']}
          />
        </Flex>
      </Flex>
    </BaseLayout>
  );
}
