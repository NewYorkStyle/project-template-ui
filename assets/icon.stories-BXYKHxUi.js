import{j as e,l as n}from"./iframe-Dl7DKvET.js";import{I as r,a as l}from"./icon-ChLNY6qj.js";import{F as s}from"./flex-kTLNRB8Y.js";import{T as p}from"./typography-BeaTB5Xy.js";import"./preload-helper-PPVm8Dsz.js";const{Text:c}=p,h={title:"Components/Icon",component:r,tags:["autodocs"],argTypes:{name:{control:"select",options:Object.keys(l),description:"Название иконки"},size:{control:"number",description:"Размер иконки в пикселях"},color:{control:"color",description:"Цвет иконки"}},parameters:{layout:"centered",backgrounds:{default:"light"}}},t={render:()=>e.jsx(s,{gap:n.spacing.lg,wrap:"wrap",justify:"center",children:Object.keys(l).map(a=>e.jsxs(s,{vertical:!0,gap:n.spacing.sm,align:"center",children:[e.jsx(r,{name:a,size:32}),e.jsx(c,{children:a})]},a))})},o={render:()=>e.jsxs(s,{gap:n.spacing.lg,align:"center",children:[e.jsxs(s,{vertical:!0,gap:n.spacing.sm,align:"center",children:[e.jsx(r,{name:"home",size:16}),e.jsx(c,{children:"16px"})]}),e.jsxs(s,{vertical:!0,gap:n.spacing.sm,align:"center",children:[e.jsx(r,{name:"home",size:24}),e.jsx(c,{children:"24px"})]}),e.jsxs(s,{vertical:!0,gap:n.spacing.sm,align:"center",children:[e.jsx(r,{name:"home",size:32}),e.jsx(c,{children:"32px"})]}),e.jsxs(s,{vertical:!0,gap:n.spacing.sm,align:"center",children:[e.jsx(r,{name:"home",size:48}),e.jsx(c,{children:"48px"})]}),e.jsxs(s,{vertical:!0,gap:n.spacing.sm,align:"center",children:[e.jsx(r,{name:"home",size:64}),e.jsx(c,{children:"64px"})]})]})},i={args:{name:"home",size:48,color:"#4594D1"},render:a=>e.jsxs(s,{vertical:!0,gap:n.spacing.lg,align:"center",children:[e.jsx(r,{...a}),e.jsxs(s,{vertical:!0,gap:n.spacing.xs,align:"center",children:[e.jsxs(c,{strong:!0,children:["Current icon: ",a.name]}),e.jsxs(c,{type:"secondary",children:["Size: ",a.size,"px | Color: ",a.color]})]})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <Flex gap={layoutTokens.spacing.lg} wrap='wrap' justify='center'>
      {Object.keys(ICON_NAMES).map(iconName => <Flex key={iconName} vertical gap={layoutTokens.spacing.sm} align='center'>
          <Icon name={iconName as keyof typeof ICON_NAMES} size={32} />
          <Text>{iconName}</Text>
        </Flex>)}
    </Flex>
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <Flex gap={layoutTokens.spacing.lg} align='center'>
      <Flex vertical gap={layoutTokens.spacing.sm} align='center'>
        <Icon name='home' size={16} />
        <Text>16px</Text>
      </Flex>
      <Flex vertical gap={layoutTokens.spacing.sm} align='center'>
        <Icon name='home' size={24} />
        <Text>24px</Text>
      </Flex>
      <Flex vertical gap={layoutTokens.spacing.sm} align='center'>
        <Icon name='home' size={32} />
        <Text>32px</Text>
      </Flex>
      <Flex vertical gap={layoutTokens.spacing.sm} align='center'>
        <Icon name='home' size={48} />
        <Text>48px</Text>
      </Flex>
      <Flex vertical gap={layoutTokens.spacing.sm} align='center'>
        <Icon name='home' size={64} />
        <Text>64px</Text>
      </Flex>
    </Flex>
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'home',
    size: 48,
    color: '#4594D1'
  },
  render: args => <Flex vertical gap={layoutTokens.spacing.lg} align='center'>
      <Icon {...args} />
      <Flex vertical gap={layoutTokens.spacing.xs} align='center'>
        <Text strong>Current icon: {args.name}</Text>
        <Text type='secondary'>
          Size: {args.size}px | Color: {args.color}
        </Text>
      </Flex>
    </Flex>
}`,...i.parameters?.docs?.source}}};const j=["AllIcons","Sizes","Playground"];export{t as AllIcons,i as Playground,o as Sizes,j as __namedExportsOrder,h as default};
