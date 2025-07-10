import { createAsyncThunk } from '@reduxjs/toolkit';

import { noteRepository } from '../note.repository';
import type { NotePartial } from '../types';

export const getNoteById = createAsyncThunk(
  'notes/getNoteById',
  async (note: NotePartial) => {
    return await noteRepository.getNoteById(note);
  }
);
