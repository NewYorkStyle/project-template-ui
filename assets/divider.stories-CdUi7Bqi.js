import{u as l,f as ge,h as me,r as h,i as j,j as e,l as F}from"./iframe-Cg0C4Hta.js";import{g as xe,m as ve,u as ue,a as ye,b as Pe,F as B}from"./flex-BtykKlYL.js";import{T as je}from"./typography-BAMTZLsm.js";import"./preload-helper-PPVm8Dsz.js";const $e=r=>{const{componentCls:n}=r;return{[n]:{"&-horizontal":{[`&${n}`]:{"&-sm":{marginBlock:r.marginXS},"&-md":{marginBlock:r.margin}}}}}},Se=r=>{const{componentCls:n,sizePaddingEdgeHorizontal:p,colorSplit:d,lineWidth:o,textPaddingInline:_,orientationMargin:g,verticalMarginInline:H}=r,i=`${n}-rail`;return{[n]:{...ge(r),borderBlockStart:`${l(o)} solid ${d}`,[i]:{borderBlockStart:`${l(o)} solid ${d}`},"&-vertical":{position:"relative",top:"-0.06em",display:"inline-block",height:"0.9em",marginInline:H,marginBlock:0,verticalAlign:"middle",borderTop:0,borderInlineStart:`${l(o)} solid ${d}`},"&-horizontal":{display:"flex",clear:"both",width:"100%",minWidth:"100%",margin:`${l(r.marginLG)} 0`},[`&-horizontal${n}-with-text`]:{display:"flex",alignItems:"center",margin:`${l(r.dividerHorizontalWithTextGutterMargin)} 0`,color:r.colorTextHeading,fontWeight:500,fontSize:r.fontSizeLG,whiteSpace:"nowrap",textAlign:"center",borderBlockStart:`0 ${d}`,[`${i}-start, ${i}-end`]:{width:"50%",borderBlockStartColor:"inherit",borderBlockEnd:0,content:"''"}},[`&-horizontal${n}-with-text-start`]:{[`${i}-start`]:{width:`calc(${g} * 100%)`},[`${i}-end`]:{width:`calc(100% - ${g} * 100%)`}},[`&-horizontal${n}-with-text-end`]:{[`${i}-start`]:{width:`calc(100% - ${g} * 100%)`},[`${i}-end`]:{width:`calc(${g} * 100%)`}},[`${n}-inner-text`]:{display:"inline-block",paddingBlock:0,paddingInline:_},"&-dashed":{background:"none",borderColor:d,borderStyle:"dashed",borderWidth:`${l(o)} 0 0`,[i]:{borderBlockStart:`${l(o)} dashed ${d}`}},[`&-horizontal${n}-with-text${n}-dashed`]:{[`${i}-start, ${i}-end`]:{borderStyle:"dashed none none"}},[`&-vertical${n}-dashed`]:{borderInlineStartWidth:o,borderInlineEnd:0,borderBlockStart:0,borderBlockEnd:0},"&-dotted":{background:"none",borderColor:d,borderStyle:"dotted",borderWidth:`${l(o)} 0 0`,[i]:{borderBlockStart:`${l(o)} dotted ${d}`}},[`&-horizontal${n}-with-text${n}-dotted`]:{"&::before, &::after":{borderStyle:"dotted none none"}},[`&-vertical${n}-dotted`]:{borderInlineStartWidth:o,borderInlineEnd:0,borderBlockStart:0,borderBlockEnd:0},[`&-plain${n}-with-text`]:{color:r.colorText,fontWeight:"normal",fontSize:r.fontSize},[`&-horizontal${n}-with-text-start${n}-no-default-orientation-margin-start`]:{[`${i}-start`]:{width:0},[`${i}-end`]:{width:"100%"},[`${n}-inner-text`]:{paddingInlineStart:p}},[`&-horizontal${n}-with-text-end${n}-no-default-orientation-margin-end`]:{[`${i}-start`]:{width:"100%"},[`${i}-end`]:{width:0},[`${n}-inner-text`]:{paddingInlineEnd:p}}}}},ze=r=>({textPaddingInline:"1em",orientationMargin:.05,verticalMarginInline:r.marginXS}),we=xe("Divider",r=>{const n=ve(r,{dividerHorizontalWithTextGutterMargin:r.margin,sizePaddingEdgeHorizontal:0});return[Se(n),$e(n)]},ze,{unitless:{orientationMargin:!0}}),fe=["left","right","center","start","end"],be={small:"sm",middle:"md"},De=r=>{const{getPrefixCls:n,direction:p,className:d,style:o,classNames:_,styles:g}=me("divider"),{prefixCls:H,type:i,orientation:y,vertical:U,titlePlacement:L,orientationMargin:c,className:Y,rootClassName:Z,children:m,dashed:ee,variant:R="solid",plain:re,style:ne,size:ae,classNames:te,styles:ie,...se}=r,s=n("divider",H),v=`${s}-rail`,[oe,de]=we(s),A=ue(ae),G=be[A],V=!!m,X=fe.includes(y||""),P=h.useMemo(()=>{const O=L??(X?y:"center");return O==="left"?p==="rtl"?"end":"start":O==="right"?p==="rtl"?"start":"end":O},[p,y,L,X]),q=P==="start"&&c!=null,J=P==="end"&&c!=null,[K,le]=ye(y,U,i),ce={...r,orientation:K,titlePlacement:P,size:A},[x,u]=Pe([_,te],[g,ie],{props:ce}),he=j(s,d,oe,de,`${s}-${K}`,{[`${s}-with-text`]:V,[`${s}-with-text-${P}`]:V,[`${s}-dashed`]:!!ee,[`${s}-${R}`]:R!=="solid",[`${s}-plain`]:!!re,[`${s}-rtl`]:p==="rtl",[`${s}-no-default-orientation-margin-start`]:q,[`${s}-no-default-orientation-margin-end`]:J,[`${s}-${G}`]:!!G,[v]:!m,[x.rail]:x.rail&&!m},Y,Z,x.root),Q=h.useMemo(()=>typeof c=="number"?c:/^\d+$/.test(c)?Number(c):c,[c]),pe={marginInlineStart:q?Q:void 0,marginInlineEnd:J?Q:void 0};return h.createElement("div",{className:he,style:{...o,...u.root,...m?{}:u.rail,...ne},...se,role:"separator"},m&&!le&&h.createElement(h.Fragment,null,h.createElement("div",{className:j(v,`${v}-start`,x.rail),style:u.rail}),h.createElement("span",{className:j(`${s}-inner-text`,x.content),style:{...pe,...u.content}},m),h.createElement("div",{className:j(v,`${v}-end`,x.rail),style:u.rail})))},t=r=>e.jsx(De,{...r});try{t.displayName="Divider",t.__docgenInfo={description:"",displayName:"Divider",props:{}}}catch{}const{Paragraph:a}=je,Me={title:"Components/Divider",component:t,tags:["autodocs"],argTypes:{type:{control:"select",options:["horizontal","vertical"],description:"Направление разделителя"},orientation:{control:"select",options:["left","right","center"],description:"Позиция текста в разделителе"},orientationMargin:{control:"number",description:"Отступ текста от разделителя"},dashed:{control:"boolean",description:"Пунктирный стиль"},plain:{control:"boolean",description:"Обычный текст без жирного начертания"},children:{control:"text",description:"Текст или элементы внутри разделителя"}},parameters:{layout:"centered",backgrounds:{default:"light"}}},$={args:{type:"horizontal"},render:r=>e.jsxs("div",{style:{width:"300px"},children:[e.jsx(a,{children:"Контент сверху"}),e.jsx(t,{...r}),e.jsx(a,{children:"Контент снизу"})]})},S={args:{type:"vertical"},render:r=>e.jsxs("div",{style:{height:"100px",display:"flex",alignItems:"center"},children:[e.jsx("span",{children:"Левый контент"}),e.jsx(t,{...r}),e.jsx("span",{children:"Правый контент"})]})},z={args:{children:"Разделитель",type:"horizontal"},render:r=>e.jsxs("div",{style:{width:"400px"},children:[e.jsx(a,{children:"Контент сверху"}),e.jsx(t,{...r}),e.jsx(a,{children:"Контент снизу"})]})},w={args:{children:"Слева",titlePlacement:"left",type:"horizontal"},render:r=>e.jsxs("div",{style:{width:"400px"},children:[e.jsx(a,{children:"Контент сверху"}),e.jsx(t,{...r}),e.jsx(a,{children:"Контент снизу"})]})},f={args:{children:"Справа",titlePlacement:"right",type:"horizontal"},render:r=>e.jsxs("div",{style:{width:"400px"},children:[e.jsx(a,{children:"Контент сверху"}),e.jsx(t,{...r}),e.jsx(a,{children:"Контент снизу"})]})},b={args:{children:"По центру",titlePlacement:"center",type:"horizontal"},render:r=>e.jsxs("div",{style:{width:"400px"},children:[e.jsx(a,{children:"Контент сверху"}),e.jsx(t,{...r}),e.jsx(a,{children:"Контент снизу"})]})},D={args:{dashed:!0,type:"horizontal"},render:r=>e.jsxs("div",{style:{width:"300px"},children:[e.jsx(a,{children:"Пунктирный разделитель"}),e.jsx(t,{...r}),e.jsx(a,{children:"Контент снизу"})]})},C={args:{children:"Обычный текст",plain:!0,type:"horizontal"},render:r=>e.jsxs("div",{style:{width:"400px"},children:[e.jsx(a,{children:"Контент сверху"}),e.jsx(t,{...r}),e.jsx(a,{children:"Контент снизу"})]})},T={args:{children:"С отступом",titlePlacement:"left",orientationMargin:50,type:"horizontal"},render:r=>e.jsxs("div",{style:{width:"400px"},children:[e.jsx(a,{children:"Контент сверху"}),e.jsx(t,{...r}),e.jsx(a,{children:"Контент снизу"})]})},I={render:()=>e.jsxs(B,{gap:F.spacing.md,align:"center",children:[e.jsx("span",{children:"Элемент 1"}),e.jsx(t,{orientation:"vertical"}),e.jsx("span",{children:"Элемент 2"}),e.jsx(t,{orientation:"vertical"}),e.jsx("span",{children:"Элемент 3"})]})},W={render:()=>e.jsxs(B,{vertical:!0,gap:F.spacing.md,style:{width:"300px"},children:[e.jsx("span",{children:"Элемент 1"}),e.jsx(t,{orientation:"horizontal"}),e.jsx("span",{children:"Элемент 2"}),e.jsx(t,{orientation:"horizontal"}),e.jsx("span",{children:"Элемент 3"})]})},M={render:()=>e.jsxs(B,{vertical:!0,gap:F.spacing.lg,style:{width:"400px"},children:[e.jsxs("div",{children:[e.jsx(a,{children:"Слева:"}),e.jsx(t,{titlePlacement:"left",children:"Текст"})]}),e.jsxs("div",{children:[e.jsx(a,{children:"По центру:"}),e.jsx(t,{titlePlacement:"center",children:"Текст"})]}),e.jsxs("div",{children:[e.jsx(a,{children:"Справа:"}),e.jsx(t,{titlePlacement:"right",children:"Текст"})]})]})},k={render:()=>e.jsxs(B,{vertical:!0,gap:F.spacing.lg,style:{width:"400px"},children:[e.jsxs("div",{children:[e.jsx(a,{children:"Обычный:"}),e.jsx(t,{})]}),e.jsxs("div",{children:[e.jsx(a,{children:"Пунктирный:"}),e.jsx(t,{dashed:!0})]}),e.jsxs("div",{children:[e.jsx(a,{children:"С текстом:"}),e.jsx(t,{children:"С текстом"})]}),e.jsxs("div",{children:[e.jsx(a,{children:"С текстом и пунктиром:"}),e.jsx(t,{dashed:!0,children:"Пунктир с текстом"})]})]})},E={render:()=>e.jsxs("div",{style:{width:"400px"},children:[e.jsx(a,{children:"Разделитель с иконкой:"}),e.jsx(t,{children:"★ Разделитель ★"}),e.jsx(a,{children:"Контент после разделителя"})]})},N={args:{children:"Playground",type:"horizontal",titlePlacement:"center",dashed:!1,plain:!1},render:r=>e.jsxs("div",{style:{width:"500px"},children:[e.jsx(a,{children:"Верхний контент"}),e.jsx(t,{...r}),e.jsx(a,{children:"Нижний контент"})]})};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'horizontal'
  },
  render: args => <div style={{
    width: '300px'
  }}>
      <Paragraph>Контент сверху</Paragraph>
      <Divider {...args} />
      <Paragraph>Контент снизу</Paragraph>
    </div>
}`,...$.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'vertical'
  },
  render: args => <div style={{
    height: '100px',
    display: 'flex',
    alignItems: 'center'
  }}>
      <span>Левый контент</span>
      <Divider {...args} />
      <span>Правый контент</span>
    </div>
}`,...S.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Разделитель',
    type: 'horizontal'
  },
  render: args => <div style={{
    width: '400px'
  }}>
      <Paragraph>Контент сверху</Paragraph>
      <Divider {...args} />
      <Paragraph>Контент снизу</Paragraph>
    </div>
}`,...z.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Слева',
    titlePlacement: 'left',
    type: 'horizontal'
  },
  render: args => <div style={{
    width: '400px'
  }}>
      <Paragraph>Контент сверху</Paragraph>
      <Divider {...args} />
      <Paragraph>Контент снизу</Paragraph>
    </div>
}`,...w.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Справа',
    titlePlacement: 'right',
    type: 'horizontal'
  },
  render: args => <div style={{
    width: '400px'
  }}>
      <Paragraph>Контент сверху</Paragraph>
      <Divider {...args} />
      <Paragraph>Контент снизу</Paragraph>
    </div>
}`,...f.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'По центру',
    titlePlacement: 'center',
    type: 'horizontal'
  },
  render: args => <div style={{
    width: '400px'
  }}>
      <Paragraph>Контент сверху</Paragraph>
      <Divider {...args} />
      <Paragraph>Контент снизу</Paragraph>
    </div>
}`,...b.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    dashed: true,
    type: 'horizontal'
  },
  render: args => <div style={{
    width: '300px'
  }}>
      <Paragraph>Пунктирный разделитель</Paragraph>
      <Divider {...args} />
      <Paragraph>Контент снизу</Paragraph>
    </div>
}`,...D.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Обычный текст',
    plain: true,
    type: 'horizontal'
  },
  render: args => <div style={{
    width: '400px'
  }}>
      <Paragraph>Контент сверху</Paragraph>
      <Divider {...args} />
      <Paragraph>Контент снизу</Paragraph>
    </div>
}`,...C.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'С отступом',
    titlePlacement: 'left',
    orientationMargin: 50,
    type: 'horizontal'
  },
  render: args => <div style={{
    width: '400px'
  }}>
      <Paragraph>Контент сверху</Paragraph>
      <Divider {...args} />
      <Paragraph>Контент снизу</Paragraph>
    </div>
}`,...T.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => <Flex gap={layoutTokens.spacing.md} align='center'>
      <span>Элемент 1</span>
      <Divider orientation='vertical' />
      <span>Элемент 2</span>
      <Divider orientation='vertical' />
      <span>Элемент 3</span>
    </Flex>
}`,...I.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: () => <Flex vertical gap={layoutTokens.spacing.md} style={{
    width: '300px'
  }}>
      <span>Элемент 1</span>
      <Divider orientation='horizontal' />
      <span>Элемент 2</span>
      <Divider orientation='horizontal' />
      <span>Элемент 3</span>
    </Flex>
}`,...W.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => <Flex vertical gap={layoutTokens.spacing.lg} style={{
    width: '400px'
  }}>
      <div>
        <Paragraph>Слева:</Paragraph>
        <Divider titlePlacement='left'>Текст</Divider>
      </div>
      <div>
        <Paragraph>По центру:</Paragraph>
        <Divider titlePlacement='center'>Текст</Divider>
      </div>
      <div>
        <Paragraph>Справа:</Paragraph>
        <Divider titlePlacement='right'>Текст</Divider>
      </div>
    </Flex>
}`,...M.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => <Flex vertical gap={layoutTokens.spacing.lg} style={{
    width: '400px'
  }}>
      <div>
        <Paragraph>Обычный:</Paragraph>
        <Divider />
      </div>
      <div>
        <Paragraph>Пунктирный:</Paragraph>
        <Divider dashed />
      </div>
      <div>
        <Paragraph>С текстом:</Paragraph>
        <Divider>С текстом</Divider>
      </div>
      <div>
        <Paragraph>С текстом и пунктиром:</Paragraph>
        <Divider dashed>Пунктир с текстом</Divider>
      </div>
    </Flex>
}`,...k.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '400px'
  }}>
      <Paragraph>Разделитель с иконкой:</Paragraph>
      <Divider>★ Разделитель ★</Divider>
      <Paragraph>Контент после разделителя</Paragraph>
    </div>
}`,...E.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Playground',
    type: 'horizontal',
    titlePlacement: 'center',
    dashed: false,
    plain: false
  },
  render: args => <div style={{
    width: '500px'
  }}>
      <Paragraph>Верхний контент</Paragraph>
      <Divider {...args} />
      <Paragraph>Нижний контент</Paragraph>
    </div>
}`,...N.parameters?.docs?.source}}};const ke=["Horizontal","Vertical","WithText","WithTextLeft","WithTextRight","WithTextCenter","Dashed","Plain","WithOrientationMargin","InFlexRow","InFlexColumn","AllOrientations","TypesComparison","WithCustomContent","Playground"];export{M as AllOrientations,D as Dashed,$ as Horizontal,W as InFlexColumn,I as InFlexRow,C as Plain,N as Playground,k as TypesComparison,S as Vertical,E as WithCustomContent,T as WithOrientationMargin,z as WithText,b as WithTextCenter,w as WithTextLeft,f as WithTextRight,ke as __namedExportsOrder,Me as default};
