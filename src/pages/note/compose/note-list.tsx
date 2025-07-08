import { cn } from '@/shared/lib/css';
import { useAppearanceDelay } from '@/shared/lib/react';
import { useAppSelector } from '@/shared/lib/redux';

import { noteStore } from '@/entities/note';

import { NoteItem } from '../ui/note-item';

export function NoteList() {
  const notes = useAppSelector(noteStore.selectors.selectNotes);
  const isLoading = useAppSelector(noteStore.selectors.selectIsLoading);

  const isDelayedShow = useAppearanceDelay(isLoading);

  return (
    <ul
      className={cn('flex flex-col py-3', {
        'pointer-events-none opacity-50': isDelayedShow
      })}
    >
      {notes.map(note => (
        <NoteItem key={note.id} note={note} />
      ))}
    </ul>
  );
}
