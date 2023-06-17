import type { Meta, StoryObj } from '@storybook/react';

import ButtonGroup from './ButtonGroup';

const meta = {
  title: 'Component/ButtonGroup',
  component: ButtonGroup,
  tags: ['autodocs'],
} satisfies Meta<typeof ButtonGroup>;

type Story = StoryObj<typeof meta>;

export default meta;

export const DefaultGroup: Story = {
  args: {
    children: 'Button',
  },
};
