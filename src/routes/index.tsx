import { DemoPage } from '@/pages/DemoPage';
import type { Route } from '@/types';
import { IconDeviceLaptop, IconFileSettings } from '@tabler/icons-react';

export const routes: Route[] = [
  {
    label: 'Assets',
    icon: <IconDeviceLaptop />,
    link: '/',
    page: <DemoPage />,
  },
  {
    label: 'Master Data',
    icon: <IconFileSettings />,
    links: [
      { label: 'Category Management', link: '/master-data/category-management', page: <DemoPage /> },
      { label: 'Model Management', link: '/master-data/model-management', page: <DemoPage /> },
      { label: 'Supplier Management', link: '/master-data/supplier-management', page: <DemoPage /> },
      { label: 'Location Management', link: '/master-data/location-management', page: <DemoPage /> },
    ],
  },
];
