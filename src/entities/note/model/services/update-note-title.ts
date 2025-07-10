import { createAsyncThunk } from '@reduxjs/toolkit';

import { noteRepository } from '../note.repository';
import type { UpdateNoteData } from '../types';

export const updateNoteTitle = createAsyncThunk(
  'notes/updateNoteTitle',
  async (data: UpdateNoteData) => {
    return await noteRepository.updateNoteTitle(data);
  }
);
