import { createAsyncThunk } from '@reduxjs/toolkit';
import { navigate } from 'wouter/use-browser-location';

import { noteRepository } from '../note.repository';
import type { DeleteNoteData } from '../types';

export const removeNote = createAsyncThunk(
  'notes/removeNote',
  async (note: DeleteNoteData) => {
    try {
      const response = await noteRepository.removeNote(note);

      navigate('/');

      return response;
    } catch (error) {
      console.error('Error deleting note:', error);
      throw error;
    }
  }
);
