import { useParams } from 'wouter';

import { useAppSelector } from '@/shared/lib/redux';

import { noteStore } from '@/entities/note';

import { InputTitleNote, RemoveNoteButton } from '@/features/note';

export function NoteHeader() {
  const { id } = useParams();
  const notes = useAppSelector(noteStore.selectors.selectNotes);
  const note = notes.find(note => note.id === id);

  if (!id) {
    return null;
  }

  return (
    <div className="flex items-center justify-between border-b border-gray-200 bg-white p-4">
      <div className="flex-1">
        <InputTitleNote id={id} initialTitle={note?.title} />
      </div>
      <RemoveNoteButton id={id} />
    </div>
  );
}
