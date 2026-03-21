/* eslint-disable no-console */
import React from 'react';

import type {Meta, StoryObj} from '@storybook/react-vite';

import {layoutTokens} from '../../theme';
import {Flex} from '../flex';
import {Typography} from '../typography';

import {Input} from './input';

const {Text} = Typography;

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'middle', 'large'],
      description: 'Размер компонента',
    },
    disabled: {
      control: 'boolean',
      description: 'Отключенное состояние',
    },
    placeholder: {
      control: 'text',
      description: 'Текст-подсказка',
    },
    defaultValue: {
      control: 'text',
      description: 'Значение по умолчанию',
    },
    allowClear: {
      control: 'boolean',
      description: 'Показывать кнопку очистки',
    },
    maxLength: {
      control: 'number',
      description: 'Максимальная длина',
    },
    showCount: {
      control: 'boolean',
      description: 'Показывать счетчик символов',
    },
    status: {
      control: 'select',
      options: ['error', 'warning', ''],
      description: 'Состояние валидации',
    },
    onPressEnter: {action: 'pressed enter'},
    onChange: {action: 'changed'},
    onFocus: {action: 'focused'},
    onBlur: {action: 'blurred'},
  },
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'light',
    },
  },
};

export default meta;
type TStory = StoryObj<typeof Input>;

// Basic input
export const Basic: TStory = {
  args: {
    placeholder: 'Basic input',
    style: {width: '300px'},
  },
};

// Input sizes
export const Sizes: TStory = {
  render: () => (
    <Flex vertical gap={layoutTokens.spacing.md} style={{width: '300px'}}>
      <Input size='large' placeholder='Large size' />
      <Input size='middle' placeholder='Middle size' />
      <Input size='small' placeholder='Small size' />
    </Flex>
  ),
};

// Input states
export const States: TStory = {
  render: () => (
    <Flex vertical gap={layoutTokens.spacing.md} style={{width: '300px'}}>
      <Input placeholder='Default state' />
      <Input placeholder='Disabled state' disabled />
      <Input placeholder='With value' defaultValue='Some value' />
      <Input
        placeholder='With clear button'
        allowClear
        defaultValue='Clear me'
      />
    </Flex>
  ),
};

// Input with status
export const Statuses: TStory = {
  render: () => (
    <Flex vertical gap={layoutTokens.spacing.md} style={{width: '300px'}}>
      <Input placeholder='Error status' status='error' />
      <Input placeholder='Warning status' status='warning' />
      <Input placeholder='Success status' status='success' />
    </Flex>
  ),
};

// Input with count
export const WithCount: TStory = {
  render: () => (
    <Flex vertical gap={layoutTokens.spacing.md} style={{width: '300px'}}>
      <Input showCount maxLength={20} placeholder='With character count' />
      <Input
        showCount
        maxLength={50}
        defaultValue='Some text'
        placeholder='With count and value'
      />
    </Flex>
  ),
};

// TextArea
export const TextArea: TStory = {
  render: () => (
    <Input.TextArea
      rows={4}
      placeholder='TextArea with multiple lines'
      style={{width: '400px'}}
      showCount
      maxLength={200}
    />
  ),
};

// TextArea sizes
export const TextAreaSizes: TStory = {
  render: () => (
    <Flex vertical gap={layoutTokens.spacing.md} style={{width: '400px'}}>
      <Input.TextArea rows={2} placeholder='Small textarea (2 rows)' />
      <Input.TextArea rows={4} placeholder='Medium textarea (4 rows)' />
      <Input.TextArea rows={6} placeholder='Large textarea (6 rows)' />
    </Flex>
  ),
};

// Password
export const Password: TStory = {
  render: () => (
    <Input.Password placeholder='Enter password' style={{width: '300px'}} />
  ),
};

// Password with visibility toggle
export const PasswordWithToggle: TStory = {
  render: () => (
    <Input.Password
      placeholder='Toggle password visibility'
      style={{width: '300px'}}
      visibilityToggle={{visible: false}}
    />
  ),
};

// Search
export const Search: TStory = {
  render: () => (
    <Input.Search
      placeholder='Search...'
      style={{width: '300px'}}
      onSearch={(value) => console.log('Search:', value)}
    />
  ),
};

// Search with loading
export const SearchLoading: TStory = {
  render: () => {
    const [loading, setLoading] = React.useState(false);

    const handleSearch = (value: string) => {
      setLoading(true);
      console.log('Search:', value);
      setTimeout(() => setLoading(false), 1000);
    };

    return (
      <Input.Search
        placeholder='Search with loading...'
        style={{width: '300px'}}
        loading={loading}
        onSearch={handleSearch}
      />
    );
  },
};

// Search with enter button
export const SearchWithButton: TStory = {
  render: () => (
    <Input.Search
      placeholder='Search with enter button'
      style={{width: '300px'}}
      enterButton='Search'
      onSearch={(value) => console.log('Search:', value)}
    />
  ),
};

// OTP input
export const OTP: TStory = {
  render: () => <Input.OTP length={6} />,
};

// All input types showcase
export const AllTypes: TStory = {
  render: () => (
    <Flex vertical gap={layoutTokens.spacing.lg} style={{width: '400px'}}>
      <div>
        <Text strong>Basic Input</Text>
        <Input
          placeholder='Basic input'
          style={{marginTop: layoutTokens.spacing.xs}}
        />
      </div>
      <div>
        <Text strong>TextArea</Text>
        <Input.TextArea
          rows={3}
          placeholder='Multi-line text'
          style={{marginTop: layoutTokens.spacing.xs}}
        />
      </div>
      <div>
        <Text strong>Password</Text>
        <Input.Password
          placeholder='Password'
          style={{marginTop: layoutTokens.spacing.xs}}
        />
      </div>
      <div>
        <Text strong>Search</Text>
        <Input.Search
          placeholder='Search'
          style={{marginTop: layoutTokens.spacing.xs}}
        />
      </div>
      <div>
        <Text strong>OTP</Text>
        <Input.OTP length={4} style={{marginTop: layoutTokens.spacing.xs}} />
      </div>
    </Flex>
  ),
};

// Interactive playground
export const Playground: TStory = {
  args: {
    placeholder: 'Type something...',
    size: 'middle',
    disabled: false,
    allowClear: false,
    showCount: false,
    maxLength: 50,
    status: undefined,
    style: {width: '300px'},
  },
  render: (args) => <Input {...args} />,
};
