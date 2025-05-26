import { AssetPage } from '@/pages/AssetPage';
import type { Route } from '@/types';
import { IconDeviceLaptop, IconFileSettings } from '@tabler/icons-react';

export const routes: Route[] = [
  {
    label: 'Assets',
    icon: <IconDeviceLaptop />,
    link: '/',
    page: <AssetPage />,
  },
  {
    label: 'Master Data',
    icon: <IconFileSettings />,
    links: [
      { label: 'Category Management', link: '/master-data/category-management', page: <AssetPage /> },
      { label: 'Model Management', link: '/master-data/model-management', page: <AssetPage /> },
      { label: 'Supplier Management', link: '/master-data/supplier-management', page: <AssetPage /> },
      { label: 'Location Management', link: '/master-data/location-management', page: <AssetPage /> },
    ],
  },
];
