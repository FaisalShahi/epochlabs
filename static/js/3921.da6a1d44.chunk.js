"use strict";(self.webpackChunk_epochlabs=self.webpackChunk_epochlabs||[]).push([[3921],{6077:function(e,r,t){t.d(r,{cU:function(){return R},i5:function(){return b},A0:function(){return u},ZP:function(){return L},vr:function(){return I}});var n=t(95717),i=t(1413),o=t(66934),a=t(36314),s=t(64554),l=t(80184),c=(0,o.ZP)(s.Z,{shouldForwardProp:function(e){return"rounded"!==e}})((function(e){var r=e.rounded;return{zIndex:9,margin:0,padding:0,display:"flex",alignItems:"center",justifyContent:"center",color:e.theme.palette.primary.main,"& li":{width:18,height:18,opacity:.32,display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer","&.slick-active":(0,i.Z)({opacity:1},r&&{"& span":{width:16,borderRadius:6}})}}})),d=(0,o.ZP)("span")((function(e){var r=e.theme;return{width:8,height:8,borderRadius:"50%",transition:r.transitions.create(["width"],{easing:r.transitions.easing.sharp,duration:r.transitions.duration.short})}}));function u(e){var r=(null===e||void 0===e?void 0:e.rounded)||!1,t=null===e||void 0===e?void 0:e.sx;return{appendDots:function(n){return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(c,(0,i.Z)((0,i.Z)({component:"ul",rounded:r,sx:(0,i.Z)({},t)},e),{},{children:n}))})},customPaging:function(){return(0,l.jsx)(a.Z,{component:"div",alignItems:"center",justifyContent:"center",sx:{width:1,height:1},children:(0,l.jsx)(d,{sx:{bgcolor:"currentColor"}})})}}}var h=t(45987),x=t(12065),f=t(13967),v=t(13400),p=t(44e3);function Z(e){var r=e.icon,t=void 0===r?"eva:arrow-ios-forward-fill":r,n=e.isRTL;return(0,l.jsx)(p.Z,{icon:t,sx:(0,i.Z)({transform:" scaleX(-1)"},n&&{transform:" scaleX(1)"})})}function m(e){var r=e.icon,t=void 0===r?"eva:arrow-ios-forward-fill":r,n=e.isRTL;return(0,l.jsx)(p.Z,{icon:t,sx:(0,i.Z)({},n&&{transform:" scaleX(-1)"})})}var g=["shape","filled","icon","onNext","onPrev","children","leftButtonProps","rightButtonProps","sx"],j=(0,o.ZP)(v.Z,{shouldForwardProp:function(e){return"filled"!==e&&"hasChild"!==e&&"shape"!==e}})((function(e){var r=e.filled,t=e.shape,n=e.hasChild,o=e.theme;return(0,i.Z)((0,i.Z)((0,i.Z)((0,i.Z)({color:"inherit",transition:o.transitions.create("all",{duration:o.transitions.duration.shorter})},"rounded"===t&&{borderRadius:1.5*o.shape.borderRadius}),!r&&{opacity:.48,"&:hover":{opacity:1}}),r&&{color:(0,x.Fq)(o.palette.common.white,.8),backgroundColor:(0,x.Fq)(o.palette.grey[900],.48),"&:hover":{color:o.palette.common.white,backgroundColor:o.palette.grey[900]}}),n&&{zIndex:9,top:"50%",position:"absolute",marginTop:o.spacing(-2.5)})}));function b(e){var r=e.shape,t=void 0===r?"circular":r,n=e.filled,o=void 0!==n&&n,s=e.icon,c=e.onNext,d=e.onPrev,u=e.children,x=e.leftButtonProps,v=e.rightButtonProps,p=e.sx,b=(0,h.Z)(e,g),y="rtl"===(0,f.Z)().direction;return!!u?(0,l.jsxs)(a.Z,(0,i.Z)((0,i.Z)({sx:p},b),{},{children:[c&&(0,l.jsx)(j,(0,i.Z)((0,i.Z)({filled:o,shape:t,hasChild:!!u,onClick:d},x),{},{sx:(0,i.Z)({left:16},null===x||void 0===x?void 0:x.sx),children:(0,l.jsx)(Z,{icon:s,isRTL:y})})),u,d&&(0,l.jsx)(j,(0,i.Z)((0,i.Z)({filled:o,shape:t,hasChild:!!u,onClick:c},v),{},{sx:(0,i.Z)({right:16},null===v||void 0===v?void 0:v.sx),children:(0,l.jsx)(m,{icon:s,isRTL:y})}))]})):(0,l.jsxs)(a.Z,(0,i.Z)((0,i.Z)({direction:"row",alignItems:"center",display:"inline-flex",sx:p},b),{},{children:[(0,l.jsx)(j,(0,i.Z)((0,i.Z)({filled:o,shape:t,onClick:d},x),{},{children:(0,l.jsx)(Z,{icon:s,isRTL:y})})),(0,l.jsx)(j,(0,i.Z)((0,i.Z)({filled:o,shape:t,onClick:c},v),{},{children:(0,l.jsx)(m,{icon:s,isRTL:y})}))]}))}var y=t(4567),w=t(74744),C=["index","total","onNext","onPrev","icon","sx"],P=(0,o.ZP)(s.Z)((function(e){var r=e.theme;return(0,i.Z)((0,i.Z)({},(0,w.Ls)({opacity:.48,color:r.palette.grey[900]})),{},{zIndex:9,display:"inline-flex",alignItems:"center",position:"absolute",bottom:r.spacing(2),right:r.spacing(2),padding:r.spacing(.25),color:r.palette.common.white,borderRadius:r.shape.borderRadius})})),k=(0,o.ZP)(v.Z)({width:28,height:28,padding:0,opacity:.48,"&:hover":{opacity:1}});function R(e){var r=e.index,t=e.total,n=e.onNext,o=e.onPrev,a=e.icon,s=e.sx,c=(0,h.Z)(e,C),d="rtl"===(0,f.Z)().direction;return(0,l.jsxs)(P,(0,i.Z)((0,i.Z)({sx:s},c),{},{children:[(0,l.jsx)(k,{color:"inherit",onClick:o,children:(0,l.jsx)(Z,{icon:a,isRTL:d})}),(0,l.jsxs)(y.Z,{variant:"subtitle2",component:"span",sx:{mx:.25},children:[r+1,"/",t]}),(0,l.jsx)(k,{color:"inherit",onClick:n,children:(0,l.jsx)(m,{icon:a,isRTL:d})})]}))}var S=t(29439),N=t(72791);function I(e){var r=(0,f.Z)(),t=(0,N.useRef)(null),n=(0,N.useState)((null===e||void 0===e?void 0:e.initialSlide)||0),o=(0,S.Z)(n,2),a=o[0],s=o[1],l=(0,N.useState)(void 0),c=(0,S.Z)(l,2),d=c[0],u=c[1],h="rtl"===r.direction,x=(0,i.Z)((0,i.Z)({arrows:!1,dots:!(null===e||void 0===e||!e.customPaging),rtl:h,beforeChange:function(e,r){return s(r)}},e),{},{fade:!(null===e||void 0===e||!e.fade||h)}),v=(0,N.useCallback)((function(){t.current&&u(t.current)}),[]),p=(0,N.useCallback)((function(){t.current&&t.current.slickPrev()}),[]),Z=(0,N.useCallback)((function(){t.current&&t.current.slickNext()}),[]),m=(0,N.useCallback)((function(e){t.current&&t.current.slickGoTo(e)}),[]);return{nav:d,carouselRef:t,currentIndex:a,carouselSettings:x,onPrev:p,onNext:Z,onTogo:m,onSetNav:v,setNav:u,setCurrentIndex:s}}var L=n.Z},50933:function(e,r,t){t.d(r,{Z:function(){return f}});var n=t(1413),i=t(45987),o=t(64554),a=t(50533),s=t(36314),l=t(4567),c=t(93517),d=t(83854),u=t(80184);function h(e){var r=e.link,t=e.activeLast,i=e.disabled,s=r.name,l=r.href,c=r.icon,h=(0,n.Z)({typography:"body2",alignItems:"center",color:"text.primary",display:"inline-flex"},i&&!t&&{cursor:"default",pointerEvents:"none",color:"text.disabled"}),x=(0,u.jsxs)(u.Fragment,{children:[c&&(0,u.jsx)(o.Z,{component:"span",sx:{mr:1,display:"inherit","& svg":{width:20,height:20}},children:c}),s]});return l?(0,u.jsx)(a.Z,{component:d.r,href:l,sx:h,children:x}):(0,u.jsxs)(o.Z,{sx:h,children:[" ",x," "]})}var x=["links","action","heading","moreLink","activeLast","sx"];function f(e){var r=e.links,t=e.action,d=e.heading,f=e.moreLink,p=e.activeLast,Z=e.sx,m=(0,i.Z)(e,x),g=r[r.length-1].name;return(0,u.jsxs)(o.Z,{sx:(0,n.Z)({},Z),children:[(0,u.jsxs)(s.Z,{direction:"row",alignItems:"center",children:[(0,u.jsxs)(o.Z,{sx:{flexGrow:1},children:[d&&(0,u.jsx)(l.Z,{variant:"h4",gutterBottom:!0,children:d}),!!r.length&&(0,u.jsx)(c.Z,(0,n.Z)((0,n.Z)({separator:(0,u.jsx)(v,{})},m),{},{children:r.map((function(e){return(0,u.jsx)(h,{link:e,activeLast:p,disabled:e.name===g},e.name||"")}))}))]}),t&&(0,u.jsxs)(o.Z,{sx:{flexShrink:0},children:[" ",t," "]})]}),!!f&&(0,u.jsx)(o.Z,{sx:{mt:2},children:f.map((function(e){return(0,u.jsx)(a.Z,{href:e,variant:"body2",target:"_blank",rel:"noopener",sx:{display:"table"},children:e},e)}))})]})}function v(){return(0,u.jsx)(o.Z,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})}},32471:function(e,r,t){t.d(r,{Z:function(){return x}});var n=t(1413),i=t(45987),o=t(72791),a=t(87087),s=t(13967),l=t(12065),c=t(64554);function d(){return{"4/3":"calc(100% / 4 * 3)","3/4":"calc(100% / 3 * 4)","6/4":"calc(100% / 6 * 4)","4/6":"calc(100% / 4 * 6)","16/9":"calc(100% / 16 * 9)","9/16":"calc(100% / 9 * 16)","21/9":"calc(100% / 21 * 9)","9/21":"calc(100% / 9 * 21)","1/1":"100%"}[arguments.length>0&&void 0!==arguments[0]?arguments[0]:"1/1"]}var u=t(80184),h=["ratio","overlay","disabledEffect","alt","src","afterLoad","delayTime","threshold","beforeLoad","delayMethod","placeholder","wrapperProps","scrollPosition","effect","visibleByDefault","wrapperClassName","useIntersectionObserver","sx"],x=(0,o.forwardRef)((function(e,r){var t=e.ratio,o=e.overlay,x=e.disabledEffect,f=void 0!==x&&x,v=e.alt,p=e.src,Z=e.afterLoad,m=e.delayTime,g=e.threshold,j=e.beforeLoad,b=e.delayMethod,y=e.placeholder,w=e.wrapperProps,C=e.scrollPosition,P=e.effect,k=void 0===P?"blur":P,R=e.visibleByDefault,S=e.wrapperClassName,N=e.useIntersectionObserver,I=e.sx,L=(0,i.Z)(e,h),M=(0,s.Z)(),T=!!o&&{"&:before":{content:"''",top:0,left:0,width:1,height:1,zIndex:1,position:"absolute",background:o||(0,l.Fq)(M.palette.grey[900],.48)}},z=(0,u.jsx)(c.Z,{component:a.LazyLoadImage,alt:v,src:p,afterLoad:Z,delayTime:m,threshold:g,beforeLoad:j,delayMethod:b,placeholder:y,wrapperProps:w,scrollPosition:C,visibleByDefault:R,effect:f?void 0:k,useIntersectionObserver:N,wrapperClassName:S||"component-image-wrapper",placeholderSrc:f?"/assets/transparent.png":"/assets/placeholder.svg",sx:(0,n.Z)({width:1,height:1,objectFit:"cover",verticalAlign:"bottom"},!!t&&{top:0,left:0,position:"absolute"})});return(0,u.jsx)(c.Z,(0,n.Z)((0,n.Z)({ref:r,component:"span",className:"component-image",sx:(0,n.Z)((0,n.Z)((0,n.Z)({overflow:"hidden",position:"relative",verticalAlign:"bottom",display:"inline-block"},!!t&&{width:1}),{},{"& span.component-image-wrapper":(0,n.Z)({width:1,height:1,verticalAlign:"bottom",backgroundSize:"cover !important"},!!t&&{pt:d(t)})},T),I)},L),{},{children:z}))}))},80211:function(e,r,t){t.d(r,{Z:function(){return x},t:function(){return o}});var n=t(13967),i=t(38887);function o(e){var r,t=(0,n.Z)(),o=(0,i.z)(),a=t.breakpoints.up("xl"===o?"lg":o),s=("h1"===e||"h2"===e||"h3"===e||"h4"===e||"h5"===e||"h6"===e)&&t.typography[e][a]?t.typography[e][a]:t.typography[e],l=(r=s.fontSize,Math.round(16*parseFloat(r))),c=Number(t.typography[e].lineHeight)*l,d=t.typography[e];return{fontSize:l,lineHeight:c,fontWeight:d.fontWeight,letterSpacing:d.letterSpacing}}var a=t(1413),s=t(45987),l=t(72791),c=t(50533),d=t(4567),u=t(80184),h=["asLink","variant","line","persistent","children","sx"],x=(0,l.forwardRef)((function(e,r){var t=e.asLink,n=e.variant,i=void 0===n?"body1":n,l=e.line,x=void 0===l?2:l,f=e.persistent,v=void 0!==f&&f,p=e.children,Z=e.sx,m=(0,s.Z)(e,h),g=o(i).lineHeight,j=(0,a.Z)((0,a.Z)({overflow:"hidden",textOverflow:"ellipsis",display:"-webkit-box",WebkitLineClamp:x,WebkitBoxOrient:"vertical"},v&&{height:g*x}),Z);return t?(0,u.jsx)(c.Z,(0,a.Z)((0,a.Z)({color:"inherit",ref:r,variant:i,sx:(0,a.Z)({},j)},m),{},{children:p})):(0,u.jsx)(d.Z,(0,a.Z)((0,a.Z)({ref:r,variant:i,sx:(0,a.Z)({},j)},m),{},{children:p}))}))},33921:function(e,r,t){t.r(r),t.d(r,{default:function(){return G}});var n=t(6907),i=t(93433),o=t(64554),a=t(57621),s=t(36314),l=t(89164),c=t(9585),d=t(39504),u=t(38072),h=t(39263),x=t(50933),f=t(1413),v=t(32471),p=t(6077),Z=t(80184);function m(e){var r=e.data,t=(0,p.vr)({autoplay:!0});return(0,Z.jsxs)(a.Z,{children:[(0,Z.jsx)(p.ZP,(0,f.Z)((0,f.Z)({ref:t.carouselRef},t.carouselSettings),{},{children:r.map((function(e){return(0,Z.jsx)(v.Z,{alt:e.title,src:e.coverUrl,ratio:"1/1"},e.id)}))})),(0,Z.jsx)(p.cU,{index:t.currentIndex,total:r.length,onNext:t.onNext,onPrev:t.onPrev})]})}var g=t(4567);function j(e){var r=e.data,t=(0,p.vr)({fade:!0,autoplay:!0,initialSlide:2});return(0,Z.jsxs)(a.Z,{children:[(0,Z.jsx)(p.ZP,(0,f.Z)((0,f.Z)({ref:t.carouselRef},t.carouselSettings),{},{children:r.map((function(e){return(0,Z.jsxs)(s.Z,{children:[(0,Z.jsx)(v.Z,{alt:e.title,src:e.coverUrl,ratio:"4/3"}),(0,Z.jsxs)(d.Z,{sx:{textAlign:"left"},children:[(0,Z.jsx)(g.Z,{variant:"h6",noWrap:!0,gutterBottom:!0,children:e.title}),(0,Z.jsx)(g.Z,{variant:"body2",sx:{color:"text.secondary"},noWrap:!0,children:e.description})]})]},e.id)}))})),(0,Z.jsx)(p.cU,{index:t.currentIndex,total:r.length,onNext:t.onNext,onPrev:t.onPrev,sx:{bottom:120}})]})}var b=t(13967);function y(e){var r=e.data,t=(0,b.Z)(),n=(0,p.vr)((0,f.Z)({autoplay:!0},(0,p.A0)({rounded:!0,sx:{mt:3}})));return(0,Z.jsx)(o.Z,{sx:{position:"relative","& .slick-list":{borderRadius:2,boxShadow:t.customShadows.z16}},children:(0,Z.jsx)(p.i5,{filled:!0,shape:"rounded",onNext:n.onNext,onPrev:n.onPrev,children:(0,Z.jsx)(p.ZP,(0,f.Z)((0,f.Z)({ref:n.carouselRef},n.carouselSettings),{},{children:r.map((function(e){return(0,Z.jsx)(w,{item:e},e.id)}))}))})})}function w(e){var r=e.item,t=r.coverUrl,n=r.title;return(0,Z.jsx)(v.Z,{alt:n,src:t,ratio:"1/1"})}var C=t(66934),P=t(12065),k=t(13400),R=t(74744),S=t(44e3),N=(0,C.ZP)("div")((function(e){var r=e.theme;return(0,f.Z)((0,f.Z)({},(0,R.Ls)({color:r.palette.grey[900]})),{},{bottom:0,zIndex:9,width:"100%",display:"flex",position:"absolute",alignItems:"center",padding:r.spacing(3),borderBottomLeftRadius:16,borderBottomRightRadius:16,justifyContent:"space-between",flexDirection:"rtl"===r.direction?"row-reverse":"row"})}));function I(e){var r=e.data,t=(0,p.vr)({autoplay:!0,fade:!0});return(0,Z.jsx)(a.Z,{children:(0,Z.jsx)(p.i5,{filled:!0,shape:"rounded",onNext:t.onNext,onPrev:t.onPrev,children:(0,Z.jsx)(p.ZP,(0,f.Z)((0,f.Z)({ref:t.carouselRef},t.carouselSettings),{},{children:r.map((function(e){return(0,Z.jsx)(L,{item:e},e.id)}))}))})})}function L(e){var r=e.item,t=r.coverUrl,n=r.title;return(0,Z.jsxs)(o.Z,{sx:{position:"relative",zIndex:0},children:[(0,Z.jsx)(v.Z,{alt:n,src:t,ratio:"1/1"}),(0,Z.jsxs)(N,{children:[(0,Z.jsx)(g.Z,{variant:"h6",sx:{color:"common.white"},children:r.title}),(0,Z.jsx)(k.Z,{onClick:function(){},sx:{color:"common.white","&:hover":{bgcolor:function(e){return(0,P.Fq)(e.palette.common.white,e.palette.action.hoverOpacity)}}},children:(0,Z.jsx)(S.Z,{icon:"eva:more-horizontal-fill"})})]})]})}var M=t(45358),T=t(27938),z=t(5849),F=t(82486);function B(e){var r=e.data,t=(0,p.vr)({speed:800,autoplay:!0});return(0,Z.jsxs)(a.Z,{children:[(0,Z.jsx)(p.ZP,(0,f.Z)((0,f.Z)({ref:t.carouselRef},t.carouselSettings),{},{children:r.map((function(e,r){return(0,Z.jsx)(A,{item:e,active:r===t.currentIndex},e.id)}))})),(0,Z.jsx)(p.cU,{index:t.currentIndex,total:r.length,onNext:t.onNext,onPrev:t.onPrev})]})}function A(e){var r=e.item,t=e.active,n=(0,b.Z)(),i=r.coverUrl,a=r.title,s="rtl"===n.direction?(0,F.EU)().inLeft:(0,F.EU)().inRight;return(0,Z.jsxs)(T.Z,{sx:{position:"relative"},children:[(0,Z.jsx)(v.Z,{dir:"ltr",alt:a,src:i,ratio:"16/9"}),(0,Z.jsx)(o.Z,{sx:(0,f.Z)({top:0,width:1,height:1,position:"absolute"},(0,R.v3)({direction:"to top",startColor:"".concat(n.palette.grey[900]," 0%"),endColor:"".concat((0,P.Fq)(n.palette.grey[900],0)," 100%")}))}),(0,Z.jsxs)(d.Z,{component:F.NM,animate:t,action:!0,sx:{left:0,bottom:0,maxWidth:720,textAlign:"left",position:"absolute",color:"common.white"},children:[(0,Z.jsx)(M.m.div,{variants:s,children:(0,Z.jsx)(g.Z,{variant:"h3",gutterBottom:!0,children:r.title})}),(0,Z.jsx)(M.m.div,{variants:s,children:(0,Z.jsx)(g.Z,{variant:"body2",noWrap:!0,gutterBottom:!0,children:r.description})}),(0,Z.jsx)(M.m.div,{variants:s,children:(0,Z.jsx)(z.Z,{variant:"contained",sx:{mt:3},children:"View More"})})]})]})}var U=t(72791),W=t(60220),D=64,q=(0,C.ZP)("div")((function(e){var r=e.length,t=e.theme;return(0,f.Z)((0,f.Z)((0,f.Z)((0,f.Z)((0,f.Z)({position:"relative",margin:t.spacing(0,"auto"),"& .slick-slide":{lineHeight:0}},1===r&&{maxWidth:1*D+16}),2===r&&{maxWidth:2*D+32}),(3===r||4===r)&&{maxWidth:3*D+48}),r>=5&&{maxWidth:6*D}),r>3&&{"&:before, &:after":(0,f.Z)((0,f.Z)({},(0,R.v3)({direction:"to left",startColor:"".concat((0,P.Fq)(t.palette.background.default,0)," 0%"),endColor:"".concat(t.palette.background.default," 100%")})),{},{top:0,zIndex:9,content:"''",height:"100%",position:"absolute",width:2*D/3}),"&:after":{right:0,transform:"scaleX(-1)"}})}));function O(e){var r=e.data,t=(0,p.vr)({rtl:!1,draggable:!1,adaptiveHeight:!0}),n=(0,p.vr)({rtl:!1,centerMode:!0,swipeToSlide:!0,focusOnSelect:!0,variableWidth:!0,centerPadding:"0px",slidesToShow:r.length>3?3:r.length});(0,U.useEffect)((function(){t.onSetNav(),n.onSetNav()}),[t,n]);var i=(0,Z.jsxs)(o.Z,{sx:{mb:3,borderRadius:2,overflow:"hidden",position:"relative"},children:[(0,Z.jsx)(p.ZP,(0,f.Z)((0,f.Z)({},t.carouselSettings),{},{asNavFor:n.nav,ref:t.carouselRef,children:r.map((function(e){return(0,Z.jsx)(v.Z,{alt:e.title,src:e.coverUrl,ratio:"16/9"},e.id)}))})),(0,Z.jsx)(p.cU,{index:t.currentIndex,total:r.length,onNext:n.onNext,onPrev:n.onPrev})]}),a=(0,Z.jsx)(q,{length:r.length,children:(0,Z.jsx)(p.ZP,(0,f.Z)((0,f.Z)({},n.carouselSettings),{},{asNavFor:t.nav,ref:n.carouselRef,children:r.map((function(e,r){return(0,Z.jsx)(o.Z,{sx:{px:.5},children:(0,Z.jsx)(W.Z,{variant:"rounded",alt:e.title,src:e.coverUrl,sx:(0,f.Z)({width:D,height:D,opacity:.48,cursor:"pointer"},t.currentIndex===r&&{opacity:1,border:function(e){return"solid 2.5px ".concat(e.palette.primary.main)}})})},e.id)}))}))});return(0,Z.jsxs)(o.Z,{sx:{"& .slick-slide":{float:function(e){return"rtl"===e.direction?"right":"left"}}},children:[i,a]})}var E=t(50533),H=t(80211);function J(e){var r=e.data,t=(0,p.vr)({slidesToShow:3,centerMode:!0,centerPadding:"60px",responsive:[{breakpoint:1024,settings:{slidesToShow:2}},{breakpoint:600,settings:{slidesToShow:2}},{breakpoint:480,settings:{slidesToShow:1,centerPadding:"0"}}]});return(0,Z.jsx)(o.Z,{sx:{overflow:"hidden",position:"relative"},children:(0,Z.jsx)(p.i5,{filled:!0,icon:"noto:rightwards-hand",onNext:t.onNext,onPrev:t.onPrev,children:(0,Z.jsx)(p.ZP,(0,f.Z)((0,f.Z)({ref:t.carouselRef},t.carouselSettings),{},{children:r.map((function(e){return(0,Z.jsx)(o.Z,{sx:{px:1},children:(0,Z.jsx)(Q,{item:e})},e.id)}))}))})})}function Q(e){var r=e.item,t=(0,b.Z)(),n=r.coverUrl,i=r.title;return(0,Z.jsxs)(T.Z,{sx:{borderRadius:2,overflow:"hidden",position:"relative"},children:[(0,Z.jsx)(v.Z,{alt:i,src:n,ratio:"3/4"}),(0,Z.jsxs)(d.Z,{sx:(0,f.Z)({bottom:0,zIndex:9,width:"100%",textAlign:"left",position:"absolute",color:"common.white"},(0,R.v3)({direction:"to top",startColor:"".concat(t.palette.grey[900]," 25%"),endColor:"".concat((0,P.Fq)(t.palette.grey[900],0)," 100%")})),children:[(0,Z.jsx)(H.Z,{variant:"h4",sx:{mb:2},children:i}),(0,Z.jsxs)(E.Z,{color:"inherit",variant:"overline",sx:{opacity:.72,alignItems:"center",display:"inline-flex",transition:t.transitions.create(["opacity"]),"&:hover":{opacity:1}},children:["learn More",(0,Z.jsx)(S.Z,{icon:"eva:arrow-forward-fill",width:16,sx:{ml:1}})]})]})]})}var X=(0,i.Z)(Array(20)).map((function(e,r){return{id:h.QJ.id(r),title:h.QJ.postTitle(r),coverUrl:h.QJ.image.cover(r),description:h.QJ.description(r)}}));function _(){return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(o.Z,{sx:{py:5,bgcolor:function(e){return"light"===e.palette.mode?"grey.200":"grey.800"}},children:(0,Z.jsx)(l.Z,{children:(0,Z.jsx)(x.Z,{heading:"Carousel",links:[{name:"Components",href:u.H.components},{name:"Carousel"}],moreLink:["https://react-slick.neostack.com"]})})}),(0,Z.jsxs)(l.Z,{sx:{my:10},children:[(0,Z.jsxs)(o.Z,{gap:3,display:"grid",gridTemplateColumns:{xs:"repeat(1, 1fr)",md:"repeat(2, 1fr)"},sx:{mb:3,alignItems:"flex-start"},children:[(0,Z.jsxs)(a.Z,{children:[(0,Z.jsx)(c.Z,{title:"Carousel Basic 1"}),(0,Z.jsx)(d.Z,{children:(0,Z.jsx)(m,{data:X.slice(0,4)})})]}),(0,Z.jsxs)(a.Z,{children:[(0,Z.jsx)(c.Z,{title:"Carousel Basic 2"}),(0,Z.jsx)(d.Z,{children:(0,Z.jsx)(j,{data:X.slice(4,8)})})]}),(0,Z.jsxs)(a.Z,{children:[(0,Z.jsx)(c.Z,{title:"Carousel Basic 3"}),(0,Z.jsx)(d.Z,{children:(0,Z.jsx)(y,{data:X.slice(8,12)})})]}),(0,Z.jsxs)(a.Z,{children:[(0,Z.jsx)(c.Z,{title:"Carousel Basic 4"}),(0,Z.jsx)(d.Z,{children:(0,Z.jsx)(I,{data:X.slice(12,16)})})]})]}),(0,Z.jsxs)(s.Z,{spacing:3,children:[(0,Z.jsxs)(a.Z,{children:[(0,Z.jsx)(c.Z,{title:"Carousel Thumbnail"}),(0,Z.jsx)(d.Z,{children:(0,Z.jsx)(O,{data:X.slice(0,8)})})]}),(0,Z.jsxs)(a.Z,{children:[(0,Z.jsx)(c.Z,{title:"Carousel Center Mode",subheader:"Customs shape & icon button"}),(0,Z.jsx)(d.Z,{children:(0,Z.jsx)(J,{data:X.slice(8,16)})})]}),(0,Z.jsxs)(a.Z,{children:[(0,Z.jsx)(c.Z,{title:"Carousel Animation"}),(0,Z.jsx)(d.Z,{children:(0,Z.jsx)(B,{data:X.slice(12,16)})})]})]})]})]})}function G(){return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(n.ql,{children:(0,Z.jsx)("title",{children:" Extra: Carousel"})}),(0,Z.jsx)(_,{})]})}},60220:function(e,r,t){t.d(r,{Z:function(){return g}});var n=t(29439),i=t(63366),o=t(87462),a=t(72791),s=t(28182),l=t(94419),c=t(66934),d=t(31402),u=t(74223),h=t(80184),x=(0,u.Z)((0,h.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person"),f=t(72800),v=["alt","children","className","component","imgProps","sizes","src","srcSet","variant"],p=(0,c.ZP)("div",{name:"MuiAvatar",slot:"Root",overridesResolver:function(e,r){var t=e.ownerState;return[r.root,r[t.variant],t.colorDefault&&r.colorDefault]}})((function(e){var r=e.theme,t=e.ownerState;return(0,o.Z)({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:r.typography.fontFamily,fontSize:r.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},"rounded"===t.variant&&{borderRadius:(r.vars||r).shape.borderRadius},"square"===t.variant&&{borderRadius:0},t.colorDefault&&(0,o.Z)({color:(r.vars||r).palette.background.default},r.vars?{backgroundColor:r.vars.palette.Avatar.defaultBg}:{backgroundColor:"light"===r.palette.mode?r.palette.grey[400]:r.palette.grey[600]}))})),Z=(0,c.ZP)("img",{name:"MuiAvatar",slot:"Img",overridesResolver:function(e,r){return r.img}})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),m=(0,c.ZP)(x,{name:"MuiAvatar",slot:"Fallback",overridesResolver:function(e,r){return r.fallback}})({width:"75%",height:"75%"});var g=a.forwardRef((function(e,r){var t=(0,d.Z)({props:e,name:"MuiAvatar"}),c=t.alt,u=t.children,x=t.className,g=t.component,j=void 0===g?"div":g,b=t.imgProps,y=t.sizes,w=t.src,C=t.srcSet,P=t.variant,k=void 0===P?"circular":P,R=(0,i.Z)(t,v),S=null,N=function(e){var r=e.crossOrigin,t=e.referrerPolicy,i=e.src,o=e.srcSet,s=a.useState(!1),l=(0,n.Z)(s,2),c=l[0],d=l[1];return a.useEffect((function(){if(i||o){d(!1);var e=!0,n=new Image;return n.onload=function(){e&&d("loaded")},n.onerror=function(){e&&d("error")},n.crossOrigin=r,n.referrerPolicy=t,n.src=i,o&&(n.srcset=o),function(){e=!1}}}),[r,t,i,o]),c}((0,o.Z)({},b,{src:w,srcSet:C})),I=w||C,L=I&&"error"!==N,M=(0,o.Z)({},t,{colorDefault:!L,component:j,variant:k}),T=function(e){var r=e.classes,t={root:["root",e.variant,e.colorDefault&&"colorDefault"],img:["img"],fallback:["fallback"]};return(0,l.Z)(t,f.$,r)}(M);return S=L?(0,h.jsx)(Z,(0,o.Z)({alt:c,src:w,srcSet:C,sizes:y,ownerState:M,className:T.img},b)):null!=u?u:I&&c?c[0]:(0,h.jsx)(m,{ownerState:M,className:T.fallback}),(0,h.jsx)(p,(0,o.Z)({as:j,ownerState:M,className:(0,s.Z)(T.root,x),ref:r},R,{children:S}))}))},72800:function(e,r,t){t.d(r,{$:function(){return o}});var n=t(75878),i=t(21217);function o(e){return(0,i.Z)("MuiAvatar",e)}var a=(0,n.Z)("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);r.Z=a},57621:function(e,r,t){t.d(r,{Z:function(){return Z}});var n=t(87462),i=t(63366),o=t(72791),a=t(28182),s=t(94419),l=t(66934),c=t(31402),d=t(27938),u=t(75878),h=t(21217);function x(e){return(0,h.Z)("MuiCard",e)}(0,u.Z)("MuiCard",["root"]);var f=t(80184),v=["className","raised"],p=(0,l.ZP)(d.Z,{name:"MuiCard",slot:"Root",overridesResolver:function(e,r){return r.root}})((function(){return{overflow:"hidden"}})),Z=o.forwardRef((function(e,r){var t=(0,c.Z)({props:e,name:"MuiCard"}),o=t.className,l=t.raised,d=void 0!==l&&l,u=(0,i.Z)(t,v),h=(0,n.Z)({},t,{raised:d}),Z=function(e){var r=e.classes;return(0,s.Z)({root:["root"]},x,r)}(h);return(0,f.jsx)(p,(0,n.Z)({className:(0,a.Z)(Z.root,o),elevation:d?8:void 0,ref:r,ownerState:h},u))}))},39504:function(e,r,t){t.d(r,{Z:function(){return p}});var n=t(87462),i=t(63366),o=t(72791),a=t(28182),s=t(94419),l=t(66934),c=t(31402),d=t(75878),u=t(21217);function h(e){return(0,u.Z)("MuiCardContent",e)}(0,d.Z)("MuiCardContent",["root"]);var x=t(80184),f=["className","component"],v=(0,l.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:function(e,r){return r.root}})((function(){return{padding:16,"&:last-child":{paddingBottom:24}}})),p=o.forwardRef((function(e,r){var t=(0,c.Z)({props:e,name:"MuiCardContent"}),o=t.className,l=t.component,d=void 0===l?"div":l,u=(0,i.Z)(t,f),p=(0,n.Z)({},t,{component:d}),Z=function(e){var r=e.classes;return(0,s.Z)({root:["root"]},h,r)}(p);return(0,x.jsx)(v,(0,n.Z)({as:d,className:(0,a.Z)(Z.root,o),ownerState:p,ref:r},u))}))}}]);
//# sourceMappingURL=3921.da6a1d44.chunk.js.map