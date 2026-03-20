import React from 'react';

import type {Meta, StoryObj} from '@storybook/react-vite';

import {layoutTokens} from '../../theme';
import {Button} from '../button';
import {Flex} from '../flex';
import {Input} from '../input';
import {Typography} from '../typography';

import {Popover} from './popover';

const {Text} = Typography;

const meta: Meta<typeof Popover> = {
  title: 'Components/Popover',
  component: Popover,
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'Заголовок поповера',
    },
    content: {
      control: 'text',
      description: 'Содержимое поповера',
    },
    placement: {
      control: 'select',
      options: [
        'top',
        'topLeft',
        'topRight',
        'bottom',
        'bottomLeft',
        'bottomRight',
        'left',
        'leftTop',
        'leftBottom',
        'right',
        'rightTop',
        'rightBottom',
      ],
      description: 'Позиция поповера',
    },
    trigger: {
      control: 'select',
      options: ['hover', 'click', 'focus', 'contextMenu'],
      description: 'Триггер открытия',
    },
    open: {
      control: 'boolean',
      description: 'Управление видимостью',
    },
    defaultOpen: {
      control: 'boolean',
      description: 'Открыт по умолчанию',
    },
    arrow: {
      control: 'boolean',
      description: 'Показывать стрелку',
    },
    mouseEnterDelay: {
      control: 'number',
      description: 'Задержка перед открытием (ms)',
    },
    mouseLeaveDelay: {
      control: 'number',
      description: 'Задержка перед закрытием (ms)',
    },
    overlayClassName: {
      control: 'text',
      description: 'CSS класс для контейнера',
    },
    onOpenChange: {action: 'open state changed'},
  },
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'light',
    },
  },
};

export default meta;
type TStory = StoryObj<typeof Popover>;

// Basic popover
export const Basic: TStory = {
  args: {
    title: 'Title',
    content: 'Content of the popover',
    children: <Button>Hover me</Button>,
    trigger: 'hover',
  },
};

// Different placements
export const Placements: TStory = {
  render: () => (
    <Flex
      gap={layoutTokens.spacing.md}
      wrap='wrap'
      justify='center'
      style={{padding: layoutTokens.spacing.lg}}
    >
      <Popover title='Top' content='Top content' placement='top'>
        <Button>Top</Button>
      </Popover>
      <Popover title='Bottom' content='Bottom content' placement='bottom'>
        <Button>Bottom</Button>
      </Popover>
      <Popover title='Left' content='Left content' placement='left'>
        <Button>Left</Button>
      </Popover>
      <Popover title='Right' content='Right content' placement='right'>
        <Button>Right</Button>
      </Popover>
      <Popover title='TopLeft' content='TopLeft content' placement='topLeft'>
        <Button>TopLeft</Button>
      </Popover>
      <Popover title='TopRight' content='TopRight content' placement='topRight'>
        <Button>TopRight</Button>
      </Popover>
    </Flex>
  ),
};

// Different triggers
export const Triggers: TStory = {
  render: () => (
    <Flex gap={layoutTokens.spacing.lg} wrap='wrap'>
      <Popover title='Hover' content='Opened on hover' trigger='hover'>
        <Button>Hover me</Button>
      </Popover>
      <Popover title='Click' content='Opened on click' trigger='click'>
        <Button>Click me</Button>
      </Popover>
      <Popover title='Focus' content='Opened on focus' trigger='focus'>
        <Button>Focus me</Button>
      </Popover>
      <Popover
        title='Context Menu'
        content='Opened on right click'
        trigger='contextMenu'
      >
        <Button>Right click me</Button>
      </Popover>
    </Flex>
  ),
};

// With custom content
export const CustomContent: TStory = {
  render: () => (
    <Popover
      title='User Profile'
      content={
        <Flex
          vertical
          gap={layoutTokens.spacing.sm}
          style={{minWidth: '200px'}}
        >
          <Text strong>John Doe</Text>
          <Text type='secondary'>john.doe@example.com</Text>
          <Text>Software Engineer</Text>
          <Button
            type='primary'
            size='small'
            style={{marginTop: layoutTokens.spacing.xs}}
          >
            View Profile
          </Button>
        </Flex>
      }
      trigger='click'
    >
      <Button>Show profile</Button>
    </Popover>
  ),
};

