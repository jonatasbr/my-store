import { Story, Meta } from '@storybook/react';
import Main from '.';

export default {
  title: 'Main',
  component: Main,
  args: {},
} as Meta;

export const Basic: Story = (args) => <Main {...args} />;
Basic.args = {
  title: 'title basic',
  description: 'description basic',
};

export const Default: Story = (args) => <Main {...args} />;
