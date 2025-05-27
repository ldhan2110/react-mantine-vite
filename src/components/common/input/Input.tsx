import { type TextInputProps as MantineInputProps, TextInput as MantineInput } from '@mantine/core';

type InputProps = MantineInputProps;

export function Input({ size = 'sm', ...props }: InputProps) {
  return <MantineInput size={size} {...props} />;
}
