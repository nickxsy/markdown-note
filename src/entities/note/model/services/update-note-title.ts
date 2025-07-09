import { createAsyncThunk } from '@reduxjs/toolkit';

import { noteRepository } from '../note.repository';
import type { UpdateNoteData } from '../types';

export const updateNoteTitle = createAsyncThunk(
  'notes/updateNoteTitle',
  async (data: UpdateNoteData) => {
    try {
      const response = await noteRepository.updateNoteTitle(data);

      return response;
    } catch (error) {
      console.error('Error updating note title:', error);
      throw error;
    }
  }
);
