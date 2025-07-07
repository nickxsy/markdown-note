import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup
} from '@/shared/ui/resizable';

export function NoteLayout({
  header,
  editor,
  preview
}: {
  header: React.ReactNode;
  editor: React.ReactNode;
  preview: React.ReactNode;
}) {
  return (
    <div className="flex h-screen bg-gray-100">
      <div className="flex flex-1 flex-col">
        {header}
        <div className="flex flex-1">
          <ResizablePanelGroup direction="horizontal">
            <ResizablePanel>
              <div className="h-full w-full p-2">{editor}</div>
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel>
              <div className="h-full w-full p-2">{preview}</div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </div>
      </div>
    </div>
  );
}
