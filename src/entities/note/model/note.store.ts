import type { PayloadAction } from '@reduxjs/toolkit';
import { createSelector, createSlice } from '@reduxjs/toolkit';

import { createBaseSelector, registerSlice } from '@/shared/lib/redux';

import { createNote } from './services/create-note';
import { getNoteById } from './services/get-note-by-id';
import { loadNotes } from './services/get-notes';
import { removeNote } from './services/remove-note';
import { updateNoteTitle } from './services/update-note-title';
import type { Note, NoteSchema } from './types';

const initialState: NoteSchema = {
  data: [],
  groupedData: {},
  isLoading: false,
  isError: false,
  error: undefined
};

function groupNotesByDate(notes: Note[]) {
  return notes.reduce((acc: Record<string, Note[]>, note) => {
    const date = note.updatedAt.split('T')[0];

    acc[date] = acc[date] || [];
    acc[date].push(note);

    return acc;
  }, {});
}

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
        state.groupedData = groupNotesByDate(state.data);
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
        state.data = [action.payload, ...state.data];
        state.groupedData = groupNotesByDate(state.data);
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
        state.groupedData = groupNotesByDate(state.data);
        state.isLoading = false;
      })

      // Update note title
      .addCase(updateNoteTitle.pending, state => {
        state.isLoading = true;
        state.isError = false;
        state.error = undefined;
      })
      .addCase(updateNoteTitle.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message;
      })
      .addCase(updateNoteTitle.fulfilled, (state, action) => {
        state.data = state.data.map(note =>
          note.id === action.payload.id
            ? { ...note, title: action.payload.title }
            : note
        );
        state.groupedData = groupNotesByDate(state.data);
        state.isLoading = false;
      })

      // Get note by id
      .addCase(getNoteById.pending, state => {
        state.isLoading = true;
        state.isError = false;
        state.error = undefined;
      })

      .addCase(getNoteById.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message;
      })
      .addCase(getNoteById.fulfilled, (state, action) => {
        state.data = [action.payload, ...state.data];
        state.groupedData = groupNotesByDate(state.data);
        state.isLoading = false;
      });
  }
});

const noteBaseSelector = createBaseSelector(noteSlice);

const selectNotes = createSelector(noteBaseSelector, s => s.data);
const selectGroupedNotes = createSelector(noteBaseSelector, s => s.groupedData);

const selectIsLoading = createSelector(noteBaseSelector, s => s.isLoading);
const selectIsError = createSelector(noteBaseSelector, s => s.isError);
const selectError = createSelector(noteBaseSelector, s => s.error);

const selectNoteById = createSelector(
  selectNotes,
  (_, id) => id,
  (notes: Note[], id: string) => {
    return notes.find(note => note.id === id);
  }
);

registerSlice([noteSlice]);

export const noteStore = {
  actions: {
    loadNotes,
    createNote,
    removeNote,
    updateNoteTitle,
    getNoteById
  },
  selectors: {
    selectNotes,
    selectIsLoading,
    selectIsError,
    selectError,
    selectNoteById,
    selectGroupedNotes
  }
};
