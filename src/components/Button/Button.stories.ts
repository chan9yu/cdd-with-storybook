import type { Meta, StoryObj } from '@storybook/react';

import Button from './Button';

const meta = {
  title: 'Component/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof Button>;

type Story = StoryObj<typeof meta>;

export default meta;

export const Primary: Story = {
  args: {
    children: 'Button',
    primary: true,
  },
};

export const Secondary: Story = {
  args: {
    children: 'Button',
  },
};

export const Large: Story = {
  args: {
    children: 'Button',
    size: 'large',
  },
};

export const Small: Story = {
  args: {
    children: 'Button',
    size: 'small',
  },
};
