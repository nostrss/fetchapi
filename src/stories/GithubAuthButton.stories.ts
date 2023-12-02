import GithubAuthButton from '@/components/ui/Button';
import type { Meta, StoryObj } from '@storybook/react';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'GithubAuthButton',
  component: GithubAuthButton,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    children: { control: 'text' },
    callback: { action: 'clicked' },
  },
} satisfies Meta<typeof GithubAuthButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Login: Story = {
  args: {
    children: '깃허브로 로그인하기',
    callback: () => {
      alert('로그인');
    },
  },
};

export const Logout: Story = {
  args: {
    children: '깃허브로 로그아웃하기',
    callback: () => {
      alert('로그아웃');
    },
  },
};
