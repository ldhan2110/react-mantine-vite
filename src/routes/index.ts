import type { Route } from "@/types";
import {  IconDeviceLaptop, IconFileSettings } from '@tabler/icons-react';

export const routes: Route[] = [
  {
    label: 'Assets',
    icon: IconDeviceLaptop,
    link: '/asset/asset-management',
  },
 {
    label: 'Master Data',
    icon: IconFileSettings,
    links: [
      { label: 'Category Management', link: '/master-data/category-management' },
      { label: 'Model Management', link: '/master-data/model-management' },
      { label: 'Supplier Management', link: '/master-data/supplier-management' },
      { label: 'Location Management', link: '/master-data/location-management' },
    ],
  },
];