"use strict";(self.webpackChunk_epochlabs=self.webpackChunk_epochlabs||[]).push([[313],{50933:function(e,t,n){n.d(t,{Z:function(){return p}});var i=n(1413),r=n(45987),a=n(64554),l=n(50533),o=n(36314),s=n(4567),c=n(93517),u=n(83854),d=n(80184);function h(e){var t=e.link,n=e.activeLast,r=e.disabled,o=t.name,s=t.href,c=t.icon,h=(0,i.Z)({typography:"body2",alignItems:"center",color:"text.primary",display:"inline-flex"},r&&!n&&{cursor:"default",pointerEvents:"none",color:"text.disabled"}),f=(0,d.jsxs)(d.Fragment,{children:[c&&(0,d.jsx)(a.Z,{component:"span",sx:{mr:1,display:"inherit","& svg":{width:20,height:20}},children:c}),o]});return s?(0,d.jsx)(l.Z,{component:u.r,href:s,sx:h,children:f}):(0,d.jsxs)(a.Z,{sx:h,children:[" ",f," "]})}var f=["links","action","heading","moreLink","activeLast","sx"];function p(e){var t=e.links,n=e.action,u=e.heading,p=e.moreLink,m=e.activeLast,Z=e.sx,g=(0,r.Z)(e,f),x=t[t.length-1].name;return(0,d.jsxs)(a.Z,{sx:(0,i.Z)({},Z),children:[(0,d.jsxs)(o.Z,{direction:"row",alignItems:"center",children:[(0,d.jsxs)(a.Z,{sx:{flexGrow:1},children:[u&&(0,d.jsx)(s.Z,{variant:"h4",gutterBottom:!0,children:u}),!!t.length&&(0,d.jsx)(c.Z,(0,i.Z)((0,i.Z)({separator:(0,d.jsx)(y,{})},g),{},{children:t.map((function(e){return(0,d.jsx)(h,{link:e,activeLast:m,disabled:e.name===x},e.name||"")}))}))]}),n&&(0,d.jsxs)(a.Z,{sx:{flexShrink:0},children:[" ",n," "]})]}),!!p&&(0,d.jsx)(a.Z,{sx:{mt:2},children:p.map((function(e){return(0,d.jsx)(l.Z,{href:e,variant:"body2",target:"_blank",rel:"noopener",sx:{display:"table"},children:e},e)}))})]})}function y(){return(0,d.jsx)(a.Z,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})}},94857:function(e,t,n){n.r(t),n.d(t,{default:function(){return S}});var i=n(6907),r=n(1413),a=n(29439),l=n(72791),o=n(16002),s=n(64554),c=n(85771),u=n(13034),d=n(89164),h=n(48550),f=n(4567),p=n(46314),y=n(38072),m=n(66964),Z=n(44e3),g=n(50933),x=n(31562),b=n(80184),v=["Option 1","Option 2"];function k(){var e=(0,l.useState)(v[0]),t=(0,a.Z)(e,2),n=t[0],i=t[1],k=(0,l.useState)(""),S=(0,a.Z)(k,2),w=S[0],C=S[1];return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(s.Z,{sx:{py:5,bgcolor:function(e){return"light"===e.palette.mode?"grey.200":"grey.800"}},children:(0,b.jsx)(d.Z,{children:(0,b.jsx)(g.Z,{heading:"Autocomplete",links:[{name:"Components",href:y.H.components},{name:"Autocomplete"}],moreLink:["https://mui.com/components/autocomplete"]})})}),(0,b.jsx)(d.Z,{sx:{my:10},children:(0,b.jsxs)(o.ZP,{columns:{xs:1,sm:2,md:3},spacing:3,children:[(0,b.jsx)(x.Z,{title:"Combo box",children:(0,b.jsx)(p.Z,{fullWidth:!0,options:j,getOptionLabel:function(e){return e.title},renderInput:function(e){return(0,b.jsx)(h.Z,(0,r.Z)((0,r.Z)({},e),{},{label:"Combo box",margin:"none"}))},renderOption:function(e,t){return(0,l.createElement)("li",(0,r.Z)((0,r.Z)({},e),{},{key:t.title}),t.title)}})}),(0,b.jsx)(x.Z,{title:"Country Select",children:(0,b.jsx)(p.Z,{fullWidth:!0,autoHighlight:!0,options:m.h,getOptionLabel:function(e){return e.label},renderInput:function(e){return(0,b.jsx)(h.Z,(0,r.Z)((0,r.Z)({},e),{},{label:"Choose a country",inputProps:(0,r.Z)((0,r.Z)({},e.inputProps),{},{autoComplete:"new-password"})}))},renderOption:function(e,t){return t.label?(0,l.createElement)("li",(0,r.Z)((0,r.Z)({},e),{},{key:t.label}),(0,b.jsx)(Z.Z,{icon:"circle-flags:".concat(t.code.toLowerCase()),width:28,sx:{mr:1}},t.label),t.label," (",t.code,") +",t.phone):null}})}),(0,b.jsxs)(x.Z,{title:"Controllable states",sx:{flexDirection:"column"},children:[(0,b.jsx)(p.Z,{fullWidth:!0,value:n,options:v,onChange:function(e,t){i(t)},inputValue:w,onInputChange:function(e,t){C(t)},getOptionLabel:function(e){return e},renderInput:function(e){return(0,b.jsx)(h.Z,(0,r.Z)((0,r.Z)({},e),{},{label:"Controllable"}))},renderOption:function(e,t){return(0,l.createElement)("li",(0,r.Z)((0,r.Z)({},e),{},{key:t}),t)}}),(0,b.jsx)(f.Z,{variant:"body2",children:"value: ".concat(null!==n?"'".concat(n,"'"):"null")}),(0,b.jsx)(f.Z,{variant:"body2",children:"inputValue: '".concat(w,"'")})]}),(0,b.jsxs)(x.Z,{title:"Free solo",children:[(0,b.jsx)(p.Z,{fullWidth:!0,freeSolo:!0,options:j.map((function(e){return e.title})),getOptionLabel:function(e){return e},renderInput:function(e){return(0,b.jsx)(h.Z,(0,r.Z)((0,r.Z)({},e),{},{label:"freeSolo"}))},renderOption:function(e,t){return(0,l.createElement)("li",(0,r.Z)((0,r.Z)({},e),{},{key:t}),t)}}),(0,b.jsx)(p.Z,{fullWidth:!0,freeSolo:!0,disableClearable:!0,options:j.map((function(e){return e.title})),getOptionLabel:function(e){return e},renderInput:function(e){return(0,b.jsx)(h.Z,(0,r.Z)((0,r.Z)({},e),{},{label:"Search input",InputProps:(0,r.Z)((0,r.Z)({},e.InputProps),{},{type:"search"})}))},renderOption:function(e,t){return(0,l.createElement)("li",(0,r.Z)((0,r.Z)({},e),{},{key:t}),t)}})]}),(0,b.jsx)(x.Z,{title:"Multiple Values",children:(0,b.jsx)(p.Z,{fullWidth:!0,multiple:!0,limitTags:3,options:j,getOptionLabel:function(e){return e.title},defaultValue:j.slice(0,8),renderInput:function(e){return(0,b.jsx)(h.Z,(0,r.Z)((0,r.Z)({},e),{},{label:"filterSelectedOptions",placeholder:"Favorites"}))},renderOption:function(e,t){return(0,l.createElement)("li",(0,r.Z)((0,r.Z)({},e),{},{key:t.title}),t.title)},renderTags:function(e,t){return e.map((function(e,n){return(0,l.createElement)(c.Z,(0,r.Z)((0,r.Z)({},t({index:n})),{},{key:e.title,label:e.title,size:"small",variant:"soft"}))}))}})}),(0,b.jsx)(x.Z,{title:"Checkboxes",children:(0,b.jsx)(p.Z,{fullWidth:!0,multiple:!0,options:j,disableCloseOnSelect:!0,getOptionLabel:function(e){return e.title},renderInput:function(e){return(0,b.jsx)(h.Z,(0,r.Z)((0,r.Z)({},e),{},{label:"Checkboxes",placeholder:"Favorites"}))},renderOption:function(e,t,n){var i=n.selected;return(0,l.createElement)("li",(0,r.Z)((0,r.Z)({},e),{},{key:t.title}),(0,b.jsx)(u.Z,{size:"small",disableRipple:!0,checked:i},t.title),t.title)},renderTags:function(e,t){return e.map((function(e,n){return(0,l.createElement)(c.Z,(0,r.Z)((0,r.Z)({},t({index:n})),{},{key:e.title,label:e.title,size:"small"}))}))}})}),(0,b.jsxs)(x.Z,{title:"Sizes",children:[(0,b.jsx)(p.Z,{fullWidth:!0,options:j,getOptionLabel:function(e){return e.title},defaultValue:j[13],renderInput:function(e){return(0,b.jsx)(h.Z,(0,r.Z)((0,r.Z)({},e),{},{label:"Size Medium",placeholder:"Favorites"}))},renderOption:function(e,t){return(0,l.createElement)("li",(0,r.Z)((0,r.Z)({},e),{},{key:t.title}),t.title)}}),(0,b.jsx)(p.Z,{fullWidth:!0,multiple:!0,size:"small",options:j,getOptionLabel:function(e){return e.title},defaultValue:[j[13]],renderInput:function(e){return(0,b.jsx)(h.Z,(0,r.Z)((0,r.Z)({},e),{},{label:"Size small",placeholder:"Favorites"}))},renderOption:function(e,t){return(0,l.createElement)("li",(0,r.Z)((0,r.Z)({},e),{},{key:t.title}),t.title)},renderTags:function(e,t){return e.map((function(e,n){return(0,l.createElement)(c.Z,(0,r.Z)((0,r.Z)({},t({index:n})),{},{key:e.title,label:e.title,size:"small",color:"info",variant:"soft"}))}))}})]})]})})]})}var j=[{title:"The Shawshank Redemption",year:1994},{title:"The Godfather",year:1972},{title:"The Godfather: Part II",year:1974},{title:"The Dark Knight",year:2008},{title:"12 Angry Men",year:1957},{title:"Schindler's List",year:1993},{title:"Pulp Fiction",year:1994},{title:"The Lord of the Rings: The Return of the King",year:2003},{title:"The Good, the Bad and the Ugly",year:1966},{title:"Fight Club",year:1999},{title:"The Lord of the Rings: The Fellowship of the Ring",year:2001},{title:"Star Wars: Episode V - The Empire Strikes Back",year:1980},{title:"Forrest Gump",year:1994},{title:"Inception",year:2010},{title:"The Lord of the Rings: The Two Towers",year:2002},{title:"One Flew Over the Cuckoo's Nest",year:1975},{title:"Goodfellas",year:1990},{title:"The Matrix",year:1999},{title:"Seven Samurai",year:1954},{title:"Star Wars: Episode IV - A New Hope",year:1977},{title:"City of God",year:2002},{title:"Se7en",year:1995},{title:"The Silence of the Lambs",year:1991},{title:"It's a Wonderful Life",year:1946},{title:"Life Is Beautiful",year:1997},{title:"The Usual Suspects",year:1995},{title:"L\xe9on: The Professional",year:1994},{title:"Spirited Away",year:2001},{title:"Saving Private Ryan",year:1998},{title:"Once Upon a Time in the West",year:1968},{title:"American History X",year:1998},{title:"Interstellar",year:2014},{title:"Casablanca",year:1942},{title:"City Lights",year:1931},{title:"Psycho",year:1960},{title:"The Green Mile",year:1999},{title:"The Intouchables",year:2011},{title:"Modern Times",year:1936},{title:"Raiders of the Lost Ark",year:1981},{title:"Rear Window",year:1954},{title:"The Pianist",year:2002},{title:"The Departed",year:2006},{title:"Terminator 2: Judgment Day",year:1991},{title:"Back to the Future",year:1985},{title:"Whiplash",year:2014},{title:"Gladiator",year:2e3},{title:"Memento",year:2e3},{title:"The Prestige",year:2006},{title:"The Lion King",year:1994},{title:"Apocalypse Now",year:1979},{title:"Alien",year:1979},{title:"Sunset Boulevard",year:1950},{title:"Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",year:1964},{title:"The Great Dictator",year:1940},{title:"Cinema Paradiso",year:1988},{title:"The Lives of Others",year:2006},{title:"Grave of the Fireflies",year:1988},{title:"Paths of Glory",year:1957},{title:"Django Unchained",year:2012},{title:"The Shining",year:1980},{title:"WALL\xb7E",year:2008},{title:"American Beauty",year:1999},{title:"The Dark Knight Rises",year:2012},{title:"Princess Mononoke",year:1997},{title:"Aliens",year:1986},{title:"Oldboy",year:2003},{title:"Once Upon a Time in America",year:1984},{title:"Witness for the Prosecution",year:1957},{title:"Das Boot",year:1981},{title:"Citizen Kane",year:1941},{title:"North by Northwest",year:1959},{title:"Vertigo",year:1958},{title:"Star Wars: Episode VI - Return of the Jedi",year:1983},{title:"Reservoir Dogs",year:1992},{title:"Braveheart",year:1995},{title:"M",year:1931},{title:"Requiem for a Dream",year:2e3},{title:"Am\xe9lie",year:2001},{title:"A Clockwork Orange",year:1971},{title:"Like Stars on Earth",year:2007},{title:"Taxi Driver",year:1976},{title:"Lawrence of Arabia",year:1962},{title:"Double Indemnity",year:1944},{title:"Eternal Sunshine of the Spotless Mind",year:2004},{title:"Amadeus",year:1984},{title:"To Kill a Mockingbird",year:1962},{title:"Toy Story 3",year:2010},{title:"Logan",year:2017},{title:"Full Metal Jacket",year:1987},{title:"Dangal",year:2016},{title:"The Sting",year:1973},{title:"2001: A Space Odyssey",year:1968},{title:"Singin' in the Rain",year:1952},{title:"Toy Story",year:1995},{title:"Bicycle Thieves",year:1948},{title:"The Kid",year:1921},{title:"Inglourious Basterds",year:2009},{title:"Snatch",year:2e3},{title:"3 Idiots",year:2009},{title:"Monty Python and the Holy Grail",year:1975}];function S(){return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(i.ql,{children:(0,b.jsx)("title",{children:" MUI: Autocomplete"})}),(0,b.jsx)(k,{})]})}},31562:function(e,t,n){n.d(t,{Z:function(){return d}});var i=n(1413),r=n(45987),a=n(12065),l=n(27938),o=n(9585),s=n(36314),c=n(80184),u=["title","sx","children"];function d(e){var t=e.title,n=e.sx,d=e.children,h=(0,r.Z)(e,u);return(0,c.jsxs)(l.Z,{variant:"outlined",sx:{borderRadius:1.5,borderStyle:"dashed",bgcolor:function(e){return(0,a.Fq)(e.palette.grey[500],.04)}},children:[t&&(0,c.jsx)(o.Z,{title:t}),(0,c.jsx)(s.Z,(0,i.Z)((0,i.Z)({spacing:3,direction:"row",alignItems:"center",justifyContent:"center",flexWrap:"wrap",sx:(0,i.Z)({p:5,minHeight:180},n)},h),{},{children:d}))]})}},16002:function(e,t,n){n.d(t,{ZP:function(){return w}});var i=n(93433),r=n(29439),a=n(63366),l=n(87462),o=n(94419),s=n(54164),c=n(66934),u=n(31402),d=n(51184),h=n(45682),f=n(82466),p=n(62876),y=n(6117),m=n(28182),Z=n(72791),g=n(21217);function x(e){return(0,g.Z)("MuiMasonry",e)}(0,n(75878).Z)("MuiMasonry",["root"]);var b=n(80184),v=["children","className","component","columns","spacing","defaultColumns","defaultHeight","defaultSpacing"],k=function(e){return Number(e.replace("px",""))},j={flexBasis:"100%",width:0,margin:0,padding:0},S=(0,c.ZP)("div",{name:"MuiMasonry",slot:"Root",overridesResolver:function(e,t){return[t.root]}})((function(e){var t=e.ownerState,n=e.theme,i={width:"100%",display:"flex",flexFlow:"column wrap",alignContent:"flex-start",boxSizing:"border-box","& > *":{boxSizing:"border-box"}},r={};if(t.isSSR){for(var a={},o=k(n.spacing(t.defaultSpacing)),s=1;s<=t.defaultColumns;s+=1)a["&:nth-of-type(".concat(t.defaultColumns,"n+").concat(s%t.defaultColumns,")")]={order:s};return r.height=t.defaultHeight,r.margin=-o/2,r["& > *"]=(0,l.Z)({},i["& > *"],a,{margin:o/2,width:"calc(".concat((100/t.defaultColumns).toFixed(2),"% - ").concat(o,"px)")}),(0,l.Z)({},i,r)}var c=(0,d.P$)({values:t.spacing,breakpoints:n.breakpoints.values}),u=(0,h.hB)(n);i=(0,f.Z)(i,(0,d.k9)({theme:n},c,(function(e){var n;if("string"===typeof e&&!Number.isNaN(Number(e))||"number"===typeof e){var i=Number(e);n=(0,h.NA)(u,i)}else n=e;return(0,l.Z)({margin:"calc(0px - (".concat(n," / 2))"),"& > *":{margin:"calc(".concat(n," / 2)")}},t.maxColumnHeight&&{height:"number"===typeof n?Math.ceil(t.maxColumnHeight+k(n)):"calc(".concat(t.maxColumnHeight,"px + ").concat(n,")")})})));var p=(0,d.P$)({values:t.columns,breakpoints:n.breakpoints.values});return i=(0,f.Z)(i,(0,d.k9)({theme:n},p,(function(e){var t=Number(e),n="".concat((100/t).toFixed(2),"%"),i="string"===typeof c&&!Number.isNaN(Number(c))||"number"===typeof c?(0,h.NA)(u,Number(c)):"0px";return{"& > *":{width:"calc(".concat(n," - ").concat(i,")")}}}))),"object"===typeof c&&(i=(0,f.Z)(i,(0,d.k9)({theme:n},c,(function(e,t){if(t){var n=Number(e),i=Object.keys(p).pop(),r=(0,h.NA)(u,n),a="object"===typeof p?p[t]||p[i]:p,l="".concat((100/a).toFixed(2),"%");return{"& > *":{width:"calc(".concat(l," - ").concat(r,")")}}}return null})))),i})),w=Z.forwardRef((function(e,t){var n=(0,u.Z)({props:e,name:"MuiMasonry"}),c=n.children,d=n.className,h=n.component,f=void 0===h?"div":h,g=n.columns,w=void 0===g?4:g,C=n.spacing,T=void 0===C?1:C,L=n.defaultColumns,O=n.defaultHeight,I=n.defaultSpacing,N=(0,a.Z)(n,v),R=Z.useRef(),F=Z.useState(),M=(0,r.Z)(F,2),E=M[0],P=M[1],A=!E&&O&&void 0!==L&&void 0!==I,B=Z.useState(A?L-1:0),W=(0,r.Z)(B,2),z=W[0],H=W[1],D=(0,l.Z)({},n,{spacing:T,columns:w,maxColumnHeight:E,defaultColumns:L,defaultHeight:O,defaultSpacing:I,isSSR:A}),G=function(e){var t=e.classes;return(0,o.Z)({root:["root"]},x,t)}(D),V=function(e){if(R.current&&e&&0!==e.length){var t=R.current,n=R.current.firstChild,r=t.clientWidth,a=n.clientWidth;if(0!==r&&0!==a){var l=window.getComputedStyle(n),o=k(l.marginLeft),c=k(l.marginRight),u=Math.round(r/(a+o+c)),d=new Array(u).fill(0),h=!1;t.childNodes.forEach((function(e){if(e.nodeType===Node.ELEMENT_NODE&&"line-break"!==e.dataset.class&&!h){var t=window.getComputedStyle(e),n=k(t.marginTop),r=k(t.marginBottom),a=k(t.height)?Math.ceil(k(t.height))+n+r:0;if(0!==a){for(var l=0;l<e.childNodes.length;l+=1){var o=e.childNodes[l];if("IMG"===o.tagName&&0===o.clientHeight){h=!0;break}}if(!h){var s=d.indexOf(Math.min.apply(Math,(0,i.Z)(d)));d[s]+=a;var c=s+1;e.style.order=c}}else h=!0}})),h||s.flushSync((function(){P(Math.max.apply(Math,(0,i.Z)(d))),H(u>0?u-1:0)}))}}};(0,p.Z)((function(){if("undefined"!==typeof ResizeObserver){var e,t=new ResizeObserver((function(){e=window.requestAnimationFrame(V)}));return R.current&&R.current.childNodes.forEach((function(e){t.observe(e)})),function(){e&&window.cancelAnimationFrame(e),t&&t.disconnect()}}}),[w,T,c]);var q=(0,y.Z)(t,R),K=new Array(z).fill("").map((function(e,t){return(0,b.jsx)("span",{"data-class":"line-break",style:(0,l.Z)({},j,{order:t+1})},t)}));return(0,b.jsxs)(S,(0,l.Z)({as:f,className:(0,m.Z)(G.root,d),ref:q,ownerState:D},N,{children:[c,K]}))}))},97278:function(e,t,n){n.d(t,{Z:function(){return v}});var i=n(29439),r=n(63366),a=n(87462),l=n(72791),o=n(28182),s=n(94419),c=n(14036),u=n(66934),d=n(98278),h=n(52930),f=n(95080),p=n(75878),y=n(21217);function m(e){return(0,y.Z)("PrivateSwitchBase",e)}(0,p.Z)("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);var Z=n(80184),g=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],x=(0,u.ZP)(f.Z)((function(e){var t=e.ownerState;return(0,a.Z)({padding:9,borderRadius:"50%"},"start"===t.edge&&{marginLeft:"small"===t.size?-3:-12},"end"===t.edge&&{marginRight:"small"===t.size?-3:-12})})),b=(0,u.ZP)("input")({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),v=l.forwardRef((function(e,t){var n=e.autoFocus,l=e.checked,u=e.checkedIcon,f=e.className,p=e.defaultChecked,y=e.disabled,v=e.disableFocusRipple,k=void 0!==v&&v,j=e.edge,S=void 0!==j&&j,w=e.icon,C=e.id,T=e.inputProps,L=e.inputRef,O=e.name,I=e.onBlur,N=e.onChange,R=e.onFocus,F=e.readOnly,M=e.required,E=void 0!==M&&M,P=e.tabIndex,A=e.type,B=e.value,W=(0,r.Z)(e,g),z=(0,d.Z)({controlled:l,default:Boolean(p),name:"SwitchBase",state:"checked"}),H=(0,i.Z)(z,2),D=H[0],G=H[1],V=(0,h.Z)(),q=y;V&&"undefined"===typeof q&&(q=V.disabled);var K="checkbox"===A||"radio"===A,U=(0,a.Z)({},e,{checked:D,disabled:q,disableFocusRipple:k,edge:S}),_=function(e){var t=e.classes,n=e.checked,i=e.disabled,r=e.edge,a={root:["root",n&&"checked",i&&"disabled",r&&"edge".concat((0,c.Z)(r))],input:["input"]};return(0,s.Z)(a,m,t)}(U);return(0,Z.jsxs)(x,(0,a.Z)({component:"span",className:(0,o.Z)(_.root,f),centerRipple:!0,focusRipple:!k,disabled:q,tabIndex:null,role:void 0,onFocus:function(e){R&&R(e),V&&V.onFocus&&V.onFocus(e)},onBlur:function(e){I&&I(e),V&&V.onBlur&&V.onBlur(e)},ownerState:U,ref:t},W,{children:[(0,Z.jsx)(b,(0,a.Z)({autoFocus:n,checked:l,defaultChecked:p,className:_.input,disabled:q,id:K?C:void 0,name:O,onChange:function(e){if(!e.nativeEvent.defaultPrevented){var t=e.target.checked;G(t),N&&N(e,t)}},readOnly:F,ref:L,required:E,ownerState:U,tabIndex:P,type:A},"checkbox"===A&&void 0===B?{}:{value:B},T)),D?u:w]}))}))}}]);
//# sourceMappingURL=313.1473469e.chunk.js.map