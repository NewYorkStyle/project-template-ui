import React from 'react';

import type {Meta, StoryObj} from '@storybook/react-vite';

import {layoutTokens} from '../../theme';
import {Button} from '../button';
import {Flex} from '../flex';
import {Typography} from '../typography';

import {Select} from './select';

const {Text} = Typography;

const meta: Meta<typeof Select> = {
  title: 'Components/Select',
  component: Select,
  tags: ['autodocs'],
  argTypes: {
    options: {
      control: 'object',
      description: 'Опции для выбора',
    },
    placeholder: {
      control: 'text',
      description: 'Текст-подсказка',
    },
    mode: {
      control: 'select',
      options: ['multiple', 'tags', undefined],
      description: 'Режим выбора',
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
    loading: {
      control: 'boolean',
      description: 'Состояние загрузки',
    },
    allowClear: {
      control: 'boolean',
      description: 'Показывать кнопку очистки',
    },
    showSearch: {
      control: 'boolean',
      description: 'Показывать поиск',
    },
    status: {
      control: 'select',
      options: ['error', 'warning', ''],
      description: 'Состояние валидации',
    },
    onChange: {action: 'changed'},
    onSearch: {action: 'searched'},
  },
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'light',
    },
  },
};

export default meta;
type TStory = StoryObj<typeof Select>;

// Basic select
export const Basic: TStory = {
  args: {
    placeholder: 'Select an option',
    options: [
      {label: 'Option 1', value: '1'},
      {label: 'Option 2', value: '2'},
      {label: 'Option 3', value: '3'},
    ],
    style: {width: '200px'},
  },
};

// Sizes
export const Sizes: TStory = {
  render: () => (
    <Flex vertical gap={layoutTokens.spacing.md} style={{width: '200px'}}>
      <Select
        size='large'
        placeholder='Large size'
        options={[{label: 'Option', value: '1'}]}
      />
      <Select
        size='middle'
        placeholder='Middle size'
        options={[{label: 'Option', value: '1'}]}
      />
      <Select
        size='small'
        placeholder='Small size'
        options={[{label: 'Option', value: '1'}]}
      />
    </Flex>
  ),
};

// With default value
export const WithDefaultValue: TStory = {
  args: {
    defaultValue: '2',
    options: [
      {label: 'Option 1', value: '1'},
      {label: 'Option 2', value: '2'},
      {label: 'Option 3', value: '3'},
    ],
    style: {width: '200px'},
  },
};

// With clear button
export const WithClear: TStory = {
  args: {
    placeholder: 'Select with clear',
    allowClear: true,
    defaultValue: '2',
    options: [
      {label: 'Option 1', value: '1'},
      {label: 'Option 2', value: '2'},
      {label: 'Option 3', value: '3'},
    ],
    style: {width: '200px'},
  },
};

// Disabled
export const Disabled: TStory = {
  render: () => (
    <Flex vertical gap={layoutTokens.spacing.md} style={{width: '200px'}}>
      <Select
        disabled
        placeholder='Disabled select'
        options={[{label: 'Option', value: '1'}]}
      />
      <Select
        disabled
        defaultValue='1'
        options={[{label: 'Option 1', value: '1'}]}
      />
    </Flex>
  ),
};

// Loading
export const Loading: TStory = {
  args: {
    loading: true,
    placeholder: 'Loading...',
    style: {width: '200px'},
  },
};

// Statuses
export const Statuses: TStory = {
  render: () => (
    <Flex vertical gap={layoutTokens.spacing.md} style={{width: '200px'}}>
      <Select
        status='error'
        placeholder='Error status'
        options={[{label: 'Option', value: '1'}]}
      />
      <Select
        status='warning'
        placeholder='Warning status'
        options={[{label: 'Option', value: '1'}]}
      />
    </Flex>
  ),
};

// With search
export const WithSearch: TStory = {
  args: {
    showSearch: true,
    placeholder: 'Search to select',
    optionFilterProp: 'label',
    options: [
      {label: 'Apple', value: 'apple'},
      {label: 'Banana', value: 'banana'},
      {label: 'Cherry', value: 'cherry'},
      {label: 'Date', value: 'date'},
      {label: 'Elderberry', value: 'elderberry'},
    ],
    style: {width: '200px'},
  },
};

// Multiple select
export const Multiple: TStory = {
  args: {
    mode: 'multiple',
    placeholder: 'Select multiple options',
    allowClear: true,
    options: [
      {label: 'Option 1', value: '1'},
      {label: 'Option 2', value: '2'},
      {label: 'Option 3', value: '3'},
      {label: 'Option 4', value: '4'},
    ],
    style: {width: '300px'},
  },
};

// Tags mode
export const Tags: TStory = {
  args: {
    mode: 'tags',
    placeholder: 'Add tags',
    options: [
      {label: 'Apple', value: 'apple'},
      {label: 'Banana', value: 'banana'},
      {label: 'Cherry', value: 'cherry'},
    ],
    style: {width: '300px'},
  },
};

