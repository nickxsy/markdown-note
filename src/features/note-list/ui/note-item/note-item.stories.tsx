import type { Meta, StoryObj } from '@storybook/react-vite';

import { StoreProvider } from '@/shared/provider/store-provider';

import { NoteItem } from './note-item';

const meta = {
  title: 'Features/NoteList/NoteItem',
  component: NoteItem,
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
} satisfies Meta<typeof NoteItem>;

const note = {
  id: '1',
  title: 'Новая заметка',
  content:
    'Сегодня был замечательный день! Я начал работу над новым проектом, который давно планировал. Встретился с командой, обсудили основные цели и задачи. Все прошло очень продуктивно.',
  createdAt: '2025-07-09T01:52:32.852Z',
  updatedAt: '2025-07-09T01:52:32.852Z'
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    note
  }
};
