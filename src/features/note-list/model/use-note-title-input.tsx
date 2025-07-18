import { useCallback, useEffect, useRef, useState } from 'react';

import { useAppDispatch, useAppSelector } from '@/shared/lib/redux';

import { type NoteId, noteStore } from '@/entities/note';

export function useNoteTitleInput({
  title,
  noteId
}: {
  title: string;
  noteId: string;
}) {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(noteStore.selectors.selectIsLoading);

  const [active, setActive] = useState<boolean>(false);
  const [value, setValue] = useState<string>(title);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setValue(title);
  }, [title]);

  useEffect(() => {
    if (active && ref.current) {
      ref.current.focus();

      ref.current.select();
    }
  }, [active]);

  const handleActive = useCallback(() => {
    setActive(prev => !prev);
  }, []);

  const changeValue = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, []);

  const handleUpdateNoteTitle = useCallback(async () => {
    if (value.trim() === title || value.trim() === '') {
      setValue(title);
      setActive(false);
      return;
    }

    setIsEditing(true);

    try {
      await dispatch(
        noteStore.actions.updateNoteTitle({
          id: noteId as NoteId,
          title: value.trim()
        })
      ).unwrap();

      setActive(false);
    } catch (error) {
      setValue(title);
      console.error('Ошибка при обновлении названия:', error);
    } finally {
      setIsEditing(false);
    }
  }, [dispatch, noteId, title, value]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        handleUpdateNoteTitle();
      } else if (e.key === 'Escape') {
        setValue(title);
        setActive(false);
      }
    },
    [handleUpdateNoteTitle, title]
  );

  const handleBlur = useCallback(() => {
    handleUpdateNoteTitle();
  }, [handleUpdateNoteTitle]);

  return {
    value,
    changeValue,
    handleKeyDown,
    handleActive,
    handleBlur,
    setActive,
    isEditing,
    isLoading,
    ref,
    active
  };
}
