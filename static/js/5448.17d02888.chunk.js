"use strict";(self.webpackChunk_epochlabs=self.webpackChunk_epochlabs||[]).push([[5448],{85448:function(n,e,t){t.d(e,{y:function(){return nn}});var r=t(93433),a=t(1413),u=t(45987),i=t(83200),o=function(n,e,t){return(((1-3*t+3*e)*n+(3*t-6*e))*n+3*e)*n},s=1e-7,c=12;function f(n,e,t,r){if(n===e&&t===r)return i.Z;var a=function(e){return function(n,e,t,r,a){var u,i,f=0;do{(u=o(i=e+(t-e)/2,r,a)-n)>0?t=i:e=i}while(Math.abs(u)>s&&++f<c);return i}(e,0,1,n,t)};return function(n){return 0===n||1===n?n:o(a(n),e,r)}}var l=f(.42,0,1,1),v=f(0,0,.58,1),d=f(.42,0,.58,1),p=function(n){return Array.isArray(n)&&"number"!==typeof n[0]},m=t(29439),h=t(95956),y=t(16128),M=t(50197),g=t(7392),b=f(.33,1.53,.69,.99),w=(0,g.M)(b),k=(0,M.o)(w),x={linear:i.Z,easeIn:l,easeInOut:d,easeOut:v,circIn:y.Z7,circInOut:y.X7,circOut:y.Bn,backIn:w,backInOut:k,backOut:b,anticipate:function(n){return(n*=2)<1?.5*w(n):.5*(2-Math.pow(2,-10*(n-1)))}},D=function(n){if(Array.isArray(n)){(0,h.k)(4===n.length,"Cubic bezier arrays must contain four numerical values.");var e=(0,m.Z)(n,4);return f(e[0],e[1],e[2],e[3])}return"string"===typeof n?((0,h.k)(void 0!==x[n],"Invalid easing type '".concat(n,"'")),x[n]):n},Z=t(5544),X=t(68337);function I(n){var e,t,r=n.duration,a=void 0===r?300:r,u=n.keyframes,i=n.times,o=n.ease,s=void 0===o?"easeInOut":o,c=p(s)?s.map(D):D(s),f={done:!1,value:u[0]},l=function(n,e){return n.map((function(n){return n*e}))}(i&&i.length===u.length?i:(0,X.Y)(u),a),v=(0,Z.s)(l,u,{ease:Array.isArray(c)?c:(e=u,t=c,e.map((function(){return t||d})).splice(0,e.length-1))});return{calculatedDuration:a,next:function(n){return f.value=v(n),f.done=n>=a,f}}}var S=t(84792),O=t(50550),A=5;function C(n,e,t){var r=Math.max(e-A,0);return(0,O.R)(t-n(r),e-r)}var q=t(2440),P=.001,R=.01,B=10,F=.05,T=1;function N(n){var e,t,r=n.duration,a=void 0===r?800:r,u=n.bounce,i=void 0===u?.25:u,o=n.velocity,s=void 0===o?0:o,c=n.mass,f=void 0===c?1:c;(0,h.K)(a<=(0,S.w)(B),"Spring duration must be 10 seconds or less");var l=1-i;l=(0,q.u)(F,T,l),a=(0,q.u)(R,B,(0,S.X)(a)),l<1?(e=function(n){var e=n*l,t=e*a,r=e-s,u=_(n,l),i=Math.exp(-t);return P-r/u*i},t=function(n){var t=n*l*a,r=t*s+s,u=Math.pow(l,2)*Math.pow(n,2)*a,i=Math.exp(-t),o=_(Math.pow(n,2),l);return(-e(n)+P>0?-1:1)*((r-u)*i)/o}):(e=function(n){return Math.exp(-n*a)*((n-s)*a+1)-P},t=function(n){return Math.exp(-n*a)*(a*a*(s-n))});var v=function(n,e,t){for(var r=t,a=1;a<U;a++)r-=n(r)/e(r);return r}(e,t,5/a);if(a=(0,S.w)(a),isNaN(v))return{stiffness:100,damping:10,duration:a};var d=Math.pow(v,2)*f;return{stiffness:d,damping:2*l*Math.sqrt(f*d),duration:a}}var U=12;function _(n,e){return n*Math.sqrt(1-e*e)}var z=["keyframes","restDelta","restSpeed"],K=["duration","bounce"],W=["stiffness","damping","mass"];function Y(n,e){return e.some((function(e){return void 0!==n[e]}))}function j(n){var e,t=n.keyframes,r=n.restDelta,i=n.restSpeed,o=(0,u.Z)(n,z),s=t[0],c=t[t.length-1],f={done:!1,value:s},l=function(n){var e=(0,a.Z)({velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1},n);if(!Y(n,W)&&Y(n,K)){var t=N(n);(e=(0,a.Z)((0,a.Z)((0,a.Z)({},e),t),{},{velocity:0,mass:1})).isResolvedFromDuration=!0}return e}(o),v=l.stiffness,d=l.damping,p=l.mass,m=l.velocity,h=l.duration,y=l.isResolvedFromDuration,M=m?-(0,S.X)(m):0,g=d/(2*Math.sqrt(v*p)),b=c-s,w=(0,S.X)(Math.sqrt(v/p)),k=Math.abs(b)<5;if(i||(i=k?.01:2),r||(r=k?.005:.5),g<1){var x=_(w,g);e=function(n){var e=Math.exp(-g*w*n);return c-e*((M+g*w*b)/x*Math.sin(x*n)+b*Math.cos(x*n))}}else if(1===g)e=function(n){return c-Math.exp(-w*n)*(b+(M+w*b)*n)};else{var D=w*Math.sqrt(g*g-1);e=function(n){var e=Math.exp(-g*w*n),t=Math.min(D*n,300);return c-e*((M+g*w*b)*Math.sinh(t)+D*b*Math.cosh(t))/D}}return{calculatedDuration:y&&h||null,next:function(n){var t=e(n);if(y)f.done=n>=h;else{var a=M;0!==n&&(a=g<1?C(e,n,t):0);var u=Math.abs(a)<=i,o=Math.abs(c-t)<=r;f.done=u&&o}return f.value=f.done?c:t,f}}}function E(n){var e=n.keyframes,t=n.velocity,r=void 0===t?0:t,a=n.power,u=void 0===a?.8:a,i=n.timeConstant,o=void 0===i?325:i,s=n.bounceDamping,c=void 0===s?10:s,f=n.bounceStiffness,l=void 0===f?500:f,v=n.modifyTarget,d=n.min,p=n.max,m=n.restDelta,h=void 0===m?.5:m,y=n.restSpeed,M=e[0],g={done:!1,value:M},b=function(n){return void 0===d?p:void 0===p||Math.abs(d-n)<Math.abs(p-n)?d:p},w=u*r,k=M+w,x=void 0===v?k:v(k);x!==k&&(w=x-M);var D,Z,X=function(n){return-w*Math.exp(-n/o)},I=function(n){return x+X(n)},S=function(n){var e=X(n),t=I(n);g.done=Math.abs(e)<=h,g.value=g.done?x:t},O=function(n){var e;(e=g.value,void 0!==d&&e<d||void 0!==p&&e>p)&&(D=n,Z=j({keyframes:[g.value,b(g.value)],velocity:C(I,n,g.value),damping:c,stiffness:l,restDelta:h,restSpeed:y}))};return O(0),{calculatedDuration:null,next:function(n){var e=!1;return Z||void 0!==D||(e=!0,S(n),O(n)),void 0!==D&&n>D?Z.next(n-D):(!e&&S(n),g)}}}var G=t(43272),H=t(59172),J=function(n){var e=function(e){var t=e.timestamp;return n(t)};return{start:function(){return G.Wi.update(e,!0)},stop:function(){return(0,G.Pn)(e)},now:function(){return H.w.isProcessing?H.w.timestamp:performance.now()}}},L=2e4;function Q(n){for(var e=0,t=n.next(e);!t.done&&e<L;)e+=50,t=n.next(e);return e>=L?1/0:e}var V=["autoplay","delay","driver","keyframes","type","repeat","repeatDelay","repeatType","onPlay","onStop","onComplete","onUpdate"],$={decay:E,inertia:E,tween:I,keyframes:I,spring:j};function nn(n){var e,t,i,o=n.autoplay,s=void 0===o||o,c=n.delay,f=void 0===c?0:c,l=n.driver,v=void 0===l?J:l,d=n.keyframes,p=n.type,m=void 0===p?"keyframes":p,h=n.repeat,y=void 0===h?0:h,M=n.repeatDelay,g=void 0===M?0:M,b=n.repeatType,w=void 0===b?"loop":b,k=n.onPlay,x=n.onStop,D=n.onComplete,X=n.onUpdate,O=(0,u.Z)(n,V),A=1,C=!1,P=function(){t=new Promise((function(n){e=n}))};P();var R,B=$[m]||I;B!==I&&"number"!==typeof d[0]&&(R=(0,Z.s)([0,100],d,{clamp:!1}),d=[0,100]);var F,T=B((0,a.Z)((0,a.Z)({},O),{},{keyframes:d}));"mirror"===w&&(F=B((0,a.Z)((0,a.Z)({},O),{},{keyframes:(0,r.Z)(d).reverse(),velocity:-(O.velocity||0)})));var N="idle",U=null,_=null,z=null;null===T.calculatedDuration&&y&&(T.calculatedDuration=Q(T));var K=T.calculatedDuration,W=1/0,Y=1/0;null!==K&&(Y=(W=K+g)*(y+1)-g);var j=0,E=function(n){if(null!==_){A>0&&(_=Math.min(_,n)),A<0&&(_=Math.min(n-Y/A,_));var e=(j=null!==U?U:Math.round(n-_)*A)-f*(A>=0?1:-1),t=A>=0?e<0:e>Y;j=Math.max(e,0),"finished"===N&&null===U&&(j=Y);var r=j,a=T;if(y){var u=j/W,i=Math.floor(u),o=u%1;!o&&u>=1&&(o=1),1===o&&i--,i=Math.min(i,y+1);var s=Boolean(i%2);s&&("reverse"===w?(o=1-o,g&&(o-=g/W)):"mirror"===w&&(a=F));var c=(0,q.u)(0,1,o);j>Y&&(c="reverse"===w&&s?1:0),r=c*W}var l=t?{done:!1,value:d[0]}:a.next(r);R&&(l.value=R(l.value));var v=l.done;t||null===K||(v=A>=0?j>=Y:j<=0);var p=null===U&&("finished"===N||"running"===N&&v);return X&&X(l.value),p&&L(),l}},G=function(){i&&i.stop(),i=void 0},H=function(){N="idle",G(),e(),P(),_=z=null},L=function(){N="finished",D&&D(),G(),e()},nn=function(){if(!C){i||(i=v(E));var n=i.now();k&&k(),null!==U?_=n-U:_&&"finished"!==N||(_=n),"finished"===N&&P(),z=_,U=null,N="running",i.start()}};s&&nn();var en={then:function(n,e){return t.then(n,e)},get time(){return(0,S.X)(j)},set time(n){n=(0,S.w)(n),j=n,null===U&&i&&0!==A?_=i.now()-n/A:U=n},get duration(){var n=null===T.calculatedDuration?Q(T):T.calculatedDuration;return(0,S.X)(n)},get speed(){return A},set speed(n){n!==A&&i&&(A=n,en.time=(0,S.X)(j))},get state(){return N},play:nn,pause:function(){N="paused",U=j},stop:function(){C=!0,"idle"!==N&&(N="idle",x&&x(),H())},cancel:function(){null!==z&&E(z),H()},complete:function(){N="finished"},sample:function(n){return _=0,E(n)}};return en}},16128:function(n,e,t){t.d(e,{Bn:function(){return i},X7:function(){return o},Z7:function(){return u}});var r=t(50197),a=t(7392),u=function(n){return 1-Math.sin(Math.acos(n))},i=(0,a.M)(u),o=(0,r.o)(i)},50197:function(n,e,t){t.d(e,{o:function(){return r}});var r=function(n){return function(e){return e<=.5?n(2*e)/2:(2-n(2*(1-e)))/2}}},7392:function(n,e,t){t.d(e,{M:function(){return r}});var r=function(n){return function(e){return 1-n(1-e)}}},84792:function(n,e,t){t.d(e,{X:function(){return a},w:function(){return r}});var r=function(n){return 1e3*n},a=function(n){return n/1e3}}}]);
//# sourceMappingURL=5448.17d02888.chunk.js.map