import{r as i,f as fe,h as ge,i as k,v as xe,s as ve,j as e,l as a,R as Se}from"./iframe-DdPyZX1J.js";import{p as ye}from"./pickAttrs-BoNuQqbq.js";import{S as he}from"./Skeleton-BD_WB_6o.js";import{g as Te,m as je,b as we,F as x}from"./flex-BfqM8Xj1.js";import{T as ke}from"./typography-C45YHkQs.js";import"./preload-helper-PPVm8Dsz.js";const be=n=>{const{value:s,formatter:r,precision:o,decimalSeparator:f,groupSeparator:g="",prefixCls:u}=n;let c;if(typeof r=="function")c=r(s);else{const l=String(s),m=l.match(/^(-?)(\d*)(\.(\d+))?$/);if(!m||l==="-")c=l;else{const y=m[1];let v=m[2]||"0",p=m[4]||"";v=v.replace(/\B(?=(\d{3})+(?!\d))/g,g),typeof o=="number"&&(p=p.padEnd(o,"0").slice(0,o>0?o:0)),p&&(p=`${f}${p}`),c=[i.createElement("span",{key:"int",className:`${u}-content-value-int`},y,v),p&&i.createElement("span",{key:"decimal",className:`${u}-content-value-decimal`},p)]}}return i.createElement("span",{className:`${u}-content-value`},c)},Fe=n=>{const{componentCls:s,marginXXS:r,padding:o,colorTextDescription:f,titleFontSize:g,colorTextHeading:u,contentFontSize:c,fontFamily:l}=n;return{[s]:{...fe(n),[`${s}-header`]:{paddingBottom:r,[`${s}-title`]:{color:f,fontSize:g}},[`${s}-skeleton`]:{paddingTop:o},[`${s}-content`]:{color:u,fontSize:c,fontFamily:l,[`${s}-content-value`]:{display:"inline-block",direction:"ltr"},[`${s}-content-prefix, ${s}-content-suffix`]:{display:"inline-block"},[`${s}-content-prefix`]:{marginInlineEnd:r},[`${s}-content-suffix`]:{marginInlineStart:r}}}}},Re=n=>{const{fontSizeHeading3:s,fontSize:r}=n;return{titleFontSize:r,contentFontSize:s}},We=Te("Statistic",n=>{const s=je(n,{});return Fe(s)},Re),F=i.forwardRef((n,s)=>{const{prefixCls:r,className:o,rootClassName:f,style:g,valueStyle:u,value:c=0,title:l,valueRender:m,prefix:y,suffix:v,loading:p=!1,formatter:d,precision:h,decimalSeparator:T=".",groupSeparator:R=",",onMouseEnter:X,onMouseLeave:Y,styles:q,classNames:J,...K}=n,{getPrefixCls:Q,direction:Z,className:ee,style:te,classNames:ne,styles:se}=ge("statistic"),S=Q("statistic",r),[ae,ie]=We(S),re={...n,decimalSeparator:T,groupSeparator:R,loading:p,value:c},[j,w]=we([ne,J],[se,q],{props:re}),B=i.createElement(be,{decimalSeparator:T,groupSeparator:R,prefixCls:S,formatter:d,precision:h,value:c}),oe=k(S,{[`${S}-rtl`]:Z==="rtl"},ee,o,f,j.root,ae,ie),le=k(`${S}-header`,j.header),ce=k(`${S}-title`,j.title),de=k(`${S}-content`,j.content),pe=k(`${S}-content-prefix`,j.prefix),ue=k(`${S}-content-suffix`,j.suffix),G=i.useRef(null);i.useImperativeHandle(s,()=>({nativeElement:G.current}));const me=ye(K,{aria:!0,data:!0});return i.createElement("div",{...me,className:oe,style:{...w.root,...te,...g},ref:G,onMouseEnter:X,onMouseLeave:Y},l&&i.createElement("div",{className:le,style:w.header},i.createElement("div",{className:ce,style:w.title},l)),i.createElement(he,{paragraph:!1,loading:p,className:`${S}-skeleton`,active:!0},i.createElement("div",{className:de,style:{...u,...w.content}},y&&i.createElement("span",{className:pe,style:w.prefix},y),m?m(B):B,v&&i.createElement("span",{className:ue,style:w.suffix},v))))}),Ce=[["Y",1e3*60*60*24*365],["M",1e3*60*60*24*30],["D",1e3*60*60*24],["H",1e3*60*60],["m",1e3*60],["s",1e3],["S",1]];function De(n,s){let r=n;const o=/\[[^\]]*]/g,f=(s.match(o)||[]).map(l=>l.slice(1,-1)),g=s.replace(o,"[]"),u=Ce.reduce((l,[m,y])=>{if(l.includes(m)){const v=Math.floor(r/y);return r-=v*y,l.replace(new RegExp(`${m}+`,"g"),p=>{const d=p.length;return v.toString().padStart(d,"0")})}return l},g);let c=0;return u.replace(o,()=>{const l=f[c];return c+=1,l})}function $e(n,s,r){const{format:o=""}=s,f=new Date(n).getTime(),g=Date.now(),u=Math.max(r?f-g:g-f,0);return De(u,o)}const Ee=1e3/60;function He(n){return new Date(n).getTime()}const V=n=>{const{value:s,format:r="HH:mm:ss",onChange:o,onFinish:f,type:g,...u}=n,c=g==="countdown",[l,m]=i.useState(null),y=xe(()=>{const d=Date.now(),h=He(s);m({});const T=c?h-d:d-h;return o?.(T),c&&h<d?(f?.(),!1):!0});i.useEffect(()=>{let d;const h=()=>{y()||window.clearInterval(d)},T=()=>{d=window.setInterval(h,Ee)},R=()=>{window.clearInterval(d)};return T(),()=>{R()}},[s,c]),i.useEffect(()=>{m({})},[]);const v=(d,h)=>l?$e(d,{...h,format:r},c):"-",p=d=>ve(d,{title:void 0});return i.createElement(F,{...u,value:s,valueRender:p,formatter:v})},Ne=n=>i.createElement(V,{...n,type:"countdown"}),ze=i.memo(Ne);F.Timer=V;F.Countdown=ze;const{Timer:Pe}=F,t=n=>e.jsx(F,{...n});t.Timer=Pe;try{t.displayName="Statistic",t.__docgenInfo={description:"",displayName:"Statistic",props:{}}}catch{}const{Text:b}=ke,Oe={title:"Components/Statistic",component:t,tags:["autodocs"],argTypes:{title:{control:"text",description:"Заголовок статистики"},value:{control:"number",description:"Значение статистики"},precision:{control:"number",description:"Количество знаков после запятой"},prefix:{control:"text",description:"Префикс (например, $)"},suffix:{control:"text",description:"Суффикс (например, ₽)"},groupSeparator:{control:"text",description:'Разделитель тысяч (например, "," или " ")'},loading:{control:"boolean",description:"Состояние загрузки"},styles:{control:"object",description:"Стили компонента"}},parameters:{layout:"centered",backgrounds:{default:"light"}}},W={args:{title:"Total Users",value:12345}},C={render:()=>e.jsxs(x,{gap:a.spacing.lg,children:[e.jsx(t,{title:"Revenue",value:1234567,prefix:"$",suffix:"USD"}),e.jsx(t,{title:"Price",value:99.99,prefix:"€"}),e.jsx(t,{title:"Rating",value:4.5,suffix:"/5"})]})},D={render:()=>e.jsxs(x,{gap:a.spacing.lg,children:[e.jsx(t,{title:"Percentage",value:78.5678,precision:2,suffix:"%"}),e.jsx(t,{title:"Average Score",value:85.3333,precision:1}),e.jsx(t,{title:"Exchange Rate",value:1.234567,precision:4})]})},$={render:()=>e.jsxs(x,{gap:a.spacing.lg,children:[e.jsx(t,{title:"Without Separator",value:1e6}),e.jsx(t,{title:"With Comma",value:1e6,groupSeparator:","}),e.jsx(t,{title:"With Space",value:1e6,groupSeparator:" "})]})},E={args:{title:"Data Loading",value:12345,loading:!0}},H={render:()=>e.jsxs(x,{vertical:!0,gap:a.spacing.lg,children:[e.jsxs("div",{children:[e.jsx(b,{strong:!0,children:"Default size"}),e.jsx(t,{title:"Users",value:12345,style:{marginTop:a.spacing.sm}})]}),e.jsxs("div",{children:[e.jsx(b,{strong:!0,children:"Large value"}),e.jsx(t,{title:"Revenue",value:1234567,prefix:"$",styles:{content:{fontSize:32}}})]})]})},N={render:()=>e.jsx(t.Timer,{title:"Countdown",value:Date.now()+1e3*60*60*24,type:"countdown",format:"HH:mm:ss",onFinish:()=>console.log("Timer finished")})},z={render:()=>{const n=Date.now()+2592e5;return e.jsxs(x,{gap:a.spacing.lg,children:[e.jsx(t.Timer,{title:"Days",value:n,type:"countdown",format:"D days"}),e.jsx(t.Timer,{title:"Full format",value:n,type:"countdown",format:"DD:HH:mm:ss"}),e.jsx(t.Timer,{title:"Hours only",value:n,type:"countdown",format:"HH"})]})}},P={render:()=>{const[n,s]=Se.useState(!1),r=Date.now()+5e3,o=()=>{s(!0)};return e.jsxs(x,{vertical:!0,gap:a.spacing.md,children:[e.jsx(t.Timer,{title:"Time left",value:r,type:"countdown",format:"HH:mm:ss",onFinish:o}),n&&e.jsx(b,{type:"success",children:"Timer finished!"})]})}},I={render:()=>{const n=Date.now()-72e5;return e.jsx(t.Timer,{title:"Time Since Start",value:n,type:"countup",format:"HH:mm:ss"})}},U={render:()=>e.jsxs(x,{gap:a.spacing.lg,wrap:"wrap",style:{maxWidth:800},children:[e.jsx("div",{style:{flex:1,minWidth:200,padding:a.spacing.md,border:"1px solid #e0e0e0",borderRadius:8},children:e.jsx(t,{title:"Total Users",value:124567,groupSeparator:",",prefix:"👥"})}),e.jsx("div",{style:{flex:1,minWidth:200,padding:a.spacing.md,border:"1px solid #e0e0e0",borderRadius:8},children:e.jsx(t,{title:"Revenue",value:9876543,prefix:"$",groupSeparator:","})}),e.jsx("div",{style:{flex:1,minWidth:200,padding:a.spacing.md,border:"1px solid #e0e0e0",borderRadius:8},children:e.jsx(t,{title:"Orders",value:8765,groupSeparator:",",suffix:"📦"})}),e.jsx("div",{style:{flex:1,minWidth:200,padding:a.spacing.md,border:"1px solid #e0e0e0",borderRadius:8},children:e.jsx(t,{title:"Conversion Rate",value:23.45,precision:2,suffix:"%"})})]})},A={render:()=>e.jsxs(x,{gap:a.spacing.lg,children:[e.jsx(t,{title:"Success Rate",value:98.5,precision:1,suffix:"%",styles:{content:{color:"#52c41a"}}}),e.jsx(t,{title:"Error Rate",value:1.5,precision:1,suffix:"%",styles:{content:{color:"#ff4d4f"}}}),e.jsx(t,{title:"Warning",value:75,suffix:"%",styles:{content:{color:"#faad14"}}})]})},L={render:()=>e.jsxs(x,{gap:a.spacing.lg,children:[e.jsx(t,{title:"Active Users",value:1128,prefix:"👥",styles:{content:{fontSize:28}}}),e.jsx(t,{title:"Sales",value:932,prefix:"💰",styles:{content:{fontSize:28}}}),e.jsx(t,{title:"Downloads",value:2345,prefix:"📥",styles:{content:{fontSize:28}}})]})},_={render:()=>e.jsxs(x,{vertical:!0,gap:a.spacing.lg,style:{width:400},children:[e.jsx(t,{title:"Simple",value:12345}),e.jsx(t,{title:"With Prefix",value:12345,prefix:"$"}),e.jsx(t,{title:"With Suffix",value:12345,suffix:"%"}),e.jsx(t,{title:"With Precision",value:123.4567,precision:2}),e.jsx(t,{title:"With Separator",value:1e6,groupSeparator:","}),e.jsx(t,{title:"Loading",value:12345,loading:!0})]})},M={render:()=>e.jsxs(x,{vertical:!0,gap:a.spacing.lg,style:{width:"100%"},children:[e.jsxs(x,{gap:a.spacing.md,wrap:"wrap",children:[e.jsxs("div",{style:{flex:1,minWidth:200,background:"#f5f5f5",padding:a.spacing.lg,borderRadius:8},children:[e.jsx(t,{title:"Total Sales",value:124567,prefix:"$",groupSeparator:",",styles:{content:{fontSize:28}}}),e.jsx(b,{type:"secondary",style:{marginTop:a.spacing.sm,display:"block"},children:"+15% from last month"})]}),e.jsxs("div",{style:{flex:1,minWidth:200,background:"#f5f5f5",padding:a.spacing.lg,borderRadius:8},children:[e.jsx(t,{title:"Active Users",value:8765,groupSeparator:",",styles:{content:{fontSize:28}}}),e.jsx(b,{type:"secondary",style:{marginTop:a.spacing.sm,display:"block"},children:"+8% from last week"})]}),e.jsxs("div",{style:{flex:1,minWidth:200,background:"#f5f5f5",padding:a.spacing.lg,borderRadius:8},children:[e.jsx(t,{title:"Conversion Rate",value:23.45,precision:2,suffix:"%",styles:{content:{fontSize:28}}}),e.jsx(b,{type:"secondary",style:{marginTop:a.spacing.sm,display:"block"},children:"Target: 25%"})]})]}),e.jsx("div",{style:{background:"#f5f5f5",padding:a.spacing.lg,borderRadius:8},children:e.jsx(t.Timer,{title:"Flash Sale Ends In",value:Date.now()+1e3*60*60*2,format:"HH:mm:ss",type:"countdown"})})]})},O={args:{title:"Statistic Title",value:12345,precision:void 0,prefix:"",suffix:"",groupSeparator:void 0,loading:!1},render:n=>e.jsx("div",{style:{minWidth:250},children:e.jsx(t,{...n})})};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Total Users',
    value: 12345
  }
}`,...W.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <Flex gap={layoutTokens.spacing.lg}>
      <Statistic title='Revenue' value={1234567} prefix='$' suffix='USD' />
      <Statistic title='Price' value={99.99} prefix='€' />
      <Statistic title='Rating' value={4.5} suffix='/5' />
    </Flex>
}`,...C.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => <Flex gap={layoutTokens.spacing.lg}>
      <Statistic title='Percentage' value={78.5678} precision={2} suffix='%' />
      <Statistic title='Average Score' value={85.3333} precision={1} />
      <Statistic title='Exchange Rate' value={1.234567} precision={4} />
    </Flex>
}`,...D.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  render: () => <Flex gap={layoutTokens.spacing.lg}>
      <Statistic title='Without Separator' value={1000000} />
      <Statistic title='With Comma' value={1000000} groupSeparator=',' />
      <Statistic title='With Space' value={1000000} groupSeparator=' ' />
    </Flex>
}`,...$.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Data Loading',
    value: 12345,
    loading: true
  }
}`,...E.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: () => <Flex vertical gap={layoutTokens.spacing.lg}>
      <div>
        <Text strong>Default size</Text>
        <Statistic title='Users' value={12345} style={{
        marginTop: layoutTokens.spacing.sm
      }} />
      </div>
      <div>
        <Text strong>Large value</Text>
        <Statistic title='Revenue' value={1234567} prefix='$' styles={{
        content: {
          fontSize: 32
        }
      }} />
      </div>
    </Flex>
}`,...H.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => <Statistic.Timer title='Countdown' value={Date.now() + 1000 * 60 * 60 * 24} // 24 hours from now
  type='countdown' format='HH:mm:ss' onFinish={() => console.log('Timer finished')} />
}`,...N.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => {
    const deadline = Date.now() + 1000 * 60 * 60 * 24 * 3; // 3 days

    return <Flex gap={layoutTokens.spacing.lg}>
        <Statistic.Timer title='Days' value={deadline} type='countdown' format='D days' />
        <Statistic.Timer title='Full format' value={deadline} type='countdown' format='DD:HH:mm:ss' />
        <Statistic.Timer title='Hours only' value={deadline} type='countdown' format='HH' />
      </Flex>;
  }
}`,...z.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [finished, setFinished] = React.useState(false);
    const deadline = Date.now() + 5000; // 5 seconds from now

    const handleFinish = () => {
      setFinished(true);
    };
    return <Flex vertical gap={layoutTokens.spacing.md}>
        <Statistic.Timer title='Time left' value={deadline} type='countdown' format='HH:mm:ss' onFinish={handleFinish} />
        {finished && <Text type='success'>Timer finished!</Text>}
      </Flex>;
  }
}`,...P.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => {
    const startTime = Date.now() - 1000 * 60 * 60 * 2; // 2 hours ago

    return <Statistic.Timer title='Time Since Start' value={startTime} type='countup' format='HH:mm:ss' />;
  }
}`,...I.parameters?.docs?.source}}};U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: () => <Flex gap={layoutTokens.spacing.lg} wrap='wrap' style={{
    maxWidth: 800
  }}>
      <div style={{
      flex: 1,
      minWidth: 200,
      padding: layoutTokens.spacing.md,
      border: '1px solid #e0e0e0',
      borderRadius: 8
    }}>
        <Statistic title='Total Users' value={124567} groupSeparator=',' prefix='👥' />
      </div>
      <div style={{
      flex: 1,
      minWidth: 200,
      padding: layoutTokens.spacing.md,
      border: '1px solid #e0e0e0',
      borderRadius: 8
    }}>
        <Statistic title='Revenue' value={9876543} prefix='$' groupSeparator=',' />
      </div>
      <div style={{
      flex: 1,
      minWidth: 200,
      padding: layoutTokens.spacing.md,
      border: '1px solid #e0e0e0',
      borderRadius: 8
    }}>
        <Statistic title='Orders' value={8765} groupSeparator=',' suffix='📦' />
      </div>
      <div style={{
      flex: 1,
      minWidth: 200,
      padding: layoutTokens.spacing.md,
      border: '1px solid #e0e0e0',
      borderRadius: 8
    }}>
        <Statistic title='Conversion Rate' value={23.45} precision={2} suffix='%' />
      </div>
    </Flex>
}`,...U.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => <Flex gap={layoutTokens.spacing.lg}>
      <Statistic title='Success Rate' value={98.5} precision={1} suffix='%' styles={{
      content: {
        color: '#52c41a'
      }
    }} />
      <Statistic title='Error Rate' value={1.5} precision={1} suffix='%' styles={{
      content: {
        color: '#ff4d4f'
      }
    }} />
      <Statistic title='Warning' value={75} suffix='%' styles={{
      content: {
        color: '#faad14'
      }
    }} />
    </Flex>
}`,...A.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: () => <Flex gap={layoutTokens.spacing.lg}>
      <Statistic title='Active Users' value={1128} prefix='👥' styles={{
      content: {
        fontSize: 28
      }
    }} />
      <Statistic title='Sales' value={932} prefix='💰' styles={{
      content: {
        fontSize: 28
      }
    }} />
      <Statistic title='Downloads' value={2345} prefix='📥' styles={{
      content: {
        fontSize: 28
      }
    }} />
    </Flex>
}`,...L.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <Flex vertical gap={layoutTokens.spacing.lg} style={{
    width: 400
  }}>
      <Statistic title='Simple' value={12345} />
      <Statistic title='With Prefix' value={12345} prefix='$' />
      <Statistic title='With Suffix' value={12345} suffix='%' />
      <Statistic title='With Precision' value={123.4567} precision={2} />
      <Statistic title='With Separator' value={1000000} groupSeparator=',' />
      <Statistic title='Loading' value={12345} loading />
    </Flex>
}`,..._.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => <Flex vertical gap={layoutTokens.spacing.lg} style={{
    width: '100%'
  }}>
      <Flex gap={layoutTokens.spacing.md} wrap='wrap'>
        <div style={{
        flex: 1,
        minWidth: 200,
        background: '#f5f5f5',
        padding: layoutTokens.spacing.lg,
        borderRadius: 8
      }}>
          <Statistic title='Total Sales' value={124567} prefix='$' groupSeparator=',' styles={{
          content: {
            fontSize: 28
          }
        }} />
          <Text type='secondary' style={{
          marginTop: layoutTokens.spacing.sm,
          display: 'block'
        }}>
            +15% from last month
          </Text>
        </div>
        <div style={{
        flex: 1,
        minWidth: 200,
        background: '#f5f5f5',
        padding: layoutTokens.spacing.lg,
        borderRadius: 8
      }}>
          <Statistic title='Active Users' value={8765} groupSeparator=',' styles={{
          content: {
            fontSize: 28
          }
        }} />
          <Text type='secondary' style={{
          marginTop: layoutTokens.spacing.sm,
          display: 'block'
        }}>
            +8% from last week
          </Text>
        </div>
        <div style={{
        flex: 1,
        minWidth: 200,
        background: '#f5f5f5',
        padding: layoutTokens.spacing.lg,
        borderRadius: 8
      }}>
          <Statistic title='Conversion Rate' value={23.45} precision={2} suffix='%' styles={{
          content: {
            fontSize: 28
          }
        }} />
          <Text type='secondary' style={{
          marginTop: layoutTokens.spacing.sm,
          display: 'block'
        }}>
            Target: 25%
          </Text>
        </div>
      </Flex>
      <div style={{
      background: '#f5f5f5',
      padding: layoutTokens.spacing.lg,
      borderRadius: 8
    }}>
        <Statistic.Timer title='Flash Sale Ends In' value={Date.now() + 1000 * 60 * 60 * 2} // 2 hours
      format='HH:mm:ss' type='countdown' />
      </div>
    </Flex>
}`,...M.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Statistic Title',
    value: 12345,
    precision: undefined,
    prefix: '',
    suffix: '',
    groupSeparator: undefined,
    loading: false
  },
  render: args => <div style={{
    minWidth: 250
  }}>
      <Statistic {...args} />
    </div>
}`,...O.parameters?.docs?.source}}};const Be=["Basic","WithPrefixSuffix","WithPrecision","WithGroupSeparator","Loading","Sizes","Timer","TimerWithFormat","TimerWithCallback","CountupTimer","Dashboard","CustomStyling","WithIcons","AllInOne","SalesDashboard","Playground"];export{_ as AllInOne,W as Basic,I as CountupTimer,A as CustomStyling,U as Dashboard,E as Loading,O as Playground,M as SalesDashboard,H as Sizes,N as Timer,P as TimerWithCallback,z as TimerWithFormat,$ as WithGroupSeparator,L as WithIcons,D as WithPrecision,C as WithPrefixSuffix,Be as __namedExportsOrder,Oe as default};
