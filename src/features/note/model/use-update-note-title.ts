import { useAppDispatch } from '@/shared/lib/redux';

import { noteStore } from '@/entities/note';

export function useUpdateNoteTitle() {
  const dispatch = useAppDispatch();

  const updateNoteTitle = (id: string, title: string) => {
    dispatch(noteStore.actions.updateNoteTitle({ id, title }));
  };

  return {
    updateNoteTitle
  };
}
