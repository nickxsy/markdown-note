import { useAppDispatch } from '@/shared/lib/redux';

import { type DeleteNoteData, noteStore } from '@/entities/note';

export function useRemoveNote() {
  const dispatch = useAppDispatch();

  const removeNote = (note: DeleteNoteData) => () => {
    dispatch(noteStore.actions.removeNote(note));
  };

  return { removeNote };
}
