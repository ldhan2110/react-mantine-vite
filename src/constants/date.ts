import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import utc from 'dayjs/plugin/utc';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import timezone from 'dayjs/plugin/timezone';
import type { DatesProviderSettings } from '@mantine/dates';

dayjs.extend(customParseFormat);
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(localizedFormat);

export const AppDateProvider: DatesProviderSettings & { timezone: string } = {
  timezone: 'UTC',
  locale: 'vi',
  firstDayOfWeek: 1,
  //   getLocale: () => 'vi',
  //   parse: (value: string) => dayjs.tz(value, 'UTC').toDate(),
  //   format: (value: Date, format: string) => dayjs(value).tz('UTC').format(format),
};
