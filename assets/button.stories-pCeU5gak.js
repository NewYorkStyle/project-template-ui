import{j as e,l as b}from"./iframe-Dl7DKvET.js";import{B as r}from"./button-hanavTsf.js";import{F as j}from"./flex-kTLNRB8Y.js";import{I as z}from"./icon-ChLNY6qj.js";import"./preload-helper-PPVm8Dsz.js";import"./Button-BBfvcWdO.js";import"./client-D0ErMLyZ.js";const A={title:"Components/Button",component:r,tags:["autodocs"],argTypes:{block:{control:"boolean",description:"Занимает всю ширину"},danger:{control:"boolean",description:"Опасный стиль"},disabled:{control:"boolean",description:"Отключена ли кнопка"},ghost:{control:"boolean",description:"Прозрачный фон"},htmlType:{control:"select",options:["button","submit","reset"],description:"HTML тип кнопки"},loading:{control:"boolean",description:"Состояние загрузки"},shape:{control:"select",options:["default","circle","round"],description:"Форма кнопки"},size:{control:"select",options:["small","middle","large"],description:"Размер кнопки"},type:{control:"select",options:["default","primary","dashed","text","link"],description:"Тип кнопки"},onClick:{action:"clicked"}},parameters:{layout:"centered",backgrounds:{default:"light"}}},a={args:{children:"Primary Button",type:"primary"}},n={args:{children:"Default Button",type:"default"}},t={args:{children:"Dashed Button",type:"dashed"}},s={args:{children:"Text Button",type:"text"}},o={args:{children:"Link Button",type:"link"}},c={args:{children:"Large Button",size:"large"}},i={args:{children:"Middle Button",size:"middle"}},p={args:{children:"Small Button",size:"small"}},d={args:{children:"A",shape:"circle",type:"primary"}},l={args:{children:"Round Button",shape:"round",type:"primary"}},m={args:{children:"Block Button",block:!0,type:"primary"}},u={args:{children:"Ghost Button",ghost:!0,type:"primary"}},g={args:{children:"Loading...",loading:!0,type:"primary"}},y={args:{children:"Disabled Button",disabled:!0,type:"primary"}},h={args:{children:"Danger Button",danger:!0,type:"primary"}},B={args:{children:"Search",icon:e.jsx(z,{name:"profile"}),type:"primary"}},x={args:{icon:e.jsx(z,{name:"profile"}),shape:"circle",type:"primary"},parameters:{controls:{exclude:["children"]}}},S={render:()=>e.jsxs(j,{gap:b.spacing.sm,align:"center",children:[e.jsx(r,{type:"primary",children:"Save"}),e.jsx(r,{children:"Cancel"}),e.jsx(r,{type:"dashed",children:"Draft"})]})},k={render:()=>e.jsxs(j,{gap:b.spacing.md,wrap:"wrap",children:[e.jsx(r,{type:"primary",children:"Primary"}),e.jsx(r,{type:"default",children:"Default"}),e.jsx(r,{type:"dashed",children:"Dashed"}),e.jsx(r,{type:"text",children:"Text"}),e.jsx(r,{type:"link",children:"Link"})]})},f={render:()=>e.jsxs(j,{gap:b.spacing.md,align:"center",children:[e.jsx(r,{size:"large",type:"primary",children:"Large"}),e.jsx(r,{size:"middle",type:"primary",children:"Middle"}),e.jsx(r,{size:"small",type:"primary",children:"Small"})]})},D={args:{children:"Click me!",type:"primary",size:"middle"}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Primary Button',
    type: 'primary'
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Default Button',
    type: 'default'
  }
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Dashed Button',
    type: 'dashed'
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Text Button',
    type: 'text'
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Link Button',
    type: 'link'
  }
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Large Button',
    size: 'large'
  }
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Middle Button',
    size: 'middle'
  }
}`,...i.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Small Button',
    size: 'small'
  }
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'A',
    shape: 'circle',
    type: 'primary'
  }
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Round Button',
    shape: 'round',
    type: 'primary'
  }
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Block Button',
    block: true,
    type: 'primary'
  }
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Ghost Button',
    ghost: true,
    type: 'primary'
  }
}`,...u.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Loading...',
    loading: true,
    type: 'primary'
  }
}`,...g.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Disabled Button',
    disabled: true,
    type: 'primary'
  }
}`,...y.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Danger Button',
    danger: true,
    type: 'primary'
  }
}`,...h.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Search',
    icon: <Icon name='profile' />,
    type: 'primary'
  }
}`,...B.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    icon: <Icon name='profile' />,
    shape: 'circle',
    type: 'primary'
  },
  parameters: {
    controls: {
      exclude: ['children']
    }
  }
}`,...x.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <Flex gap={layoutTokens.spacing.sm} align='center'>
      <Button type='primary'>Save</Button>
      <Button>Cancel</Button>
      <Button type='dashed'>Draft</Button>
    </Flex>
}`,...S.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => <Flex gap={layoutTokens.spacing.md} wrap='wrap'>
      <Button type='primary'>Primary</Button>
      <Button type='default'>Default</Button>
      <Button type='dashed'>Dashed</Button>
      <Button type='text'>Text</Button>
      <Button type='link'>Link</Button>
    </Flex>
}`,...k.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <Flex gap={layoutTokens.spacing.md} align='center'>
      <Button size='large' type='primary'>
        Large
      </Button>
      <Button size='middle' type='primary'>
        Middle
      </Button>
      <Button size='small' type='primary'>
        Small
      </Button>
    </Flex>
}`,...f.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Click me!',
    type: 'primary',
    size: 'middle'
  }
}`,...D.parameters?.docs?.source}}};const G=["Primary","Default","Dashed","Text","Link","Large","Middle","Small","Circle","Round","Block","Ghost","Loading","Disabled","Danger","WithIcon","IconOnly","ButtonGroup","AllTypes","AllSizes","Playground"];export{f as AllSizes,k as AllTypes,m as Block,S as ButtonGroup,d as Circle,h as Danger,t as Dashed,n as Default,y as Disabled,u as Ghost,x as IconOnly,c as Large,o as Link,g as Loading,i as Middle,D as Playground,a as Primary,l as Round,p as Small,s as Text,B as WithIcon,G as __namedExportsOrder,A as default};
