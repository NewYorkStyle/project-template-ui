import type {Meta, StoryObj} from '@storybook/react-vite';

import {layoutTokens} from '../../theme';
import {Button} from '../button';
import {Typography} from '../typography';

import {Flex} from './flex';

const {Text, Title} = Typography;

const meta: Meta<typeof Flex> = {
  title: 'Components/Flex',
  component: Flex,
  tags: ['autodocs'],
  argTypes: {
    vertical: {
      control: 'boolean',
      description: 'Вертикальное направление',
    },
    wrap: {
      control: 'select',
      options: ['wrap', 'nowrap', 'wrap-reverse'],
      description: 'Перенос элементов',
    },
    justify: {
      control: 'select',
      options: [
        'flex-start',
        'flex-end',
        'center',
        'space-between',
        'space-around',
        'space-evenly',
      ],
      description: 'Выравнивание по главной оси',
    },
    align: {
      control: 'select',
      options: ['flex-start', 'flex-end', 'center', 'stretch', 'baseline'],
      description: 'Выравнивание по поперечной оси',
    },
    gap: {
      control: 'select',
      options: [
        layoutTokens.spacing.xs,
        layoutTokens.spacing.sm,
        layoutTokens.spacing.md,
        layoutTokens.spacing.lg,
      ],
      description: 'Расстояние между элементами',
    },
    children: {
      control: 'text',
      description: 'Содержимое компонента',
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
type TStory = StoryObj<typeof Flex>;

// Basic flex examples
export const Horizontal: TStory = {
  render: () => (
    <Flex gap={layoutTokens.spacing.md}>
      <Button>Button 1</Button>
      <Button>Button 2</Button>
      <Button>Button 3</Button>
    </Flex>
  ),
};

export const Vertical: TStory = {
  render: () => (
    <Flex vertical gap={layoutTokens.spacing.md}>
      <Button>Button 1</Button>
      <Button>Button 2</Button>
      <Button>Button 3</Button>
    </Flex>
  ),
};

// Justify content
export const JustifyStart: TStory = {
  render: () => (
    <Flex
      justify='flex-start'
      gap={layoutTokens.spacing.md}
      style={{width: '100%', minWidth: '300px'}}
    >
      <Button>Start</Button>
      <Button>Start</Button>
    </Flex>
  ),
};

export const JustifyCenter: TStory = {
  render: () => (
    <Flex
      justify='center'
      gap={layoutTokens.spacing.md}
      style={{width: '100%', minWidth: '300px'}}
    >
      <Button>Center</Button>
      <Button>Center</Button>
    </Flex>
  ),
};

export const JustifyEnd: TStory = {
  render: () => (
    <Flex
      justify='flex-end'
      gap={layoutTokens.spacing.md}
      style={{width: '100%', minWidth: '300px'}}
    >
      <Button>End</Button>
      <Button>End</Button>
    </Flex>
  ),
};

export const JustifySpaceBetween: TStory = {
  render: () => (
    <Flex
      justify='space-between'
      gap={layoutTokens.spacing.md}
      style={{width: '100%', minWidth: '300px'}}
    >
      <Button>Left</Button>
      <Button>Right</Button>
    </Flex>
  ),
};

export const JustifySpaceAround: TStory = {
  render: () => (
    <Flex
      justify='space-around'
      gap={layoutTokens.spacing.md}
      style={{width: '100%', minWidth: '300px'}}
    >
      <Button>Item 1</Button>
      <Button>Item 2</Button>
      <Button>Item 3</Button>
    </Flex>
  ),
};

export const JustifySpaceEvenly: TStory = {
  render: () => (
    <Flex
      justify='space-evenly'
      gap={layoutTokens.spacing.md}
      style={{width: '100%', minWidth: '300px'}}
    >
      <Button>Item 1</Button>
      <Button>Item 2</Button>
      <Button>Item 3</Button>
    </Flex>
  ),
};

// Align items
export const AlignStart: TStory = {
  render: () => (
    <Flex
      align='flex-start'
      gap={layoutTokens.spacing.md}
      style={{
        height: '100px',
        border: '1px solid #ddd',
        padding: layoutTokens.spacing.md,
      }}
    >
      <div style={{height: '40px'}}>
        <Button>Small</Button>
      </div>
      <div style={{height: '80px'}}>
        <Button>Medium</Button>
      </div>
      <div style={{height: '60px'}}>
        <Button>Large</Button>
      </div>
    </Flex>
  ),
};

export const AlignCenter: TStory = {
  render: () => (
    <Flex
      align='center'
      gap={layoutTokens.spacing.md}
      style={{
        height: '100px',
        border: '1px solid #ddd',
        padding: layoutTokens.spacing.md,
      }}
    >
      <div style={{height: '40px'}}>
        <Button>Small</Button>
      </div>
      <div style={{height: '80px'}}>
        <Button>Medium</Button>
      </div>
      <div style={{height: '60px'}}>
        <Button>Large</Button>
      </div>
    </Flex>
  ),
};

export const AlignEnd: TStory = {
  render: () => (
    <Flex
      align='flex-end'
      gap={layoutTokens.spacing.md}
      style={{
        height: '100px',
        border: '1px solid #ddd',
        padding: layoutTokens.spacing.md,
      }}
    >
      <div style={{height: '40px'}}>
        <Button>Small</Button>
      </div>
      <div style={{height: '80px'}}>
        <Button>Medium</Button>
      </div>
      <div style={{height: '60px'}}>
        <Button>Large</Button>
      </div>
    </Flex>
  ),
};

export const AlignStretch: TStory = {
  render: () => (
    <Flex
      align='stretch'
      gap={layoutTokens.spacing.md}
      style={{
        height: '100px',
        border: '1px solid #ddd',
        padding: layoutTokens.spacing.md,
      }}
    >
      <div>
        <Button>Item 1</Button>
      </div>
      <div>
        <Button>Item 2</Button>
      </div>
      <div>
        <Button>Item 3</Button>
      </div>
    </Flex>
  ),
};

// Wrap examples
export const Wrap: TStory = {
  render: () => (
    <Flex wrap='wrap' gap={layoutTokens.spacing.md} style={{width: '300px'}}>
      <Button>Button 1</Button>
      <Button>Button 2</Button>
      <Button>Button 3</Button>
      <Button>Button 4</Button>
      <Button>Button 5</Button>
      <Button>Button 6</Button>
    </Flex>
  ),
};

export const Nowrap: TStory = {
  render: () => (
    <Flex
      wrap='nowrap'
      gap={layoutTokens.spacing.md}
      style={{width: '300px', overflow: 'auto'}}
    >
      <Button>Button 1</Button>
      <Button>Button 2</Button>
      <Button>Button 3</Button>
      <Button>Button 4</Button>
      <Button>Button 5</Button>
      <Button>Button 6</Button>
    </Flex>
  ),
};

// Gap sizes
export const GapXS: TStory = {
  render: () => (
    <Flex gap={layoutTokens.spacing.xs}>
      <Button>1</Button>
      <Button>2</Button>
      <Button>3</Button>
    </Flex>
  ),
};

export const GapSM: TStory = {
  render: () => (
    <Flex gap={layoutTokens.spacing.sm}>
      <Button>1</Button>
      <Button>2</Button>
      <Button>3</Button>
    </Flex>
  ),
};

export const GapMD: TStory = {
  render: () => (
    <Flex gap={layoutTokens.spacing.md}>
      <Button>1</Button>
      <Button>2</Button>
      <Button>3</Button>
    </Flex>
  ),
};

export const GapLG: TStory = {
  render: () => (
    <Flex gap={layoutTokens.spacing.lg}>
      <Button>1</Button>
      <Button>2</Button>
      <Button>3</Button>
    </Flex>
  ),
};

// Complex layouts
export const NavigationBar: TStory = {
  render: () => (
    <Flex
      justify='space-between'
      align='center'
      style={{
        width: '100%',
        minWidth: '500px',
        padding: layoutTokens.spacing.md,
        border: '1px solid #ddd',
        borderRadius: layoutTokens.borderRadius.md,
      }}
    >
      <Title level={4}>Logo</Title>
      <Flex gap={layoutTokens.spacing.md}>
        <Button type='text'>Home</Button>
        <Button type='text'>About</Button>
        <Button type='text'>Contact</Button>
      </Flex>
      <Button type='primary'>Login</Button>
    </Flex>
  ),
};

export const CardGrid: TStory = {
  render: () => (
    <Flex
      wrap='wrap'
      gap={layoutTokens.spacing.lg}
      style={{width: '100%', maxWidth: '800px'}}
    >
      {[1, 2, 3, 4, 5, 6].map((item) => (
        <Flex
          key={item}
          vertical
          gap={layoutTokens.spacing.sm}
          style={{
            width: '200px',
            padding: layoutTokens.spacing.md,
            border: '1px solid #ddd',
            borderRadius: layoutTokens.borderRadius.md,
          }}
        >
          <div
            style={{
              height: '120px',
              background: '#f0f0f0',
              borderRadius: layoutTokens.borderRadius.sm,
            }}
          />
          <Text strong>Card Title {item}</Text>
          <Text type='secondary'>Card description text</Text>
          <Button type='primary'>Learn More</Button>
        </Flex>
      ))}
    </Flex>
  ),
};

export const FormLayout: TStory = {
  render: () => (
    <Flex vertical gap={layoutTokens.spacing.md} style={{width: '300px'}}>
      <Flex vertical gap={layoutTokens.spacing.xs}>
        <Text strong>Username</Text>
        <input
          type='text'
          placeholder='Enter username'
          style={{
            padding: layoutTokens.spacing.sm,
            borderRadius: layoutTokens.borderRadius.sm,
            border: '1px solid #ddd',
          }}
        />
      </Flex>
      <Flex vertical gap={layoutTokens.spacing.xs}>
        <Text strong>Password</Text>
        <input
          type='password'
          placeholder='Enter password'
          style={{
            padding: layoutTokens.spacing.sm,
            borderRadius: layoutTokens.borderRadius.sm,
            border: '1px solid #ddd',
          }}
        />
      </Flex>
      <Flex gap={layoutTokens.spacing.sm} justify='flex-end'>
        <Button>Cancel</Button>
        <Button type='primary'>Submit</Button>
      </Flex>
    </Flex>
  ),
};

export const CenteredContent: TStory = {
  render: () => (
    <Flex
      justify='center'
      align='center'
      style={{
        width: '400px',
        height: '300px',
        border: '1px solid #ddd',
        borderRadius: layoutTokens.borderRadius.md,
      }}
    >
      <Flex vertical gap={layoutTokens.spacing.sm} align='center'>
        <Title level={3}>Centered Content</Title>
        <Text type='secondary'>
          This content is centered both vertically and horizontally
        </Text>
        <Button type='primary'>Action</Button>
      </Flex>
    </Flex>
  ),
};

// Interactive playground
export const Playground: TStory = {
  args: {
    vertical: false,
    wrap: 'wrap',
    justify: 'flex-start',
    align: 'center',
    gap: layoutTokens.spacing.md,
    children: (
      <>
        <Button>Button 1</Button>
        <Button>Button 2</Button>
        <Button>Button 3</Button>
      </>
    ),
  },
  render: (args) => (
    <Flex
      {...args}
      style={{
        width: '100%',
        minWidth: '400px',
        border: '1px solid #ddd',
        padding: layoutTokens.spacing.md,
        borderRadius: layoutTokens.borderRadius.sm,
      }}
    >
      {args.children}
    </Flex>
  ),
};
