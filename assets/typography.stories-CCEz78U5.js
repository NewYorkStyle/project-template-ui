import{j as e,l as n,R as L}from"./iframe-DdPyZX1J.js";import{T as P}from"./typography-C45YHkQs.js";import{F as t}from"./flex-BfqM8Xj1.js";import"./preload-helper-PPVm8Dsz.js";const{Link:i,Paragraph:a,Text:r,Title:s}=P,H={title:"Components/Typography",component:r,tags:["autodocs"],argTypes:{children:{control:"text",description:"Содержимое текста"},type:{control:"select",options:["secondary","success","warning","danger"],description:"Тип текста"},strong:{control:"boolean",description:"Жирное начертание"},italic:{control:"boolean",description:"Курсив"},underline:{control:"boolean",description:"Подчеркивание"},mark:{control:"boolean",description:"Выделение маркером"},code:{control:"boolean",description:"Моноширинный текст"},delete:{control:"boolean",description:"Зачеркнутый текст"},keyboard:{control:"boolean",description:"Стиль клавиатуры"},disabled:{control:"boolean",description:"Отключенный текст"},ellipsis:{control:"boolean",description:"Многоточие при переполнении"},copyable:{control:"boolean",description:"Возможность копирования"},editable:{control:"boolean",description:"Возможность редактирования"}},parameters:{layout:"centered",backgrounds:{default:"light"}}},l={args:{children:"Basic text component"}},o={render:()=>e.jsxs(t,{vertical:!0,gap:n.spacing.md,children:[e.jsx(r,{children:"Default text"}),e.jsx(r,{type:"secondary",children:"Secondary text"}),e.jsx(r,{type:"success",children:"Success text"}),e.jsx(r,{type:"warning",children:"Warning text"}),e.jsx(r,{type:"danger",children:"Danger text"})]})},c={render:()=>e.jsxs(t,{vertical:!0,gap:n.spacing.md,children:[e.jsx(r,{strong:!0,children:"Strong text"}),e.jsx(r,{italic:!0,children:"Italic text"}),e.jsx(r,{underline:!0,children:"Underlined text"}),e.jsx(r,{mark:!0,children:"Marked text"}),e.jsx(r,{code:!0,children:"Code text"}),e.jsx(r,{delete:!0,children:"Deleted text"}),e.jsx(r,{keyboard:!0,children:"Keyboard text"}),e.jsx(r,{disabled:!0,children:"Disabled text"})]})},d={render:()=>e.jsxs(t,{vertical:!0,gap:n.spacing.md,children:[e.jsx(r,{strong:!0,italic:!0,children:"Strong and italic"}),e.jsx(r,{mark:!0,strong:!0,children:"Marked and strong"}),e.jsx(r,{code:!0,delete:!0,children:"Code and deleted"}),e.jsx(r,{type:"warning",underline:!0,children:"Warning and underlined"})]})},p={render:()=>e.jsxs(t,{vertical:!0,gap:n.spacing.lg,style:{width:300},children:[e.jsx(r,{ellipsis:!0,children:"This is a very long text that will be truncated with ellipsis when it exceeds the container width"}),e.jsx(a,{ellipsis:{rows:2,expandable:!0,symbol:"more"},children:'This is a long paragraph that will be truncated after 2 lines. You can click "more" to expand it. Here is some additional text to make it longer and show the truncation functionality.'})]})},x={render:()=>e.jsxs(t,{vertical:!0,gap:n.spacing.md,children:[e.jsx(r,{copyable:!0,children:"Copy this text"}),e.jsx(r,{copyable:{text:"Custom text to copy"},children:"Click to copy custom text"}),e.jsx(a,{copyable:!0,children:"This entire paragraph can be copied. It contains multiple lines of text that will be copied as a single block."})]})},h={render:()=>{const[f,w]=L.useState("Click to edit this text");return e.jsx(r,{editable:{onChange:w},children:f})}},g={render:()=>e.jsxs(t,{vertical:!0,gap:n.spacing.sm,children:[e.jsx(s,{level:1,children:"h1. Heading 1"}),e.jsx(s,{level:2,children:"h2. Heading 2"}),e.jsx(s,{level:3,children:"h3. Heading 3"}),e.jsx(s,{level:4,children:"h4. Heading 4"}),e.jsx(s,{level:5,children:"h5. Heading 5"})]})},u={render:()=>e.jsxs(t,{vertical:!0,gap:n.spacing.sm,children:[e.jsx(s,{level:1,type:"secondary",children:"Primary Title"}),e.jsx(s,{level:2,type:"success",children:"Success Title"}),e.jsx(s,{level:3,type:"warning",children:"Warning Title"}),e.jsx(s,{level:4,type:"danger",children:"Danger Title"}),e.jsx(s,{level:5,italic:!0,children:"Italic Title"})]})},T={render:()=>e.jsxs(t,{vertical:!0,gap:n.spacing.md,style:{width:400},children:[e.jsx(a,{children:"This is a regular paragraph. It contains normal text that wraps naturally."}),e.jsx(a,{type:"secondary",children:"Secondary paragraph text for less important information."}),e.jsx(a,{strong:!0,children:"Strong paragraph text with emphasis."}),e.jsx(a,{code:!0,children:"Code paragraph text with monospace font."})]})},y={render:()=>e.jsxs(t,{vertical:!0,gap:n.spacing.md,children:[e.jsx(i,{href:"https://ant.design",target:"_blank",children:"Ant Design Link"}),e.jsx(i,{href:"#",type:"secondary",children:"Secondary Link"}),e.jsx(i,{href:"#",type:"success",children:"Success Link"}),e.jsx(i,{href:"#",type:"warning",children:"Warning Link"}),e.jsx(i,{href:"#",type:"danger",children:"Danger Link"}),e.jsx(i,{href:"#",strong:!0,children:"Strong Link"}),e.jsx(i,{href:"#",underline:!0,children:"Underlined Link"})]})},m={render:()=>e.jsx(i,{href:"#",disabled:!0,children:"Disabled Link"})},k={render:()=>e.jsxs(t,{vertical:!0,gap:n.spacing.md,children:[e.jsxs(a,{children:["Inline code: ",e.jsx(r,{code:!0,children:"const x = 10;"})]}),e.jsx(a,{code:!0,children:`function hello() {
  console.log('Hello World');
}`})]})},j={render:()=>e.jsxs(t,{vertical:!0,gap:n.spacing.md,children:[e.jsxs(a,{children:["Press ",e.jsx(r,{keyboard:!0,children:"Ctrl"})," + ",e.jsx(r,{keyboard:!0,children:"C"})," to copy"]}),e.jsxs(a,{children:["Press ",e.jsx(r,{keyboard:!0,children:"⌘"})," + ",e.jsx(r,{keyboard:!0,children:"V"})," to paste on Mac"]}),e.jsxs(a,{children:["Save with ",e.jsx(r,{keyboard:!0,children:"Ctrl"})," + ",e.jsx(r,{keyboard:!0,children:"S"})]})]})},b={render:()=>e.jsxs("div",{style:{maxWidth:500},children:[e.jsx(s,{level:2,children:"Typography Showcase"}),e.jsxs(a,{children:["This is a ",e.jsx(r,{strong:!0,children:"mixed"})," content example with"," ",e.jsx(r,{type:"success",children:"success text"}),", ",e.jsx(r,{mark:!0,children:"marked text"}),", and ",e.jsx(r,{code:!0,children:"code snippets"}),"."]}),e.jsxs(a,{children:["You can also add ",e.jsx(i,{href:"#",children:"links"})," and"," ",e.jsx(r,{keyboard:!0,children:"keyboard shortcuts"}),"."]}),e.jsx(a,{copyable:!0,children:"This whole paragraph can be copied to clipboard."}),e.jsxs(a,{children:[e.jsx(r,{delete:!0,children:"Deleted text"})," and"," ",e.jsx(r,{underline:!0,children:"underlined text"})," are also available."]})]})},v={render:()=>e.jsxs(t,{vertical:!0,gap:n.spacing.md,style:{width:400},children:[e.jsxs("div",{children:[e.jsx(r,{strong:!0,children:"Types:"}),e.jsxs(t,{gap:n.spacing.sm,wrap:"wrap",children:[e.jsx(r,{children:"Default"}),e.jsx(r,{type:"secondary",children:"Secondary"}),e.jsx(r,{type:"success",children:"Success"}),e.jsx(r,{type:"warning",children:"Warning"}),e.jsx(r,{type:"danger",children:"Danger"})]})]}),e.jsxs("div",{children:[e.jsx(r,{strong:!0,children:"Styles:"}),e.jsxs(t,{gap:n.spacing.sm,wrap:"wrap",children:[e.jsx(r,{strong:!0,children:"Strong"}),e.jsx(r,{italic:!0,children:"Italic"}),e.jsx(r,{underline:!0,children:"Underline"}),e.jsx(r,{mark:!0,children:"Mark"}),e.jsx(r,{code:!0,children:"Code"}),e.jsx(r,{delete:!0,children:"Delete"}),e.jsx(r,{keyboard:!0,children:"Keyboard"}),e.jsx(r,{disabled:!0,children:"Disabled"})]})]}),e.jsxs("div",{children:[e.jsx(r,{strong:!0,children:"Interactive:"}),e.jsxs(t,{gap:n.spacing.sm,wrap:"wrap",children:[e.jsx(r,{copyable:!0,children:"Copyable"}),e.jsx(i,{href:"#",children:"Link"})]})]})]})},S={args:{children:"Playground text",type:void 0,strong:!1,italic:!1,underline:!1,mark:!1,code:!1,delete:!1,keyboard:!1,disabled:!1},render:f=>e.jsx(r,{...f})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Basic text component'
  }
}`,...l.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <Flex vertical gap={layoutTokens.spacing.md}>
      <Text>Default text</Text>
      <Text type='secondary'>Secondary text</Text>
      <Text type='success'>Success text</Text>
      <Text type='warning'>Warning text</Text>
      <Text type='danger'>Danger text</Text>
    </Flex>
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <Flex vertical gap={layoutTokens.spacing.md}>
      <Text strong>Strong text</Text>
      <Text italic>Italic text</Text>
      <Text underline>Underlined text</Text>
      <Text mark>Marked text</Text>
      <Text code>Code text</Text>
      <Text delete>Deleted text</Text>
      <Text keyboard>Keyboard text</Text>
      <Text disabled>Disabled text</Text>
    </Flex>
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <Flex vertical gap={layoutTokens.spacing.md}>
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
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <Flex vertical gap={layoutTokens.spacing.lg} style={{
    width: 300
  }}>
      <Text ellipsis>
        This is a very long text that will be truncated with ellipsis when it
        exceeds the container width
      </Text>
      <Paragraph ellipsis={{
      rows: 2,
      expandable: true,
      symbol: 'more'
    }}>
        This is a long paragraph that will be truncated after 2 lines. You can
        click "more" to expand it. Here is some additional text to make it
        longer and show the truncation functionality.
      </Paragraph>
    </Flex>
}`,...p.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <Flex vertical gap={layoutTokens.spacing.md}>
      <Text copyable>Copy this text</Text>
      <Text copyable={{
      text: 'Custom text to copy'
    }}>
        Click to copy custom text
      </Text>
      <Paragraph copyable>
        This entire paragraph can be copied. It contains multiple lines of text
        that will be copied as a single block.
      </Paragraph>
    </Flex>
}`,...x.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [text, setText] = React.useState('Click to edit this text');
    return <Text editable={{
      onChange: setText
    }}>{text}</Text>;
  }
}`,...h.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <Flex vertical gap={layoutTokens.spacing.sm}>
      <Title level={1}>h1. Heading 1</Title>
      <Title level={2}>h2. Heading 2</Title>
      <Title level={3}>h3. Heading 3</Title>
      <Title level={4}>h4. Heading 4</Title>
      <Title level={5}>h5. Heading 5</Title>
    </Flex>
}`,...g.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <Flex vertical gap={layoutTokens.spacing.sm}>
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
}`,...u.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => <Flex vertical gap={layoutTokens.spacing.md} style={{
    width: 400
  }}>
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
}`,...T.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <Flex vertical gap={layoutTokens.spacing.md}>
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
}`,...y.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <Link href='#' disabled>
      Disabled Link
    </Link>
}`,...m.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => <Flex vertical gap={layoutTokens.spacing.md}>
      <Paragraph>
        Inline code: <Text code>const x = 10;</Text>
      </Paragraph>
      <Paragraph code>
        {\`function hello() {
  console.log('Hello World');
}\`}
      </Paragraph>
    </Flex>
}`,...k.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => <Flex vertical gap={layoutTokens.spacing.md}>
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
}`,...j.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    maxWidth: 500
  }}>
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
}`,...b.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <Flex vertical gap={layoutTokens.spacing.md} style={{
    width: 400
  }}>
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
}`,...v.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
    disabled: false
  },
  render: args => <Text {...args} />
}`,...S.parameters?.docs?.source}}};const I=["BasicText","TextTypes","TextStyles","CombinedStyles","Ellipsis","Copyable","Editable","Titles","TitlesWithStyles","Paragraphs","Links","DisabledLink","CodeBlocks","KeyboardShortcuts","MixedContent","AllTextVariants","Playground"];export{v as AllTextVariants,l as BasicText,k as CodeBlocks,d as CombinedStyles,x as Copyable,m as DisabledLink,h as Editable,p as Ellipsis,j as KeyboardShortcuts,y as Links,b as MixedContent,T as Paragraphs,S as Playground,c as TextStyles,o as TextTypes,g as Titles,u as TitlesWithStyles,I as __namedExportsOrder,H as default};
