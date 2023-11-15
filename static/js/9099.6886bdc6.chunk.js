"use strict";(self.webpackChunk_epochlabs=self.webpackChunk_epochlabs||[]).push([[9099],{50933:function(e,n,t){t.d(n,{Z:function(){return x}});var o=t(1413),i=t(45987),s=t(64554),r=t(50533),a=t(36314),l=t(4567),c=t(93517),u=t(83854),d=t(80184);function h(e){var n=e.link,t=e.activeLast,i=e.disabled,a=n.name,l=n.href,c=n.icon,h=(0,o.Z)({typography:"body2",alignItems:"center",color:"text.primary",display:"inline-flex"},i&&!t&&{cursor:"default",pointerEvents:"none",color:"text.disabled"}),p=(0,d.jsxs)(d.Fragment,{children:[c&&(0,d.jsx)(s.Z,{component:"span",sx:{mr:1,display:"inherit","& svg":{width:20,height:20}},children:c}),a]});return l?(0,d.jsx)(r.Z,{component:u.r,href:l,sx:h,children:p}):(0,d.jsxs)(s.Z,{sx:h,children:[" ",p," "]})}var p=["links","action","heading","moreLink","activeLast","sx"];function x(e){var n=e.links,t=e.action,u=e.heading,x=e.moreLink,m=e.activeLast,Z=e.sx,j=(0,i.Z)(e,p),g=n[n.length-1].name;return(0,d.jsxs)(s.Z,{sx:(0,o.Z)({},Z),children:[(0,d.jsxs)(a.Z,{direction:"row",alignItems:"center",children:[(0,d.jsxs)(s.Z,{sx:{flexGrow:1},children:[u&&(0,d.jsx)(l.Z,{variant:"h4",gutterBottom:!0,children:u}),!!n.length&&(0,d.jsx)(c.Z,(0,o.Z)((0,o.Z)({separator:(0,d.jsx)(f,{})},j),{},{children:n.map((function(e){return(0,d.jsx)(h,{link:e,activeLast:m,disabled:e.name===g},e.name||"")}))}))]}),t&&(0,d.jsxs)(s.Z,{sx:{flexShrink:0},children:[" ",t," "]})]}),!!x&&(0,d.jsx)(s.Z,{sx:{mt:2},children:x.map((function(e){return(0,d.jsx)(r.Z,{href:e,variant:"body2",target:"_blank",rel:"noopener",sx:{display:"table"},children:e},e)}))})]})}function f(){return(0,d.jsx)(s.Z,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})}},29099:function(e,n,t){t.r(n),t.d(n,{default:function(){return ge}});var o=t(6907),i=t(29439),s=t(72791),r=t(61474),a=t(64554),l=t(2101),c=t(89164),u=t(38072),d=t(50933),h=t(57621),p=t(24308),x=t(22459),f=t(1413),m=t(45987),Z=t(27938),j=t(89891),g=t(13400),v=t(25801),b=t(44e3),I=t(80184),y=["isText","isMulti","onChangeText","onChangeMulti","onRefresh"];function w(e){var n=e.isText,t=e.isMulti,o=e.onChangeText,i=e.onChangeMulti,s=e.onRefresh,r=(0,m.Z)(e,y);return(0,I.jsxs)(Z.Z,(0,f.Z)((0,f.Z)({sx:{display:"flex",alignItems:"center",justifyContent:"space-between"}},r),{},{children:[(0,I.jsx)(v.Z,{control:(0,I.jsx)(j.Z,{checked:n,onChange:o}),label:"Text Object"}),(0,I.jsx)(a.Z,{sx:{flexGrow:1}}),!n&&(0,I.jsx)(v.Z,{control:(0,I.jsx)(j.Z,{checked:t,onChange:i}),label:"Multi Item"}),(0,I.jsx)(g.Z,{onClick:s,children:(0,I.jsx)(b.Z,{icon:"eva:refresh-fill"})})]}))}var U=t(1503),R=t(88970),k=t(4567),L=t(47974);function C(e){var n=e.variantKey,t=e.selectVariant,o=e.onChangeVariant,i=e.sx;return(0,I.jsx)(Z.Z,{variant:"outlined",sx:(0,f.Z)({height:480},i),children:(0,I.jsx)(L.Z,{children:(0,I.jsx)(R.Z,{value:t,onChange:o,sx:{px:1,py:1},children:n.map((function(e){return(0,I.jsxs)(a.Z,{sx:{my:1.5},children:[(0,I.jsx)(k.Z,{variant:"overline",sx:{px:1,mb:1,display:"block"},children:e.type}),e.values.map((function(e){return(0,I.jsx)(v.Z,{value:e,label:e,control:(0,I.jsx)(U.Z,{sx:{display:"none"}}),sx:(0,f.Z)((0,f.Z)({px:1,py:.5,mx:0,my:.25,width:"100%",borderRadius:.75,color:"text.secondary"},t===e&&{color:"warning.contrastText"}),t===e&&{bgcolor:"warning.main"})},e)}))]},e.type)}))})})})}var O=t(45358),z=t(39263),D=t(82486);function T(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"slideInUp";return{slideInUp:(0,D.pH)().inUp,slideInDown:(0,D.pH)().inDown,slideInLeft:(0,D.pH)().inLeft,slideInRight:(0,D.pH)().inRight,slideOutUp:(0,D.pH)().outUp,slideOutDown:(0,D.pH)().outDown,slideOutLeft:(0,D.pH)().outLeft,slideOutRight:(0,D.pH)().outRight,fadeIn:(0,D.EU)().in,fadeInUp:(0,D.EU)().inUp,fadeInDown:(0,D.EU)().inDown,fadeInLeft:(0,D.EU)().inLeft,fadeInRight:(0,D.EU)().inRight,fadeOut:(0,D.EU)().out,fadeOutUp:(0,D.EU)().outUp,fadeOutDown:(0,D.EU)().outDown,fadeOutLeft:(0,D.EU)().outLeft,fadeOutRight:(0,D.EU)().outRight,zoomIn:(0,D.BL)({distance:80}).in,zoomInUp:(0,D.BL)({distance:80}).inUp,zoomInDown:(0,D.BL)({distance:80}).inDown,zoomInLeft:(0,D.BL)({distance:240}).inLeft,zoomInRight:(0,D.BL)({distance:240}).inRight,zoomOut:(0,D.BL)().out,zoomOutLeft:(0,D.BL)().outLeft,zoomOutRight:(0,D.BL)().outRight,zoomOutUp:(0,D.BL)().outUp,zoomOutDown:(0,D.BL)().outDown,bounceIn:(0,D.Wp)().in,bounceInUp:(0,D.Wp)().inUp,bounceInDown:(0,D.Wp)().inDown,bounceInLeft:(0,D.Wp)().inLeft,bounceInRight:(0,D.Wp)().inRight,bounceOut:(0,D.Wp)().out,bounceOutUp:(0,D.Wp)().outUp,bounceOutDown:(0,D.Wp)().outDown,bounceOutLeft:(0,D.Wp)().outLeft,bounceOutRight:(0,D.Wp)().outRight,flipInX:(0,D.HN)().inX,flipInY:(0,D.HN)().inY,flipOutX:(0,D.HN)().outX,flipOutY:(0,D.HN)().outY,scaleInX:(0,D.Jt)().inX,scaleInY:(0,D.Jt)().inY,scaleOutX:(0,D.Jt)().outX,scaleOutY:(0,D.Jt)().outY,rotateIn:(0,D.j$)().in,rotateOut:(0,D.j$)().out,kenburnsTop:(0,D.Q4)().top,kenburnsBottom:(0,D.Q4)().bottom,kenburnsLeft:(0,D.Q4)().left,kenburnsRight:(0,D.Q4)().right,panTop:(0,D.UZ)().top,panBottom:(0,D.UZ)().bottom,panLeft:(0,D.UZ)().left,panRight:(0,D.UZ)().right,color2x:(0,D.R0)(),color3x:(0,D.R0)({colors:["#19dcea","#b22cff","#ea2222"]}),color4x:(0,D.R0)({colors:["#19dcea","#b22cff","#ea2222","#f5be10"]}),color5x:(0,D.R0)({colors:["#19dcea","#b22cff","#ea2222","#f5be10","#3bd80d"]})}[e]}var V=["isText","isMulti","selectVariant"],H="Minimals",B=[z.QJ.image.cover(2),z.QJ.image.cover(3),z.QJ.image.cover(4),z.QJ.image.cover(5),z.QJ.image.cover(8)];function M(e){var n=e.isText,t=e.isMulti,o=e.selectVariant,i=(0,m.Z)(e,V),s=t?B:B.slice(0,1);return(0,I.jsx)(Z.Z,(0,f.Z)((0,f.Z)({sx:{p:3,minHeight:480,display:"flex",overflow:"hidden",alignItems:"center",justifyContent:"center",bgcolor:"background.neutral"}},i),{},{children:n?(0,I.jsx)(D.NM,{component:O.m.h1,sx:{typography:"h1",display:"flex",overflow:"hidden"},children:H.split("").map((function(e,n){return(0,I.jsx)(O.m.span,{variants:T(o),children:e},n)}))}):(0,I.jsx)(D.NM,{children:s.map((function(e,n){return(0,I.jsx)(a.Z,{component:O.m.img,src:e,variants:T(o),sx:{my:2,width:480,borderRadius:1,objectFit:"cover",height:t?72:320,boxShadow:function(e){return e.customShadows.z8}}},n)}))})}))}function S(){var e=(0,s.useState)(0),n=(0,i.Z)(e,2),t=n[0],o=n[1],r=(0,x.k)(),a=(0,x.k)(),l=(0,s.useState)("slideInUp"),c=(0,i.Z)(l,2),u=c[0],d=c[1],f=(0,s.useCallback)((function(){o(t+1)}),[t]),m=(0,s.useCallback)((function(e){o(t+1),d(e.target.value)}),[t]);return(0,I.jsxs)(h.Z,{sx:{p:3},children:[(0,I.jsx)(p.Z,{container:!0,sx:{mb:3},children:(0,I.jsx)(p.Z,{xs:12,md:9,children:(0,I.jsx)(w,{isText:a.value,isMulti:r.value,onChangeText:a.onToggle,onChangeMulti:r.onToggle,onRefresh:f})})}),(0,I.jsxs)(p.Z,{container:!0,spacing:3,children:[(0,I.jsx)(p.Z,{xs:12,md:9,children:(0,I.jsx)(M,{isText:a.value,isMulti:r.value,selectVariant:u},t)}),(0,I.jsx)(p.Z,{xs:12,md:3,children:(0,I.jsx)(C,{variantKey:X,selectVariant:u,onChangeVariant:m})})]})]})}var X=[{type:"slide in",values:["slideInUp","slideInDown","slideInLeft","slideInRight"]},{type:"slide out",values:["slideOutUp","slideOutDown","slideOutLeft","slideOutRight"]},{type:"fade in",values:["fadeIn","fadeInUp","fadeInDown","fadeInLeft","fadeInRight"]},{type:"fade out",values:["fadeOut","fadeOutUp","fadeOutDown","fadeOutLeft","fadeOutRight"]},{type:"zoom in",values:["zoomIn","zoomInUp","zoomInDown","zoomInLeft","zoomInRight"]},{type:"zoom out",values:["zoomOut","zoomOutUp","zoomOutDown","zoomOutLeft","zoomOutRight"]},{type:"bounce in",values:["bounceIn","bounceInUp","bounceInDown","bounceInLeft","bounceInRight"]},{type:"bounce out",values:["bounceOut","bounceOutUp","bounceOutDown","bounceOutLeft","bounceOutRight"]},{type:"flip in",values:["flipInX","flipInY"]},{type:"flip out",values:["flipOutX","flipOutY"]},{type:"scale in",values:["scaleInX","scaleInY"]},{type:"scale out",values:["scaleOutX","scaleOutY"]},{type:"rotate in",values:["rotateIn"]},{type:"rotate out",values:["rotateOut"]}],Y=t(39504),W=t(13967);function E(){var e=(0,W.Z)(),n=e.palette.primary.light,t=e.palette.primary.main,o=e.palette.primary.dark;return(0,I.jsxs)(a.Z,{component:O.m.svg,viewBox:"0 0 512 512",sx:{width:240,height:240,strokeWidth:4,stroke:t},children:[(0,I.jsxs)("defs",{children:[(0,I.jsxs)("linearGradient",{x1:"100%",y1:"9.946%",x2:"50%",y2:"50%",id:"a",children:[(0,I.jsx)("stop",{stopColor:o,offset:"0%"}),(0,I.jsx)("stop",{stopColor:t,offset:"100%"})]}),(0,I.jsxs)("linearGradient",{x1:"50%",y1:"0%",x2:"50%",y2:"100%",id:"b",children:[(0,I.jsx)("stop",{stopColor:n,offset:"0%"}),(0,I.jsx)("stop",{stopColor:t,offset:"100%"})]}),(0,I.jsxs)("linearGradient",{x1:"50%",y1:"0%",x2:"50%",y2:"100%",id:"c",children:[(0,I.jsx)("stop",{stopColor:n,offset:"0%"}),(0,I.jsx)("stop",{stopColor:t,offset:"100%"})]})]}),(0,I.jsxs)("g",{fill:"none",fillRule:"nonzero",children:[(0,I.jsx)(O.m.path,(0,f.Z)((0,f.Z)({},D.lj),{},{d:"M183.168 285.573l-2.918 5.298-2.973 5.363-2.846 5.095-2.274 4.043-2.186 3.857-2.506 4.383-1.6 2.774-2.294 3.939-1.099 1.869-1.416 2.388-1.025 1.713-1.317 2.18-.95 1.558-1.514 2.447-.866 1.38-.833 1.312-.802 1.246-.77 1.18-.739 1.111-.935 1.38-.664.956-.425.6-.41.572-.59.8-.376.497-.537.69-.171.214c-10.76 13.37-22.496 23.493-36.93 29.334-30.346 14.262-68.07 14.929-97.202-2.704l72.347-124.682 2.8-1.72c49.257-29.326 73.08 1.117 94.02 40.927z",fill:"url(#a)"})),(0,I.jsx)(O.m.path,(0,f.Z)((0,f.Z)({},D.lj),{},{d:"M444.31 229.726c-46.27-80.956-94.1-157.228-149.043-45.344-7.516 14.384-12.995 42.337-25.267 42.337v-.142c-12.272 0-17.75-27.953-25.265-42.337C189.79 72.356 141.96 148.628 95.69 229.584c-3.483 6.106-6.828 11.932-9.69 16.996 106.038-67.127 97.11 135.667 184 137.278V384c86.891-1.611 77.962-204.405 184-137.28-2.86-5.062-6.206-10.888-9.69-16.994",fill:"url(#b)"})),(0,I.jsx)(O.m.path,(0,f.Z)((0,f.Z)({},D.lj),{},{d:"M450 384c26.509 0 48-21.491 48-48s-21.491-48-48-48-48 21.491-48 48 21.491 48 48 48",fill:"url(#c)"}))]})]})}var J=t(48240),Q=t(36314);function F(){return(0,I.jsxs)(Q.Z,{spacing:2,direction:"row",alignItems:"center",justifyContent:"center",sx:{height:1},children:[(0,I.jsx)(J.Z,{component:O.m.button,whileTap:"tap",whileHover:"hover",variants:(0,D.U6)(1.1,.95),color:"primary",size:"small",children:(0,I.jsx)(b.Z,{icon:"mingcute:add-line",width:24})}),(0,I.jsx)(J.Z,{component:O.m.button,whileTap:"tap",whileHover:"hover",variants:(0,D.U6)(),color:"primary",size:"medium",children:(0,I.jsx)(b.Z,{icon:"mingcute:add-line",width:24})}),(0,I.jsx)(J.Z,{component:O.m.button,whileTap:"tap",whileHover:"hover",variants:(0,D.U6)(1.08,.99),color:"primary",children:(0,I.jsx)(b.Z,{icon:"mingcute:add-line",width:24})}),(0,I.jsx)(g.Z,{component:O.m.button,whileTap:"tap",whileHover:"hover",variants:(0,D.U6)(1.1,.95),color:"primary",size:"small",children:(0,I.jsx)(b.Z,{icon:"mingcute:add-line",width:24})}),(0,I.jsx)(g.Z,{component:O.m.button,whileTap:"tap",whileHover:"hover",variants:(0,D.U6)(),color:"primary",children:(0,I.jsx)(b.Z,{icon:"mingcute:add-line",width:24})}),(0,I.jsx)(g.Z,{component:O.m.button,whileTap:"tap",whileHover:"hover",variants:(0,D.U6)(1.08,.99),color:"primary",size:"large",children:(0,I.jsx)(b.Z,{icon:"mingcute:add-line",width:24})})]})}var G=t(31562);function N(){var e=(0,s.useState)(0),n=(0,i.Z)(e,2),t=n[0],o=n[1];return(0,I.jsx)(h.Z,{children:(0,I.jsx)(Y.Z,{children:(0,I.jsxs)(a.Z,{gap:3,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(2, 1fr)"},children:[(0,I.jsx)(G.Z,{title:"Button Click",children:(0,I.jsx)(F,{})}),(0,I.jsxs)(G.Z,{title:"Path",children:[(0,I.jsx)(g.Z,{onClick:function(){return o(t+1)},sx:{position:"absolute",right:40,top:40},children:(0,I.jsx)(b.Z,{icon:"eva:refresh-fill"})}),(0,I.jsx)(E,{},t)]})]})})})}var A=["onRefresh"];function K(e){var n=e.onRefresh,t=(0,m.Z)(e,A);return(0,I.jsx)(Z.Z,(0,f.Z)((0,f.Z)({sx:{display:"flex",alignItems:"center",justifyContent:"flex-end"}},t),{},{children:(0,I.jsx)(g.Z,{onClick:n,children:(0,I.jsx)(b.Z,{icon:"eva:refresh-fill"})})}))}var _=t(93433),q=["selectVariant"];function P(e){var n=e.selectVariant,t=(0,m.Z)(e,q),o=(0,s.useRef)(null);return(0,I.jsx)(Z.Z,(0,f.Z)((0,f.Z)({ref:o,component:O.m.div,variants:(0,D.Ew)(),sx:{height:480,bgcolor:"background.neutral"}},t),{},{children:(0,I.jsx)(L.Z,{children:(0,_.Z)(Array(40)).map((function(e,t){return(0,I.jsx)(a.Z,{component:D.DG,variants:T(n),viewport:{root:o,once:!0,amount:.1},sx:{my:2,mx:"auto",height:72,maxWidth:480,display:"flex",borderRadius:1,alignItems:"center",justifyContent:"center",bgcolor:"background.paper",boxShadow:function(e){return e.customShadows.z8}},children:(0,I.jsxs)(k.Z,{variant:"body2",children:["Item ",t+1]})},t)}))})}))}function $(){var e=(0,s.useState)(0),n=(0,i.Z)(e,2),t=n[0],o=n[1],r=(0,s.useState)("slideInUp"),a=(0,i.Z)(r,2),l=a[0],c=a[1],u=(0,s.useCallback)((function(e){o(t+1),c(e.target.value)}),[t]);return(0,I.jsxs)(h.Z,{sx:{p:3},children:[(0,I.jsx)(p.Z,{container:!0,sx:{mb:3},children:(0,I.jsx)(p.Z,{xs:12,md:9,children:(0,I.jsx)(K,{onRefresh:function(){return o(t+1)}})})}),(0,I.jsxs)(p.Z,{container:!0,spacing:3,children:[(0,I.jsx)(p.Z,{xs:12,md:9,children:(0,I.jsx)(P,{selectVariant:l},t)}),(0,I.jsx)(p.Z,{xs:12,md:3,children:(0,I.jsx)(C,{variantKey:ee,selectVariant:l,onChangeVariant:u})})]})]})}var ee=[{type:"slide",values:["slideInUp","slideInDown","slideInLeft","slideInRight"]},{type:"fade",values:["fadeIn","fadeInUp","fadeInDown","fadeInLeft","fadeInRight"]},{type:"zoom",values:["zoomIn","zoomInUp","zoomInDown","zoomInLeft","zoomInRight"]},{type:"bounce",values:["bounceIn","bounceInUp","bounceInDown","bounceInLeft","bounceInRight"]},{type:"flip",values:["flipInX","flipInY"]},{type:"scale",values:["scaleInX","scaleInY"]},{type:"rotate",values:["rotateIn"]}],ne=t(83791),te=t(5849),oe=t(5574),ie=t(65661),se=t(39157),re=t(97123),ae=["open","onOpen","onClose","selectVariant"];function le(e){var n=e.open,t=e.onOpen,o=e.onClose,i=e.selectVariant,s=(0,m.Z)(e,ae);return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(Z.Z,(0,f.Z)((0,f.Z)({sx:{height:480,display:"flex",alignItems:"center",justifyContent:"center",bgcolor:"background.neutral"}},s),{},{children:(0,I.jsx)(te.Z,{variant:"contained",onClick:t,children:"Click Me!"})})),(0,I.jsx)(ne.M,{children:n&&(0,I.jsxs)(oe.Z,{fullWidth:!0,maxWidth:"xs",open:n,onClose:o,PaperComponent:function(e){return(0,I.jsx)(O.m.div,(0,f.Z)((0,f.Z)({},T(i)),{},{children:(0,I.jsx)(Z.Z,(0,f.Z)((0,f.Z)({},e),{},{children:e.children}))}))},children:[(0,I.jsx)(ie.Z,{id:"alert-dialog-title",children:"Use Google's location service?"}),(0,I.jsx)(se.Z,{children:"Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running."}),(0,I.jsxs)(re.Z,{children:[(0,I.jsx)(te.Z,{onClick:o,children:"Disagree"}),(0,I.jsx)(te.Z,{variant:"contained",onClick:o,autoFocus:!0,children:"Agree"})]})]})})]})}function ce(){var e=(0,x.k)(),n=(0,s.useState)("slideInUp"),t=(0,i.Z)(n,2),o=t[0],r=t[1],a=(0,s.useCallback)((function(e){r(e.target.value)}),[]);return(0,I.jsx)(h.Z,{sx:{p:3},children:(0,I.jsxs)(p.Z,{container:!0,spacing:3,children:[(0,I.jsx)(p.Z,{xs:12,md:9,children:(0,I.jsx)(le,{open:e.value,onOpen:e.onTrue,onClose:e.onFalse,selectVariant:o})}),(0,I.jsx)(p.Z,{xs:12,md:3,children:(0,I.jsx)(C,{variantKey:ue,selectVariant:o,onChangeVariant:a})})]})})}var ue=[{type:"slide",values:["slideInUp","slideInDown","slideInLeft","slideInRight"]},{type:"fade",values:["fadeIn","fadeInUp","fadeInDown","fadeInLeft","fadeInRight"]},{type:"zoom",values:["zoomIn","zoomInUp","zoomInDown","zoomInLeft","zoomInRight"]},{type:"bounce",values:["bounceIn","bounceInUp","bounceInDown","bounceInLeft","bounceInRight"]},{type:"flip",values:["flipInX","flipInY"]},{type:"scale",values:["scaleInX","scaleInY"]},{type:"rotate",values:["rotateIn"]}],de=["onRefresh"];function he(e){var n=e.onRefresh,t=(0,m.Z)(e,de);return(0,I.jsx)(Z.Z,(0,f.Z)((0,f.Z)({sx:{display:"flex",alignItems:"center",justifyContent:"flex-end"}},t),{},{children:(0,I.jsx)(g.Z,{onClick:n,children:(0,I.jsx)(b.Z,{icon:"eva:refresh-fill"})})}))}var pe=["selectVariant"];function xe(e){var n=e.selectVariant,t=(0,m.Z)(e,pe),o=n.includes("kenburns");return(0,I.jsx)(Z.Z,(0,f.Z)((0,f.Z)({sx:{height:480,width:"100%",overflow:"hidden",boxShadow:function(e){return e.customShadows.z8}}},t),{},{children:o?(0,I.jsx)(a.Z,(0,f.Z)((0,f.Z)({component:O.m.img,src:z.QJ.image.cover(7)},T(n)),{},{sx:{width:1,height:1,objectFit:"cover"}})):(0,I.jsx)(a.Z,(0,f.Z)((0,f.Z)({component:O.m.div},T(n)),{},{sx:{height:1,width:1}}))}))}function fe(){var e=(0,s.useState)(0),n=(0,i.Z)(e,2),t=n[0],o=n[1],r=(0,s.useState)("kenburnsTop"),a=(0,i.Z)(r,2),l=a[0],c=a[1];return(0,I.jsxs)(h.Z,{sx:{p:3},children:[(0,I.jsx)(p.Z,{container:!0,sx:{mb:3},children:(0,I.jsx)(p.Z,{xs:12,md:9,children:(0,I.jsx)(he,{onRefresh:function(){return o(t+1)}})})}),(0,I.jsxs)(p.Z,{container:!0,spacing:3,children:[(0,I.jsx)(p.Z,{xs:12,md:9,children:(0,I.jsx)(xe,{selectVariant:l},t)}),(0,I.jsx)(p.Z,{xs:12,md:3,children:(0,I.jsx)(C,{variantKey:me,selectVariant:l,onChangeVariant:function(e){o(t+1),c(e.target.value)}})})]})]})}var me=[{type:"kenburns",values:["kenburnsTop","kenburnsBottom","kenburnsLeft","kenburnsRight"]},{type:"pan",values:["panTop","panBottom","panLeft","panRight"]},{type:"color change",values:["color2x","color3x","color4x","color5x"]}],Ze=[{value:"inview",label:"In View",component:(0,I.jsx)(S,{})},{value:"scroll",label:"Scroll",component:(0,I.jsx)($,{})},{value:"dialog",label:"Dialog",component:(0,I.jsx)(ce,{})},{value:"background",label:"Background",component:(0,I.jsx)(fe,{})},{value:"other",label:"Other",component:(0,I.jsx)(N,{})}];function je(){var e=(0,s.useState)("inview"),n=(0,i.Z)(e,2),t=n[0],o=n[1],h=(0,s.useCallback)((function(e,n){o(n)}),[]);return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(a.Z,{sx:{py:5,bgcolor:function(e){return"light"===e.palette.mode?"grey.200":"grey.800"}},children:(0,I.jsx)(c.Z,{children:(0,I.jsx)(d.Z,{heading:"Animate",links:[{name:"Components",href:u.H.components},{name:"Animate"}],moreLink:["https://www.framer.com/api/motion"]})})}),(0,I.jsxs)(c.Z,{sx:{my:10},children:[(0,I.jsx)(l.Z,{value:t,onChange:h,children:Ze.map((function(e){return(0,I.jsx)(r.Z,{value:e.value,label:e.label},e.value)}))}),Ze.map((function(e){return e.value===t&&(0,I.jsx)(a.Z,{sx:{mt:5},children:e.component},e.value)}))]})]})}function ge(){return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(o.ql,{children:(0,I.jsx)("title",{children:" Extra: Animate"})}),(0,I.jsx)(je,{})]})}},31562:function(e,n,t){t.d(n,{Z:function(){return d}});var o=t(1413),i=t(45987),s=t(12065),r=t(27938),a=t(9585),l=t(36314),c=t(80184),u=["title","sx","children"];function d(e){var n=e.title,t=e.sx,d=e.children,h=(0,i.Z)(e,u);return(0,c.jsxs)(r.Z,{variant:"outlined",sx:{borderRadius:1.5,borderStyle:"dashed",bgcolor:function(e){return(0,s.Fq)(e.palette.grey[500],.04)}},children:[n&&(0,c.jsx)(a.Z,{title:n}),(0,c.jsx)(l.Z,(0,o.Z)((0,o.Z)({spacing:3,direction:"row",alignItems:"center",justifyContent:"center",flexWrap:"wrap",sx:(0,o.Z)({p:5,minHeight:180},t)},h),{},{children:d}))]})}}}]);
//# sourceMappingURL=9099.6886bdc6.chunk.js.map