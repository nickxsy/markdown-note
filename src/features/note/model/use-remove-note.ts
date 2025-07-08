import { useAppDispatch } from '@/shared/lib/redux';

import { noteStore } from '@/entities/note';

export function useRemoveNote() {
  const dispatch = useAppDispatch();

  const removeNote = (id: string) => {
    dispatch(noteStore.actions.removeNote({ id }));
  };

  return { removeNote };
}
