import type {Meta, StoryObj} from '@storybook/react-vite';

import {layoutTokens} from '../../theme';
import {Flex} from '../flex';
import {Typography} from '../typography';

import {Divider} from './divider';

const {Paragraph} = Typography;

const meta: Meta<typeof Divider> = {
  title: 'Components/Divider',
  component: Divider,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'Направление разделителя',
    },
    orientation: {
      control: 'select',
      options: ['left', 'right', 'center'],
      description: 'Позиция текста в разделителе',
    },
    orientationMargin: {
      control: 'number',
      description: 'Отступ текста от разделителя',
    },
    dashed: {
      control: 'boolean',
      description: 'Пунктирный стиль',
    },
    plain: {
      control: 'boolean',
      description: 'Обычный текст без жирного начертания',
    },
    children: {
      control: 'text',
      description: 'Текст или элементы внутри разделителя',
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
type TStory = StoryObj<typeof Divider>;

// Basic dividers
export const Horizontal: TStory = {
  args: {
    type: 'horizontal',
  },
  render: (args) => (
    <div style={{width: '300px'}}>
      <Paragraph>Контент сверху</Paragraph>
      <Divider {...args} />
      <Paragraph>Контент снизу</Paragraph>
    </div>
  ),
};

export const Vertical: TStory = {
  args: {
    type: 'vertical',
  },
  render: (args) => (
    <div style={{height: '100px', display: 'flex', alignItems: 'center'}}>
      <span>Левый контент</span>
      <Divider {...args} />
      <span>Правый контент</span>
    </div>
  ),
};

// With text
export const WithText: TStory = {
  args: {
    children: 'Разделитель',
    type: 'horizontal',
  },
  render: (args) => (
    <div style={{width: '400px'}}>
      <Paragraph>Контент сверху</Paragraph>
      <Divider {...args} />
      <Paragraph>Контент снизу</Paragraph>
    </div>
  ),
};

export const WithTextLeft: TStory = {
  args: {
    children: 'Слева',
    titlePlacement: 'left',
    type: 'horizontal',
  },
  render: (args) => (
    <div style={{width: '400px'}}>
      <Paragraph>Контент сверху</Paragraph>
      <Divider {...args} />
      <Paragraph>Контент снизу</Paragraph>
    </div>
  ),
};

export const WithTextRight: TStory = {
  args: {
    children: 'Справа',
    titlePlacement: 'right',
    type: 'horizontal',
  },
  render: (args) => (
    <div style={{width: '400px'}}>
      <Paragraph>Контент сверху</Paragraph>
      <Divider {...args} />
      <Paragraph>Контент снизу</Paragraph>
    </div>
  ),
};

export const WithTextCenter: TStory = {
  args: {
    children: 'По центру',
    titlePlacement: 'center',
    type: 'horizontal',
  },
  render: (args) => (
    <div style={{width: '400px'}}>
      <Paragraph>Контент сверху</Paragraph>
      <Divider {...args} />
      <Paragraph>Контент снизу</Paragraph>
    </div>
  ),
};

// Styles
export const Dashed: TStory = {
  args: {
    dashed: true,
    type: 'horizontal',
  },
  render: (args) => (
    <div style={{width: '300px'}}>
      <Paragraph>Пунктирный разделитель</Paragraph>
      <Divider {...args} />
      <Paragraph>Контент снизу</Paragraph>
    </div>
  ),
};

export const Plain: TStory = {
  args: {
    children: 'Обычный текст',
    plain: true,
    type: 'horizontal',
  },
  render: (args) => (
    <div style={{width: '400px'}}>
      <Paragraph>Контент сверху</Paragraph>
      <Divider {...args} />
      <Paragraph>Контент снизу</Paragraph>
    </div>
  ),
};

// With margin customization
export const WithOrientationMargin: TStory = {
  args: {
    children: 'С отступом',
    titlePlacement: 'left',
    orientationMargin: 50,
    type: 'horizontal',
  },
  render: (args) => (
    <div style={{width: '400px'}}>
      <Paragraph>Контент сверху</Paragraph>
      <Divider {...args} />
      <Paragraph>Контент снизу</Paragraph>
    </div>
  ),
};

// In flex containers
export const InFlexRow: TStory = {
  render: () => (
    <Flex gap={layoutTokens.spacing.md} align='center'>
      <span>Элемент 1</span>
      <Divider orientation='vertical' />
      <span>Элемент 2</span>
      <Divider orientation='vertical' />
      <span>Элемент 3</span>
    </Flex>
  ),
};

export const InFlexColumn: TStory = {
  render: () => (
    <Flex vertical gap={layoutTokens.spacing.md} style={{width: '300px'}}>
      <span>Элемент 1</span>
      <Divider orientation='horizontal' />
      <span>Элемент 2</span>
      <Divider orientation='horizontal' />
      <span>Элемент 3</span>
    </Flex>
  ),
};

// All orientations
export const AllOrientations: TStory = {
  render: () => (
    <Flex vertical gap={layoutTokens.spacing.lg} style={{width: '400px'}}>
      <div>
        <Paragraph>Слева:</Paragraph>
        <Divider titlePlacement='left'>Текст</Divider>
      </div>
      <div>
        <Paragraph>По центру:</Paragraph>
        <Divider titlePlacement='center'>Текст</Divider>
      </div>
      <div>
        <Paragraph>Справа:</Paragraph>
        <Divider titlePlacement='right'>Текст</Divider>
      </div>
    </Flex>
  ),
};

// All types comparison
export const TypesComparison: TStory = {
  render: () => (
    <Flex vertical gap={layoutTokens.spacing.lg} style={{width: '400px'}}>
      <div>
        <Paragraph>Обычный:</Paragraph>
        <Divider />
      </div>
      <div>
        <Paragraph>Пунктирный:</Paragraph>
        <Divider dashed />
      </div>
      <div>
        <Paragraph>С текстом:</Paragraph>
        <Divider>С текстом</Divider>
      </div>
      <div>
        <Paragraph>С текстом и пунктиром:</Paragraph>
        <Divider dashed>Пунктир с текстом</Divider>
      </div>
    </Flex>
  ),
};

// With custom content
export const WithCustomContent: TStory = {
  render: () => (
    <div style={{width: '400px'}}>
      <Paragraph>Разделитель с иконкой:</Paragraph>
      <Divider>★ Разделитель ★</Divider>
      <Paragraph>Контент после разделителя</Paragraph>
    </div>
  ),
};

// Interactive playground
export const Playground: TStory = {
  args: {
    children: 'Playground',
    type: 'horizontal',
    titlePlacement: 'center',
    dashed: false,
    plain: false,
  },
  render: (args) => (
    <div style={{width: '500px'}}>
      <Paragraph>Верхний контент</Paragraph>
      <Divider {...args} />
      <Paragraph>Нижний контент</Paragraph>
    </div>
  ),
};
