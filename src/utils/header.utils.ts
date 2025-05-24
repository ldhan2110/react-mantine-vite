import type { Route } from "@/types";

export const findBreadcrumbLabels = (routes: Route[], path: string): string[] | null => {
  const stack: { route: Route; breadcrumbs: string[] }[] = [];

  // Push top-level routes into the stack
  for (const route of routes) {
    stack.push({ route, breadcrumbs: [route.label] });
  }

  while (stack.length > 0) {
    const { route, breadcrumbs } = stack.pop()!;

    // Check if the current route matches the given path
    if (route.link === path) {
      return breadcrumbs;
    }

    // Handle `/asset/asset-management/[id]` case
    if (route.link === '/asset/asset-management' && path.startsWith('/asset/asset-management/')) {
      const pathSegments = path.split('/').filter(Boolean); // Removes empty segments

      if (pathSegments.length === 3) {
        // Case: `/asset/asset-management/[id]`
        return [...breadcrumbs, 'Asset Detail'];
      }
    }
    if (route.link === '/consumable' && path.startsWith('/consumable/')) {
      const pathSegments = path.split('/').filter(Boolean); // Removes empty segments

      if (pathSegments.length === 2) {
        // Case: `/asset/asset-management/[id]`
        return [...breadcrumbs, 'Consumable Detail'];
      }
    }

    // Handle `/asset/asset-management/furniture/[id]` case
    if (route.link === '/asset/asset-management' && path.startsWith('/asset/asset-management/')) {
      const pathSegments = path.split('/').filter(Boolean); // Removes empty segments

      if (pathSegments.length === 4 && pathSegments[2] === 'furniture') {
        // Case: `/asset/asset-management/[id]`
        return [...breadcrumbs, 'Furniture Detail'];
      }
    }

    // Handle `/order/quotation/create-quotation-request` case
    if (route.link === '/order/quotation' && path === '/order/quotation/create-quotation-request') {
      return [...breadcrumbs, 'Create Quotation Request'];
    }
    // Handle `/order/quotation/[id]` case
    if (route.link === '/order/quotation' && path.startsWith('/order/quotation')) {
      const pathSegments = path.split('/').filter(Boolean);

      if (pathSegments.length === 3) {
        return [...breadcrumbs, 'Request Quotation Detail'];
      }
    }

    // Handle `/order/purchase-order/create-purchase-order` case
    if (route.link === '/order/purchase-order' && path === '/order/purchase-order/create-purchase-order') {
      return [...breadcrumbs, 'Create Purchase Order'];
    }

    // Handle `/order/purchase-order/[id]` case
    if (route.link === '/order/purchase-order' && path.startsWith('/order/purchase-order')) {
      const pathSegments = path.split('/').filter(Boolean); // Removes empty segments

      if (pathSegments.length === 3) {
        // Case: `/order/purchase-order/[id]`
        return [...breadcrumbs, 'Purchase Order Detail'];
      }
    }

    // Handle `/order/inbound/create-inbound` case
    if (route.link === '/order/inbound' && path === '/order/inbound/create-inbound') {
      return [...breadcrumbs, 'Create Inbound'];
    }

    // Handle `/order/inbound/[id]` case
    if (route.link === '/order/inbound' && path.startsWith('/order/inbound')) {
      const pathSegments = path.split('/').filter(Boolean); // Removes empty segments

      if (pathSegments.length === 3) {
        // Case: `/order/inbound/[id]`
        return [...breadcrumbs, 'Inbound Detail'];
      }
    }

    if (route.links) {
      for (const subRoute of route.links) {
        stack.push({ route: subRoute as Route, breadcrumbs: [...breadcrumbs, subRoute.label] });
      }
    }
  }

  return null; // Return null if no match is found
};

export const findLinkByLabel = (routes: Route[], label: string): string | null => {
  for (const route of routes) {
    if (route.label === label) {
      return route.link || null;
    }
    if (route.links && Array.isArray(route.links)) {
      const nestedLink = findLinkByLabel(route.links as Route[], label);
      if (nestedLink) {
        return nestedLink;
      }
    }
  }
  return null;
};
