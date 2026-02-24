import type {Meta, StoryObj} from '@storybook/react-webpack5';

import {Divider} from './divider';

const meta: Meta<typeof Divider> = {
  args: {
    children: 'Разделитель',
    orientation: 'center',
  },
  component: Divider,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Components/Divider',
} satisfies Meta<typeof Divider>;

export default meta;
type TStory = StoryObj<typeof meta>;

export const Default: TStory = {
  render: (args) => (
    <div style={{width: 400}}>
      <Divider {...args} />
    </div>
  ),
};
