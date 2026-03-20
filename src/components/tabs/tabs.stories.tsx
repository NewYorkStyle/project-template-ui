import React from 'react';

import type {Meta, StoryObj} from '@storybook/react-vite';

import {layoutTokens} from '../../theme';
import {Button} from '../button';
import {Flex} from '../flex';
import {Typography} from '../typography';

import {Tabs} from './tabs';

const {Text, Title} = Typography;

const meta: Meta<typeof Tabs> = {
  title: 'Components/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['line', 'card', 'editable-card'],
      description: 'Тип вкладок',
    },
    size: {
      control: 'select',
      options: ['small', 'middle', 'large'],
      description: 'Размер вкладок',
    },
    tabPosition: {
      control: 'select',
      options: ['top', 'right', 'bottom', 'left'],
      description: 'Позиция вкладок',
    },
    centered: {
      control: 'boolean',
      description: 'Центрировать вкладки',
    },
    animated: {
      control: 'boolean',
      description: 'Анимация переключения',
    },
    destroyInactiveTabPane: {
      control: 'boolean',
      description: 'Уничтожать неактивные панели',
    },
    onChange: {action: 'tab changed'},
    onTabClick: {action: 'tab clicked'},
  },
  parameters: {
    layout: 'padded',
    backgrounds: {
      default: 'light',
    },
  },
};

export default meta;
type TStory = StoryObj<typeof Tabs>;

// Basic tabs
export const Basic: TStory = {
  render: () => (
    <Tabs
      items={[
        {
          key: '1',
          label: 'Tab 1',
          children: <Text>Content of Tab 1</Text>,
        },
        {
          key: '2',
          label: 'Tab 2',
          children: <Text>Content of Tab 2</Text>,
        },
        {
          key: '3',
          label: 'Tab 3',
          children: <Text>Content of Tab 3</Text>,
        },
      ]}
    />
  ),
};

// With different content
export const WithDifferentContent: TStory = {
  render: () => (
    <Tabs
      items={[
        {
          key: '1',
          label: 'Profile',
          children: (
            <Flex vertical gap={layoutTokens.spacing.md}>
              <Title level={4}>User Profile</Title>
              <Text>Name: John Doe</Text>
              <Text>Email: john@example.com</Text>
              <Text>Role: Administrator</Text>
            </Flex>
          ),
        },
        {
          key: '2',
          label: 'Settings',
          children: (
            <Flex vertical gap={layoutTokens.spacing.md}>
              <Title level={4}>Settings</Title>
              <Text>Theme: Light</Text>
              <Text>Language: English</Text>
              <Text>Notifications: Enabled</Text>
            </Flex>
          ),
        },
        {
          key: '3',
          label: 'Actions',
          children: (
            <Flex gap={layoutTokens.spacing.sm}>
              <Button type='primary'>Save Changes</Button>
              <Button>Cancel</Button>
            </Flex>
          ),
        },
      ]}
    />
  ),
};

// Different types
export const Types: TStory = {
  render: () => (
    <Flex vertical gap={layoutTokens.spacing.lg}>
      <div>
        <Text strong>Line tabs (default)</Text>
        <Tabs
          type='line'
          items={[
            {key: '1', label: 'Tab 1', children: <Text>Line tab content</Text>},
            {key: '2', label: 'Tab 2', children: <Text>Line tab content</Text>},
          ]}
        />
      </div>
      <div>
        <Text strong>Card tabs</Text>
        <Tabs
          type='card'
          items={[
            {key: '1', label: 'Tab 1', children: <Text>Card tab content</Text>},
            {key: '2', label: 'Tab 2', children: <Text>Card tab content</Text>},
          ]}
        />
      </div>
    </Flex>
  ),
};

// Sizes
export const Sizes: TStory = {
  render: () => (
    <Flex vertical gap={layoutTokens.spacing.lg}>
      <div>
        <Text strong>Small</Text>
        <Tabs
          size='small'
          items={[
            {
              key: '1',
              label: 'Tab 1',
              children: <Text>Small tabs content</Text>,
            },
            {
              key: '2',
              label: 'Tab 2',
              children: <Text>Small tabs content</Text>,
            },
          ]}
        />
      </div>
      <div>
        <Text strong>Middle (default)</Text>
        <Tabs
          size='middle'
          items={[
            {
              key: '1',
              label: 'Tab 1',
              children: <Text>Middle tabs content</Text>,
            },
            {
              key: '2',
              label: 'Tab 2',
              children: <Text>Middle tabs content</Text>,
            },
          ]}
        />
      </div>
      <div>
        <Text strong>Large</Text>
        <Tabs
          size='large'
          items={[
            {
              key: '1',
              label: 'Tab 1',
              children: <Text>Large tabs content</Text>,
            },
            {
              key: '2',
              label: 'Tab 2',
              children: <Text>Large tabs content</Text>,
            },
          ]}
        />
      </div>
    </Flex>
  ),
};

