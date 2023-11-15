"use strict";(self.webpackChunk_epochlabs=self.webpackChunk_epochlabs||[]).push([[9166],{16002:function(e,t,a){a.d(t,{ZP:function(){return C}});var o=a(93433),r=a(29439),n=a(63366),i=a(87462),c=a(94419),s=a(54164),l=a(66934),u=a(31402),d=a(51184),m=a(45682),f=a(82466),v=a(62876),h=a(6117),p=a(28182),Z=a(72791),g=a(21217);function b(e){return(0,g.Z)("MuiMasonry",e)}(0,a(75878).Z)("MuiMasonry",["root"]);var w=a(80184),x=["children","className","component","columns","spacing","defaultColumns","defaultHeight","defaultSpacing"],k=function(e){return Number(e.replace("px",""))},S={flexBasis:"100%",width:0,margin:0,padding:0},y=(0,l.ZP)("div",{name:"MuiMasonry",slot:"Root",overridesResolver:function(e,t){return[t.root]}})((function(e){var t=e.ownerState,a=e.theme,o={width:"100%",display:"flex",flexFlow:"column wrap",alignContent:"flex-start",boxSizing:"border-box","& > *":{boxSizing:"border-box"}},r={};if(t.isSSR){for(var n={},c=k(a.spacing(t.defaultSpacing)),s=1;s<=t.defaultColumns;s+=1)n["&:nth-of-type(".concat(t.defaultColumns,"n+").concat(s%t.defaultColumns,")")]={order:s};return r.height=t.defaultHeight,r.margin=-c/2,r["& > *"]=(0,i.Z)({},o["& > *"],n,{margin:c/2,width:"calc(".concat((100/t.defaultColumns).toFixed(2),"% - ").concat(c,"px)")}),(0,i.Z)({},o,r)}var l=(0,d.P$)({values:t.spacing,breakpoints:a.breakpoints.values}),u=(0,m.hB)(a);o=(0,f.Z)(o,(0,d.k9)({theme:a},l,(function(e){var a;if("string"===typeof e&&!Number.isNaN(Number(e))||"number"===typeof e){var o=Number(e);a=(0,m.NA)(u,o)}else a=e;return(0,i.Z)({margin:"calc(0px - (".concat(a," / 2))"),"& > *":{margin:"calc(".concat(a," / 2)")}},t.maxColumnHeight&&{height:"number"===typeof a?Math.ceil(t.maxColumnHeight+k(a)):"calc(".concat(t.maxColumnHeight,"px + ").concat(a,")")})})));var v=(0,d.P$)({values:t.columns,breakpoints:a.breakpoints.values});return o=(0,f.Z)(o,(0,d.k9)({theme:a},v,(function(e){var t=Number(e),a="".concat((100/t).toFixed(2),"%"),o="string"===typeof l&&!Number.isNaN(Number(l))||"number"===typeof l?(0,m.NA)(u,Number(l)):"0px";return{"& > *":{width:"calc(".concat(a," - ").concat(o,")")}}}))),"object"===typeof l&&(o=(0,f.Z)(o,(0,d.k9)({theme:a},l,(function(e,t){if(t){var a=Number(e),o=Object.keys(v).pop(),r=(0,m.NA)(u,a),n="object"===typeof v?v[t]||v[o]:v,i="".concat((100/n).toFixed(2),"%");return{"& > *":{width:"calc(".concat(i," - ").concat(r,")")}}}return null})))),o})),C=Z.forwardRef((function(e,t){var a=(0,u.Z)({props:e,name:"MuiMasonry"}),l=a.children,d=a.className,m=a.component,f=void 0===m?"div":m,g=a.columns,C=void 0===g?4:g,N=a.spacing,R=void 0===N?1:N,M=a.defaultColumns,I=a.defaultHeight,z=a.defaultSpacing,P=(0,n.Z)(a,x),F=Z.useRef(),j=Z.useState(),A=(0,r.Z)(j,2),B=A[0],O=A[1],H=!B&&I&&void 0!==M&&void 0!==z,L=Z.useState(H?M-1:0),D=(0,r.Z)(L,2),E=D[0],q=D[1],G=(0,i.Z)({},a,{spacing:R,columns:C,maxColumnHeight:B,defaultColumns:M,defaultHeight:I,defaultSpacing:z,isSSR:H}),T=function(e){var t=e.classes;return(0,c.Z)({root:["root"]},b,t)}(G),$=function(e){if(F.current&&e&&0!==e.length){var t=F.current,a=F.current.firstChild,r=t.clientWidth,n=a.clientWidth;if(0!==r&&0!==n){var i=window.getComputedStyle(a),c=k(i.marginLeft),l=k(i.marginRight),u=Math.round(r/(n+c+l)),d=new Array(u).fill(0),m=!1;t.childNodes.forEach((function(e){if(e.nodeType===Node.ELEMENT_NODE&&"line-break"!==e.dataset.class&&!m){var t=window.getComputedStyle(e),a=k(t.marginTop),r=k(t.marginBottom),n=k(t.height)?Math.ceil(k(t.height))+a+r:0;if(0!==n){for(var i=0;i<e.childNodes.length;i+=1){var c=e.childNodes[i];if("IMG"===c.tagName&&0===c.clientHeight){m=!0;break}}if(!m){var s=d.indexOf(Math.min.apply(Math,(0,o.Z)(d)));d[s]+=n;var l=s+1;e.style.order=l}}else m=!0}})),m||s.flushSync((function(){O(Math.max.apply(Math,(0,o.Z)(d))),q(u>0?u-1:0)}))}}};(0,v.Z)((function(){if("undefined"!==typeof ResizeObserver){var e,t=new ResizeObserver((function(){e=window.requestAnimationFrame($)}));return F.current&&F.current.childNodes.forEach((function(e){t.observe(e)})),function(){e&&window.cancelAnimationFrame(e),t&&t.disconnect()}}}),[C,R,l]);var V=(0,h.Z)(t,F),_=new Array(E).fill("").map((function(e,t){return(0,w.jsx)("span",{"data-class":"line-break",style:(0,i.Z)({},S,{order:t+1})},t)}));return(0,w.jsxs)(y,(0,i.Z)({as:f,className:(0,p.Z)(T.root,d),ref:V,ownerState:G},P,{children:[l,_]}))}))},60220:function(e,t,a){a.d(t,{Z:function(){return b}});var o=a(29439),r=a(63366),n=a(87462),i=a(72791),c=a(28182),s=a(94419),l=a(66934),u=a(31402),d=a(74223),m=a(80184),f=(0,d.Z)((0,m.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person"),v=a(72800),h=["alt","children","className","component","imgProps","sizes","src","srcSet","variant"],p=(0,l.ZP)("div",{name:"MuiAvatar",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[t.root,t[a.variant],a.colorDefault&&t.colorDefault]}})((function(e){var t=e.theme,a=e.ownerState;return(0,n.Z)({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:t.typography.fontFamily,fontSize:t.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},"rounded"===a.variant&&{borderRadius:(t.vars||t).shape.borderRadius},"square"===a.variant&&{borderRadius:0},a.colorDefault&&(0,n.Z)({color:(t.vars||t).palette.background.default},t.vars?{backgroundColor:t.vars.palette.Avatar.defaultBg}:{backgroundColor:"light"===t.palette.mode?t.palette.grey[400]:t.palette.grey[600]}))})),Z=(0,l.ZP)("img",{name:"MuiAvatar",slot:"Img",overridesResolver:function(e,t){return t.img}})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),g=(0,l.ZP)(f,{name:"MuiAvatar",slot:"Fallback",overridesResolver:function(e,t){return t.fallback}})({width:"75%",height:"75%"});var b=i.forwardRef((function(e,t){var a=(0,u.Z)({props:e,name:"MuiAvatar"}),l=a.alt,d=a.children,f=a.className,b=a.component,w=void 0===b?"div":b,x=a.imgProps,k=a.sizes,S=a.src,y=a.srcSet,C=a.variant,N=void 0===C?"circular":C,R=(0,r.Z)(a,h),M=null,I=function(e){var t=e.crossOrigin,a=e.referrerPolicy,r=e.src,n=e.srcSet,c=i.useState(!1),s=(0,o.Z)(c,2),l=s[0],u=s[1];return i.useEffect((function(){if(r||n){u(!1);var e=!0,o=new Image;return o.onload=function(){e&&u("loaded")},o.onerror=function(){e&&u("error")},o.crossOrigin=t,o.referrerPolicy=a,o.src=r,n&&(o.srcset=n),function(){e=!1}}}),[t,a,r,n]),l}((0,n.Z)({},x,{src:S,srcSet:y})),z=S||y,P=z&&"error"!==I,F=(0,n.Z)({},a,{colorDefault:!P,component:w,variant:N}),j=function(e){var t=e.classes,a={root:["root",e.variant,e.colorDefault&&"colorDefault"],img:["img"],fallback:["fallback"]};return(0,s.Z)(a,v.$,t)}(F);return M=P?(0,m.jsx)(Z,(0,n.Z)({alt:l,src:S,srcSet:y,sizes:k,ownerState:F,className:j.img},x)):null!=d?d:z&&l?l[0]:(0,m.jsx)(g,{ownerState:F,className:j.fallback}),(0,m.jsx)(p,(0,n.Z)({as:w,ownerState:F,className:(0,c.Z)(j.root,f),ref:t},R,{children:M}))}))},72800:function(e,t,a){a.d(t,{$:function(){return n}});var o=a(75878),r=a(21217);function n(e){return(0,r.Z)("MuiAvatar",e)}var i=(0,o.Z)("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);t.Z=i},13034:function(e,t,a){a.d(t,{Z:function(){return C}});var o=a(4942),r=a(63366),n=a(87462),i=a(72791),c=a(28182),s=a(94419),l=a(12065),u=a(97278),d=a(74223),m=a(80184),f=(0,d.Z)((0,m.jsx)("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),v=(0,d.Z)((0,m.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),h=(0,d.Z)((0,m.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),p=a(14036),Z=a(31402),g=a(66934),b=a(64178),w=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size","className"],x=(0,g.ZP)(u.Z,{shouldForwardProp:function(e){return(0,g.FO)(e)||"classes"===e},name:"MuiCheckbox",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[t.root,a.indeterminate&&t.indeterminate,"default"!==a.color&&t["color".concat((0,p.Z)(a.color))]]}})((function(e){var t,a=e.theme,r=e.ownerState;return(0,n.Z)({color:(a.vars||a).palette.text.secondary},!r.disableRipple&&{"&:hover":{backgroundColor:a.vars?"rgba(".concat("default"===r.color?a.vars.palette.action.activeChannel:a.vars.palette.primary.mainChannel," / ").concat(a.vars.palette.action.hoverOpacity,")"):(0,l.Fq)("default"===r.color?a.palette.action.active:a.palette[r.color].main,a.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==r.color&&(t={},(0,o.Z)(t,"&.".concat(b.Z.checked,", &.").concat(b.Z.indeterminate),{color:(a.vars||a).palette[r.color].main}),(0,o.Z)(t,"&.".concat(b.Z.disabled),{color:(a.vars||a).palette.action.disabled}),t))})),k=(0,m.jsx)(v,{}),S=(0,m.jsx)(f,{}),y=(0,m.jsx)(h,{}),C=i.forwardRef((function(e,t){var a,o,l=(0,Z.Z)({props:e,name:"MuiCheckbox"}),u=l.checkedIcon,d=void 0===u?k:u,f=l.color,v=void 0===f?"primary":f,h=l.icon,g=void 0===h?S:h,C=l.indeterminate,N=void 0!==C&&C,R=l.indeterminateIcon,M=void 0===R?y:R,I=l.inputProps,z=l.size,P=void 0===z?"medium":z,F=l.className,j=(0,r.Z)(l,w),A=N?M:g,B=N?M:d,O=(0,n.Z)({},l,{color:v,indeterminate:N,size:P}),H=function(e){var t=e.classes,a=e.indeterminate,o=e.color,r={root:["root",a&&"indeterminate","color".concat((0,p.Z)(o))]},i=(0,s.Z)(r,b.y,t);return(0,n.Z)({},t,i)}(O);return(0,m.jsx)(x,(0,n.Z)({type:"checkbox",inputProps:(0,n.Z)({"data-indeterminate":N},I),icon:i.cloneElement(A,{fontSize:null!=(a=A.props.fontSize)?a:P}),checkedIcon:i.cloneElement(B,{fontSize:null!=(o=B.props.fontSize)?o:P}),ownerState:O,ref:t,className:(0,c.Z)(H.root,F)},j,{classes:H}))}))},93840:function(e,t,a){var o=a(72791).createContext(void 0);t.Z=o},52930:function(e,t,a){a.d(t,{Z:function(){return n}});var o=a(72791),r=a(93840);function n(){return o.useContext(r.Z)}},20653:function(e,t,a){a.d(t,{Z:function(){return Z}});var o=a(63366),r=a(87462),n=a(72791),i=a(28182),c=a(94419),s=a(66199),l=a(66934),u=a(31402),d=a(75878),m=a(21217);function f(e){return(0,m.Z)("MuiListItemAvatar",e)}(0,d.Z)("MuiListItemAvatar",["root","alignItemsFlexStart"]);var v=a(80184),h=["className"],p=(0,l.ZP)("div",{name:"MuiListItemAvatar",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[t.root,"flex-start"===a.alignItems&&t.alignItemsFlexStart]}})((function(e){var t=e.ownerState;return(0,r.Z)({minWidth:56,flexShrink:0},"flex-start"===t.alignItems&&{marginTop:8})})),Z=n.forwardRef((function(e,t){var a=(0,u.Z)({props:e,name:"MuiListItemAvatar"}),l=a.className,d=(0,o.Z)(a,h),m=n.useContext(s.Z),Z=(0,r.Z)({},a,{alignItems:m.alignItems}),g=function(e){var t=e.alignItems,a=e.classes,o={root:["root","flex-start"===t&&"alignItemsFlexStart"]};return(0,c.Z)(o,f,a)}(Z);return(0,v.jsx)(p,(0,r.Z)({className:(0,i.Z)(g.root,l),ownerState:Z,ref:t},d))}))},46112:function(e,t,a){a.d(t,{Z:function(){return g}});var o=a(63366),r=a(87462),n=a(72791),i=a(28182),c=a(94419),s=a(66934),l=a(31402),u=a(66199),d=a(75878),m=a(21217);function f(e){return(0,m.Z)("MuiListItemSecondaryAction",e)}(0,d.Z)("MuiListItemSecondaryAction",["root","disableGutters"]);var v=a(80184),h=["className"],p=(0,s.ZP)("div",{name:"MuiListItemSecondaryAction",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[t.root,a.disableGutters&&t.disableGutters]}})((function(e){var t=e.ownerState;return(0,r.Z)({position:"absolute",right:16,top:"50%",transform:"translateY(-50%)"},t.disableGutters&&{right:0})})),Z=n.forwardRef((function(e,t){var a=(0,l.Z)({props:e,name:"MuiListItemSecondaryAction"}),s=a.className,d=(0,o.Z)(a,h),m=n.useContext(u.Z),Z=(0,r.Z)({},a,{disableGutters:m.disableGutters}),g=function(e){var t=e.disableGutters,a=e.classes,o={root:["root",t&&"disableGutters"]};return(0,c.Z)(o,f,a)}(Z);return(0,v.jsx)(p,(0,r.Z)({className:(0,i.Z)(g.root,s),ownerState:Z,ref:t},d))}));Z.muiName="ListItemSecondaryAction";var g=Z},89891:function(e,t,a){var o=a(4942),r=a(63366),n=a(87462),i=a(72791),c=a(28182),s=a(94419),l=a(12065),u=a(14036),d=a(97278),m=a(31402),f=a(66934),v=a(93785),h=a(80184),p=["className","color","edge","size","sx"],Z=(0,f.ZP)("span",{name:"MuiSwitch",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[t.root,a.edge&&t["edge".concat((0,u.Z)(a.edge))],t["size".concat((0,u.Z)(a.size))]]}})((function(e){var t,a=e.ownerState;return(0,n.Z)({display:"inline-flex",width:58,height:38,overflow:"hidden",padding:12,boxSizing:"border-box",position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle","@media print":{colorAdjust:"exact"}},"start"===a.edge&&{marginLeft:-8},"end"===a.edge&&{marginRight:-8},"small"===a.size&&(t={width:40,height:24,padding:7},(0,o.Z)(t,"& .".concat(v.Z.thumb),{width:16,height:16}),(0,o.Z)(t,"& .".concat(v.Z.switchBase),(0,o.Z)({padding:4},"&.".concat(v.Z.checked),{transform:"translateX(16px)"})),t))})),g=(0,f.ZP)(d.Z,{name:"MuiSwitch",slot:"SwitchBase",overridesResolver:function(e,t){var a=e.ownerState;return[t.switchBase,(0,o.Z)({},"& .".concat(v.Z.input),t.input),"default"!==a.color&&t["color".concat((0,u.Z)(a.color))]]}})((function(e){var t,a=e.theme;return t={position:"absolute",top:0,left:0,zIndex:1,color:a.vars?a.vars.palette.Switch.defaultColor:"".concat("light"===a.palette.mode?a.palette.common.white:a.palette.grey[300]),transition:a.transitions.create(["left","transform"],{duration:a.transitions.duration.shortest})},(0,o.Z)(t,"&.".concat(v.Z.checked),{transform:"translateX(20px)"}),(0,o.Z)(t,"&.".concat(v.Z.disabled),{color:a.vars?a.vars.palette.Switch.defaultDisabledColor:"".concat("light"===a.palette.mode?a.palette.grey[100]:a.palette.grey[600])}),(0,o.Z)(t,"&.".concat(v.Z.checked," + .").concat(v.Z.track),{opacity:.5}),(0,o.Z)(t,"&.".concat(v.Z.disabled," + .").concat(v.Z.track),{opacity:a.vars?a.vars.opacity.switchTrackDisabled:"".concat("light"===a.palette.mode?.12:.2)}),(0,o.Z)(t,"& .".concat(v.Z.input),{left:"-100%",width:"300%"}),t}),(function(e){var t,a=e.theme,r=e.ownerState;return(0,n.Z)({"&:hover":{backgroundColor:a.vars?"rgba(".concat(a.vars.palette.action.activeChannel," / ").concat(a.vars.palette.action.hoverOpacity,")"):(0,l.Fq)(a.palette.action.active,a.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==r.color&&(t={},(0,o.Z)(t,"&.".concat(v.Z.checked),(0,o.Z)({color:(a.vars||a).palette[r.color].main,"&:hover":{backgroundColor:a.vars?"rgba(".concat(a.vars.palette[r.color].mainChannel," / ").concat(a.vars.palette.action.hoverOpacity,")"):(0,l.Fq)(a.palette[r.color].main,a.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&.".concat(v.Z.disabled),{color:a.vars?a.vars.palette.Switch["".concat(r.color,"DisabledColor")]:"".concat("light"===a.palette.mode?(0,l.$n)(a.palette[r.color].main,.62):(0,l._j)(a.palette[r.color].main,.55))})),(0,o.Z)(t,"&.".concat(v.Z.checked," + .").concat(v.Z.track),{backgroundColor:(a.vars||a).palette[r.color].main}),t))})),b=(0,f.ZP)("span",{name:"MuiSwitch",slot:"Track",overridesResolver:function(e,t){return t.track}})((function(e){var t=e.theme;return{height:"100%",width:"100%",borderRadius:7,zIndex:-1,transition:t.transitions.create(["opacity","background-color"],{duration:t.transitions.duration.shortest}),backgroundColor:t.vars?t.vars.palette.common.onBackground:"".concat("light"===t.palette.mode?t.palette.common.black:t.palette.common.white),opacity:t.vars?t.vars.opacity.switchTrack:"".concat("light"===t.palette.mode?.38:.3)}})),w=(0,f.ZP)("span",{name:"MuiSwitch",slot:"Thumb",overridesResolver:function(e,t){return t.thumb}})((function(e){var t=e.theme;return{boxShadow:(t.vars||t).shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"}})),x=i.forwardRef((function(e,t){var a=(0,m.Z)({props:e,name:"MuiSwitch"}),o=a.className,i=a.color,l=void 0===i?"primary":i,d=a.edge,f=void 0!==d&&d,x=a.size,k=void 0===x?"medium":x,S=a.sx,y=(0,r.Z)(a,p),C=(0,n.Z)({},a,{color:l,edge:f,size:k}),N=function(e){var t=e.classes,a=e.edge,o=e.size,r=e.color,i=e.checked,c=e.disabled,l={root:["root",a&&"edge".concat((0,u.Z)(a)),"size".concat((0,u.Z)(o))],switchBase:["switchBase","color".concat((0,u.Z)(r)),i&&"checked",c&&"disabled"],thumb:["thumb"],track:["track"],input:["input"]},d=(0,s.Z)(l,v.H,t);return(0,n.Z)({},t,d)}(C),R=(0,h.jsx)(w,{className:N.thumb,ownerState:C});return(0,h.jsxs)(Z,{className:(0,c.Z)(N.root,o),sx:S,ownerState:C,children:[(0,h.jsx)(g,(0,n.Z)({type:"checkbox",icon:R,checkedIcon:R,ref:t,ownerState:C},y,{classes:(0,n.Z)({},N,{root:N.switchBase})})),(0,h.jsx)(b,{className:N.track,ownerState:C})]})}));t.Z=x},97278:function(e,t,a){a.d(t,{Z:function(){return x}});var o=a(29439),r=a(63366),n=a(87462),i=a(72791),c=a(28182),s=a(94419),l=a(14036),u=a(66934),d=a(98278),m=a(52930),f=a(95080),v=a(75878),h=a(21217);function p(e){return(0,h.Z)("PrivateSwitchBase",e)}(0,v.Z)("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);var Z=a(80184),g=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],b=(0,u.ZP)(f.Z)((function(e){var t=e.ownerState;return(0,n.Z)({padding:9,borderRadius:"50%"},"start"===t.edge&&{marginLeft:"small"===t.size?-3:-12},"end"===t.edge&&{marginRight:"small"===t.size?-3:-12})})),w=(0,u.ZP)("input")({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),x=i.forwardRef((function(e,t){var a=e.autoFocus,i=e.checked,u=e.checkedIcon,f=e.className,v=e.defaultChecked,h=e.disabled,x=e.disableFocusRipple,k=void 0!==x&&x,S=e.edge,y=void 0!==S&&S,C=e.icon,N=e.id,R=e.inputProps,M=e.inputRef,I=e.name,z=e.onBlur,P=e.onChange,F=e.onFocus,j=e.readOnly,A=e.required,B=void 0!==A&&A,O=e.tabIndex,H=e.type,L=e.value,D=(0,r.Z)(e,g),E=(0,d.Z)({controlled:i,default:Boolean(v),name:"SwitchBase",state:"checked"}),q=(0,o.Z)(E,2),G=q[0],T=q[1],$=(0,m.Z)(),V=h;$&&"undefined"===typeof V&&(V=$.disabled);var _="checkbox"===H||"radio"===H,W=(0,n.Z)({},e,{checked:G,disabled:V,disableFocusRipple:k,edge:y}),X=function(e){var t=e.classes,a=e.checked,o=e.disabled,r=e.edge,n={root:["root",a&&"checked",o&&"disabled",r&&"edge".concat((0,l.Z)(r))],input:["input"]};return(0,s.Z)(n,p,t)}(W);return(0,Z.jsxs)(b,(0,n.Z)({component:"span",className:(0,c.Z)(X.root,f),centerRipple:!0,focusRipple:!k,disabled:V,tabIndex:null,role:void 0,onFocus:function(e){F&&F(e),$&&$.onFocus&&$.onFocus(e)},onBlur:function(e){z&&z(e),$&&$.onBlur&&$.onBlur(e)},ownerState:W,ref:t},D,{children:[(0,Z.jsx)(w,(0,n.Z)({autoFocus:a,checked:i,defaultChecked:v,className:X.input,disabled:V,id:_?N:void 0,name:I,onChange:function(e){if(!e.nativeEvent.defaultPrevented){var t=e.target.checked;T(t),P&&P(e,t)}},readOnly:j,ref:M,required:B,ownerState:W,tabIndex:O,type:H},"checkbox"===H&&void 0===L?{}:{value:L},R)),G?u:C]}))}))}}]);
//# sourceMappingURL=9166.cab862a6.chunk.js.map