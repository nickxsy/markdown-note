import { useAppDispatch } from '@/shared/lib/redux';

import { noteStore } from '@/entities/note';

export function useCreateNote() {
  const dispatch = useAppDispatch();

  const createNote = () => {
    dispatch(noteStore.actions.createNote());
  };

  return { createNote };
}
