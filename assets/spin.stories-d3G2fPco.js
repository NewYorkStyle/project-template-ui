import{r as a,k as Se,i as h,s as Te,f as ve,h as be,j as t,R as b,l as d}from"./iframe-Dl7DKvET.js";import{K as oe,T as Ce}from"./typography-BeaTB5Xy.js";import{g as ke,m as je,c as ce,b as $e,F as z}from"./flex-kTLNRB8Y.js";import{B as J}from"./button-hanavTsf.js";import"./preload-helper-PPVm8Dsz.js";import"./Button-BBfvcWdO.js";import"./client-D0ErMLyZ.js";function we(e,n,i){var s=i||{},o=s.noTrailing,r=o===void 0?!1:o,c=s.noLeading,p=c===void 0?!1:c,u=s.debounceMode,y=u===void 0?void 0:u,f,C=!1,x=0;function L(){f&&clearTimeout(f)}function q(k){var j=k||{},S=j.upcomingOnly,w=S===void 0?!1:S;L(),C=!w}function E(){for(var k=arguments.length,j=new Array(k),S=0;S<k;S++)j[S]=arguments[S];var w=this,R=Date.now()-x;if(C)return;function $(){x=Date.now(),n.apply(w,j)}function I(){f=void 0}!p&&y&&!f&&$(),L(),y===void 0&&R>e?p?(x=Date.now(),r||(f=setTimeout(y?I:$,e))):$():r!==!0&&(f=setTimeout(y?I:$,y===void 0?e-R:e))}return E.cancel=q,E}function Ne(e,n,i){var s={},o=s.atBegin,r=o===void 0?!1:o;return we(e,n,{debounceMode:r!==!1})}const X=100,de=X/5,le=X/2-de/2,Y=le*2*Math.PI,se=50,re=e=>{const{dotClassName:n,style:i,hasCircleCls:s}=e;return a.createElement("circle",{className:h(`${n}-circle`,{[`${n}-circle-bg`]:s}),r:le,cx:se,cy:se,strokeWidth:de,style:i})},ze=({percent:e,prefixCls:n})=>{const i=`${n}-dot`,s=`${i}-holder`,o=`${s}-hidden`,[r,c]=a.useState(!1);Se(()=>{e!==0&&c(!0)},[e!==0]);const p=Math.max(Math.min(e,100),0);if(!r)return null;const u={strokeDashoffset:`${Y/4}`,strokeDasharray:`${Y*p/100} ${Y*(100-p)/100}`};return a.createElement("span",{className:h(s,`${i}-progress`,p<=0&&o)},a.createElement("svg",{viewBox:`0 0 ${X} ${X}`,role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":p},a.createElement(re,{dotClassName:i,hasCircleCls:!0}),a.createElement(re,{dotClassName:i,style:u})))};function Le(e){const{prefixCls:n,percent:i=0,className:s,style:o}=e,r=`${n}-dot`,c=`${r}-holder`,p=`${c}-hidden`;return a.createElement(a.Fragment,null,a.createElement("span",{className:h(c,s,i>0&&p),style:o},a.createElement("span",{className:h(r,`${n}-dot-spin`)},[1,2,3,4].map(u=>a.createElement("i",{className:`${n}-dot-item`,key:u})))),a.createElement(ze,{prefixCls:n,percent:i}))}function Ee(e){const{prefixCls:n,indicator:i,percent:s,className:o,style:r}=e,c=`${n}-dot`;return i&&a.isValidElement(i)?Te(i,p=>({className:h(p.className,c,o),style:{...p.style,...r},percent:s})):a.createElement(Le,{prefixCls:n,percent:s,className:o,style:r})}const Re=new oe("antSpinMove",{to:{opacity:1}}),Ie=new oe("antRotate",{to:{transform:"rotate(405deg)"}}),De=e=>{const{componentCls:n}=e,i=`${n}-section`;return{[n]:{...ve(e),position:"relative","&-rtl":{direction:"rtl"},[`&${i}, ${i}`]:{display:"flex",alignItems:"center",flexDirection:"column",gap:e.paddingSM,color:e.colorPrimary},[`&${i}`]:{display:"inline-flex"},[i]:{position:"absolute",top:"50%",left:{_skip_check_:!0,value:"50%"},transform:"translate(-50%, -50%)",zIndex:1},[`${n}-description`]:{fontSize:e.fontSize,lineHeight:1},[`${n}-container`]:{position:"relative",transition:`opacity ${e.motionDurationSlow}`,"&::after":{position:"absolute",top:0,insetInlineEnd:0,bottom:0,insetInlineStart:0,zIndex:10,width:"100%",height:"100%",background:e.colorBgContainer,opacity:0,transition:`all ${e.motionDurationSlow}`,content:'""',pointerEvents:"none"}},"&-spinning":{[`${n}-description`]:{textShadow:`0 0px 5px ${e.colorBgContainer}`},[`${n}-container`]:{clear:"both",opacity:.5,userSelect:"none",pointerEvents:"none","&::after":{opacity:.4,pointerEvents:"auto"}}},"&-fullscreen":{position:"fixed",inset:0,backgroundColor:e.colorBgMask,zIndex:e.zIndexPopupBase,opacity:0,pointerEvents:"none",transition:`all ${e.motionDurationMid}`,[`&${n}-spinning`]:{opacity:1,pointerEvents:"auto"},[i]:{color:e.colorWhite,[`${n}-description`]:{color:e.colorTextLightSolid}}}}}},Be=e=>{const{componentCls:n,antCls:i,motionDurationSlow:s}=e,[o,r]=ce(i,"spin");return{[n]:{[o("dot-holder-size")]:e.dotSize,[o("dot-item-size")]:`calc((${r("dot-holder-size")} - ${e.marginXXS} / 2) / 2)`,[`${n}-dot`]:{"&-holder":{width:"1em",height:"1em",fontSize:r("dot-holder-size"),display:"inline-block",transition:["transform","opacity"].map(c=>`${c} ${s} ease`).join(", "),transformOrigin:"50% 50%",lineHeight:1,"&-hidden":{transform:"scale(0.3)",opacity:0}},position:"relative",display:"inline-block",fontSize:r("dot-holder-size"),width:"1em",height:"1em","&-spin":{transform:"rotate(45deg)",animationName:Ie,animationDuration:"1.2s",animationIterationCount:"infinite",animationTimingFunction:"linear"},"&-item":{position:"absolute",display:"block",width:r("dot-item-size"),height:r("dot-item-size"),background:"currentColor",borderRadius:"100%",transform:"scale(0.75)",transformOrigin:"50% 50%",opacity:.3,animationName:Re,animationDuration:"1s",animationIterationCount:"infinite",animationTimingFunction:"linear",animationDirection:"alternate","&:nth-child(1)":{top:0,insetInlineStart:0,animationDelay:"0s"},"&:nth-child(2)":{top:0,insetInlineEnd:0,animationDelay:"0.4s"},"&:nth-child(3)":{insetInlineEnd:0,bottom:0,animationDelay:"0.8s"},"&:nth-child(4)":{bottom:0,insetInlineStart:0,animationDelay:"1.2s"}},"&-progress":{position:"absolute",left:"50%",top:0,transform:"translateX(-50%)"},"&-circle":{strokeLinecap:"round",transition:["stroke-dashoffset","stroke-dasharray","stroke","stroke-width","opacity"].map(c=>`${c} ${s} ease`).join(","),fillOpacity:0,stroke:"currentcolor"},"&-circle-bg":{stroke:e.colorFillSecondary}}}}},Fe=e=>{const{componentCls:n}=e,[i]=ce(e.antCls,"spin");return{[n]:{"&-sm":{[i("dot-holder-size")]:e.dotSizeSM},"&-lg":{[i("dot-holder-size")]:e.dotSizeLG}}}},Pe=e=>{const{controlHeightLG:n,controlHeight:i}=e;return{contentHeight:400,dotSize:n/2,dotSizeSM:n*.35,dotSizeLG:i}},Me=ke("Spin",e=>{const n=je(e,{spinDotDefault:e.colorTextDescription});return[De(n),Be(n),Fe(n)]},Pe),_e=200,ae=[[30,.05],[70,.03],[96,.01]];function We(e,n){const[i,s]=a.useState(0),o=a.useRef(null),r=n==="auto";return a.useEffect(()=>(r&&e&&(s(0),o.current=setInterval(()=>{s(c=>{const p=100-c;for(let u=0;u<ae.length;u+=1){const[y,f]=ae[u];if(c<=y)return c+p*f}return c})},_e)),()=>{o.current&&(clearInterval(o.current),o.current=null)}),[r,e]),r?i:n}let pe;function Ae(e,n){return!!e&&!!n&&!Number.isNaN(Number(n))}const ge=e=>{const{prefixCls:n,spinning:i=!0,delay:s=0,className:o,rootClassName:r,size:c="default",tip:p,description:u,wrapperClassName:y,style:f,children:C,fullscreen:x=!1,indicator:L,percent:q,classNames:E,styles:k,...j}=e,{getPrefixCls:S,direction:w,indicator:R,className:$,style:I,classNames:ue,styles:me}=be("spin"),m=S("spin",n),[fe,he]=Me(m),[N,Z]=a.useState(()=>i&&!Ae(i,s)),ee=We(N,q);a.useEffect(()=>{if(i){const ie=Ne(s,()=>{Z(!0)});return ie(),()=>{ie?.cancel?.()}}Z(!1)},[s,i]);const D=u??p,ye={...e,size:c,spinning:N,tip:D,description:D,fullscreen:x,children:C,percent:ee},[T,v]=$e([ue,E],[me,k],{props:ye}),xe=L??R??pe,ne=typeof C<"u",Q=ne||x,te=a.createElement(a.Fragment,null,a.createElement(Ee,{className:h(T.indicator),style:v.indicator,prefixCls:m,indicator:xe,percent:ee}),D&&a.createElement("div",{className:h(`${m}-description`,T.tip,T.description),style:{...v.tip,...v.description}},D));return a.createElement("div",{className:h(m,{[`${m}-sm`]:c==="small",[`${m}-lg`]:c==="large",[`${m}-spinning`]:N,[`${m}-rtl`]:w==="rtl",[`${m}-fullscreen`]:x},r,T.root,x&&T.mask,Q?y:[`${m}-section`,T.section],$,o,fe,he),style:{...v.root,...Q?{}:v.section,...x?v.mask:{},...I,...f},"aria-live":"polite","aria-busy":N,...j},N&&(Q?a.createElement("div",{className:h(`${m}-section`,T.section),style:v.section},te):te),ne&&a.createElement("div",{className:h(`${m}-container`,T.container),style:v.container},C))};ge.setDefaultIndicator=e=>{pe=e};const l=e=>t.jsx(ge,{...e});try{l.displayName="Spin",l.__docgenInfo={description:"",displayName:"Spin",props:{}}}catch{}const{Text:g}=Ce,Je={title:"Components/Spin",component:l,tags:["autodocs"],argTypes:{size:{control:"select",options:["small","default","large"],description:"Размер спиннера"},spinning:{control:"boolean",description:"Состояние вращения"},tip:{control:"text",description:"Текст подсказки"},delay:{control:"number",description:"Задержка перед отображением (мс)"},indicator:{control:!1,description:"Кастомный индикатор"},fullscreen:{control:"boolean",description:"Полноэкранный режим"}},parameters:{layout:"centered",backgrounds:{default:"light"}}},B={args:{spinning:!0}},F={render:()=>t.jsxs(z,{gap:d.spacing.lg,align:"center",children:[t.jsx(l,{size:"small"}),t.jsx(l,{size:"default"}),t.jsx(l,{size:"large"})]})},P={args:{spinning:!0,tip:"Loading..."}},M={render:()=>t.jsx(l,{spinning:!0,description:"Please wait...",size:"large",children:t.jsx("div",{style:{padding:d.spacing.lg,background:"#f5f5f5",borderRadius:8,minWidth:300},children:t.jsx(g,{children:"Content is loading..."})})})},_={render:()=>t.jsx(l,{spinning:!0,children:t.jsxs("div",{style:{padding:d.spacing.lg,background:"#f5f5f5",borderRadius:8,width:300},children:[t.jsx(g,{children:"This content will be covered by spin overlay"}),t.jsx("div",{style:{marginTop:d.spacing.md,height:100,background:"#e0e0e0",borderRadius:4}})]})})},W={render:()=>{const[e,n]=b.useState(!1),i=()=>{n(!0),setTimeout(()=>n(!1),3e3)};return t.jsxs(z,{vertical:!0,gap:d.spacing.md,align:"center",children:[t.jsx(l,{spinning:e,delay:500,children:t.jsx("div",{style:{padding:d.spacing.lg,background:"#f5f5f5",borderRadius:8,width:300},children:t.jsx(g,{children:"Content with 500ms delay before showing spinner"})})}),t.jsx(J,{type:"primary",onClick:i,children:"Start Loading"})]})}},A={render:()=>t.jsx(l,{spinning:!0,indicator:t.jsx("div",{style:{fontSize:24,animation:"spin 1s linear infinite"},children:"⚡"}),children:t.jsx("div",{style:{padding:d.spacing.lg,background:"#f5f5f5",borderRadius:8,width:300},children:t.jsx(g,{children:"Custom indicator spinner"})})})},O={render:()=>{const[e,n]=b.useState(!1),i=()=>{n(!0),setTimeout(()=>n(!1),3e3)};return t.jsxs(z,{vertical:!0,gap:d.spacing.md,children:[t.jsx(J,{type:"primary",onClick:i,children:"Show Fullscreen Spin"}),t.jsx(l,{fullscreen:!0,spinning:e,description:"Loading..."})]})}},H={render:()=>{const[e,n]=b.useState(!1),i=()=>{n(!0),setTimeout(()=>n(!1),3e3)};return t.jsxs(z,{vertical:!0,gap:d.spacing.md,style:{width:400},children:[t.jsx(J,{type:"primary",onClick:i,children:"Load Content"}),t.jsx(l,{spinning:e,description:"Loading data...",children:t.jsxs("div",{style:{padding:d.spacing.md,border:"1px solid #e0e0e0",borderRadius:8},children:[t.jsx(g,{strong:!0,children:"User Information"}),t.jsx("div",{style:{marginTop:d.spacing.md},children:t.jsx(g,{children:"Name: John Doe"})}),t.jsx("div",{children:t.jsx(g,{children:"Email: john@example.com"})}),t.jsx("div",{children:t.jsx(g,{children:"Role: Administrator"})})]})})]})}},V={render:()=>t.jsxs(z,{gap:d.spacing.lg,children:[t.jsx(l,{size:"small",spinning:!0,description:"Small"}),t.jsx(l,{size:"default",spinning:!0,description:"Default"}),t.jsx(l,{size:"large",spinning:!0,description:"Large"})]})},G={render:()=>{const[e,n]=b.useState(!0),[i,s]=b.useState([]);return b.useEffect(()=>{setTimeout(()=>{s(["Item 1","Item 2","Item 3","Item 4"]),n(!1)},2e3)},[]),t.jsx(l,{spinning:e,description:"Fetching data...",children:t.jsxs("div",{style:{width:300,padding:d.spacing.md,border:"1px solid #e0e0e0",borderRadius:8},children:[t.jsx(g,{strong:!0,children:"Data List"}),t.jsx("ul",{style:{marginTop:d.spacing.md,marginBottom:0},children:i.map((o,r)=>t.jsx("li",{children:t.jsx(g,{children:o})},r))})]})})}},U={render:()=>{const[e,n]=b.useState(!0);return b.useEffect(()=>{setTimeout(()=>n(!1),2e3)},[]),t.jsx(l,{spinning:e,description:"Loading card...",children:t.jsxs("div",{style:{width:300,padding:d.spacing.lg,border:"1px solid #e0e0e0",borderRadius:12,background:"white"},children:[t.jsx("div",{style:{width:"100%",height:120,background:"#f0f0f0",borderRadius:8,marginBottom:d.spacing.md}}),t.jsx(g,{strong:!0,children:"Card Title"}),t.jsx(g,{type:"secondary",style:{display:"block",marginTop:d.spacing.xs},children:"Card description text goes here. This is a sample card content."}),t.jsx(J,{type:"primary",style:{marginTop:d.spacing.md},block:!0,children:"View Details"})]})})}},K={args:{spinning:!0,size:"default",tip:"Loading...",delay:0},render:e=>t.jsx("div",{style:{padding:d.spacing.lg},children:t.jsx(l,{...e,children:t.jsxs("div",{style:{padding:d.spacing.lg,background:"#f5f5f5",borderRadius:8,minWidth:300,textAlign:"center"},children:[t.jsx(g,{children:"Content wrapped by spin"}),t.jsx("div",{style:{marginTop:d.spacing.md,height:100,background:"#e0e0e0",borderRadius:4}})]})})})};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    spinning: true
  }
}`,...B.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: () => <Flex gap={layoutTokens.spacing.lg} align='center'>
      <Spin size='small' />
      <Spin size='default' />
      <Spin size='large' />
    </Flex>
}`,...F.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    spinning: true,
    tip: 'Loading...'
  }
}`,...P.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => <Spin spinning description='Please wait...' size='large'>
      <div style={{
      padding: layoutTokens.spacing.lg,
      background: '#f5f5f5',
      borderRadius: 8,
      minWidth: 300
    }}>
        <Text>Content is loading...</Text>
      </div>
    </Spin>
}`,...M.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <Spin spinning>
      <div style={{
      padding: layoutTokens.spacing.lg,
      background: '#f5f5f5',
      borderRadius: 8,
      width: 300
    }}>
        <Text>This content will be covered by spin overlay</Text>
        <div style={{
        marginTop: layoutTokens.spacing.md,
        height: 100,
        background: '#e0e0e0',
        borderRadius: 4
      }} />
      </div>
    </Spin>
}`,..._.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [spinning, setSpinning] = React.useState(false);
    const handleClick = () => {
      setSpinning(true);
      setTimeout(() => setSpinning(false), 3000);
    };
    return <Flex vertical gap={layoutTokens.spacing.md} align='center'>
        <Spin spinning={spinning} delay={500}>
          <div style={{
          padding: layoutTokens.spacing.lg,
          background: '#f5f5f5',
          borderRadius: 8,
          width: 300
        }}>
            <Text>Content with 500ms delay before showing spinner</Text>
          </div>
        </Spin>
        <Button type='primary' onClick={handleClick}>
          Start Loading
        </Button>
      </Flex>;
  }
}`,...W.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => <Spin spinning indicator={<div style={{
    fontSize: 24,
    animation: 'spin 1s linear infinite'
  }}>
          ⚡
        </div>}>
      <div style={{
      padding: layoutTokens.spacing.lg,
      background: '#f5f5f5',
      borderRadius: 8,
      width: 300
    }}>
        <Text>Custom indicator spinner</Text>
      </div>
    </Spin>
}`,...A.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [spinning, setSpinning] = React.useState(false);
    const handleClick = () => {
      setSpinning(true);
      setTimeout(() => setSpinning(false), 3000);
    };
    return <Flex vertical gap={layoutTokens.spacing.md}>
        <Button type='primary' onClick={handleClick}>
          Show Fullscreen Spin
        </Button>
        <Spin fullscreen spinning={spinning} description='Loading...' />
      </Flex>;
  }
}`,...O.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [loading, setLoading] = React.useState(false);
    const handleLoad = () => {
      setLoading(true);
      setTimeout(() => setLoading(false), 3000);
    };
    return <Flex vertical gap={layoutTokens.spacing.md} style={{
      width: 400
    }}>
        <Button type='primary' onClick={handleLoad}>
          Load Content
        </Button>
        <Spin spinning={loading} description='Loading data...'>
          <div style={{
          padding: layoutTokens.spacing.md,
          border: '1px solid #e0e0e0',
          borderRadius: 8
        }}>
            <Text strong>User Information</Text>
            <div style={{
            marginTop: layoutTokens.spacing.md
          }}>
              <Text>Name: John Doe</Text>
            </div>
            <div>
              <Text>Email: john@example.com</Text>
            </div>
            <div>
              <Text>Role: Administrator</Text>
            </div>
          </div>
        </Spin>
      </Flex>;
  }
}`,...H.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: () => <Flex gap={layoutTokens.spacing.lg}>
      <Spin size='small' spinning description='Small' />
      <Spin size='default' spinning description='Default' />
      <Spin size='large' spinning description='Large' />
    </Flex>
}`,...V.parameters?.docs?.source}}};G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [loading, setLoading] = React.useState(true);
    const [data, setData] = React.useState<string[]>([]);
    React.useEffect(() => {
      setTimeout(() => {
        setData(['Item 1', 'Item 2', 'Item 3', 'Item 4']);
        setLoading(false);
      }, 2000);
    }, []);
    return <Spin spinning={loading} description='Fetching data...'>
        <div style={{
        width: 300,
        padding: layoutTokens.spacing.md,
        border: '1px solid #e0e0e0',
        borderRadius: 8
      }}>
          <Text strong>Data List</Text>
          <ul style={{
          marginTop: layoutTokens.spacing.md,
          marginBottom: 0
        }}>
            {data.map((item, index) => <li key={index}>
                <Text>{item}</Text>
              </li>)}
          </ul>
        </div>
      </Spin>;
  }
}`,...G.parameters?.docs?.source}}};U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [loading, setLoading] = React.useState(true);
    React.useEffect(() => {
      setTimeout(() => setLoading(false), 2000);
    }, []);
    return <Spin spinning={loading} description='Loading card...'>
        <div style={{
        width: 300,
        padding: layoutTokens.spacing.lg,
        border: '1px solid #e0e0e0',
        borderRadius: 12,
        background: 'white'
      }}>
          <div style={{
          width: '100%',
          height: 120,
          background: '#f0f0f0',
          borderRadius: 8,
          marginBottom: layoutTokens.spacing.md
        }} />
          <Text strong>Card Title</Text>
          <Text type='secondary' style={{
          display: 'block',
          marginTop: layoutTokens.spacing.xs
        }}>
            Card description text goes here. This is a sample card content.
          </Text>
          <Button type='primary' style={{
          marginTop: layoutTokens.spacing.md
        }} block>
            View Details
          </Button>
        </div>
      </Spin>;
  }
}`,...U.parameters?.docs?.source}}};K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  args: {
    spinning: true,
    size: 'default',
    tip: 'Loading...',
    delay: 0
  },
  render: args => <div style={{
    padding: layoutTokens.spacing.lg
  }}>
      <Spin {...args}>
        <div style={{
        padding: layoutTokens.spacing.lg,
        background: '#f5f5f5',
        borderRadius: 8,
        minWidth: 300,
        textAlign: 'center'
      }}>
          <Text>Content wrapped by spin</Text>
          <div style={{
          marginTop: layoutTokens.spacing.md,
          height: 100,
          background: '#e0e0e0',
          borderRadius: 4
        }} />
        </div>
      </Spin>
    </div>
}`,...K.parameters?.docs?.source}}};const qe=["Basic","Sizes","WithTip","WithCustomTip","InsideContainer","WithDelay","CustomIndicator","Fullscreen","Nested","MultipleSpinners","DataLoading","CardLoading","Playground"];export{B as Basic,U as CardLoading,A as CustomIndicator,G as DataLoading,O as Fullscreen,_ as InsideContainer,V as MultipleSpinners,H as Nested,K as Playground,F as Sizes,M as WithCustomTip,W as WithDelay,P as WithTip,qe as __namedExportsOrder,Je as default};
