import React from 'react';

import type {Meta, StoryObj} from '@storybook/react-vite';

import {layoutTokens} from '../../theme';
import {Button} from '../button';
import {Flex} from '../flex';
import {Form} from '../form';
import {Input} from '../input';
import {Select} from '../select';
import {Typography} from '../typography';

import {Drawer} from './drawer';

const {Text} = Typography;

const meta: Meta<typeof Drawer> = {
  title: 'Components/Drawer',
  component: Drawer,
  tags: ['autodocs'],
  argTypes: {
    open: {
      control: 'boolean',
      description: 'Видимость компонента',
    },
    placement: {
      control: 'select',
      options: ['top', 'right', 'bottom', 'left'],
      description: 'Расположение выезжающей панели',
    },
    size: {
      control: 'select',
      options: ['default', 'large'],
      description: 'Размер панели',
    },
    title: {
      control: 'text',
      description: 'Заголовок компонента',
    },
    closable: {
      control: 'boolean',
      description: 'Показывать кнопку закрытия',
    },
    mask: {
      control: 'boolean',
      description: 'Показывать затемнение фона',
    },
    maskClosable: {
      control: 'boolean',
      description: 'Закрывать по клику на затемнение',
    },
    keyboard: {
      control: 'boolean',
      description: 'Закрывать по нажатию ESC',
    },
    destroyOnClose: {
      control: 'boolean',
      description: 'Уничтожать содержимое при закрытии',
    },
    loading: {
      control: 'boolean',
      description: 'Состояние загрузки',
    },
    zIndex: {
      control: 'number',
      description: 'Z-index слоя',
    },
    onClose: {action: 'closed'},
    afterOpenChange: {action: 'open state changed'},
  },
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'light',
    },
  },
};

export default meta;
type TStory = StoryObj<typeof Drawer>;

// Basic drawer
export const Basic: TStory = {
  args: {
    open: true,
    title: 'Basic Drawer',
    children: <Text>Содержимое компонента Drawer</Text>,
  },
  render: (args) => {
    const [open, setOpen] = React.useState(false);

    return (
      <>
        <Button type='primary' onClick={() => setOpen(true)}>
          Open Drawer
        </Button>
        <Drawer {...args} open={open} onClose={() => setOpen(false)} />
      </>
    );
  },
};

// Different placements
export const PlacementLeft: TStory = {
  render: () => {
    const [open, setOpen] = React.useState(false);

    return (
      <>
        <Button type='primary' onClick={() => setOpen(true)}>
          Left Drawer
        </Button>
        <Drawer
          title='Left Drawer'
          placement='left'
          open={open}
          onClose={() => setOpen(false)}
        >
          <Text>Содержимое с левой стороны</Text>
        </Drawer>
      </>
    );
  },
};

export const PlacementRight: TStory = {
  render: () => {
    const [open, setOpen] = React.useState(false);

    return (
      <>
        <Button type='primary' onClick={() => setOpen(true)}>
          Right Drawer
        </Button>
        <Drawer
          title='Right Drawer'
          placement='right'
          open={open}
          onClose={() => setOpen(false)}
        >
          <Text>Содержимое с правой стороны</Text>
        </Drawer>
      </>
    );
  },
};

export const PlacementTop: TStory = {
  render: () => {
    const [open, setOpen] = React.useState(false);

    return (
      <>
        <Button type='primary' onClick={() => setOpen(true)}>
          Top Drawer
        </Button>
        <Drawer
          title='Top Drawer'
          placement='top'
          size='large'
          open={open}
          onClose={() => setOpen(false)}
        >
          <Text>Содержимое сверху</Text>
        </Drawer>
      </>
    );
  },
};

export const PlacementBottom: TStory = {
  render: () => {
    const [open, setOpen] = React.useState(false);

    return (
      <>
        <Button type='primary' onClick={() => setOpen(true)}>
          Bottom Drawer
        </Button>
        <Drawer
          title='Bottom Drawer'
          placement='bottom'
          size='large'
          open={open}
          onClose={() => setOpen(false)}
        >
          <Text>Содержимое снизу</Text>
        </Drawer>
      </>
    );
  },
};

// Sizes
export const SizeLarge: TStory = {
  render: () => {
    const [open, setOpen] = React.useState(false);

    return (
      <>
        <Button type='primary' onClick={() => setOpen(true)}>
          Large Drawer
        </Button>
        <Drawer
          title='Large Drawer'
          size='large'
          open={open}
          onClose={() => setOpen(false)}
        >
          <Text>Большой размер панели</Text>
        </Drawer>
      </>
    );
  },
};

// Without mask
export const NoMask: TStory = {
  render: () => {
    const [open, setOpen] = React.useState(false);

    return (
      <>
        <Button type='primary' onClick={() => setOpen(true)}>
          Open Drawer
        </Button>
        <Drawer
          title='Without Mask'
          mask={false}
          open={open}
          onClose={() => setOpen(false)}
        >
          <Text>Этот Drawer не имеет затемнения фона</Text>
        </Drawer>
      </>
    );
  },
};

// With footer
export const WithFooter: TStory = {
  render: () => {
    const [open, setOpen] = React.useState(false);

    return (
      <>
        <Button type='primary' onClick={() => setOpen(true)}>
          Open Drawer
        </Button>
        <Drawer
          title='Drawer with Footer'
          open={open}
          onClose={() => setOpen(false)}
          footer={
            <Flex gap={layoutTokens.spacing.sm} justify='end'>
              <Button onClick={() => setOpen(false)}>Cancel</Button>
              <Button type='primary' onClick={() => setOpen(false)}>
                Submit
              </Button>
            </Flex>
          }
        >
          <Text>Содержимое с футером внизу</Text>
        </Drawer>
      </>
    );
  },
};

