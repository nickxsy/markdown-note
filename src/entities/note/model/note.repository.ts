import { clientApi } from '@/shared/api/instance';

import { handleRepositoryError } from './lib/handle-repository-error';
import type {
  CreateNoteData,
  DeleteNoteData,
  NotePartial,
  UpdateNoteData
} from './types';

export const noteRepository = {
  getNotes: async () => {
    try {
      const response = await clientApi.get('/notes', {
        params: {
          _sort: 'createdAt',
          _order: 'desc'
        }
      });

      return response.data;
    } catch (error) {
      handleRepositoryError(error, 'Ошибка при запросе заметок');
    }
  },

  getNoteById: async (note: NotePartial) => {
    try {
      const response = await clientApi.get(`/notes/${note.id}`);

      return response.data;
    } catch (error) {
      handleRepositoryError(error, 'Ошибка при запросе заметки');
    }
  },

  createNote: async (note: CreateNoteData) => {
    try {
      const response = await clientApi.post('/notes', note);

      return response.data;
    } catch (error) {
      handleRepositoryError(error, 'Ошибка при создании заметки');
    }
  },

  updateNoteTitle: async (note: UpdateNoteData) => {
    try {
      const response = await clientApi.patch(`/notes/${note.id}`, {
        title: note.title
      });

      return response.data;
    } catch (error) {
      handleRepositoryError(error, 'Ошибка при обновлении заметки');
    }
  },

  removeNote: async (note: DeleteNoteData) => {
    try {
      await clientApi.delete(`/notes/${note.id}`);

      return { id: note.id };
    } catch (error) {
      handleRepositoryError(error, 'Ошибка при удалении заметки');
    }
  }
};
