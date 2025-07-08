import { createAsyncThunk } from '@reduxjs/toolkit';

import { noteRepository } from '../note.repository';

export const loadNotes = createAsyncThunk('notes/loadNotes', async () => {
  const notes = await noteRepository.getNotes();

  return notes;
});
