import { NoteSidebar } from '@/pages/note';

import { NoteList } from '@/features/note-list';

export function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen bg-gray-100">
      <NoteSidebar notes={<NoteList />} />

      <div className="flex-1">{children}</div>
    </div>
  );
}
