import { CONIFG } from '@/shared/model/config';

import type {
  CreateNoteData,
  DeleteNoteData,
  NotePartial,
  UpdateNoteData
} from './types';

export const noteRepository = {
  getNotes: async () => {
    try {
      const response = await fetch(`${CONIFG.API_URL}/notes`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error('Failed to fetch notes');
      }

      const data = await response.json();

      return data;
    } catch (error) {
      console.error('Error fetching notes:', error);
      return [];
    }
  },

  getNote: (note: NotePartial) => {
    // TODO: implement
    console.log('getNote', note);
  },

  createNote: async (note: CreateNoteData) => {
    try {
      console.log('Creating note with data:', note);
      console.log('API URL:', CONIFG.API_URL);

      const response = await fetch(`${CONIFG.API_URL}/notes`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          ...note,
          content: note.content || '' // Убеждаемся, что content всегда определен
        })
      });

      console.log('Response status:', response.status);
      console.log('Response ok:', response.ok);

      if (!response.ok) {
        const errorText = await response.text();
        console.error('Server error response:', errorText);
        throw new Error(
          `Failed to create note: ${response.status} ${errorText}`
        );
      }

      // Возвращаем созданную заметку, даже если сервер не вернул данные
      return note;
    } catch (error) {
      console.error('Error creating note:', error);
      throw error;
    }
  },

  updateNote: (note: UpdateNoteData) => {
    console.log('createNote', note);
    // TODO: implement
    return [];
  },

  removeNote: async (note: DeleteNoteData) => {
    console.log('removeNote', note);

    try {
      const response = await fetch(`${CONIFG.API_URL}/notes/${note.id}`, {
        method: 'DELETE'
      });

      if (!response.ok) {
        throw new Error('Failed to delete note');
      }

      return note;
    } catch (error) {
      console.error('Error deleting note:', error);
      throw error;
    }
  }
};
