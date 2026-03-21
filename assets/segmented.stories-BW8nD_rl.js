import{r as s,k as ve,m as xe,i as H,n as he,t as ye,u as B,o as Se,p as je,f as we,q as Te,h as $e,j as t,l,R as ce}from"./iframe-Dl7DKvET.js";import{_ as ue}from"./extends-CF3RwP-h.js";import{c as Ce,d as Oe,T as Ve}from"./typography-BeaTB5Xy.js";import{o as ke,g as Re,m as ze,b as Fe,u as Me,a as De,F as d}from"./flex-kTLNRB8Y.js";import{B as de}from"./button-hanavTsf.js";import"./preload-helper-PPVm8Dsz.js";import"./Button-BBfvcWdO.js";import"./client-D0ErMLyZ.js";const pe=(e,n)=>{if(!e)return null;const a={left:e.offsetLeft,right:e.parentElement.clientWidth-e.clientWidth-e.offsetLeft,width:e.clientWidth,top:e.offsetTop,bottom:e.parentElement.clientHeight-e.clientHeight-e.offsetTop,height:e.clientHeight};return n?{left:0,right:0,width:0,top:a.top,bottom:a.bottom,height:a.height}:{left:a.left,right:a.right,width:a.width,top:0,bottom:0,height:0}},V=e=>e!==void 0?`${e}px`:void 0;function Ne(e){const{prefixCls:n,containerRef:a,value:o,getValueIndex:c,motionName:v,onMotionStart:r,onMotionEnd:u,direction:p,vertical:h=!1}=e,F=s.useRef(null),[M,k]=s.useState(o),R=O=>{const f=c(O),y=a.current?.querySelectorAll(`.${n}-item`)[f];return y?.offsetParent&&y},[b,D]=s.useState(null),[x,N]=s.useState(null);ve(()=>{if(M!==o){const O=R(M),f=R(o),y=pe(O,h),m=pe(f,h);k(o),D(y),N(m),O&&f?r():u()}},[o]);const $=s.useMemo(()=>V(h?b?.top??0:p==="rtl"?-b?.right:b?.left),[h,p,b]),C=s.useMemo(()=>V(h?x?.top??0:p==="rtl"?-x?.right:x?.left),[h,p,x]),S=()=>h?{transform:"translateY(var(--thumb-start-top))",height:"var(--thumb-start-height)"}:{transform:"translateX(var(--thumb-start-left))",width:"var(--thumb-start-width)"},j=()=>h?{transform:"translateY(var(--thumb-active-top))",height:"var(--thumb-active-height)"}:{transform:"translateX(var(--thumb-active-left))",width:"var(--thumb-active-width)"},L=()=>{D(null),N(null),u()};return!b||!x?null:s.createElement(xe,{visible:!0,motionName:v,motionAppear:!0,onAppearStart:S,onAppearActive:j,onVisibleChanged:L},({className:O,style:f},y)=>{const m={...f,"--thumb-start-left":$,"--thumb-start-width":V(b?.width),"--thumb-active-left":C,"--thumb-active-width":V(x?.width),"--thumb-start-top":$,"--thumb-start-height":V(b?.height),"--thumb-active-top":C,"--thumb-active-height":V(x?.height)},E={ref:he(F,y),style:m,className:H(`${n}-thumb`,O)};return s.createElement("div",E)})}function Ie(e){if(typeof e.title<"u")return e.title;if(typeof e.label!="object")return e.label?.toString()}function Be(e){return e.map(n=>{if(typeof n=="object"&&n!==null){const a=Ie(n);return{...n,title:a}}return{label:n?.toString(),title:n?.toString(),value:n}})}const He=({prefixCls:e,className:n,style:a,styles:o,classNames:c,data:v,disabled:r,checked:u,label:p,title:h,value:F,name:M,onChange:k,onFocus:R,onBlur:b,onKeyDown:D,onKeyUp:x,onMouseDown:N,itemRender:$=C=>C})=>{const C=j=>{r||k(j,F)},S=s.createElement("label",{className:H(n,{[`${e}-item-disabled`]:r}),style:a,onMouseDown:N},s.createElement("input",{name:M,className:`${e}-item-input`,type:"radio",disabled:r,checked:u,onChange:C,onFocus:R,onBlur:b,onKeyDown:D,onKeyUp:x}),s.createElement("div",{className:H(`${e}-item-label`,c?.label),title:h,style:o?.label},p));return $(S,{item:v})},Le=s.forwardRef((e,n)=>{const{prefixCls:a="rc-segmented",direction:o,vertical:c,options:v=[],disabled:r,defaultValue:u,value:p,name:h,onChange:F,className:M="",style:k,styles:R,classNames:b,motionName:D="thumb-motion",itemRender:x,...N}=e,$=s.useRef(null),C=s.useMemo(()=>he($,n),[$,n]),S=s.useMemo(()=>Be(v),[v]),[j,L]=Ce(u??S[0]?.value,p),[O,f]=s.useState(!1),y=(g,w)=>{L(w),F?.(w)},m=ke(N,["children"]),[E,A]=s.useState(!1),[W,_]=s.useState(!1),G=()=>{_(!0)},ie=()=>{_(!1)},le=()=>{A(!1)},oe=g=>{g.key==="Tab"&&A(!0)},z=g=>{const w=S.findIndex(fe=>fe.value===j),q=S.length,be=(w+g+q)%q,re=S[be];re&&(L(re.value),F?.(re.value))},I=g=>{switch(g.key){case"ArrowLeft":case"ArrowUp":z(-1);break;case"ArrowRight":case"ArrowDown":z(1);break}},P=g=>{const{value:w,disabled:q}=g;return s.createElement(He,ue({},g,{name:h,data:g,itemRender:x,key:w,prefixCls:a,className:H(g.className,`${a}-item`,b?.item,{[`${a}-item-selected`]:w===j&&!O,[`${a}-item-focused`]:W&&E&&w===j}),style:R?.item,classNames:b,styles:R,checked:w===j,onChange:y,onFocus:G,onBlur:ie,onKeyDown:I,onKeyUp:oe,onMouseDown:le,disabled:!!r||!!q}))};return s.createElement("div",ue({role:"radiogroup","aria-label":"segmented control",tabIndex:r?void 0:0,"aria-orientation":c?"vertical":"horizontal",style:k},m,{className:H(a,{[`${a}-rtl`]:o==="rtl",[`${a}-disabled`]:r,[`${a}-vertical`]:c},M),ref:C}),s.createElement("div",{className:`${a}-group`},s.createElement(Ne,{vertical:c,prefixCls:a,value:j,containerRef:$,motionName:`${a}-${D}`,direction:o,getValueIndex:g=>S.findIndex(w=>w.value===g),onMotionStart:()=>{f(!0)},onMotionEnd:()=>{f(!1)}}),S.map(P)))}),Pe=Le;function me(e,n){return{[`${e}, ${e}:hover, ${e}:focus`]:{color:n.colorTextDisabled,cursor:"not-allowed"}}}const ge=e=>({background:e.itemSelectedBg,boxShadow:e.boxShadowTertiary}),Ee={overflow:"hidden",...ye},Ae=e=>{const{componentCls:n,motionDurationSlow:a,motionEaseInOut:o,motionDurationMid:c}=e,v=e.calc(e.controlHeight).sub(e.calc(e.trackPadding).mul(2)).equal(),r=e.calc(e.controlHeightLG).sub(e.calc(e.trackPadding).mul(2)).equal(),u=e.calc(e.controlHeightSM).sub(e.calc(e.trackPadding).mul(2)).equal();return{[n]:{...we(e),display:"inline-block",padding:e.trackPadding,color:e.itemColor,background:e.trackBg,borderRadius:e.borderRadius,transition:`all ${c}`,...je(e),[`${n}-group`]:{position:"relative",display:"flex",alignItems:"stretch",justifyItems:"flex-start",flexDirection:"row",width:"100%"},[`&${n}-rtl`]:{direction:"rtl"},[`&${n}-vertical`]:{[`${n}-group`]:{flexDirection:"column"},[`${n}-thumb`]:{width:"100%",height:0,padding:`0 ${B(e.paddingXXS)}`}},[`&${n}-block`]:{display:"flex"},[`&${n}-block ${n}-item`]:{flex:1,minWidth:0},[`${n}-item`]:{position:"relative",textAlign:"center",cursor:"pointer",transition:`color ${c}`,borderRadius:e.borderRadiusSM,transform:"translateZ(0)","&-selected":{...ge(e),color:e.itemSelectedColor},"&-focused":Se(e),"&::after":{content:'""',position:"absolute",zIndex:-1,width:"100%",height:"100%",top:0,insetInlineStart:0,borderRadius:"inherit",opacity:0,pointerEvents:"none",transition:["opacity","background-color"].map(p=>`${p} ${c}`).join(", ")},[`&:not(${n}-item-selected):not(${n}-item-disabled)`]:{"&:hover, &:active":{color:e.itemHoverColor},"&:hover::after":{opacity:1,backgroundColor:e.itemHoverBg},"&:active::after":{opacity:1,backgroundColor:e.itemActiveBg}},"&-label":{minHeight:v,lineHeight:B(v),padding:`0 ${B(e.segmentedPaddingHorizontal)}`,...Ee},"&-icon + *":{marginInlineStart:e.calc(e.marginSM).div(2).equal()},"&-input":{position:"absolute",insetBlockStart:0,insetInlineStart:0,width:0,height:0,opacity:0,pointerEvents:"none"}},[`${n}-thumb`]:{...ge(e),position:"absolute",insetBlockStart:0,insetInlineStart:0,width:0,height:"100%",padding:`${B(e.paddingXXS)} 0`,borderRadius:e.borderRadiusSM,[`& ~ ${n}-item:not(${n}-item-selected):not(${n}-item-disabled)::after`]:{backgroundColor:"transparent"}},[`&${n}-lg`]:{borderRadius:e.borderRadiusLG,[`${n}-item-label`]:{minHeight:r,lineHeight:B(r),padding:`0 ${B(e.segmentedPaddingHorizontal)}`,fontSize:e.fontSizeLG},[`${n}-item, ${n}-thumb`]:{borderRadius:e.borderRadius}},[`&${n}-sm`]:{borderRadius:e.borderRadiusSM,[`${n}-item-label`]:{minHeight:u,lineHeight:B(u),padding:`0 ${B(e.segmentedPaddingHorizontalSM)}`},[`${n}-item, ${n}-thumb`]:{borderRadius:e.borderRadiusXS}},...me(`&-disabled ${n}-item`,e),...me(`${n}-item-disabled`,e),[`${n}-thumb-motion-appear-active`]:{willChange:"transform, width",transition:["transform","width"].map(p=>`${p} ${a} ${o}`).join(", ")},[`&${n}-shape-round`]:{borderRadius:9999,[`${n}-item, ${n}-thumb`]:{borderRadius:9999}}}}},We=e=>{const{colorTextLabel:n,colorText:a,colorFillSecondary:o,colorBgElevated:c,colorFill:v,lineWidthBold:r,colorBgLayout:u}=e;return{trackPadding:r,trackBg:u,itemColor:n,itemHoverColor:a,itemHoverBg:o,itemSelectedBg:c,itemActiveBg:v,itemSelectedColor:a}},_e=Re("Segmented",e=>{const{lineWidth:n,calc:a}=e,o=ze(e,{segmentedPaddingHorizontal:a(e.controlPaddingHorizontal).sub(n).equal(),segmentedPaddingHorizontalSM:a(e.controlPaddingHorizontalSM).sub(n).equal()});return Ae(o)},We);function Ge(e){return typeof e=="object"&&!!e?.icon}const qe=s.forwardRef((e,n)=>{const a=Te(),{prefixCls:o,className:c,rootClassName:v,block:r,options:u=[],size:p="middle",style:h,vertical:F,orientation:M,shape:k="default",name:R=a,styles:b,classNames:D,...x}=e,{getPrefixCls:N,direction:$,className:C,style:S,classNames:j,styles:L}=$e("segmented"),O={...e,options:u,size:p,shape:k},[f,y]=Fe([j,D],[L,b],{props:O}),m=N("segmented",o),[E,A]=_e(m),W=Me(p),_=s.useMemo(()=>u.map(z=>{if(Ge(z)){const{icon:I,label:P,...g}=z;return{...g,label:s.createElement(s.Fragment,null,s.createElement("span",{className:H(`${m}-item-icon`,f.icon),style:y.icon},I),P&&s.createElement("span",null,P))}}return z}),[u,m,f.icon,y.icon]),[,G]=De(M,F),ie=H(c,v,C,f.root,{[`${m}-block`]:r,[`${m}-sm`]:W==="small",[`${m}-lg`]:W==="large",[`${m}-vertical`]:G,[`${m}-shape-${k}`]:k==="round"},E,A),le={...y.root,...S,...h},oe=(z,{item:I})=>{if(!I.tooltip)return z;const P=typeof I.tooltip=="object"?I.tooltip:{title:I.tooltip};return s.createElement(Oe,{...P},z)};return s.createElement(Pe,{...x,name:R,className:ie,style:le,classNames:f,styles:y,itemRender:oe,options:_,ref:n,prefixCls:m,direction:$,vertical:G})}),Xe=qe,i=e=>t.jsx(Xe,{...e});try{i.displayName="Segmented",i.__docgenInfo={description:"",displayName:"Segmented",props:{}}}catch{}const{Text:T}=Ve,nt={title:"Components/Segmented",component:i,tags:["autodocs"],argTypes:{options:{control:"object",description:"Опции для переключения"},value:{control:"text",description:"Текущее значение"},defaultValue:{control:"text",description:"Значение по умолчанию"},size:{control:"select",options:["small","middle","large"],description:"Размер компонента"},disabled:{control:"boolean",description:"Отключенное состояние"},block:{control:"boolean",description:"Растянуть на всю ширину"},onChange:{action:"changed"}},parameters:{layout:"centered",backgrounds:{default:"light"}}},X={args:{options:["Daily","Weekly","Monthly"],defaultValue:"Daily"}},K={render:()=>t.jsxs(d,{vertical:!0,gap:l.spacing.lg,children:[t.jsxs("div",{children:[t.jsx(T,{strong:!0,children:"String options"}),t.jsx(i,{options:["Day","Week","Month"],defaultValue:"Day",style:{marginTop:l.spacing.sm}})]}),t.jsxs("div",{children:[t.jsx(T,{strong:!0,children:"Object options with icons"}),t.jsx(i,{options:[{label:"List",value:"list"},{label:"Grid",value:"grid"},{label:"Card",value:"card"}],defaultValue:"list",style:{marginTop:l.spacing.sm}})]}),t.jsxs("div",{children:[t.jsx(T,{strong:!0,children:"Mixed options"}),t.jsx(i,{options:["All",{label:"Active",value:"active"},{label:"Completed",value:"completed",disabled:!0}],defaultValue:"All",style:{marginTop:l.spacing.sm}})]})]})},Y={render:()=>t.jsxs(d,{vertical:!0,gap:l.spacing.md,children:[t.jsx(i,{size:"large",options:["Large","Size"],defaultValue:"Large"}),t.jsx(i,{size:"middle",options:["Middle","Size"],defaultValue:"Middle"}),t.jsx(i,{size:"small",options:["Small","Size"],defaultValue:"Small"})]})},U={render:()=>t.jsxs(d,{vertical:!0,gap:l.spacing.md,style:{width:"400px"},children:[t.jsx(T,{strong:!0,children:"Block segmented (full width)"}),t.jsx(i,{block:!0,options:["Option 1","Option 2","Option 3"],defaultValue:"Option 1"}),t.jsx(T,{strong:!0,children:"Default segmented"}),t.jsx(i,{options:["Option 1","Option 2","Option 3"],defaultValue:"Option 1"})]})},Z={render:()=>t.jsxs(d,{vertical:!0,gap:l.spacing.md,children:[t.jsx(i,{disabled:!0,options:["Disabled","Options"],defaultValue:"Disabled"}),t.jsx(i,{options:["Enabled",{label:"Disabled option",value:"disabled",disabled:!0},"Active"],defaultValue:"Enabled"})]})},J={render:()=>t.jsxs(d,{vertical:!0,gap:l.spacing.md,children:[t.jsx(i,{options:[{label:"List",value:"list",icon:"📋"},{label:"Grid",value:"grid",icon:"🔲"},{label:"Card",value:"card",icon:"🃏"}],defaultValue:"list"}),t.jsx(i,{options:[{value:"list",icon:"📋"},{value:"grid",icon:"🔲"},{value:"card",icon:"🃏"}],defaultValue:"list"})]})},Q={render:()=>{const[e,n]=ce.useState("daily");return t.jsxs(d,{vertical:!0,gap:l.spacing.md,children:[t.jsx(i,{options:["daily","weekly","monthly"],value:e,onChange:a=>n(a.toString())}),t.jsxs(T,{children:["Current value: ",e]}),t.jsxs(d,{gap:l.spacing.sm,children:[t.jsx(de,{size:"small",onClick:()=>n("daily"),children:"Set Daily"}),t.jsx(de,{size:"small",onClick:()=>n("weekly"),children:"Set Weekly"}),t.jsx(de,{size:"small",onClick:()=>n("monthly"),children:"Set Monthly"})]})]})}},ee={render:()=>t.jsx(i,{options:[{label:t.jsxs(d,{gap:l.spacing.xs,align:"center",children:[t.jsx("span",{children:"👍"}),t.jsx("span",{children:"Like"})]}),value:"like"},{label:t.jsxs(d,{gap:l.spacing.xs,align:"center",children:[t.jsx("span",{children:"❤️"}),t.jsx("span",{children:"Love"})]}),value:"love"},{label:t.jsxs(d,{gap:l.spacing.xs,align:"center",children:[t.jsx("span",{children:"😊"}),t.jsx("span",{children:"Smile"})]}),value:"smile"}],defaultValue:"like"})},te={render:()=>{const[e,n]=ce.useState("grid");return t.jsxs(d,{vertical:!0,gap:l.spacing.md,style:{width:"100%"},children:[t.jsxs(d,{justify:"space-between",align:"center",children:[t.jsx(T,{strong:!0,children:"Items"}),t.jsx(i,{options:[{label:"Grid",value:"grid",icon:"🔲"},{label:"List",value:"list",icon:"📋"}],value:e,onChange:a=>n(a.toString())})]}),t.jsx("div",{style:{border:"1px solid #e0e0e0",borderRadius:8,padding:l.spacing.md},children:e==="grid"?t.jsxs(d,{gap:l.spacing.md,wrap:"wrap",children:[t.jsx("div",{style:{width:100,height:100,background:"#f0f0f0",borderRadius:4}}),t.jsx("div",{style:{width:100,height:100,background:"#f0f0f0",borderRadius:4}}),t.jsx("div",{style:{width:100,height:100,background:"#f0f0f0",borderRadius:4}})]}):t.jsxs(d,{vertical:!0,gap:l.spacing.sm,children:[t.jsx("div",{style:{height:40,background:"#f0f0f0",borderRadius:4}}),t.jsx("div",{style:{height:40,background:"#f0f0f0",borderRadius:4}}),t.jsx("div",{style:{height:40,background:"#f0f0f0",borderRadius:4}})]})})]})}},ne={render:()=>{const[e,n]=ce.useState("week");return t.jsxs(d,{vertical:!0,gap:l.spacing.md,align:"center",children:[t.jsx(i,{options:[{label:"Day",value:"day"},{label:"Week",value:"week"},{label:"Month",value:"month"},{label:"Year",value:"year"}],value:e,onChange:a=>n(a.toString())}),t.jsx("div",{style:{width:400,height:200,background:"#f5f5f5",borderRadius:8,display:"flex",alignItems:"center",justifyContent:"center"},children:t.jsxs(T,{type:"secondary",children:["Chart for ",e,"ly data"]})})]})}},ae={render:()=>t.jsxs(d,{vertical:!0,gap:l.spacing.lg,style:{width:"100%"},children:[t.jsxs("div",{children:[t.jsx(T,{strong:!0,children:"Small"}),t.jsx(i,{size:"small",options:["Option 1","Option 2","Option 3"],defaultValue:"Option 1",style:{marginTop:l.spacing.sm}})]}),t.jsxs("div",{children:[t.jsx(T,{strong:!0,children:"Middle (Default)"}),t.jsx(i,{size:"middle",options:["Option 1","Option 2","Option 3"],defaultValue:"Option 1",style:{marginTop:l.spacing.sm}})]}),t.jsxs("div",{children:[t.jsx(T,{strong:!0,children:"Large"}),t.jsx(i,{size:"large",options:["Option 1","Option 2","Option 3"],defaultValue:"Option 1",style:{marginTop:l.spacing.sm}})]})]})},se={args:{options:["Option 1","Option 2","Option 3"],defaultValue:"Option 1",size:"middle",disabled:!1,block:!1},render:e=>t.jsx(i,{...e})};X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  args: {
    options: ['Daily', 'Weekly', 'Monthly'],
    defaultValue: 'Daily'
  }
}`,...X.parameters?.docs?.source}}};K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: () => <Flex vertical gap={layoutTokens.spacing.lg}>
      <div>
        <Text strong>String options</Text>
        <Segmented options={['Day', 'Week', 'Month']} defaultValue='Day' style={{
        marginTop: layoutTokens.spacing.sm
      }} />
      </div>
      <div>
        <Text strong>Object options with icons</Text>
        <Segmented options={[{
        label: 'List',
        value: 'list'
      }, {
        label: 'Grid',
        value: 'grid'
      }, {
        label: 'Card',
        value: 'card'
      }]} defaultValue='list' style={{
        marginTop: layoutTokens.spacing.sm
      }} />
      </div>
      <div>
        <Text strong>Mixed options</Text>
        <Segmented options={['All', {
        label: 'Active',
        value: 'active'
      }, {
        label: 'Completed',
        value: 'completed',
        disabled: true
      }]} defaultValue='All' style={{
        marginTop: layoutTokens.spacing.sm
      }} />
      </div>
    </Flex>
}`,...K.parameters?.docs?.source}}};Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => <Flex vertical gap={layoutTokens.spacing.md}>
      <Segmented size='large' options={['Large', 'Size']} defaultValue='Large' />
      <Segmented size='middle' options={['Middle', 'Size']} defaultValue='Middle' />
      <Segmented size='small' options={['Small', 'Size']} defaultValue='Small' />
    </Flex>
}`,...Y.parameters?.docs?.source}}};U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: () => <Flex vertical gap={layoutTokens.spacing.md} style={{
    width: '400px'
  }}>
      <Text strong>Block segmented (full width)</Text>
      <Segmented block options={['Option 1', 'Option 2', 'Option 3']} defaultValue='Option 1' />
      <Text strong>Default segmented</Text>
      <Segmented options={['Option 1', 'Option 2', 'Option 3']} defaultValue='Option 1' />
    </Flex>
}`,...U.parameters?.docs?.source}}};Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => <Flex vertical gap={layoutTokens.spacing.md}>
      <Segmented disabled options={['Disabled', 'Options']} defaultValue='Disabled' />
      <Segmented options={['Enabled', {
      label: 'Disabled option',
      value: 'disabled',
      disabled: true
    }, 'Active']} defaultValue='Enabled' />
    </Flex>
}`,...Z.parameters?.docs?.source}}};J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: () => <Flex vertical gap={layoutTokens.spacing.md}>
      <Segmented options={[{
      label: 'List',
      value: 'list',
      icon: '📋'
    }, {
      label: 'Grid',
      value: 'grid',
      icon: '🔲'
    }, {
      label: 'Card',
      value: 'card',
      icon: '🃏'
    }]} defaultValue='list' />
      <Segmented options={[{
      value: 'list',
      icon: '📋'
    }, {
      value: 'grid',
      icon: '🔲'
    }, {
      value: 'card',
      icon: '🃏'
    }]} defaultValue='list' />
    </Flex>
}`,...J.parameters?.docs?.source}}};Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = React.useState('daily');
    return <Flex vertical gap={layoutTokens.spacing.md}>
        <Segmented options={['daily', 'weekly', 'monthly']} value={value} onChange={value => setValue(value.toString())} />
        <Text>Current value: {value}</Text>
        <Flex gap={layoutTokens.spacing.sm}>
          <Button size='small' onClick={() => setValue('daily')}>
            Set Daily
          </Button>
          <Button size='small' onClick={() => setValue('weekly')}>
            Set Weekly
          </Button>
          <Button size='small' onClick={() => setValue('monthly')}>
            Set Monthly
          </Button>
        </Flex>
      </Flex>;
  }
}`,...Q.parameters?.docs?.source}}};ee.parameters={...ee.parameters,docs:{...ee.parameters?.docs,source:{originalSource:`{
  render: () => <Segmented options={[{
    label: <Flex gap={layoutTokens.spacing.xs} align='center'>
              <span>👍</span>
              <span>Like</span>
            </Flex>,
    value: 'like'
  }, {
    label: <Flex gap={layoutTokens.spacing.xs} align='center'>
              <span>❤️</span>
              <span>Love</span>
            </Flex>,
    value: 'love'
  }, {
    label: <Flex gap={layoutTokens.spacing.xs} align='center'>
              <span>😊</span>
              <span>Smile</span>
            </Flex>,
    value: 'smile'
  }]} defaultValue='like' />
}`,...ee.parameters?.docs?.source}}};te.parameters={...te.parameters,docs:{...te.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [view, setView] = React.useState('grid');
    return <Flex vertical gap={layoutTokens.spacing.md} style={{
      width: '100%'
    }}>
        <Flex justify='space-between' align='center'>
          <Text strong>Items</Text>
          <Segmented options={[{
          label: 'Grid',
          value: 'grid',
          icon: '🔲'
        }, {
          label: 'List',
          value: 'list',
          icon: '📋'
        }]} value={view} onChange={value => setView(value.toString())} />
        </Flex>
        <div style={{
        border: '1px solid #e0e0e0',
        borderRadius: 8,
        padding: layoutTokens.spacing.md
      }}>
          {view === 'grid' ? <Flex gap={layoutTokens.spacing.md} wrap='wrap'>
              <div style={{
            width: 100,
            height: 100,
            background: '#f0f0f0',
            borderRadius: 4
          }} />
              <div style={{
            width: 100,
            height: 100,
            background: '#f0f0f0',
            borderRadius: 4
          }} />
              <div style={{
            width: 100,
            height: 100,
            background: '#f0f0f0',
            borderRadius: 4
          }} />
            </Flex> : <Flex vertical gap={layoutTokens.spacing.sm}>
              <div style={{
            height: 40,
            background: '#f0f0f0',
            borderRadius: 4
          }} />
              <div style={{
            height: 40,
            background: '#f0f0f0',
            borderRadius: 4
          }} />
              <div style={{
            height: 40,
            background: '#f0f0f0',
            borderRadius: 4
          }} />
            </Flex>}
        </div>
      </Flex>;
  }
}`,...te.parameters?.docs?.source}}};ne.parameters={...ne.parameters,docs:{...ne.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [range, setRange] = React.useState('week');
    return <Flex vertical gap={layoutTokens.spacing.md} align='center'>
        <Segmented options={[{
        label: 'Day',
        value: 'day'
      }, {
        label: 'Week',
        value: 'week'
      }, {
        label: 'Month',
        value: 'month'
      }, {
        label: 'Year',
        value: 'year'
      }]} value={range} onChange={value => setRange(value.toString())} />
        <div style={{
        width: 400,
        height: 200,
        background: '#f5f5f5',
        borderRadius: 8,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
          <Text type='secondary'>Chart for {range}ly data</Text>
        </div>
      </Flex>;
  }
}`,...ne.parameters?.docs?.source}}};ae.parameters={...ae.parameters,docs:{...ae.parameters?.docs,source:{originalSource:`{
  render: () => <Flex vertical gap={layoutTokens.spacing.lg} style={{
    width: '100%'
  }}>
      <div>
        <Text strong>Small</Text>
        <Segmented size='small' options={['Option 1', 'Option 2', 'Option 3']} defaultValue='Option 1' style={{
        marginTop: layoutTokens.spacing.sm
      }} />
      </div>
      <div>
        <Text strong>Middle (Default)</Text>
        <Segmented size='middle' options={['Option 1', 'Option 2', 'Option 3']} defaultValue='Option 1' style={{
        marginTop: layoutTokens.spacing.sm
      }} />
      </div>
      <div>
        <Text strong>Large</Text>
        <Segmented size='large' options={['Option 1', 'Option 2', 'Option 3']} defaultValue='Option 1' style={{
        marginTop: layoutTokens.spacing.sm
      }} />
      </div>
    </Flex>
}`,...ae.parameters?.docs?.source}}};se.parameters={...se.parameters,docs:{...se.parameters?.docs,source:{originalSource:`{
  args: {
    options: ['Option 1', 'Option 2', 'Option 3'],
    defaultValue: 'Option 1',
    size: 'middle',
    disabled: false,
    block: false
  },
  render: args => <Segmented {...args} />
}`,...se.parameters?.docs?.source}}};const at=["Basic","OptionTypes","Sizes","Block","Disabled","WithIcons","Controlled","WithReactElements","ViewSwitcher","TimeRangeSwitcher","AllSizesComparison","Playground"];export{ae as AllSizesComparison,X as Basic,U as Block,Q as Controlled,Z as Disabled,K as OptionTypes,se as Playground,Y as Sizes,ne as TimeRangeSwitcher,te as ViewSwitcher,J as WithIcons,ee as WithReactElements,at as __namedExportsOrder,nt as default};
