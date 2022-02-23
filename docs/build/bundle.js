var app=function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function o(t){t.forEach(n)}function r(t){return"function"==typeof t}function c(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function l(t,n){t.appendChild(n)}function u(t,n,e){t.insertBefore(n,e||null)}function i(t){t.parentNode.removeChild(t)}function s(t){return document.createElement(t)}function f(t){return document.createTextNode(t)}function a(){return f(" ")}function d(t,n,e,o){return t.addEventListener(n,e,o),()=>t.removeEventListener(n,e,o)}function h(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function p(t,n){t.value=null==n?"":n}function $(t,n,e){t.classList[e?"add":"remove"](n)}let m;function g(t){m=t}function b(){const t=function(){if(!m)throw new Error("Function called outside component initialization");return m}();return(n,e)=>{const o=t.$$.callbacks[n];if(o){const r=function(t,n,e=!1){const o=document.createEvent("CustomEvent");return o.initCustomEvent(t,e,!1,n),o}(n,e);o.slice().forEach((n=>{n.call(t,r)}))}}}const x=[],y=[],v=[],_=[],k=Promise.resolve();let w=!1;function E(t){v.push(t)}const T=new Set;let C=0;function A(){const t=m;do{for(;C<x.length;){const t=x[C];C++,g(t),L(t.$$)}for(g(null),x.length=0,C=0;y.length;)y.pop()();for(let t=0;t<v.length;t+=1){const n=v[t];T.has(n)||(T.add(n),n())}v.length=0}while(x.length);for(;_.length;)_.pop()();w=!1,T.clear(),g(t)}function L(t){if(null!==t.fragment){t.update(),o(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(E)}}const j=new Set;let N;function O(t,n){t&&t.i&&(j.delete(t),t.i(n))}function B(t,n,e,o){if(t&&t.o){if(j.has(t))return;j.add(t),N.c.push((()=>{j.delete(t),o&&(e&&t.d(1),o())})),t.o(n)}}function P(t){t&&t.c()}function S(t,e,c,l){const{fragment:u,on_mount:i,on_destroy:s,after_update:f}=t.$$;u&&u.m(e,c),l||E((()=>{const e=i.map(n).filter(r);s?s.push(...e):o(e),t.$$.on_mount=[]})),f.forEach(E)}function q(t,n){const e=t.$$;null!==e.fragment&&(o(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function z(t,n){-1===t.$$.dirty[0]&&(x.push(t),w||(w=!0,k.then(A)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function F(n,r,c,l,u,s,f,a=[-1]){const d=m;g(n);const h=n.$$={fragment:null,ctx:null,props:s,update:t,not_equal:u,bound:e(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(r.context||(d?d.$$.context:[])),callbacks:e(),dirty:a,skip_bound:!1,root:r.target||d.$$.root};f&&f(h.root);let p=!1;if(h.ctx=c?c(n,r.props||{},((t,e,...o)=>{const r=o.length?o[0]:e;return h.ctx&&u(h.ctx[t],h.ctx[t]=r)&&(!h.skip_bound&&h.bound[t]&&h.bound[t](r),p&&z(n,t)),e})):[],h.update(),p=!0,o(h.before_update),h.fragment=!!l&&l(h.ctx),r.target){if(r.hydrate){const t=function(t){return Array.from(t.childNodes)}(r.target);h.fragment&&h.fragment.l(t),t.forEach(i)}else h.fragment&&h.fragment.c();r.intro&&O(n.$$.fragment),S(n,r.target,r.anchor,r.customElement),A()}g(d)}class K{$destroy(){q(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function M(n){let e,o,r,c,d,p;return{c(){e=s("li"),o=s("label"),r=s("input"),c=a(),d=s("span"),p=f(n[0]),h(r,"type","checkbox"),r.checked=n[1],h(r,"class","svelte-17f8xg8"),h(d,"class","svelte-17f8xg8")},m(t,n){u(t,e,n),l(e,o),l(o,r),l(o,c),l(o,d),l(d,p)},p(t,[n]){2&n&&(r.checked=t[1]),1&n&&function(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}(p,t[0])},i:t,o:t,d(t){t&&i(e)}}}function D(t,n,e){let{label:o}=n,{done:r}=n;return t.$$set=t=>{"label"in t&&e(0,o=t.label),"done"in t&&e(1,r=t.done)},[o,r]}class G extends K{constructor(t){super(),F(this,t,D,M,c,{label:0,done:1})}}function H(n){let e,r,c,f,m,g;return{c(){e=s("li"),r=s("button"),r.textContent="more Todo...",c=a(),f=s("input"),h(r,"class","svelte-1ifx1we"),$(r,"hidden",n[1]),h(f,"type","text"),h(f,"placeholder","more Todo..."),h(f,"class","svelte-1ifx1we"),$(f,"hidden",!n[1])},m(t,o){u(t,e,o),l(e,r),l(e,c),l(e,f),n[6](f),p(f,n[2]),m||(g=[d(r,"click",n[3]),d(f,"input",n[7]),d(f,"keypress",n[4]),d(f,"focusout",n[5])],m=!0)},p(t,[n]){2&n&&$(r,"hidden",t[1]),4&n&&f.value!==t[2]&&p(f,t[2]),2&n&&$(f,"hidden",!t[1])},i:t,o:t,d(t){t&&i(e),n[6](null),m=!1,o(g)}}}function I(t,n,e){const o=b();let r,c=!1,l="";function u(){o("add",l.trim()),e(2,l="")}return[r,c,l,function(){e(1,c=!0),setTimeout((()=>{r.focus()}),25)},function(t){console.info({KeyboardEvent:t}),l.trim()&&"key"in t&&"Enter"==t.key&&u()},function(t){e(1,c=!1),l.trim()&&"ontouchstart"in window&&navigator.maxTouchPoints>0&&u()},function(t){y[t?"unshift":"push"]((()=>{r=t,e(0,r)}))},function(){l=this.value,e(2,l)}]}class J extends K{constructor(t){super(),F(this,t,I,H,c,{})}}function Q(t,n,e){const o=t.slice();return o[2]=n[e],o}function R(t){let n,e;return n=new G({props:{label:t[2].label,done:t[2].done}}),{c(){P(n.$$.fragment)},m(t,o){S(n,t,o),e=!0},p(t,e){const o={};1&e&&(o.label=t[2].label),1&e&&(o.done=t[2].done),n.$set(o)},i(t){e||(O(n.$$.fragment,t),e=!0)},o(t){B(n.$$.fragment,t),e=!1},d(t){q(n,t)}}}function U(t){let n,e,r,c,f=t[0],d=[];for(let n=0;n<f.length;n+=1)d[n]=R(Q(t,f,n));const h=t=>B(d[t],1,1,(()=>{d[t]=null}));return r=new J({}),r.$on("add",t[1]),{c(){n=s("ul");for(let t=0;t<d.length;t+=1)d[t].c();e=a(),P(r.$$.fragment)},m(t,o){u(t,n,o);for(let t=0;t<d.length;t+=1)d[t].m(n,null);l(n,e),S(r,n,null),c=!0},p(t,[r]){if(1&r){let c;for(f=t[0],c=0;c<f.length;c+=1){const o=Q(t,f,c);d[c]?(d[c].p(o,r),O(d[c],1)):(d[c]=R(o),d[c].c(),O(d[c],1),d[c].m(n,e))}for(N={r:0,c:[],p:N},c=f.length;c<d.length;c+=1)h(c);N.r||o(N.c),N=N.p}},i(t){if(!c){for(let t=0;t<f.length;t+=1)O(d[t]);O(r.$$.fragment,t),c=!0}},o(t){d=d.filter(Boolean);for(let t=0;t<d.length;t+=1)B(d[t]);B(r.$$.fragment,t),c=!1},d(t){t&&i(n),function(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}(d,t),q(r)}}}function V(t,n,e){let o=[{done:!0,label:"顔を洗う"},{done:!1,label:"電話する"},{done:!1,label:"本を読む"}];return[o,function(t){e(0,o=[...o,{done:!1,label:t.detail}])}]}class W extends K{constructor(t){super(),F(this,t,V,U,c,{})}}function X(n){let e,o,r,c,f;return c=new W({}),{c(){e=s("main"),o=s("h1"),o.textContent="Todo List",r=a(),P(c.$$.fragment),h(e,"class","container")},m(t,n){u(t,e,n),l(e,o),l(e,r),S(c,e,null),f=!0},p:t,i(t){f||(O(c.$$.fragment,t),f=!0)},o(t){B(c.$$.fragment,t),f=!1},d(t){t&&i(e),q(c)}}}return new class extends K{constructor(t){super(),F(this,t,null,X,c,{})}}({target:document.body,props:{}})}();
//# sourceMappingURL=bundle.js.map
