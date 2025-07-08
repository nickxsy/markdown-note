import { useAppSelector } from '@/shared/lib/redux';

import { noteStore } from '@/entities/note';

import { NoteItem } from '../ui/note-item';

export function NoteList() {
  const notes = useAppSelector(noteStore.selectors.selectNotes);

  return (
    <ul>
      {notes.map(note => (
        <NoteItem key={note.id} note={note} />
      ))}
    </ul>
  );
}
