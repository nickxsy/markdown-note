import type { CreateNoteData, DeleteNoteData, UpdateNoteData } from './types';

export const noteRepository = {
  getNotes: () => {
    return [];
  },
  createNote: (note: CreateNoteData) => {
    // TODO: implement
    console.log('createNote', note);
    return [];
  },
  updateNote: (note: UpdateNoteData) => {
    console.log('createNote', note);
    // TODO: implement
    return [];
  },
  deleteNote: (note: DeleteNoteData) => {
    console.log('createNote', note);
    // TODO: implement
    return [];
  }
};
