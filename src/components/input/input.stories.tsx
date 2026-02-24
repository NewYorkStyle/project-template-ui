import type {Meta, StoryObj} from '@storybook/react-webpack5';

import {Input} from './input';

const meta: Meta<typeof Input> = {
  argTypes: {
    disabled: {
      control: 'boolean',
      description: 'Отключено ли поле ввода',
    },
    placeholder: {
      control: 'text',
      description: 'Плейсхолдер',
    },
  },
  args: {
    placeholder: 'Введите текст',
    disabled: false,
  },
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Components/Input',
} satisfies Meta<typeof Input>;

export default meta;
type TStory = StoryObj<typeof meta>;

export const Default: TStory = {
  render: (args) => <Input {...args} />,
};
