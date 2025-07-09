import { useRef } from 'react';
import type { ImperativePanelGroupHandle } from 'react-resizable-panels';

import {
  ResizableHandleCustom,
  ResizablePanel,
  ResizablePanelGroup
} from '@/shared/ui/resizable';

export function NoteLayout({
  editor,
  preview
}: {
  editor: React.ReactNode;
  preview: React.ReactNode;
}) {
  const ref = useRef<ImperativePanelGroupHandle>(null);

  const resetLayout = () => {
    const panelGroup = ref.current;
    if (panelGroup) {
      panelGroup.setLayout([20, 20]);
    }
  };

  return (
    <div className="flex h-screen">
      <ResizablePanelGroup
        autoSaveId="persistence"
        direction="horizontal"
        ref={ref}
      >
        <ResizablePanel defaultSize={20} minSize={20}>
          <div className="h-full w-full px-1 py-2">{editor}</div>
        </ResizablePanel>
        <ResizableHandleCustom onDoubleClick={resetLayout} />
        <ResizablePanel defaultSize={20} minSize={20}>
          <div className="h-full w-full py-2 pr-2 pl-1">{preview}</div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}
