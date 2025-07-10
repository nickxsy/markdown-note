import { describe, expect, it } from 'vitest';

import type { Note } from '../../types';
import { groupNotesByDate } from '../group-notes-by-data';

describe('groupNotesByDate', () => {
  it('должен группировать заметки по дате', () => {
    const notes: Note[] = [
      {
        id: '1',
        title: 'Note 1',
        content: 'Content 1',
        createdAt: '2024-03-20T10:00:00.000Z',
        updatedAt: '2024-03-20T10:00:00.000Z'
      },
      {
        id: '2',
        title: 'Note 2',
        content: 'Content 2',
        createdAt: '2024-03-20T11:00:00.000Z',
        updatedAt: '2024-03-20T11:00:00.000Z'
      },
      {
        id: '3',
        title: 'Note 3',
        content: 'Content 3',
        createdAt: '2024-03-21T10:00:00.000Z',
        updatedAt: '2024-03-21T10:00:00.000Z'
      }
    ];

    const result = groupNotesByDate(notes);

    expect(result).toEqual({
      '2024-03-20': [
        {
          id: '1',
          title: 'Note 1',
          content: 'Content 1',
          createdAt: '2024-03-20T10:00:00.000Z',
          updatedAt: '2024-03-20T10:00:00.000Z'
        },
        {
          id: '2',
          title: 'Note 2',
          content: 'Content 2',
          createdAt: '2024-03-20T11:00:00.000Z',
          updatedAt: '2024-03-20T11:00:00.000Z'
        }
      ],
      '2024-03-21': [
        {
          id: '3',
          title: 'Note 3',
          content: 'Content 3',
          createdAt: '2024-03-21T10:00:00.000Z',
          updatedAt: '2024-03-21T10:00:00.000Z'
        }
      ]
    });
  });
});
