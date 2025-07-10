import { createAsyncThunk } from '@reduxjs/toolkit';
import { navigate } from 'wouter/use-browser-location';

import { noteRepository } from '../note.repository';
import type { DeleteNoteData } from '../types';

export const removeNote = createAsyncThunk(
  'notes/removeNote',
  async (note: DeleteNoteData) => {
    const response = await noteRepository.removeNote(note);

    if (response) {
      navigate('/');
    }

    return response;
  }
);
