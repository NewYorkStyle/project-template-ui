import React from 'react';

import type {Meta, StoryObj} from '@storybook/react-vite';

import {layoutTokens} from '../../theme';
import {Button} from '../button';
import {Flex} from '../flex';
import {Typography} from '../typography';

import {Spin} from './spin';

const {Text} = Typography;

const meta: Meta<typeof Spin> = {
  title: 'Components/Spin',
  component: Spin,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'default', 'large'],
      description: 'Размер спиннера',
    },
    spinning: {
      control: 'boolean',
      description: 'Состояние вращения',
    },
    tip: {
      control: 'text',
      description: 'Текст подсказки',
    },
    delay: {
      control: 'number',
      description: 'Задержка перед отображением (мс)',
    },
    indicator: {
      control: false,
      description: 'Кастомный индикатор',
    },
    fullscreen: {
      control: 'boolean',
      description: 'Полноэкранный режим',
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
type TStory = StoryObj<typeof Spin>;

// Basic spin
export const Basic: TStory = {
  args: {
    spinning: true,
  },
};

// Sizes
export const Sizes: TStory = {
  render: () => (
    <Flex gap={layoutTokens.spacing.lg} align='center'>
      <Spin size='small' />
      <Spin size='default' />
      <Spin size='large' />
    </Flex>
  ),
};

// With tip
export const WithTip: TStory = {
  args: {
    spinning: true,
    tip: 'Loading...',
  },
};

// With custom tip
export const WithCustomTip: TStory = {
  render: () => (
    <Spin spinning description='Please wait...' size='large'>
      <div
        style={{
          padding: layoutTokens.spacing.lg,
          background: '#f5f5f5',
          borderRadius: 8,
          minWidth: 300,
        }}
      >
        <Text>Content is loading...</Text>
      </div>
    </Spin>
  ),
};

// Inside container
export const InsideContainer: TStory = {
  render: () => (
    <Spin spinning>
      <div
        style={{
          padding: layoutTokens.spacing.lg,
          background: '#f5f5f5',
          borderRadius: 8,
          width: 300,
        }}
      >
        <Text>This content will be covered by spin overlay</Text>
        <div
          style={{
            marginTop: layoutTokens.spacing.md,
            height: 100,
            background: '#e0e0e0',
            borderRadius: 4,
          }}
        />
      </div>
    </Spin>
  ),
};

// With delay
export const WithDelay: TStory = {
  render: () => {
    const [spinning, setSpinning] = React.useState(false);

    const handleClick = () => {
      setSpinning(true);
      setTimeout(() => setSpinning(false), 3000);
    };

    return (
      <Flex vertical gap={layoutTokens.spacing.md} align='center'>
        <Spin spinning={spinning} delay={500}>
          <div
            style={{
              padding: layoutTokens.spacing.lg,
              background: '#f5f5f5',
              borderRadius: 8,
              width: 300,
            }}
          >
            <Text>Content with 500ms delay before showing spinner</Text>
          </div>
        </Spin>
        <Button type='primary' onClick={handleClick}>
          Start Loading
        </Button>
      </Flex>
    );
  },
};

// Custom indicator
export const CustomIndicator: TStory = {
  render: () => (
    <Spin
      spinning
      indicator={
        <div style={{fontSize: 24, animation: 'spin 1s linear infinite'}}>
          ⚡
        </div>
      }
    >
      <div
        style={{
          padding: layoutTokens.spacing.lg,
          background: '#f5f5f5',
          borderRadius: 8,
          width: 300,
        }}
      >
        <Text>Custom indicator spinner</Text>
      </div>
    </Spin>
  ),
};

// Fullscreen spin
export const Fullscreen: TStory = {
  render: () => {
    const [spinning, setSpinning] = React.useState(false);

    const handleClick = () => {
      setSpinning(true);
      setTimeout(() => setSpinning(false), 3000);
    };

    return (
      <Flex vertical gap={layoutTokens.spacing.md}>
        <Button type='primary' onClick={handleClick}>
          Show Fullscreen Spin
        </Button>
        <Spin fullscreen spinning={spinning} description='Loading...' />
      </Flex>
    );
  },
};

// Nested spin
export const Nested: TStory = {
  render: () => {
    const [loading, setLoading] = React.useState(false);

    const handleLoad = () => {
      setLoading(true);
      setTimeout(() => setLoading(false), 3000);
    };

    return (
      <Flex vertical gap={layoutTokens.spacing.md} style={{width: 400}}>
        <Button type='primary' onClick={handleLoad}>
          Load Content
        </Button>
        <Spin spinning={loading} description='Loading data...'>
          <div
            style={{
              padding: layoutTokens.spacing.md,
              border: '1px solid #e0e0e0',
              borderRadius: 8,
            }}
          >
            <Text strong>User Information</Text>
            <div style={{marginTop: layoutTokens.spacing.md}}>
              <Text>Name: John Doe</Text>
            </div>
            <div>
              <Text>Email: john@example.com</Text>
            </div>
            <div>
              <Text>Role: Administrator</Text>
            </div>
          </div>
        </Spin>
      </Flex>
    );
  },
};

// Multiple spinners
export const MultipleSpinners: TStory = {
  render: () => (
    <Flex gap={layoutTokens.spacing.lg}>
      <Spin size='small' spinning description='Small' />
      <Spin size='default' spinning description='Default' />
      <Spin size='large' spinning description='Large' />
    </Flex>
  ),
};

// Data loading example
export const DataLoading: TStory = {
  render: () => {
    const [loading, setLoading] = React.useState(true);
    const [data, setData] = React.useState<string[]>([]);

    React.useEffect(() => {
      setTimeout(() => {
        setData(['Item 1', 'Item 2', 'Item 3', 'Item 4']);
        setLoading(false);
      }, 2000);
    }, []);

    return (
      <Spin spinning={loading} description='Fetching data...'>
        <div
          style={{
            width: 300,
            padding: layoutTokens.spacing.md,
            border: '1px solid #e0e0e0',
            borderRadius: 8,
          }}
        >
          <Text strong>Data List</Text>
          <ul style={{marginTop: layoutTokens.spacing.md, marginBottom: 0}}>
            {data.map((item, index) => (
              <li key={index}>
                <Text>{item}</Text>
              </li>
            ))}
          </ul>
        </div>
      </Spin>
    );
  },
};

// Card loading example
export const CardLoading: TStory = {
  render: () => {
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
      setTimeout(() => setLoading(false), 2000);
    }, []);

    return (
      <Spin spinning={loading} description='Loading card...'>
        <div
          style={{
            width: 300,
            padding: layoutTokens.spacing.lg,
            border: '1px solid #e0e0e0',
            borderRadius: 12,
            background: 'white',
          }}
        >
          <div
            style={{
              width: '100%',
              height: 120,
              background: '#f0f0f0',
              borderRadius: 8,
              marginBottom: layoutTokens.spacing.md,
            }}
          />
          <Text strong>Card Title</Text>
          <Text
            type='secondary'
            style={{display: 'block', marginTop: layoutTokens.spacing.xs}}
          >
            Card description text goes here. This is a sample card content.
          </Text>
          <Button
            type='primary'
            style={{marginTop: layoutTokens.spacing.md}}
            block
          >
            View Details
          </Button>
        </div>
      </Spin>
    );
  },
};

// Interactive playground
export const Playground: TStory = {
  args: {
    spinning: true,
    size: 'default',
    tip: 'Loading...',
    delay: 0,
  },
  render: (args) => (
    <div style={{padding: layoutTokens.spacing.lg}}>
      <Spin {...args}>
        <div
          style={{
            padding: layoutTokens.spacing.lg,
            background: '#f5f5f5',
            borderRadius: 8,
            minWidth: 300,
            textAlign: 'center',
          }}
        >
          <Text>Content wrapped by spin</Text>
          <div
            style={{
              marginTop: layoutTokens.spacing.md,
              height: 100,
              background: '#e0e0e0',
              borderRadius: 4,
            }}
          />
        </div>
      </Spin>
    </div>
  ),
};
