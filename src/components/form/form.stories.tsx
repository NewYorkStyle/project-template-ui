/* eslint-disable no-console */
import React from 'react';

import type {Meta, StoryObj} from '@storybook/react-vite';

import {layoutTokens} from '../../theme';
import {Button} from '../button';
import {Flex} from '../flex';
import {Input} from '../input';
import {Select} from '../select';
import {Typography} from '../typography';

import {Form} from './form';

const {Text, Title} = Typography;

const meta: Meta<typeof Form> = {
  title: 'Components/Form',
  component: Form,
  tags: ['autodocs'],
  argTypes: {
    layout: {
      control: 'select',
      options: ['horizontal', 'vertical', 'inline'],
      description: 'Расположение элементов формы',
    },
    labelAlign: {
      control: 'select',
      options: ['left', 'right'],
      description: 'Выравнивание меток',
    },
    labelCol: {
      control: 'object',
      description: 'Настройки колонки для меток (span, offset)',
    },
    wrapperCol: {
      control: 'object',
      description: 'Настройки колонки для полей',
    },
    colon: {
      control: 'boolean',
      description: 'Показывать двоеточие после метки',
    },
    disabled: {
      control: 'boolean',
      description: 'Отключить все поля формы',
    },
    size: {
      control: 'select',
      options: ['small', 'middle', 'large'],
      description: 'Размер полей формы',
    },
    onFinish: {action: 'form submitted'},
    onFinishFailed: {action: 'form submission failed'},
  },
  parameters: {
    layout: 'padded',
    backgrounds: {
      default: 'light',
    },
  },
};

export default meta;
type TStory = StoryObj<typeof Form>;

// Basic form
export const Basic: TStory = {
  render: () => {
    const [form] = Form.useForm();

    const onFinish = (values: unknown) => {
      console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: unknown) => {
      console.log('Failed:', errorInfo);
    };

    return (
      <Form
        form={form}
        name='basic'
        layout='vertical'
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        style={{width: '400px'}}
      >
        <Form.Item
          label='Username'
          name='username'
          rules={[{required: true, message: 'Please input your username!'}]}
        >
          <Input placeholder='Enter username' />
        </Form.Item>

        <Form.Item
          label='Password'
          name='password'
          rules={[{required: true, message: 'Please input your password!'}]}
        >
          <Input.Password placeholder='Enter password' />
        </Form.Item>

        <Form.Item>
          <Flex gap={layoutTokens.spacing.sm}>
            <Button type='primary' htmlType='submit'>
              Submit
            </Button>
            <Button htmlType='button' onClick={() => form.resetFields()}>
              Reset
            </Button>
          </Flex>
        </Form.Item>
      </Form>
    );
  },
};

// Form layouts
export const HorizontalLayout: TStory = {
  render: () => {
    const onFinish = (values: unknown) => {
      console.log('Success:', values);
    };

    return (
      <Form
        name='horizontal'
        layout='horizontal'
        labelCol={{span: 6}}
        wrapperCol={{span: 18}}
        onFinish={onFinish}
        style={{width: '600px'}}
      >
        <Form.Item label='Name' name='name' rules={[{required: true}]}>
          <Input placeholder='Enter name' />
        </Form.Item>

        <Form.Item
          label='Email'
          name='email'
          rules={[{required: true, type: 'email'}]}
        >
          <Input placeholder='Enter email' />
        </Form.Item>

        <Form.Item label='Role' name='role'>
          <Select
            options={[
              {label: 'Admin', value: 'admin'},
              {label: 'User', value: 'user'},
            ]}
            placeholder='Select role'
          />
        </Form.Item>

        <Form.Item wrapperCol={{offset: 6, span: 18}}>
          <Button type='primary' htmlType='submit'>
            Submit
          </Button>
        </Form.Item>
      </Form>
    );
  },
};

export const VerticalLayout: TStory = {
  render: () => {
    const onFinish = (values: unknown) => {
      console.log('Success:', values);
    };

    return (
      <Form
        name='vertical'
        layout='vertical'
        onFinish={onFinish}
        style={{width: '400px'}}
      >
        <Form.Item label='Name' name='name' rules={[{required: true}]}>
          <Input placeholder='Enter name' />
        </Form.Item>

        <Form.Item
          label='Email'
          name='email'
          rules={[{required: true, type: 'email'}]}
        >
          <Input placeholder='Enter email' />
        </Form.Item>

        <Form.Item label='Role' name='role'>
          <Select
            options={[
              {label: 'Admin', value: 'admin'},
              {label: 'User', value: 'user'},
            ]}
            placeholder='Select role'
          />
        </Form.Item>

        <Form.Item>
          <Button type='primary' htmlType='submit'>
            Submit
          </Button>
        </Form.Item>
      </Form>
    );
  },
};

