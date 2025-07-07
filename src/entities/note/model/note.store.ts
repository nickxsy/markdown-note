import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import type { RootState } from '@/shared/lib/redux';

import type { Note } from '@/entities/note';

type NoteState = {
  notes: Note[];
};

const initialState: NoteState = {
  notes: []
};

export const noteSlice = createSlice({
  name: 'note',
  initialState,
  reducers: {
    setNote: (state, action: PayloadAction<{ notes: Note[] }>) => {
      state.notes = action.payload.notes;
    }
  }
});

export const { setNote } = noteSlice.actions;

export const selectNote = (state: RootState) => state.notes;

export const noteStore = {};
