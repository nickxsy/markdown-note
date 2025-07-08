import { useAppDispatch, useAppSelector } from '@/shared/lib/redux';

import { noteStore } from '@/entities/note';

export function useCreateNote() {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(noteStore.selectors.selectIsLoading);
  const error = useAppSelector(noteStore.selectors.selectError);

  const createNote = () => {
    dispatch(noteStore.actions.createNote());
  };

  return { createNote, isLoading, error };
}
