import type { PropsWithChildren } from 'react';

import { ComposeChildren } from '@/shared/lib/react';

export function ProtectedProvider({ children }: PropsWithChildren) {
  return <ComposeChildren>{children}</ComposeChildren>;
}
