import { CreateNoteButton } from '@/features/note';

export function NoteSidebar({ notes }: { notes: React.ReactNode }) {
  return (
    <div className="flex h-full flex-col gap-2 p-2 pr-1">
      <NoteSidebarHeader />
      <div className="flex-1 overflow-hidden">{notes}</div>
    </div>
  );
}

function NoteSidebarHeader() {
  return (
    <div className="flex items-center justify-between rounded-2xl bg-white p-4">
      <h1 className="text-xl font-semibold text-gray-800">Заметки</h1>
      <CreateNoteButton />
    </div>
  );
}
