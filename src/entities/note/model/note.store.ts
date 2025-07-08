import type { PayloadAction } from '@reduxjs/toolkit';
import { createSelector, createSlice } from '@reduxjs/toolkit';

import { createBaseSelector, registerSlice } from '@/shared/lib/redux';

import { createNote } from './services/create-note';
import { loadNotes } from './services/get-notes';
import { removeNote } from './services/remove-note';
import type { Note, NoteSchema } from './types';

const initialState: NoteSchema = {
  data: [],
  isLoading: false,
  isError: false,
  error: undefined
};

export const noteSlice = createSlice({
  name: 'note',
  initialState,
  reducers: {
    setNote: (state, action: PayloadAction<{ notes: Note[] }>) => {
      state.data = action.payload.notes;
    }
  },
  extraReducers: builder => {
    builder
      //  Load notes
      .addCase(loadNotes.pending, state => {
        state.isLoading = true;
        state.isError = false;
        state.error = undefined;
      })
      .addCase(loadNotes.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message;
      })
      .addCase(loadNotes.fulfilled, (state, action) => {
        state.data = action.payload;
        state.isLoading = false;
      })

      //  Create note
      .addCase(createNote.pending, state => {
        state.isLoading = true;
        state.isError = false;
        state.error = undefined;
      })
      .addCase(createNote.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message;
      })
      .addCase(createNote.fulfilled, (state, action) => {
        state.data = [...state.data, action.payload];
        state.isLoading = false;
      })

      //  Remove note
      .addCase(removeNote.pending, state => {
        state.isLoading = true;
        state.isError = false;
        state.error = undefined;
      })

      .addCase(removeNote.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message;
      })

      .addCase(removeNote.fulfilled, (state, action) => {
        state.data = state.data.filter(note => note.id !== action.payload.id);
        state.isLoading = false;
      });
  }
});

const noteBaseSelector = createBaseSelector(noteSlice);

const selectNotes = createSelector(noteBaseSelector, s => s.data);

const selectIsLoading = createSelector(noteBaseSelector, s => s.isLoading);
const selectIsError = createSelector(noteBaseSelector, s => s.isError);
const selectError = createSelector(noteBaseSelector, s => s.error);

registerSlice([noteSlice]);

export const noteStore = {
  actions: {
    loadNotes,
    createNote,
    removeNote
  },
  selectors: {
    selectNotes,
    selectIsLoading,
    selectIsError,
    selectError
  }
};