// With groups
export const WithGroups: TStory = {
  args: {
    placeholder: 'Select with groups',
    options: [
      {
        label: 'Fruits',
        options: [
          {label: 'Apple', value: 'apple'},
          {label: 'Banana', value: 'banana'},
          {label: 'Cherry', value: 'cherry'},
        ],
      },
      {
        label: 'Vegetables',
        options: [
          {label: 'Carrot', value: 'carrot'},
          {label: 'Broccoli', value: 'broccoli'},
          {label: 'Spinach', value: 'spinach'},
        ],
      },
    ],
    style: {width: '200px'},
  },
};

// With disabled options
export const WithDisabledOptions: TStory = {
  args: {
    placeholder: 'Select with disabled options',
    options: [
      {label: 'Enabled 1', value: '1'},
      {label: 'Disabled 2', value: '2', disabled: true},
      {label: 'Enabled 3', value: '3'},
      {label: 'Disabled 4', value: '4', disabled: true},
    ],
    style: {width: '200px'},
  },
};

// Controlled select
export const Controlled: TStory = {
  render: () => {
    const [value, setValue] = React.useState('1');

    return (
      <Flex vertical gap={layoutTokens.spacing.md}>
        <Select
          value={value}
          onChange={setValue}
          options={[
            {label: 'Option 1', value: '1'},
            {label: 'Option 2', value: '2'},
            {label: 'Option 3', value: '3'},
          ]}
          style={{width: '200px'}}
        />
        <Flex gap={layoutTokens.spacing.sm}>
          <Button size='small' onClick={() => setValue('1')}>
            Set Option 1
          </Button>
          <Button size='small' onClick={() => setValue('2')}>
            Set Option 2
          </Button>
          <Button size='small' onClick={() => setValue('3')}>
            Set Option 3
          </Button>
        </Flex>
        <Text>Current value: {value}</Text>
      </Flex>
    );
  },
};

// With custom render
export const CustomRender: TStory = {
  render: () => (
    <Select
      placeholder='Custom render'
      labelInValue
      options={[
        {label: 'Apple', value: 'apple', emoji: '🍎'},
        {label: 'Banana', value: 'banana', emoji: '🍌'},
        {label: 'Cherry', value: 'cherry', emoji: '🍒'},
      ]}
      optionRender={(option) => (
        <Flex gap={layoutTokens.spacing.sm} align='center'>
          <span>{option.data.emoji}</span>
          <span>{option.label}</span>
        </Flex>
      )}
      style={{width: '200px'}}
    />
  ),
};

// Country selector example
export const CountrySelector: TStory = {
  render: () => {
    const countries = [
      {label: '🇺🇸 United States', value: 'us'},
      {label: '🇬🇧 United Kingdom', value: 'uk'},
      {label: '🇨🇦 Canada', value: 'ca'},
      {label: '🇦🇺 Australia', value: 'au'},
      {label: '🇩🇪 Germany', value: 'de'},
      {label: '🇫🇷 France', value: 'fr'},
      {label: '🇯🇵 Japan', value: 'jp'},
    ];

    return (
      <Flex vertical gap={layoutTokens.spacing.md} style={{width: '250px'}}>
        <Text strong>Select your country</Text>
        <Select
          placeholder='Choose a country'
          showSearch={{
            filterOption: (input, option) => {
              const label = option?.label;
              if (typeof label === 'string') {
                return label.toLowerCase().includes(input.toLowerCase());
              }
              return false;
            },
          }}
          options={countries}
          size='large'
        />
      </Flex>
    );
  },
};

// All sizes comparison
export const AllSizesComparison: TStory = {
  render: () => (
    <Flex vertical gap={layoutTokens.spacing.lg} style={{width: '200px'}}>
      <div>
        <Text strong>Small</Text>
        <Select
          size='small'
          placeholder='Small select'
          options={[{label: 'Option', value: '1'}]}
          style={{marginTop: layoutTokens.spacing.sm}}
        />
      </div>
      <div>
        <Text strong>Middle (Default)</Text>
        <Select
          size='middle'
          placeholder='Middle select'
          options={[{label: 'Option', value: '1'}]}
          style={{marginTop: layoutTokens.spacing.sm}}
        />
      </div>
      <div>
        <Text strong>Large</Text>
        <Select
          size='large'
          placeholder='Large select'
          options={[{label: 'Option', value: '1'}]}
          style={{marginTop: layoutTokens.spacing.sm}}
        />
      </div>
    </Flex>
  ),
};

// Interactive playground
export const Playground: TStory = {
  args: {
    placeholder: 'Select an option',
    options: [
      {label: 'Option 1', value: '1'},
      {label: 'Option 2', value: '2'},
      {label: 'Option 3', value: '3'},
    ],
    size: 'middle',
    disabled: false,
    loading: false,
    allowClear: false,
    showSearch: false,
    style: {width: '250px'},
  },
  render: (args) => <Select {...args} />,
};
