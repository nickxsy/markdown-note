import { UnheadProvider, createHead } from '@unhead/react/client';
import type { PropsWithChildren } from 'react';

const head = createHead();

export function HeadProvider({ children }: PropsWithChildren) {
  return <UnheadProvider head={head}>{children}</UnheadProvider>;
}
