import type { ReactNode } from 'react';

import { SidebarHeader } from './sidebar-header';

export function Sidebar({ notes }: { notes: ReactNode }) {
  return (
    <div className="flex h-full flex-col gap-2 p-2 pr-1">
      <SidebarHeader />
      <div className="flex-1 overflow-hidden">{notes}</div>
    </div>
  );
}
