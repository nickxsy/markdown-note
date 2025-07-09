import { CONIFG } from '@/shared/const/config';

import type {
  CreateNoteData,
  DeleteNoteData,
  NotePartial,
  UpdateNoteData
} from './types';

export const noteRepository = {
  getNotes: async () => {
    try {
      const response = await fetch(
        `${CONIFG.API_URL}/notes?_sort=createdAt&_order=desc`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );

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

  getNoteById: async (note: NotePartial) => {
    try {
      const response = await fetch(`${CONIFG.API_URL}/notes/${note.id}`);

      if (!response.ok) {
        throw new Error('Failed to fetch note');
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching note:', error);
      return null;
    }
  },

  createNote: async (note: CreateNoteData) => {
    try {
      const response = await fetch(`${CONIFG.API_URL}/notes`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          ...note
        })
      });

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

  updateNoteTitle: async (note: UpdateNoteData) => {
    try {
      const response = await fetch(`${CONIFG.API_URL}/notes/${note.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          title: note.title
        })
      });

      if (!response.ok) {
        throw new Error('Failed to update note');
      }

      return note;
    } catch (error) {
      console.error('Error updating note:', error);
      throw error;
    }
  },

  removeNote: async (note: DeleteNoteData) => {
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
