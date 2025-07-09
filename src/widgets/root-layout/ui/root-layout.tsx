import { NoteSidebar } from '@/pages/note';

import {
  ResizableHandleCustom,
  ResizablePanel,
  ResizablePanelGroup
} from '@/shared/ui/resizable';

import { NoteList } from '@/features/note-list';

export function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen bg-gray-100">
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel
          className="min-w-[260px]"
          defaultSize={20}
          minSize={14}
          maxSize={32}
        >
          <NoteSidebar notes={<NoteList />} />
        </ResizablePanel>
        <ResizableHandleCustom />
        <ResizablePanel>
          <div className="flex-1">{children}</div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}
