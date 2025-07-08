import { NoteList, NoteSidebar } from '@/pages/note';

export function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="flex h-screen">
        <NoteSidebar notes={<NoteList />} />

        <div className="flex-1">{children}</div>
      </div>
    </div>
  );
}
