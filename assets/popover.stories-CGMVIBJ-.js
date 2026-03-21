import{f as ge,P as ue,r as c,i as j,C as he,h as xe,j as e,l as p,R as ve}from"./iframe-Dl7DKvET.js";import{i as fe,g as ye,a as Pe,b as Te,P as Ce,u as Be,c as we,d as je,e as ke,T as Ne}from"./typography-BeaTB5Xy.js";import{g as be,m as Se,c as U,b as J,F as v}from"./flex-kTLNRB8Y.js";import{B as s}from"./button-hanavTsf.js";import{I as Re}from"./input-BwWpxdZX.js";import"./preload-helper-PPVm8Dsz.js";import"./Button-BBfvcWdO.js";import"./client-D0ErMLyZ.js";import"./pickAttrs-BoNuQqbq.js";import"./SearchOutlined-BgdScuqm.js";const I=t=>t?typeof t=="function"?t():t:null,G="50%",Oe=t=>{const{componentCls:o,popoverColor:n,titleMinWidth:i,fontWeightStrong:l,innerPadding:r,boxShadowSecondary:d,colorTextHeading:g,borderRadiusLG:T,zIndexPopup:f,titleMarginBottom:y,colorBgElevated:C,popoverBg:u,titleBorderBottom:P,innerContentPadding:h,titlePadding:m,antCls:w}=t,[k,B]=U(w,"tooltip");return[{[o]:{...ge(t),position:"absolute",top:0,left:{_skip_check_:!0,value:0},zIndex:f,fontWeight:"normal",whiteSpace:"normal",textAlign:"start",cursor:"auto",userSelect:"text",[k("valid-offset-x")]:B("arrow-offset-x","var(--arrow-x)"),transformOrigin:[B("valid-offset-x",G),`var(--arrow-y, ${G})`].join(" "),[k("arrow-background-color")]:C,width:"max-content",maxWidth:"100vw","&-rtl":{direction:"rtl"},"&-hidden":{display:"none"},[`${o}-content`]:{position:"relative"},[`${o}-container`]:{backgroundColor:u,backgroundClip:"padding-box",borderRadius:T,boxShadow:d,padding:r},[`${o}-title`]:{minWidth:i,marginBottom:y,color:g,fontWeight:l,borderBottom:P,padding:m},[`${o}-content`]:{color:n,padding:h}}},ye(t,B("arrow-background-color")),{[`${o}-pure`]:{position:"relative",maxWidth:"none",margin:t.sizePopupArrow,display:"inline-block"}}]},Le=t=>{const{componentCls:o,antCls:n}=t,[i]=U(n,"tooltip");return{[o]:ue.map(l=>{const r=t[`${l}6`];return{[`&${o}-${l}`]:{[i("arrow-background-color")]:r,[`${o}-inner`]:{backgroundColor:r},[`${o}-arrow`]:{background:"transparent"}}}})}},Fe=t=>{const{lineWidth:o,controlHeight:n,fontHeight:i,padding:l,wireframe:r,zIndexPopupBase:d,borderRadiusLG:g,marginXS:T,lineType:f,colorSplit:y,paddingSM:C}=t,u=n-i,P=u/2,h=u/2-o,m=l;return{titleMinWidth:177,zIndexPopup:d+30,...Te(t),...Pe({contentRadius:g,limitVerticalRadius:!0}),innerPadding:r?0:12,titleMarginBottom:r?0:T,titlePadding:r?`${P}px ${m}px ${h}px`:0,titleBorderBottom:r?`${o}px ${f} ${y}`:"none",innerContentPadding:r?`${C}px ${m}px`:0}},X=be("Popover",t=>{const{colorBgElevated:o,colorText:n}=t,i=Se(t,{popoverBg:o,popoverColor:n});return[Oe(i),Le(i),fe(i,"zoom-big")]},Fe,{resetStyle:!1,deprecatedTokens:[["width","titleMinWidth"],["minWidth","titleMinWidth"]]}),Y=t=>{const{title:o,content:n,prefixCls:i,classNames:l,styles:r}=t;return!o&&!n?null:c.createElement(c.Fragment,null,o&&c.createElement("div",{className:j(`${i}-title`,l?.title),style:r?.title},o),n&&c.createElement("div",{className:j(`${i}-content`,l?.content),style:r?.content},n))},$e=t=>{const{hashId:o,prefixCls:n,className:i,style:l,placement:r="top",title:d,content:g,children:T,classNames:f,styles:y}=t,C=I(d),u=I(g),P={...t,placement:r},[h,m]=J([f],[y],{props:P}),w=j(o,n,`${n}-pure`,`${n}-placement-${r}`,i);return c.createElement("div",{className:w,style:l},c.createElement("div",{className:`${n}-arrow`}),c.createElement(Ce,{...t,className:o,prefixCls:n,classNames:h,styles:m},T||c.createElement(Y,{prefixCls:n,title:C,content:u,classNames:h,styles:m})))},Ee=t=>{const{prefixCls:o,className:n,...i}=t,{getPrefixCls:l}=c.useContext(he),r=l("popover",o),[d,g]=X(r);return c.createElement($e,{...i,prefixCls:r,hashId:d,className:j(n,g)})},He=c.forwardRef((t,o)=>{const{prefixCls:n,title:i,content:l,overlayClassName:r,placement:d="top",trigger:g,children:T,mouseEnterDelay:f=.1,mouseLeaveDelay:y=.1,onOpenChange:C,overlayStyle:u={},styles:P,classNames:h,motion:m,arrow:w,...k}=t,{getPrefixCls:B,className:K,style:Q,classNames:ee,styles:te,arrow:oe,trigger:ne}=xe("popover"),M=B("popover",n),[re,se]=X(M),ae=B(),ie=Be(w,oe),z=g||ne||"hover",le={...t,placement:d,trigger:z,mouseEnterDelay:f,mouseLeaveDelay:y,overlayStyle:u,styles:P,classNames:h},[N,b]=J([ee,h],[te,P],{props:le}),ce=j(r,re,se,K,N.root),[pe,de]=we(t.defaultOpen??!1,t.open),me=q=>{de(q),C?.(q)},_=I(i),V=I(l);return c.createElement(je,{unique:!1,arrow:ie,placement:d,trigger:z,mouseEnterDelay:f,mouseLeaveDelay:y,...k,prefixCls:M,classNames:{root:ce,container:N.container,arrow:N.arrow},styles:{root:{...b.root,...Q,...u},container:b.container,arrow:b.arrow},ref:o,open:pe,onOpenChange:me,overlay:_||V?c.createElement(Y,{prefixCls:M,title:_,content:V,classNames:N,styles:b}):null,motion:{motionName:ke(ae,"zoom-big",typeof m?.motionName=="string"?m?.motionName:void 0)},"data-popover-inject":!0},T)}),Z=He;Z._InternalPanelDoNotUseOrYouWillBeFired=Ee;const a=t=>e.jsx(Z,{...t});try{a.displayName="Popover",a.__docgenInfo={description:"",displayName:"Popover",props:{}}}catch{}const{Text:x}=Ne,Ue={title:"Components/Popover",component:a,tags:["autodocs"],argTypes:{title:{control:"text",description:"Заголовок поповера"},content:{control:"text",description:"Содержимое поповера"},placement:{control:"select",options:["top","topLeft","topRight","bottom","bottomLeft","bottomRight","left","leftTop","leftBottom","right","rightTop","rightBottom"],description:"Позиция поповера"},trigger:{control:"select",options:["hover","click","focus","contextMenu"],description:"Триггер открытия"},open:{control:"boolean",description:"Управление видимостью"},defaultOpen:{control:"boolean",description:"Открыт по умолчанию"},arrow:{control:"boolean",description:"Показывать стрелку"},mouseEnterDelay:{control:"number",description:"Задержка перед открытием (ms)"},mouseLeaveDelay:{control:"number",description:"Задержка перед закрытием (ms)"},overlayClassName:{control:"text",description:"CSS класс для контейнера"},onOpenChange:{action:"open state changed"}},parameters:{layout:"centered",backgrounds:{default:"light"}}},S={args:{title:"Title",content:"Content of the popover",children:e.jsx(s,{children:"Hover me"}),trigger:"hover"}},R={render:()=>e.jsxs(v,{gap:p.spacing.md,wrap:"wrap",justify:"center",style:{padding:p.spacing.lg},children:[e.jsx(a,{title:"Top",content:"Top content",placement:"top",children:e.jsx(s,{children:"Top"})}),e.jsx(a,{title:"Bottom",content:"Bottom content",placement:"bottom",children:e.jsx(s,{children:"Bottom"})}),e.jsx(a,{title:"Left",content:"Left content",placement:"left",children:e.jsx(s,{children:"Left"})}),e.jsx(a,{title:"Right",content:"Right content",placement:"right",children:e.jsx(s,{children:"Right"})}),e.jsx(a,{title:"TopLeft",content:"TopLeft content",placement:"topLeft",children:e.jsx(s,{children:"TopLeft"})}),e.jsx(a,{title:"TopRight",content:"TopRight content",placement:"topRight",children:e.jsx(s,{children:"TopRight"})})]})},O={render:()=>e.jsxs(v,{gap:p.spacing.lg,wrap:"wrap",children:[e.jsx(a,{title:"Hover",content:"Opened on hover",trigger:"hover",children:e.jsx(s,{children:"Hover me"})}),e.jsx(a,{title:"Click",content:"Opened on click",trigger:"click",children:e.jsx(s,{children:"Click me"})}),e.jsx(a,{title:"Focus",content:"Opened on focus",trigger:"focus",children:e.jsx(s,{children:"Focus me"})}),e.jsx(a,{title:"Context Menu",content:"Opened on right click",trigger:"contextMenu",children:e.jsx(s,{children:"Right click me"})})]})},L={render:()=>e.jsx(a,{title:"User Profile",content:e.jsxs(v,{vertical:!0,gap:p.spacing.sm,style:{minWidth:"200px"},children:[e.jsx(x,{strong:!0,children:"John Doe"}),e.jsx(x,{type:"secondary",children:"john.doe@example.com"}),e.jsx(x,{children:"Software Engineer"}),e.jsx(s,{type:"primary",size:"small",style:{marginTop:p.spacing.xs},children:"View Profile"})]}),trigger:"click",children:e.jsx(s,{children:"Show profile"})})},F={render:()=>e.jsx(a,{title:"Notifications",content:e.jsxs(v,{vertical:!0,gap:p.spacing.md,style:{width:"300px"},children:[e.jsxs(v,{vertical:!0,gap:p.spacing.sm,children:[e.jsx(x,{strong:!0,children:"New message from Alice"}),e.jsx(x,{type:"secondary",children:"Hey, how are you doing?"})]}),e.jsxs(v,{vertical:!0,gap:p.spacing.sm,children:[e.jsx(x,{strong:!0,children:"System update"}),e.jsx(x,{type:"secondary",children:"New version available"})]}),e.jsxs(v,{vertical:!0,gap:p.spacing.sm,children:[e.jsx(x,{strong:!0,children:"Meeting reminder"}),e.jsx(x,{type:"secondary",children:"Team meeting in 30 minutes"})]}),e.jsx(s,{type:"link",size:"small",children:"View all notifications"})]}),trigger:"click",placement:"bottomRight",children:e.jsx(s,{children:"Notifications (3)"})})},$={render:()=>e.jsx(a,{title:"Delayed Popover",content:"Opens after 1 second, closes after 0.5 seconds",mouseEnterDelay:1e3,mouseLeaveDelay:500,trigger:"hover",children:e.jsx(s,{children:"Hover with delay"})})},E={render:()=>e.jsx(a,{title:"No Arrow",content:"This popover has no arrow",arrow:!1,children:e.jsx(s,{children:"Hover me"})})},H={render:()=>{const[t,o]=ve.useState(!1),n=i=>{o(i)};return e.jsxs(v,{gap:p.spacing.md,children:[e.jsx(a,{title:"Controlled Popover",content:"This popover is controlled by external state",open:t,onOpenChange:n,trigger:"click",children:e.jsx(s,{children:"Click to open/close"})}),e.jsx(s,{onClick:()=>o(!t),children:"External control"})]})}},W={render:()=>e.jsx(a,{title:"Help",content:"This field is required. Please enter a valid email address.",trigger:"hover",children:e.jsx(Re,{placeholder:"Email",style:{width:"250px"}})})},D={render:()=>{const t=["top","topLeft","topRight","bottom","bottomLeft","bottomRight","left","leftTop","leftBottom","right","rightTop","rightBottom"];return e.jsx(v,{gap:p.spacing.md,wrap:"wrap",justify:"center",style:{maxWidth:"600px",padding:p.spacing.lg},children:t.map(o=>e.jsx(a,{title:o,content:`Popover content for ${o} placement`,placement:o,children:e.jsx(s,{size:"small",children:o})},o))})}},A={args:{title:"Popover Title",content:"This is the popover content",placement:"top",trigger:"hover",arrow:!0,mouseEnterDelay:0,mouseLeaveDelay:0,children:e.jsx(s,{children:"Hover or click me"})},render:t=>e.jsx(a,{...t})};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Title',
    content: 'Content of the popover',
    children: <Button>Hover me</Button>,
    trigger: 'hover'
  }
}`,...S.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: () => <Flex gap={layoutTokens.spacing.md} wrap='wrap' justify='center' style={{
    padding: layoutTokens.spacing.lg
  }}>
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
}`,...R.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => <Flex gap={layoutTokens.spacing.lg} wrap='wrap'>
      <Popover title='Hover' content='Opened on hover' trigger='hover'>
        <Button>Hover me</Button>
      </Popover>
      <Popover title='Click' content='Opened on click' trigger='click'>
        <Button>Click me</Button>
      </Popover>
      <Popover title='Focus' content='Opened on focus' trigger='focus'>
        <Button>Focus me</Button>
      </Popover>
      <Popover title='Context Menu' content='Opened on right click' trigger='contextMenu'>
        <Button>Right click me</Button>
      </Popover>
    </Flex>
}`,...O.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: () => <Popover title='User Profile' content={<Flex vertical gap={layoutTokens.spacing.sm} style={{
    minWidth: '200px'
  }}>
          <Text strong>John Doe</Text>
          <Text type='secondary'>john.doe@example.com</Text>
          <Text>Software Engineer</Text>
          <Button type='primary' size='small' style={{
      marginTop: layoutTokens.spacing.xs
    }}>
            View Profile
          </Button>
        </Flex>} trigger='click'>
      <Button>Show profile</Button>
    </Popover>
}`,...L.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: () => <Popover title='Notifications' content={<Flex vertical gap={layoutTokens.spacing.md} style={{
    width: '300px'
  }}>
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
        </Flex>} trigger='click' placement='bottomRight'>
      <Button>Notifications (3)</Button>
    </Popover>
}`,...F.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  render: () => <Popover title='Delayed Popover' content='Opens after 1 second, closes after 0.5 seconds' mouseEnterDelay={1000} mouseLeaveDelay={500} trigger='hover'>
      <Button>Hover with delay</Button>
    </Popover>
}`,...$.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => <Popover title='No Arrow' content='This popover has no arrow' arrow={false}>
      <Button>Hover me</Button>
    </Popover>
}`,...E.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = React.useState(false);
    const handleOpenChange = (newOpen: boolean) => {
      setOpen(newOpen);
    };
    return <Flex gap={layoutTokens.spacing.md}>
        <Popover title='Controlled Popover' content='This popover is controlled by external state' open={open} onOpenChange={handleOpenChange} trigger='click'>
          <Button>Click to open/close</Button>
        </Popover>
        <Button onClick={() => setOpen(!open)}>External control</Button>
      </Flex>;
  }
}`,...H.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: () => <Popover title='Help' content='This field is required. Please enter a valid email address.' trigger='hover'>
      <Input placeholder='Email' style={{
      width: '250px'
    }} />
    </Popover>
}`,...W.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => {
    const placements = ['top', 'topLeft', 'topRight', 'bottom', 'bottomLeft', 'bottomRight', 'left', 'leftTop', 'leftBottom', 'right', 'rightTop', 'rightBottom'] as const;
    return <Flex gap={layoutTokens.spacing.md} wrap='wrap' justify='center' style={{
      maxWidth: '600px',
      padding: layoutTokens.spacing.lg
    }}>
        {placements.map(placement => <Popover key={placement} title={placement} content={\`Popover content for \${placement} placement\`} placement={placement}>
            <Button size='small'>{placement}</Button>
          </Popover>)}
      </Flex>;
  }
}`,...D.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Popover Title',
    content: 'This is the popover content',
    placement: 'top',
    trigger: 'hover',
    arrow: true,
    mouseEnterDelay: 0,
    mouseLeaveDelay: 0,
    children: <Button>Hover or click me</Button>
  },
  render: args => <Popover {...args} />
}`,...A.parameters?.docs?.source}}};const Je=["Basic","Placements","Triggers","CustomContent","ComplexContent","WithDelays","WithoutArrow","Controlled","InForm","AllPlacements","Playground"];export{D as AllPlacements,S as Basic,F as ComplexContent,H as Controlled,L as CustomContent,W as InForm,R as Placements,A as Playground,O as Triggers,$ as WithDelays,E as WithoutArrow,Je as __namedExportsOrder,Ue as default};