// With complex content
export const ComplexContent: TStory = {
  render: () => (
    <Popover
      title='Notifications'
      content={
        <Flex vertical gap={layoutTokens.spacing.md} style={{width: '300px'}}>
          <Flex vertical gap={layoutTokens.spacing.sm}>
            <Text strong>New message from Alice</Text>
            <Text type='secondary'>Hey, how are you doing?</Text>
          </Flex>
          <Flex vertical gap={layoutTokens.spacing.sm}>
            <Text strong>System update</Text>
            <Text type='secondary'>New version available</Text>
          </Flex>
          <Flex vertical gap={layoutTokens.spacing.sm}>
            <Text strong>Meeting reminder</Text>
            <Text type='secondary'>Team meeting in 30 minutes</Text>
          </Flex>
          <Button type='link' size='small'>
            View all notifications
          </Button>
        </Flex>
      }
      trigger='click'
      placement='bottomRight'
    >
      <Button>Notifications (3)</Button>
    </Popover>
  ),
};

// With delays
export const WithDelays: TStory = {
  render: () => (
    <Popover
      title='Delayed Popover'
      content='Opens after 1 second, closes after 0.5 seconds'
      mouseEnterDelay={1000}
      mouseLeaveDelay={500}
      trigger='hover'
    >
      <Button>Hover with delay</Button>
    </Popover>
  ),
};

// Without arrow
export const WithoutArrow: TStory = {
  render: () => (
    <Popover title='No Arrow' content='This popover has no arrow' arrow={false}>
      <Button>Hover me</Button>
    </Popover>
  ),
};

// Controlled popover
export const Controlled: TStory = {
  render: () => {
    const [open, setOpen] = React.useState(false);

    const handleOpenChange = (newOpen: boolean) => {
      setOpen(newOpen);
    };

    return (
      <Flex gap={layoutTokens.spacing.md}>
        <Popover
          title='Controlled Popover'
          content='This popover is controlled by external state'
          open={open}
          onOpenChange={handleOpenChange}
          trigger='click'
        >
          <Button>Click to open/close</Button>
        </Popover>
        <Button onClick={() => setOpen(!open)}>External control</Button>
      </Flex>
    );
  },
};

// In form context
export const InForm: TStory = {
  render: () => (
    <Popover
      title='Help'
      content='This field is required. Please enter a valid email address.'
      trigger='hover'
    >
      <Input placeholder='Email' style={{width: '250px'}} />
    </Popover>
  ),
};

// All placements showcase
export const AllPlacements: TStory = {
  render: () => {
    const placements = [
      'top',
      'topLeft',
      'topRight',
      'bottom',
      'bottomLeft',
      'bottomRight',
      'left',
      'leftTop',
      'leftBottom',
      'right',
      'rightTop',
      'rightBottom',
    ] as const;

    return (
      <Flex
        gap={layoutTokens.spacing.md}
        wrap='wrap'
        justify='center'
        style={{maxWidth: '600px', padding: layoutTokens.spacing.lg}}
      >
        {placements.map((placement) => (
          <Popover
            key={placement}
            title={placement}
            content={`Popover content for ${placement} placement`}
            placement={placement}
          >
            <Button size='small'>{placement}</Button>
          </Popover>
        ))}
      </Flex>
    );
  },
};

// Interactive playground
export const Playground: TStory = {
  args: {
    title: 'Popover Title',
    content: 'This is the popover content',
    placement: 'top',
    trigger: 'hover',
    arrow: true,
    mouseEnterDelay: 0,
    mouseLeaveDelay: 0,
    children: <Button>Hover or click me</Button>,
  },
  render: (args) => <Popover {...args} />,
};
