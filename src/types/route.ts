import type { Icon } from '@tabler/icons-react';
import type { ReactNode } from 'react';

export type Route = {
  label: string;
  icon?: Icon | ReactNode;
  link?: string;
  page?: ReactNode;
  links?: {
    label: string;
    icon?: ReactNode;
    link: string;
    page?: ReactNode;
  }[];
};
