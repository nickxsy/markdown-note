import type {
  CreateNoteData,
  DeleteNoteData,
  Note,
  NotePartial,
  UpdateNoteData
} from './types';

const notes: Note[] = [
  {
    id: '1',
    title: 'Note 1',
    content: 'Content 1',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: '2',
    title: 'Note 2',
    content: 'Content 2',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  }
];

export const noteRepository = {
  getNotes: () => {
    return notes;
  },

  getNote: (note: NotePartial) => {
    return notes.find(n => n.id === note.id);
  },

  createNote: (note: CreateNoteData) => {
    notes.push(note);

    return note;
  },

  updateNote: (note: UpdateNoteData) => {
    console.log('createNote', note);
    // TODO: implement
    return [];
  },

  removeNote: (note: DeleteNoteData) => {
    const index = notes.findIndex(n => n.id === note.id);
    notes.splice(index, 1);

    return notes;
  }
};
