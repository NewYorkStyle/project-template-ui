import type {Meta, StoryObj} from '@storybook/react-vite';

import {layoutTokens} from '../../theme';
import {Flex} from '../flex';
import {Typography} from '../typography';

import {Icon} from './icon';
import {ICON_NAMES} from './types';

const {Text} = Typography;

const meta: Meta<typeof Icon> = {
  title: 'Components/Icon',
  component: Icon,
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: 'select',
      options: Object.keys(ICON_NAMES),
      description: 'Название иконки',
    },
    size: {
      control: 'number',
      description: 'Размер иконки в пикселях',
    },
    color: {
      control: 'color',
      description: 'Цвет иконки',
    },
  },
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'light',
    },
  },
};

export default meta;
type TStory = StoryObj<typeof Icon>;

// All icons
export const AllIcons: TStory = {
  render: () => (
    <Flex gap={layoutTokens.spacing.lg} wrap='wrap' justify='center'>
      {Object.keys(ICON_NAMES).map((iconName) => (
        <Flex
          key={iconName}
          vertical
          gap={layoutTokens.spacing.sm}
          align='center'
        >
          <Icon name={iconName as keyof typeof ICON_NAMES} size={32} />
          <Text>{iconName}</Text>
        </Flex>
      ))}
    </Flex>
  ),
};

// Different sizes
export const Sizes: TStory = {
  render: () => (
    <Flex gap={layoutTokens.spacing.lg} align='center'>
      <Flex vertical gap={layoutTokens.spacing.sm} align='center'>
        <Icon name='home' size={16} />
        <Text>16px</Text>
      </Flex>
      <Flex vertical gap={layoutTokens.spacing.sm} align='center'>
        <Icon name='home' size={24} />
        <Text>24px</Text>
      </Flex>
      <Flex vertical gap={layoutTokens.spacing.sm} align='center'>
        <Icon name='home' size={32} />
        <Text>32px</Text>
      </Flex>
      <Flex vertical gap={layoutTokens.spacing.sm} align='center'>
        <Icon name='home' size={48} />
        <Text>48px</Text>
      </Flex>
      <Flex vertical gap={layoutTokens.spacing.sm} align='center'>
        <Icon name='home' size={64} />
        <Text>64px</Text>
      </Flex>
    </Flex>
  ),
};

// Interactive playground
export const Playground: TStory = {
  args: {
    name: 'home',
    size: 48,
    color: '#4594D1',
  },
  render: (args) => (
    <Flex vertical gap={layoutTokens.spacing.lg} align='center'>
      <Icon {...args} />
      <Flex vertical gap={layoutTokens.spacing.xs} align='center'>
        <Text strong>Current icon: {args.name}</Text>
        <Text type='secondary'>
          Size: {args.size}px | Color: {args.color}
        </Text>
      </Flex>
    </Flex>
  ),
};
