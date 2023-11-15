"use strict";(self.webpackChunk_epochlabs=self.webpackChunk_epochlabs||[]).push([[5578],{73297:function(e,n,t){t.d(n,{Z:function(){return O}});var r=t(29439),a=t(4942),o=t(63366),i=t(87462),c=t(72791),u=t(28182),l=t(56125),d=t(66934),s=t(12065),f=t(31402),p=t(42071),v=t(98301),m=t(94419),b=t(30953),x=t(77260);var h=t(80184),g=["classes","className","displayIcon","expansionIcon","icon","label","nodeId","onClick","onMouseDown"],I=c.forwardRef((function(e,n){var t=e.classes,r=e.className,a=e.displayIcon,l=e.expansionIcon,d=e.icon,s=e.label,f=e.nodeId,p=e.onClick,v=e.onMouseDown,m=(0,o.Z)(e,g),x=function(e){var n=c.useContext(b.Z),t=n.focus,r=n.isExpanded,a=n.isExpandable,o=n.isFocused,i=n.isDisabled,u=n.isSelected,l=n.multiSelect,d=n.selectNode,s=n.selectRange,f=n.toggleExpansion,p=!!a&&a(e),v=!!r&&r(e),m=!!o&&o(e),x=!!i&&i(e),h=!!u&&u(e);return{disabled:x,expanded:v,selected:h,focused:m,handleExpansion:function(n){if(!x){m||t(n,e);var a=l&&(n.shiftKey||n.ctrlKey||n.metaKey);!p||a&&r(e)||f(n,e)}},handleSelection:function(n){x||(m||t(n,e),l&&(n.shiftKey||n.ctrlKey||n.metaKey)?n.shiftKey?s(n,{end:e}):d(n,e,!0):d(n,e))},preventSelection:function(e){(e.shiftKey||e.ctrlKey||e.metaKey||x)&&e.preventDefault()}}}(f),I=x.disabled,Z=x.expanded,C=x.selected,y=x.focused,k=x.handleExpansion,w=x.handleSelection,O=x.preventSelection,S=d||l||a;return(0,h.jsxs)("div",(0,i.Z)({className:(0,u.Z)(r,t.root,Z&&t.expanded,C&&t.selected,y&&t.focused,I&&t.disabled),onClick:function(e){k(e),w(e),p&&p(e)},onMouseDown:function(e){O(e),v&&v(e)},ref:n},m,{children:[(0,h.jsx)("div",{className:t.iconContainer,children:S}),(0,h.jsx)("div",{className:t.label,children:s})]}))})),Z=t(41523),C=["children","className","collapseIcon","ContentComponent","ContentProps","endIcon","expandIcon","disabled","icon","id","label","nodeId","onClick","onMouseDown","TransitionComponent","TransitionProps"],y=(0,d.ZP)("li",{name:"MuiTreeItem",slot:"Root",overridesResolver:function(e,n){return n.root}})({listStyle:"none",margin:0,padding:0,outline:0}),k=(0,d.ZP)(I,{name:"MuiTreeItem",slot:"Content",overridesResolver:function(e,n){return[n.content,n.iconContainer&&(0,a.Z)({},"& .".concat(Z.Z.iconContainer),n.iconContainer),n.label&&(0,a.Z)({},"& .".concat(Z.Z.label),n.label)]}})((function(e){var n,t=e.theme;return n={padding:"0 8px",width:"100%",display:"flex",alignItems:"center",cursor:"pointer",WebkitTapHighlightColor:"transparent","&:hover":{backgroundColor:(t.vars||t).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}},(0,a.Z)(n,"&.".concat(Z.Z.disabled),{opacity:(t.vars||t).palette.action.disabledOpacity,backgroundColor:"transparent"}),(0,a.Z)(n,"&.".concat(Z.Z.focused),{backgroundColor:(t.vars||t).palette.action.focus}),(0,a.Z)(n,"&.".concat(Z.Z.selected),(0,a.Z)({backgroundColor:t.vars?"rgba(".concat(t.vars.palette.primary.mainChannel," / ").concat(t.vars.palette.action.selectedOpacity,")"):(0,s.Fq)(t.palette.primary.main,t.palette.action.selectedOpacity),"&:hover":{backgroundColor:t.vars?"rgba(".concat(t.vars.palette.primary.mainChannel," / calc(").concat(t.vars.palette.action.selectedOpacity," + ").concat(t.vars.palette.action.hoverOpacity,"))"):(0,s.Fq)(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:t.vars?"rgba(".concat(t.vars.palette.primary.mainChannel," / ").concat(t.vars.palette.action.selectedOpacity,")"):(0,s.Fq)(t.palette.primary.main,t.palette.action.selectedOpacity)}}},"&.".concat(Z.Z.focused),{backgroundColor:t.vars?"rgba(".concat(t.vars.palette.primary.mainChannel," / calc(").concat(t.vars.palette.action.selectedOpacity," + ").concat(t.vars.palette.action.focusOpacity,"))"):(0,s.Fq)(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.focusOpacity)})),(0,a.Z)(n,"& .".concat(Z.Z.iconContainer),{marginRight:4,width:15,display:"flex",flexShrink:0,justifyContent:"center","& svg":{fontSize:18}}),(0,a.Z)(n,"& .".concat(Z.Z.label),(0,i.Z)({width:"100%",minWidth:0,paddingLeft:4,position:"relative"},t.typography.body1)),n})),w=(0,d.ZP)(l.Z,{name:"MuiTreeItem",slot:"Group",overridesResolver:function(e,n){return n.group}})({margin:0,padding:0,marginLeft:17}),O=c.forwardRef((function(e,n){var t=(0,f.Z)({props:e,name:"MuiTreeItem"}),a=t.children,d=t.className,s=t.collapseIcon,g=t.ContentComponent,O=void 0===g?I:g,S=t.ContentProps,E=t.endIcon,N=t.expandIcon,T=t.disabled,R=t.icon,D=t.id,F=t.label,K=t.nodeId,M=t.onClick,P=t.onMouseDown,A=t.TransitionComponent,j=void 0===A?l.Z:A,L=t.TransitionProps,V=(0,o.Z)(t,C),B=c.useContext(b.Z),q=B.icons,_=void 0===q?{}:q,G=B.focus,H=B.isExpanded,U=B.isFocused,W=B.isSelected,Y=B.isDisabled,z=B.multiSelect,J=B.disabledItemsFocusable,Q=B.mapFirstChar,X=B.unMapFirstChar,$=B.registerNode,ee=B.unregisterNode,ne=B.treeId,te=null;null!=D?te=D:ne&&K&&(te="".concat(ne,"-").concat(K));var re,ae,oe,ie=c.useState(null),ce=(0,r.Z)(ie,2),ue=ce[0],le=ce[1],de=c.useRef(null),se=(0,p.Z)(le,n),fe=c.useMemo((function(){return{element:ue,id:K}}),[K,ue]),pe=(0,x.Y)(fe),ve=pe.index,me=pe.parentId,be=Boolean(Array.isArray(a)?a.length:a),xe=!!H&&H(K),he=!!U&&U(K),ge=!!W&&W(K),Ie=!!Y&&Y(K),Ze=(0,i.Z)({},t,{expanded:xe,focused:he,selected:ge,disabled:Ie}),Ce=function(e){var n=e.classes;return(0,m.Z)({root:["root"],content:["content"],expanded:["expanded"],selected:["selected"],focused:["focused"],disabled:["disabled"],iconContainer:["iconContainer"],label:["label"],group:["group"]},Z.P,n)}(Ze);return be&&(ae=xe?s||_.defaultCollapseIcon:N||_.defaultExpandIcon),re=be?_.defaultParentIcon:E||_.defaultEndIcon,c.useEffect((function(){if($&&ee&&-1!==ve)return $({id:K,idAttribute:te,index:ve,parentId:me,expandable:be,disabled:T}),function(){ee(K)}}),[$,ee,me,ve,K,be,T,te]),c.useEffect((function(){if(Q&&X&&F)return Q(K,de.current.textContent.substring(0,1).toLowerCase()),function(){X(K)}}),[Q,X,K,F]),z?oe=ge:ge&&(oe=!0),(0,h.jsxs)(y,(0,i.Z)({className:(0,u.Z)(Ce.root,d),role:"treeitem","aria-expanded":be?xe:null,"aria-selected":oe,"aria-disabled":Ie||null,ref:se,id:te,tabIndex:-1},V,{ownerState:Ze,onFocus:function(e){e.target===e.currentTarget&&("function"===typeof e.target.getRootNode?e.target.getRootNode():(0,v.Z)(e.target)).getElementById(ne).focus({preventScroll:!0});var n=!J&&Ie;he||e.currentTarget!==e.target||n||G(e,K)},children:[(0,h.jsx)(k,(0,i.Z)({as:O,ref:de,classes:{root:Ce.content,expanded:Ce.expanded,selected:Ce.selected,focused:Ce.focused,disabled:Ce.disabled,iconContainer:Ce.iconContainer,label:Ce.label},label:F,nodeId:K,onClick:M,onMouseDown:P,icon:R,expansionIcon:ae,displayIcon:re,ownerState:Ze},S)),a&&(0,h.jsx)(x.w,{id:K,children:(0,h.jsx)(w,(0,i.Z)({as:j,unmountOnExit:!0,className:Ce.group,in:xe,component:"ul",role:"group"},L,{children:a}))})]}))}))},41523:function(e,n,t){t.d(n,{P:function(){return a}});var r=t(21217);function a(e){return(0,r.Z)("MuiTreeItem",e)}var o=(0,t(75878).Z)("MuiTreeItem",["root","group","content","expanded","selected","focused","disabled","iconContainer","label"]);n.Z=o},6748:function(e,n,t){t.d(n,{Z:function(){return E}});var r=t(29439),a=t(87462),o=t(63366),i=t(72791),c=t(28182),u=t(66934),l=t(31402),d=t(13967),s=t(94419),f=t(67384),p=t(42071),v=t(98278),m=t(98301),b=t(30953),x=t(77260),h=t(21217);function g(e){return(0,h.Z)("MuiTreeView",e)}(0,t(75878).Z)("MuiTreeView",["root"]);var I=t(80184),Z=["children","className","defaultCollapseIcon","defaultEndIcon","defaultExpanded","defaultExpandIcon","defaultParentIcon","defaultSelected","disabledItemsFocusable","disableSelection","expanded","id","multiSelect","onBlur","onFocus","onKeyDown","onNodeFocus","onNodeSelect","onNodeToggle","selected"],C=(0,u.ZP)("ul",{name:"MuiTreeView",slot:"Root",overridesResolver:function(e,n){return n.root}})({padding:0,margin:0,listStyle:"none",outline:0});function y(e,n,t){for(var r=n;r<e.length;r+=1)if(t===e[r])return r;return-1}function k(){return!1}var w=[],O=[],S=i.forwardRef((function(e,n){var t=(0,l.Z)({props:e,name:"MuiTreeView"}),u=t.children,h=t.className,S=t.defaultCollapseIcon,E=t.defaultEndIcon,N=t.defaultExpanded,T=void 0===N?w:N,R=t.defaultExpandIcon,D=t.defaultParentIcon,F=t.defaultSelected,K=void 0===F?O:F,M=t.disabledItemsFocusable,P=void 0!==M&&M,A=t.disableSelection,j=void 0!==A&&A,L=t.expanded,V=t.id,B=t.multiSelect,q=void 0!==B&&B,_=t.onBlur,G=t.onFocus,H=t.onKeyDown,U=t.onNodeFocus,W=t.onNodeSelect,Y=t.onNodeToggle,z=t.selected,J=(0,o.Z)(t,Z),Q="rtl"===(0,d.Z)().direction,X=(0,a.Z)({},t,{defaultExpanded:T,defaultSelected:K,disabledItemsFocusable:P,disableSelection:j,multiSelect:q}),$=function(e){var n=e.classes;return(0,s.Z)({root:["root"]},g,n)}(X),ee=(0,f.Z)(V),ne=i.useRef(null),te=(0,p.Z)(ne,n),re=i.useState(null),ae=(0,r.Z)(re,2),oe=ae[0],ie=ae[1],ce=i.useRef({}),ue=i.useRef({}),le=(0,v.Z)({controlled:L,default:T,name:"TreeView",state:"expanded"}),de=(0,r.Z)(le,2),se=de[0],fe=de[1],pe=(0,v.Z)({controlled:z,default:K,name:"TreeView",state:"selected"}),ve=(0,r.Z)(pe,2),me=ve[0],be=ve[1],xe=i.useCallback((function(e){return!!Array.isArray(se)&&-1!==se.indexOf(e)}),[se]),he=i.useCallback((function(e){return ce.current[e]&&ce.current[e].expandable}),[]),ge=i.useCallback((function(e){return Array.isArray(me)?-1!==me.indexOf(e):me===e}),[me]),Ie=i.useCallback((function(e){var n=ce.current[e];if(!n)return!1;if(n.disabled)return!0;for(;null!=n.parentId;)if((n=ce.current[n.parentId]).disabled)return!0;return!1}),[]),Ze=function(e){return Object.keys(ce.current).map((function(e){return ce.current[e]})).filter((function(n){return n.parentId===e})).sort((function(e,n){return e.index-n.index})).map((function(e){return e.id}))},Ce=function(e){var n=Ze(e);return P||(n=n.filter((function(e){return!Ie(e)}))),n},ye=function(e){if(xe(e)&&Ce(e).length>0)return Ce(e)[0];for(var n=ce.current[e];null!=n;){var t=Ce(n.parentId),r=t[t.indexOf(n.id)+1];if(r)return r;n=ce.current[n.parentId]}return null},ke=function(e){var n=ce.current[e],t=Ce(n.parentId),r=t.indexOf(e);if(0===r)return n.parentId;for(var a=t[r-1];xe(a)&&Ce(a).length>0;)a=Ce(a).pop();return a},we=function(){for(var e=Ce(null).pop();xe(e);)e=Ce(e).pop();return e},Oe=function(){return Ce(null)[0]},Se=function(e,n){for(var t=function(e,n){if(e===n)return[e,n];var t=ce.current[e],r=ce.current[n];if(t.parentId===r.id||r.parentId===t.id)return r.parentId===t.id?[t.id,r.id]:[r.id,t.id];for(var a=[t.id],o=[r.id],i=t.parentId,c=r.parentId,u=-1!==o.indexOf(i),l=-1!==a.indexOf(c),d=!0,s=!0;!l&&!u;)d&&(a.push(i),d=null!==i,!(u=-1!==o.indexOf(i))&&d&&(i=ce.current[i].parentId)),s&&!u&&(o.push(c),s=null!==c,!(l=-1!==a.indexOf(c))&&s&&(c=ce.current[c].parentId));var f=u?i:c,p=Ze(f),v=a[a.indexOf(f)-1],m=o[o.indexOf(f)-1];return p.indexOf(v)<p.indexOf(m)?[e,n]:[n,e]}(e,n),a=(0,r.Z)(t,2),o=a[0],i=a[1],c=[o],u=o;u!==i;)u=ye(u),c.push(u);return c},Ee=function(e,n){n&&(ie(n),U&&U(e,n))},Ne=function(e,n){return Ee(e,ye(n))},Te=function(e){var n,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:oe;n=-1!==se.indexOf(t)?se.filter((function(e){return e!==t})):[t].concat(se),Y&&Y(e,n),fe(n)},Re=i.useRef(null),De=i.useRef(!1),Fe=i.useRef([]),Ke=function(e,n){return!!n&&(arguments.length>2&&void 0!==arguments[2]&&arguments[2]?function(e,n){var t;t=-1!==me.indexOf(n)?me.filter((function(e){return e!==n})):[n].concat(me),W&&W(e,t),be(t)}(e,n):function(e,n){var t=q?[n]:n;W&&W(e,t),be(t)}(e,n),Re.current=n,De.current=!1,Fe.current=[],!0)},Me=function(e,n){var t=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=n.start,a=void 0===r?Re.current:r,o=n.end,i=n.current;t?function(e,n){var t=me.slice(),r=n.start,a=n.next,o=n.current;a&&o&&(-1===Fe.current.indexOf(o)&&(Fe.current=[]),De.current?-1!==Fe.current.indexOf(a)?(t=t.filter((function(e){return e===r||e!==o})),Fe.current=Fe.current.filter((function(e){return e===r||e!==o}))):(t.push(a),Fe.current.push(a)):(t.push(a),Fe.current.push(o,a)),W&&W(e,t),be(t))}(e,{start:a,next:o,current:i}):null!=a&&null!=o&&function(e,n){var t=me.slice(),r=n.start,a=n.end;De.current&&(t=t.filter((function(e){return-1===Fe.current.indexOf(e)})));var o=Se(r,a);o=o.filter((function(e){return!Ie(e)})),Fe.current=o;var i=t.concat(o);i=i.filter((function(e,n){return i.indexOf(e)===n})),W&&W(e,i),be(i)}(e,{start:a,end:o}),De.current=!0},Pe=i.useCallback((function(e){var n=e.id,t=e.index,r=e.parentId,a=e.expandable,o=e.idAttribute,i=e.disabled;ce.current[n]={id:n,index:t,parentId:r,expandable:a,idAttribute:o,disabled:i}}),[]),Ae=i.useCallback((function(e){var n=(0,a.Z)({},ce.current);delete n[e],ce.current=n,ie((function(n){return n===e&&ne.current===(0,m.Z)(ne.current).activeElement?Ze(null)[0]:n}))}),[]),je=i.useCallback((function(e,n){ue.current[e]=n}),[]),Le=i.useCallback((function(e){var n=(0,a.Z)({},ue.current);delete n[e],ue.current=n}),[]),Ve=function(e){return he(oe)&&(xe(oe)?Ne(e,oe):Ie(oe)||Te(e)),!0},Be=function(e){if(xe(oe)&&!Ie(oe))return Te(e,oe),!0;var n,t=(n=oe,ce.current[n].parentId);return!!t&&(Ee(e,t),!0)},qe=ce.current[oe]?ce.current[oe].idAttribute:null;return(0,I.jsx)(b.Z.Provider,{value:{icons:{defaultCollapseIcon:S,defaultExpandIcon:R,defaultParentIcon:D,defaultEndIcon:E},focus:Ee,toggleExpansion:Te,isExpanded:xe,isExpandable:he,isFocused:function(e){return oe===e},isSelected:ge,isDisabled:Ie,selectNode:j?k:Ke,selectRange:j?k:Me,multiSelect:q,disabledItemsFocusable:P,mapFirstChar:je,unMapFirstChar:Le,registerNode:Pe,unregisterNode:Ae,treeId:ee},children:(0,I.jsx)(x.w,{children:(0,I.jsx)(C,(0,a.Z)({role:"tree",id:ee,"aria-activedescendant":qe,"aria-multiselectable":q,className:(0,c.Z)($.root,h),ref:te,tabIndex:0,onKeyDown:function(e){var n=!1,t=e.key;if(!e.altKey&&e.currentTarget===e.target&&oe){var r,a=e.ctrlKey||e.metaKey;switch(t){case" ":j||Ie(oe)||(q&&e.shiftKey?(Me(e,{end:oe}),n=!0):n=q?Ke(e,oe,!0):Ke(e,oe)),e.stopPropagation();break;case"Enter":Ie(oe)||(he(oe)?(Te(e),n=!0):n=q?Ke(e,oe,!0):Ke(e,oe)),e.stopPropagation();break;case"ArrowDown":q&&e.shiftKey&&!j&&function(e,n){Ie(ye(n))||Me(e,{end:ye(n),current:n},!0)}(e,oe),Ne(e,oe),n=!0;break;case"ArrowUp":q&&e.shiftKey&&!j&&function(e,n){Ie(ke(n))||Me(e,{end:ke(n),current:n},!0)}(e,oe),function(e,n){Ee(e,ke(n))}(e,oe),n=!0;break;case"ArrowRight":n=Q?Be(e):Ve(e);break;case"ArrowLeft":n=Q?Ve(e):Be(e);break;case"Home":q&&a&&e.shiftKey&&!j&&!Ie(oe)&&function(e,n){Re.current||(Re.current=n);var t=De.current?Re.current:n;Me(e,{start:t,end:Oe()})}(e,oe),function(e){Ee(e,Oe())}(e),n=!0;break;case"End":q&&a&&e.shiftKey&&!j&&!Ie(oe)&&function(e,n){Re.current||(Re.current=n);var t=De.current?Re.current:n;Me(e,{start:t,end:we()})}(e,oe),function(e){Ee(e,we())}(e),n=!0;break;default:"*"===t?(!function(e,n){var t=ce.current[n],r=Ze(t.parentId).filter((function(e){return he(e)&&!xe(e)})),a=se.concat(r);r.length>0&&(fe(a),Y&&Y(e,a))}(e,oe),n=!0):q&&a&&"a"===t.toLowerCase()&&!j?(!function(e){Me(e,{start:Oe(),end:we()})}(e),n=!0):!a&&!e.shiftKey&&((r=t)&&1===r.length&&r.match(/\S/))&&(!function(e,n,t){var r,a,o=t.toLowerCase(),i=[],c=[];Object.keys(ue.current).forEach((function(e){var n=ue.current[e],t=ce.current[e],r=!t.parentId||xe(t.parentId),a=!P&&Ie(e);r&&!a&&(i.push(e),c.push(n))})),(r=i.indexOf(n)+1)>=i.length&&(r=0),-1===(a=y(c,r,o))&&(a=y(c,0,o)),a>-1&&Ee(e,i[a])}(e,oe,t),n=!0)}n&&(e.preventDefault(),e.stopPropagation()),H&&H(e)}},onFocus:function(e){if(e.target===e.currentTarget){var n=Array.isArray(me)?me[0]:me;Ee(e,n||Ce(null)[0])}G&&G(e)},onBlur:function(e){ie(null),_&&_(e)},ownerState:X},J,{children:u}))})})})),E=S},30953:function(e,n,t){var r=t(72791).createContext({});n.Z=r},77260:function(e,n,t){t.d(n,{Y:function(){return f},w:function(){return p}});var r=t(29439),a=t(63366),o=t(87462),i=t(72791),c=t(40162),u=t(80184),l=["element"];var d=i.createContext({});var s=function(){};function f(e){var n=i.useState(),t=(0,r.Z)(n,2)[1],a=i.useContext(d),u=a.registerDescendant,l=void 0===u?s:u,f=a.unregisterDescendant,p=void 0===f?s:f,v=a.descendants,m=void 0===v?[]:v,b=a.parentId,x=void 0===b?null:b,h=function(e,n){for(var t=0;t<e.length;t+=1)if(n(e[t]))return t;return-1}(m,(function(n){return n.element===e.element})),g=function(e){var n=i.useRef(null);return i.useEffect((function(){n.current=e}),[e]),n.current}(m),I=m.some((function(e,n){return g&&g[n]&&g[n].element!==e.element}));return(0,c.Z)((function(){if(e.element)return l((0,o.Z)({},e,{index:h})),function(){p(e.element)};t({})}),[l,p,h,I,e]),{parentId:x,index:h}}function p(e){var n=e.children,t=e.id,c=i.useState([]),s=(0,r.Z)(c,2),f=s[0],p=s[1],v=i.useCallback((function(e){var n=e.element,t=(0,a.Z)(e,l);p((function(e){var r;if(0===e.length)return[(0,o.Z)({},t,{element:n,index:0})];var a=function(e,n){for(var t=0,r=e.length-1;t<=r;){var a=Math.floor((t+r)/2);if(e[a].element===n)return a;e[a].element.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_PRECEDING?r=a-1:t=a+1}return t}(e,n);if(e[a]&&e[a].element===n)r=e;else{var i=(0,o.Z)({},t,{element:n,index:a});(r=e.slice()).splice(a,0,i)}return r.forEach((function(e,n){e.index=n})),r}))}),[]),m=i.useCallback((function(e){p((function(n){return n.filter((function(n){return e!==n.element}))}))}),[]),b=i.useMemo((function(){return{descendants:f,registerDescendant:v,unregisterDescendant:m,parentId:t}}),[f,v,m,t]);return(0,u.jsx)(d.Provider,{value:b,children:n})}}}]);
//# sourceMappingURL=5578.d2f5e9cd.chunk.js.map