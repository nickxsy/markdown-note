import type { ReactNode } from 'react';

import {
  ResizableHandleCustom,
  ResizablePanel,
  ResizablePanelGroup
} from '@/shared/ui/resizable';

import { useFeatureFlag } from '@/entities/feature-flags';
import { CurrentThemeValue } from '@/entities/theme';

export function RootLayout({
  sidebar,
  children
}: {
  sidebar: ReactNode;
  children: ReactNode;
}) {
  const darkThemeIsEnabled = useFeatureFlag('darkTheme');

  return (
    <div className="bg-background flex h-screen">
      {darkThemeIsEnabled && <CurrentThemeValue />}
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel
          className="min-w-[260px]"
          defaultSize={20}
          minSize={14}
          maxSize={32}
        >
          {sidebar}
        </ResizablePanel>
        <ResizableHandleCustom />
        <ResizablePanel>
          <div className="flex-1">{children}</div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}
