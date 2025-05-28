import { DATE_FORMAT } from '@/constants';
import { ActionIcon, Flex } from '@mantine/core';
import { DateInput, type DateInputProps, type DateValue } from '@mantine/dates';
import { IconCalendar, IconX } from '@tabler/icons-react';
import { useState } from 'react';

type DatePickerProps = DateInputProps;

export function DatePicker({ value, w, ...props }: DatePickerProps) {
  const [date, setDate] = useState<DateValue | null>(value || null);

  function handleChange(value: DateValue | null) {
    setDate(value);
    props.onChange?.(value as string);
  }

  return (
    <DateInput
      value={date}
      valueFormat={DATE_FORMAT}
      placeholder={props.placeholder || `Enter ${String(props.label).toLowerCase()}`}
      clearable
      onChange={handleChange}
      rightSection={
        <Flex gap="xs">
          {date ? (
            <ActionIcon size="sm" variant="transparent" onClick={() => handleChange(null)}>
              <IconX size={16} color="gray" />
            </ActionIcon>
          ) : (
            <IconCalendar size={16} />
          )}
        </Flex>
      }
      w={(w as number) + 8}
      {...props}
    />
  );
}
