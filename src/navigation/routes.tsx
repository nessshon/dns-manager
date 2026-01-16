import type { ComponentType, JSX } from 'react';

import { IndexPage } from '@/pages/IndexPage/IndexPage';

export interface RouteType {
  path: string;
  Component: ComponentType;
  title?: string;
  icon?: JSX.Element;
}

export const routes: RouteType[] = [
  { path: '/', Component: IndexPage },
  { path: '/manage', Component: IndexPage },
];
