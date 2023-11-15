"use strict";(self.webpackChunk_epochlabs=self.webpackChunk_epochlabs||[]).push([[7343],{50933:function(e,n,t){t.d(n,{Z:function(){return v}});var o=t(1413),a=t(45987),r=t(64554),i=t(50533),c=t(36314),l=t(4567),s=t(93517),d=t(83854),u=t(80184);function h(e){var n=e.link,t=e.activeLast,a=e.disabled,c=n.name,l=n.href,s=n.icon,h=(0,o.Z)({typography:"body2",alignItems:"center",color:"text.primary",display:"inline-flex"},a&&!t&&{cursor:"default",pointerEvents:"none",color:"text.disabled"}),p=(0,u.jsxs)(u.Fragment,{children:[s&&(0,u.jsx)(r.Z,{component:"span",sx:{mr:1,display:"inherit","& svg":{width:20,height:20}},children:s}),c]});return l?(0,u.jsx)(i.Z,{component:d.r,href:l,sx:h,children:p}):(0,u.jsxs)(r.Z,{sx:h,children:[" ",p," "]})}var p=["links","action","heading","moreLink","activeLast","sx"];function v(e){var n=e.links,t=e.action,d=e.heading,v=e.moreLink,f=e.activeLast,m=e.sx,Z=(0,a.Z)(e,p),b=n[n.length-1].name;return(0,u.jsxs)(r.Z,{sx:(0,o.Z)({},m),children:[(0,u.jsxs)(c.Z,{direction:"row",alignItems:"center",children:[(0,u.jsxs)(r.Z,{sx:{flexGrow:1},children:[d&&(0,u.jsx)(l.Z,{variant:"h4",gutterBottom:!0,children:d}),!!n.length&&(0,u.jsx)(s.Z,(0,o.Z)((0,o.Z)({separator:(0,u.jsx)(x,{})},Z),{},{children:n.map((function(e){return(0,u.jsx)(h,{link:e,activeLast:f,disabled:e.name===b},e.name||"")}))}))]}),t&&(0,u.jsxs)(r.Z,{sx:{flexShrink:0},children:[" ",t," "]})]}),!!v&&(0,u.jsx)(r.Z,{sx:{mt:2},children:v.map((function(e){return(0,u.jsx)(i.Z,{href:e,variant:"body2",target:"_blank",rel:"noopener",sx:{display:"table"},children:e},e)}))})]})}function x(){return(0,u.jsx)(r.Z,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})}},87343:function(e,n,t){t.r(n),t.d(n,{default:function(){return O}});var o=t(6907),a=t(64554),r=t(36314),i=t(89164),c=t(38072),l=t(50933),s=t(31562),d=t(93433),u=t(29439),h=t(72791),p=t(43236),v=t(57621),x=t(5849),f=t(13034),m=t(24308),Z=t(57064),b=t(49900),g=t(76278),j=t(44e3),y=t(80184);function w(e,n){return e.filter((function(e){return-1===n.indexOf(e)}))}function k(e,n){return e.filter((function(e){return-1!==n.indexOf(e)}))}function C(){var e=(0,h.useState)([]),n=(0,u.Z)(e,2),t=n[0],o=n[1],a=(0,h.useState)([0,1,2,3]),r=(0,u.Z)(a,2),i=r[0],c=r[1],l=(0,h.useState)([4,5,6,7]),s=(0,u.Z)(l,2),C=s[0],S=s[1],z=k(t,i),R=k(t,C),I=function(e){return function(){var n=t.indexOf(e),a=(0,d.Z)(t);-1===n?a.push(e):a.splice(n,1),o(a)}},F=function(e){return(0,y.jsx)(v.Z,{sx:{width:200,height:220,overflow:"auto",borderRadius:1.5},children:(0,y.jsx)(p.Z,{dense:!0,component:"div",role:"list",children:e.map((function(e){var n="transfer-list-item-".concat(e,"-label");return(0,y.jsxs)(g.Z,{role:"listitem",onClick:I(e),children:[(0,y.jsx)(Z.Z,{children:(0,y.jsx)(f.Z,{checked:-1!==t.indexOf(e),tabIndex:-1,disableRipple:!0,inputProps:{"aria-labelledby":n}})}),(0,y.jsx)(b.Z,{id:n,primary:"List item ".concat(e+1)})]},e)}))})})};return(0,y.jsxs)(m.Z,{container:!0,justifyContent:"center",alignItems:"center",sx:{width:"auto",py:3},children:[(0,y.jsx)(m.Z,{children:F(i)}),(0,y.jsxs)(m.Z,{container:!0,direction:"column",alignItems:"center",sx:{p:3},children:[(0,y.jsx)(x.Z,{color:"inherit",variant:"outlined",size:"small",onClick:function(){S(C.concat(i)),c([])},disabled:0===i.length,"aria-label":"move all right",sx:{my:1},children:(0,y.jsx)(j.Z,{icon:"eva:arrowhead-right-fill",width:18})}),(0,y.jsx)(x.Z,{color:"inherit",variant:"outlined",size:"small",onClick:function(){S(C.concat(z)),c(w(i,z)),o(w(t,z))},disabled:0===z.length,"aria-label":"move selected right",sx:{my:1},children:(0,y.jsx)(j.Z,{icon:"eva:arrow-ios-forward-fill",width:18})}),(0,y.jsx)(x.Z,{color:"inherit",variant:"outlined",size:"small",onClick:function(){c(i.concat(R)),S(w(C,R)),o(w(t,R))},disabled:0===R.length,"aria-label":"move selected left",sx:{my:1},children:(0,y.jsx)(j.Z,{icon:"eva:arrow-ios-back-fill",width:18})}),(0,y.jsx)(x.Z,{color:"inherit",variant:"outlined",size:"small",onClick:function(){c(i.concat(C)),S([])},disabled:0===C.length,"aria-label":"move all left",sx:{my:1},children:(0,y.jsx)(j.Z,{icon:"eva:arrowhead-left-fill",width:18})})]}),(0,y.jsx)(m.Z,{children:F(C)})]})}var S=t(94721),z=t(9585);function R(e,n){return e.filter((function(e){return-1===n.indexOf(e)}))}function I(e,n){return e.filter((function(e){return-1!==n.indexOf(e)}))}function F(){var e=(0,h.useState)([]),n=(0,u.Z)(e,2),t=n[0],o=n[1],a=(0,h.useState)([0,1,2,3]),r=(0,u.Z)(a,2),i=r[0],c=r[1],l=(0,h.useState)([4,5,6,7]),s=(0,u.Z)(l,2),w=s[0],k=s[1],C=I(t,i),F=I(t,w),B=function(e){return function(){var n=t.indexOf(e),a=(0,d.Z)(t);-1===n?a.push(e):a.splice(n,1),o(a)}},O=function(e){return I(t,e).length},P=function(e){return function(){var n,a;O(e)===e.length?o(R(t,e)):o((n=t,a=e,[].concat((0,d.Z)(n),(0,d.Z)(R(a,n)))))}},N=function(e,n){return(0,y.jsxs)(v.Z,{sx:{borderRadius:1.5},children:[(0,y.jsx)(z.Z,{avatar:(0,y.jsx)(f.Z,{onClick:P(n),checked:O(n)===n.length&&0!==n.length,indeterminate:O(n)!==n.length&&0!==O(n),disabled:0===n.length,inputProps:{"aria-label":"all items selected"}}),title:e,subheader:"".concat(O(n),"/").concat(n.length," selected"),sx:{p:2}}),(0,y.jsx)(S.Z,{}),(0,y.jsx)(p.Z,{dense:!0,component:"div",role:"list",sx:{width:200,height:220,overflow:"auto"},children:n.map((function(e){var n="transfer-list-all-item-".concat(e,"-label");return(0,y.jsxs)(g.Z,{role:"listitem",onClick:B(e),children:[(0,y.jsx)(Z.Z,{children:(0,y.jsx)(f.Z,{disableRipple:!0,checked:-1!==t.indexOf(e),tabIndex:-1,inputProps:{"aria-labelledby":n}})}),(0,y.jsx)(b.Z,{id:n,primary:"List item ".concat(e+1)})]},e)}))})]})};return(0,y.jsxs)(m.Z,{container:!0,justifyContent:"center",alignItems:"center",sx:{width:"auto",p:3},children:[(0,y.jsx)(m.Z,{children:N("Choices",i)}),(0,y.jsxs)(m.Z,{container:!0,direction:"column",alignItems:"center",sx:{p:3},children:[(0,y.jsx)(x.Z,{color:"inherit",variant:"outlined",size:"small",onClick:function(){k(w.concat(C)),c(R(i,C)),o(R(t,C))},disabled:0===C.length,"aria-label":"move selected right",sx:{my:1},children:(0,y.jsx)(j.Z,{icon:"eva:arrow-ios-forward-fill",width:18})}),(0,y.jsx)(x.Z,{color:"inherit",variant:"outlined",size:"small",onClick:function(){c(i.concat(F)),k(R(w,F)),o(R(t,F))},disabled:0===F.length,"aria-label":"move selected left",sx:{my:1},children:(0,y.jsx)(j.Z,{icon:"eva:arrow-ios-back-fill",width:18})})]}),(0,y.jsx)(m.Z,{children:N("Chosen",w)})]})}function B(){return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(a.Z,{sx:{py:5,bgcolor:function(e){return"light"===e.palette.mode?"grey.200":"grey.800"}},children:(0,y.jsx)(i.Z,{children:(0,y.jsx)(l.Z,{heading:"Transfer List",links:[{name:"Components",href:c.H.components},{name:"Transfer List"}],moreLink:["https://mui.com/components/transfer-list"]})})}),(0,y.jsx)(i.Z,{sx:{my:10},children:(0,y.jsxs)(r.Z,{spacing:3,children:[(0,y.jsx)(s.Z,{title:"Simple",children:(0,y.jsx)(C,{})}),(0,y.jsx)(s.Z,{title:"Enhanced",children:(0,y.jsx)(F,{})})]})})]})}function O(){return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(o.ql,{children:(0,y.jsx)("title",{children:" MUI: Transfer List"})}),(0,y.jsx)(B,{})]})}},31562:function(e,n,t){t.d(n,{Z:function(){return u}});var o=t(1413),a=t(45987),r=t(12065),i=t(27938),c=t(9585),l=t(36314),s=t(80184),d=["title","sx","children"];function u(e){var n=e.title,t=e.sx,u=e.children,h=(0,a.Z)(e,d);return(0,s.jsxs)(i.Z,{variant:"outlined",sx:{borderRadius:1.5,borderStyle:"dashed",bgcolor:function(e){return(0,r.Fq)(e.palette.grey[500],.04)}},children:[n&&(0,s.jsx)(c.Z,{title:n}),(0,s.jsx)(l.Z,(0,o.Z)((0,o.Z)({spacing:3,direction:"row",alignItems:"center",justifyContent:"center",flexWrap:"wrap",sx:(0,o.Z)({p:5,minHeight:180},t)},h),{},{children:u}))]})}},5849:function(e,n,t){var o=t(4942),a=t(63366),r=t(87462),i=t(72791),c=t(28182),l=t(35735),s=t(94419),d=t(12065),u=t(66934),h=t(31402),p=t(95080),v=t(14036),x=t(91143),f=t(91793),m=t(80184),Z=["children","color","component","className","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"],b=function(e){return(0,r.Z)({},"small"===e.size&&{"& > *:nth-of-type(1)":{fontSize:18}},"medium"===e.size&&{"& > *:nth-of-type(1)":{fontSize:20}},"large"===e.size&&{"& > *:nth-of-type(1)":{fontSize:22}})},g=(0,u.ZP)(p.Z,{shouldForwardProp:function(e){return(0,u.FO)(e)||"classes"===e},name:"MuiButton",slot:"Root",overridesResolver:function(e,n){var t=e.ownerState;return[n.root,n[t.variant],n["".concat(t.variant).concat((0,v.Z)(t.color))],n["size".concat((0,v.Z)(t.size))],n["".concat(t.variant,"Size").concat((0,v.Z)(t.size))],"inherit"===t.color&&n.colorInherit,t.disableElevation&&n.disableElevation,t.fullWidth&&n.fullWidth]}})((function(e){var n,t,a,i=e.theme,c=e.ownerState,l="light"===i.palette.mode?i.palette.grey[300]:i.palette.grey[800],s="light"===i.palette.mode?i.palette.grey.A100:i.palette.grey[700];return(0,r.Z)({},i.typography.button,(n={minWidth:64,padding:"6px 16px",borderRadius:(i.vars||i).shape.borderRadius,transition:i.transitions.create(["background-color","box-shadow","border-color","color"],{duration:i.transitions.duration.short}),"&:hover":(0,r.Z)({textDecoration:"none",backgroundColor:i.vars?"rgba(".concat(i.vars.palette.text.primaryChannel," / ").concat(i.vars.palette.action.hoverOpacity,")"):(0,d.Fq)(i.palette.text.primary,i.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"text"===c.variant&&"inherit"!==c.color&&{backgroundColor:i.vars?"rgba(".concat(i.vars.palette[c.color].mainChannel," / ").concat(i.vars.palette.action.hoverOpacity,")"):(0,d.Fq)(i.palette[c.color].main,i.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"outlined"===c.variant&&"inherit"!==c.color&&{border:"1px solid ".concat((i.vars||i).palette[c.color].main),backgroundColor:i.vars?"rgba(".concat(i.vars.palette[c.color].mainChannel," / ").concat(i.vars.palette.action.hoverOpacity,")"):(0,d.Fq)(i.palette[c.color].main,i.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"contained"===c.variant&&{backgroundColor:i.vars?i.vars.palette.Button.inheritContainedHoverBg:s,boxShadow:(i.vars||i).shadows[4],"@media (hover: none)":{boxShadow:(i.vars||i).shadows[2],backgroundColor:(i.vars||i).palette.grey[300]}},"contained"===c.variant&&"inherit"!==c.color&&{backgroundColor:(i.vars||i).palette[c.color].dark,"@media (hover: none)":{backgroundColor:(i.vars||i).palette[c.color].main}}),"&:active":(0,r.Z)({},"contained"===c.variant&&{boxShadow:(i.vars||i).shadows[8]})},(0,o.Z)(n,"&.".concat(x.Z.focusVisible),(0,r.Z)({},"contained"===c.variant&&{boxShadow:(i.vars||i).shadows[6]})),(0,o.Z)(n,"&.".concat(x.Z.disabled),(0,r.Z)({color:(i.vars||i).palette.action.disabled},"outlined"===c.variant&&{border:"1px solid ".concat((i.vars||i).palette.action.disabledBackground)},"contained"===c.variant&&{color:(i.vars||i).palette.action.disabled,boxShadow:(i.vars||i).shadows[0],backgroundColor:(i.vars||i).palette.action.disabledBackground})),n),"text"===c.variant&&{padding:"6px 8px"},"text"===c.variant&&"inherit"!==c.color&&{color:(i.vars||i).palette[c.color].main},"outlined"===c.variant&&{padding:"5px 15px",border:"1px solid currentColor"},"outlined"===c.variant&&"inherit"!==c.color&&{color:(i.vars||i).palette[c.color].main,border:i.vars?"1px solid rgba(".concat(i.vars.palette[c.color].mainChannel," / 0.5)"):"1px solid ".concat((0,d.Fq)(i.palette[c.color].main,.5))},"contained"===c.variant&&{color:i.vars?i.vars.palette.text.primary:null==(t=(a=i.palette).getContrastText)?void 0:t.call(a,i.palette.grey[300]),backgroundColor:i.vars?i.vars.palette.Button.inheritContainedBg:l,boxShadow:(i.vars||i).shadows[2]},"contained"===c.variant&&"inherit"!==c.color&&{color:(i.vars||i).palette[c.color].contrastText,backgroundColor:(i.vars||i).palette[c.color].main},"inherit"===c.color&&{color:"inherit",borderColor:"currentColor"},"small"===c.size&&"text"===c.variant&&{padding:"4px 5px",fontSize:i.typography.pxToRem(13)},"large"===c.size&&"text"===c.variant&&{padding:"8px 11px",fontSize:i.typography.pxToRem(15)},"small"===c.size&&"outlined"===c.variant&&{padding:"3px 9px",fontSize:i.typography.pxToRem(13)},"large"===c.size&&"outlined"===c.variant&&{padding:"7px 21px",fontSize:i.typography.pxToRem(15)},"small"===c.size&&"contained"===c.variant&&{padding:"4px 10px",fontSize:i.typography.pxToRem(13)},"large"===c.size&&"contained"===c.variant&&{padding:"8px 22px",fontSize:i.typography.pxToRem(15)},c.fullWidth&&{width:"100%"})}),(function(e){var n;return e.ownerState.disableElevation&&(n={boxShadow:"none","&:hover":{boxShadow:"none"}},(0,o.Z)(n,"&.".concat(x.Z.focusVisible),{boxShadow:"none"}),(0,o.Z)(n,"&:active",{boxShadow:"none"}),(0,o.Z)(n,"&.".concat(x.Z.disabled),{boxShadow:"none"}),n)})),j=(0,u.ZP)("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:function(e,n){var t=e.ownerState;return[n.startIcon,n["iconSize".concat((0,v.Z)(t.size))]]}})((function(e){var n=e.ownerState;return(0,r.Z)({display:"inherit",marginRight:8,marginLeft:-4},"small"===n.size&&{marginLeft:-2},b(n))})),y=(0,u.ZP)("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:function(e,n){var t=e.ownerState;return[n.endIcon,n["iconSize".concat((0,v.Z)(t.size))]]}})((function(e){var n=e.ownerState;return(0,r.Z)({display:"inherit",marginRight:-4,marginLeft:8},"small"===n.size&&{marginRight:-2},b(n))})),w=i.forwardRef((function(e,n){var t=i.useContext(f.Z),o=(0,l.Z)(t,e),d=(0,h.Z)({props:o,name:"MuiButton"}),u=d.children,p=d.color,b=void 0===p?"primary":p,w=d.component,k=void 0===w?"button":w,C=d.className,S=d.disabled,z=void 0!==S&&S,R=d.disableElevation,I=void 0!==R&&R,F=d.disableFocusRipple,B=void 0!==F&&F,O=d.endIcon,P=d.focusVisibleClassName,N=d.fullWidth,L=void 0!==N&&N,E=d.size,M=void 0===E?"medium":E,T=d.startIcon,q=d.type,V=d.variant,W=void 0===V?"text":V,H=(0,a.Z)(d,Z),_=(0,r.Z)({},d,{color:b,component:k,disabled:z,disableElevation:I,disableFocusRipple:B,fullWidth:L,size:M,type:q,variant:W}),A=function(e){var n=e.color,t=e.disableElevation,o=e.fullWidth,a=e.size,i=e.variant,c=e.classes,l={root:["root",i,"".concat(i).concat((0,v.Z)(n)),"size".concat((0,v.Z)(a)),"".concat(i,"Size").concat((0,v.Z)(a)),"inherit"===n&&"colorInherit",t&&"disableElevation",o&&"fullWidth"],label:["label"],startIcon:["startIcon","iconSize".concat((0,v.Z)(a))],endIcon:["endIcon","iconSize".concat((0,v.Z)(a))]},d=(0,s.Z)(l,x.F,c);return(0,r.Z)({},c,d)}(_),D=T&&(0,m.jsx)(j,{className:A.startIcon,ownerState:_,children:T}),G=O&&(0,m.jsx)(y,{className:A.endIcon,ownerState:_,children:O});return(0,m.jsxs)(g,(0,r.Z)({ownerState:_,className:(0,c.Z)(t.className,A.root,C),component:k,disabled:z,focusRipple:!B,focusVisibleClassName:(0,c.Z)(A.focusVisible,P),ref:n,type:q},H,{classes:A,children:[D,u,G]}))}));n.Z=w},91793:function(e,n,t){var o=t(72791).createContext({});n.Z=o},57621:function(e,n,t){t.d(n,{Z:function(){return m}});var o=t(87462),a=t(63366),r=t(72791),i=t(28182),c=t(94419),l=t(66934),s=t(31402),d=t(27938),u=t(75878),h=t(21217);function p(e){return(0,h.Z)("MuiCard",e)}(0,u.Z)("MuiCard",["root"]);var v=t(80184),x=["className","raised"],f=(0,l.ZP)(d.Z,{name:"MuiCard",slot:"Root",overridesResolver:function(e,n){return n.root}})((function(){return{overflow:"hidden"}})),m=r.forwardRef((function(e,n){var t=(0,s.Z)({props:e,name:"MuiCard"}),r=t.className,l=t.raised,d=void 0!==l&&l,u=(0,a.Z)(t,x),h=(0,o.Z)({},t,{raised:d}),m=function(e){var n=e.classes;return(0,c.Z)({root:["root"]},p,n)}(h);return(0,v.jsx)(f,(0,o.Z)({className:(0,i.Z)(m.root,r),elevation:d?8:void 0,ref:n,ownerState:h},u))}))},13034:function(e,n,t){t.d(n,{Z:function(){return C}});var o=t(4942),a=t(63366),r=t(87462),i=t(72791),c=t(28182),l=t(94419),s=t(12065),d=t(97278),u=t(74223),h=t(80184),p=(0,u.Z)((0,h.jsx)("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),v=(0,u.Z)((0,h.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),x=(0,u.Z)((0,h.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),f=t(14036),m=t(31402),Z=t(66934),b=t(64178),g=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size","className"],j=(0,Z.ZP)(d.Z,{shouldForwardProp:function(e){return(0,Z.FO)(e)||"classes"===e},name:"MuiCheckbox",slot:"Root",overridesResolver:function(e,n){var t=e.ownerState;return[n.root,t.indeterminate&&n.indeterminate,"default"!==t.color&&n["color".concat((0,f.Z)(t.color))]]}})((function(e){var n,t=e.theme,a=e.ownerState;return(0,r.Z)({color:(t.vars||t).palette.text.secondary},!a.disableRipple&&{"&:hover":{backgroundColor:t.vars?"rgba(".concat("default"===a.color?t.vars.palette.action.activeChannel:t.vars.palette.primary.mainChannel," / ").concat(t.vars.palette.action.hoverOpacity,")"):(0,s.Fq)("default"===a.color?t.palette.action.active:t.palette[a.color].main,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==a.color&&(n={},(0,o.Z)(n,"&.".concat(b.Z.checked,", &.").concat(b.Z.indeterminate),{color:(t.vars||t).palette[a.color].main}),(0,o.Z)(n,"&.".concat(b.Z.disabled),{color:(t.vars||t).palette.action.disabled}),n))})),y=(0,h.jsx)(v,{}),w=(0,h.jsx)(p,{}),k=(0,h.jsx)(x,{}),C=i.forwardRef((function(e,n){var t,o,s=(0,m.Z)({props:e,name:"MuiCheckbox"}),d=s.checkedIcon,u=void 0===d?y:d,p=s.color,v=void 0===p?"primary":p,x=s.icon,Z=void 0===x?w:x,C=s.indeterminate,S=void 0!==C&&C,z=s.indeterminateIcon,R=void 0===z?k:z,I=s.inputProps,F=s.size,B=void 0===F?"medium":F,O=s.className,P=(0,a.Z)(s,g),N=S?R:Z,L=S?R:u,E=(0,r.Z)({},s,{color:v,indeterminate:S,size:B}),M=function(e){var n=e.classes,t=e.indeterminate,o=e.color,a={root:["root",t&&"indeterminate","color".concat((0,f.Z)(o))]},i=(0,l.Z)(a,b.y,n);return(0,r.Z)({},n,i)}(E);return(0,h.jsx)(j,(0,r.Z)({type:"checkbox",inputProps:(0,r.Z)({"data-indeterminate":S},I),icon:i.cloneElement(N,{fontSize:null!=(t=N.props.fontSize)?t:B}),checkedIcon:i.cloneElement(L,{fontSize:null!=(o=L.props.fontSize)?o:B}),ownerState:E,ref:n,className:(0,c.Z)(M.root,O)},P,{classes:M}))}))},93840:function(e,n,t){var o=t(72791).createContext(void 0);n.Z=o},52930:function(e,n,t){t.d(n,{Z:function(){return r}});var o=t(72791),a=t(93840);function r(){return o.useContext(a.Z)}},97278:function(e,n,t){t.d(n,{Z:function(){return j}});var o=t(29439),a=t(63366),r=t(87462),i=t(72791),c=t(28182),l=t(94419),s=t(14036),d=t(66934),u=t(98278),h=t(52930),p=t(95080),v=t(75878),x=t(21217);function f(e){return(0,x.Z)("PrivateSwitchBase",e)}(0,v.Z)("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);var m=t(80184),Z=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],b=(0,d.ZP)(p.Z)((function(e){var n=e.ownerState;return(0,r.Z)({padding:9,borderRadius:"50%"},"start"===n.edge&&{marginLeft:"small"===n.size?-3:-12},"end"===n.edge&&{marginRight:"small"===n.size?-3:-12})})),g=(0,d.ZP)("input")({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),j=i.forwardRef((function(e,n){var t=e.autoFocus,i=e.checked,d=e.checkedIcon,p=e.className,v=e.defaultChecked,x=e.disabled,j=e.disableFocusRipple,y=void 0!==j&&j,w=e.edge,k=void 0!==w&&w,C=e.icon,S=e.id,z=e.inputProps,R=e.inputRef,I=e.name,F=e.onBlur,B=e.onChange,O=e.onFocus,P=e.readOnly,N=e.required,L=void 0!==N&&N,E=e.tabIndex,M=e.type,T=e.value,q=(0,a.Z)(e,Z),V=(0,u.Z)({controlled:i,default:Boolean(v),name:"SwitchBase",state:"checked"}),W=(0,o.Z)(V,2),H=W[0],_=W[1],A=(0,h.Z)(),D=x;A&&"undefined"===typeof D&&(D=A.disabled);var G="checkbox"===M||"radio"===M,U=(0,r.Z)({},e,{checked:H,disabled:D,disableFocusRipple:y,edge:k}),J=function(e){var n=e.classes,t=e.checked,o=e.disabled,a=e.edge,r={root:["root",t&&"checked",o&&"disabled",a&&"edge".concat((0,s.Z)(a))],input:["input"]};return(0,l.Z)(r,f,n)}(U);return(0,m.jsxs)(b,(0,r.Z)({component:"span",className:(0,c.Z)(J.root,p),centerRipple:!0,focusRipple:!y,disabled:D,tabIndex:null,role:void 0,onFocus:function(e){O&&O(e),A&&A.onFocus&&A.onFocus(e)},onBlur:function(e){F&&F(e),A&&A.onBlur&&A.onBlur(e)},ownerState:U,ref:n},q,{children:[(0,m.jsx)(g,(0,r.Z)({autoFocus:t,checked:i,defaultChecked:v,className:J.input,disabled:D,id:G?S:void 0,name:I,onChange:function(e){if(!e.nativeEvent.defaultPrevented){var n=e.target.checked;_(n),B&&B(e,n)}},readOnly:P,ref:R,required:L,ownerState:U,tabIndex:E,type:M},"checkbox"===M&&void 0===T?{}:{value:T},z)),H?d:C]}))}))}}]);
//# sourceMappingURL=7343.05843f35.chunk.js.map