export const InlineLayout: TStory = {
  render: () => {
    const onFinish = (values: unknown) => {
      console.log('Success:', values);
    };

    return (
      <Form
        name='inline'
        layout='inline'
        onFinish={onFinish}
        style={{width: '100%'}}
      >
        <Form.Item name='username' rules={[{required: true}]}>
          <Input placeholder='Username' />
        </Form.Item>

        <Form.Item name='password' rules={[{required: true}]}>
          <Input.Password placeholder='Password' />
        </Form.Item>

        <Form.Item>
          <Button type='primary' htmlType='submit'>
            Login
          </Button>
        </Form.Item>
      </Form>
    );
  },
};

// Form with validation
export const WithValidation: TStory = {
  render: () => {
    const onFinish = (values: unknown) => {
      console.log('Success:', values);
    };

    return (
      <Form
        name='validation'
        layout='vertical'
        onFinish={onFinish}
        style={{width: '400px'}}
      >
        <Form.Item
          label='Username'
          name='username'
          rules={[
            {required: true, message: 'Username is required'},
            {min: 3, message: 'Username must be at least 3 characters'},
            {max: 20, message: 'Username cannot exceed 20 characters'},
          ]}
        >
          <Input placeholder='Enter username (3-20 characters)' />
        </Form.Item>

        <Form.Item
          label='Email'
          name='email'
          rules={[
            {required: true, message: 'Email is required'},
            {type: 'email', message: 'Please enter a valid email'},
          ]}
        >
          <Input placeholder='Enter email' />
        </Form.Item>

        <Form.Item
          label='Password'
          name='password'
          rules={[
            {required: true, message: 'Password is required'},
            {min: 6, message: 'Password must be at least 6 characters'},
          ]}
        >
          <Input.Password placeholder='Enter password (min 6 characters)' />
        </Form.Item>

        <Form.Item
          label='Confirm Password'
          name='confirm'
          dependencies={['password']}
          rules={[
            {required: true, message: 'Please confirm your password'},
            ({getFieldValue}) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error('Passwords do not match'));
              },
            }),
          ]}
        >
          <Input.Password placeholder='Confirm password' />
        </Form.Item>

        <Form.Item>
          <Button type='primary' htmlType='submit'>
            Register
          </Button>
        </Form.Item>
      </Form>
    );
  },
};

// Form with custom validation
export const CustomValidation: TStory = {
  render: () => {
    const onFinish = (values: unknown) => {
      console.log('Success:', values);
    };

    return (
      <Form
        name='custom'
        layout='vertical'
        onFinish={onFinish}
        style={{width: '400px'}}
      >
        <Form.Item
          label='Age'
          name='age'
          rules={[
            {required: true, message: 'Age is required'},
            {
              validator: (_, value) => {
                if (
                  value &&
                  (typeof value === 'number' || typeof value === 'string') &&
                  (Number(value) < 18 || Number(value) > 100)
                ) {
                  return Promise.reject(
                    new Error('Age must be between 18 and 100')
                  );
                }
                return Promise.resolve();
              },
            },
          ]}
        >
          <Input type='number' placeholder='Enter age (18-100)' />
        </Form.Item>

        <Form.Item
          label='Website'
          name='website'
          rules={[
            {
              validator: (_, value) => {
                if (
                  value &&
                  typeof value === 'string' &&
                  !value.match(/^https?:\/\/.+/)
                ) {
                  return Promise.reject(
                    new Error(
                      'Please enter a valid URL starting with http:// or https://'
                    )
                  );
                }
                return Promise.resolve();
              },
            },
          ]}
        >
          <Input placeholder='Enter website URL' />
        </Form.Item>

        <Form.Item>
          <Button type='primary' htmlType='submit'>
            Submit
          </Button>
        </Form.Item>
      </Form>
    );
  },
};

