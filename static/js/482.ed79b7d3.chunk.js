"use strict";(self.webpackChunk_epochlabs=self.webpackChunk_epochlabs||[]).push([[482],{50933:function(e,n,t){t.d(n,{Z:function(){return h}});var r=t(1413),o=t(45987),a=t(64554),i=t(50533),c=t(36314),l=t(4567),s=t(93517),u=t(83854),d=t(80184);function f(e){var n=e.link,t=e.activeLast,o=e.disabled,c=n.name,l=n.href,s=n.icon,f=(0,r.Z)({typography:"body2",alignItems:"center",color:"text.primary",display:"inline-flex"},o&&!t&&{cursor:"default",pointerEvents:"none",color:"text.disabled"}),m=(0,d.jsxs)(d.Fragment,{children:[s&&(0,d.jsx)(a.Z,{component:"span",sx:{mr:1,display:"inherit","& svg":{width:20,height:20}},children:s}),c]});return l?(0,d.jsx)(i.Z,{component:u.r,href:l,sx:f,children:m}):(0,d.jsxs)(a.Z,{sx:f,children:[" ",m," "]})}var m=["links","action","heading","moreLink","activeLast","sx"];function h(e){var n=e.links,t=e.action,u=e.heading,h=e.moreLink,p=e.activeLast,Z=e.sx,x=(0,o.Z)(e,m),g=n[n.length-1].name;return(0,d.jsxs)(a.Z,{sx:(0,r.Z)({},Z),children:[(0,d.jsxs)(c.Z,{direction:"row",alignItems:"center",children:[(0,d.jsxs)(a.Z,{sx:{flexGrow:1},children:[u&&(0,d.jsx)(l.Z,{variant:"h4",gutterBottom:!0,children:u}),!!n.length&&(0,d.jsx)(s.Z,(0,r.Z)((0,r.Z)({separator:(0,d.jsx)(v,{})},x),{},{children:n.map((function(e){return(0,d.jsx)(f,{link:e,activeLast:p,disabled:e.name===g},e.name||"")}))}))]}),t&&(0,d.jsxs)(a.Z,{sx:{flexShrink:0},children:[" ",t," "]})]}),!!h&&(0,d.jsx)(a.Z,{sx:{mt:2},children:h.map((function(e){return(0,d.jsx)(i.Z,{href:e,variant:"body2",target:"_blank",rel:"noopener",sx:{display:"table"},children:e},e)}))})]})}function v(){return(0,d.jsx)(a.Z,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})}},33813:function(e,n,t){t.r(n),t.d(n,{default:function(){return b}});var r=t(6907),o=t(29439),a=t(72791),i=t(16002),c=t(64554),l=t(1503),s=t(89164),u=t(88970),d=t(68096),f=t(25801),m=t(38072),h=t(50933),v=t(31562),p=t(80184),Z=["default","primary","secondary","info","success","warning","error"],x=["top","start","bottom","end"];function g(){var e=(0,a.useState)("a1"),n=(0,o.Z)(e,2),t=n[0],r=n[1];return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(c.Z,{sx:{py:5,bgcolor:function(e){return"light"===e.palette.mode?"grey.200":"grey.800"}},children:(0,p.jsx)(s.Z,{children:(0,p.jsx)(h.Z,{heading:"Radio Buttons",links:[{name:"Components",href:m.H.components},{name:"Radio Buttons"}],moreLink:["https://mui.com/components/radio-buttons"]})})}),(0,p.jsx)(s.Z,{sx:{my:10},children:(0,p.jsxs)(i.ZP,{columns:{xs:1,md:2},spacing:3,children:[(0,p.jsx)(v.Z,{title:"Basic",children:(0,p.jsx)(d.Z,{component:"fieldset",children:(0,p.jsxs)(u.Z,{row:!0,defaultValue:"nn",children:[(0,p.jsx)(l.Z,{size:"medium",value:"nn"}),(0,p.jsx)(l.Z,{size:"medium",value:"gg"}),(0,p.jsx)(l.Z,{size:"medium",disabled:!0,value:"hh"})]})})}),(0,p.jsx)(v.Z,{title:"Sizes",children:(0,p.jsxs)(u.Z,{row:!0,defaultValue:"g",children:[(0,p.jsx)(f.Z,{value:"g",control:(0,p.jsx)(l.Z,{size:"medium"}),label:"Normal"}),(0,p.jsx)(f.Z,{value:"p",control:(0,p.jsx)(l.Z,{size:"small"}),label:"Small"})]})}),(0,p.jsx)(v.Z,{title:"Placement",children:(0,p.jsx)(d.Z,{component:"fieldset",children:(0,p.jsx)(u.Z,{row:!0,defaultValue:"top",children:x.map((function(e){return(0,p.jsx)(f.Z,{value:e,label:e,labelPlacement:e,control:(0,p.jsx)(l.Z,{size:"medium"}),sx:{textTransform:"capitalize"}},e)}))})})}),(0,p.jsx)(v.Z,{title:"Colors",children:(0,p.jsx)(d.Z,{component:"fieldset",children:(0,p.jsxs)(u.Z,{value:t,onChange:function(e){r(e.target.value)},children:[Z.map((function(e){return(0,p.jsx)(f.Z,{value:e,control:(0,p.jsx)(l.Z,{size:"medium",color:e}),label:e,sx:{textTransform:"capitalize"}},e)})),(0,p.jsx)(f.Z,{disabled:!0,value:"a8",control:(0,p.jsx)(l.Z,{size:"medium",color:"error"}),label:"Disabled"})]})})})]})})]})}function b(){return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(r.ql,{children:(0,p.jsx)("title",{children:" MUI: Radio Button"})}),(0,p.jsx)(g,{})]})}},31562:function(e,n,t){t.d(n,{Z:function(){return d}});var r=t(1413),o=t(45987),a=t(12065),i=t(27938),c=t(9585),l=t(36314),s=t(80184),u=["title","sx","children"];function d(e){var n=e.title,t=e.sx,d=e.children,f=(0,o.Z)(e,u);return(0,s.jsxs)(i.Z,{variant:"outlined",sx:{borderRadius:1.5,borderStyle:"dashed",bgcolor:function(e){return(0,a.Fq)(e.palette.grey[500],.04)}},children:[n&&(0,s.jsx)(c.Z,{title:n}),(0,s.jsx)(l.Z,(0,r.Z)((0,r.Z)({spacing:3,direction:"row",alignItems:"center",justifyContent:"center",flexWrap:"wrap",sx:(0,r.Z)({p:5,minHeight:180},t)},f),{},{children:d}))]})}},16002:function(e,n,t){t.d(n,{ZP:function(){return w}});var r=t(93433),o=t(29439),a=t(63366),i=t(87462),c=t(94419),l=t(54164),s=t(66934),u=t(31402),d=t(51184),f=t(45682),m=t(82466),h=t(62876),v=t(6117),p=t(28182),Z=t(72791),x=t(21217);function g(e){return(0,x.Z)("MuiMasonry",e)}(0,t(75878).Z)("MuiMasonry",["root"]);var b=t(80184),j=["children","className","component","columns","spacing","defaultColumns","defaultHeight","defaultSpacing"],y=function(e){return Number(e.replace("px",""))},S={flexBasis:"100%",width:0,margin:0,padding:0},C=(0,s.ZP)("div",{name:"MuiMasonry",slot:"Root",overridesResolver:function(e,n){return[n.root]}})((function(e){var n=e.ownerState,t=e.theme,r={width:"100%",display:"flex",flexFlow:"column wrap",alignContent:"flex-start",boxSizing:"border-box","& > *":{boxSizing:"border-box"}},o={};if(n.isSSR){for(var a={},c=y(t.spacing(n.defaultSpacing)),l=1;l<=n.defaultColumns;l+=1)a["&:nth-of-type(".concat(n.defaultColumns,"n+").concat(l%n.defaultColumns,")")]={order:l};return o.height=n.defaultHeight,o.margin=-c/2,o["& > *"]=(0,i.Z)({},r["& > *"],a,{margin:c/2,width:"calc(".concat((100/n.defaultColumns).toFixed(2),"% - ").concat(c,"px)")}),(0,i.Z)({},r,o)}var s=(0,d.P$)({values:n.spacing,breakpoints:t.breakpoints.values}),u=(0,f.hB)(t);r=(0,m.Z)(r,(0,d.k9)({theme:t},s,(function(e){var t;if("string"===typeof e&&!Number.isNaN(Number(e))||"number"===typeof e){var r=Number(e);t=(0,f.NA)(u,r)}else t=e;return(0,i.Z)({margin:"calc(0px - (".concat(t," / 2))"),"& > *":{margin:"calc(".concat(t," / 2)")}},n.maxColumnHeight&&{height:"number"===typeof t?Math.ceil(n.maxColumnHeight+y(t)):"calc(".concat(n.maxColumnHeight,"px + ").concat(t,")")})})));var h=(0,d.P$)({values:n.columns,breakpoints:t.breakpoints.values});return r=(0,m.Z)(r,(0,d.k9)({theme:t},h,(function(e){var n=Number(e),t="".concat((100/n).toFixed(2),"%"),r="string"===typeof s&&!Number.isNaN(Number(s))||"number"===typeof s?(0,f.NA)(u,Number(s)):"0px";return{"& > *":{width:"calc(".concat(t," - ").concat(r,")")}}}))),"object"===typeof s&&(r=(0,m.Z)(r,(0,d.k9)({theme:t},s,(function(e,n){if(n){var t=Number(e),r=Object.keys(h).pop(),o=(0,f.NA)(u,t),a="object"===typeof h?h[n]||h[r]:h,i="".concat((100/a).toFixed(2),"%");return{"& > *":{width:"calc(".concat(i," - ").concat(o,")")}}}return null})))),r})),w=Z.forwardRef((function(e,n){var t=(0,u.Z)({props:e,name:"MuiMasonry"}),s=t.children,d=t.className,f=t.component,m=void 0===f?"div":f,x=t.columns,w=void 0===x?4:x,k=t.spacing,N=void 0===k?1:k,z=t.defaultColumns,M=t.defaultHeight,R=t.defaultSpacing,F=(0,a.Z)(t,j),P=Z.useRef(),B=Z.useState(),W=(0,o.Z)(B,2),E=W[0],L=W[1],A=!E&&M&&void 0!==z&&void 0!==R,H=Z.useState(A?z-1:0),I=(0,o.Z)(H,2),q=I[0],O=I[1],T=(0,i.Z)({},t,{spacing:N,columns:w,maxColumnHeight:E,defaultColumns:z,defaultHeight:M,defaultSpacing:R,isSSR:A}),V=function(e){var n=e.classes;return(0,c.Z)({root:["root"]},g,n)}(T),D=function(e){if(P.current&&e&&0!==e.length){var n=P.current,t=P.current.firstChild,o=n.clientWidth,a=t.clientWidth;if(0!==o&&0!==a){var i=window.getComputedStyle(t),c=y(i.marginLeft),s=y(i.marginRight),u=Math.round(o/(a+c+s)),d=new Array(u).fill(0),f=!1;n.childNodes.forEach((function(e){if(e.nodeType===Node.ELEMENT_NODE&&"line-break"!==e.dataset.class&&!f){var n=window.getComputedStyle(e),t=y(n.marginTop),o=y(n.marginBottom),a=y(n.height)?Math.ceil(y(n.height))+t+o:0;if(0!==a){for(var i=0;i<e.childNodes.length;i+=1){var c=e.childNodes[i];if("IMG"===c.tagName&&0===c.clientHeight){f=!0;break}}if(!f){var l=d.indexOf(Math.min.apply(Math,(0,r.Z)(d)));d[l]+=a;var s=l+1;e.style.order=s}}else f=!0}})),f||l.flushSync((function(){L(Math.max.apply(Math,(0,r.Z)(d))),O(u>0?u-1:0)}))}}};(0,h.Z)((function(){if("undefined"!==typeof ResizeObserver){var e,n=new ResizeObserver((function(){e=window.requestAnimationFrame(D)}));return P.current&&P.current.childNodes.forEach((function(e){n.observe(e)})),function(){e&&window.cancelAnimationFrame(e),n&&n.disconnect()}}}),[w,N,s]);var _=(0,v.Z)(n,P),G=new Array(q).fill("").map((function(e,n){return(0,b.jsx)("span",{"data-class":"line-break",style:(0,i.Z)({},S,{order:n+1})},n)}));return(0,b.jsxs)(C,(0,i.Z)({as:m,className:(0,p.Z)(V.root,d),ref:_,ownerState:T},F,{children:[s,G]}))}))},68096:function(e,n,t){t.d(n,{Z:function(){return j}});var r=t(29439),o=t(63366),a=t(87462),i=t(72791),c=t(28182),l=t(94419),s=t(31402),u=t(66934),d=t(35470),f=t(14036),m=t(13701),h=t(93840),v=t(75878),p=t(21217);function Z(e){return(0,p.Z)("MuiFormControl",e)}(0,v.Z)("MuiFormControl",["root","marginNone","marginNormal","marginDense","fullWidth","disabled"]);var x=t(80184),g=["children","className","color","component","disabled","error","focused","fullWidth","hiddenLabel","margin","required","size","variant"],b=(0,u.ZP)("div",{name:"MuiFormControl",slot:"Root",overridesResolver:function(e,n){var t=e.ownerState;return(0,a.Z)({},n.root,n["margin".concat((0,f.Z)(t.margin))],t.fullWidth&&n.fullWidth)}})((function(e){var n=e.ownerState;return(0,a.Z)({display:"inline-flex",flexDirection:"column",position:"relative",minWidth:0,padding:0,margin:0,border:0,verticalAlign:"top"},"normal"===n.margin&&{marginTop:16,marginBottom:8},"dense"===n.margin&&{marginTop:8,marginBottom:4},n.fullWidth&&{width:"100%"})})),j=i.forwardRef((function(e,n){var t=(0,s.Z)({props:e,name:"MuiFormControl"}),u=t.children,v=t.className,p=t.color,j=void 0===p?"primary":p,y=t.component,S=void 0===y?"div":y,C=t.disabled,w=void 0!==C&&C,k=t.error,N=void 0!==k&&k,z=t.focused,M=t.fullWidth,R=void 0!==M&&M,F=t.hiddenLabel,P=void 0!==F&&F,B=t.margin,W=void 0===B?"none":B,E=t.required,L=void 0!==E&&E,A=t.size,H=void 0===A?"medium":A,I=t.variant,q=void 0===I?"outlined":I,O=(0,o.Z)(t,g),T=(0,a.Z)({},t,{color:j,component:S,disabled:w,error:N,fullWidth:R,hiddenLabel:P,margin:W,required:L,size:H,variant:q}),V=function(e){var n=e.classes,t=e.margin,r=e.fullWidth,o={root:["root","none"!==t&&"margin".concat((0,f.Z)(t)),r&&"fullWidth"]};return(0,l.Z)(o,Z,n)}(T),D=i.useState((function(){var e=!1;return u&&i.Children.forEach(u,(function(n){if((0,m.Z)(n,["Input","Select"])){var t=(0,m.Z)(n,["Select"])?n.props.input:n;t&&(0,d.B7)(t.props)&&(e=!0)}})),e})),_=(0,r.Z)(D,2),G=_[0],U=_[1],$=i.useState((function(){var e=!1;return u&&i.Children.forEach(u,(function(n){(0,m.Z)(n,["Input","Select"])&&((0,d.vd)(n.props,!0)||(0,d.vd)(n.props.inputProps,!0))&&(e=!0)})),e})),J=(0,r.Z)($,2),K=J[0],Q=J[1],X=i.useState(!1),Y=(0,r.Z)(X,2),ee=Y[0],ne=Y[1];w&&ee&&ne(!1);var te,re=void 0===z||w?ee:z,oe=i.useMemo((function(){return{adornedStart:G,setAdornedStart:U,color:j,disabled:w,error:N,filled:K,focused:re,fullWidth:R,hiddenLabel:P,size:H,onBlur:function(){ne(!1)},onEmpty:function(){Q(!1)},onFilled:function(){Q(!0)},onFocus:function(){ne(!0)},registerEffect:te,required:L,variant:q}}),[G,j,w,N,K,re,R,P,te,L,H,q]);return(0,x.jsx)(h.Z.Provider,{value:oe,children:(0,x.jsx)(b,(0,a.Z)({as:S,ownerState:T,className:(0,c.Z)(V.root,v),ref:n},O,{children:u}))})}))},93840:function(e,n,t){var r=t(72791).createContext(void 0);n.Z=r},76147:function(e,n,t){function r(e){var n=e.props,t=e.states,r=e.muiFormControl;return t.reduce((function(e,t){return e[t]=n[t],r&&"undefined"===typeof n[t]&&(e[t]=r[t]),e}),{})}t.d(n,{Z:function(){return r}})},52930:function(e,n,t){t.d(n,{Z:function(){return a}});var r=t(72791),o=t(93840);function a(){return r.useContext(o.Z)}},35470:function(e,n,t){function r(e){return null!=e&&!(Array.isArray(e)&&0===e.length)}function o(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return e&&(r(e.value)&&""!==e.value||n&&r(e.defaultValue)&&""!==e.defaultValue)}function a(e){return e.startAdornment}t.d(n,{B7:function(){return a},vd:function(){return o}})},1503:function(e,n,t){t.d(n,{Z:function(){return P}});var r=t(4942),o=t(63366),a=t(87462),i=t(72791),c=t(28182),l=t(94419),s=t(12065),u=t(97278),d=t(31402),f=t(74223),m=t(80184),h=(0,f.Z)((0,m.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"RadioButtonUnchecked"),v=(0,f.Z)((0,m.jsx)("path",{d:"M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"}),"RadioButtonChecked"),p=t(66934),Z=(0,p.ZP)("span")({position:"relative",display:"flex"}),x=(0,p.ZP)(h)({transform:"scale(1)"}),g=(0,p.ZP)(v)((function(e){var n=e.theme,t=e.ownerState;return(0,a.Z)({left:0,position:"absolute",transform:"scale(0)",transition:n.transitions.create("transform",{easing:n.transitions.easing.easeIn,duration:n.transitions.duration.shortest})},t.checked&&{transform:"scale(1)",transition:n.transitions.create("transform",{easing:n.transitions.easing.easeOut,duration:n.transitions.duration.shortest})})}));var b=function(e){var n=e.checked,t=void 0!==n&&n,r=e.classes,o=void 0===r?{}:r,i=e.fontSize,c=(0,a.Z)({},e,{checked:t});return(0,m.jsxs)(Z,{className:o.root,ownerState:c,children:[(0,m.jsx)(x,{fontSize:i,className:o.background,ownerState:c}),(0,m.jsx)(g,{fontSize:i,className:o.dot,ownerState:c})]})},j=t(14036),y=t(78949).Z,S=t(18672);var C=t(75878),w=t(21217);function k(e){return(0,w.Z)("MuiRadio",e)}var N=(0,C.Z)("MuiRadio",["root","checked","disabled","colorPrimary","colorSecondary"]),z=["checked","checkedIcon","color","icon","name","onChange","size","className"],M=(0,p.ZP)(u.Z,{shouldForwardProp:function(e){return(0,p.FO)(e)||"classes"===e},name:"MuiRadio",slot:"Root",overridesResolver:function(e,n){var t=e.ownerState;return[n.root,n["color".concat((0,j.Z)(t.color))]]}})((function(e){var n=e.theme,t=e.ownerState;return(0,a.Z)({color:(n.vars||n).palette.text.secondary},!t.disableRipple&&{"&:hover":{backgroundColor:n.vars?"rgba(".concat("default"===t.color?n.vars.palette.action.activeChannel:n.vars.palette[t.color].mainChannel," / ").concat(n.vars.palette.action.hoverOpacity,")"):(0,s.Fq)("default"===t.color?n.palette.action.active:n.palette[t.color].main,n.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==t.color&&(0,r.Z)({},"&.".concat(N.checked),{color:(n.vars||n).palette[t.color].main}),(0,r.Z)({},"&.".concat(N.disabled),{color:(n.vars||n).palette.action.disabled}))}));var R=(0,m.jsx)(b,{checked:!0}),F=(0,m.jsx)(b,{}),P=i.forwardRef((function(e,n){var t,r,s,u,f=(0,d.Z)({props:e,name:"MuiRadio"}),h=f.checked,v=f.checkedIcon,p=void 0===v?R:v,Z=f.color,x=void 0===Z?"primary":Z,g=f.icon,b=void 0===g?F:g,C=f.name,w=f.onChange,N=f.size,P=void 0===N?"medium":N,B=f.className,W=(0,o.Z)(f,z),E=(0,a.Z)({},f,{color:x,size:P}),L=function(e){var n=e.classes,t=e.color,r={root:["root","color".concat((0,j.Z)(t))]};return(0,a.Z)({},n,(0,l.Z)(r,k,n))}(E),A=i.useContext(S.Z),H=h,I=y(w,A&&A.onChange),q=C;return A&&("undefined"===typeof H&&(s=A.value,H="object"===typeof(u=f.value)&&null!==u?s===u:String(s)===String(u)),"undefined"===typeof q&&(q=A.name)),(0,m.jsx)(M,(0,a.Z)({type:"radio",icon:i.cloneElement(b,{fontSize:null!=(t=F.props.fontSize)?t:P}),checkedIcon:i.cloneElement(p,{fontSize:null!=(r=R.props.fontSize)?r:P}),ownerState:E,classes:L,name:q,checked:H,onChange:I,ref:n,className:(0,c.Z)(L.root,B)},W))}))},88970:function(e,n,t){var r=t(29439),o=t(87462),a=t(63366),i=t(72791),c=t(79012),l=t(42071),s=t(98278),u=t(18672),d=t(67384),f=t(80184),m=["actions","children","defaultValue","name","onChange","value"],h=i.forwardRef((function(e,n){var t=e.actions,h=e.children,v=e.defaultValue,p=e.name,Z=e.onChange,x=e.value,g=(0,a.Z)(e,m),b=i.useRef(null),j=(0,s.Z)({controlled:x,default:v,name:"RadioGroup"}),y=(0,r.Z)(j,2),S=y[0],C=y[1];i.useImperativeHandle(t,(function(){return{focus:function(){var e=b.current.querySelector("input:not(:disabled):checked");e||(e=b.current.querySelector("input:not(:disabled)")),e&&e.focus()}}}),[]);var w=(0,l.Z)(n,b),k=(0,d.Z)(p),N=i.useMemo((function(){return{name:k,onChange:function(e){C(e.target.value),Z&&Z(e,e.target.value)},value:S}}),[k,Z,C,S]);return(0,f.jsx)(u.Z.Provider,{value:N,children:(0,f.jsx)(c.Z,(0,o.Z)({role:"radiogroup",ref:w},g,{children:h}))})}));n.Z=h},18672:function(e,n,t){var r=t(72791).createContext(void 0);n.Z=r},13701:function(e,n,t){var r=t(78);n.Z=r.Z}}]);
//# sourceMappingURL=482.ed79b7d3.chunk.js.map