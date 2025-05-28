import { Textarea, type TextareaProps } from '@mantine/core';

export const TextArea = ({ ...props }: TextareaProps) => {
  return <Textarea resize="vertical" minRows={3} autosize {...props} />;
};
