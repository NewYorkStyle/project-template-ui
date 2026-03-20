/* eslint-disable no-console */
import React from 'react';

import type {Meta, StoryObj} from '@storybook/react-vite';

import {layoutTokens} from '../../theme';
import {Flex} from '../flex';
import {Typography} from '../typography';

import {Statistic} from './statistic';

const {Text} = Typography;

const meta: Meta<typeof Statistic> = {
  title: 'Components/Statistic',
  component: Statistic,
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'Заголовок статистики',
    },
    value: {
      control: 'number',
      description: 'Значение статистики',
    },
    precision: {
      control: 'number',
      description: 'Количество знаков после запятой',
    },
    prefix: {
      control: 'text',
      description: 'Префикс (например, $)',
    },
    suffix: {
      control: 'text',
      description: 'Суффикс (например, ₽)',
    },
    groupSeparator: {
      control: 'text',
      description: 'Разделитель тысяч (например, "," или " ")',
    },
    loading: {
      control: 'boolean',
      description: 'Состояние загрузки',
    },
    styles: {
      control: 'object',
      description: 'Стили компонента',
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
type TStory = StoryObj<typeof Statistic>;

// Basic statistic
export const Basic: TStory = {
  args: {
    title: 'Total Users',
    value: 12345,
  },
};

// With prefix and suffix
export const WithPrefixSuffix: TStory = {
  render: () => (
    <Flex gap={layoutTokens.spacing.lg}>
      <Statistic title='Revenue' value={1234567} prefix='$' suffix='USD' />
      <Statistic title='Price' value={99.99} prefix='€' />
      <Statistic title='Rating' value={4.5} suffix='/5' />
    </Flex>
  ),
};

// With precision
export const WithPrecision: TStory = {
  render: () => (
    <Flex gap={layoutTokens.spacing.lg}>
      <Statistic title='Percentage' value={78.5678} precision={2} suffix='%' />
      <Statistic title='Average Score' value={85.3333} precision={1} />
      <Statistic title='Exchange Rate' value={1.234567} precision={4} />
    </Flex>
  ),
};

// With group separator
export const WithGroupSeparator: TStory = {
  render: () => (
    <Flex gap={layoutTokens.spacing.lg}>
      <Statistic title='Without Separator' value={1000000} />
      <Statistic title='With Comma' value={1000000} groupSeparator=',' />
      <Statistic title='With Space' value={1000000} groupSeparator=' ' />
    </Flex>
  ),
};

// Loading state
export const Loading: TStory = {
  args: {
    title: 'Data Loading',
    value: 12345,
    loading: true,
  },
};

// Different sizes
export const Sizes: TStory = {
  render: () => (
    <Flex vertical gap={layoutTokens.spacing.lg}>
      <div>
        <Text strong>Default size</Text>
        <Statistic
          title='Users'
          value={12345}
          style={{marginTop: layoutTokens.spacing.sm}}
        />
      </div>
      <div>
        <Text strong>Large value</Text>
        <Statistic
          title='Revenue'
          value={1234567}
          prefix='$'
          styles={{content: {fontSize: 32}}}
        />
      </div>
    </Flex>
  ),
};

// Timer
export const Timer: TStory = {
  render: () => (
    <Statistic.Timer
      title='Countdown'
      value={Date.now() + 1000 * 60 * 60 * 24} // 24 hours from now
      type='countdown'
      format='HH:mm:ss'
      onFinish={() => console.log('Timer finished')}
    />
  ),
};

// Timer with custom format
export const TimerWithFormat: TStory = {
  render: () => {
    const deadline = Date.now() + 1000 * 60 * 60 * 24 * 3; // 3 days

    return (
      <Flex gap={layoutTokens.spacing.lg}>
        <Statistic.Timer
          title='Days'
          value={deadline}
          type='countdown'
          format='D days'
        />
        <Statistic.Timer
          title='Full format'
          value={deadline}
          type='countdown'
          format='DD:HH:mm:ss'
        />
        <Statistic.Timer
          title='Hours only'
          value={deadline}
          type='countdown'
          format='HH'
        />
      </Flex>
    );
  },
};

// Timer with onFinish
export const TimerWithCallback: TStory = {
  render: () => {
    const [finished, setFinished] = React.useState(false);
    const deadline = Date.now() + 5000; // 5 seconds from now

    const handleFinish = () => {
      setFinished(true);
    };

    return (
      <Flex vertical gap={layoutTokens.spacing.md}>
        <Statistic.Timer
          title='Time left'
          value={deadline}
          type='countdown'
          format='HH:mm:ss'
          onFinish={handleFinish}
        />
        {finished && <Text type='success'>Timer finished!</Text>}
      </Flex>
    );
  },
};

// Countup timer example
export const CountupTimer: TStory = {
  render: () => {
    const startTime = Date.now() - 1000 * 60 * 60 * 2; // 2 hours ago

    return (
      <Statistic.Timer
        title='Time Since Start'
        value={startTime}
        type='countup'
        format='HH:mm:ss'
      />
    );
  },
};

// Dashboard example
export const Dashboard: TStory = {
  render: () => (
    <Flex gap={layoutTokens.spacing.lg} wrap='wrap' style={{maxWidth: 800}}>
      <div
        style={{
          flex: 1,
          minWidth: 200,
          padding: layoutTokens.spacing.md,
          border: '1px solid #e0e0e0',
          borderRadius: 8,
        }}
      >
        <Statistic
          title='Total Users'
          value={124567}
          groupSeparator=','
          prefix='👥'
        />
      </div>
      <div
        style={{
          flex: 1,
          minWidth: 200,
          padding: layoutTokens.spacing.md,
          border: '1px solid #e0e0e0',
          borderRadius: 8,
        }}
      >
        <Statistic
          title='Revenue'
          value={9876543}
          prefix='$'
          groupSeparator=','
        />
      </div>
      <div
        style={{
          flex: 1,
          minWidth: 200,
          padding: layoutTokens.spacing.md,
          border: '1px solid #e0e0e0',
          borderRadius: 8,
        }}
      >
        <Statistic title='Orders' value={8765} groupSeparator=',' suffix='📦' />
      </div>
      <div
        style={{
          flex: 1,
          minWidth: 200,
          padding: layoutTokens.spacing.md,
          border: '1px solid #e0e0e0',
          borderRadius: 8,
        }}
      >
        <Statistic
          title='Conversion Rate'
          value={23.45}
          precision={2}
          suffix='%'
        />
      </div>
    </Flex>
  ),
};

// With custom styling
export const CustomStyling: TStory = {
  render: () => (
    <Flex gap={layoutTokens.spacing.lg}>
      <Statistic
        title='Success Rate'
        value={98.5}
        precision={1}
        suffix='%'
        styles={{content: {color: '#52c41a'}}}
      />
      <Statistic
        title='Error Rate'
        value={1.5}
        precision={1}
        suffix='%'
        styles={{content: {color: '#ff4d4f'}}}
      />
      <Statistic
        title='Warning'
        value={75}
        suffix='%'
        styles={{content: {color: '#faad14'}}}
      />
    </Flex>
  ),
};

// With icons
export const WithIcons: TStory = {
  render: () => (
    <Flex gap={layoutTokens.spacing.lg}>
      <Statistic
        title='Active Users'
        value={1128}
        prefix='👥'
        styles={{content: {fontSize: 28}}}
      />
      <Statistic
        title='Sales'
        value={932}
        prefix='💰'
        styles={{content: {fontSize: 28}}}
      />
      <Statistic
        title='Downloads'
        value={2345}
        prefix='📥'
        styles={{content: {fontSize: 28}}}
      />
    </Flex>
  ),
};

// All statistics in one view
export const AllInOne: TStory = {
  render: () => (
    <Flex vertical gap={layoutTokens.spacing.lg} style={{width: 400}}>
      <Statistic title='Simple' value={12345} />
      <Statistic title='With Prefix' value={12345} prefix='$' />
      <Statistic title='With Suffix' value={12345} suffix='%' />
      <Statistic title='With Precision' value={123.4567} precision={2} />
      <Statistic title='With Separator' value={1000000} groupSeparator=',' />
      <Statistic title='Loading' value={12345} loading />
    </Flex>
  ),
};

// Sales dashboard example
export const SalesDashboard: TStory = {
  render: () => (
    <Flex vertical gap={layoutTokens.spacing.lg} style={{width: '100%'}}>
      <Flex gap={layoutTokens.spacing.md} wrap='wrap'>
        <div
          style={{
            flex: 1,
            minWidth: 200,
            background: '#f5f5f5',
            padding: layoutTokens.spacing.lg,
            borderRadius: 8,
          }}
        >
          <Statistic
            title='Total Sales'
            value={124567}
            prefix='$'
            groupSeparator=','
            styles={{content: {fontSize: 28}}}
          />
          <Text
            type='secondary'
            style={{marginTop: layoutTokens.spacing.sm, display: 'block'}}
          >
            +15% from last month
          </Text>
        </div>
        <div
          style={{
            flex: 1,
            minWidth: 200,
            background: '#f5f5f5',
            padding: layoutTokens.spacing.lg,
            borderRadius: 8,
          }}
        >
          <Statistic
            title='Active Users'
            value={8765}
            groupSeparator=','
            styles={{content: {fontSize: 28}}}
          />
          <Text
            type='secondary'
            style={{marginTop: layoutTokens.spacing.sm, display: 'block'}}
          >
            +8% from last week
          </Text>
        </div>
        <div
          style={{
            flex: 1,
            minWidth: 200,
            background: '#f5f5f5',
            padding: layoutTokens.spacing.lg,
            borderRadius: 8,
          }}
        >
          <Statistic
            title='Conversion Rate'
            value={23.45}
            precision={2}
            suffix='%'
            styles={{content: {fontSize: 28}}}
          />
          <Text
            type='secondary'
            style={{marginTop: layoutTokens.spacing.sm, display: 'block'}}
          >
            Target: 25%
          </Text>
        </div>
      </Flex>
      <div
        style={{
          background: '#f5f5f5',
          padding: layoutTokens.spacing.lg,
          borderRadius: 8,
        }}
      >
        <Statistic.Timer
          title='Flash Sale Ends In'
          value={Date.now() + 1000 * 60 * 60 * 2} // 2 hours
          format='HH:mm:ss'
          type='countdown'
        />
      </div>
    </Flex>
  ),
};

// Interactive playground
export const Playground: TStory = {
  args: {
    title: 'Statistic Title',
    value: 12345,
    precision: undefined,
    prefix: '',
    suffix: '',
    groupSeparator: undefined,
    loading: false,
  },
  render: (args) => (
    <div style={{minWidth: 250}}>
      <Statistic {...args} />
    </div>
  ),
};
