import { createAsyncThunk } from '@reduxjs/toolkit';

import { noteRepository } from '../note.repository';
import type { NotePartial } from '../types';

export const getNoteById = createAsyncThunk(
  'notes/getNoteById',
  async (note: NotePartial) => {
    try {
      const response = await noteRepository.getNoteById(note);
      return response;
    } catch (error) {
      console.error('Error fetching note:', error);
      throw error;
    }
  }
);
