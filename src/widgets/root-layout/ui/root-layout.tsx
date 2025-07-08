import { NoteList, NoteSidebar } from '@/pages/note';

export function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen bg-gray-100">
      <NoteSidebar notes={<NoteList />} />

      <div className="flex-1">{children}</div>
    </div>
  );
}