// Tab positions
export const TabPositions: TStory = {
  render: () => (
    <Flex vertical gap={layoutTokens.spacing.lg}>
      <div>
        <Text strong>Top (default)</Text>
        <Tabs
          tabPosition='top'
          items={[
            {
              key: '1',
              label: 'Tab 1',
              children: <Text>Top positioned tabs</Text>,
            },
            {
              key: '2',
              label: 'Tab 2',
              children: <Text>Top positioned tabs</Text>,
            },
          ]}
        />
      </div>
      <div>
        <Text strong>Left</Text>
        <Tabs
          tabPosition='left'
          items={[
            {
              key: '1',
              label: 'Tab 1',
              children: <Text>Left positioned tabs</Text>,
            },
            {
              key: '2',
              label: 'Tab 2',
              children: <Text>Left positioned tabs</Text>,
            },
          ]}
          style={{minHeight: 150}}
        />
      </div>
      <div>
        <Text strong>Right</Text>
        <Tabs
          tabPosition='right'
          items={[
            {
              key: '1',
              label: 'Tab 1',
              children: <Text>Right positioned tabs</Text>,
            },
            {
              key: '2',
              label: 'Tab 2',
              children: <Text>Right positioned tabs</Text>,
            },
          ]}
          style={{minHeight: 150}}
        />
      </div>
      <div>
        <Text strong>Bottom</Text>
        <Tabs
          tabPosition='bottom'
          items={[
            {
              key: '1',
              label: 'Tab 1',
              children: <Text>Bottom positioned tabs</Text>,
            },
            {
              key: '2',
              label: 'Tab 2',
              children: <Text>Bottom positioned tabs</Text>,
            },
          ]}
        />
      </div>
    </Flex>
  ),
};

// Centered tabs
export const Centered: TStory = {
  render: () => (
    <Tabs
      centered
      items={[
        {
          key: '1',
          label: 'Tab 1',
          children: <Text>Centered tabs content</Text>,
        },
        {
          key: '2',
          label: 'Tab 2',
          children: <Text>Centered tabs content</Text>,
        },
        {
          key: '3',
          label: 'Tab 3',
          children: <Text>Centered tabs content</Text>,
        },
      ]}
    />
  ),
};

// With icons
export const WithIcons: TStory = {
  render: () => (
    <Tabs
      items={[
        {
          key: '1',
          label: '📋 Profile',
          children: <Text>Profile content</Text>,
        },
        {
          key: '2',
          label: '⚙️ Settings',
          children: <Text>Settings content</Text>,
        },
        {
          key: '3',
          label: '🔔 Notifications',
          children: <Text>Notifications content</Text>,
        },
      ]}
    />
  ),
};

// Disabled tab
export const DisabledTab: TStory = {
  render: () => (
    <Tabs
      items={[
        {key: '1', label: 'Tab 1', children: <Text>Active tab content</Text>},
        {
          key: '2',
          label: 'Tab 2 (Disabled)',
          children: <Text>Disabled content</Text>,
          disabled: true,
        },
        {key: '3', label: 'Tab 3', children: <Text>Active tab content</Text>},
      ]}
    />
  ),
};

// Controlled tabs
export const Controlled: TStory = {
  render: () => {
    const [activeKey, setActiveKey] = React.useState('1');

    return (
      <Flex vertical gap={layoutTokens.spacing.md}>
        <Tabs
          activeKey={activeKey}
          onChange={setActiveKey}
          items={[
            {key: '1', label: 'Tab 1', children: <Text>Content of Tab 1</Text>},
            {key: '2', label: 'Tab 2', children: <Text>Content of Tab 2</Text>},
            {key: '3', label: 'Tab 3', children: <Text>Content of Tab 3</Text>},
          ]}
        />
        <Flex gap={layoutTokens.spacing.sm}>
          <Button size='small' onClick={() => setActiveKey('1')}>
            Go to Tab 1
          </Button>
          <Button size='small' onClick={() => setActiveKey('2')}>
            Go to Tab 2
          </Button>
          <Button size='small' onClick={() => setActiveKey('3')}>
            Go to Tab 3
          </Button>
        </Flex>
        <Text>Current active tab: {activeKey}</Text>
      </Flex>
    );
  },
};

