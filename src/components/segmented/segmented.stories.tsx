import React from 'react';

import type {Meta, StoryObj} from '@storybook/react-vite';

import {layoutTokens} from '../../theme';
import {Button} from '../button';
import {Flex} from '../flex';
import {Typography} from '../typography';

import {Segmented} from './segmented';

const {Text} = Typography;

const meta: Meta<typeof Segmented> = {
  title: 'Components/Segmented',
  component: Segmented,
  tags: ['autodocs'],
  argTypes: {
    options: {
      control: 'object',
      description: 'Опции для переключения',
    },
    value: {
      control: 'text',
      description: 'Текущее значение',
    },
    defaultValue: {
      control: 'text',
      description: 'Значение по умолчанию',
    },
    size: {
      control: 'select',
      options: ['small', 'middle', 'large'],
      description: 'Размер компонента',
    },
    disabled: {
      control: 'boolean',
      description: 'Отключенное состояние',
    },
    block: {
      control: 'boolean',
      description: 'Растянуть на всю ширину',
    },
    onChange: {action: 'changed'},
  },
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'light',
    },
  },
};

export default meta;
type TStory = StoryObj<typeof Segmented>;

// Basic segmented
export const Basic: TStory = {
  args: {
    options: ['Daily', 'Weekly', 'Monthly'],
    defaultValue: 'Daily',
  },
};

// With different options types
export const OptionTypes: TStory = {
  render: () => (
    <Flex vertical gap={layoutTokens.spacing.lg}>
      <div>
        <Text strong>String options</Text>
        <Segmented
          options={['Day', 'Week', 'Month']}
          defaultValue='Day'
          style={{marginTop: layoutTokens.spacing.sm}}
        />
      </div>
      <div>
        <Text strong>Object options with icons</Text>
        <Segmented
          options={[
            {label: 'List', value: 'list'},
            {label: 'Grid', value: 'grid'},
            {label: 'Card', value: 'card'},
          ]}
          defaultValue='list'
          style={{marginTop: layoutTokens.spacing.sm}}
        />
      </div>
      <div>
        <Text strong>Mixed options</Text>
        <Segmented
          options={[
            'All',
            {label: 'Active', value: 'active'},
            {label: 'Completed', value: 'completed', disabled: true},
          ]}
          defaultValue='All'
          style={{marginTop: layoutTokens.spacing.sm}}
        />
      </div>
    </Flex>
  ),
};

// Sizes
export const Sizes: TStory = {
  render: () => (
    <Flex vertical gap={layoutTokens.spacing.md}>
      <Segmented
        size='large'
        options={['Large', 'Size']}
        defaultValue='Large'
      />
      <Segmented
        size='middle'
        options={['Middle', 'Size']}
        defaultValue='Middle'
      />
      <Segmented
        size='small'
        options={['Small', 'Size']}
        defaultValue='Small'
      />
    </Flex>
  ),
};

// Block
export const Block: TStory = {
  render: () => (
    <Flex vertical gap={layoutTokens.spacing.md} style={{width: '400px'}}>
      <Text strong>Block segmented (full width)</Text>
      <Segmented
        block
        options={['Option 1', 'Option 2', 'Option 3']}
        defaultValue='Option 1'
      />
      <Text strong>Default segmented</Text>
      <Segmented
        options={['Option 1', 'Option 2', 'Option 3']}
        defaultValue='Option 1'
      />
    </Flex>
  ),
};

// Disabled
export const Disabled: TStory = {
  render: () => (
    <Flex vertical gap={layoutTokens.spacing.md}>
      <Segmented
        disabled
        options={['Disabled', 'Options']}
        defaultValue='Disabled'
      />
      <Segmented
        options={[
          'Enabled',
          {label: 'Disabled option', value: 'disabled', disabled: true},
          'Active',
        ]}
        defaultValue='Enabled'
      />
    </Flex>
  ),
};

// With icons
export const WithIcons: TStory = {
  render: () => (
    <Flex vertical gap={layoutTokens.spacing.md}>
      <Segmented
        options={[
          {label: 'List', value: 'list', icon: '📋'},
          {label: 'Grid', value: 'grid', icon: '🔲'},
          {label: 'Card', value: 'card', icon: '🃏'},
        ]}
        defaultValue='list'
      />
      <Segmented
        options={[
          {value: 'list', icon: '📋'},
          {value: 'grid', icon: '🔲'},
          {value: 'card', icon: '🃏'},
        ]}
        defaultValue='list'
      />
    </Flex>
  ),
};

