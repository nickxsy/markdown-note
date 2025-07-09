import { CreateNoteButton } from '@/features/note';

export function NoteSidebar({ notes }: { notes: React.ReactNode }) {
  return (
    <div className="flex w-[320px] flex-col">
      <NoteSidebarHeader />
      <div className="flex-1 overflow-hidden p-2">{notes}</div>
    </div>
  );
}

function NoteSidebarHeader() {
  return (
    <div className="border-b border-gray-200 bg-white p-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold text-gray-800">Заметки</h1>
        <CreateNoteButton />
      </div>
    </div>
  );
}
