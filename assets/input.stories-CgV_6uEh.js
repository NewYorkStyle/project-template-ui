import{j as e,l as s,R as f}from"./iframe-DdPyZX1J.js";import{I as r}from"./input-DT4LCOzI.js";import{F as t}from"./flex-BfqM8Xj1.js";import{T as P}from"./typography-C45YHkQs.js";import"./preload-helper-PPVm8Dsz.js";import"./pickAttrs-BoNuQqbq.js";import"./SearchOutlined-DRRTld7i.js";import"./Button-DrbN7IsE.js";import"./client-C2mglbAP.js";const{Text:n}=P,O={title:"Components/Input",component:r,tags:["autodocs"],argTypes:{size:{control:"select",options:["small","middle","large"],description:"Размер компонента"},disabled:{control:"boolean",description:"Отключенное состояние"},placeholder:{control:"text",description:"Текст-подсказка"},defaultValue:{control:"text",description:"Значение по умолчанию"},allowClear:{control:"boolean",description:"Показывать кнопку очистки"},maxLength:{control:"number",description:"Максимальная длина"},showCount:{control:"boolean",description:"Показывать счетчик символов"},status:{control:"select",options:["error","warning",""],description:"Состояние валидации"},onPressEnter:{action:"pressed enter"},onChange:{action:"changed"},onFocus:{action:"focused"},onBlur:{action:"blurred"}},parameters:{layout:"centered",backgrounds:{default:"light"}}},o={args:{placeholder:"Basic input",style:{width:"300px"}}},l={render:()=>e.jsxs(t,{vertical:!0,gap:s.spacing.md,style:{width:"300px"},children:[e.jsx(r,{size:"large",placeholder:"Large size"}),e.jsx(r,{size:"middle",placeholder:"Middle size"}),e.jsx(r,{size:"small",placeholder:"Small size"})]})},c={render:()=>e.jsxs(t,{vertical:!0,gap:s.spacing.md,style:{width:"300px"},children:[e.jsx(r,{placeholder:"Default state"}),e.jsx(r,{placeholder:"Disabled state",disabled:!0}),e.jsx(r,{placeholder:"With value",defaultValue:"Some value"}),e.jsx(r,{placeholder:"With clear button",allowClear:!0,defaultValue:"Clear me"})]})},d={render:()=>e.jsxs(t,{vertical:!0,gap:s.spacing.md,style:{width:"300px"},children:[e.jsx(r,{placeholder:"Error status",status:"error"}),e.jsx(r,{placeholder:"Warning status",status:"warning"}),e.jsx(r,{placeholder:"Success status",status:"success"})]})},i={render:()=>e.jsxs(t,{vertical:!0,gap:s.spacing.md,style:{width:"300px"},children:[e.jsx(r,{showCount:!0,maxLength:20,placeholder:"With character count"}),e.jsx(r,{showCount:!0,maxLength:50,defaultValue:"Some text",placeholder:"With count and value"})]})},p={render:()=>e.jsx(r.TextArea,{rows:4,placeholder:"TextArea with multiple lines",style:{width:"400px"},showCount:!0,maxLength:200})},u={render:()=>e.jsxs(t,{vertical:!0,gap:s.spacing.md,style:{width:"400px"},children:[e.jsx(r.TextArea,{rows:2,placeholder:"Small textarea (2 rows)"}),e.jsx(r.TextArea,{rows:4,placeholder:"Medium textarea (4 rows)"}),e.jsx(r.TextArea,{rows:6,placeholder:"Large textarea (6 rows)"})]})},h={render:()=>e.jsx(r.Password,{placeholder:"Enter password",style:{width:"300px"}})},x={render:()=>e.jsx(r.Password,{placeholder:"Toggle password visibility",style:{width:"300px"},visibilityToggle:{visible:!1}})},g={render:()=>e.jsx(r.Search,{placeholder:"Search...",style:{width:"300px"},onSearch:a=>console.log("Search:",a)})},m={render:()=>{const[a,j]=f.useState(!1),v=I=>{j(!0),console.log("Search:",I),setTimeout(()=>j(!1),1e3)};return e.jsx(r.Search,{placeholder:"Search with loading...",style:{width:"300px"},loading:a,onSearch:v})}},w={render:()=>e.jsx(r.Search,{placeholder:"Search with enter button",style:{width:"300px"},enterButton:"Search",onSearch:a=>console.log("Search:",a)})},S={render:()=>e.jsx(r.OTP,{length:6})},T={render:()=>e.jsxs(t,{vertical:!0,gap:s.spacing.lg,style:{width:"400px"},children:[e.jsxs("div",{children:[e.jsx(n,{strong:!0,children:"Basic Input"}),e.jsx(r,{placeholder:"Basic input",style:{marginTop:s.spacing.xs}})]}),e.jsxs("div",{children:[e.jsx(n,{strong:!0,children:"TextArea"}),e.jsx(r.TextArea,{rows:3,placeholder:"Multi-line text",style:{marginTop:s.spacing.xs}})]}),e.jsxs("div",{children:[e.jsx(n,{strong:!0,children:"Password"}),e.jsx(r.Password,{placeholder:"Password",style:{marginTop:s.spacing.xs}})]}),e.jsxs("div",{children:[e.jsx(n,{strong:!0,children:"Search"}),e.jsx(r.Search,{placeholder:"Search",style:{marginTop:s.spacing.xs}})]}),e.jsxs("div",{children:[e.jsx(n,{strong:!0,children:"OTP"}),e.jsx(r.OTP,{length:4,style:{marginTop:s.spacing.xs}})]})]})},y={args:{placeholder:"Type something...",size:"middle",disabled:!1,allowClear:!1,showCount:!1,maxLength:50,status:void 0,style:{width:"300px"}},render:a=>e.jsx(r,{...a})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Basic input',
    style: {
      width: '300px'
    }
  }
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <Flex vertical gap={layoutTokens.spacing.md} style={{
    width: '300px'
  }}>
      <Input size='large' placeholder='Large size' />
      <Input size='middle' placeholder='Middle size' />
      <Input size='small' placeholder='Small size' />
    </Flex>
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <Flex vertical gap={layoutTokens.spacing.md} style={{
    width: '300px'
  }}>
      <Input placeholder='Default state' />
      <Input placeholder='Disabled state' disabled />
      <Input placeholder='With value' defaultValue='Some value' />
      <Input placeholder='With clear button' allowClear defaultValue='Clear me' />
    </Flex>
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <Flex vertical gap={layoutTokens.spacing.md} style={{
    width: '300px'
  }}>
      <Input placeholder='Error status' status='error' />
      <Input placeholder='Warning status' status='warning' />
      <Input placeholder='Success status' status='success' />
    </Flex>
}`,...d.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <Flex vertical gap={layoutTokens.spacing.md} style={{
    width: '300px'
  }}>
      <Input showCount maxLength={20} placeholder='With character count' />
      <Input showCount maxLength={50} defaultValue='Some text' placeholder='With count and value' />
    </Flex>
}`,...i.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <Input.TextArea rows={4} placeholder='TextArea with multiple lines' style={{
    width: '400px'
  }} showCount maxLength={200} />
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <Flex vertical gap={layoutTokens.spacing.md} style={{
    width: '400px'
  }}>
      <Input.TextArea rows={2} placeholder='Small textarea (2 rows)' />
      <Input.TextArea rows={4} placeholder='Medium textarea (4 rows)' />
      <Input.TextArea rows={6} placeholder='Large textarea (6 rows)' />
    </Flex>
}`,...u.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <Input.Password placeholder='Enter password' style={{
    width: '300px'
  }} />
}`,...h.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <Input.Password placeholder='Toggle password visibility' style={{
    width: '300px'
  }} visibilityToggle={{
    visible: false
  }} />
}`,...x.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <Input.Search placeholder='Search...' style={{
    width: '300px'
  }} onSearch={value => console.log('Search:', value)} />
}`,...g.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [loading, setLoading] = React.useState(false);
    const handleSearch = (value: string) => {
      setLoading(true);
      console.log('Search:', value);
      setTimeout(() => setLoading(false), 1000);
    };
    return <Input.Search placeholder='Search with loading...' style={{
      width: '300px'
    }} loading={loading} onSearch={handleSearch} />;
  }
}`,...m.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <Input.Search placeholder='Search with enter button' style={{
    width: '300px'
  }} enterButton='Search' onSearch={value => console.log('Search:', value)} />
}`,...w.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <Input.OTP length={6} />
}`,...S.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => <Flex vertical gap={layoutTokens.spacing.lg} style={{
    width: '400px'
  }}>
      <div>
        <Text strong>Basic Input</Text>
        <Input placeholder='Basic input' style={{
        marginTop: layoutTokens.spacing.xs
      }} />
      </div>
      <div>
        <Text strong>TextArea</Text>
        <Input.TextArea rows={3} placeholder='Multi-line text' style={{
        marginTop: layoutTokens.spacing.xs
      }} />
      </div>
      <div>
        <Text strong>Password</Text>
        <Input.Password placeholder='Password' style={{
        marginTop: layoutTokens.spacing.xs
      }} />
      </div>
      <div>
        <Text strong>Search</Text>
        <Input.Search placeholder='Search' style={{
        marginTop: layoutTokens.spacing.xs
      }} />
      </div>
      <div>
        <Text strong>OTP</Text>
        <Input.OTP length={4} style={{
        marginTop: layoutTokens.spacing.xs
      }} />
      </div>
    </Flex>
}`,...T.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Type something...',
    size: 'middle',
    disabled: false,
    allowClear: false,
    showCount: false,
    maxLength: 50,
    status: undefined,
    style: {
      width: '300px'
    }
  },
  render: args => <Input {...args} />
}`,...y.parameters?.docs?.source}}};const E=["Basic","Sizes","States","Statuses","WithCount","TextArea","TextAreaSizes","Password","PasswordWithToggle","Search","SearchLoading","SearchWithButton","OTP","AllTypes","Playground"];export{T as AllTypes,o as Basic,S as OTP,h as Password,x as PasswordWithToggle,y as Playground,g as Search,m as SearchLoading,w as SearchWithButton,l as Sizes,c as States,d as Statuses,p as TextArea,u as TextAreaSizes,i as WithCount,E as __namedExportsOrder,O as default};
