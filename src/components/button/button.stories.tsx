import type {Meta, StoryObj} from '@storybook/react-vite';

import {layoutTokens} from '../../theme';
import {Flex} from '../flex';
import {Icon} from '../icon';

import {Button} from './button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    block: {
      control: 'boolean',
      description: 'Занимает всю ширину',
    },
    danger: {
      control: 'boolean',
      description: 'Опасный стиль',
    },
    disabled: {
      control: 'boolean',
      description: 'Отключена ли кнопка',
    },
    ghost: {
      control: 'boolean',
      description: 'Прозрачный фон',
    },
    htmlType: {
      control: 'select',
      options: ['button', 'submit', 'reset'],
      description: 'HTML тип кнопки',
    },
    loading: {
      control: 'boolean',
      description: 'Состояние загрузки',
    },
    shape: {
      control: 'select',
      options: ['default', 'circle', 'round'],
      description: 'Форма кнопки',
    },
    size: {
      control: 'select',
      options: ['small', 'middle', 'large'],
      description: 'Размер кнопки',
    },
    type: {
      control: 'select',
      options: ['default', 'primary', 'dashed', 'text', 'link'],
      description: 'Тип кнопки',
    },
    onClick: {action: 'clicked'},
  },
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'light',
    },
  },
};

export default meta;
type TStory = StoryObj<typeof Button>;

// Basic button
export const Primary: TStory = {
  args: {
    children: 'Primary Button',
    type: 'primary',
  },
};

export const Default: TStory = {
  args: {
    children: 'Default Button',
    type: 'default',
  },
};

export const Dashed: TStory = {
  args: {
    children: 'Dashed Button',
    type: 'dashed',
  },
};

export const Text: TStory = {
  args: {
    children: 'Text Button',
    type: 'text',
  },
};

export const Link: TStory = {
  args: {
    children: 'Link Button',
    type: 'link',
  },
};

// Sizes
export const Large: TStory = {
  args: {
    children: 'Large Button',
    size: 'large',
  },
};

export const Middle: TStory = {
  args: {
    children: 'Middle Button',
    size: 'middle',
  },
};

export const Small: TStory = {
  args: {
    children: 'Small Button',
    size: 'small',
  },
};

// Shapes
export const Circle: TStory = {
  args: {
    children: 'A',
    shape: 'circle',
    type: 'primary',
  },
};

export const Round: TStory = {
  args: {
    children: 'Round Button',
    shape: 'round',
    type: 'primary',
  },
};

// States
export const Block: TStory = {
  args: {
    children: 'Block Button',
    block: true,
    type: 'primary',
  },
};

export const Ghost: TStory = {
  args: {
    children: 'Ghost Button',
    ghost: true,
    type: 'primary',
  },
};

export const Loading: TStory = {
  args: {
    children: 'Loading...',
    loading: true,
    type: 'primary',
  },
};

export const Disabled: TStory = {
  args: {
    children: 'Disabled Button',
    disabled: true,
    type: 'primary',
  },
};

export const Danger: TStory = {
  args: {
    children: 'Danger Button',
    danger: true,
    type: 'primary',
  },
};

// With icons
export const WithIcon: TStory = {
  args: {
    children: 'Search',
    icon: <Icon name='profile' />,
    type: 'primary',
  },
};

export const IconOnly: TStory = {
  args: {
    icon: <Icon name='profile' />,
    shape: 'circle',
    type: 'primary',
  },
  parameters: {
    controls: {exclude: ['children']},
  },
};

// Button group example
export const ButtonGroup: TStory = {
  render: () => (
    <Flex gap={layoutTokens.spacing.sm} align='center'>
      <Button type='primary'>Save</Button>
      <Button>Cancel</Button>
      <Button type='dashed'>Draft</Button>
    </Flex>
  ),
};

// All types together
export const AllTypes: TStory = {
  render: () => (
    <Flex gap={layoutTokens.spacing.md} wrap='wrap'>
      <Button type='primary'>Primary</Button>
      <Button type='default'>Default</Button>
      <Button type='dashed'>Dashed</Button>
      <Button type='text'>Text</Button>
      <Button type='link'>Link</Button>
    </Flex>
  ),
};

// All sizes
export const AllSizes: TStory = {
  render: () => (
    <Flex gap={layoutTokens.spacing.md} align='center'>
      <Button size='large' type='primary'>
        Large
      </Button>
      <Button size='middle' type='primary'>
        Middle
      </Button>
      <Button size='small' type='primary'>
        Small
      </Button>
    </Flex>
  ),
};

// Interactive playground
export const Playground: TStory = {
  args: {
    children: 'Click me!',
    type: 'primary',
    size: 'middle',
  },
};