// Controlled
export const Controlled: TStory = {
  render: () => {
    const [value, setValue] = React.useState('daily');

    return (
      <Flex vertical gap={layoutTokens.spacing.md}>
        <Segmented
          options={['daily', 'weekly', 'monthly']}
          value={value}
          onChange={(value) => setValue(value.toString())}
        />
        <Text>Current value: {value}</Text>
        <Flex gap={layoutTokens.spacing.sm}>
          <Button size='small' onClick={() => setValue('daily')}>
            Set Daily
          </Button>
          <Button size='small' onClick={() => setValue('weekly')}>
            Set Weekly
          </Button>
          <Button size='small' onClick={() => setValue('monthly')}>
            Set Monthly
          </Button>
        </Flex>
      </Flex>
    );
  },
};

// With React elements
export const WithReactElements: TStory = {
  render: () => (
    <Segmented
      options={[
        {
          label: (
            <Flex gap={layoutTokens.spacing.xs} align='center'>
              <span>👍</span>
              <span>Like</span>
            </Flex>
          ),
          value: 'like',
        },
        {
          label: (
            <Flex gap={layoutTokens.spacing.xs} align='center'>
              <span>❤️</span>
              <span>Love</span>
            </Flex>
          ),
          value: 'love',
        },
        {
          label: (
            <Flex gap={layoutTokens.spacing.xs} align='center'>
              <span>😊</span>
              <span>Smile</span>
            </Flex>
          ),
          value: 'smile',
        },
      ]}
      defaultValue='like'
    />
  ),
};

// View switcher example
export const ViewSwitcher: TStory = {
  render: () => {
    const [view, setView] = React.useState('grid');

    return (
      <Flex vertical gap={layoutTokens.spacing.md} style={{width: '100%'}}>
        <Flex justify='space-between' align='center'>
          <Text strong>Items</Text>
          <Segmented
            options={[
              {label: 'Grid', value: 'grid', icon: '🔲'},
              {label: 'List', value: 'list', icon: '📋'},
            ]}
            value={view}
            onChange={(value) => setView(value.toString())}
          />
        </Flex>
        <div
          style={{
            border: '1px solid #e0e0e0',
            borderRadius: 8,
            padding: layoutTokens.spacing.md,
          }}
        >
          {view === 'grid' ? (
            <Flex gap={layoutTokens.spacing.md} wrap='wrap'>
              <div
                style={{
                  width: 100,
                  height: 100,
                  background: '#f0f0f0',
                  borderRadius: 4,
                }}
              />
              <div
                style={{
                  width: 100,
                  height: 100,
                  background: '#f0f0f0',
                  borderRadius: 4,
                }}
              />
              <div
                style={{
                  width: 100,
                  height: 100,
                  background: '#f0f0f0',
                  borderRadius: 4,
                }}
              />
            </Flex>
          ) : (
            <Flex vertical gap={layoutTokens.spacing.sm}>
              <div
                style={{height: 40, background: '#f0f0f0', borderRadius: 4}}
              />
              <div
                style={{height: 40, background: '#f0f0f0', borderRadius: 4}}
              />
              <div
                style={{height: 40, background: '#f0f0f0', borderRadius: 4}}
              />
            </Flex>
          )}
        </div>
      </Flex>
    );
  },
};

// Time range switcher
export const TimeRangeSwitcher: TStory = {
  render: () => {
    const [range, setRange] = React.useState('week');

    return (
      <Flex vertical gap={layoutTokens.spacing.md} align='center'>
        <Segmented
          options={[
            {label: 'Day', value: 'day'},
            {label: 'Week', value: 'week'},
            {label: 'Month', value: 'month'},
            {label: 'Year', value: 'year'},
          ]}
          value={range}
          onChange={(value) => setRange(value.toString())}
        />
        <div
          style={{
            width: 400,
            height: 200,
            background: '#f5f5f5',
            borderRadius: 8,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Text type='secondary'>Chart for {range}ly data</Text>
        </div>
      </Flex>
    );
  },
};

// All sizes comparison
export const AllSizesComparison: TStory = {
  render: () => (
    <Flex vertical gap={layoutTokens.spacing.lg} style={{width: '100%'}}>
      <div>
        <Text strong>Small</Text>
        <Segmented
          size='small'
          options={['Option 1', 'Option 2', 'Option 3']}
          defaultValue='Option 1'
          style={{marginTop: layoutTokens.spacing.sm}}
        />
      </div>
      <div>
        <Text strong>Middle (Default)</Text>
        <Segmented
          size='middle'
          options={['Option 1', 'Option 2', 'Option 3']}
          defaultValue='Option 1'
          style={{marginTop: layoutTokens.spacing.sm}}
        />
      </div>
      <div>
        <Text strong>Large</Text>
        <Segmented
          size='large'
          options={['Option 1', 'Option 2', 'Option 3']}
          defaultValue='Option 1'
          style={{marginTop: layoutTokens.spacing.sm}}
        />
      </div>
    </Flex>
  ),
};

// Interactive playground
export const Playground: TStory = {
  args: {
    options: ['Option 1', 'Option 2', 'Option 3'],
    defaultValue: 'Option 1',
    size: 'middle',
    disabled: false,
    block: false,
  },
  render: (args) => <Segmented {...args} />,
};