// Editable tabs
export const EditableTabs: TStory = {
  render: () => {
    const [items, setItems] = React.useState([
      {key: '1', label: 'Tab 1', children: <Text>Content of Tab 1</Text>},
      {key: '2', label: 'Tab 2', children: <Text>Content of Tab 2</Text>},
      {key: '3', label: 'Tab 3', children: <Text>Content of Tab 3</Text>},
    ]);

    const add = () => {
      const newKey = String(items.length + 1);
      setItems([
        ...items,
        {
          key: newKey,
          label: `Tab ${newKey}`,
          children: <Text>Content of Tab {newKey}</Text>,
        },
      ]);
    };

    const remove = (key: string) => {
      setItems(items.filter((item) => item.key !== key));
    };

    return (
      <Tabs
        type='editable-card'
        items={items}
        onEdit={(targetKey, action) => {
          if (action === 'add') {
            add();
          } else if (action === 'remove') {
            remove(targetKey as string);
          }
        }}
      />
    );
  },
};

// With custom tab bar
export const CustomTabBar: TStory = {
  render: () => (
    <Tabs
      tabBarExtraContent={{
        left: <Button size='small'>Left Extra</Button>,
        right: <Button size='small'>Right Extra</Button>,
      }}
      items={[
        {
          key: '1',
          label: 'Tab 1',
          children: <Text>Content with custom tab bar</Text>,
        },
        {
          key: '2',
          label: 'Tab 2',
          children: <Text>Content with custom tab bar</Text>,
        },
      ]}
    />
  ),
};

// With destroy inactive
export const DestroyInactive: TStory = {
  render: () => {
    const [count, setCount] = React.useState(0);

    return (
      <Tabs
        destroyInactiveTabPane
        items={[
          {
            key: '1',
            label: 'Tab 1',
            children: (
              <Flex vertical gap={layoutTokens.spacing.md}>
                <Text>This tab content will be destroyed when inactive</Text>
                <Text>Counter: {count}</Text>
                <Button onClick={() => setCount(count + 1)}>Increment</Button>
              </Flex>
            ),
          },
          {
            key: '2',
            label: 'Tab 2',
            children: <Text>Switch back to Tab 1 to see counter reset</Text>,
          },
        ]}
      />
    );
  },
};

// All tabs showcase
export const AllVariants: TStory = {
  render: () => (
    <Flex vertical gap={layoutTokens.spacing.lg} style={{width: '100%'}}>
      <div>
        <Text strong>Line Tabs</Text>
        <Tabs
          type='line'
          items={[
            {key: '1', label: 'Tab 1', children: <Text>Line tab content</Text>},
            {key: '2', label: 'Tab 2', children: <Text>Line tab content</Text>},
          ]}
        />
      </div>
      <div>
        <Text strong>Card Tabs</Text>
        <Tabs
          type='card'
          items={[
            {key: '1', label: 'Tab 1', children: <Text>Card tab content</Text>},
            {key: '2', label: 'Tab 2', children: <Text>Card tab content</Text>},
          ]}
        />
      </div>
      <div>
        <Text strong>With Icons</Text>
        <Tabs
          items={[
            {
              key: '1',
              label: '📋 List',
              children: <Text>List view content</Text>,
            },
            {
              key: '2',
              label: '🔲 Grid',
              children: <Text>Grid view content</Text>,
            },
          ]}
        />
      </div>
      <div>
        <Text strong>Centered</Text>
        <Tabs
          centered
          items={[
            {
              key: '1',
              label: 'Tab 1',
              children: <Text>Centered tabs content</Text>,
            },
            {
              key: '2',
              label: 'Tab 2',
              children: <Text>Centered tabs content</Text>,
            },
          ]}
        />
      </div>
    </Flex>
  ),
};

// Interactive playground
export const Playground: TStory = {
  args: {
    type: 'line',
    size: 'middle',
    tabPosition: 'top',
    centered: false,
    animated: true,
    destroyInactiveTabPane: false,
  },
  render: (args) => (
    <Tabs
      {...args}
      items={[
        {key: '1', label: 'Tab 1', children: <Text>Content of Tab 1</Text>},
        {key: '2', label: 'Tab 2', children: <Text>Content of Tab 2</Text>},
        {key: '3', label: 'Tab 3', children: <Text>Content of Tab 3</Text>},
      ]}
      style={{minWidth: 400}}
    />
  ),
};
