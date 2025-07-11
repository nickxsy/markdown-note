import { useAppearanceDelay } from '@/shared/lib/react';
import { useAppSelector } from '@/shared/lib/redux';

import { noteStore } from '@/entities/note';

export function useNoteList() {
  const notes = useAppSelector(noteStore.selectors.selectNotes);
  const groupedNotes = useAppSelector(noteStore.selectors.selectGroupedNotes);
  const isLoading = useAppSelector(noteStore.selectors.selectIsLoading);
  const isError = useAppSelector(noteStore.selectors.selectIsError);
  const error = useAppSelector(noteStore.selectors.selectError);

  const isDelayedShow = useAppearanceDelay(isLoading);

  return {
    notes,
    groupedNotes,
    isLoading,
    isDelayedShow,
    isError,
    error
  };
}
