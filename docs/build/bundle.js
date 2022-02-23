var app=function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function o(t){t.forEach(n)}function r(t){return"function"==typeof t}function c(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function l(t,n){t.appendChild(n)}function u(t,n,e){t.insertBefore(n,e||null)}function s(t){t.parentNode.removeChild(t)}function i(t){return document.createElement(t)}function a(t){return document.createTextNode(t)}function f(){return a(" ")}function d(t,n,e,o){return t.addEventListener(n,e,o),()=>t.removeEventListener(n,e,o)}function p(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function h(t,n){t.value=null==n?"":n}let $;function m(t){$=t}function g(){const t=function(){if(!$)throw new Error("Function called outside component initialization");return $}();return(n,e)=>{const o=t.$$.callbacks[n];if(o){const r=function(t,n,e=!1){const o=document.createEvent("CustomEvent");return o.initCustomEvent(t,e,!1,n),o}(n,e);o.slice().forEach((n=>{n.call(t,r)}))}}}const b=[],x=[],y=[],v=[],_=Promise.resolve();let k=!1;function E(t){y.push(t)}const w=new Set;let C=0;function T(){const t=$;do{for(;C<b.length;){const t=b[C];C++,m(t),A(t.$$)}for(m(null),b.length=0,C=0;x.length;)x.pop()();for(let t=0;t<y.length;t+=1){const n=y[t];w.has(n)||(w.add(n),n())}y.length=0}while(b.length);for(;v.length;)v.pop()();k=!1,w.clear(),m(t)}function A(t){if(null!==t.fragment){t.update(),o(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(E)}}const j=new Set;let L;function N(t,n){t&&t.i&&(j.delete(t),t.i(n))}function O(t,n,e,o){if(t&&t.o){if(j.has(t))return;j.add(t),L.c.push((()=>{j.delete(t),o&&(e&&t.d(1),o())})),t.o(n)}}function B(t){t&&t.c()}function P(t,e,c,l){const{fragment:u,on_mount:s,on_destroy:i,after_update:a}=t.$$;u&&u.m(e,c),l||E((()=>{const e=s.map(n).filter(r);i?i.push(...e):o(e),t.$$.on_mount=[]})),a.forEach(E)}function S(t,n){const e=t.$$;null!==e.fragment&&(o(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function q(t,n){-1===t.$$.dirty[0]&&(b.push(t),k||(k=!0,_.then(T)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function z(n,r,c,l,u,i,a,f=[-1]){const d=$;m(n);const p=n.$$={fragment:null,ctx:null,props:i,update:t,not_equal:u,bound:e(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(r.context||(d?d.$$.context:[])),callbacks:e(),dirty:f,skip_bound:!1,root:r.target||d.$$.root};a&&a(p.root);let h=!1;if(p.ctx=c?c(n,r.props||{},((t,e,...o)=>{const r=o.length?o[0]:e;return p.ctx&&u(p.ctx[t],p.ctx[t]=r)&&(!p.skip_bound&&p.bound[t]&&p.bound[t](r),h&&q(n,t)),e})):[],p.update(),h=!0,o(p.before_update),p.fragment=!!l&&l(p.ctx),r.target){if(r.hydrate){const t=function(t){return Array.from(t.childNodes)}(r.target);p.fragment&&p.fragment.l(t),t.forEach(s)}else p.fragment&&p.fragment.c();r.intro&&N(n.$$.fragment),P(n,r.target,r.anchor,r.customElement),T()}m(d)}class F{$destroy(){S(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function K(n){let e,o,r,c,d,h;return{c(){e=i("li"),o=i("label"),r=i("input"),c=f(),d=i("span"),h=a(n[0]),p(r,"type","checkbox"),r.checked=n[1],p(r,"class","svelte-17f8xg8"),p(d,"class","svelte-17f8xg8")},m(t,n){u(t,e,n),l(e,o),l(o,r),l(o,c),l(o,d),l(d,h)},p(t,[n]){2&n&&(r.checked=t[1]),1&n&&function(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}(h,t[0])},i:t,o:t,d(t){t&&s(e)}}}function M(t,n,e){let{label:o}=n,{done:r}=n;return t.$$set=t=>{"label"in t&&e(0,o=t.label),"done"in t&&e(1,r=t.done)},[o,r]}class D extends F{constructor(t){super(),z(this,t,M,K,c,{label:0,done:1})}}function G(n){let e,r,c,a,$,m;return{c(){e=i("li"),r=i("input"),c=f(),a=i("p"),a.textContent="more Todo...",p(r,"type","text"),p(r,"placeholder","more Todo..."),p(r,"class","svelte-esvhre"),p(a,"class","svelte-esvhre"),p(e,"class","svelte-esvhre")},m(t,o){u(t,e,o),l(e,r),h(r,n[0]),l(e,c),l(e,a),$||(m=[d(r,"input",n[3]),d(r,"keypress",n[1]),d(r,"focusout",n[2])],$=!0)},p(t,[n]){1&n&&r.value!==t[0]&&h(r,t[0])},i:t,o:t,d(t){t&&s(e),$=!1,o(m)}}}function H(t,n,e){const o=g();let r="";function c(){o("add",r),e(0,r="")}return[r,function(t){console.info({KeyboardEvent:t}),r&&"key"in t&&"Enter"==t.key&&c()},function(t){"ontouchstart"in window&&navigator.maxTouchPoints>0&&c()},function(){r=this.value,e(0,r)}]}class I extends F{constructor(t){super(),z(this,t,H,G,c,{})}}function J(t,n,e){const o=t.slice();return o[2]=n[e],o}function Q(t){let n,e;return n=new D({props:{label:t[2].label,done:t[2].done}}),{c(){B(n.$$.fragment)},m(t,o){P(n,t,o),e=!0},p(t,e){const o={};1&e&&(o.label=t[2].label),1&e&&(o.done=t[2].done),n.$set(o)},i(t){e||(N(n.$$.fragment,t),e=!0)},o(t){O(n.$$.fragment,t),e=!1},d(t){S(n,t)}}}function R(t){let n,e,r,c,a=t[0],d=[];for(let n=0;n<a.length;n+=1)d[n]=Q(J(t,a,n));const p=t=>O(d[t],1,1,(()=>{d[t]=null}));return r=new I({}),r.$on("add",t[1]),{c(){n=i("ul");for(let t=0;t<d.length;t+=1)d[t].c();e=f(),B(r.$$.fragment)},m(t,o){u(t,n,o);for(let t=0;t<d.length;t+=1)d[t].m(n,null);l(n,e),P(r,n,null),c=!0},p(t,[r]){if(1&r){let c;for(a=t[0],c=0;c<a.length;c+=1){const o=J(t,a,c);d[c]?(d[c].p(o,r),N(d[c],1)):(d[c]=Q(o),d[c].c(),N(d[c],1),d[c].m(n,e))}for(L={r:0,c:[],p:L},c=a.length;c<d.length;c+=1)p(c);L.r||o(L.c),L=L.p}},i(t){if(!c){for(let t=0;t<a.length;t+=1)N(d[t]);N(r.$$.fragment,t),c=!0}},o(t){d=d.filter(Boolean);for(let t=0;t<d.length;t+=1)O(d[t]);O(r.$$.fragment,t),c=!1},d(t){t&&s(n),function(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}(d,t),S(r)}}}function U(t,n,e){let o=[{done:!0,label:"顔を洗う"},{done:!1,label:"電話する"},{done:!1,label:"本を読む"}];return[o,function(t){console.info({label:t.detail}),e(0,o=[...o,{done:!1,label:t.detail}])}]}class V extends F{constructor(t){super(),z(this,t,U,R,c,{})}}function W(n){let e,o,r,c,a;return c=new V({}),{c(){e=i("main"),o=i("h1"),o.textContent="Todo List",r=f(),B(c.$$.fragment),p(e,"class","container")},m(t,n){u(t,e,n),l(e,o),l(e,r),P(c,e,null),a=!0},p:t,i(t){a||(N(c.$$.fragment,t),a=!0)},o(t){O(c.$$.fragment,t),a=!1},d(t){t&&s(e),S(c)}}}return new class extends F{constructor(t){super(),z(this,t,null,W,c,{})}}({target:document.body,props:{}})}();
//# sourceMappingURL=bundle.js.map
