import type { Meta, StoryObj } from '@storybook/react-vite';

import { StoreProvider } from '@/shared/provider/store-provider';

import type { NoteId } from '@/entities/note';

import { UiNoteList } from './ui-note-list';

const meta = {
  title: 'Features/NoteList/NoteList',
  component: UiNoteList,

  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {},
  decorators: [
    Story => (
      <div style={{ width: '400px' }}>
        <StoreProvider>
          <Story />
        </StoreProvider>
      </div>
    )
  ]
} satisfies Meta<typeof UiNoteList>;

const notes = [
  {
    id: '1' as NoteId,
    title: 'Новая заметка',
    content:
      'Сегодня был замечательный день! Я начал работу над новым проектом, который давно планировал. Встретился с командой, обсудили основные цели и задачи. Все прошло очень продуктивно.',
    createdAt: '2025-07-09T01:52:32.852Z',
    updatedAt: '2025-07-09T01:52:32.852Z'
  },
  {
    id: '2' as NoteId,
    title: 'Вторая заметка',
    content: 'Содержание второй заметки',
    createdAt: '2025-07-08T01:52:32.852Z',
    updatedAt: '2025-07-08T01:52:32.852Z'
  },
  {
    id: '3' as NoteId,
    title: 'Третья заметка',
    content: 'Содержание третьей заметки',
    createdAt: '2025-07-07T01:52:32.852Z',
    updatedAt: '2025-07-07T01:52:32.852Z'
  }
];

const groupedNotes = {
  '2025-07-09': [notes[0]],
  '2025-07-08': [notes[1]],
  '2025-07-07': [notes[2]]
};

export default meta;
type Story = StoryObj<typeof meta>;

export const WithNotes: Story = {
  args: {
    isDelayedShow: false,
    groupedNotes
  }
};

export const WithDelayedShow: Story = {
  args: {
    isDelayedShow: true,
    groupedNotes
  }
};