// Form with dynamic fields
export const DynamicFields: TStory = {
  render: () => {
    const onFinish = (values: unknown) => {
      console.log('Success:', values);
    };

    return (
      <Form
        name='dynamic'
        layout='vertical'
        onFinish={onFinish}
        style={{width: '500px'}}
      >
        <Form.List name='users'>
          {(fields, {add, remove}) => (
            <>
              {fields.map((field, index) => (
                <Flex
                  key={field.key}
                  gap={layoutTokens.spacing.sm}
                  align='flex-start'
                  style={{marginBottom: layoutTokens.spacing.md}}
                >
                  <Form.Item
                    {...field}
                    name={[field.name, 'name']}
                    rules={[{required: true, message: 'Name is required'}]}
                    style={{flex: 1, marginBottom: 0}}
                  >
                    <Input placeholder={`User ${index + 1} name`} />
                  </Form.Item>
                  <Form.Item
                    {...field}
                    name={[field.name, 'email']}
                    rules={[
                      {
                        required: true,
                        type: 'email',
                        message: 'Valid email is required',
                      },
                    ]}
                    style={{flex: 1, marginBottom: 0}}
                  >
                    <Input placeholder={`User ${index + 1} email`} />
                  </Form.Item>
                  <Button danger onClick={() => remove(field.name)}>
                    Remove
                  </Button>
                </Flex>
              ))}
              <Form.Item>
                <Button type='dashed' onClick={() => add()} block>
                  + Add User
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>

        <Form.Item>
          <Button type='primary' htmlType='submit'>
            Submit
          </Button>
        </Form.Item>
      </Form>
    );
  },
};

// Form with nested fields
export const NestedFields: TStory = {
  render: () => {
    const onFinish = (values: unknown) => {
      console.log('Success:', values);
    };

    return (
      <Form
        name='nested'
        layout='vertical'
        onFinish={onFinish}
        style={{width: '500px'}}
      >
        <Form.Item
          label='Company Name'
          name={['company', 'name']}
          rules={[{required: true}]}
        >
          <Input placeholder='Company name' />
        </Form.Item>

        <Form.Item label='Company Address' name={['company', 'address']}>
          <Input placeholder='Company address' />
        </Form.Item>

        <Title level={5} style={{marginTop: layoutTokens.spacing.md}}>
          Contact Person
        </Title>

        <Form.Item
          label='First Name'
          name={['contact', 'firstName']}
          rules={[{required: true}]}
        >
          <Input placeholder='First name' />
        </Form.Item>

        <Form.Item
          label='Last Name'
          name={['contact', 'lastName']}
          rules={[{required: true}]}
        >
          <Input placeholder='Last name' />
        </Form.Item>

        <Form.Item label='Phone' name={['contact', 'phone']}>
          <Input placeholder='Phone number' />
        </Form.Item>

        <Form.Item>
          <Button type='primary' htmlType='submit'>
            Submit
          </Button>
        </Form.Item>
      </Form>
    );
  },
};

// Form with disabled state
export const DisabledForm: TStory = {
  render: () => {
    const [disabled, setDisabled] = React.useState(true);

    return (
      <>
        <Flex
          gap={layoutTokens.spacing.sm}
          style={{marginBottom: layoutTokens.spacing.md}}
        >
          <Button onClick={() => setDisabled(!disabled)}>
            {disabled ? 'Enable' : 'Disable'} Form
          </Button>
        </Flex>
        <Form
          name='disabled'
          layout='vertical'
          disabled={disabled}
          style={{width: '400px'}}
          initialValues={{
            username: 'john_doe',
            email: 'john@example.com',
            role: 'user',
          }}
        >
          <Form.Item label='Username' name='username'>
            <Input />
          </Form.Item>

          <Form.Item label='Email' name='email'>
            <Input />
          </Form.Item>

          <Form.Item label='Role' name='role'>
            <Select
              options={[
                {label: 'Admin', value: 'admin'},
                {label: 'User', value: 'user'},
              ]}
            />
          </Form.Item>

          <Form.Item>
            <Button type='primary' htmlType='submit' disabled={disabled}>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </>
    );
  },
};

// Form sizes
export const Sizes: TStory = {
  render: () => {
    const onFinish = (values: unknown) => {
      console.log('Success:', values);
    };

    return (
      <Flex vertical gap={layoutTokens.spacing.lg} style={{width: '400px'}}>
        <div>
          <Text strong>Small Size</Text>
          <Form
            name='small'
            layout='vertical'
            size='small'
            onFinish={onFinish}
            style={{marginTop: layoutTokens.spacing.sm}}
          >
            <Form.Item label='Name' name='name'>
              <Input placeholder='Small input' />
            </Form.Item>
            <Form.Item>
              <Button type='primary' htmlType='submit' size='small'>
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>

        <div>
          <Text strong>Middle Size (Default)</Text>
          <Form
            name='middle'
            layout='vertical'
            size='middle'
            onFinish={onFinish}
            style={{marginTop: layoutTokens.spacing.sm}}
          >
            <Form.Item label='Name' name='name'>
              <Input placeholder='Middle input' />
            </Form.Item>
            <Form.Item>
              <Button type='primary' htmlType='submit'>
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>

        <div>
          <Text strong>Large Size</Text>
          <Form
            name='large'
            layout='vertical'
            size='large'
            onFinish={onFinish}
            style={{marginTop: layoutTokens.spacing.sm}}
          >
            <Form.Item label='Name' name='name'>
              <Input placeholder='Large input' />
            </Form.Item>
            <Form.Item>
              <Button type='primary' htmlType='submit' size='large'>
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Flex>
    );
  },
};

// Registration form example
export const RegistrationForm: TStory = {
  render: () => {
    const [form] = Form.useForm();

    const onFinish = (values: unknown) => {
      console.log('Registration success:', values);
    };

    return (
      <Form
        form={form}
        name='registration'
        layout='vertical'
        onFinish={onFinish}
        style={{width: '500px'}}
        initialValues={{
          agreement: false,
        }}
      >
        <Title level={3}>Create Account</Title>
        <Text
          type='secondary'
          style={{marginBottom: layoutTokens.spacing.lg, display: 'block'}}
        >
          Please fill in the information below
        </Text>

        <Form.Item
          label='Full Name'
          name='fullName'
          rules={[{required: true, message: 'Please enter your full name'}]}
        >
          <Input placeholder='John Doe' />
        </Form.Item>

        <Form.Item
          label='Email Address'
          name='email'
          rules={[
            {required: true, message: 'Please enter your email'},
            {type: 'email', message: 'Please enter a valid email'},
          ]}
        >
          <Input placeholder='john@example.com' />
        </Form.Item>

        <Form.Item
          label='Password'
          name='password'
          rules={[
            {required: true, message: 'Please create a password'},
            {min: 8, message: 'Password must be at least 8 characters'},
          ]}
          help='Password must be at least 8 characters'
        >
          <Input.Password placeholder='Create a strong password' />
        </Form.Item>

        <Form.Item
          label='Confirm Password'
          name='confirmPassword'
          dependencies={['password']}
          rules={[
            {required: true, message: 'Please confirm your password'},
            ({getFieldValue}) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error('Passwords do not match'));
              },
            }),
          ]}
        >
          <Input.Password placeholder='Confirm your password' />
        </Form.Item>

        <Form.Item
          name='role'
          label='Role'
          rules={[{required: true, message: 'Please select your role'}]}
        >
          <Select
            options={[
              {label: 'Developer', value: 'developer'},
              {label: 'Designer', value: 'designer'},
              {label: 'Product Manager', value: 'pm'},
              {label: 'Other', value: 'other'},
            ]}
            placeholder='Select your role'
          />
        </Form.Item>

        <Form.Item>
          <Button type='primary' htmlType='submit' block size='large'>
            Create Account
          </Button>
        </Form.Item>
      </Form>
    );
  },
};

// Interactive playground
export const Playground: TStory = {
  args: {
    layout: 'vertical',
    labelAlign: 'left',
    colon: true,
    disabled: false,
    size: 'middle',
    children: null,
  },
  render: (args) => {
    const onFinish = (values: unknown) => {
      console.log('Success:', values);
    };

    return (
      <Form
        {...args}
        name='playground'
        onFinish={onFinish}
        style={{width: '500px'}}
      >
        <Form.Item
          label='Username'
          name='username'
          rules={[{required: true, message: 'Username is required'}]}
        >
          <Input placeholder='Enter username' />
        </Form.Item>

        <Form.Item
          label='Email'
          name='email'
          rules={[
            {required: true, type: 'email', message: 'Valid email is required'},
          ]}
        >
          <Input placeholder='Enter email' />
        </Form.Item>

        <Form.Item
          label='Role'
          name='role'
          rules={[{required: true, message: 'Role is required'}]}
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

        <Form.Item>
          <Button type='primary' htmlType='submit'>
            Submit
          </Button>
        </Form.Item>
      </Form>
    );
  },
};
