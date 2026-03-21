import React from 'react';

import type {Meta, StoryObj} from '@storybook/react-vite';

import {layoutTokens} from '../../theme';
import {Flex} from '../flex';

import {Typography} from './typography';

const {Link, Paragraph, Text, Title} = Typography;

const meta: Meta<typeof Text> = {
  title: 'Components/Typography',
  component: Text,
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
      description: 'Содержимое текста',
    },
    type: {
      control: 'select',
      options: ['secondary', 'success', 'warning', 'danger'],
      description: 'Тип текста',
    },
    strong: {
      control: 'boolean',
      description: 'Жирное начертание',
    },
    italic: {
      control: 'boolean',
      description: 'Курсив',
    },
    underline: {
      control: 'boolean',
      description: 'Подчеркивание',
    },
    mark: {
      control: 'boolean',
      description: 'Выделение маркером',
    },
    code: {
      control: 'boolean',
      description: 'Моноширинный текст',
    },
    delete: {
      control: 'boolean',
      description: 'Зачеркнутый текст',
    },
    keyboard: {
      control: 'boolean',
      description: 'Стиль клавиатуры',
    },
    disabled: {
      control: 'boolean',
      description: 'Отключенный текст',
    },
    ellipsis: {
      control: 'boolean',
      description: 'Многоточие при переполнении',
    },
    copyable: {
      control: 'boolean',
      description: 'Возможность копирования',
    },
    editable: {
      control: 'boolean',
      description: 'Возможность редактирования',
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
type TStory = StoryObj<typeof Typography.Text>;

// Basic text
export const BasicText: TStory = {
  args: {
    children: 'Basic text component',
  },
};

// Text types
export const TextTypes: TStory = {
  render: () => (
    <Flex vertical gap={layoutTokens.spacing.md}>
      <Text>Default text</Text>
      <Text type='secondary'>Secondary text</Text>
      <Text type='success'>Success text</Text>
      <Text type='warning'>Warning text</Text>
      <Text type='danger'>Danger text</Text>
    </Flex>
  ),
};

// Text styles
export const TextStyles: TStory = {
  render: () => (
    <Flex vertical gap={layoutTokens.spacing.md}>
      <Text strong>Strong text</Text>
      <Text italic>Italic text</Text>
      <Text underline>Underlined text</Text>
      <Text mark>Marked text</Text>
      <Text code>Code text</Text>
      <Text delete>Deleted text</Text>
      <Text keyboard>Keyboard text</Text>
      <Text disabled>Disabled text</Text>
    </Flex>
  ),
};

// Combined styles
export const CombinedStyles: TStory = {
  render: () => (
    <Flex vertical gap={layoutTokens.spacing.md}>
      <Text strong italic>
        Strong and italic
      </Text>
      <Text mark strong>
        Marked and strong
      </Text>
      <Text code delete>
        Code and deleted
      </Text>
      <Text type='warning' underline>
        Warning and underlined
      </Text>
    </Flex>
  ),
};

// Ellipsis
export const Ellipsis: TStory = {
  render: () => (
    <Flex vertical gap={layoutTokens.spacing.lg} style={{width: 300}}>
      <Text ellipsis>
        This is a very long text that will be truncated with ellipsis when it
        exceeds the container width
      </Text>
      <Paragraph ellipsis={{rows: 2, expandable: true, symbol: 'more'}}>
        This is a long paragraph that will be truncated after 2 lines. You can
        click "more" to expand it. Here is some additional text to make it
        longer and show the truncation functionality.
      </Paragraph>
    </Flex>
  ),
};

// Copyable
export const Copyable: TStory = {
  render: () => (
    <Flex vertical gap={layoutTokens.spacing.md}>
      <Text copyable>Copy this text</Text>
      <Text copyable={{text: 'Custom text to copy'}}>
        Click to copy custom text
      </Text>
      <Paragraph copyable>
        This entire paragraph can be copied. It contains multiple lines of text
        that will be copied as a single block.
      </Paragraph>
    </Flex>
  ),
};

// Editable
export const Editable: TStory = {
  render: () => {
    const [text, setText] = React.useState('Click to edit this text');

    return <Text editable={{onChange: setText}}>{text}</Text>;
  },
};

// Titles
export const Titles: TStory = {
  render: () => (
    <Flex vertical gap={layoutTokens.spacing.sm}>
      <Title level={1}>h1. Heading 1</Title>
      <Title level={2}>h2. Heading 2</Title>
      <Title level={3}>h3. Heading 3</Title>
      <Title level={4}>h4. Heading 4</Title>
      <Title level={5}>h5. Heading 5</Title>
    </Flex>
  ),
};

// Titles with styles
export const TitlesWithStyles: TStory = {
  render: () => (
    <Flex vertical gap={layoutTokens.spacing.sm}>
      <Title level={1} type='secondary'>
        Primary Title
      </Title>
      <Title level={2} type='success'>
        Success Title
      </Title>
      <Title level={3} type='warning'>
        Warning Title
      </Title>
      <Title level={4} type='danger'>
        Danger Title
      </Title>
      <Title level={5} italic>
        Italic Title
      </Title>
    </Flex>
  ),
};

// Paragraphs
export const Paragraphs: TStory = {
  render: () => (
    <Flex vertical gap={layoutTokens.spacing.md} style={{width: 400}}>
      <Paragraph>
        This is a regular paragraph. It contains normal text that wraps
        naturally.
      </Paragraph>
      <Paragraph type='secondary'>
        Secondary paragraph text for less important information.
      </Paragraph>
      <Paragraph strong>Strong paragraph text with emphasis.</Paragraph>
      <Paragraph code>Code paragraph text with monospace font.</Paragraph>
    </Flex>
  ),
};

// Links
export const Links: TStory = {
  render: () => (
    <Flex vertical gap={layoutTokens.spacing.md}>
      <Link href='https://ant.design' target='_blank'>
        Ant Design Link
      </Link>
      <Link href='#' type='secondary'>
        Secondary Link
      </Link>
      <Link href='#' type='success'>
        Success Link
      </Link>
      <Link href='#' type='warning'>
        Warning Link
      </Link>
      <Link href='#' type='danger'>
        Danger Link
      </Link>
      <Link href='#' strong>
        Strong Link
      </Link>
      <Link href='#' underline>
        Underlined Link
      </Link>
    </Flex>
  ),
};

// Link with disabled
export const DisabledLink: TStory = {
  render: () => (
    <Link href='#' disabled>
      Disabled Link
    </Link>
  ),
};

// Code blocks
export const CodeBlocks: TStory = {
  render: () => (
    <Flex vertical gap={layoutTokens.spacing.md}>
      <Paragraph>
        Inline code: <Text code>const x = 10;</Text>
      </Paragraph>
      <Paragraph code>
        {`function hello() {
  console.log('Hello World');
}`}
      </Paragraph>
    </Flex>
  ),
};

// Keyboard shortcuts
export const KeyboardShortcuts: TStory = {
  render: () => (
    <Flex vertical gap={layoutTokens.spacing.md}>
      <Paragraph>
        Press <Text keyboard>Ctrl</Text> + <Text keyboard>C</Text> to copy
      </Paragraph>
      <Paragraph>
        Press <Text keyboard>⌘</Text> + <Text keyboard>V</Text> to paste on Mac
      </Paragraph>
      <Paragraph>
        Save with <Text keyboard>Ctrl</Text> + <Text keyboard>S</Text>
      </Paragraph>
    </Flex>
  ),
};

// Mixed content
export const MixedContent: TStory = {
  render: () => (
    <div style={{maxWidth: 500}}>
      <Title level={2}>Typography Showcase</Title>
      <Paragraph>
        This is a <Text strong>mixed</Text> content example with{' '}
        <Text type='success'>success text</Text>, <Text mark>marked text</Text>,
        and <Text code>code snippets</Text>.
      </Paragraph>
      <Paragraph>
        You can also add <Link href='#'>links</Link> and{' '}
        <Text keyboard>keyboard shortcuts</Text>.
      </Paragraph>
      <Paragraph copyable>
        This whole paragraph can be copied to clipboard.
      </Paragraph>
      <Paragraph>
        <Text delete>Deleted text</Text> and{' '}
        <Text underline>underlined text</Text> are also available.
      </Paragraph>
    </div>
  ),
};

// All text variants
export const AllTextVariants: TStory = {
  render: () => (
    <Flex vertical gap={layoutTokens.spacing.md} style={{width: 400}}>
      <div>
        <Text strong>Types:</Text>
        <Flex gap={layoutTokens.spacing.sm} wrap='wrap'>
          <Text>Default</Text>
          <Text type='secondary'>Secondary</Text>
          <Text type='success'>Success</Text>
          <Text type='warning'>Warning</Text>
          <Text type='danger'>Danger</Text>
        </Flex>
      </div>
      <div>
        <Text strong>Styles:</Text>
        <Flex gap={layoutTokens.spacing.sm} wrap='wrap'>
          <Text strong>Strong</Text>
          <Text italic>Italic</Text>
          <Text underline>Underline</Text>
          <Text mark>Mark</Text>
          <Text code>Code</Text>
          <Text delete>Delete</Text>
          <Text keyboard>Keyboard</Text>
          <Text disabled>Disabled</Text>
        </Flex>
      </div>
      <div>
        <Text strong>Interactive:</Text>
        <Flex gap={layoutTokens.spacing.sm} wrap='wrap'>
          <Text copyable>Copyable</Text>
          <Link href='#'>Link</Link>
        </Flex>
      </div>
    </Flex>
  ),
};

// Interactive playground
export const Playground: TStory = {
  args: {
    children: 'Playground text',
    type: undefined,
    strong: false,
    italic: false,
    underline: false,
    mark: false,
    code: false,
    delete: false,
    keyboard: false,
    disabled: false,
  },
  render: (args) => <Text {...args} />,
};
