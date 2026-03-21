import{R as d,A as pt,r as s,v as je,B as dt,i as v,D as mt,m as Ae,k as He,E as ft,h as Qe,u as Q,p as gt,q as ht,n as xt,C as yt,j as r,l as ie}from"./iframe-Cg0C4Hta.js";import{p as $e}from"./pickAttrs-BoNuQqbq.js";import{h as Ct,j as wt,k as bt,C as St,Z as Dt,e as We,T as kt}from"./typography-BAMTZLsm.js";import{S as Ot}from"./Skeleton-DAyWDT7g.js";import{i as vt,b as et,g as jt,m as $t,F as ce}from"./flex-BtykKlYL.js";import{R as tt}from"./Overflow-vuEnCwbE.js";import{B as p}from"./button-BCzg3uvb.js";import{F as le}from"./form-CFdxIaeW.js";import{I as Ue}from"./input-7tBgEwnZ.js";import{S as Et}from"./select-CpwBMtMC.js";import"./preload-helper-PPVm8Dsz.js";import"./extends-CF3RwP-h.js";import"./Button-DRtpoL74.js";import"./client-DUVXxyfu.js";import"./ExclamationCircleFilled-Di2bo_fV.js";import"./SearchOutlined-C580F_gc.js";function qe(...t){const e={};return t.forEach(n=>{n&&Object.keys(n).forEach(o=>{n[o]!==void 0&&(e[o]=n[o])})}),e}const Xe=t=>{if(!t)return;const{closable:e,closeIcon:n}=t;return{closable:e,closeIcon:n}},nt={},Ge=(t,e)=>{if(!t&&(t===!1||e===!1||e===null))return!1;if(t===void 0&&e===void 0)return null;let n={closeIcon:typeof e!="boolean"&&e!==null?e:void 0};return t&&typeof t=="object"&&(n={...n,...t}),n},zt=(t,e,n)=>t===!1?!1:t?qe(n,e,t):e===!1?!1:e?qe(n,e):n.closable?n:!1,Rt=(t,e,n)=>{const{closeIconRender:o}=e,{closeIcon:a,...i}=t;let l=a;const c=$e(i,!0);return vt(l)&&(o&&(l=o(l)),l=d.isValidElement(l)?d.cloneElement(l,{"aria-label":n,...l.props,...c}):d.createElement("span",{"aria-label":n,...c},l)),[l,c]},It=(t,e,n=nt,o="Close")=>{const a=Ge(t?.closable,t?.closeIcon),i=Ge(e?.closable,e?.closeIcon),l={closeIcon:d.createElement(tt,null),...n},c=zt(a,i,l),b=typeof c!="boolean"?!!c?.disabled:!1;if(c===!1)return[!1,null,b,{}];const[O,m]=Rt(c,l,o);return[!0,O,b,m]},Pt=(t,e,n=nt)=>{const[o]=Ct("global",pt.global);return d.useMemo(()=>It(t,e,{closeIcon:d.createElement(tt,null),...n},o.close),[t,e,n,o.close])},Ye=(t,e)=>{let n={};return t&&typeof t=="object"&&(n=t),typeof t=="boolean"&&(n={enabled:t}),n.closable===void 0&&e!==void 0&&(n.closable=e),n},Bt=(t,e,n,o)=>s.useMemo(()=>{const a=Ye(t,o),i=Ye(e),l={blur:!1,...i,...a,closable:a.closable??o??i.closable??!0},c=l.blur?`${n}-mask-blur`:void 0;return[l.enabled!==!1,{mask:c},!!l.closable]},[t,e,n,o]);function Ft(t,e,n){return s.useMemo(()=>({...{trap:e??!0,focusTriggerAfterClose:!0},...t}),[t,e,n])}function Ze(){}const Nt=s.createContext({add:Ze,remove:Ze});function Tt(t){const e=s.useContext(Nt),n=s.useRef(null);return je(a=>{if(a){const i=a;i&&(e.add(i),n.current=i)}else e.remove(n.current)})}const Ve=s.createContext(null),rt=s.createContext({});function Te(){return Te=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},Te.apply(this,arguments)}const Mt=t=>{const{prefixCls:e,className:n,containerRef:o,...a}=t,{panel:i}=s.useContext(rt),l=dt(i,o);return s.createElement("div",Te({className:v(`${e}-section`,n),role:"dialog",ref:l},$e(t,{aria:!0}),{"aria-modal":"true"},a))};function Lt(t){const{prefixCls:e,direction:n,className:o,style:a,maxSize:i,containerRef:l,currentSize:c,onResize:b,onResizeEnd:O,onResizeStart:m}=t,[f,j]=s.useState(!1),[$,I]=s.useState(0),[P,B]=s.useState(0),C=n==="left"||n==="right",E=je(x=>{x.preventDefault(),x.stopPropagation(),j(!0),I(C?x.clientX:x.clientY);let w;if(typeof c=="number")w=c;else if(l?.current){const S=l.current.getBoundingClientRect();w=C?S.width:S.height}B(w),m?.(w)}),g=je(x=>{if(!f)return;let S=(C?x.clientX:x.clientY)-$;(n==="right"||n==="bottom")&&(S=-S);let u=P+S;u<0&&(u=0),i&&u>i&&(u=i),b?.(u)}),h=s.useCallback(()=>{if(f&&(j(!1),l?.current)){const x=l.current.getBoundingClientRect(),w=C?x.width:x.height;O?.(w)}},[f,l,O,C]);return s.useEffect(()=>{if(f)return document.addEventListener("mousemove",g),document.addEventListener("mouseup",h),()=>{document.removeEventListener("mousemove",g),document.removeEventListener("mouseup",h)}},[f,g,h]),{dragElementProps:{className:v(`${e}-dragger`,`${e}-dragger-${n}`,{[`${e}-dragger-dragging`]:f,[`${e}-dragger-horizontal`]:C,[`${e}-dragger-vertical`]:!C},o),style:a,onMouseDown:E},isDragging:f}}function Ne(t){if(typeof t=="string"){const e=Number(t.replace(/px$/i,""));if(parseFloat(t)===e&&mt(!1,"Invalid value type of `width` or `height` which should be number type instead."),!Number.isNaN(e))return e}return t}function _t(t,e,n,o,a){const i=o??a!==!1,[l]=wt(e&&i,t);return d.useEffect(()=>{e&&n===!0&&t()?.focus({preventScroll:!0})},[e]),l}function ee(){return ee=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},ee.apply(this,arguments)}const At=(t,e)=>{const{prefixCls:n,open:o,placement:a,inline:i,push:l,forceRender:c,autoFocus:b,focusTrap:O,classNames:m,rootClassName:f,rootStyle:j,zIndex:$,className:I,id:P,style:B,motion:C,width:E,height:g,size:h,maxSize:z,children:x,mask:w,maskClosable:S,maskMotion:u,maskClassName:R,maskStyle:y,afterOpenChange:N,onClose:Y,onMouseEnter:te,onMouseOver:L,onMouseLeave:Z,onClick:W,onKeyDown:ne,onKeyUp:re,styles:U,drawerRender:T,resizable:q,defaultSize:_}=t,A=s.useRef(null);s.useImperativeHandle(e,()=>A.current);const Ee=_t(()=>A.current,o,b,O,w),[ue,pe]=s.useState(!1),V=s.useContext(Ve);let oe;typeof l=="boolean"?oe=l?{}:{distance:0}:oe=l||{};const M=oe?.distance??V?.pushDistance??180,ze=s.useMemo(()=>({pushDistance:M,push:()=>{pe(!0)},pull:()=>{pe(!1)}}),[M]);s.useEffect(()=>{o?V?.push?.():V?.pull?.()},[o]),s.useEffect(()=>()=>{V?.pull?.()},[]);const K=s.createElement(Ae,ee({key:"mask"},u,{visible:w&&o}),({className:D,style:me},Fe)=>s.createElement("div",{className:v(`${n}-mask`,D,m?.mask,R),style:{...me,...y,...U?.mask},onClick:S&&o?Y:void 0,ref:Fe})),Re=typeof C=="function"?C(a):C,[se,ae]=s.useState(),X=a==="left"||a==="right",J=s.useMemo(()=>Ne(h??(X?E:g)??se??_??(X?378:void 0)),[h,E,g,_,X,se]),Ie=s.useMemo(()=>{const D={};if(ue&&M)switch(a){case"top":D.transform=`translateY(${M}px)`;break;case"bottom":D.transform=`translateY(${-M}px)`;break;case"left":D.transform=`translateX(${M}px)`;break;default:D.transform=`translateX(${-M}px)`;break}return X?D.width=Ne(J):D.height=Ne(J),D},[ue,M,a,X,J]),de=s.useRef(null),G=!!q,H=typeof q=="object"&&q||{},Pe=je(D=>{ae(D),H.onResize?.(D)}),{dragElementProps:Be,isDragging:Me}=Lt({prefixCls:`${n}-resizable`,direction:a,className:m?.dragger,style:U?.dragger,maxSize:z,containerRef:de,currentSize:J,onResize:Pe,onResizeStart:H.onResizeStart,onResizeEnd:H.onResizeEnd}),ct={onMouseEnter:te,onMouseOver:L,onMouseLeave:Z,onClick:W,onKeyDown:ne,onKeyUp:re,onFocus:D=>{Ee(D.target)}},ut=s.createElement(Ae,ee({key:"panel"},Re,{visible:o,forceRender:c,onVisibleChanged:N,removeOnLeave:!1,leavedClassName:`${n}-content-wrapper-hidden`}),({className:D,style:me},Fe)=>{const _e=s.createElement(Mt,ee({id:P,containerRef:Fe,prefixCls:n,className:v(I,m?.section),style:{...B,...U?.section}},$e(t,{aria:!0}),ct),x);return s.createElement("div",ee({ref:de,className:v(`${n}-content-wrapper`,Me&&`${n}-content-wrapper-dragging`,m?.wrapper,!Me&&D),style:{...me,...Ie,...U?.wrapper}},$e(t,{data:!0})),G&&s.createElement("div",Be),T?T(_e):_e)}),Le={...j};return $&&(Le.zIndex=$),s.createElement(Ve.Provider,{value:ze},s.createElement("div",{className:v(n,`${n}-${a}`,f,{[`${n}-open`]:o,[`${n}-inline`]:i}),style:Le,tabIndex:-1,ref:A},K,ut))},Ht=s.forwardRef(At),Wt=t=>{const{open:e=!1,prefixCls:n="rc-drawer",placement:o="right",autoFocus:a=!0,keyboard:i=!0,width:l,height:c,size:b,maxSize:O,mask:m=!0,maskClosable:f=!0,getContainer:j,forceRender:$,afterOpenChange:I,destroyOnHidden:P,onMouseEnter:B,onMouseOver:C,onMouseLeave:E,onClick:g,onKeyDown:h,onKeyUp:z,onClose:x,resizable:w,defaultSize:S,focusTriggerAfterClose:u,panelRef:R}=t,[y,N]=s.useState(!1),[Y,te]=s.useState(!1);He(()=>{te(!0)},[]);const L=Y?e:!1,Z=s.useRef(null),W=s.useRef(null);He(()=>{L&&(W.current=document.activeElement)},[L]);const ne=_=>{N(_),I?.(_),!_&&u!==!1&&W.current&&!Z.current?.contains(W.current)&&W.current?.focus({preventScroll:!0})},re=s.useMemo(()=>({panel:R}),[R]);if(!$&&!y&&!L&&P)return null;const T={...t,open:L,prefixCls:n,placement:o,autoFocus:a,keyboard:i,width:l,height:c,size:b,maxSize:O,defaultSize:S,mask:m,maskClosable:f,inline:j===!1,afterOpenChange:ne,ref:Z,resizable:w,...{onMouseEnter:B,onMouseOver:C,onMouseLeave:E,onClick:g,onKeyDown:h,onKeyUp:z}},q=({top:_,event:A})=>{_&&i&&(A.stopPropagation(),x?.(A))};return s.createElement(rt.Provider,{value:re},s.createElement(ft,{open:L||$||y,autoDestroy:!1,getContainer:j,autoLock:m&&(L||y),onEsc:q},s.createElement(Ht,T)))},ot=t=>{const{prefixCls:e,ariaId:n,title:o,footer:a,extra:i,closable:l,loading:c,onClose:b,headerStyle:O,bodyStyle:m,footerStyle:f,children:j,classNames:$,styles:I}=t,P=Qe("drawer"),{classNames:B,styles:C,closable:E}=P,[g,h]=et([B,$],[C,I],{props:{...t,closable:l??E}}),z=s.useMemo(()=>{const y=l??E;if(y!==!1)return typeof y=="object"&&y?.placement==="end"?"end":"start"},[l,E]),x=s.useCallback(y=>s.createElement("button",{type:"button",onClick:b,className:v(`${e}-close`,{[`${e}-close-${z}`]:z==="end"},g.close),style:h.close},y),[b,e,z,g.close,h.close]),[w,S]=Pt(Xe(t),Xe(P),{closable:!0,closeIconRender:x}),u=()=>!o&&!w?null:s.createElement("div",{style:{...h.header,...O},className:v(`${e}-header`,g.header,{[`${e}-header-close-only`]:w&&!o&&!i})},s.createElement("div",{className:`${e}-header-title`},z==="start"&&S,o&&s.createElement("div",{className:v(`${e}-title`,g.title),style:h.title,id:n},o)),i&&s.createElement("div",{className:v(`${e}-extra`,g.extra),style:h.extra},i),z==="end"&&S),R=()=>a?s.createElement("div",{className:v(`${e}-footer`,g.footer),style:{...h.footer,...f}},a):null;return s.createElement(s.Fragment,null,u(),s.createElement("div",{className:v(`${e}-body`,g.body),style:{...h.body,...m}},c?s.createElement(Ot,{active:!0,title:!1,paragraph:{rows:5},className:`${e}-body-skeleton`}):j),R())},Ut=t=>{const e="100%";return{left:`translateX(-${e})`,right:`translateX(${e})`,top:`translateY(-${e})`,bottom:`translateY(${e})`}[t]},st=(t,e)=>({"&-enter, &-appear":{...t,"&-active":e},"&-leave":{...e,"&-active":t}}),at=(t,e)=>({"&-enter, &-appear, &-leave":{"&-start":{transition:"none"},"&-active":{transition:`all ${e}`}},...st({opacity:t},{opacity:1})}),qt=(t,e)=>[at(.7,e),st({transform:Ut(t)},{transform:"none"})],Xt=t=>{const{componentCls:e,motionDurationSlow:n}=t;return{[e]:{[`${e}-mask-motion`]:at(0,n),[`${e}-panel-motion`]:["left","right","top","bottom"].reduce((o,a)=>({...o,[`&-${a}`]:qt(a,n)}),{})}}},Gt=t=>{const{borderRadiusSM:e,componentCls:n,zIndexPopup:o,colorBgMask:a,colorBgElevated:i,motionDurationSlow:l,motionDurationMid:c,paddingXS:b,padding:O,paddingLG:m,fontSizeLG:f,lineHeightLG:j,lineWidth:$,lineType:I,colorSplit:P,marginXS:B,colorIcon:C,colorIconHover:E,colorBgTextHover:g,colorBgTextActive:h,colorText:z,fontWeightStrong:x,footerPaddingBlock:w,footerPaddingInline:S,draggerSize:u,calc:R}=t,y=`${n}-content-wrapper`,N=`${n}-resizable-dragger`;return{[n]:{position:"fixed",inset:0,zIndex:o,pointerEvents:"none",color:z,"&-pure":{position:"relative",background:i,display:"flex",flexDirection:"column",pointerEvents:"auto",[`&${n}-left`]:{boxShadow:t.boxShadowDrawerLeft},[`&${n}-right`]:{boxShadow:t.boxShadowDrawerRight},[`&${n}-top`]:{boxShadow:t.boxShadowDrawerUp},[`&${n}-bottom`]:{boxShadow:t.boxShadowDrawerDown}},"&-inline":{position:"absolute"},[`${n}-mask`]:{position:"absolute",inset:0,zIndex:o,background:a,pointerEvents:"auto",[`&${n}-mask-blur`]:{backdropFilter:"blur(4px)"}},[y]:{position:"absolute",zIndex:o,maxWidth:"100vw",transition:`all ${l}`,"&-hidden":{display:"none"}},[`&-left > ${y}`]:{top:0,bottom:0,left:{_skip_check_:!0,value:0},boxShadow:t.boxShadowDrawerLeft},[`&-right > ${y}`]:{top:0,right:{_skip_check_:!0,value:0},bottom:0,boxShadow:t.boxShadowDrawerRight},[`&-top > ${y}`]:{top:0,insetInline:0,boxShadow:t.boxShadowDrawerUp},[`&-bottom > ${y}`]:{bottom:0,insetInline:0,boxShadow:t.boxShadowDrawerDown},[`${n}-section`]:{display:"flex",flexDirection:"column",width:"100%",height:"100%",overflow:"auto",background:i,pointerEvents:"auto"},[`${n}-header`]:{display:"flex",flex:0,alignItems:"center",padding:`${Q(O)} ${Q(m)}`,fontSize:f,lineHeight:j,borderBottom:`${Q($)} ${I} ${P}`,"&-title":{display:"flex",flex:1,alignItems:"center",minWidth:0,minHeight:0}},[`${n}-extra`]:{flex:"none"},[`${n}-close`]:{display:"inline-flex",width:R(f).add(b).equal(),height:R(f).add(b).equal(),borderRadius:e,justifyContent:"center",alignItems:"center",color:C,fontWeight:x,fontSize:f,fontStyle:"normal",lineHeight:1,textAlign:"center",textTransform:"none",textDecoration:"none",background:"transparent",border:0,cursor:"pointer",transition:`all ${c}`,textRendering:"auto",[`&${n}-close-end`]:{marginInlineStart:B},[`&:not(${n}-close-end)`]:{marginInlineEnd:B},"&:hover":{color:E,backgroundColor:g,textDecoration:"none"},"&:active":{backgroundColor:h},...gt(t)},[`${n}-title`]:{flex:1,margin:0,fontWeight:t.fontWeightStrong,fontSize:f,lineHeight:j},[`${n}-body`]:{flex:1,minWidth:0,minHeight:0,padding:m,overflow:"auto",[`${n}-body-skeleton`]:{width:"100%",height:"100%",display:"flex",justifyContent:"center"}},[`${n}-footer`]:{flexShrink:0,padding:`${Q(w)} ${Q(S)}`,borderTop:`${Q($)} ${I} ${P}`},[N]:{position:"absolute",zIndex:1,backgroundColor:"transparent",userSelect:"none",pointerEvents:"auto","&:hover":{backgroundColor:t.colorPrimary,opacity:.2},"&-dragging":{backgroundColor:t.colorPrimary,opacity:.3}},[`${N}-left`]:{top:0,bottom:0,right:{_skip_check_:!0,value:0},width:u,cursor:"col-resize"},[`${N}-right`]:{top:0,bottom:0,left:{_skip_check_:!0,value:0},width:u,cursor:"col-resize"},[`${N}-top`]:{insetInline:0,bottom:0,height:u,cursor:"row-resize"},[`${N}-bottom`]:{insetInline:0,top:0,height:u,cursor:"row-resize"},[`${y}-dragging`]:{userSelect:"none",transition:"none",willChange:"width, height",[`${n}-content`]:{pointerEvents:"none"},[`${n}-section`]:{pointerEvents:"none"}},"&-rtl":{direction:"rtl"}}}},Yt=t=>({zIndexPopup:t.zIndexPopupBase,footerPaddingBlock:t.paddingXS,footerPaddingInline:t.padding,draggerSize:4}),lt=jt("Drawer",t=>{const e=$t(t,{});return[Gt(e),Xt(e)]},Yt),Zt={distance:180},Ke=378,Je={motionAppear:!0,motionEnter:!0,motionLeave:!0,motionDeadline:500},it=t=>{const{rootClassName:e,size:n,defaultSize:o=Ke,height:a,width:i,mask:l,push:c=Zt,open:b,afterOpenChange:O,onClose:m,prefixCls:f,getContainer:j,panelRef:$=null,style:I,className:P,resizable:B,"aria-labelledby":C,focusable:E,maskClosable:g,maskStyle:h,drawerStyle:z,contentWrapperStyle:x,destroyOnClose:w,destroyOnHidden:S,...u}=t,{placement:R}=u,y=ht(),N=u.title?y:void 0,{getPopupContainer:Y,getPrefixCls:te,direction:L,className:Z,style:W,classNames:ne,styles:re,mask:U}=Qe("drawer"),T=te("drawer",f),[q,_]=lt(T),A=j===void 0&&Y?()=>Y(document.body):j,Ee=s.useMemo(()=>typeof n=="number"?n:n==="large"?736:n==="default"?Ke:typeof n=="string"?/^\d+(\.\d+)?$/.test(n)?Number(n):n:!R||R==="left"||R==="right"?i:a,[n,R,i,a]),ue={motionName:We(T,"mask-motion"),...Je},pe=Be=>({motionName:We(T,`panel-motion-${Be}`),...Je}),V=Tt(),oe=xt($,V),[M,ze]=bt("Drawer",u.zIndex),[K,Re,se]=Bt(l,U,T,g),ae=Ft(E,A!==!1&&K),{classNames:X,styles:J,rootStyle:Ie}=u,de={...t,zIndex:M,panelRef:$,mask:K,maskClosable:se,defaultSize:o,push:c,focusable:ae},[G,H]=et([ne,X],[re,J],{props:de}),Pe=v({"no-mask":!K,[`${T}-rtl`]:L==="rtl"},e,q,_,G.root);return s.createElement(St,{form:!0,space:!0},s.createElement(Dt.Provider,{value:ze},s.createElement(Wt,{prefixCls:T,onClose:m,maskMotion:ue,motion:pe,...u,classNames:{mask:v(G.mask,Re.mask),section:G.section,wrapper:G.wrapper,dragger:G.dragger},styles:{mask:{...H.mask,...h},section:{...H.section,...z},wrapper:{...H.wrapper,...x},dragger:H.dragger},open:b,mask:K,maskClosable:se,push:c,size:Ee,defaultSize:o,style:{...W,...I},rootStyle:{...Ie,...H.root},className:v(Z,P),rootClassName:Pe,getContainer:A,afterOpenChange:O,panelRef:oe,zIndex:M,...B?{resizable:B}:{},"aria-labelledby":C??N,destroyOnHidden:S??w,focusTriggerAfterClose:ae.focusTriggerAfterClose,focusTrap:ae.trap},s.createElement(ot,{prefixCls:T,size:n,...u,ariaId:N,onClose:m}))))},Vt=t=>{const{prefixCls:e,style:n,className:o,placement:a="right",...i}=t,{getPrefixCls:l}=s.useContext(yt),c=l("drawer",e),[b,O]=lt(c),m=v(c,`${c}-pure`,`${c}-${a}`,b,O,o);return s.createElement("div",{className:m,style:n},s.createElement(ot,{prefixCls:c,...i}))};it._InternalPanelDoNotUseOrYouWillBeFired=Vt;const k=t=>r.jsx(it,{...t});try{k.displayName="Drawer",k.__docgenInfo={description:"",displayName:"Drawer",props:{}}}catch{}const{Text:F}=kt,fn={title:"Components/Drawer",component:k,tags:["autodocs"],argTypes:{open:{control:"boolean",description:"Видимость компонента"},placement:{control:"select",options:["top","right","bottom","left"],description:"Расположение выезжающей панели"},size:{control:"select",options:["default","large"],description:"Размер панели"},title:{control:"text",description:"Заголовок компонента"},closable:{control:"boolean",description:"Показывать кнопку закрытия"},mask:{control:"boolean",description:"Показывать затемнение фона"},maskClosable:{control:"boolean",description:"Закрывать по клику на затемнение"},keyboard:{control:"boolean",description:"Закрывать по нажатию ESC"},destroyOnClose:{control:"boolean",description:"Уничтожать содержимое при закрытии"},loading:{control:"boolean",description:"Состояние загрузки"},zIndex:{control:"number",description:"Z-index слоя"},onClose:{action:"closed"},afterOpenChange:{action:"open state changed"}},parameters:{layout:"centered",backgrounds:{default:"light"}}},fe={args:{open:!0,title:"Basic Drawer",children:r.jsx(F,{children:"Содержимое компонента Drawer"})},render:t=>{const[e,n]=d.useState(!1);return r.jsxs(r.Fragment,{children:[r.jsx(p,{type:"primary",onClick:()=>n(!0),children:"Open Drawer"}),r.jsx(k,{...t,open:e,onClose:()=>n(!1)})]})}},ge={render:()=>{const[t,e]=d.useState(!1);return r.jsxs(r.Fragment,{children:[r.jsx(p,{type:"primary",onClick:()=>e(!0),children:"Left Drawer"}),r.jsx(k,{title:"Left Drawer",placement:"left",open:t,onClose:()=>e(!1),children:r.jsx(F,{children:"Содержимое с левой стороны"})})]})}},he={render:()=>{const[t,e]=d.useState(!1);return r.jsxs(r.Fragment,{children:[r.jsx(p,{type:"primary",onClick:()=>e(!0),children:"Right Drawer"}),r.jsx(k,{title:"Right Drawer",placement:"right",open:t,onClose:()=>e(!1),children:r.jsx(F,{children:"Содержимое с правой стороны"})})]})}},xe={render:()=>{const[t,e]=d.useState(!1);return r.jsxs(r.Fragment,{children:[r.jsx(p,{type:"primary",onClick:()=>e(!0),children:"Top Drawer"}),r.jsx(k,{title:"Top Drawer",placement:"top",size:"large",open:t,onClose:()=>e(!1),children:r.jsx(F,{children:"Содержимое сверху"})})]})}},ye={render:()=>{const[t,e]=d.useState(!1);return r.jsxs(r.Fragment,{children:[r.jsx(p,{type:"primary",onClick:()=>e(!0),children:"Bottom Drawer"}),r.jsx(k,{title:"Bottom Drawer",placement:"bottom",size:"large",open:t,onClose:()=>e(!1),children:r.jsx(F,{children:"Содержимое снизу"})})]})}},Ce={render:()=>{const[t,e]=d.useState(!1);return r.jsxs(r.Fragment,{children:[r.jsx(p,{type:"primary",onClick:()=>e(!0),children:"Large Drawer"}),r.jsx(k,{title:"Large Drawer",size:"large",open:t,onClose:()=>e(!1),children:r.jsx(F,{children:"Большой размер панели"})})]})}},we={render:()=>{const[t,e]=d.useState(!1);return r.jsxs(r.Fragment,{children:[r.jsx(p,{type:"primary",onClick:()=>e(!0),children:"Open Drawer"}),r.jsx(k,{title:"Without Mask",mask:!1,open:t,onClose:()=>e(!1),children:r.jsx(F,{children:"Этот Drawer не имеет затемнения фона"})})]})}},be={render:()=>{const[t,e]=d.useState(!1);return r.jsxs(r.Fragment,{children:[r.jsx(p,{type:"primary",onClick:()=>e(!0),children:"Open Drawer"}),r.jsx(k,{title:"Drawer with Footer",open:t,onClose:()=>e(!1),footer:r.jsxs(ce,{gap:ie.spacing.sm,justify:"end",children:[r.jsx(p,{onClick:()=>e(!1),children:"Cancel"}),r.jsx(p,{type:"primary",onClick:()=>e(!1),children:"Submit"})]}),children:r.jsx(F,{children:"Содержимое с футером внизу"})})]})}},Se={render:()=>{const[t,e]=d.useState(!1),[n]=le.useForm(),o=()=>{n.validateFields().then(()=>{e(!1),n.resetFields()})};return r.jsxs(r.Fragment,{children:[r.jsx(p,{type:"primary",onClick:()=>e(!0),children:"Open Form Drawer"}),r.jsx(k,{title:"User Information",open:t,onClose:()=>e(!1),footer:r.jsxs(ce,{gap:ie.spacing.sm,justify:"end",children:[r.jsx(p,{onClick:()=>e(!1),children:"Cancel"}),r.jsx(p,{type:"primary",onClick:o,children:"Save"})]}),children:r.jsxs(le,{form:n,layout:"vertical",children:[r.jsx(le.Item,{label:"Name",name:"name",rules:[{required:!0,message:"Please enter name"}],children:r.jsx(Ue,{placeholder:"Enter name"})}),r.jsx(le.Item,{label:"Email",name:"email",rules:[{required:!0,type:"email",message:"Please enter valid email"}],children:r.jsx(Ue,{placeholder:"Enter email"})}),r.jsx(le.Item,{label:"Role",name:"role",rules:[{required:!0,message:"Please select role"}],children:r.jsx(Et,{options:[{label:"Admin",value:"admin"},{label:"User",value:"user"},{label:"Guest",value:"guest"}],placeholder:"Select role"})})]})})]})}},De={render:()=>{const[t,e]=d.useState(!1),[n,o]=d.useState(!1),a=()=>{o(!0),setTimeout(()=>{o(!1),e(!1)},2e3)};return r.jsxs(r.Fragment,{children:[r.jsx(p,{type:"primary",onClick:()=>e(!0),children:"Open Drawer"}),r.jsx(k,{title:"Loading Example",open:t,onClose:()=>e(!1),footer:r.jsxs(ce,{gap:ie.spacing.sm,justify:"end",children:[r.jsx(p,{onClick:()=>e(!1),children:"Cancel"}),r.jsx(p,{type:"primary",loading:n,onClick:a,children:"Submit"})]}),children:r.jsx(F,{children:"Нажмите Submit, чтобы увидеть состояние загрузки"})})]})}},ke={render:()=>{const[t,e]=d.useState(!1),[n,o]=d.useState(!1);return r.jsxs(r.Fragment,{children:[r.jsx(p,{type:"primary",onClick:()=>e(!0),children:"Open Drawer"}),r.jsxs(k,{title:"Parent Drawer",open:t,onClose:()=>e(!1),size:"large",children:[r.jsxs(ce,{vertical:!0,gap:ie.spacing.md,children:[r.jsx(F,{children:"Родительский контент"}),r.jsx(p,{type:"primary",onClick:()=>o(!0),children:"Open Child Drawer"})]}),r.jsx(k,{title:"Child Drawer",placement:"right",open:n,onClose:()=>o(!1),size:"large",children:r.jsx(F,{children:"Дочерний контент"})})]})]})}},Oe={render:()=>{const[t,e]=d.useState("right"),[n,o]=d.useState(!1),a=i=>{e(i),o(!0)};return r.jsxs(r.Fragment,{children:[r.jsxs(ce,{gap:ie.spacing.sm,wrap:"wrap",children:[r.jsx(p,{onClick:()=>a("top"),children:"Top"}),r.jsx(p,{onClick:()=>a("right"),children:"Right"}),r.jsx(p,{onClick:()=>a("bottom"),children:"Bottom"}),r.jsx(p,{onClick:()=>a("left"),children:"Left"})]}),r.jsx(k,{title:`${t.charAt(0).toUpperCase()+t.slice(1)} Drawer`,placement:t,open:n,onClose:()=>o(!1),children:r.jsxs(F,{children:["Этот Drawer выезжает из ",t," стороны"]})})]})}},ve={args:{title:"Playground Drawer",placement:"right",size:"default",closable:!0,mask:!0,maskClosable:!0,keyboard:!0,destroyOnClose:!1,children:r.jsx(F,{children:"Настройте параметры в панели Controls"})},render:t=>{const[e,n]=d.useState(!1);return r.jsxs(r.Fragment,{children:[r.jsx(p,{type:"primary",onClick:()=>n(!0),children:"Open Drawer"}),r.jsx(k,{...t,open:e,onClose:()=>n(!1)})]})}};fe.parameters={...fe.parameters,docs:{...fe.parameters?.docs,source:{originalSource:`{
  args: {
    open: true,
    title: 'Basic Drawer',
    children: <Text>Содержимое компонента Drawer</Text>
  },
  render: args => {
    const [open, setOpen] = React.useState(false);
    return <>
        <Button type='primary' onClick={() => setOpen(true)}>
          Open Drawer
        </Button>
        <Drawer {...args} open={open} onClose={() => setOpen(false)} />
      </>;
  }
}`,...fe.parameters?.docs?.source}}};ge.parameters={...ge.parameters,docs:{...ge.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = React.useState(false);
    return <>
        <Button type='primary' onClick={() => setOpen(true)}>
          Left Drawer
        </Button>
        <Drawer title='Left Drawer' placement='left' open={open} onClose={() => setOpen(false)}>
          <Text>Содержимое с левой стороны</Text>
        </Drawer>
      </>;
  }
}`,...ge.parameters?.docs?.source}}};he.parameters={...he.parameters,docs:{...he.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = React.useState(false);
    return <>
        <Button type='primary' onClick={() => setOpen(true)}>
          Right Drawer
        </Button>
        <Drawer title='Right Drawer' placement='right' open={open} onClose={() => setOpen(false)}>
          <Text>Содержимое с правой стороны</Text>
        </Drawer>
      </>;
  }
}`,...he.parameters?.docs?.source}}};xe.parameters={...xe.parameters,docs:{...xe.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = React.useState(false);
    return <>
        <Button type='primary' onClick={() => setOpen(true)}>
          Top Drawer
        </Button>
        <Drawer title='Top Drawer' placement='top' size='large' open={open} onClose={() => setOpen(false)}>
          <Text>Содержимое сверху</Text>
        </Drawer>
      </>;
  }
}`,...xe.parameters?.docs?.source}}};ye.parameters={...ye.parameters,docs:{...ye.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = React.useState(false);
    return <>
        <Button type='primary' onClick={() => setOpen(true)}>
          Bottom Drawer
        </Button>
        <Drawer title='Bottom Drawer' placement='bottom' size='large' open={open} onClose={() => setOpen(false)}>
          <Text>Содержимое снизу</Text>
        </Drawer>
      </>;
  }
}`,...ye.parameters?.docs?.source}}};Ce.parameters={...Ce.parameters,docs:{...Ce.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = React.useState(false);
    return <>
        <Button type='primary' onClick={() => setOpen(true)}>
          Large Drawer
        </Button>
        <Drawer title='Large Drawer' size='large' open={open} onClose={() => setOpen(false)}>
          <Text>Большой размер панели</Text>
        </Drawer>
      </>;
  }
}`,...Ce.parameters?.docs?.source}}};we.parameters={...we.parameters,docs:{...we.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = React.useState(false);
    return <>
        <Button type='primary' onClick={() => setOpen(true)}>
          Open Drawer
        </Button>
        <Drawer title='Without Mask' mask={false} open={open} onClose={() => setOpen(false)}>
          <Text>Этот Drawer не имеет затемнения фона</Text>
        </Drawer>
      </>;
  }
}`,...we.parameters?.docs?.source}}};be.parameters={...be.parameters,docs:{...be.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = React.useState(false);
    return <>
        <Button type='primary' onClick={() => setOpen(true)}>
          Open Drawer
        </Button>
        <Drawer title='Drawer with Footer' open={open} onClose={() => setOpen(false)} footer={<Flex gap={layoutTokens.spacing.sm} justify='end'>
              <Button onClick={() => setOpen(false)}>Cancel</Button>
              <Button type='primary' onClick={() => setOpen(false)}>
                Submit
              </Button>
            </Flex>}>
          <Text>Содержимое с футером внизу</Text>
        </Drawer>
      </>;
  }
}`,...be.parameters?.docs?.source}}};Se.parameters={...Se.parameters,docs:{...Se.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = React.useState(false);
    const [form] = Form.useForm();
    const handleSubmit = () => {
      form.validateFields().then(() => {
        setOpen(false);
        form.resetFields();
      });
    };
    return <>
        <Button type='primary' onClick={() => setOpen(true)}>
          Open Form Drawer
        </Button>
        <Drawer title='User Information' open={open} onClose={() => setOpen(false)} footer={<Flex gap={layoutTokens.spacing.sm} justify='end'>
              <Button onClick={() => setOpen(false)}>Cancel</Button>
              <Button type='primary' onClick={handleSubmit}>
                Save
              </Button>
            </Flex>}>
          <Form form={form} layout='vertical'>
            <Form.Item label='Name' name='name' rules={[{
            required: true,
            message: 'Please enter name'
          }]}>
              <Input placeholder='Enter name' />
            </Form.Item>
            <Form.Item label='Email' name='email' rules={[{
            required: true,
            type: 'email',
            message: 'Please enter valid email'
          }]}>
              <Input placeholder='Enter email' />
            </Form.Item>
            <Form.Item label='Role' name='role' rules={[{
            required: true,
            message: 'Please select role'
          }]}>
              <Select options={[{
              label: 'Admin',
              value: 'admin'
            }, {
              label: 'User',
              value: 'user'
            }, {
              label: 'Guest',
              value: 'guest'
            }]} placeholder='Select role' />
            </Form.Item>
          </Form>
        </Drawer>
      </>;
  }
}`,...Se.parameters?.docs?.source}}};De.parameters={...De.parameters,docs:{...De.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    const handleSubmit = () => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setOpen(false);
      }, 2000);
    };
    return <>
        <Button type='primary' onClick={() => setOpen(true)}>
          Open Drawer
        </Button>
        <Drawer title='Loading Example' open={open} onClose={() => setOpen(false)} footer={<Flex gap={layoutTokens.spacing.sm} justify='end'>
              <Button onClick={() => setOpen(false)}>Cancel</Button>
              <Button type='primary' loading={loading} onClick={handleSubmit}>
                Submit
              </Button>
            </Flex>}>
          <Text>Нажмите Submit, чтобы увидеть состояние загрузки</Text>
        </Drawer>
      </>;
  }
}`,...De.parameters?.docs?.source}}};ke.parameters={...ke.parameters,docs:{...ke.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = React.useState(false);
    const [openInner, setOpenInner] = React.useState(false);
    return <>
        <Button type='primary' onClick={() => setOpen(true)}>
          Open Drawer
        </Button>
        <Drawer title='Parent Drawer' open={open} onClose={() => setOpen(false)} size='large'>
          <Flex vertical gap={layoutTokens.spacing.md}>
            <Text>Родительский контент</Text>
            <Button type='primary' onClick={() => setOpenInner(true)}>
              Open Child Drawer
            </Button>
          </Flex>
          <Drawer title='Child Drawer' placement='right' open={openInner} onClose={() => setOpenInner(false)} size='large'>
            <Text>Дочерний контент</Text>
          </Drawer>
        </Drawer>
      </>;
  }
}`,...ke.parameters?.docs?.source}}};Oe.parameters={...Oe.parameters,docs:{...Oe.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [placement, setPlacement] = React.useState<'top' | 'right' | 'bottom' | 'left'>('right');
    const [open, setOpen] = React.useState(false);
    const showDrawer = (p: typeof placement) => {
      setPlacement(p);
      setOpen(true);
    };
    return <>
        <Flex gap={layoutTokens.spacing.sm} wrap='wrap'>
          <Button onClick={() => showDrawer('top')}>Top</Button>
          <Button onClick={() => showDrawer('right')}>Right</Button>
          <Button onClick={() => showDrawer('bottom')}>Bottom</Button>
          <Button onClick={() => showDrawer('left')}>Left</Button>
        </Flex>
        <Drawer title={\`\${placement.charAt(0).toUpperCase() + placement.slice(1)} Drawer\`} placement={placement} open={open} onClose={() => setOpen(false)}>
          <Text>Этот Drawer выезжает из {placement} стороны</Text>
        </Drawer>
      </>;
  }
}`,...Oe.parameters?.docs?.source}}};ve.parameters={...ve.parameters,docs:{...ve.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Playground Drawer',
    placement: 'right',
    size: 'default',
    closable: true,
    mask: true,
    maskClosable: true,
    keyboard: true,
    destroyOnClose: false,
    children: <Text>Настройте параметры в панели Controls</Text>
  },
  render: args => {
    const [open, setOpen] = React.useState(false);
    return <>
        <Button type='primary' onClick={() => setOpen(true)}>
          Open Drawer
        </Button>
        <Drawer {...args} open={open} onClose={() => setOpen(false)} />
      </>;
  }
}`,...ve.parameters?.docs?.source}}};const gn=["Basic","PlacementLeft","PlacementRight","PlacementTop","PlacementBottom","SizeLarge","NoMask","WithFooter","WithForm","Loading","MultiLevel","AllPlacements","Playground"];export{Oe as AllPlacements,fe as Basic,De as Loading,ke as MultiLevel,we as NoMask,ye as PlacementBottom,ge as PlacementLeft,he as PlacementRight,xe as PlacementTop,ve as Playground,Ce as SizeLarge,be as WithFooter,Se as WithForm,gn as __namedExportsOrder,fn as default};
