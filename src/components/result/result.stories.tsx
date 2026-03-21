import type {Meta, StoryObj} from '@storybook/react-vite';

import {Button} from '../button';
import {Flex} from '../flex';
import {Typography} from '../typography';

import {Result} from './result';

const {Text} = Typography;

const meta: Meta<typeof Result> = {
  title: 'Components/Result',
  component: Result,
  tags: ['autodocs'],
  argTypes: {
    status: {
      control: 'select',
      options: ['success', 'error', 'info', 'warning', '404', '403', '500'],
      description: 'Статус результата',
    },
    title: {
      control: 'text',
      description: 'Заголовок',
    },
    subTitle: {
      control: 'text',
      description: 'Подзаголовок',
    },
    extra: {
      control: 'object',
      description: 'Дополнительные элементы (кнопки)',
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
type TStory = StoryObj<typeof Result>;

// Success
export const Success: TStory = {
  args: {
    status: 'success',
    title: 'Success!',
    subTitle: 'Your operation has been completed successfully.',
    extra: <Button type='primary'>Go Back</Button>,
  },
};

// Error
export const Error: TStory = {
  args: {
    status: 'error',
    title: 'Submission Failed',
    subTitle:
      'Please check and modify the following information before resubmitting.',
    extra: <Button type='primary'>Try Again</Button>,
  },
};

// Info
export const Info: TStory = {
  args: {
    status: 'info',
    title: 'Information',
    subTitle: 'This is some important information for you.',
    extra: <Button>Got it</Button>,
  },
};

// Warning
export const Warning: TStory = {
  args: {
    status: 'warning',
    title: 'Warning',
    subTitle: 'Please be careful with this action.',
    extra: <Button type='primary'>Understood</Button>,
  },
};

// 404 Not Found
export const NotFound: TStory = {
  args: {
    status: '404',
    title: '404',
    subTitle: 'Sorry, the page you visited does not exist.',
    extra: <Button type='primary'>Back Home</Button>,
  },
};

// 403 Forbidden
export const Forbidden: TStory = {
  args: {
    status: '403',
    title: '403',
    subTitle: 'Sorry, you are not authorized to access this page.',
    extra: <Button type='primary'>Go Back</Button>,
  },
};

// 500 Server Error
export const ServerError: TStory = {
  args: {
    status: '500',
    title: '500',
    subTitle: 'Sorry, something went wrong on our end.',
    extra: <Button type='primary'>Refresh</Button>,
  },
};

// With custom icon
export const CustomIcon: TStory = {
  args: {
    status: 'success',
    icon: '🎉',
    title: 'Congratulations!',
    subTitle: 'Your account has been created successfully.',
    extra: (
      <Flex gap={8}>
        <Button>View Profile</Button>
        <Button type='primary'>Start Exploring</Button>
      </Flex>
    ),
  },
};

// With multiple actions
export const MultipleActions: TStory = {
  args: {
    status: 'error',
    title: 'Payment Failed',
    subTitle: 'There was a problem processing your payment.',
    extra: (
      <Flex gap={8}>
        <Button>Try Again</Button>
        <Button type='primary'>Contact Support</Button>
        <Button>Cancel</Button>
      </Flex>
    ),
  },
};

// With custom content
export const CustomContent: TStory = {
  render: () => (
    <Result
      status='warning'
      title='Verification Required'
      subTitle='Please verify your email address to continue'
      extra={<Button type='primary'>Send Verification Email</Button>}
    >
      <div
        style={{
          marginTop: 16,
          padding: 16,
          background: '#f5f5f5',
          borderRadius: 8,
        }}
      >
        <Text type='secondary'>
          Verification email sent to user@example.com
        </Text>
        <br />
        <Text type='secondary'>
          Didn't receive the email? Check your spam folder or{' '}
        </Text>
        <Button type='link' size='small' style={{padding: 0}}>
          resend
        </Button>
      </div>
    </Result>
  ),
};

// All statuses showcase
export const AllStatuses: TStory = {
  render: () => (
    <Flex vertical gap={24} style={{maxWidth: '1200px'}}>
      <Flex gap={16} wrap='wrap'>
        <Result
          status='success'
          title='Success'
          subTitle='Brief description'
          style={{width: 300}}
        />
        <Result
          status='error'
          title='Error'
          subTitle='Brief description'
          style={{width: 300}}
        />
        <Result
          status='info'
          title='Info'
          subTitle='Brief description'
          style={{width: 300}}
        />
        <Result
          status='warning'
          title='Warning'
          subTitle='Brief description'
          style={{width: 300}}
        />
      </Flex>
      <Flex gap={16} wrap='wrap'>
        <Result
          status='404'
          title='404'
          subTitle='Page not found'
          style={{width: 300}}
        />
        <Result
          status='403'
          title='403'
          subTitle='Access forbidden'
          style={{width: 300}}
        />
        <Result
          status='500'
          title='500'
          subTitle='Server error'
          style={{width: 300}}
        />
      </Flex>
    </Flex>
  ),
};

// With long content
export const LongContent: TStory = {
  args: {
    status: 'info',
    title: 'Information About Your Account',
    subTitle:
      'We have detected some unusual activity on your account. Please review your recent login activity and update your security settings if necessary.',
    extra: (
      <Flex gap={8}>
        <Button type='primary'>Review Activity</Button>
        <Button>Update Settings</Button>
      </Flex>
    ),
  },
};

// Interactive playground
export const Playground: TStory = {
  args: {
    status: 'success',
    title: 'Success!',
    subTitle: 'Your operation has been completed successfully.',
    extra: <Button type='primary'>Go Back</Button>,
  },
  render: (args) => <Result {...args} />,
};