// With form content
export const WithForm: TStory = {
  render: () => {
    const [open, setOpen] = React.useState(false);
    const [form] = Form.useForm();

    const handleSubmit = () => {
      form.validateFields().then(() => {
        setOpen(false);
        form.resetFields();
      });
    };

    return (
      <>
        <Button type='primary' onClick={() => setOpen(true)}>
          Open Form Drawer
        </Button>
        <Drawer
          title='User Information'
          open={open}
          onClose={() => setOpen(false)}
          footer={
            <Flex gap={layoutTokens.spacing.sm} justify='end'>
              <Button onClick={() => setOpen(false)}>Cancel</Button>
              <Button type='primary' onClick={handleSubmit}>
                Save
              </Button>
            </Flex>
          }
        >
          <Form form={form} layout='vertical'>
            <Form.Item
              label='Name'
              name='name'
              rules={[{required: true, message: 'Please enter name'}]}
            >
              <Input placeholder='Enter name' />
            </Form.Item>
            <Form.Item
              label='Email'
              name='email'
              rules={[
                {
                  required: true,
                  type: 'email',
                  message: 'Please enter valid email',
                },
              ]}
            >
              <Input placeholder='Enter email' />
            </Form.Item>
            <Form.Item
              label='Role'
              name='role'
              rules={[{required: true, message: 'Please select role'}]}
            >
              <Select
                options={[
                  {label: 'Admin', value: 'admin'},
                  {label: 'User', value: 'user'},
                  {label: 'Guest', value: 'guest'},
                ]}
                placeholder='Select role'
              />
            </Form.Item>
          </Form>
        </Drawer>
      </>
    );
  },
};

// Loading state
export const Loading: TStory = {
  render: () => {
    const [open, setOpen] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    const handleSubmit = () => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setOpen(false);
      }, 2000);
    };

    return (
      <>
        <Button type='primary' onClick={() => setOpen(true)}>
          Open Drawer
        </Button>
        <Drawer
          title='Loading Example'
          open={open}
          onClose={() => setOpen(false)}
          footer={
            <Flex gap={layoutTokens.spacing.sm} justify='end'>
              <Button onClick={() => setOpen(false)}>Cancel</Button>
              <Button type='primary' loading={loading} onClick={handleSubmit}>
                Submit
              </Button>
            </Flex>
          }
        >
          <Text>Нажмите Submit, чтобы увидеть состояние загрузки</Text>
        </Drawer>
      </>
    );
  },
};

// Multi-level drawer
export const MultiLevel: TStory = {
  render: () => {
    const [open, setOpen] = React.useState(false);
    const [openInner, setOpenInner] = React.useState(false);

    return (
      <>
        <Button type='primary' onClick={() => setOpen(true)}>
          Open Drawer
        </Button>
        <Drawer
          title='Parent Drawer'
          open={open}
          onClose={() => setOpen(false)}
          size='large'
        >
          <Flex vertical gap={layoutTokens.spacing.md}>
            <Text>Родительский контент</Text>
            <Button type='primary' onClick={() => setOpenInner(true)}>
              Open Child Drawer
            </Button>
          </Flex>
          <Drawer
            title='Child Drawer'
            placement='right'
            open={openInner}
            onClose={() => setOpenInner(false)}
            size='large'
          >
            <Text>Дочерний контент</Text>
          </Drawer>
        </Drawer>
      </>
    );
  },
};

// All placements showcase
export const AllPlacements: TStory = {
  render: () => {
    const [placement, setPlacement] = React.useState<
      'top' | 'right' | 'bottom' | 'left'
    >('right');
    const [open, setOpen] = React.useState(false);

    const showDrawer = (p: typeof placement) => {
      setPlacement(p);
      setOpen(true);
    };

    return (
      <>
        <Flex gap={layoutTokens.spacing.sm} wrap='wrap'>
          <Button onClick={() => showDrawer('top')}>Top</Button>
          <Button onClick={() => showDrawer('right')}>Right</Button>
          <Button onClick={() => showDrawer('bottom')}>Bottom</Button>
          <Button onClick={() => showDrawer('left')}>Left</Button>
        </Flex>
        <Drawer
          title={`${placement.charAt(0).toUpperCase() + placement.slice(1)} Drawer`}
          placement={placement}
          open={open}
          onClose={() => setOpen(false)}
        >
          <Text>Этот Drawer выезжает из {placement} стороны</Text>
        </Drawer>
      </>
    );
  },
};

// Interactive playground
export const Playground: TStory = {
  args: {
    title: 'Playground Drawer',
    placement: 'right',
    size: 'default',
    closable: true,
    mask: true,
    maskClosable: true,
    keyboard: true,
    destroyOnClose: false,
    children: <Text>Настройте параметры в панели Controls</Text>,
  },
  render: (args) => {
    const [open, setOpen] = React.useState(false);

    return (
      <>
        <Button type='primary' onClick={() => setOpen(true)}>
          Open Drawer
        </Button>
        <Drawer {...args} open={open} onClose={() => setOpen(false)} />
      </>
    );
  },
};
