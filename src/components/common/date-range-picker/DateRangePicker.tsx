import { DATE_FORMAT } from '@/constants';
import { ActionIcon, Flex } from '@mantine/core';
import { DatePickerInput, type DatePickerInputProps, type DatesRangeValue, type DateValue } from '@mantine/dates';
import { IconCalendar, IconX } from '@tabler/icons-react';
import { useState } from 'react';

type DateRangePickerProps = DatePickerInputProps<'range' | 'default' | 'multiple'>;

export function DateRangePicker({ value, ...props }: DateRangePickerProps) {
  const [dateRange, setDateRange] = useState<DatesRangeValue<DateValue> | [null, null]>(
    (value as DatesRangeValue<DateValue>) || [null, null],
  );

  function handleChange(value: string | DatesRangeValue<string> | string[]) {
    setDateRange(value as DatesRangeValue<string>);
    props.onChange?.(value);
  }

  return (
    <DatePickerInput
      type="range"
      value={dateRange}
      onChange={handleChange}
      valueFormat={DATE_FORMAT}
      placeholder={props.placeholder || `Enter ${String(props.label).toLowerCase()}`}
      clearable
      styles={{ input: { minWidth: '220px' } }}
      rightSection={
        <Flex gap="xs">
          {dateRange[0] || dateRange[1] ? (
            <ActionIcon
              size="sm"
              variant="transparent"
              onClick={() => {
                handleChange([]);
              }}
            >
              <IconX size={16} color="gray" />
            </ActionIcon>
          ) : (
            <IconCalendar size={16} />
          )}
        </Flex>
      }
      {...props}
    />
  );
}
