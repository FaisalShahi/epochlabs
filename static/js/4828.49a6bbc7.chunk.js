/*! For license information please see 4828.49a6bbc7.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunk_epochlabs=self.webpackChunk_epochlabs||[]).push([[4828],{50933:function(e,t,o){o.d(t,{Z:function(){return m}});var n=o(1413),r=o(45987),a=o(64554),i=o(50533),c=o(36314),s=o(4567),l=o(93517),d=o(83854),u=o(80184);function h(e){var t=e.link,o=e.activeLast,r=e.disabled,c=t.name,s=t.href,l=t.icon,h=(0,n.Z)({typography:"body2",alignItems:"center",color:"text.primary",display:"inline-flex"},r&&!o&&{cursor:"default",pointerEvents:"none",color:"text.disabled"}),p=(0,u.jsxs)(u.Fragment,{children:[l&&(0,u.jsx)(a.Z,{component:"span",sx:{mr:1,display:"inherit","& svg":{width:20,height:20}},children:l}),c]});return s?(0,u.jsx)(i.Z,{component:d.r,href:s,sx:h,children:p}):(0,u.jsxs)(a.Z,{sx:h,children:[" ",p," "]})}var p=["links","action","heading","moreLink","activeLast","sx"];function m(e){var t=e.links,o=e.action,d=e.heading,m=e.moreLink,v=e.activeLast,Z=e.sx,g=(0,r.Z)(e,p),x=t[t.length-1].name;return(0,u.jsxs)(a.Z,{sx:(0,n.Z)({},Z),children:[(0,u.jsxs)(c.Z,{direction:"row",alignItems:"center",children:[(0,u.jsxs)(a.Z,{sx:{flexGrow:1},children:[d&&(0,u.jsx)(s.Z,{variant:"h4",gutterBottom:!0,children:d}),!!t.length&&(0,u.jsx)(l.Z,(0,n.Z)((0,n.Z)({separator:(0,u.jsx)(f,{})},g),{},{children:t.map((function(e){return(0,u.jsx)(h,{link:e,activeLast:v,disabled:e.name===x},e.name||"")}))}))]}),o&&(0,u.jsxs)(a.Z,{sx:{flexShrink:0},children:[" ",o," "]})]}),!!m&&(0,u.jsx)(a.Z,{sx:{mt:2},children:m.map((function(e){return(0,u.jsx)(i.Z,{href:e,variant:"body2",target:"_blank",rel:"noopener",sx:{display:"table"},children:e},e)}))})]})}function f(){return(0,u.jsx)(a.Z,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})}},74828:function(e,t,o){o.r(t),o.d(t,{default:function(){return H}});var n=o(6907),r=o(4942),a=o(1413),i=o(29439),c=o(18111),s=o.n(c),l=o(72791),d=o(12065),u=o(64554),h=o(1503),p=o(27938),m=o(36314),f=o(27029),v=o(25256),Z=o(89891),g=o(34663),x=o(17133),b=o(89164),y=o(48550),j=o(13400),S=o(4567),w=o(88970),C=o(25801),k=o(38072),R=o(44e3),z=o(80160),P=o(839),M=o(50933),N=o(80184),I={itemGap:4,iconSize:24,currentRole:"admin",itemRootHeight:44,itemSubHeight:36,itemPadding:"4px 8px 4px 12px",itemRadius:8,hiddenLabel:!1};function B(){var e=(0,l.useState)(I),t=(0,i.Z)(e,2),o=t[0],n=t[1],c=!s()(I,o),h=(0,l.useCallback)((function(e,t){n((function(o){return(0,a.Z)((0,a.Z)({},o),{},(0,r.Z)({},e,t))}))}),[]),p=(0,l.useCallback)((function(){n(I)}),[]),f=(0,N.jsxs)(m.Z,{spacing:2,children:[(0,N.jsx)(S.Z,{variant:"h6",children:" Nav Vertical "}),(0,N.jsx)(P.Mr,{data:$,config:o,sx:{py:2,borderRadius:2,bgcolor:"background.paper",boxShadow:function(e){return e.customShadows.z20}}})]}),Z=(0,N.jsxs)(m.Z,{spacing:2,children:[(0,N.jsx)(S.Z,{variant:"h6",children:" Nav Mini "}),(0,N.jsx)(P.Hg,{data:$,config:o,sx:{py:2,borderRadius:2,bgcolor:"background.paper",boxShadow:function(e){return e.customShadows.z20}}})]}),x=(0,N.jsxs)(m.Z,{spacing:2,children:[(0,N.jsx)(S.Z,{variant:"h6",children:" Nav Horizontal "}),(0,N.jsx)(v.Z,{position:"static",component:"nav",sx:{borderRadius:2,boxShadow:function(e){return e.customShadows.z20}},children:(0,N.jsx)(g.Z,{children:(0,N.jsx)(P.EM,{data:$,config:o})})})]});return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(u.Z,{sx:{py:5,bgcolor:function(e){return"light"===e.palette.mode?"grey.200":"grey.800"}},children:(0,N.jsx)(b.Z,{children:(0,N.jsx)(M.Z,{heading:"Navigation Bar",links:[{name:"Components",href:k.H.components},{name:"Navigation Bar"}]})})}),(0,N.jsxs)(b.Z,{sx:{my:10},children:[x,(0,N.jsxs)(m.Z,{direction:"row",justifyContent:"space-between",sx:{p:5,mt:5,borderRadius:2,bgcolor:function(e){return(0,d.Fq)(e.palette.grey[500],.04)}},children:[f,Z,(0,N.jsx)(L,{config:o,onChangeConfig:h,canReset:c,onReset:p})]})]})]})}function L(e){var t=e.config,o=e.onChangeConfig,n=e.canReset,r=e.onReset;return(0,N.jsxs)(m.Z,{component:p.Z,variant:"outlined",spacing:3,sx:{p:3,borderRadius:2},children:[(0,N.jsxs)(m.Z,{direction:"row",alignItems:"center",justifyContent:"space-between",children:[(0,N.jsx)(S.Z,{variant:"h6",children:"Controls"}),n&&(0,N.jsx)(j.Z,{onClick:r,children:(0,N.jsx)(f.Z,{color:"error",variant:"dot",invisible:!n,children:(0,N.jsx)(R.Z,{icon:"solar:restart-bold"})})})]}),(0,N.jsx)(y.Z,{label:"Item Gap",type:"number",value:t.itemGap||"",onChange:function(e){return o("itemGap",Number(e.target.value))}}),(0,N.jsx)(y.Z,{select:!0,label:"Icon Size",value:t.iconSize,onChange:function(e){return o("iconSize",Number(e.target.value))},SelectProps:{native:!0},children:[16,20,24,28,32,36,40].map((function(e){return(0,N.jsx)("option",{value:e,children:e},e)}))}),(0,N.jsx)(y.Z,{select:!0,label:"Item Radius",value:t.itemRadius,onChange:function(e){return o("itemRadius",Number(e.target.value)||.5)},SelectProps:{native:!0},children:[0,4,8,12,16,20,24].map((function(e){return(0,N.jsx)("option",{value:e,children:e},e)}))}),(0,N.jsxs)(w.Z,{value:t.currentRole,onChange:function(e){return o("currentRole",e.target.value)},children:[(0,N.jsx)(x.Z,{children:"Role"}),["admin","user"].map((function(e){return(0,N.jsx)(C.Z,{value:e,control:(0,N.jsx)(h.Z,{}),label:e,sx:{textTransform:"capitalize"}},e)}))]}),(0,N.jsx)(y.Z,{label:"Root Height",type:"number",value:t.itemRootHeight||"",onChange:function(e){return o("itemRootHeight",Number(e.target.value))}}),(0,N.jsx)(y.Z,{label:"Sub Height",type:"number",value:t.itemSubHeight||"",onChange:function(e){return o("itemSubHeight",Number(e.target.value))}}),(0,N.jsx)(y.Z,{label:"Item Padding",value:t.itemPadding||"",onChange:function(e){return o("itemPadding",e.target.value)}}),(0,N.jsx)(C.Z,{control:(0,N.jsx)(Z.Z,{checked:t.hiddenLabel,onClick:function(){return o("hiddenLabel",!t.hiddenLabel)}}),label:"Hidden Label"})]})}var $=[{subheader:"Marketing",items:[{title:"Landing",path:"#",icon:(0,N.jsx)(R.Z,{icon:"carbon:bat",width:1}),roles:["admin"],caption:"Display only admin role"},{title:"Services",path:"#",icon:(0,N.jsx)(R.Z,{icon:"carbon:cyclist",width:1}),roles:["admin","user"]},{title:"Case Studies",path:"#",icon:(0,N.jsx)(R.Z,{icon:"carbon:3d-cursor-alt",width:1}),info:(0,N.jsx)(z.Z,{color:"error",children:"+32"}),children:[{title:"Case Studies",path:"#"},{title:"Case Study",path:"#"}]},{title:"Blog",path:"#",icon:(0,N.jsx)(R.Z,{icon:"carbon:3d-mpr-toggle",width:1}),children:[{title:"Blog Posts",path:"#"},{title:"Blog Post",path:"#"}]},{title:"About",path:"#",icon:(0,N.jsx)(R.Z,{icon:"carbon:airport-01",width:1})},{title:"Contact",path:"#",icon:(0,N.jsx)(R.Z,{icon:"carbon:battery-full",width:1})},{title:"Tours",path:"#",icon:(0,N.jsx)(R.Z,{icon:"carbon:basketball",width:1}),children:[{title:"Tours",path:"#"},{title:"Tour",path:"#"}]},{title:"Checkout",path:"#",icon:(0,N.jsx)(R.Z,{icon:"carbon:area",width:1}),children:[{title:"Checkout",path:"#"},{title:"Checkout Complete",path:"#"}]}]},{subheader:"Travel",items:[{title:"Level 1",path:"#",icon:(0,N.jsx)(R.Z,{icon:"carbon:play",width:1}),children:[{title:"Level 2.1",path:"#"},{title:"Level 2.2",path:"#"},{title:"Level 2.3",path:"#",children:[{title:"Level 3.1",path:"#"},{title:"Level 3.2",path:"#"}]}]}]}];function H(){return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(n.ql,{children:(0,N.jsx)("title",{children:" Extra: Navigation Bar"})}),(0,N.jsx)(B,{})]})}},93517:function(e,t,o){o.d(t,{Z:function(){return B}});var n=o(93433),r=o(29439),a=o(4942),i=o(87462),c=o(63366),s=o(72791),l=(o(57441),o(28182)),d=o(94419),u=o(57271),h=o(66934),p=o(31402),m=o(4567),f=o(12065),v=o(74223),Z=o(80184),g=(0,v.Z)((0,Z.jsx)("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),x=o(95080),b=["slots","slotProps"],y=(0,h.ZP)(x.Z)((function(e){var t=e.theme;return(0,i.Z)({display:"flex",marginLeft:"calc(".concat(t.spacing(1)," * 0.5)"),marginRight:"calc(".concat(t.spacing(1)," * 0.5)")},"light"===t.palette.mode?{backgroundColor:t.palette.grey[100],color:t.palette.grey[700]}:{backgroundColor:t.palette.grey[700],color:t.palette.grey[100]},{borderRadius:2,"&:hover, &:focus":(0,i.Z)({},"light"===t.palette.mode?{backgroundColor:t.palette.grey[200]}:{backgroundColor:t.palette.grey[600]}),"&:active":(0,i.Z)({boxShadow:t.shadows[0]},"light"===t.palette.mode?{backgroundColor:(0,f._4)(t.palette.grey[200],.12)}:{backgroundColor:(0,f._4)(t.palette.grey[600],.12)})})})),j=(0,h.ZP)(g)({width:24,height:16});var S=function(e){var t=e.slots,o=void 0===t?{}:t,n=e.slotProps,r=void 0===n?{}:n,a=(0,c.Z)(e,b),s=e;return(0,Z.jsx)("li",{children:(0,Z.jsx)(y,(0,i.Z)({focusRipple:!0},a,{ownerState:s,children:(0,Z.jsx)(j,(0,i.Z)({as:o.CollapsedIcon,ownerState:s},r.collapsedIcon))}))})},w=o(75878),C=o(21217);function k(e){return(0,C.Z)("MuiBreadcrumbs",e)}var R=(0,w.Z)("MuiBreadcrumbs",["root","ol","li","separator"]),z=["children","className","component","slots","slotProps","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"],P=(0,h.ZP)(m.Z,{name:"MuiBreadcrumbs",slot:"Root",overridesResolver:function(e,t){return[(0,a.Z)({},"& .".concat(R.li),t.li),t.root]}})({}),M=(0,h.ZP)("ol",{name:"MuiBreadcrumbs",slot:"Ol",overridesResolver:function(e,t){return t.ol}})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"}),N=(0,h.ZP)("li",{name:"MuiBreadcrumbs",slot:"Separator",overridesResolver:function(e,t){return t.separator}})({display:"flex",userSelect:"none",marginLeft:8,marginRight:8});function I(e,t,o,n){return e.reduce((function(r,a,i){return i<e.length-1?r=r.concat(a,(0,Z.jsx)(N,{"aria-hidden":!0,className:t,ownerState:n,children:o},"separator-".concat(i))):r.push(a),r}),[])}var B=s.forwardRef((function(e,t){var o=(0,p.Z)({props:e,name:"MuiBreadcrumbs"}),a=o.children,h=o.className,m=o.component,f=void 0===m?"nav":m,v=o.slots,g=void 0===v?{}:v,x=o.slotProps,b=void 0===x?{}:x,y=o.expandText,j=void 0===y?"Show path":y,w=o.itemsAfterCollapse,C=void 0===w?1:w,R=o.itemsBeforeCollapse,N=void 0===R?1:R,B=o.maxItems,L=void 0===B?8:B,$=o.separator,H=void 0===$?"/":$,T=(0,c.Z)(o,z),F=s.useState(!1),O=(0,r.Z)(F,2),_=O[0],E=O[1],q=(0,i.Z)({},o,{component:f,expanded:_,expandText:j,itemsAfterCollapse:C,itemsBeforeCollapse:N,maxItems:L,separator:H}),A=function(e){var t=e.classes;return(0,d.Z)({root:["root"],li:["li"],ol:["ol"],separator:["separator"]},k,t)}(q),G=(0,u.Z)({elementType:g.CollapsedIcon,externalSlotProps:b.collapsedIcon,ownerState:q}),V=s.useRef(null),D=s.Children.toArray(a).filter((function(e){return s.isValidElement(e)})).map((function(e,t){return(0,Z.jsx)("li",{className:A.li,children:e},"child-".concat(t))}));return(0,Z.jsx)(P,(0,i.Z)({ref:t,component:f,color:"text.secondary",className:(0,l.Z)(A.root,h),ownerState:q},T,{children:(0,Z.jsx)(M,{className:A.ol,ref:V,ownerState:q,children:I(_||L&&D.length<=L?D:function(e){return N+C>=e.length?e:[].concat((0,n.Z)(e.slice(0,N)),[(0,Z.jsx)(S,{"aria-label":j,slots:{CollapsedIcon:g.CollapsedIcon},slotProps:{collapsedIcon:G},onClick:function(){E(!0);var e=V.current.querySelector("a[href],button,[tabindex]");e&&e.focus()}},"ellipsis")],(0,n.Z)(e.slice(e.length-C,e.length)))}(D),A.separator,H,q)})}))}))},1503:function(e,t,o){o.d(t,{Z:function(){return I}});var n=o(4942),r=o(63366),a=o(87462),i=o(72791),c=o(28182),s=o(94419),l=o(12065),d=o(97278),u=o(31402),h=o(74223),p=o(80184),m=(0,h.Z)((0,p.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"RadioButtonUnchecked"),f=(0,h.Z)((0,p.jsx)("path",{d:"M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"}),"RadioButtonChecked"),v=o(66934),Z=(0,v.ZP)("span")({position:"relative",display:"flex"}),g=(0,v.ZP)(m)({transform:"scale(1)"}),x=(0,v.ZP)(f)((function(e){var t=e.theme,o=e.ownerState;return(0,a.Z)({left:0,position:"absolute",transform:"scale(0)",transition:t.transitions.create("transform",{easing:t.transitions.easing.easeIn,duration:t.transitions.duration.shortest})},o.checked&&{transform:"scale(1)",transition:t.transitions.create("transform",{easing:t.transitions.easing.easeOut,duration:t.transitions.duration.shortest})})}));var b=function(e){var t=e.checked,o=void 0!==t&&t,n=e.classes,r=void 0===n?{}:n,i=e.fontSize,c=(0,a.Z)({},e,{checked:o});return(0,p.jsxs)(Z,{className:r.root,ownerState:c,children:[(0,p.jsx)(g,{fontSize:i,className:r.background,ownerState:c}),(0,p.jsx)(x,{fontSize:i,className:r.dot,ownerState:c})]})},y=o(14036),j=o(78949).Z,S=o(18672);var w=o(75878),C=o(21217);function k(e){return(0,C.Z)("MuiRadio",e)}var R=(0,w.Z)("MuiRadio",["root","checked","disabled","colorPrimary","colorSecondary"]),z=["checked","checkedIcon","color","icon","name","onChange","size","className"],P=(0,v.ZP)(d.Z,{shouldForwardProp:function(e){return(0,v.FO)(e)||"classes"===e},name:"MuiRadio",slot:"Root",overridesResolver:function(e,t){var o=e.ownerState;return[t.root,t["color".concat((0,y.Z)(o.color))]]}})((function(e){var t=e.theme,o=e.ownerState;return(0,a.Z)({color:(t.vars||t).palette.text.secondary},!o.disableRipple&&{"&:hover":{backgroundColor:t.vars?"rgba(".concat("default"===o.color?t.vars.palette.action.activeChannel:t.vars.palette[o.color].mainChannel," / ").concat(t.vars.palette.action.hoverOpacity,")"):(0,l.Fq)("default"===o.color?t.palette.action.active:t.palette[o.color].main,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==o.color&&(0,n.Z)({},"&.".concat(R.checked),{color:(t.vars||t).palette[o.color].main}),(0,n.Z)({},"&.".concat(R.disabled),{color:(t.vars||t).palette.action.disabled}))}));var M=(0,p.jsx)(b,{checked:!0}),N=(0,p.jsx)(b,{}),I=i.forwardRef((function(e,t){var o,n,l,d,h=(0,u.Z)({props:e,name:"MuiRadio"}),m=h.checked,f=h.checkedIcon,v=void 0===f?M:f,Z=h.color,g=void 0===Z?"primary":Z,x=h.icon,b=void 0===x?N:x,w=h.name,C=h.onChange,R=h.size,I=void 0===R?"medium":R,B=h.className,L=(0,r.Z)(h,z),$=(0,a.Z)({},h,{color:g,size:I}),H=function(e){var t=e.classes,o=e.color,n={root:["root","color".concat((0,y.Z)(o))]};return(0,a.Z)({},t,(0,s.Z)(n,k,t))}($),T=i.useContext(S.Z),F=m,O=j(C,T&&T.onChange),_=w;return T&&("undefined"===typeof F&&(l=T.value,F="object"===typeof(d=h.value)&&null!==d?l===d:String(l)===String(d)),"undefined"===typeof _&&(_=T.name)),(0,p.jsx)(P,(0,a.Z)({type:"radio",icon:i.cloneElement(b,{fontSize:null!=(o=N.props.fontSize)?o:I}),checkedIcon:i.cloneElement(v,{fontSize:null!=(n=M.props.fontSize)?n:I}),ownerState:$,classes:H,name:_,checked:F,onChange:O,ref:t,className:(0,c.Z)(H.root,B)},L))}))},88970:function(e,t,o){var n=o(29439),r=o(87462),a=o(63366),i=o(72791),c=o(79012),s=o(42071),l=o(98278),d=o(18672),u=o(67384),h=o(80184),p=["actions","children","defaultValue","name","onChange","value"],m=i.forwardRef((function(e,t){var o=e.actions,m=e.children,f=e.defaultValue,v=e.name,Z=e.onChange,g=e.value,x=(0,a.Z)(e,p),b=i.useRef(null),y=(0,l.Z)({controlled:g,default:f,name:"RadioGroup"}),j=(0,n.Z)(y,2),S=j[0],w=j[1];i.useImperativeHandle(o,(function(){return{focus:function(){var e=b.current.querySelector("input:not(:disabled):checked");e||(e=b.current.querySelector("input:not(:disabled)")),e&&e.focus()}}}),[]);var C=(0,s.Z)(t,b),k=(0,u.Z)(v),R=i.useMemo((function(){return{name:k,onChange:function(e){w(e.target.value),Z&&Z(e,e.target.value)},value:S}}),[k,Z,w,S]);return(0,h.jsx)(d.Z.Provider,{value:R,children:(0,h.jsx)(c.Z,(0,r.Z)({role:"radiogroup",ref:C},x,{children:m}))})}));t.Z=m},18672:function(e,t,o){var n=o(72791).createContext(void 0);t.Z=n},89891:function(e,t,o){var n=o(4942),r=o(63366),a=o(87462),i=o(72791),c=o(28182),s=o(94419),l=o(12065),d=o(14036),u=o(97278),h=o(31402),p=o(66934),m=o(93785),f=o(80184),v=["className","color","edge","size","sx"],Z=(0,p.ZP)("span",{name:"MuiSwitch",slot:"Root",overridesResolver:function(e,t){var o=e.ownerState;return[t.root,o.edge&&t["edge".concat((0,d.Z)(o.edge))],t["size".concat((0,d.Z)(o.size))]]}})((function(e){var t,o=e.ownerState;return(0,a.Z)({display:"inline-flex",width:58,height:38,overflow:"hidden",padding:12,boxSizing:"border-box",position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle","@media print":{colorAdjust:"exact"}},"start"===o.edge&&{marginLeft:-8},"end"===o.edge&&{marginRight:-8},"small"===o.size&&(t={width:40,height:24,padding:7},(0,n.Z)(t,"& .".concat(m.Z.thumb),{width:16,height:16}),(0,n.Z)(t,"& .".concat(m.Z.switchBase),(0,n.Z)({padding:4},"&.".concat(m.Z.checked),{transform:"translateX(16px)"})),t))})),g=(0,p.ZP)(u.Z,{name:"MuiSwitch",slot:"SwitchBase",overridesResolver:function(e,t){var o=e.ownerState;return[t.switchBase,(0,n.Z)({},"& .".concat(m.Z.input),t.input),"default"!==o.color&&t["color".concat((0,d.Z)(o.color))]]}})((function(e){var t,o=e.theme;return t={position:"absolute",top:0,left:0,zIndex:1,color:o.vars?o.vars.palette.Switch.defaultColor:"".concat("light"===o.palette.mode?o.palette.common.white:o.palette.grey[300]),transition:o.transitions.create(["left","transform"],{duration:o.transitions.duration.shortest})},(0,n.Z)(t,"&.".concat(m.Z.checked),{transform:"translateX(20px)"}),(0,n.Z)(t,"&.".concat(m.Z.disabled),{color:o.vars?o.vars.palette.Switch.defaultDisabledColor:"".concat("light"===o.palette.mode?o.palette.grey[100]:o.palette.grey[600])}),(0,n.Z)(t,"&.".concat(m.Z.checked," + .").concat(m.Z.track),{opacity:.5}),(0,n.Z)(t,"&.".concat(m.Z.disabled," + .").concat(m.Z.track),{opacity:o.vars?o.vars.opacity.switchTrackDisabled:"".concat("light"===o.palette.mode?.12:.2)}),(0,n.Z)(t,"& .".concat(m.Z.input),{left:"-100%",width:"300%"}),t}),(function(e){var t,o=e.theme,r=e.ownerState;return(0,a.Z)({"&:hover":{backgroundColor:o.vars?"rgba(".concat(o.vars.palette.action.activeChannel," / ").concat(o.vars.palette.action.hoverOpacity,")"):(0,l.Fq)(o.palette.action.active,o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==r.color&&(t={},(0,n.Z)(t,"&.".concat(m.Z.checked),(0,n.Z)({color:(o.vars||o).palette[r.color].main,"&:hover":{backgroundColor:o.vars?"rgba(".concat(o.vars.palette[r.color].mainChannel," / ").concat(o.vars.palette.action.hoverOpacity,")"):(0,l.Fq)(o.palette[r.color].main,o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&.".concat(m.Z.disabled),{color:o.vars?o.vars.palette.Switch["".concat(r.color,"DisabledColor")]:"".concat("light"===o.palette.mode?(0,l.$n)(o.palette[r.color].main,.62):(0,l._j)(o.palette[r.color].main,.55))})),(0,n.Z)(t,"&.".concat(m.Z.checked," + .").concat(m.Z.track),{backgroundColor:(o.vars||o).palette[r.color].main}),t))})),x=(0,p.ZP)("span",{name:"MuiSwitch",slot:"Track",overridesResolver:function(e,t){return t.track}})((function(e){var t=e.theme;return{height:"100%",width:"100%",borderRadius:7,zIndex:-1,transition:t.transitions.create(["opacity","background-color"],{duration:t.transitions.duration.shortest}),backgroundColor:t.vars?t.vars.palette.common.onBackground:"".concat("light"===t.palette.mode?t.palette.common.black:t.palette.common.white),opacity:t.vars?t.vars.opacity.switchTrack:"".concat("light"===t.palette.mode?.38:.3)}})),b=(0,p.ZP)("span",{name:"MuiSwitch",slot:"Thumb",overridesResolver:function(e,t){return t.thumb}})((function(e){var t=e.theme;return{boxShadow:(t.vars||t).shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"}})),y=i.forwardRef((function(e,t){var o=(0,h.Z)({props:e,name:"MuiSwitch"}),n=o.className,i=o.color,l=void 0===i?"primary":i,u=o.edge,p=void 0!==u&&u,y=o.size,j=void 0===y?"medium":y,S=o.sx,w=(0,r.Z)(o,v),C=(0,a.Z)({},o,{color:l,edge:p,size:j}),k=function(e){var t=e.classes,o=e.edge,n=e.size,r=e.color,i=e.checked,c=e.disabled,l={root:["root",o&&"edge".concat((0,d.Z)(o)),"size".concat((0,d.Z)(n))],switchBase:["switchBase","color".concat((0,d.Z)(r)),i&&"checked",c&&"disabled"],thumb:["thumb"],track:["track"],input:["input"]},u=(0,s.Z)(l,m.H,t);return(0,a.Z)({},t,u)}(C),R=(0,f.jsx)(b,{className:k.thumb,ownerState:C});return(0,f.jsxs)(Z,{className:(0,c.Z)(k.root,n),sx:S,ownerState:C,children:[(0,f.jsx)(g,(0,a.Z)({type:"checkbox",icon:R,checkedIcon:R,ref:t,ownerState:C},w,{classes:(0,a.Z)({},k,{root:k.switchBase})})),(0,f.jsx)(x,{className:k.track,ownerState:C})]})}));t.Z=y},74223:function(e,t,o){o.d(t,{Z:function(){return c}});var n=o(87462),r=o(72791),a=o(40558),i=o(80184);function c(e,t){function o(o,r){return(0,i.jsx)(a.Z,(0,n.Z)({"data-testid":"".concat(t,"Icon"),ref:r},o,{children:e}))}return o.muiName=a.Z.muiName,r.memo(r.forwardRef(o))}},11372:function(e,t){var o,n=Symbol.for("react.element"),r=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),l=Symbol.for("react.context"),d=Symbol.for("react.server_context"),u=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),p=Symbol.for("react.suspense_list"),m=Symbol.for("react.memo"),f=Symbol.for("react.lazy"),v=Symbol.for("react.offscreen");function Z(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:switch(e=e.type){case a:case c:case i:case h:case p:return e;default:switch(e=e&&e.$$typeof){case d:case l:case u:case f:case m:case s:return e;default:return t}}case r:return t}}}o=Symbol.for("react.module.reference"),t.ContextConsumer=l,t.ContextProvider=s,t.Element=n,t.ForwardRef=u,t.Fragment=a,t.Lazy=f,t.Memo=m,t.Portal=r,t.Profiler=c,t.StrictMode=i,t.Suspense=h,t.SuspenseList=p,t.isAsyncMode=function(){return!1},t.isConcurrentMode=function(){return!1},t.isContextConsumer=function(e){return Z(e)===l},t.isContextProvider=function(e){return Z(e)===s},t.isElement=function(e){return"object"===typeof e&&null!==e&&e.$$typeof===n},t.isForwardRef=function(e){return Z(e)===u},t.isFragment=function(e){return Z(e)===a},t.isLazy=function(e){return Z(e)===f},t.isMemo=function(e){return Z(e)===m},t.isPortal=function(e){return Z(e)===r},t.isProfiler=function(e){return Z(e)===c},t.isStrictMode=function(e){return Z(e)===i},t.isSuspense=function(e){return Z(e)===h},t.isSuspenseList=function(e){return Z(e)===p},t.isValidElementType=function(e){return"string"===typeof e||"function"===typeof e||e===a||e===c||e===i||e===h||e===p||e===v||"object"===typeof e&&null!==e&&(e.$$typeof===f||e.$$typeof===m||e.$$typeof===s||e.$$typeof===l||e.$$typeof===u||e.$$typeof===o||void 0!==e.getModuleId)},t.typeOf=Z},57441:function(e,t,o){e.exports=o(11372)}}]);
//# sourceMappingURL=4828.49a6bbc7.chunk.js.map