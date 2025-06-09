import { Select as MantineSelect, type SelectProps as MantineSelectProps } from '@mantine/core';
type SelectProps = MantineSelectProps;

export function Select({ label, placeholder, ...props }: SelectProps) {
  return <MantineSelect label={label} placeholder={placeholder || 'Select a value'} clearable searchable {...props} />;
}
