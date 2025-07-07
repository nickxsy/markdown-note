import type { Note } from '@/entities/note';

import { NoteItem } from '../ui/note-item';

export function NoteList({ notes }: { notes: Note[] }) {
  return (
    <ul>
      {notes.map(note => (
        <NoteItem key={note.id} note={note} />
      ))}
    </ul>
  );
}
