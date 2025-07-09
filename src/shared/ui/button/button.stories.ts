import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import { Button } from './button';

const meta = {
  title: 'Shared/Button',
  component: Button,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select' },
    size: { control: 'select' }
  },
  args: { onClick: fn() }
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'default',
    size: 'default',
    children: 'Button'
  }
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    size: 'default',
    children: 'Button'
  }
};

export const Large: Story = {
  args: {
    variant: 'outline',
    size: 'lg',
    children: 'Button'
  }
};

export const Small: Story = {
  args: {
    variant: 'ghost',
    size: 'sm',
    children: 'Button'
  }
};
