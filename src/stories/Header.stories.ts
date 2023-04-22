import type { Meta, StoryObj } from '@storybook/react';
import { StorybookHeader } from '../components';

const meta: Meta<typeof StorybookHeader> = {
  title: 'Example/Header',
  component: StorybookHeader,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof StorybookHeader>;

export const LoggedIn: Story = {
  args: {
    user: {
      name: 'Jane Doe',
    },
  },
};

export const LoggedOut: Story = {};
