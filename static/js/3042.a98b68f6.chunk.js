(self.webpackChunk_epochlabs=self.webpackChunk_epochlabs||[]).push([[3042],{32471:function(n,r,e){"use strict";e.d(r,{Z:function(){return d}});var t=e(1413),o=e(45987),i=e(72791),a=e(87087),c=e(13967),s=e(12065),u=e(64554);function l(){return{"4/3":"calc(100% / 4 * 3)","3/4":"calc(100% / 3 * 4)","6/4":"calc(100% / 6 * 4)","4/6":"calc(100% / 4 * 6)","16/9":"calc(100% / 16 * 9)","9/16":"calc(100% / 9 * 16)","21/9":"calc(100% / 21 * 9)","9/21":"calc(100% / 9 * 21)","1/1":"100%"}[arguments.length>0&&void 0!==arguments[0]?arguments[0]:"1/1"]}var f=e(80184),p=["ratio","overlay","disabledEffect","alt","src","afterLoad","delayTime","threshold","beforeLoad","delayMethod","placeholder","wrapperProps","scrollPosition","effect","visibleByDefault","wrapperClassName","useIntersectionObserver","sx"],d=(0,i.forwardRef)((function(n,r){var e=n.ratio,i=n.overlay,d=n.disabledEffect,v=void 0!==d&&d,h=n.alt,x=n.src,m=n.afterLoad,g=n.delayTime,b=n.threshold,y=n.beforeLoad,j=n.delayMethod,Z=n.placeholder,w=n.wrapperProps,C=n.scrollPosition,k=n.effect,S=void 0===k?"blur":k,L=n.visibleByDefault,T=n.wrapperClassName,M=n.useIntersectionObserver,I=n.sx,P=(0,o.Z)(n,p),A=(0,c.Z)(),_=!!i&&{"&:before":{content:"''",top:0,left:0,width:1,height:1,zIndex:1,position:"absolute",background:i||(0,s.Fq)(A.palette.grey[900],.48)}},U=(0,f.jsx)(u.Z,{component:a.LazyLoadImage,alt:h,src:x,afterLoad:m,delayTime:g,threshold:b,beforeLoad:y,delayMethod:j,placeholder:Z,wrapperProps:w,scrollPosition:C,visibleByDefault:L,effect:v?void 0:S,useIntersectionObserver:M,wrapperClassName:T||"component-image-wrapper",placeholderSrc:v?"/assets/transparent.png":"/assets/placeholder.svg",sx:(0,t.Z)({width:1,height:1,objectFit:"cover",verticalAlign:"bottom"},!!e&&{top:0,left:0,position:"absolute"})});return(0,f.jsx)(u.Z,(0,t.Z)((0,t.Z)({ref:r,component:"span",className:"component-image",sx:(0,t.Z)((0,t.Z)((0,t.Z)({overflow:"hidden",position:"relative",verticalAlign:"bottom",display:"inline-block"},!!e&&{width:1}),{},{"& span.component-image-wrapper":(0,t.Z)({width:1,height:1,verticalAlign:"bottom",backgroundSize:"cover !important"},!!e&&{pt:l(e)})},_),I)},P),{},{children:U}))}))},13042:function(n,r,e){"use strict";e.r(r),e.d(r,{default:function(){return F}});var t=e(6907),o=e(45812),i=e.n(o),a=e(50533),c=e(36314),s=e(94721),u=e(89164),l=e(64554),f=e(4567),p=e(1413),d=e(45358),v=e(66934),h=e(12065),x=e(38887),m=e(74744),g=e(82486),b=e(80184),y=(0,v.ZP)("div")((function(n){return{position:"relative",padding:n.theme.spacing(10,0)}})),j=(0,v.ZP)("div")((function(n){var r=n.theme;return(0,p.Z)({top:0,left:0,right:0,bottom:0,zIndex:-1,position:"absolute",transform:"scaleX(-1)"},(0,m.v3)({color:(0,h.Fq)(r.palette.background.default,.9),imgUrl:"/assets/background/overlay_4.jpg"}))}));function Z(){var n=(0,x.F)("up","sm");return(0,b.jsxs)(y,{children:[(0,b.jsxs)(u.Z,{component:g.NM,sx:{display:{md:"flex"},justifyContent:{md:"space-between"}},children:[(0,b.jsxs)(c.Z,{spacing:3,children:[(0,b.jsx)(d.m.div,{variants:(0,g.EU)().inUp,children:(0,b.jsx)(f.Z,{variant:"h3",component:"h1",children:"Components"})}),(0,b.jsx)(d.m.div,{variants:(0,g.EU)().inUp,children:(0,b.jsxs)(f.Z,{sx:{color:"text.secondary"},children:["With huge resource pack making deployment",(0,b.jsx)("br",{})," easy and expanding more effectively"]})})]}),n&&(0,b.jsx)(d.m.div,{variants:(0,g.EU)().inDown,children:(0,b.jsx)(l.Z,{component:"img",alt:"illustrations characters",src:"/assets/illustrations/characters/character_7.png",sx:{maxWidth:320}})})]}),(0,b.jsx)(j,{})]})}var w=e(27938),C=e(66647),k=e(32471),S=e(83854);function L(n){var r=n.item,e=r.name,t=r.icon,o=r.href;return(0,b.jsxs)(w.Z,{component:S.r,href:o,variant:"outlined",sx:{overflow:"hidden",textDecoration:"none",borderColor:function(n){return(0,h.Fq)(n.palette.grey[500],.08)}},children:[(0,b.jsx)(C.Z,{component:d.m.div,whileHover:"hover",sx:{p:2.5,borderRadius:0,color:"text.secondary",bgcolor:function(n){return(0,h.Fq)(n.palette.grey[500],.04)}},children:(0,b.jsx)(d.m.div,{variants:(0,g.U6)(1.1),transition:(0,g.BN)(),children:(0,b.jsx)(k.Z,{alt:e,src:t})})}),(0,b.jsx)(f.Z,{variant:"subtitle2",sx:{p:2,textAlign:"center"},children:e})]})}function T(n){return n.toLowerCase().replace(/\s+/g,"_").replace(/[^a-z0-9_]/g,"")}var M=function(n,r){return"/components/".concat(n,"/").concat(r.toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,""))},I=["Colors","Typography","Shadows","Grid","Icons"].map((function(n){return{name:n,href:M("foundation",n),icon:"/assets/icons/components/ic_".concat(T(n),".svg")}})),P=["Accordion","Alert","Autocomplete","Avatar","Badge","Breadcrumbs","Buttons","Checkbox","Chip","Dialog","List","Menu","Pagination","Pickers","Popover","Progress","Radio Button","Rating","Slider","Stepper","Switch","Table","Tabs","Textfield","Timeline","Tooltip","Transfer List","Tree View","Data Grid"].map((function(n){return{name:n,href:M("mui",n),icon:"/assets/icons/components/ic_".concat(T(n),".svg")}})),A=["Chart","Map","Editor","Copy to clipboard","Upload","Carousel","Multi language","Animate","Mega Menu","Form Validation","Lightbox","Image","Label","Scroll","Scroll Progress","Snackbar","Text Max Line","Navigation Bar","Organization Chart","Markdown"].map((function(n){return{name:n,href:M("extra",n),icon:"/assets/icons/components/ic_extra_".concat(T(n),".svg")}}));function _(){return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(Z,{}),(0,b.jsxs)(u.Z,{sx:{pt:10,pb:15},children:[(0,b.jsxs)(c.Z,{spacing:3,children:[(0,b.jsxs)(c.Z,{spacing:1,children:[(0,b.jsx)(f.Z,{variant:"h5",children:"Foundation"}),(0,b.jsx)(f.Z,{variant:"body2",sx:{color:"text.secondary"},children:"Colors, Typography, Shadows\u2026"})]}),(0,b.jsx)(U,{children:I.map((function(n){return(0,b.jsx)(L,{item:n},n.name)}))})]}),(0,b.jsx)(s.Z,{sx:{borderStyle:"dashed",my:8}}),(0,b.jsxs)(c.Z,{spacing:3,children:[(0,b.jsxs)(c.Z,{spacing:1,children:[(0,b.jsx)(f.Z,{variant:"h5",children:"MUI"}),(0,b.jsxs)(f.Z,{variant:"body2",sx:{color:"text.secondary"},children:["Components from"," ",(0,b.jsx)(a.Z,{href:"https://mui.com/components/",target:"_blank",rel:"noopener",children:"Material UI"}),"."]}),(0,b.jsx)(f.Z,{variant:"caption",sx:{color:"text.secondary"},children:(0,b.jsxs)("i",{children:["Some advanced components from MUI X will not be included. So you need to purchase a separate",(0,b.jsx)(a.Z,{href:"https://mui.com/pricing/",target:"_blank",rel:"noopener",sx:{ml:.5},children:"license"}),"."]})})]}),(0,b.jsx)(U,{children:i()(P,["name"],["asc"]).map((function(n){return(0,b.jsx)(L,{item:n},n.name)}))})]}),(0,b.jsx)(s.Z,{sx:{borderStyle:"dashed",my:8}}),(0,b.jsxs)(c.Z,{spacing:3,children:[(0,b.jsxs)(c.Z,{spacing:1,children:[(0,b.jsx)(f.Z,{variant:"h5",children:"Extra Components"}),(0,b.jsx)(f.Z,{variant:"body2",sx:{color:"text.secondary"},children:"Some custom components / use 3rd party dependencies (chart, map, editor\u2026)."})]}),(0,b.jsx)(U,{children:A.map((function(n){return(0,b.jsx)(L,{item:n},n.name)}))})]})]})]})}function U(n){var r=n.children;return(0,b.jsx)(l.Z,{display:"grid",gridTemplateColumns:{xs:"repeat(2, 1fr)",sm:"repeat(3, 1fr)",md:"repeat(4, 1fr)",lg:"repeat(6, 1fr)"},gap:2.5,children:r})}function F(){return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(t.ql,{children:(0,b.jsx)("title",{children:" Components"})}),(0,b.jsx)(_,{})]})}},68950:function(n){n.exports=function(n,r){for(var e=-1,t=null==n?0:n.length,o=Array(t);++e<t;)o[e]=r(n[e],e,n);return o}},87927:function(n,r,e){var t=e(15358),o=e(67056)(t);n.exports=o},15358:function(n,r,e){var t=e(85099),o=e(12742);n.exports=function(n,r){return n&&t(n,r,o)}},98667:function(n,r,e){var t=e(43082),o=e(69793);n.exports=function(n,r){for(var e=0,i=(r=t(r,n)).length;null!=n&&e<i;)n=n[o(r[e++])];return e&&e==i?n:void 0}},90529:function(n){n.exports=function(n,r){return null!=n&&r in Object(n)}},8856:function(n,r,e){var t=e(22854),o=e(71848);n.exports=function(n,r,e,i){var a=e.length,c=a,s=!i;if(null==n)return!c;for(n=Object(n);a--;){var u=e[a];if(s&&u[2]?u[1]!==n[u[0]]:!(u[0]in n))return!1}for(;++a<c;){var l=(u=e[a])[0],f=n[l],p=u[1];if(s&&u[2]){if(void 0===f&&!(l in n))return!1}else{var d=new t;if(i)var v=i(f,p,l,n,r,d);if(!(void 0===v?o(p,f,3,i,d):v))return!1}}return!0}},56025:function(n,r,e){var t=e(97080),o=e(24322),i=e(2100),a=e(93629),c=e(10038);n.exports=function(n){return"function"==typeof n?n:null==n?i:"object"==typeof n?a(n)?o(n[0],n[1]):t(n):c(n)}},53849:function(n,r,e){var t=e(87927),o=e(21473);n.exports=function(n,r){var e=-1,i=o(n)?Array(n.length):[];return t(n,(function(n,t,o){i[++e]=r(n,t,o)})),i}},97080:function(n,r,e){var t=e(8856),o=e(79091),i=e(50284);n.exports=function(n){var r=o(n);return 1==r.length&&r[0][2]?i(r[0][0],r[0][1]):function(e){return e===n||t(e,n,r)}}},24322:function(n,r,e){var t=e(71848),o=e(26181),i=e(75658),a=e(25823),c=e(25072),s=e(50284),u=e(69793);n.exports=function(n,r){return a(n)&&c(r)?s(u(n),r):function(e){var a=o(e,n);return void 0===a&&a===r?i(e,n):t(r,a,3)}}},93226:function(n,r,e){var t=e(68950),o=e(98667),i=e(56025),a=e(53849),c=e(19179),s=e(16194),u=e(94480),l=e(2100),f=e(93629);n.exports=function(n,r,e){r=r.length?t(r,(function(n){return f(n)?function(r){return o(r,1===n.length?n[0]:n)}:n})):[l];var p=-1;r=t(r,s(i));var d=a(n,(function(n,e,o){return{criteria:t(r,(function(r){return r(n)})),index:++p,value:n}}));return c(d,(function(n,r){return u(n,r,e)}))}},9586:function(n){n.exports=function(n){return function(r){return null==r?void 0:r[n]}}},4084:function(n,r,e){var t=e(98667);n.exports=function(n){return function(r){return t(r,n)}}},19179:function(n){n.exports=function(n,r){var e=n.length;for(n.sort(r);e--;)n[e]=n[e].value;return n}},2446:function(n,r,e){var t=e(87197),o=e(68950),i=e(93629),a=e(70152),c=t?t.prototype:void 0,s=c?c.toString:void 0;n.exports=function n(r){if("string"==typeof r)return r;if(i(r))return o(r,n)+"";if(a(r))return s?s.call(r):"";var e=r+"";return"0"==e&&1/r==-Infinity?"-0":e}},43082:function(n,r,e){var t=e(93629),o=e(25823),i=e(10170),a=e(63518);n.exports=function(n,r){return t(n)?n:o(n,r)?[n]:i(a(n))}},88558:function(n,r,e){var t=e(70152);n.exports=function(n,r){if(n!==r){var e=void 0!==n,o=null===n,i=n===n,a=t(n),c=void 0!==r,s=null===r,u=r===r,l=t(r);if(!s&&!l&&!a&&n>r||a&&c&&u&&!s&&!l||o&&c&&u||!e&&u||!i)return 1;if(!o&&!a&&!l&&n<r||l&&e&&i&&!o&&!a||s&&e&&i||!c&&i||!u)return-1}return 0}},94480:function(n,r,e){var t=e(88558);n.exports=function(n,r,e){for(var o=-1,i=n.criteria,a=r.criteria,c=i.length,s=e.length;++o<c;){var u=t(i[o],a[o]);if(u)return o>=s?u:u*("desc"==e[o]?-1:1)}return n.index-r.index}},67056:function(n,r,e){var t=e(21473);n.exports=function(n,r){return function(e,o){if(null==e)return e;if(!t(e))return n(e,o);for(var i=e.length,a=r?i:-1,c=Object(e);(r?a--:++a<i)&&!1!==o(c[a],a,c););return e}}},79091:function(n,r,e){var t=e(25072),o=e(12742);n.exports=function(n){for(var r=o(n),e=r.length;e--;){var i=r[e],a=n[i];r[e]=[i,a,t(a)]}return r}},86417:function(n,r,e){var t=e(43082),o=e(34963),i=e(93629),a=e(26800),c=e(24635),s=e(69793);n.exports=function(n,r,e){for(var u=-1,l=(r=t(r,n)).length,f=!1;++u<l;){var p=s(r[u]);if(!(f=null!=n&&e(n,p)))break;n=n[p]}return f||++u!=l?f:!!(l=null==n?0:n.length)&&c(l)&&a(p,l)&&(i(n)||o(n))}},25823:function(n,r,e){var t=e(93629),o=e(70152),i=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,a=/^\w*$/;n.exports=function(n,r){if(t(n))return!1;var e=typeof n;return!("number"!=e&&"symbol"!=e&&"boolean"!=e&&null!=n&&!o(n))||(a.test(n)||!i.test(n)||null!=r&&n in Object(r))}},25072:function(n,r,e){var t=e(8092);n.exports=function(n){return n===n&&!t(n)}},50284:function(n){n.exports=function(n,r){return function(e){return null!=e&&(e[n]===r&&(void 0!==r||n in Object(e)))}}},14634:function(n,r,e){var t=e(49151);n.exports=function(n){var r=t(n,(function(n){return 500===e.size&&e.clear(),n})),e=r.cache;return r}},10170:function(n,r,e){var t=e(14634),o=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,i=/\\(\\)?/g,a=t((function(n){var r=[];return 46===n.charCodeAt(0)&&r.push(""),n.replace(o,(function(n,e,t,o){r.push(t?o.replace(i,"$1"):e||n)})),r}));n.exports=a},69793:function(n,r,e){var t=e(70152);n.exports=function(n){if("string"==typeof n||t(n))return n;var r=n+"";return"0"==r&&1/n==-Infinity?"-0":r}},26181:function(n,r,e){var t=e(98667);n.exports=function(n,r,e){var o=null==n?void 0:t(n,r);return void 0===o?e:o}},75658:function(n,r,e){var t=e(90529),o=e(86417);n.exports=function(n,r){return null!=n&&o(n,r,t)}},70152:function(n,r,e){var t=e(39066),o=e(43141);n.exports=function(n){return"symbol"==typeof n||o(n)&&"[object Symbol]"==t(n)}},49151:function(n,r,e){var t=e(78059);function o(n,r){if("function"!=typeof n||null!=r&&"function"!=typeof r)throw new TypeError("Expected a function");var e=function e(){var t=arguments,o=r?r.apply(this,t):t[0],i=e.cache;if(i.has(o))return i.get(o);var a=n.apply(this,t);return e.cache=i.set(o,a)||i,a};return e.cache=new(o.Cache||t),e}o.Cache=t,n.exports=o},45812:function(n,r,e){var t=e(93226),o=e(93629);n.exports=function(n,r,e,i){return null==n?[]:(o(r)||(r=null==r?[]:[r]),o(e=i?void 0:e)||(e=null==e?[]:[e]),t(n,r,e))}},10038:function(n,r,e){var t=e(9586),o=e(4084),i=e(25823),a=e(69793);n.exports=function(n){return i(n)?t(a(n)):o(n)}},63518:function(n,r,e){var t=e(2446);n.exports=function(n){return null==n?"":t(n)}}}]);
//# sourceMappingURL=3042.a98b68f6.chunk.js.map