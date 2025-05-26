import { IconSearch } from '@tabler/icons-react';
import { TextInput, type TextInputProps } from '@mantine/core';

export function InputSearch(props: TextInputProps) {
  return (
    <TextInput
      radius="xl"
      size="xs"
      placeholder="Search name, email, or phone"
      rightSectionWidth={42}
      leftSection={<IconSearch size={18} stroke={1.5} />}
      {...props}
    />
  );
}
