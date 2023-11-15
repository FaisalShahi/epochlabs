"use strict";(self.webpackChunk_epochlabs=self.webpackChunk_epochlabs||[]).push([[3487],{50933:function(e,n,t){t.d(n,{Z:function(){return p}});var r=t(1413),o=t(45987),i=t(64554),s=t(50533),a=t(36314),l=t(4567),c=t(93517),d=t(83854),h=t(80184);function x(e){var n=e.link,t=e.activeLast,o=e.disabled,a=n.name,l=n.href,c=n.icon,x=(0,r.Z)({typography:"body2",alignItems:"center",color:"text.primary",display:"inline-flex"},o&&!t&&{cursor:"default",pointerEvents:"none",color:"text.disabled"}),u=(0,h.jsxs)(h.Fragment,{children:[c&&(0,h.jsx)(i.Z,{component:"span",sx:{mr:1,display:"inherit","& svg":{width:20,height:20}},children:c}),a]});return l?(0,h.jsx)(s.Z,{component:d.r,href:l,sx:x,children:u}):(0,h.jsxs)(i.Z,{sx:x,children:[" ",u," "]})}var u=["links","action","heading","moreLink","activeLast","sx"];function p(e){var n=e.links,t=e.action,d=e.heading,p=e.moreLink,Z=e.activeLast,v=e.sx,j=(0,o.Z)(e,u),f=n[n.length-1].name;return(0,h.jsxs)(i.Z,{sx:(0,r.Z)({},v),children:[(0,h.jsxs)(a.Z,{direction:"row",alignItems:"center",children:[(0,h.jsxs)(i.Z,{sx:{flexGrow:1},children:[d&&(0,h.jsx)(l.Z,{variant:"h4",gutterBottom:!0,children:d}),!!n.length&&(0,h.jsx)(c.Z,(0,r.Z)((0,r.Z)({separator:(0,h.jsx)(m,{})},j),{},{children:n.map((function(e){return(0,h.jsx)(x,{link:e,activeLast:Z,disabled:e.name===f},e.name||"")}))}))]}),t&&(0,h.jsxs)(i.Z,{sx:{flexShrink:0},children:[" ",t," "]})]}),!!p&&(0,h.jsx)(i.Z,{sx:{mt:2},children:p.map((function(e){return(0,h.jsx)(s.Z,{href:e,variant:"body2",target:"_blank",rel:"noopener",sx:{display:"table"},children:e},e)}))})]})}function m(){return(0,h.jsx)(i.Z,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})}},3487:function(e,n,t){t.r(n),t.d(n,{default:function(){return y}});var r=t(6907),o=t(29439),i=t(72791),s=t(64554),a=t(1503),l=t(5849),c=t(15473),d=t(17133),h=t(89164),x=t(4567),u=t(88970),p=t(68096),m=t(25801),Z=t(38072),v=t(50933),j=t(52115),f=t(31562),g=t(80184);function b(){var e=(0,i.useState)("top-left"),n=(0,o.Z)(e,2),t=n[0],r=n[1],b=(0,j.S)(),y=(0,j.S)(),C=(0,j.S)(),k=(0,i.useCallback)((function(e){r(e.target.value)}),[]);return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(s.Z,{sx:{py:5,bgcolor:function(e){return"light"===e.palette.mode?"grey.200":"grey.800"}},children:(0,g.jsx)(h.Z,{children:(0,g.jsx)(v.Z,{heading:"Popover",links:[{name:"Components",href:Z.H.components},{name:"Popover"}],moreLink:["https://mui.com/components/popover"]})})}),(0,g.jsxs)(h.Z,{sx:{my:10},children:[(0,g.jsxs)(s.Z,{gap:3,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(2, 1fr)"},sx:{mb:3},children:[(0,g.jsxs)(f.Z,{title:"Click",children:[(0,g.jsx)(l.Z,{variant:"contained",onClick:b.onOpen,children:"Open Popover"}),(0,g.jsx)(c.ZP,{open:Boolean(b.open),anchorEl:b.open,onClose:b.onClose,anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"},children:(0,g.jsxs)(s.Z,{sx:{p:2,maxWidth:280},children:[(0,g.jsx)(x.Z,{variant:"subtitle1",gutterBottom:!0,children:"Etiam feugiat lorem non metus"}),(0,g.jsx)(x.Z,{variant:"body2",sx:{color:"text.secondary"},children:"Fusce vulputate eleifend sapien. Curabitur at lacus ac velit ornare lobortis."})]})})]}),(0,g.jsxs)(f.Z,{title:"Hover",children:[(0,g.jsx)(x.Z,{"aria-owns":y.open?"mouse-over-popover":void 0,"aria-haspopup":"true",onMouseEnter:y.onOpen,onMouseLeave:y.onClose,children:"Hover with a Popover."}),(0,g.jsx)(c.ZP,{id:"mouse-over-popover",open:Boolean(y.open),anchorEl:y.open,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"},onClose:y.onClose,disableRestoreFocus:!0,sx:{pointerEvents:"none"},children:(0,g.jsxs)(s.Z,{sx:{p:2,maxWidth:280},children:[(0,g.jsx)(x.Z,{variant:"subtitle1",gutterBottom:!0,children:"Etiam feugiat lorem non metus"}),(0,g.jsx)(x.Z,{variant:"body2",sx:{color:"text.secondary"},children:"Fusce vulputate eleifend sapien. Curabitur at lacus ac velit ornare lobortis."})]})})]})]}),(0,g.jsxs)(f.Z,{title:"Customized",children:[(0,g.jsx)(l.Z,{variant:"contained",onClick:C.onOpen,sx:{mr:5},children:"Open Customized"}),(0,g.jsxs)(p.Z,{children:[(0,g.jsx)(d.Z,{sx:{typography:"body2"},children:"Arrow"}),(0,g.jsx)(u.Z,{value:t,onChange:k,children:["top-left","top-center","top-right","bottom-left","bottom-center","bottom-right","left-top","left-center","left-bottom","right-top","right-center","right-bottom"].map((function(e){return(0,g.jsx)(m.Z,{value:e,control:(0,g.jsx)(a.Z,{}),label:e},e)}))})]}),(0,g.jsx)(j.Z,{open:C.open,onClose:C.onClose,arrow:t,children:(0,g.jsxs)(s.Z,{sx:{p:2,maxWidth:280},children:[(0,g.jsx)(x.Z,{variant:"subtitle1",gutterBottom:!0,children:"Etiam feugiat lorem non metus"}),(0,g.jsx)(x.Z,{variant:"body2",sx:{color:"text.secondary"},children:"Fusce vulputate eleifend sapien. Curabitur at lacus ac velit ornare lobortis."})]})})]})]})]})}function y(){return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(r.ql,{children:(0,g.jsx)("title",{children:" MUI: Popover"})}),(0,g.jsx)(b,{})]})}},31562:function(e,n,t){t.d(n,{Z:function(){return h}});var r=t(1413),o=t(45987),i=t(12065),s=t(27938),a=t(9585),l=t(36314),c=t(80184),d=["title","sx","children"];function h(e){var n=e.title,t=e.sx,h=e.children,x=(0,o.Z)(e,d);return(0,c.jsxs)(s.Z,{variant:"outlined",sx:{borderRadius:1.5,borderStyle:"dashed",bgcolor:function(e){return(0,i.Fq)(e.palette.grey[500],.04)}},children:[n&&(0,c.jsx)(a.Z,{title:n}),(0,c.jsx)(l.Z,(0,r.Z)((0,r.Z)({spacing:3,direction:"row",alignItems:"center",justifyContent:"center",flexWrap:"wrap",sx:(0,r.Z)({p:5,minHeight:180},t)},x),{},{children:h}))]})}}}]);
//# sourceMappingURL=3487.8a9d42ea.chunk.js.map