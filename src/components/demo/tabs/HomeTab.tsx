import { Button, DatePicker, DateRangePicker, Input, Select, TextArea } from '@/components/common';
import { useNotification } from '@/hooks';
import { Fieldset, Flex, Grid, Paper } from '@mantine/core';

export const HomeTab = () => {
  const { notifyInfo } = useNotification();

  return (
    <Paper withBorder className="p-4" style={{ borderColor: 'var(--mantine-color-gray-2)', borderRadius: 'none' }}>
      <Flex gap={5}>
        <Fieldset legend="Personal information">
          <Flex direction="column" gap={10}>
            <Flex gap={8}>
              <Input label="Username" required maxLength={100} />
              <Input label="Fullname" required maxLength={100} value={'Hello World'} />
            </Flex>
            <Flex gap={8}>
              <DatePicker label="Date of Birth" required placeholder="Input execute date" value={'2023/03/03'} />
              <DateRangePicker
                label="Working Period"
                required
                placeholder="Input Approval Date"
                value={['2023/03/03', '2023/02/03']}
              />
            </Flex>
            <Grid>
              <Grid.Col span={{ base: 12 }}>
                <TextArea label="Remark" />
              </Grid.Col>
            </Grid>
            <Flex justify="flex-end" mt={10}>
              <Button type="primary" onClick={() => notifyInfo('This is a primary button!')}>
                Click me
              </Button>
            </Flex>
          </Flex>
        </Fieldset>

        <Fieldset legend="Options information">
          <Flex direction="column" gap={10}>
            <Flex gap={8}>
              <Select
                label="Your favorite library"
                placeholder="Pick value"
                required
                data={['React', 'Angular', 'Vue', 'Svelte']}
                searchable
              />
            </Flex>
          </Flex>
        </Fieldset>
      </Flex>
    </Paper>
  );
};
