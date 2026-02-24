import type {Meta, StoryObj} from '@storybook/react-webpack5';

import {Flex} from './flex';

const meta: Meta<typeof Flex> = {
  args: {
    gap: 8,
  },
  component: Flex,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Components/Flex',
} satisfies Meta<typeof Flex>;

export default meta;
type TStory = StoryObj<typeof meta>;

export const Row: TStory = {
  args: {
    align: 'center',
    justify: 'space-between',
  },
  render: (args) => (
    <Flex {...args} style={{width: 400, border: '1px solid #ccc', padding: 16}}>
      <div>Left</div>
      <div>Center</div>
      <div>Right</div>
    </Flex>
  ),
};
