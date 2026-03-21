import{j as e,l as a,R as z}from"./iframe-Dl7DKvET.js";import{S as l}from"./select-avCysBNi.js";import{F as t}from"./flex-kTLNRB8Y.js";import{T as F}from"./typography-BeaTB5Xy.js";import{B as j}from"./button-hanavTsf.js";import"./preload-helper-PPVm8Dsz.js";import"./pickAttrs-BoNuQqbq.js";import"./Overflow-CtMwxhuj.js";import"./extends-CF3RwP-h.js";import"./SearchOutlined-BgdScuqm.js";import"./Button-BBfvcWdO.js";import"./client-D0ErMLyZ.js";const{Text:r}=F,U={title:"Components/Select",component:l,tags:["autodocs"],argTypes:{options:{control:"object",description:"Опции для выбора"},placeholder:{control:"text",description:"Текст-подсказка"},mode:{control:"select",options:["multiple","tags",void 0],description:"Режим выбора"},size:{control:"select",options:["small","middle","large"],description:"Размер компонента"},disabled:{control:"boolean",description:"Отключенное состояние"},loading:{control:"boolean",description:"Состояние загрузки"},allowClear:{control:"boolean",description:"Показывать кнопку очистки"},showSearch:{control:"boolean",description:"Показывать поиск"},status:{control:"select",options:["error","warning",""],description:"Состояние валидации"},onChange:{action:"changed"},onSearch:{action:"searched"}},parameters:{layout:"centered",backgrounds:{default:"light"}}},s={args:{placeholder:"Select an option",options:[{label:"Option 1",value:"1"},{label:"Option 2",value:"2"},{label:"Option 3",value:"3"}],style:{width:"200px"}}},i={render:()=>e.jsxs(t,{vertical:!0,gap:a.spacing.md,style:{width:"200px"},children:[e.jsx(l,{size:"large",placeholder:"Large size",options:[{label:"Option",value:"1"}]}),e.jsx(l,{size:"middle",placeholder:"Middle size",options:[{label:"Option",value:"1"}]}),e.jsx(l,{size:"small",placeholder:"Small size",options:[{label:"Option",value:"1"}]})]})},p={args:{defaultValue:"2",options:[{label:"Option 1",value:"1"},{label:"Option 2",value:"2"},{label:"Option 3",value:"3"}],style:{width:"200px"}}},c={args:{placeholder:"Select with clear",allowClear:!0,defaultValue:"2",options:[{label:"Option 1",value:"1"},{label:"Option 2",value:"2"},{label:"Option 3",value:"3"}],style:{width:"200px"}}},d={render:()=>e.jsxs(t,{vertical:!0,gap:a.spacing.md,style:{width:"200px"},children:[e.jsx(l,{disabled:!0,placeholder:"Disabled select",options:[{label:"Option",value:"1"}]}),e.jsx(l,{disabled:!0,defaultValue:"1",options:[{label:"Option 1",value:"1"}]})]})},u={args:{loading:!0,placeholder:"Loading...",style:{width:"200px"}}},b={render:()=>e.jsxs(t,{vertical:!0,gap:a.spacing.md,style:{width:"200px"},children:[e.jsx(l,{status:"error",placeholder:"Error status",options:[{label:"Option",value:"1"}]}),e.jsx(l,{status:"warning",placeholder:"Warning status",options:[{label:"Option",value:"1"}]})]})},m={args:{showSearch:!0,placeholder:"Search to select",optionFilterProp:"label",options:[{label:"Apple",value:"apple"},{label:"Banana",value:"banana"},{label:"Cherry",value:"cherry"},{label:"Date",value:"date"},{label:"Elderberry",value:"elderberry"}],style:{width:"200px"}}},h={args:{mode:"multiple",placeholder:"Select multiple options",allowClear:!0,options:[{label:"Option 1",value:"1"},{label:"Option 2",value:"2"},{label:"Option 3",value:"3"},{label:"Option 4",value:"4"}],style:{width:"300px"}}},g={args:{mode:"tags",placeholder:"Add tags",options:[{label:"Apple",value:"apple"},{label:"Banana",value:"banana"},{label:"Cherry",value:"cherry"}],style:{width:"300px"}}},v={args:{placeholder:"Select with groups",options:[{label:"Fruits",options:[{label:"Apple",value:"apple"},{label:"Banana",value:"banana"},{label:"Cherry",value:"cherry"}]},{label:"Vegetables",options:[{label:"Carrot",value:"carrot"},{label:"Broccoli",value:"broccoli"},{label:"Spinach",value:"spinach"}]}],style:{width:"200px"}}},x={args:{placeholder:"Select with disabled options",options:[{label:"Enabled 1",value:"1"},{label:"Disabled 2",value:"2",disabled:!0},{label:"Enabled 3",value:"3"},{label:"Disabled 4",value:"4",disabled:!0}],style:{width:"200px"}}},y={render:()=>{const[n,o]=z.useState("1");return e.jsxs(t,{vertical:!0,gap:a.spacing.md,children:[e.jsx(l,{value:n,onChange:o,options:[{label:"Option 1",value:"1"},{label:"Option 2",value:"2"},{label:"Option 3",value:"3"}],style:{width:"200px"}}),e.jsxs(t,{gap:a.spacing.sm,children:[e.jsx(j,{size:"small",onClick:()=>o("1"),children:"Set Option 1"}),e.jsx(j,{size:"small",onClick:()=>o("2"),children:"Set Option 2"}),e.jsx(j,{size:"small",onClick:()=>o("3"),children:"Set Option 3"})]}),e.jsxs(r,{children:["Current value: ",n]})]})}},S={render:()=>e.jsx(l,{placeholder:"Custom render",labelInValue:!0,options:[{label:"Apple",value:"apple",emoji:"🍎"},{label:"Banana",value:"banana",emoji:"🍌"},{label:"Cherry",value:"cherry",emoji:"🍒"}],optionRender:n=>e.jsxs(t,{gap:a.spacing.sm,align:"center",children:[e.jsx("span",{children:n.data.emoji}),e.jsx("span",{children:n.label})]}),style:{width:"200px"}})},O={render:()=>{const n=[{label:"🇺🇸 United States",value:"us"},{label:"🇬🇧 United Kingdom",value:"uk"},{label:"🇨🇦 Canada",value:"ca"},{label:"🇦🇺 Australia",value:"au"},{label:"🇩🇪 Germany",value:"de"},{label:"🇫🇷 France",value:"fr"},{label:"🇯🇵 Japan",value:"jp"}];return e.jsxs(t,{vertical:!0,gap:a.spacing.md,style:{width:"250px"},children:[e.jsx(r,{strong:!0,children:"Select your country"}),e.jsx(l,{placeholder:"Choose a country",showSearch:{filterOption:(o,T)=>{const f=T?.label;return typeof f=="string"?f.toLowerCase().includes(o.toLowerCase()):!1}},options:n,size:"large"})]})}},w={render:()=>e.jsxs(t,{vertical:!0,gap:a.spacing.lg,style:{width:"200px"},children:[e.jsxs("div",{children:[e.jsx(r,{strong:!0,children:"Small"}),e.jsx(l,{size:"small",placeholder:"Small select",options:[{label:"Option",value:"1"}],style:{marginTop:a.spacing.sm}})]}),e.jsxs("div",{children:[e.jsx(r,{strong:!0,children:"Middle (Default)"}),e.jsx(l,{size:"middle",placeholder:"Middle select",options:[{label:"Option",value:"1"}],style:{marginTop:a.spacing.sm}})]}),e.jsxs("div",{children:[e.jsx(r,{strong:!0,children:"Large"}),e.jsx(l,{size:"large",placeholder:"Large select",options:[{label:"Option",value:"1"}],style:{marginTop:a.spacing.sm}})]})]})},C={args:{placeholder:"Select an option",options:[{label:"Option 1",value:"1"},{label:"Option 2",value:"2"},{label:"Option 3",value:"3"}],size:"middle",disabled:!1,loading:!1,allowClear:!1,showSearch:!1,style:{width:"250px"}},render:n=>e.jsx(l,{...n})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Select an option',
    options: [{
      label: 'Option 1',
      value: '1'
    }, {
      label: 'Option 2',
      value: '2'
    }, {
      label: 'Option 3',
      value: '3'
    }],
    style: {
      width: '200px'
    }
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <Flex vertical gap={layoutTokens.spacing.md} style={{
    width: '200px'
  }}>
      <Select size='large' placeholder='Large size' options={[{
      label: 'Option',
      value: '1'
    }]} />
      <Select size='middle' placeholder='Middle size' options={[{
      label: 'Option',
      value: '1'
    }]} />
      <Select size='small' placeholder='Small size' options={[{
      label: 'Option',
      value: '1'
    }]} />
    </Flex>
}`,...i.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: '2',
    options: [{
      label: 'Option 1',
      value: '1'
    }, {
      label: 'Option 2',
      value: '2'
    }, {
      label: 'Option 3',
      value: '3'
    }],
    style: {
      width: '200px'
    }
  }
}`,...p.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Select with clear',
    allowClear: true,
    defaultValue: '2',
    options: [{
      label: 'Option 1',
      value: '1'
    }, {
      label: 'Option 2',
      value: '2'
    }, {
      label: 'Option 3',
      value: '3'
    }],
    style: {
      width: '200px'
    }
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <Flex vertical gap={layoutTokens.spacing.md} style={{
    width: '200px'
  }}>
      <Select disabled placeholder='Disabled select' options={[{
      label: 'Option',
      value: '1'
    }]} />
      <Select disabled defaultValue='1' options={[{
      label: 'Option 1',
      value: '1'
    }]} />
    </Flex>
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    loading: true,
    placeholder: 'Loading...',
    style: {
      width: '200px'
    }
  }
}`,...u.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <Flex vertical gap={layoutTokens.spacing.md} style={{
    width: '200px'
  }}>
      <Select status='error' placeholder='Error status' options={[{
      label: 'Option',
      value: '1'
    }]} />
      <Select status='warning' placeholder='Warning status' options={[{
      label: 'Option',
      value: '1'
    }]} />
    </Flex>
}`,...b.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    showSearch: true,
    placeholder: 'Search to select',
    optionFilterProp: 'label',
    options: [{
      label: 'Apple',
      value: 'apple'
    }, {
      label: 'Banana',
      value: 'banana'
    }, {
      label: 'Cherry',
      value: 'cherry'
    }, {
      label: 'Date',
      value: 'date'
    }, {
      label: 'Elderberry',
      value: 'elderberry'
    }],
    style: {
      width: '200px'
    }
  }
}`,...m.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    mode: 'multiple',
    placeholder: 'Select multiple options',
    allowClear: true,
    options: [{
      label: 'Option 1',
      value: '1'
    }, {
      label: 'Option 2',
      value: '2'
    }, {
      label: 'Option 3',
      value: '3'
    }, {
      label: 'Option 4',
      value: '4'
    }],
    style: {
      width: '300px'
    }
  }
}`,...h.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    mode: 'tags',
    placeholder: 'Add tags',
    options: [{
      label: 'Apple',
      value: 'apple'
    }, {
      label: 'Banana',
      value: 'banana'
    }, {
      label: 'Cherry',
      value: 'cherry'
    }],
    style: {
      width: '300px'
    }
  }
}`,...g.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Select with groups',
    options: [{
      label: 'Fruits',
      options: [{
        label: 'Apple',
        value: 'apple'
      }, {
        label: 'Banana',
        value: 'banana'
      }, {
        label: 'Cherry',
        value: 'cherry'
      }]
    }, {
      label: 'Vegetables',
      options: [{
        label: 'Carrot',
        value: 'carrot'
      }, {
        label: 'Broccoli',
        value: 'broccoli'
      }, {
        label: 'Spinach',
        value: 'spinach'
      }]
    }],
    style: {
      width: '200px'
    }
  }
}`,...v.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Select with disabled options',
    options: [{
      label: 'Enabled 1',
      value: '1'
    }, {
      label: 'Disabled 2',
      value: '2',
      disabled: true
    }, {
      label: 'Enabled 3',
      value: '3'
    }, {
      label: 'Disabled 4',
      value: '4',
      disabled: true
    }],
    style: {
      width: '200px'
    }
  }
}`,...x.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = React.useState('1');
    return <Flex vertical gap={layoutTokens.spacing.md}>
        <Select value={value} onChange={setValue} options={[{
        label: 'Option 1',
        value: '1'
      }, {
        label: 'Option 2',
        value: '2'
      }, {
        label: 'Option 3',
        value: '3'
      }]} style={{
        width: '200px'
      }} />
        <Flex gap={layoutTokens.spacing.sm}>
          <Button size='small' onClick={() => setValue('1')}>
            Set Option 1
          </Button>
          <Button size='small' onClick={() => setValue('2')}>
            Set Option 2
          </Button>
          <Button size='small' onClick={() => setValue('3')}>
            Set Option 3
          </Button>
        </Flex>
        <Text>Current value: {value}</Text>
      </Flex>;
  }
}`,...y.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <Select placeholder='Custom render' labelInValue options={[{
    label: 'Apple',
    value: 'apple',
    emoji: '🍎'
  }, {
    label: 'Banana',
    value: 'banana',
    emoji: '🍌'
  }, {
    label: 'Cherry',
    value: 'cherry',
    emoji: '🍒'
  }]} optionRender={option => <Flex gap={layoutTokens.spacing.sm} align='center'>
          <span>{option.data.emoji}</span>
          <span>{option.label}</span>
        </Flex>} style={{
    width: '200px'
  }} />
}`,...S.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => {
    const countries = [{
      label: '🇺🇸 United States',
      value: 'us'
    }, {
      label: '🇬🇧 United Kingdom',
      value: 'uk'
    }, {
      label: '🇨🇦 Canada',
      value: 'ca'
    }, {
      label: '🇦🇺 Australia',
      value: 'au'
    }, {
      label: '🇩🇪 Germany',
      value: 'de'
    }, {
      label: '🇫🇷 France',
      value: 'fr'
    }, {
      label: '🇯🇵 Japan',
      value: 'jp'
    }];
    return <Flex vertical gap={layoutTokens.spacing.md} style={{
      width: '250px'
    }}>
        <Text strong>Select your country</Text>
        <Select placeholder='Choose a country' showSearch={{
        filterOption: (input, option) => {
          const label = option?.label;
          if (typeof label === 'string') {
            return label.toLowerCase().includes(input.toLowerCase());
          }
          return false;
        }
      }} options={countries} size='large' />
      </Flex>;
  }
}`,...O.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <Flex vertical gap={layoutTokens.spacing.lg} style={{
    width: '200px'
  }}>
      <div>
        <Text strong>Small</Text>
        <Select size='small' placeholder='Small select' options={[{
        label: 'Option',
        value: '1'
      }]} style={{
        marginTop: layoutTokens.spacing.sm
      }} />
      </div>
      <div>
        <Text strong>Middle (Default)</Text>
        <Select size='middle' placeholder='Middle select' options={[{
        label: 'Option',
        value: '1'
      }]} style={{
        marginTop: layoutTokens.spacing.sm
      }} />
      </div>
      <div>
        <Text strong>Large</Text>
        <Select size='large' placeholder='Large select' options={[{
        label: 'Option',
        value: '1'
      }]} style={{
        marginTop: layoutTokens.spacing.sm
      }} />
      </div>
    </Flex>
}`,...w.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Select an option',
    options: [{
      label: 'Option 1',
      value: '1'
    }, {
      label: 'Option 2',
      value: '2'
    }, {
      label: 'Option 3',
      value: '3'
    }],
    size: 'middle',
    disabled: false,
    loading: false,
    allowClear: false,
    showSearch: false,
    style: {
      width: '250px'
    }
  },
  render: args => <Select {...args} />
}`,...C.parameters?.docs?.source}}};const I=["Basic","Sizes","WithDefaultValue","WithClear","Disabled","Loading","Statuses","WithSearch","Multiple","Tags","WithGroups","WithDisabledOptions","Controlled","CustomRender","CountrySelector","AllSizesComparison","Playground"];export{w as AllSizesComparison,s as Basic,y as Controlled,O as CountrySelector,S as CustomRender,d as Disabled,u as Loading,h as Multiple,C as Playground,i as Sizes,b as Statuses,g as Tags,c as WithClear,p as WithDefaultValue,x as WithDisabledOptions,v as WithGroups,m as WithSearch,I as __namedExportsOrder,U as default};
