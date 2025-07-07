import { NoteList, NoteSidebar } from '@/pages/note';

import { RouterProvider } from './router';

const notes = [
  {
    id: '1',
    title: 'Note 1',
    content: 'Note 1 content'
  },
  {
    id: '2',
    title: 'Note 2',
    content: 'Note 2 content'
  }
];

export function App() {
  return (
    <div className="flex h-screen">
      <NoteSidebar notes={<NoteList notes={notes} />} />

      <div className="flex-1">
        <RouterProvider />
      </div>
    </div>
  );
}
