import { createAsyncThunk, nanoid } from '@reduxjs/toolkit';
import { navigate } from 'wouter/use-browser-location';

import { noteRepository } from '../note.repository';
import type { NoteId } from '../types';

const NOTE_DEFAULT_TITLE = 'Новая заметка';

export const createNote = createAsyncThunk('notes/createNote', async () => {
  const newNote = {
    id: nanoid() as NoteId,
    title: NOTE_DEFAULT_TITLE,
    content: '',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };

  const response = await noteRepository.createNote(newNote);

  if (response) {
    navigate(`/note/${response.id}`);
  }

  return response;
});
