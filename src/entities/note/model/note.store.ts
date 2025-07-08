import type { PayloadAction } from '@reduxjs/toolkit';
import {
  createAsyncThunk,
  createSelector,
  createSlice,
  nanoid
} from '@reduxjs/toolkit';

import { createBaseSelector, registerSlice } from '@/shared/lib/redux';

import type { Note } from '@/entities/note';

import { noteRepository } from './note.repository';
import type { DeleteNoteData } from './types';

const NOTE_DEFAULT_TITLE = 'Новая заметка';

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
  },
  extraReducers: builder => {
    builder.addCase(loadNotes.fulfilled, (state, action) => {
      state.notes = action.payload;
    });
    builder.addCase(createNote.fulfilled, (state, action) => {
      console.log('createNote.fulfilled', action.payload);
      state.notes.push(action.payload);
    });
  }
});

const noteBaseSelector = createBaseSelector(noteSlice);

const selectNotes = createSelector(noteBaseSelector, s => s.notes);

const loadNotes = createAsyncThunk('notes/loadNotes', async () => {
  const notes = await noteRepository.getNotes();
  return notes;
});

const createNote = createAsyncThunk('notes/createNote', async () => {
  const newNote = {
    id: nanoid(),
    title: NOTE_DEFAULT_TITLE,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };

  await noteRepository.createNote(newNote);
  return newNote;
});

// const updateBoard = createAsyncThunk(
//   "boards/updateBoard",
//   async (data: UpdateBoardData) => {
//     const board = await boardsRepository.getBoard(data.id);
//     if (!board) {
//       throw new Error();
//     }
//     const newBoard = { ...board, ...data };
//     await boardsRepository.saveBoard(newBoard);
//     return newBoard;
//   },
// );

const removeNote = createAsyncThunk(
  'notes/removeNote',
  async (note: DeleteNoteData) => {
    await noteRepository.removeNote(note);
    return note;
  }
);

registerSlice([noteSlice]);

export const noteStore = {
  actions: {
    loadNotes,
    createNote,
    removeNote
  },
  selectors: {
    selectNotes
  }
};
