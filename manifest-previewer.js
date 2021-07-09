/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function t(t,i,e,s){var o,n=arguments.length,r=n<3?i:null===s?s=Object.getOwnPropertyDescriptor(i,e):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,i,e,s);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(r=(n<3?o(r):n>3?o(i,e,r):o(i,e))||r);return n>3&&r&&Object.defineProperty(i,e,r),r
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}const i=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,e=Symbol();class s{constructor(t,i){if(i!==e)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return i&&void 0===this.t&&(this.t=new CSSStyleSheet,this.t.replaceSync(this.cssText)),this.t}toString(){return this.cssText}}const o=new Map,n=t=>{let i=o.get(t);return void 0===i&&o.set(t,i=new s(t,e)),i},r=(t,...i)=>{const e=1===t.length?t[0]:i.reduce(((i,e,o)=>i+(t=>{if(t instanceof s)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(e)+t[o+1]),t[0]);return n(e)},a=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let i="";for(const e of t.cssRules)i+=e.cssText;return(t=>n("string"==typeof t?t:t+""))(i)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var l,p,d,c;const h={toAttribute(t,i){switch(i){case Boolean:t=t?"":null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,i){let e=t;switch(i){case Boolean:e=null!==t;break;case Number:e=null===t?null:Number(t);break;case Object:case Array:try{e=JSON.parse(t)}catch(t){e=null}}return e}},u=(t,i)=>i!==t&&(i==i||t==t),g={attribute:!0,type:String,converter:h,reflect:!1,hasChanged:u};class m extends HTMLElement{constructor(){super(),this.Πi=new Map,this.Πo=void 0,this.Πl=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this.Πh=null,this.u()}static addInitializer(t){var i;null!==(i=this.v)&&void 0!==i||(this.v=[]),this.v.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((i,e)=>{const s=this.Πp(e,i);void 0!==s&&(this.Πm.set(s,e),t.push(s))})),t}static createProperty(t,i=g){if(i.state&&(i.attribute=!1),this.finalize(),this.elementProperties.set(t,i),!i.noAccessor&&!this.prototype.hasOwnProperty(t)){const e="symbol"==typeof t?Symbol():"__"+t,s=this.getPropertyDescriptor(t,e,i);void 0!==s&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,i,e){return{get(){return this[i]},set(s){const o=this[t];this[i]=s,this.requestUpdate(t,o,e)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||g}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this.Πm=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const e of i)this.createProperty(e,t[e])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const i=[];if(Array.isArray(t)){const e=new Set(t.flat(1/0).reverse());for(const t of e)i.unshift(a(t))}else void 0!==t&&i.push(a(t));return i}static"Πp"(t,i){const e=i.attribute;return!1===e?void 0:"string"==typeof e?e:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this.Πg=new Promise((t=>this.enableUpdating=t)),this.L=new Map,this.Π_(),this.requestUpdate(),null===(t=this.constructor.v)||void 0===t||t.forEach((t=>t(this)))}addController(t){var i,e;(null!==(i=this.ΠU)&&void 0!==i?i:this.ΠU=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(e=t.hostConnected)||void 0===e||e.call(t))}removeController(t){var i;null===(i=this.ΠU)||void 0===i||i.splice(this.ΠU.indexOf(t)>>>0,1)}"Π_"(){this.constructor.elementProperties.forEach(((t,i)=>{this.hasOwnProperty(i)&&(this.Πi.set(i,this[i]),delete this[i])}))}createRenderRoot(){var t;const e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{i?t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):e.forEach((i=>{const e=document.createElement("style");e.textContent=i.cssText,t.appendChild(e)}))})(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this.ΠU)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostConnected)||void 0===i?void 0:i.call(t)})),this.Πl&&(this.Πl(),this.Πo=this.Πl=void 0)}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this.ΠU)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostDisconnected)||void 0===i?void 0:i.call(t)})),this.Πo=new Promise((t=>this.Πl=t))}attributeChangedCallback(t,i,e){this.K(t,e)}"Πj"(t,i,e=g){var s,o;const n=this.constructor.Πp(t,e);if(void 0!==n&&!0===e.reflect){const r=(null!==(o=null===(s=e.converter)||void 0===s?void 0:s.toAttribute)&&void 0!==o?o:h.toAttribute)(i,e.type);this.Πh=t,null==r?this.removeAttribute(n):this.setAttribute(n,r),this.Πh=null}}K(t,i){var e,s,o;const n=this.constructor,r=n.Πm.get(t);if(void 0!==r&&this.Πh!==r){const t=n.getPropertyOptions(r),a=t.converter,l=null!==(o=null!==(s=null===(e=a)||void 0===e?void 0:e.fromAttribute)&&void 0!==s?s:"function"==typeof a?a:null)&&void 0!==o?o:h.fromAttribute;this.Πh=r,this[r]=l(i,t.type),this.Πh=null}}requestUpdate(t,i,e){let s=!0;void 0!==t&&(((e=e||this.constructor.getPropertyOptions(t)).hasChanged||u)(this[t],i)?(this.L.has(t)||this.L.set(t,i),!0===e.reflect&&this.Πh!==t&&(void 0===this.Πk&&(this.Πk=new Map),this.Πk.set(t,e))):s=!1),!this.isUpdatePending&&s&&(this.Πg=this.Πq())}async"Πq"(){this.isUpdatePending=!0;try{for(await this.Πg;this.Πo;)await this.Πo}catch(t){Promise.reject(t)}const t=this.performUpdate();return null!=t&&await t,!this.isUpdatePending}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this.Πi&&(this.Πi.forEach(((t,i)=>this[i]=t)),this.Πi=void 0);let i=!1;const e=this.L;try{i=this.shouldUpdate(e),i?(this.willUpdate(e),null===(t=this.ΠU)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostUpdate)||void 0===i?void 0:i.call(t)})),this.update(e)):this.Π$()}catch(t){throw i=!1,this.Π$(),t}i&&this.E(e)}willUpdate(t){}E(t){var i;null===(i=this.ΠU)||void 0===i||i.forEach((t=>{var i;return null===(i=t.hostUpdated)||void 0===i?void 0:i.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}"Π$"(){this.L=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this.Πg}shouldUpdate(t){return!0}update(t){void 0!==this.Πk&&(this.Πk.forEach(((t,i)=>this.Πj(i,this[i],t))),this.Πk=void 0),this.Π$()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var v,f,w,x;m.finalized=!0,m.elementProperties=new Map,m.elementStyles=[],m.shadowRootOptions={mode:"open"},null===(p=(l=globalThis).reactiveElementPlatformSupport)||void 0===p||p.call(l,{ReactiveElement:m}),(null!==(d=(c=globalThis).reactiveElementVersions)&&void 0!==d?d:c.reactiveElementVersions=[]).push("1.0.0-rc.2");const b=globalThis.trustedTypes,y=b?b.createPolicy("lit-html",{createHTML:t=>t}):void 0,$=`lit$${(Math.random()+"").slice(9)}$`,k="?"+$,S=`<${k}>`,U=document,A=(t="")=>U.createComment(t),C=t=>null===t||"object"!=typeof t&&"function"!=typeof t,F=Array.isArray,N=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,T=/-->/g,P=/>/g,z=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,O=/'/g,E=/"/g,I=/^(?:script|style|textarea)$/i,W=Symbol.for("lit-noChange"),L=Symbol.for("lit-nothing"),H=new WeakMap,j=U.createTreeWalker(U,129,null,!1);class R{constructor({strings:t,_$litType$:i},e){let s;this.parts=[];let o=0,n=0;const r=t.length-1,a=this.parts,[l,p]=((t,i)=>{const e=t.length-1,s=[];let o,n=2===i?"<svg>":"",r=N;for(let i=0;i<e;i++){const e=t[i];let a,l,p=-1,d=0;for(;d<e.length&&(r.lastIndex=d,l=r.exec(e),null!==l);)d=r.lastIndex,r===N?"!--"===l[1]?r=T:void 0!==l[1]?r=P:void 0!==l[2]?(I.test(l[2])&&(o=RegExp("</"+l[2],"g")),r=z):void 0!==l[3]&&(r=z):r===z?">"===l[0]?(r=null!=o?o:N,p=-1):void 0===l[1]?p=-2:(p=r.lastIndex-l[2].length,a=l[1],r=void 0===l[3]?z:'"'===l[3]?E:O):r===E||r===O?r=z:r===T||r===P?r=N:(r=z,o=void 0);const c=r===z&&t[i+1].startsWith("/>")?" ":"";n+=r===N?e+S:p>=0?(s.push(a),e.slice(0,p)+"$lit$"+e.slice(p)+$+c):e+$+(-2===p?(s.push(void 0),i):c)}const a=n+(t[e]||"<?>")+(2===i?"</svg>":"");return[void 0!==y?y.createHTML(a):a,s]})(t,i);if(this.el=R.createElement(l,e),j.currentNode=this.el.content,2===i){const t=this.el.content,i=t.firstChild;i.remove(),t.append(...i.childNodes)}for(;null!==(s=j.nextNode())&&a.length<r;){if(1===s.nodeType){if(s.hasAttributes()){const t=[];for(const i of s.getAttributeNames())if(i.endsWith("$lit$")||i.startsWith($)){const e=p[n++];if(t.push(i),void 0!==e){const t=s.getAttribute(e.toLowerCase()+"$lit$").split($),i=/([.?@])?(.*)/.exec(e);a.push({type:1,index:o,name:i[2],strings:t,ctor:"."===i[1]?V:"?"===i[1]?q:"@"===i[1]?K:D})}else a.push({type:6,index:o})}for(const i of t)s.removeAttribute(i)}if(I.test(s.tagName)){const t=s.textContent.split($),i=t.length-1;if(i>0){s.textContent=b?b.emptyScript:"";for(let e=0;e<i;e++)s.append(t[e],A()),j.nextNode(),a.push({type:2,index:++o});s.append(t[i],A())}}}else if(8===s.nodeType)if(s.data===k)a.push({type:2,index:o});else{let t=-1;for(;-1!==(t=s.data.indexOf($,t+1));)a.push({type:7,index:o}),t+=$.length-1}o++}}static createElement(t,i){const e=U.createElement("template");return e.innerHTML=t,e}}function B(t,i,e=t,s){var o,n,r,a;if(i===W)return i;let l=void 0!==s?null===(o=e.Σi)||void 0===o?void 0:o[s]:e.Σo;const p=C(i)?void 0:i._$litDirective$;return(null==l?void 0:l.constructor)!==p&&(null===(n=null==l?void 0:l.O)||void 0===n||n.call(l,!1),void 0===p?l=void 0:(l=new p(t),l.T(t,e,s)),void 0!==s?(null!==(r=(a=e).Σi)&&void 0!==r?r:a.Σi=[])[s]=l:e.Σo=l),void 0!==l&&(i=B(t,l.S(t,i.values),l,s)),i}class M{constructor(t,i){this.l=[],this.N=void 0,this.D=t,this.M=i}u(t){var i;const{el:{content:e},parts:s}=this.D,o=(null!==(i=null==t?void 0:t.creationScope)&&void 0!==i?i:U).importNode(e,!0);j.currentNode=o;let n=j.nextNode(),r=0,a=0,l=s[0];for(;void 0!==l;){if(r===l.index){let i;2===l.type?i=new _(n,n.nextSibling,this,t):1===l.type?i=new l.ctor(n,l.name,l.strings,this,t):6===l.type&&(i=new J(n,this,t)),this.l.push(i),l=s[++a]}r!==(null==l?void 0:l.index)&&(n=j.nextNode(),r++)}return o}v(t){let i=0;for(const e of this.l)void 0!==e&&(void 0!==e.strings?(e.I(t,e,i),i+=e.strings.length-2):e.I(t[i])),i++}}class _{constructor(t,i,e,s){this.type=2,this.N=void 0,this.A=t,this.B=i,this.M=e,this.options=s}setConnected(t){var i;null===(i=this.P)||void 0===i||i.call(this,t)}get parentNode(){return this.A.parentNode}get startNode(){return this.A}get endNode(){return this.B}I(t,i=this){t=B(this,t,i),C(t)?t===L||null==t||""===t?(this.H!==L&&this.R(),this.H=L):t!==this.H&&t!==W&&this.m(t):void 0!==t._$litType$?this._(t):void 0!==t.nodeType?this.$(t):(t=>{var i;return F(t)||"function"==typeof(null===(i=t)||void 0===i?void 0:i[Symbol.iterator])})(t)?this.g(t):this.m(t)}k(t,i=this.B){return this.A.parentNode.insertBefore(t,i)}$(t){this.H!==t&&(this.R(),this.H=this.k(t))}m(t){const i=this.A.nextSibling;null!==i&&3===i.nodeType&&(null===this.B?null===i.nextSibling:i===this.B.previousSibling)?i.data=t:this.$(U.createTextNode(t)),this.H=t}_(t){var i;const{values:e,_$litType$:s}=t,o="number"==typeof s?this.C(t):(void 0===s.el&&(s.el=R.createElement(s.h,this.options)),s);if((null===(i=this.H)||void 0===i?void 0:i.D)===o)this.H.v(e);else{const t=new M(o,this),i=t.u(this.options);t.v(e),this.$(i),this.H=t}}C(t){let i=H.get(t.strings);return void 0===i&&H.set(t.strings,i=new R(t)),i}g(t){F(this.H)||(this.H=[],this.R());const i=this.H;let e,s=0;for(const o of t)s===i.length?i.push(e=new _(this.k(A()),this.k(A()),this,this.options)):e=i[s],e.I(o),s++;s<i.length&&(this.R(e&&e.B.nextSibling,s),i.length=s)}R(t=this.A.nextSibling,i){var e;for(null===(e=this.P)||void 0===e||e.call(this,!1,!0,i);t&&t!==this.B;){const i=t.nextSibling;t.remove(),t=i}}}class D{constructor(t,i,e,s,o){this.type=1,this.H=L,this.N=void 0,this.V=void 0,this.element=t,this.name=i,this.M=s,this.options=o,e.length>2||""!==e[0]||""!==e[1]?(this.H=Array(e.length-1).fill(L),this.strings=e):this.H=L}get tagName(){return this.element.tagName}I(t,i=this,e,s){const o=this.strings;let n=!1;if(void 0===o)t=B(this,t,i,0),n=!C(t)||t!==this.H&&t!==W,n&&(this.H=t);else{const s=t;let r,a;for(t=o[0],r=0;r<o.length-1;r++)a=B(this,s[e+r],i,r),a===W&&(a=this.H[r]),n||(n=!C(a)||a!==this.H[r]),a===L?t=L:t!==L&&(t+=(null!=a?a:"")+o[r+1]),this.H[r]=a}n&&!s&&this.W(t)}W(t){t===L?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class V extends D{constructor(){super(...arguments),this.type=3}W(t){this.element[this.name]=t===L?void 0:t}}class q extends D{constructor(){super(...arguments),this.type=4}W(t){t&&t!==L?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)}}class K extends D{constructor(){super(...arguments),this.type=5}I(t,i=this){var e;if((t=null!==(e=B(this,t,i,0))&&void 0!==e?e:L)===W)return;const s=this.H,o=t===L&&s!==L||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,n=t!==L&&(s===L||o);o&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,t),this.H=t}handleEvent(t){var i,e;"function"==typeof this.H?this.H.call(null!==(e=null===(i=this.options)||void 0===i?void 0:i.host)&&void 0!==e?e:this.element,t):this.H.handleEvent(t)}}class J{constructor(t,i,e){this.element=t,this.type=6,this.N=void 0,this.V=void 0,this.M=i,this.options=e}I(t){B(this,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var Z,G,Q,X;null===(f=(v=globalThis).litHtmlPlatformSupport)||void 0===f||f.call(v,R,_),(null!==(w=(x=globalThis).litHtmlVersions)&&void 0!==w?w:x.litHtmlVersions=[]).push("2.0.0-rc.3");const Y=globalThis.trustedTypes,tt=Y?Y.createPolicy("lit-html",{createHTML:t=>t}):void 0,it=`lit$${(Math.random()+"").slice(9)}$`,et="?"+it,st=`<${et}>`,ot=document,nt=(t="")=>ot.createComment(t),rt=t=>null===t||"object"!=typeof t&&"function"!=typeof t,at=Array.isArray,lt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,pt=/-->/g,dt=/>/g,ct=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,ht=/'/g,ut=/"/g,gt=/^(?:script|style|textarea)$/i,mt=(t=>(i,...e)=>({_$litType$:t,strings:i,values:e}))(1),vt=Symbol.for("lit-noChange"),ft=Symbol.for("lit-nothing"),wt=new WeakMap,xt=ot.createTreeWalker(ot,129,null,!1);class bt{constructor({strings:t,_$litType$:i},e){let s;this.parts=[];let o=0,n=0;const r=t.length-1,a=this.parts,[l,p]=((t,i)=>{const e=t.length-1,s=[];let o,n=2===i?"<svg>":"",r=lt;for(let i=0;i<e;i++){const e=t[i];let a,l,p=-1,d=0;for(;d<e.length&&(r.lastIndex=d,l=r.exec(e),null!==l);)d=r.lastIndex,r===lt?"!--"===l[1]?r=pt:void 0!==l[1]?r=dt:void 0!==l[2]?(gt.test(l[2])&&(o=RegExp("</"+l[2],"g")),r=ct):void 0!==l[3]&&(r=ct):r===ct?">"===l[0]?(r=null!=o?o:lt,p=-1):void 0===l[1]?p=-2:(p=r.lastIndex-l[2].length,a=l[1],r=void 0===l[3]?ct:'"'===l[3]?ut:ht):r===ut||r===ht?r=ct:r===pt||r===dt?r=lt:(r=ct,o=void 0);const c=r===ct&&t[i+1].startsWith("/>")?" ":"";n+=r===lt?e+st:p>=0?(s.push(a),e.slice(0,p)+"$lit$"+e.slice(p)+it+c):e+it+(-2===p?(s.push(void 0),i):c)}const a=n+(t[e]||"<?>")+(2===i?"</svg>":"");return[void 0!==tt?tt.createHTML(a):a,s]})(t,i);if(this.el=bt.createElement(l,e),xt.currentNode=this.el.content,2===i){const t=this.el.content,i=t.firstChild;i.remove(),t.append(...i.childNodes)}for(;null!==(s=xt.nextNode())&&a.length<r;){if(1===s.nodeType){if(s.hasAttributes()){const t=[];for(const i of s.getAttributeNames())if(i.endsWith("$lit$")||i.startsWith(it)){const e=p[n++];if(t.push(i),void 0!==e){const t=s.getAttribute(e.toLowerCase()+"$lit$").split(it),i=/([.?@])?(.*)/.exec(e);a.push({type:1,index:o,name:i[2],strings:t,ctor:"."===i[1]?Ut:"?"===i[1]?At:"@"===i[1]?Ct:St})}else a.push({type:6,index:o})}for(const i of t)s.removeAttribute(i)}if(gt.test(s.tagName)){const t=s.textContent.split(it),i=t.length-1;if(i>0){s.textContent=Y?Y.emptyScript:"";for(let e=0;e<i;e++)s.append(t[e],nt()),xt.nextNode(),a.push({type:2,index:++o});s.append(t[i],nt())}}}else if(8===s.nodeType)if(s.data===et)a.push({type:2,index:o});else{let t=-1;for(;-1!==(t=s.data.indexOf(it,t+1));)a.push({type:7,index:o}),t+=it.length-1}o++}}static createElement(t,i){const e=ot.createElement("template");return e.innerHTML=t,e}}function yt(t,i,e=t,s){var o,n,r,a;if(i===vt)return i;let l=void 0!==s?null===(o=e.Σi)||void 0===o?void 0:o[s]:e.Σo;const p=rt(i)?void 0:i._$litDirective$;return(null==l?void 0:l.constructor)!==p&&(null===(n=null==l?void 0:l.O)||void 0===n||n.call(l,!1),void 0===p?l=void 0:(l=new p(t),l.T(t,e,s)),void 0!==s?(null!==(r=(a=e).Σi)&&void 0!==r?r:a.Σi=[])[s]=l:e.Σo=l),void 0!==l&&(i=yt(t,l.S(t,i.values),l,s)),i}class $t{constructor(t,i){this.l=[],this.N=void 0,this.D=t,this.M=i}u(t){var i;const{el:{content:e},parts:s}=this.D,o=(null!==(i=null==t?void 0:t.creationScope)&&void 0!==i?i:ot).importNode(e,!0);xt.currentNode=o;let n=xt.nextNode(),r=0,a=0,l=s[0];for(;void 0!==l;){if(r===l.index){let i;2===l.type?i=new kt(n,n.nextSibling,this,t):1===l.type?i=new l.ctor(n,l.name,l.strings,this,t):6===l.type&&(i=new Ft(n,this,t)),this.l.push(i),l=s[++a]}r!==(null==l?void 0:l.index)&&(n=xt.nextNode(),r++)}return o}v(t){let i=0;for(const e of this.l)void 0!==e&&(void 0!==e.strings?(e.I(t,e,i),i+=e.strings.length-2):e.I(t[i])),i++}}class kt{constructor(t,i,e,s){this.type=2,this.N=void 0,this.A=t,this.B=i,this.M=e,this.options=s}setConnected(t){var i;null===(i=this.P)||void 0===i||i.call(this,t)}get parentNode(){return this.A.parentNode}get startNode(){return this.A}get endNode(){return this.B}I(t,i=this){t=yt(this,t,i),rt(t)?t===ft||null==t||""===t?(this.H!==ft&&this.R(),this.H=ft):t!==this.H&&t!==vt&&this.m(t):void 0!==t._$litType$?this._(t):void 0!==t.nodeType?this.$(t):(t=>{var i;return at(t)||"function"==typeof(null===(i=t)||void 0===i?void 0:i[Symbol.iterator])})(t)?this.g(t):this.m(t)}k(t,i=this.B){return this.A.parentNode.insertBefore(t,i)}$(t){this.H!==t&&(this.R(),this.H=this.k(t))}m(t){const i=this.A.nextSibling;null!==i&&3===i.nodeType&&(null===this.B?null===i.nextSibling:i===this.B.previousSibling)?i.data=t:this.$(ot.createTextNode(t)),this.H=t}_(t){var i;const{values:e,_$litType$:s}=t,o="number"==typeof s?this.C(t):(void 0===s.el&&(s.el=bt.createElement(s.h,this.options)),s);if((null===(i=this.H)||void 0===i?void 0:i.D)===o)this.H.v(e);else{const t=new $t(o,this),i=t.u(this.options);t.v(e),this.$(i),this.H=t}}C(t){let i=wt.get(t.strings);return void 0===i&&wt.set(t.strings,i=new bt(t)),i}g(t){at(this.H)||(this.H=[],this.R());const i=this.H;let e,s=0;for(const o of t)s===i.length?i.push(e=new kt(this.k(nt()),this.k(nt()),this,this.options)):e=i[s],e.I(o),s++;s<i.length&&(this.R(e&&e.B.nextSibling,s),i.length=s)}R(t=this.A.nextSibling,i){var e;for(null===(e=this.P)||void 0===e||e.call(this,!1,!0,i);t&&t!==this.B;){const i=t.nextSibling;t.remove(),t=i}}}class St{constructor(t,i,e,s,o){this.type=1,this.H=ft,this.N=void 0,this.V=void 0,this.element=t,this.name=i,this.M=s,this.options=o,e.length>2||""!==e[0]||""!==e[1]?(this.H=Array(e.length-1).fill(ft),this.strings=e):this.H=ft}get tagName(){return this.element.tagName}I(t,i=this,e,s){const o=this.strings;let n=!1;if(void 0===o)t=yt(this,t,i,0),n=!rt(t)||t!==this.H&&t!==vt,n&&(this.H=t);else{const s=t;let r,a;for(t=o[0],r=0;r<o.length-1;r++)a=yt(this,s[e+r],i,r),a===vt&&(a=this.H[r]),n||(n=!rt(a)||a!==this.H[r]),a===ft?t=ft:t!==ft&&(t+=(null!=a?a:"")+o[r+1]),this.H[r]=a}n&&!s&&this.W(t)}W(t){t===ft?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class Ut extends St{constructor(){super(...arguments),this.type=3}W(t){this.element[this.name]=t===ft?void 0:t}}class At extends St{constructor(){super(...arguments),this.type=4}W(t){t&&t!==ft?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)}}class Ct extends St{constructor(){super(...arguments),this.type=5}I(t,i=this){var e;if((t=null!==(e=yt(this,t,i,0))&&void 0!==e?e:ft)===vt)return;const s=this.H,o=t===ft&&s!==ft||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,n=t!==ft&&(s===ft||o);o&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,t),this.H=t}handleEvent(t){var i,e;"function"==typeof this.H?this.H.call(null!==(e=null===(i=this.options)||void 0===i?void 0:i.host)&&void 0!==e?e:this.element,t):this.H.handleEvent(t)}}class Ft{constructor(t,i,e){this.element=t,this.type=6,this.N=void 0,this.V=void 0,this.M=i,this.options=e}I(t){yt(this,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var Nt,Tt,Pt,zt,Ot,Et;null===(G=(Z=globalThis).litHtmlPlatformSupport)||void 0===G||G.call(Z,bt,kt),(null!==(Q=(X=globalThis).litHtmlVersions)&&void 0!==Q?Q:X.litHtmlVersions=[]).push("2.0.0-rc.3"),(null!==(Nt=(Et=globalThis).litElementVersions)&&void 0!==Nt?Nt:Et.litElementVersions=[]).push("3.0.0-rc.2");class It extends m{constructor(){super(...arguments),this.renderOptions={host:this},this.Φt=void 0}createRenderRoot(){var t,i;const e=super.createRenderRoot();return null!==(t=(i=this.renderOptions).renderBefore)&&void 0!==t||(i.renderBefore=e.firstChild),e}update(t){const i=this.render();super.update(t),this.Φt=((t,i,e)=>{var s,o;const n=null!==(s=null==e?void 0:e.renderBefore)&&void 0!==s?s:i;let r=n._$litPart$;if(void 0===r){const t=null!==(o=null==e?void 0:e.renderBefore)&&void 0!==o?o:null;n._$litPart$=r=new kt(i.insertBefore(nt(),t),t,void 0,e)}return r.I(t),r})(i,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this.Φt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this.Φt)||void 0===t||t.setConnected(!1)}render(){return vt}}It.finalized=!0,It._$litElement$=!0,null===(Pt=(Tt=globalThis).litElementHydrateSupport)||void 0===Pt||Pt.call(Tt,{LitElement:It}),null===(Ot=(zt=globalThis).litElementPlatformSupport)||void 0===Ot||Ot.call(zt,{LitElement:It});
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Wt=t=>i=>"function"==typeof i?((t,i)=>(window.customElements.define(t,i),i))(t,i):((t,i)=>{const{kind:e,elements:s}=i;return{kind:e,elements:s,finisher(i){window.customElements.define(t,i)}}})(t,i)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,Lt=(t,i)=>"method"===i.kind&&i.descriptor&&!("value"in i.descriptor)?{...i,finisher(e){e.createProperty(i.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:i.key,initializer(){"function"==typeof i.initializer&&(this[i.key]=i.initializer.call(this))},finisher(e){e.createProperty(i.key,t)}};function Ht(t){return(i,e)=>void 0!==e?((t,i,e)=>{i.constructor.createProperty(e,t)})(t,i,e):Lt(t,i)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}function jt(t){return Ht({...t,state:!0,attribute:!1})}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Rt=1,Bt=t=>(...i)=>({_$litDirective$:t,values:i});class Mt{constructor(t){}T(t,i,e){this.Σdt=t,this.M=i,this.Σct=e}S(t,i){return this.update(t,i)}update(t,i){return this.render(...i)}}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _t=Bt(class extends Mt{constructor(t){var i;if(super(t),t.type!==Rt||"style"!==t.name||(null===(i=t.strings)||void 0===i?void 0:i.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce(((i,e)=>{const s=t[e];return null==s?i:i+`${e=e.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${s};`}),"")}update(t,[i]){const{style:e}=t.element;if(void 0===this.St){this.St=new Set;for(const t in i)this.St.add(t);return this.render(i)}this.St.forEach((t=>{null==i[t]&&(this.St.delete(t),t.includes("-")?e.removeProperty(t):e[t]="")}));for(const t in i){const s=i[t];null!=s&&(this.St.add(t),t.includes("-")?e.setProperty(t,s):e[t]=s)}return W}}),Dt=Bt(class extends Mt{constructor(t){var i;if(super(t),t.type!==Rt||"class"!==t.name||(null===(i=t.strings)||void 0===i?void 0:i.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).filter((i=>t[i])).join(" ")}update(t,[i]){if(void 0===this.bt){this.bt=new Set;for(const t in i)i[t]&&this.bt.add(t);return this.render(i)}const e=t.element.classList;this.bt.forEach((t=>{t in i||(e.remove(t),this.bt.delete(t))}));for(const t in i){const s=!!i[t];s!==this.bt.has(t)&&(s?(e.add(t),this.bt.add(t)):(e.remove(t),this.bt.delete(t)))}return W}});
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Vt extends It{constructor(){super(...arguments),this.platform="windows",this.isInFullScreen=!1}mainContent(){switch(this.platform){case"windows":return this.renderWindows();case"android":return this.renderAndroid();case"iOS":return this.renderiOS()}}render(){return mt`
      ${this.isInFullScreen?null:mt`
          <slot class="preview-title" name="title"></slot>
          <slot class="preview-info" name="info-${this.platform}"></slot>
        `}
      <div class=${this.isInFullScreen?"fullscreen-content":""}>
        ${this.mainContent()}
      </div>
    `}}Vt.styles=r`
    .preview-title {
      margin: 10px auto;
      width: fit-content;
      font-weight: 600;
      font-size: 14px;
      text-align: center;
    }

    .preview-info {
      margin: 0 auto;
      font-weight: 400;
      font-size: 12px;
      line-height: 16px;
      text-align: center;
      color: var(--secondary-font-color);
      width: 230px;
      display: block;
    }

    .fullscreen-content {
      transform: scale(2.1);
      margin-top: 10vh;
      max-height: 10vh;
    }
  `,t([Ht()],Vt.prototype,"platform",void 0),t([Ht({type:Boolean})],Vt.prototype,"isInFullScreen",void 0);let qt=class extends Vt{constructor(){super(...arguments),this.siteUrl="",this.manifestUrl=""}static get styles(){return[super.styles,r`
        .container {
          position: relative;
          width: 220px;
          margin: 20px auto 0;
        }

        .container.windows {
          margin: 80px auto 0;
          font-family: var(--windows-font-family);
        }

        .container.android {
          width: 200px;
        }

        .android .preview-img {
          position: absolute;
          width: 100%;
          height: auto;
          top: 0;
          bottom: 0;
          right: 0;
          left: 0;
          margin: 0 auto;
          background: #FFF;
          box-shadow: var(--card-box-shadow);
          border-radius: 8.11976px;
          object-fit: cover;
          z-index: -1;
        }

        .android .url-bar {
          background-color: rgb(215, 215, 215);
          opacity: 0.5;
          position: absolute;
          top: 48px;
          left: 58px;
          font-size: 6.5px;
          width: 90px;
          overflow-x: hidden;
          white-space: nowrap;
        }

        .android .dialog {
          background-color: #FFF;
          position: absolute;
          width: 100%;
          top: 174px;
          height: 250px;
          border-radius: 7px 7px 0 0;
          font-family: Roboto;
          padding: 9px;
          box-sizing: border-box;
        }

        .android .swipe-bar {
          background-color: rgb(215, 215, 215);
          width: 15px;
          height: 1px;
          position: absolute;
          top: 3px;
          border-radius: 10px;
          left: calc(50% - 7.5px);
        }

        .android .dialog-header {
          display: flex;
        }

        .android .dialog-header img {
          width: 18px;
          height: 18px;
          margin-right: 8px;
        }

        .android .app-name {
          font-size: 8px;
          margin: 0;
        }

        .android .app-url {
          font-size: 8px;
          color: rgb(215, 215, 215);
          white-space: nowrap;
          margin: 0;
          width: 90px;
          overflow-x: hidden;
        }

        .android .install-btn {
          background-color: #4285F4;
          color: #FFF;
          display: flex; 
          align-items: center;
          justify-content: center;
          width: 50px;
          height: 22px;
          font-size: 8px;
          border-radius: 2px;
          margin-left: auto;
        }

        .android .divider {
          background-color: rgb(215, 215, 215);
          height: 1px;
          width: 200px;
          margin: 5px 0 10px -9px;
        }

        .android .description {
          width: 100%;
          margin: 0;
          font-size: 8px;
        }

        .android .screenshots {
          width: calc(100% - 19px);
          display: flex;
          height: 155px;
          margin-top: 10px;
          overflow-x: hidden;
          position: absolute;
          bottom: 8px;
        }

        .android .screenshots img {
          width: auto;
          height: 100%;
          margin-right: 5%;
        }

        .windows .preview-img {
          position: absolute;
          width: 100%;
          height: 204px;
          top: 0;
        }

        .windows .add-dialog {
          background-color: #FFF;
          width: 208px;
          height: 118px;
          position: absolute;
          top: 36px;
          left: 6px;
          z-index: 1;
          padding: 12px;
          box-sizing: border-box;
          box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
          border-radius: 6px;
        }

        .windows .add-dialog .header {
          display: flex;
        }

        .windows .add-dialog .icon {
          width: 17.5px;
          height: 17.5px;
          border-radius: 50%;
        }

        .windows .add-dialog .dialog-title {
          margin: 0 0 0 7px;
          font-size: 12px;
          font-weight: 600;
        }

        .windows .add-dialog .dialog-text {
          margin: 0 0 7px 25px;
          font-size: 7px;
        } 

        .windows .dialog-text {
          font-family: Roboto;
          font-weight: 400;
          font-size: 7.84722px;
          margin: 0;
        }

        .windows .action-buttons {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 10px;
        }

        .windows .action-buttons div {
          font-size: 8px;
          font-weight: 600;
          height: 18px;
          width: 48%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .windows .action-buttons .install {
          color: #FFF;
          background-color: #0579CE;
        }

        .windows .action-buttons .cancel {
          background-color: #EFEFEF;
        }

        .ios .phone-img {
          width: 100%;
          box-shadow: var(--card-box-shadow);
        }

        .ios .add-btn {
          font-family: var(--ios-font-family);
          position: absolute;
          font-weight: 600;
          top: 0;
          right: 0;
          background-color: #FAFAFA;
          width: 38px;
          height: 28px;
          font-size: 11px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #147EFB;
        }

        .ios .icon {
          position: absolute;
          top: 58px;
          left: 7px;
          background-color: #FFF;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 37px;
          height: 37px;
        }
    
        .ios .icon img {
          width: 100%;
          height: 100%;
        }

        .ios .hidden {
          position: absolute;
          background-color: #F1F1F1;
          top: 238px;
          height: 34px;
          width: 100%;
        }

        .ios .app-name {
          background-color: #FFF;
          position: absolute;
          top: 58px;
          left: 52px;
          font-size: 11px;
          font-family: var(--ios-font-family);
          font-weight: 600;
        }

        .ios .app-link {
          overflow-x: hidden;
          color: rgb(186, 191, 200);
          background-color: #FFF;
          position: absolute;
          top: 86px;
          left: 52px;
          font-size: 9px;
          width: 159px;
          font-family: var(--ios-font-family);
          white-space: nowrap;
        }
      `]}getImageUrl(t){return`https://pwabuilder-safe-url.azurewebsites.net/api/getsafeurl?url=${new URL(t,this.manifestUrl).href}`}renderWindows(){return mt`
      <div class="container windows">
        <div class="add-dialog">
          <div class="header">
            ${this.iconUrl?mt`<img class="icon" alt="App's Windows icon" src=${this.iconUrl} />`:mt`<div class="icon"></div>`}
            <p class="dialog-title">Install ${this.appName||"PWA App"}</p>
          </div>
          <p class="dialog-text">Publisher: ${this.siteUrl}</p>
          <p class="dialog-text">
            This site can be installed as an application. It will open in its own window and 
            safely integrate with Window Features.
          </p>
          <div class="action-buttons">
            <div class="install">Install</div>
            <div class="cancel">Not Now</div>
          </div>
        </div>
        <img  
        class="preview-img"
        alt="Application mobile preview" 
        src="../PWABuilder-previewer/assets/images/windows/background.svg" />
      </div>
    `}renderAndroid(){var t;return mt`
      <div class="container android">
        <div class="url-bar">${this.siteUrl}</div>
        <div class="dialog">
          <div class="swipe-bar"></div>
          <div class="dialog-header">
            ${this.iconUrl?mt`<img alt="App icon" src=${this.iconUrl} />`:null}
            <div class="header-text">
              <p class="app-name">${this.appName}</p>
              <p class="app-url">${this.siteUrl}</p>
            </div>
            <div class="install-btn">Install</div>
          </div>
          <div class="divider"></div>
          <p class="description">
            ${this.description||"A description of your app."}
          </p>
          <div class="screenshots">
            ${null===(t=this.screenshots)||void 0===t?void 0:t.slice(0,2).map((t=>mt`<img alt="Preview" src=${this.getImageUrl(t.src)} />`))}
          </div>
        </div>
        <img 
        class="preview-img"
        alt="Application mobile preview" 
        src="../PWABuilder-previewer/assets/images/android/background.svg" />
      </div>
    `}renderiOS(){return mt`
      <div class="container ios">
        <div class="add-btn">Add</div>
        <img class="phone-img" alt="iOS PWA installation" src="../PWABuilder-previewer/assets/images/ios/add-to-home.png" />
        <div class="hidden"></div>
        <div class="icon">
          ${this.iconUrl?mt`<img alt="App icon" src=${this.iconUrl} />`:null}
        </div>
        <div class="app-name">${this.appName}</div>
        <div class="app-link">${this.siteUrl}</div>
      </div>
    `}};t([Ht()],qt.prototype,"iconUrl",void 0),t([Ht()],qt.prototype,"siteUrl",void 0),t([Ht()],qt.prototype,"manifestUrl",void 0),t([Ht()],qt.prototype,"appName",void 0),t([Ht()],qt.prototype,"appShortName",void 0),t([Ht()],qt.prototype,"description",void 0),t([Ht({type:Array})],qt.prototype,"screenshots",void 0),qt=t([Wt("install-screen")],qt);const Kt=t=>{const i=document.createElement("canvas");i.width=1,i.height=1;const e=i.getContext("2d");e.fillStyle=t,e.fillRect(0,0,1,1);const[s,o,n]=e.getImageData(0,0,1,1).data;return`hsl(0, 0%, ${-1e7*((.2126*s+.7152*o+.0722*n)/255-.5)}%)`};let Jt=class extends Vt{constructor(){super(...arguments),this.contrastingBackgroundColor=""}static get styles(){return[super.styles,r`
        .container {
          position: relative;
          width: 220px;
          margin: 10px auto 0;
        }

        .android .phone {
          position: absolute;
          width: 100%;
          height: 460px;
          top: 0;
          background: #FFF;
          box-shadow: var(--card-box-shadow);
          border-radius: 8.11976px;
          object-fit: cover;
          object-position: top;
          z-index: -1;
        }

        .android .screen {
          position: absolute;
          width: 100%;
          height: 400px;
          top: 19px;
          border-radius: 8.12px;
          display: flex;
          flex-direction: column;
          align-items: center;
          background-color: var(--pwa-background-color);
        }

        .phone-bar {
          padding: 7px 0;
          width: 100%;
          background-color: var(--pwa-theme-color);
        }

        .icon {
          margin: auto;
          width: 90px;
          height: 90px;
          margin-top: calc(40% + 45px);
        }

        .app-name {
          width: fit-content;
          margin: 0 auto 30px;
          font-size: 16px;
        }

        .container.ios {
          margin-top: 30px;
        }

        .ios .phone {
          width: 100%;
          position: absolute;
          top: 0;
          box-shadow: var(--card-box-shadow);
          border-radius: 16px;
          object-fit: none;
        }

        .ios .screen {
          height: 280px;
          width: 188px;
          position: absolute;
          top: 66px;
          left: 16px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          font-family: var(--ios-font-family);
          background-color: var(--pwa-background-color);
        }

        .ios .status-bar {
          width: 100%;
          position: absolute;
          top: 2px;
          height: 19px;
          object-fit: cover;
          object-position: top;
        }

        .ios .icon {
          margin: 0 0 10px;
          width: 80px;
          height: 80px;
        }

        .container.windows {
          width: 250px;
          margin-top: 30px;
        }

        .windows img.desktop {
          position: absolute;
          inset: 0;
          width: 100%;
          box-shadow: var(--card-box-shadow);
        }

        .windows .screen {
          display: flex;
          align-items: center;
          justify-content: center;
          position: absolute;
          width: 100px;
          height: 55px;
          top: 45px;
          left: calc(50% - 50px);
          background-color: var(--pwa-background-color);
        }

        .windows .app-info {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: fit-content
        }

        .windows .app-info img {
          width: 30px;
          height: 30px;
          margin-right: 5px;
        }

        .windows .app-info p {
          margin: 0;
          font-size: 10px;
          font-weight: 600;
          font-family: var(--windows-font-family);
        }

        .windows .window-actions {
          position: absolute;
          top: 2px;
          right: 2px;
          display: flex;
          align-items: center;
        }

        .windows .window-actions .collapse {
          width: 4px;
          height: 0.1px;
          margin-right: 3px;
        }
      `]}firstUpdated(){this.contrastingBackgroundColor=this.backgroundColor?Kt(this.backgroundColor):"#000"}renderWindows(){return mt`
      <div 
      class="container windows">
        <img class="desktop" alt="Window's desktop" src="../PWABuilder-previewer/assets/images/windows/desktop.png" />
        <div class="screen" style=${_t({"--pwa-background-color":this.backgroundColor})}>
          <div class="window-actions">
            <div class="collapse" style=${_t({backgroundColor:this.contrastingBackgroundColor})}></div>
            <svg class="close" width="4px" height="4px" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000" xml:space="preserve">
              <g><path style="fill:${this.contrastingBackgroundColor}" d="M990,61.2L933.3,5.1L500,443.3L66.7,5.1L10,61.2L443.9,500L10,938.8l56.7,56.1L500,556.7l433.3,438.2l56.7-56.1L556.1,500L990,61.2z"/></g>
            </svg>
          </div>
          <div class="app-info">
            ${this.iconUrl?mt`<img src=${this.iconUrl} alt="App's splash screen" />`:null}
            <p style=${_t({color:this.contrastingBackgroundColor})}>
              ${this.appName||"PWA App"}
            </p>
          </div>
        </div>
      </div>
    `}renderAndroid(){return mt`
    <div class="container android">
      <img class="phone" alt="Application mobile preview" src="../PWABuilder-previewer/assets/images/android/background.svg" />
      <div class="screen" style=${_t({"--pwa-background-color":this.backgroundColor})}>
        <div 
        class="phone-bar"
        style=${_t({"--pwa-background-color":this.themeColor})}></div>
        ${this.iconUrl?mt`
          <img 
          class="icon" 
          src=${this.iconUrl} 
          alt="App's splash screen" />
          `:mt`<div class="icon"></div>`}
        <h5 class="app-name" style=${_t({color:this.contrastingBackgroundColor})}>
          ${this.appName||"PWA App"}
        </h5>
        <div class="phone-bar" style=${_t({"--pwa-background-color":this.themeColor})}></div>
      </div>
    </div>
    `}renderiOS(){return mt`
      <div class="container ios"> 
        <img class="phone" alt="Iphone" src="../PWABuilder-previewer/assets/images/ios/iphone.svg" />
        <div class="screen" style=${_t({"--pwa-background-color":this.backgroundColor})}>
          <img class="status-bar" alt="iOS status bar" src="../PWABuilder-previewer/assets/images/ios/statusbar.svg" />
          ${this.iconUrl?mt`<img class="icon" src=${this.iconUrl} alt="App's splash screen" />`:null}
          <h5 class="app-name" style=${_t({color:this.contrastingBackgroundColor})}>
            ${this.appName||"PWA App"}
          </h5>
        </div>
      </div>
    `}};t([Ht()],Jt.prototype,"backgroundColor",void 0),t([Ht()],Jt.prototype,"themeColor",void 0),t([Ht()],Jt.prototype,"iconUrl",void 0),t([Ht()],Jt.prototype,"appName",void 0),t([jt()],Jt.prototype,"contrastingBackgroundColor",void 0),Jt=t([Wt("splash-screen")],Jt);let Zt=class extends Vt{static get styles(){return[super.styles,r`
        .container {
          position: relative;
          margin: 70px auto 0;
          width: 260px;
        }

        .container.ios {
          margin-top: 50px;
        }
    
        .menu-img {
          position: absolute;
          top: 0;
          width: 100%;
          box-shadow: var(--card-box-shadow);
        }
    
        .windows .app-container {
          background-color: #E5EBEC;
          position: absolute;
          display: flex;
          flex-direction: column;
          align-items: center;
          top: 33px;
          right: 95px;
          min-width: 30px;
          height: 23.5px;
          justify-content: flex-end;
        }
    
        .windows .app-name {
          color: rgba(0, 0, 0, 0.8);
          font-size: 4.5px;
          font-weight: 600;
          letter-spacing: -0.07px;
          margin-top: 2.5px;
          font-family: var(--windows-font-family); 
          max-width: 40px;
          white-space: nowrap;
          overflow-x: hidden;
        }
    
        .windows .app-icon {
          width: 15px;
          height: 15px;
        }
    
        .android .app-icon {
          position: absolute;
          top: 62px;
          width: 42px;
          height: 42px;
          left: calc(50% - 21px);
          background-color: #FFF;
        }
    
        .android .app-name {
          position: absolute;
          width: 100%;
          background-color: #FFF;
          text-align: center;
          font-size: 14px;
          top: 106px;
        }
    
        .ios .app-icon {
          position: absolute;
          background-color: #000;
          top: 20px;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 21px;
          height: 21px;
          top: 143px;
          left: 10px;
          border-radius: 5px;
        }
    
        .ios .app-icon img {
          width: 80%;
        }
    
        .ios .app-name {
          font-family: var(--ios-font-family);
          background-color: #F4F4F4;
          position: absolute;
          top: 146px;
          left: 41px;
          font-size: 13px;
          font-weight: 600;
          min-width: 50px;
        }
      `]}renderWindows(){return mt`
      <div class="windows container">
        <img alt="Windows start menu" src="../PWABuilder-previewer/assets/images/windows/startmenu.png" class="menu-img" />
        <div class="app-container">
          ${this.iconUrl?mt`<img alt="Application's icon" src=${this.iconUrl} class="app-icon" />`:null}
          <div class="app-name">${this.appName||"PWA App"}</div>
        </div>
      </div>
    `}renderAndroid(){return mt`
      <div class="android container">
        <img alt="Android app info" src="../PWABuilder-previewer/assets/images/android/appinfo.png" class="menu-img" />
        ${this.iconUrl?mt`<img alt="Application's icon" src=${this.iconUrl} class="app-icon" />`:mt`<div class="app-icon"></div>`}
        <div class="app-name">${this.appName||"PWA App"}</div>
      </div>
    `}renderiOS(){return mt`
      <div class="container ios">
        <img class="menu-img" alt="iOS settings" src="../PWABuilder-previewer/assets/images/ios/appsettings.jpg" />
        <div class="app-icon">
          ${this.iconUrl?mt`<img alt="Application's icon" src=${this.iconUrl} />`:null}
        </div>
        <div class="app-name">${this.appName||"PWA App"}</div>
      </div>
    `}};t([Ht()],Zt.prototype,"appName",void 0),t([Ht()],Zt.prototype,"iconUrl",void 0),Zt=t([Wt("name-screen")],Zt);let Gt=class extends Vt{static get styles(){return[super.styles,r`
        .windows-message {
          margin: 100px auto 0px;
          width: 70%;
        }

        .container {
          position: relative;
          width: 260px;
          margin: 70px auto 0;
        }

        .android .homescreen {
          width: 100%;
          border-radius: 10px;
        }

        .android .background {
          background: linear-gradient(#bc8aa3 0%,#eaa4c3 100%);
          width: 100%;
          position: absolute;
          top: 20px;
          bottom: 0;
          border-radius: 0 0 10px 10px;
        }

        .android .icon-container {
          display: flex;
          align-items: center;
          position: absolute;
          flex-direction: column;
          top: 50px;
          left: 10px;
        }

        .android .app-icon {
          border-radius: 50%;
          width: 50px;
          height: 50px;
        }

        .android .app-name {
          text-align: center;
          color: #FFF;
          font-size: 14px;
          text-shadow: 1px 2px 2px rgba(0, 0, 0, 0.46);
        }

        .ios .background {
          width: 100%;
          position: absolute;
          top: 0;
          box-shadow: var(--card-box-shadow);
        }

        .ios .app-name {
          position: absolute;
          top: 79px;
          left: 75px;
          width: 50px;
          text-align: center;
          background-color: rgb(113, 137, 150);
          color: rgb(255, 255, 255);
          font-family: var(--ios-font-family);
          font-size: 9px;
        }

        .ios .app-icon {
          background-color: rgb(0, 0, 0);
          display: flex;
          align-items: center;
          justify-content: center;
          width: 50px;
          position: absolute;
          top: 27px;
          left: 74px;
          height: 50px;
          border-radius: 11px;
        }

        .ios .app-icon img {
          width: 80%;
        }
      `]}renderWindows(){return mt`
      <name-screen
      .isInFullScreen=${this.isInFullScreen}
      .platform=${this.platform}
      .appName=${this.shortName}
      .iconUrl=${this.iconUrl}>
      </name-screen>
    `}renderAndroid(){return mt`
      <div class="android container">
        <div class="background"></div>
        <div class="icon-container">
          ${this.iconUrl?mt`<img alt="Application's icon" src=${this.iconUrl} class="app-icon" />`:null}
          <div class="app-name">${this.shortName||"PWA App"}</div>
        </div>
        <img class="homescreen" alt="Android's home screen" src="../PWABuilder-previewer/assets/images/android/homescreen.png" />
      </div>
    `}renderiOS(){return mt`
      <div class="ios container">
        <img class="background" alt="iOS home screen" src="../PWABuilder-previewer/assets/images/ios/homemenu.png" />
        <div class="app-name">${this.shortName||"PWA App"}</div>
        <div class="app-icon">
          ${this.iconUrl?mt`<img alt="Application's icon" src=${this.iconUrl} />`:null}
        </div>
      </div>
    `}};t([Ht()],Gt.prototype,"shortName",void 0),t([Ht()],Gt.prototype,"iconUrl",void 0),Gt=t([Wt("shortname-screen")],Gt);let Qt=class extends Vt{constructor(){super(...arguments),this.contrastingColor=""}static get styles(){return[super.styles,r`
        .container {
          position: relative;
          width: 250px;
          margin: 120px auto 0;
        }
    
        .windows .titlebar-img {
          position: absolute;
          top: 0;
          width: 100%;
          box-shadow: var(--card-box-shadow);
        }
    
        .windows .titlebar {
          position: absolute;
          height: 13px;
          width: calc(100% - 1px);
          top: 49px;
          display: flex;
          align-items: center;
          border: 0.5px solid grey;
          background-color: var(--pwa-theme-color);
          font-family: var(--windows-font-family); 
        }
    
        .windows .titlebar-actions {
          margin-right: 3px; 
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 50px;
        }
    
        .windows .titlebar-actions .collapse {
          width: 8px;
          height: 1px;
        }
    
        .windows .titlebar-actions .enlarge {
          width: 7px;
          height: 7px;
          border-width: 1px;
          border-style: solid;
        }
    
        .windows .app-name {
          font-size: 9px;
          width: fit-content;
          margin: 0 auto;
          display: inline-block;
        }
    
        .android .switcher-img {
          width: 100%;
          position: absolute; 
          top: 0;
          box-shadow: var(--card-box-shadow);
        }
    
        .android .app-box {
          border-radius: 3px 3px 0 0;
          display: flex;
          width: 163px;
          position: absolute;
          top: 33px;
          height: 42px;
          left: 44px;
          background-color: var(--pwa-theme-color);
        }
    
        .android .app-icon {
          border-radius: 50%;
          width: 30px;
          height: 30px;
          margin: -15px auto 0;
          background-color: #FFF;
        }
    
        .android .menu-actions {
          display: flex;
          width: 100%;
          justify-content: space-evenly;
          position: absolute;
          bottom: 4px;
          font-family: Roboto;
          font-size: 10px;
          letter-spacing: 0.3px;
          opacity: 0.7;
        }
    
        .android .menu-actions span:first-child {
          text-decoration: underline;
        }
    
        .container.ios {
          margin-top: 60px;
        }
    
        .ios .phone {
          width: 100%;
          height: 200px;
          position: absolute;
          top: 0px;
          overflow-y: hidden;
          object-fit: cover;
          object-position: top;
        }
    
        .ios .status-bar {
          position: absolute;
          top: 76px;
          height: 18px;
          left: 19.5px;
          width: 212px;
          background-color: var(--pwa-theme-color);
        }
    
        .ios .status-bar img {
          width: 100%;
          height: 16px;
          overflow-y: hidden;
          object-fit: cover;
          object-position: top;
        }
    
        @media(max-width: 1366px) {
          .windows .titlebar {
            bottom: 16px;
          }
    
          .android .app-box {
            width: 164px;
            top: 33px;
            height: 42px;
            left: 43px;
          }
    
          .android .app-icon {
            width: 26px;
            height: 26px;
            margin: -12px auto 0;
          }
    
          .android .menu-actions {
            font-size: 8px;
          }
        }
      `]}firstUpdated(){this.contrastingColor=this.themeColor?Kt(this.themeColor):"#FFF"}renderWindows(){return mt`
      <div class="container windows">
        <img alt="Windows' title bar" src="../PWABuilder-previewer/assets/images/windows/titlebar.png" class="titlebar-img" />
        <div 
        class="titlebar" 
        style=${_t({"--pwa-theme-color":this.themeColor})}>
          <p class="app-name" style=${_t({color:this.contrastingColor})}>
            ${this.appName||"PWA App"}
          </p>
          <div class="titlebar-actions">
            <div class="collapse" style=${_t({backgroundColor:this.contrastingColor})}></div>
            <div class="enlarge" style=${_t({borderColor:this.contrastingColor})}></div>
            <svg class="close" width="8px" height="8px" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000" xml:space="preserve">
              <g><path style="fill:${this.contrastingColor}" d="M990,61.2L933.3,5.1L500,443.3L66.7,5.1L10,61.2L443.9,500L10,938.8l56.7,56.1L500,556.7l433.3,438.2l56.7-56.1L556.1,500L990,61.2z"/></g>
            </svg>
          </div>
        </div>
      </div>
    `}renderAndroid(){return mt`
      <div class="container android">
        <img alt="Android's app switcher" src="../PWABuilder-previewer/assets/images/android/appswitcher.jpg" class="switcher-img" />
        <div class="app-box" style=${_t({"--pwa-theme-color":this.themeColor})}>
          ${this.iconUrl?mt`<img class="app-icon" alt="Application's icon" src=${this.iconUrl} />`:mt`<div class="app-icon"></div>`}
          <div class="menu-actions" style=${_t({color:this.contrastingColor})}>
            <span>HOME</span>
            <span>PROFILE</span>
            <span>SETTINGS</span>
          </div>
        </div>
      </div>
    `}renderiOS(){return mt`
      <div class="container ios">
        <img class="phone" alt="Iphone" src="../PWABuilder-previewer/assets/images/ios/iphone.svg" />
        <div class="status-bar" style=${_t({"--pwa-theme-color":this.themeColor})}>
          <img alt="Status bar" src="../PWABuilder-previewer/assets/images/ios/statusbar.svg" />
        </div>
      </div>
    `}};t([Ht()],Qt.prototype,"themeColor",void 0),t([Ht()],Qt.prototype,"appName",void 0),t([Ht()],Qt.prototype,"iconUrl",void 0),t([jt()],Qt.prototype,"contrastingColor",void 0),Qt=t([Wt("themecolor-screen")],Qt);let Xt=class extends It{render(){return mt`<p class="message"><slot></slot></p>`}};Xt.styles=r`
    .message {
      font-style: italic;
      font-size: 14px;
      opacity: 0.8;
      color: var(--secondary-font-color);
      font-weight: 600;
      margin: 0;
      text-align: center;
    }
  `,Xt=t([Wt("disclaimer-message")],Xt);let Yt=class extends Vt{constructor(){super(...arguments),this.manifestUrl=""}static get styles(){return[super.styles,r`
        .container {
          width: 260px;
          position: relative;
          margin: 40px auto 0;
        }

        .container.windows {
          font-family: var(--windows-font-family);
        }

        .menu-img {
          width: 100%;
          box-shadow: var(--card-box-shadow);
        }

        .windows .app-icon {
          position: absolute;
          width: 14px;
          height: 14px;
          bottom: 7px;
          right: 59.5px;
        }

        .windows .menu {
          position: absolute;
          bottom: 41px;
          right: 13px;
          width: 105px;
          height: 100px;
        }

        .windows .shortcut-list {
          list-style: none;
          padding: 0;
          color: rgba(0, 0, 0, 0.6);
          font-size: 6px;
          font-weight: 600;
          background-color: #D9E8F0;
          height: 100%;
        }

        .windows .shortcut-list li {
          padding: 0 0 0 4px;
          margin: 0 0 10px;
          display: flex;
          align-items: center;
        }

        .windows .shortcut-list .icon {
          width: 10px;
          height: 10px;
          margin-right: 5px;
          display: inline-block;
        }

        .android .app-icon {
          position: absolute;
          width: 50px;
          height: 50px;
          top: 41px;
          left: 18px;
          background-color: #FFF;
          border-radius: 50%;
        }

        .android .chrome-icon {
          position: absolute;
          width: 27px;
          height: 27px;
          top: 69px;
          left: 45px;
          z-index: 1;
        }

        .android .menu {
          background-color: #FFF;
          position: absolute;
          right: 40px;
          width: 195px;
          height: 145px;
          bottom: 30px;
        }

        .android .shortcut-list {
          list-style: none;
          padding: 0;
          margin: 0;
          color: #000;
          font-size: 12px;
        }

        .android .shortcut-list li {
          padding: 0;
          margin: 0 0 10px;
          display: flex;
          align-items: center;
          height: 25px;
        }

        .android .shortcut-list .icon {
          width: 25px;
          height: 25px;
          margin-right: 15px;
          display: inline-block;
        }

        .ios-message {
          margin: 100px auto 0px;
          width: 70%;
        }
      `]}getShortcutIcon(t){const i=t[0].src;return`https://pwabuilder-safe-url.azurewebsites.net/api/getsafeurl?url=${new URL(i,this.manifestUrl).href}`}sharedRender(){var t;return mt`
      <div class="container ${this.platform}">
        <img 
        class="menu-img" 
        alt="Application shortcuts" 
        src="../PWABuilder-previewer/assets/images/${this.platform}/shortcutsmenu.png" />
        ${"android"===this.platform?mt`<img alt="Chrome" class="chrome-icon" src="../PWABuilder-previewer/assets/images/chrome-icon.png" />`:null}
        ${this.iconUrl?mt`<img class="app-icon" alt="Application's icon" src=${this.iconUrl} />`:mt`<div class="app-icon"></div>`}
        <div class="menu">
          <ul class="shortcut-list">
            ${null===(t=this.shortcuts)||void 0===t?void 0:t.slice(0,5).map((t=>mt`
                <li>
                  ${t.icons?mt`<img class="icon" alt=${t.name} src=${this.getShortcutIcon(t.icons)} />`:mt`<div class="icon"></div>`}
                  <span>${t.name}</span>
                </li>
              `))}
          </ul>
        </div>
      </div>
    `}renderWindows(){return this.sharedRender()}renderAndroid(){return this.sharedRender()}renderiOS(){return mt`
      <div class="ios-message">
        <disclaimer-message>
          iOS does not support the shortcuts feature.
        </disclaimer-message>
      </div>
    `}};t([Ht()],Yt.prototype,"manifestUrl",void 0),t([Ht({type:Array})],Yt.prototype,"shortcuts",void 0),t([Ht()],Yt.prototype,"iconUrl",void 0),Yt=t([Wt("shortcuts-screen")],Yt);let ti=class extends Vt{constructor(){super(...arguments),this.siteUrl="",this.contrastingThemeColor=""}static get styles(){return[super.styles,r`
        .container {
          position: relative;
          display: flex;
          justify-content: center;
          margin: 0 auto;
          width: fit-content;
        }

        .container.windows {
          font-family: var(--windows-font-family);
        }

        .container.android {
          margin-top: 20px;
        }

        .android .phone {
          position: absolute;
          top: 0;
          width: 200px;
          height: 450px;
          box-shadow: var(--card-box-shadow);
          border-radius: 8px;
          object-fit: cover;
          z-index: -1;
        }

        .android .status-bar {
          width: 200px;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          height: 18px;
          position: absolute;
          top: 16px;
          z-index: 1;
          background-color: var(--pwa-theme-color);
        }

        .android .status-bar img {
          width: 60px;
          margin-left: 5px;
        }

        .android .app-background-full {
          width: 200px;
          position: absolute;
          height: 412px;
          top: 17px;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          background-color: var(--pwa-background-color);
        }

        .android .app-background-partial {
          width: 200px;
          position: absolute;
          top: 70px;
          height: 359px;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          background-color: var(--pwa-background-color);
        }

        .android .app-icon {
          width: 70px;
          height: auto;
        }

        .android .app-name {
          width: fit-content;
          margin: 15px auto 0px;
          font-size: 16px;
        }

        .android .app-url {
          background-color: #D7D7D7;
          opacity: 0.5;
          position: absolute;
          top: 48px;
          left: -42px;
          font-size: 6.5px;
          width: 93px;
          overflow-x: hidden;
          white-space: nowrap;
        }

        .windows .browser-img {
          width: 260px;
        }

        .windows .app-background {
          width: 99%;
          position: absolute;
          left: 0;
          height: 214.5px;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          box-shadow: var(--card-box-shadow);
          background-color: var(--pwa-background-color);
        }

        .windows .app-background.browser {
          top: 20px;
        }

        .windows .app-background.fullscreen {
          top: 12px;
          height: 222.8px;
        }

        .windows .app-background.minimal-ui {
          width: 260px;
        }

        .windows .app-background.standalone {
          width: 260px;
        }

        .windows .app-icon {
          width: 55px;
        }

        .windows .app-name {
          width: fit-content;
          margin: 10px auto 0px;
          font-size: 12px;
        }

        .windows .app-url {
          top: 14px;
          position: absolute;
          left: 47px;
          font-size: 3.5px;
          width: 162px;
          overflow-x: hidden;
          white-space: nowrap;
          background-color: white;
        }

        .windows .title-bar {
          width: 260px;
          z-index: 1;
          display: flex;
          justify-content: space-between;
          background-color: var(--pwa-theme-color);
        }

        .windows .nav-actions {
          display: flex;
          align-items: center;
        }

        .windows .nav-actions img {
          width: 10px;
          height: 8px;
          margin: 4px 2px 0;
          opacity: 0.8;
        }

        .windows .nav-actions svg {
          margin: 4px 5px 0;
        }

        .windows .nav-actions .collapse {
          margin: 4px 5px 0;
          width: 6px;
          height: 1px;
        }

        .windows .nav-actions .enlarge {
          margin: 4px 5px 0;
          width: 6px;
          height: 6px;
          border-width: 1px;
          border-style: solid;
        }

        .windows .title-bar .app-name {
          margin: 4px;
          font-size: 6px;
        }

        .ios-message {
          margin: 90px auto 0px;
          width: 70%;
        }
      `]}firstUpdated(){this.contrastingThemeColor=this.themeColor?Kt(this.themeColor):"#000"}renderWindows(){const t=mt`
      <div
      class="app-background ${this.display}"
      style=${_t({"--pwa-background-color":this.backgroundColor})}>
        ${this.iconUrl?mt`<img class="app-icon" alt="App icon" src=${this.iconUrl} />`:null}
        <h4 
        class="app-name" 
        style=${_t({color:this.backgroundColor?Kt(this.backgroundColor):"#000"})}>
          ${this.appName||"PWA App"}
        </h4>
      </div>
    `;switch(this.display){case"fullscreen":return mt`
          <div class="container windows">
            <img class="browser-img" alt="Window's browser" src="../PWABuilder-previewer/assets/images/windows/browserwindow.png" />
            ${t}
          </div>
        `;case"browser":return mt`
          <div class="container windows">
            <img class="browser-img" alt="Window's browser" src="../PWABuilder-previewer/assets/images/windows/browserwindow.png" />
            <span class="app-url">${this.siteUrl}</span>
            ${t}
          </div>
        `;case"minimal-ui":return mt`
          <div class="windows container">
            <div 
            class="title-bar"
            style=${_t({"--pwa-background-color":this.themeColor})}>
              <div class="nav-actions">
                <img alt="Go back" src="../PWABuilder-previewer/assets/images/windows/backarrow.svg" />
                <img alt="Refresh page" src="../PWABuilder-previewer/assets/images/windows/refresharrow.svg" />
              </div>
              <span class="app-name">${this.appName}</span>
              <div class="nav-actions">
                <div class="collapse" style=${_t({backgroundColor:this.contrastingThemeColor})}></div>
                <div class="enlarge" style=${_t({borderColor:this.contrastingThemeColor})}></div>
                <svg class="close" width="6px" height="6px" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000" xml:space="preserve">
                  <g><path style="fill:${this.contrastingThemeColor}" d="M990,61.2L933.3,5.1L500,443.3L66.7,5.1L10,61.2L443.9,500L10,938.8l56.7,56.1L500,556.7l433.3,438.2l56.7-56.1L556.1,500L990,61.2z"/></g>
                </svg>
              </div>
            </div>
            ${t}
          </div>
        `;case"standalone":return mt`
          <div class="windows container">
            <div 
            class="title-bar"
            style=${_t({"--pwa-background-color":this.themeColor})}>
              <span class="app-name">${this.appName}</span>
              <div class="nav-actions">
                <div class="collapse" style=${_t({backgroundColor:this.contrastingThemeColor})}></div>
                <div class="enlarge" style=${_t({borderColor:this.contrastingThemeColor})}></div>
                <svg class="close" width="6px" height="6px" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000" xml:space="preserve">
                  <g><path style="fill:${this.contrastingThemeColor}" d="M990,61.2L933.3,5.1L500,443.3L66.7,5.1L10,61.2L443.9,500L10,938.8l56.7,56.1L500,556.7l433.3,438.2l56.7-56.1L556.1,500L990,61.2z"/></g>
                </svg>
              </div>
            </div>
            ${t}
          </div>
        `;default:return null}}renderAndroid(){return mt`
      <div class="container android">
        ${"fullscreen"!==this.display?mt`
          <div class="status-bar" style=${_t({"--pwa-background-color":this.themeColor})}>
            <img alt="Status bar" src="../PWABuilder-previewer/assets/images/android/statusbar-icons.png" />
          </div>
        `:null}
        ${"browser"===this.display||"minimal-ui"===this.display?mt`<span class="app-url">${this.siteUrl}</span>`:null}
        <div 
        class=${Dt({"app-background-full":"fullscreen"===this.display||"standalone"===this.display,"app-background-partial":"minimal-ui"===this.display||"browser"===this.display})} 
        style=${_t({"--pwa-background-color":this.backgroundColor})}>
          ${this.iconUrl?mt`<img class="app-icon" alt="App icon" src=${this.iconUrl} />`:null}
          <h4 
          class="app-name" 
          style=${_t({color:this.backgroundColor?Kt(this.backgroundColor):"#000"})}>
            ${this.appName||"PWA App"}
          </h4>
        </div>
        <img class="phone" alt="Android phone" src="../PWABuilder-previewer/assets/images/android/background.svg" />
      </div>
    `}renderiOS(){return mt`
      <div class="ios-message">
        <disclaimer-message>
          iOS does not support different display modes.
        </disclaimer-message>
      </div>
    `}};t([Ht()],ti.prototype,"display",void 0),t([Ht()],ti.prototype,"themeColor",void 0),t([Ht()],ti.prototype,"backgroundColor",void 0),t([Ht()],ti.prototype,"iconUrl",void 0),t([Ht()],ti.prototype,"appName",void 0),t([Ht()],ti.prototype,"siteUrl",void 0),t([jt()],ti.prototype,"contrastingThemeColor",void 0),ti=t([Wt("display-screen")],ti);let ii=class extends Vt{constructor(){super(...arguments),this.manifestUrl=""}static get styles(){return[super.styles,r`
        .container {
          position: relative;
          margin: 30px auto 0;
          width: 260px;
        }

        .container.windows {
          font-family: var(--windows-font-family);
        }

        .container.android {
          width: 225px;
        }

        .store-img {
          width: 100%;
          position: absolute;
          inset: 0;
          box-shadow: var(--card-box-shadow);
        }

        .windows .app-header {
          background-color: #FFF;
          position: absolute;
          top: 12px;
          width: 100px;
          left: calc(50% - 45px);
          display: flex;
          flex-direction: column;
          align-items: center;
          height: 132px;
        }

        .windows .app-header img {
          width: 80px;
        }

        .windows .rating {
          position: absolute;
          margin: 0px;
          top: 256px;
          left: 51px;
          font-size: 10px;
          background-color: #FFF;
        }

        .windows .description {
          background-color: #FFF;
          position: absolute;
          font-size: 9px;
          text-align: center;
          top: 290px;
          padding: 0 30px;
          box-sizing: border-box;
          height: 35px;
          width: 100%;
          overflow: hidden;
        }

        .categories {
          display: flex;
          flex-wrap: wrap;
          position: absolute;
          background-color: #FFF;
          left: 8px;
          right: 8px;
        }

        .windows .categories {
          top: 324px;
          height: 59px;
        }

        .android .categories {
          top: 337px;
          height: 37px;
        }

        .windows .categories div, .android .categories div {
          margin-right: 8px;
          border-radius: 17px;
          height: fit-content;
          padding: 2px 7px;
          font-size: 10px;
          min-width: 20px;
          text-align: center;
          border: solid 0.5px #CECECE;
        }

        .android .app-icon {
          width: 41px;
          height: 41px;
          position: absolute;
          top: 34px;
          left: 12px;
          background-color: #FFF;
        }

        .android .app-name {
          font-size: 14px;
          margin: 0;
          position: absolute;
          background-color: #FFF;
          font-weight: 600;
          top: 35px;
          left: 66px;
          min-width: 70px;
          height: 30px;
        }

        .android .screenshots {
          position: absolute;
          display: flex;
          height: 100px;
          top: 167px;
          width: 100%;
          overflow-x: hidden;
          background-color: #FFF;
        }
        
        .android .screenshots img {
          height: 100%;
          margin: 0 5px;
        }

        .android .description {
          position: absolute;
          background-color: #FFF;
          font-size: 9px;
          top: 300px;
          padding-left: 10px;
          height: 27px;
          width: 80%;
          overflow: hidden;
        }

        .ios-message {
          margin: 130px auto 0px;
          width: 60%;
        }
      `]}getImageUrl(t){return`https://pwabuilder-safe-url.azurewebsites.net/api/getsafeurl?url=${new URL(t,this.manifestUrl).href}`}renderWindows(){var t;return mt`
      <div class="container windows">
        <img class="store-img" alt="Microsoft Store" src="../PWABuilder-previewer/assets/images/windows/store-listing.png" />
        <div class="app-header">
          ${this.iconUrl?mt`<img alt="App icon" src=${this.iconUrl} />`:null}
          <h4>${this.appName||"PWA App"}</h4>
        </div>
        <p class="rating">5.0</p>
        <div class="description">
          ${this.description||"A description of your PWA."}
        </div>
        <div class="categories">
          ${null===(t=this.categories)||void 0===t?void 0:t.map((t=>mt`<div>${t}</div>`))}
        </div>
      </div>
    `}renderAndroid(){var t,i;return mt`
      <div class="container android">
        <img class="store-img" alt="Microsoft store" src="../../PWABuilder-previewer/assets/images/android/app-listing.png" />
        ${this.iconUrl?mt`<img class="app-icon" alt="App icon" src=${this.iconUrl} />`:mt`<div class="app-icon"></div>`}
        <div class="app-name">${this.appName||"PWA App"}</div>
        <div class="screenshots">
          ${null===(t=this.screenshots)||void 0===t?void 0:t.map((t=>mt`<img alt="App screenshot" src=${this.getImageUrl(t.src)} />`))}
        </div>
        <div class="description">
          ${this.description||"A description of your PWA."}
        </div>
        <div class="categories">
          ${null===(i=this.categories)||void 0===i?void 0:i.map((t=>mt`<div>${t}</div>`))}
        </div>
      </div>
    `}renderiOS(){return mt`
      <div class="ios-message">
        <disclaimer-message>
          These categories are not necessarily related to those specified on 
          the manifest. 
        </disclaimer-message>
      </div>
    `}};t([Ht({type:Array})],ii.prototype,"categories",void 0),t([Ht()],ii.prototype,"appName",void 0),t([Ht()],ii.prototype,"iconUrl",void 0),t([Ht()],ii.prototype,"description",void 0),t([Ht({type:Array})],ii.prototype,"screenshots",void 0),t([Ht()],ii.prototype,"manifestUrl",void 0),ii=t([Wt("categories-screen")],ii);let ei=class extends Vt{constructor(){super(...arguments),this.siteUrl=""}static get styles(){return[super.styles,r`
        .container {
          position: relative;
          width: fit-content;
          margin: 0px auto;
          width: 260px;
        }

        .dialog {
          width: 100%;
          box-shadow: var(--card-box-shadow);
          border-radius: 6px;
        }

        .windows .contacts {
          background-color: #F3F3F3;
          position: absolute;
          top: 197px;
          width: 100%;
          left: 0;
          height: 70px;
          font-family: var(--windows-font-family);
        }

        .avatar, .app {
          display: flex;
          flex-direction: column;
          font-size: 10px;
          font-weight: 600;
          align-items: center;
          width: fit-content;
          margin-left: 28px;
          justify-content: flex-end;
        }

        .avatar > div {
          border-radius: 50%;
          background-color: #66D3FA;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 30px;
          height: 30px;
          font-size: 15px;
          margin-bottom: 7px;
        }

        .windows .app {
          position: absolute;
          bottom: 57px;
          background-color: #F3F3F3;
          font-weight: 400;
          font-size: 9px;
          margin-left: 14px;
          min-width: 46px;
          max-width: 63px;
          white-space: nowrap;
          overflow: hidden;
          min-height: 45px;
        }

        .windows .app img {
          width: 30px;
          height: 30px;
          margin-bottom: 4px;
        }

        .android .contacts {
          background-color: #FFF;
          position: absolute;
          top: 150px;
          width: 100%;
          left: 0;
          height: 48px;
        }

        .android .avatar {
          font-weight: 400;
          margin-left: 15px;
        }

        .android .app {
          position: absolute;
          bottom: 20px;
          padding-bottom: 10px;
          left: 36px;
          height: 64px;
          font-weight: 600;
          width: 65px;
          overflow: hidden;
          background-color: #FFF;
          color: rgba(0, 0, 0, 0.6);
        }

        .android .app img {
          width: 35px;
          height: 35px;
          margin-bottom: 2px;
        }

        .android .media-url {
          background-color: #FFF;
          position: absolute;
          top: 51px;
          font-size: 10px;
          height: 27px;
          width: 84%;
          left: 4%;
        }

        .container.ios {
          margin-top: 15px;
        }

        .ios .app {
          background-color: #FFF;
          position: absolute;
          top: 12px;
          right: 81px;
          font-family: var(--ios-font-family);
          width: 50px;
          overflow: hidden;
          min-height: 61px;
        }

        .ios .app img {
          width: 48px;
          height: 48px;
          margin-bottom: 3px;
        }
      `]}sharedRender(){return mt`
      <div class="container ${this.platform}">
        <img class="dialog" alt="Web share trigger" src="../PWABuilder-previewer/assets/images/${this.platform}/share-dialog.png" />
        ${"android"===this.platform?mt`<div class="media-url">via Media Content https://media-content.com</div>`:null}
        <div class="contacts">
          <div class="avatar">
            <div>JD</div>
            John Doe
          </div>
        </div>
        <div class="app">
          ${this.iconUrl?mt`<img alt="PWA icon" src=${this.iconUrl} />`:null}
          ${this.shortName||this.appName||"PWA App"}
        </div>
      </div>
    `}renderWindows(){return this.sharedRender()}renderAndroid(){return this.sharedRender()}renderiOS(){return mt`
      <div class="container ios">
        <img class="dialog" alt="" src="../PWABuilder-previewer/assets/images/ios/share-dialog.jpg" />
        <div class="app">
          ${this.iconUrl?mt`<img alt="PWA icon" src=${this.iconUrl} />`:null}
          ${this.shortName||"PWA App"}
        </div>
      </div>
    `}};var si;t([Ht()],ei.prototype,"iconUrl",void 0),t([Ht()],ei.prototype,"appName",void 0),t([Ht()],ei.prototype,"shortName",void 0),t([Ht()],ei.prototype,"siteUrl",void 0),ei=t([Wt("share-target")],ei),function(t){t[t.Install=0]="Install",t[t.SplashScreen=1]="SplashScreen",t[t.Name=2]="Name",t[t.ShortName=3]="ShortName",t[t.ThemeColor=4]="ThemeColor",t[t.Shortcuts=5]="Shortcuts",t[t.Display=6]="Display",t[t.Categories=7]="Categories",t[t.ShareTarget=8]="ShareTarget"}(si||(si={}));let oi=class extends It{constructor(){super(...arguments),this.siteUrl="",this.iconUrl="",this.isInFullScreen=!1,this.stage=si.Categories,this.manifest={},this.manifestUrl="",this.platform="iOS",this.handleFullScreenChange=()=>{this.isInFullScreen=Boolean(document.fullscreenElement)}}firstUpdated(){var t;if(this.manifest.icons){let i=this.manifest.icons[0].src;for(const e of this.manifest.icons)if(null===(t=e.sizes)||void 0===t?void 0:t.includes("512x512")){i=e.src;break}const e=new URL(i,this.manifestUrl).href;this.iconUrl=`https://pwabuilder-safe-url.azurewebsites.net/api/getsafeurl?url=${e}`}this.siteUrl=this.manifestUrl.substring(0,this.manifestUrl.lastIndexOf("manifest.json"))}handlePlatformChange(t){const i=t.target.name;this.platform=i}handleNavigateRight(){const t=Object.keys(si).length/2;this.stage=(this.stage+1)%t}handleNavigateLeft(){const t=Object.keys(si).length/2;this.stage=(this.stage+t-1)%t}updated(t){t.has("stage")&&this.dispatchEvent(new CustomEvent("previewscreenchange",{bubbles:!0,composed:!0,detail:{screen:this.stage}}))}connectedCallback(){super.connectedCallback(),document.addEventListener("fullscreenchange",this.handleFullScreenChange)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("fullscreenchange",this.handleFullScreenChange)}handleToggleEnlarge(){this.content.requestFullscreen()}screenContent(){switch(this.stage){case si.Install:return mt`
          <install-screen
          .isInFullScreen=${this.isInFullScreen}
          .platform=${this.platform}
          .iconUrl=${this.iconUrl}
          .siteUrl=${this.siteUrl}
          .appName=${this.manifest.name}
          .appShortName=${this.manifest.short_name}
          .description=${this.manifest.description}
          .screenshots=${this.manifest.screenshots}
          .manifestUrl=${this.manifestUrl}>
            <p slot="title">Installation dialog</p>
            <p slot="info-windows">
              Windows includes the application's icon, name, and website URL in its
              installation dialog.
            </p>
            <p slot="info-android">
              When installing a PWA on Android, the description, name, icon and screenshots are used for
              giving a preview of the application.
            </p>
            <p slot="info-iOS">
              iOS uses the application's icon, name, and website URL in its
              installation screen.
            </p>
          </install-screen>
        `;case si.SplashScreen:return mt`
          <splash-screen
          .isInFullScreen=${this.isInFullScreen}
          .platform=${this.platform}
          .iconUrl=${this.iconUrl}
          .backgroundColor=${this.manifest.background_color}
          .themeColor=${this.manifest.theme_color}
          .appName=${this.manifest.name}>
            <p slot="title">Splash screen</p>
            <p slot="info-windows">
              While the PWA is loading, Windows uses the background color, name and 
              icon for displaying the splash screen.
            </p>
            <p slot="info-android">
              When launching the PWA, Android uses the background color, theme color, name and 
              icon for displaying the splash screen.
            </p>
            <p slot="info-iOS">
              When launching the PWA, iOS uses the background color, name and icon for displaying
              the splash screen while the content loads.
            </p>
          </splash-screen>
        `;case si.Name:return mt`
          <name-screen
          .isInFullScreen=${this.isInFullScreen}
          .platform=${this.platform}
          .appName=${this.manifest.name}
          .iconUrl=${this.iconUrl}>
            <p slot="title">The name attribute</p>
            <p slot="info-windows">
              The name of the web application is displayed on Window's start menu, application 
              preferences, title bar, etc.
            </p>
            <p slot="info-android">
              The name of the web application will be included in the app info screen on Android.
            </p>
            <p slot="info-iOS">
              On iOS, the name of the web application will be used on settings.
            </p>
          </name-screen>
        `;case si.ShortName:return mt`
          <shortname-screen
          .isInFullScreen=${this.isInFullScreen}
          .platform=${this.platform}
          .shortName=${this.manifest.short_name}
          .iconUrl=${this.iconUrl}>
            <p slot="title">The short name attribute</p>
            <p slot="info-windows">
              Windows uses the short name as a fallback when the manifest does not specify a 
              value for the name attribute.
            </p>
            <p slot="info-android">
              On Android, the application's short name is used in the home screen as a label for 
              the icon.
            </p>
            <p slot="info-iOS">
              On iOS, the application's short name is used in the home screen as a label for 
              the icon.
            </p>
          </shortname-screen>
        `;case si.ThemeColor:return mt`
          <themecolor-screen
          .isInFullScreen=${this.isInFullScreen}
          .platform=${this.platform}
          .themeColor=${this.manifest.theme_color}
          .appName=${this.manifest.name}
          .iconUrl=${this.iconUrl}>
            <p slot="title">The theme color attribute</p>
            <p slot="info-windows">
              The theme color defines the default color theme for the application, and is used 
              for the PWA's title bar.
            </p>
            <p slot="info-android">
              The theme color defines the default color theme for the application, and affects
              how the site is displayed.
            </p>
            <p slot="info-iOS">
              The theme color defines the default color theme for the PWA, and defines the 
              background color of the status bar when using the application.
            </p>
          </themecolor-screen>
        `;case si.Shortcuts:return mt`
          <shortcuts-screen
          .isInFullScreen=${this.isInFullScreen}
          .platform=${this.platform}
          .shortcuts=${this.manifest.shortcuts}
          .iconUrl=${this.iconUrl}
          .manifestUrl=${this.manifestUrl}>
            <p slot="title">The shortcuts attribute</p>
            <p slot="info-windows">
              This attribute (A.K.A. jump list) assembles a context menu that is shows when a user 
              right-clicks on the app's icon on the taskbar.
            </p>
            <p slot="info-android">
              This attribute (A.K.A. jump list) assembles a context menu that is shows when a user 
              long-presses the app's icon on the home screen.
            </p>
            <p slot="info-iOS">
              This attribute (A.K.A. jump list) defines a list of shortcuts/links to key tasks or pages 
              within a web app, assembling a context menu when a user interacts with the app's icon.
            </p>
          </shortcuts-screen>
        `;case si.Display:return mt`
          <display-screen
          .isInFullScreen=${this.isInFullScreen}
          .platform=${this.platform}
          .display=${this.manifest.display||"browser"} 
          .themeColor=${this.manifest.theme_color}
          .backgroundColor=${this.manifest.background_color}
          .iconUrl=${this.iconUrl}
          .appName=${this.manifest.name}
          .siteUrl=${this.siteUrl}>
            <p slot="title">The display attribute</p>
            <p slot="info-windows">
              The display mode changes how much of the browser's UI is shown to the user. It can 
              range from browser (the full browser window is shown) to fullscreen (the app is 
              full-screened).
            </p>
            <p slot="info-android">
              The display mode changes how much of the browser's UI (like the status bar and
              navigation buttons) is shown to the user. 
            </p>
            <p slot="info-iOS">
              The display mode changes how much of the browser's UI is shown to the user. It can 
              range from browser (the full browser window is shown) to fullscreen (the app is 
              full-screened).
            </p>
          </display-screen>
        `;case si.Categories:return mt`
          <categories-screen
          .isInFullScreen=${this.isInFullScreen}
          .platform=${this.platform}
          .categories=${this.manifest.categories}
          .appName=${this.manifest.name}
          .iconUrl=${this.iconUrl}
          .description=${this.manifest.description}
          .screenshots=${this.manifest.screenshots}
          .manifestUrl=${this.manifestUrl}>
            <p slot="title">The categories attribute</p>
            <p slot="info-windows">
              The Microsoft store uses the indicated categories as tags in the app's listing.
            </p>
            <p slot="info-android">
              Google Play includes the categories specified in the manifest in the 
              application's listing page.
            </p>
            <p slot="info-iOS">
              On iOS, your application's categories are set from a predetermined set of options
              and enhance the discoverability of your app. 
            </p>
          </categories-screen>
        `;case si.ShareTarget:return mt`
          <share-target
          .isInFullScreen=${this.isInFullScreen}
          .platform=${this.platform}
          .iconUrl=${this.iconUrl}
          .appName=${this.manifest.name}
          .shortName=${this.manifest.short_name}
          .siteUrl=${this.siteUrl}>
            <p slot="title">The share target attribute</p>
            <p slot="info-windows">
              This attribute allows your application to easily share and receive
              media content on Windows.
            </p>
            <p slot="info-android">
              By using the share target attribute, you can quickly share and receive 
              links and files like a native Android application. 
            </p>
            <p slot="info-iOS">
              By using the share target attribute, you can quickly share and receive 
              links and files like a native iOS application. 
            </p>
          </share-target>
        `;default:return null}}render(){return mt`
      <div class="container">
        <fast-card class="card">
          <h4 part="card-title" class="title">Preview</h4>
          <div part="platform-buttons" class="buttons-div">
            <fast-button 
            part="platform-button"
            class=${Dt({"platform-button":!0,selected:"windows"===this.platform})} 
            name="windows"
            @click=${this.handlePlatformChange}>
              Windows
            </fast-button>
            <fast-button 
            part="platform-button"
            class=${Dt({"platform-button":!0,selected:"android"===this.platform})} 
            name="android"
            @click=${this.handlePlatformChange}>
              Android
            </fast-button>
            <fast-button
            part="platform-button"
            class=${Dt({"platform-button":!0,selected:"iOS"===this.platform})}
            name="iOS"
            @click=${this.handlePlatformChange}>
              iOS
            </fast-button>
          </div>
          <div part="app-name" class="name">${this.manifest.name}</div>
          <div id="content">${this.screenContent()}</div>
          <img 
          part="nav-arrow"
          src="../PWABuilder-previewer/assets/images/nav-arrow.svg" 
          alt="Navigate right" 
          class="nav-arrow-right"
          @click=${this.handleNavigateRight} />
          <img 
          part="nav-arrow"
          src="../PWABuilder-previewer/assets/images/nav-arrow.svg" 
          alt="Navigate left" 
          class="nav-arrow-left"
          @click=${this.handleNavigateLeft} />
          <p 
          part="preview-text"
          class="preview-text" 
          style=${_t({cursor:"pointer"})} 
          @click=${this.handleToggleEnlarge}>
            Click to enlarge Preview
          </p>
        </fast-card>
      </div>
    `}};oi.styles=r`
    .container {
      width: 100vw;
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .card {
      background: #FFF;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 6px;
      height: 792px;
      display: none;
    }

    .title {
      position: absolute;
      left: calc(50% - 33px);
      top: 23px;
      margin: 0;
      width: 66px;
      font-weight: 700;
      font-size: 18px;
      line-height: 24px;
      color: var(--font-color);
      text-decoration: underline solid var(--secondary-font-color);
      text-underline-position: under;
      text-decoration-thickness: 2px;
    }

    .buttons-div {
      display: flex;
      justify-content: space-between;
      margin: 71px auto 0;
      width: 272px;
    }

    fast-button.platform-button {
      height: 35px;
      border-radius: 33px;
      font-size: 12.5751px;
      line-height: 19px;
      width: 80px;
      background: #FFF;
      box-shadow: 0px 3px 3.02588px rgba(0, 0, 0, 0.25);
      color: var(--font-color);
    }
    
    fast-button::part(control) {
      font-weight: 700;
    }

    .platform-button.selected {
      background: #292C3A;
      box-shadow: 0px 0.75647px 3.02588px rgba(0, 0, 0, 0.25);
      color: #FFF;
    }

    .name {
      background: rgba(194, 194, 194, 0.4);
      border-radius: 4px;
      height: 24px;
      font-weight: 700;
      font-size: 16px;
      line-height: 25px;
      text-align: center;
      color: #000;
      margin: 20px auto 0;
      width: fit-content;
      padding: 0 5px;
    }

    .preview-text {
      position: absolute;
      bottom: 25px;
      left: calc(50% - 55px);
      font-weight: 400;
      font-size: 10px;
      line-height: 16px;
      text-align: center;
      color: var(--secondary-font-color);
      width: 110px;
    }

    img.nav-arrow-right {
      position: absolute;
      width: 19px;
      height: 38px;
      top: 377px;
      right: 16px;
      cursor: pointer;
    }
    
    img.nav-arrow-left {
      position: absolute;
      width: 19px;
      height: 38px;
      top: 377px;
      left: 16px;
      transform: rotate(180deg);
      cursor: pointer;
    }

    /* The card is hidden for smaller screens */
    @media(min-width: 800px) {
      .card {
        display: block;
      }
    }

    /* 800 designs */
    @media(min-width: 800px) and (max-width: 1024px) {
      .card {
        width: 354px;
      }
    }

    /* 1024 designs */
    @media(min-width: 1024px) and (max-width: 1366px) {
      .card {
        width: 366px;
      }
    }

    /* 1366 designs */
    @media(min-width: 1366px) {
      .card {
        width: 479.03px;
      }

      img.nav-arrow-right {
        right: 30px;
      }

      img.nav-arrow-left {
        left: 30px;
      }
    }
  `,t([jt()],oi.prototype,"siteUrl",void 0),t([jt()],oi.prototype,"iconUrl",void 0),t([jt()],oi.prototype,"isInFullScreen",void 0),t([Ht({type:Number})],oi.prototype,"stage",void 0),t([Ht({type:Object,converter:t=>{if(t)return JSON.parse(t)}})],oi.prototype,"manifest",void 0),t([Ht()],oi.prototype,"manifestUrl",void 0),t([Ht()],oi.prototype,"platform",void 0),t([
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function(t,i){return(({finisher:t,descriptor:i})=>(e,s)=>{var o;if(void 0===s){const s=null!==(o=e.originalKey)&&void 0!==o?o:e.key,n=null!=i?{kind:"method",placement:"prototype",key:s,descriptor:i(e.key)}:{...e,key:s};return null!=t&&(n.finisher=function(i){t(i,s)}),n}{const o=e.constructor;void 0!==i&&Object.defineProperty(e,s,i(s)),null==t||t(o,s)}})({descriptor:e=>{const s={get(){var i;return null===(i=this.renderRoot)||void 0===i?void 0:i.querySelector(t)},enumerable:!0,configurable:!0};if(i){const i="symbol"==typeof e?Symbol():"__"+e;s.get=function(){var e;return void 0===this[i]&&(this[i]=null===(e=this.renderRoot)||void 0===e?void 0:e.querySelector(t)),this[i]}}return s}})}("#content")],oi.prototype,"content",void 0),oi=t([Wt("manifest-previewer")],oi);export{oi as ManifestPreviewer};
