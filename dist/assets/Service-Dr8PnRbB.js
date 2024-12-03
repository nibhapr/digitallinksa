import{c as X,r as m,M as ue,e as me,d as pe,f as ge,g as fe,i as he,h as W,k as xe,l as ye,n as be,o as ve,p as we,q as je,t as Z,v as Se,w as Ne,x as ke,y as Ee,z as Ce,V as Ie,A as Ae,B as Me,S as Oe,C as Ve,D as V,E as De,F as Le,G as Pe,I as We,j as i,m as l,J as D,H as ee,a as te,u as Te}from"./index-D_66owGy.js";import{d as A}from"./styled-components.browser.esm-o2nQv5vL.js";function ie(e){const t=X(()=>me(e)),{isStatic:s}=m.useContext(ue);if(s){const[,n]=m.useState(e);m.useEffect(()=>t.on("change",n),[])}return t}function se(e,t){const s=ie(t()),n=()=>s.set(t());return n(),pe(()=>{const o=()=>fe.preRender(n,!1,!0),a=e.map(r=>r.on("change",o));return()=>{a.forEach(r=>r()),ge(n)}}),s}const Fe=e=>e&&typeof e=="object"&&e.mix,He=e=>Fe(e)?e.mix:void 0;function ze(...e){const t=!Array.isArray(e[0]),s=t?0:-1,n=e[0+s],o=e[1+s],a=e[2+s],r=e[3+s],c=he(o,a,{mixer:He(a[0]),...r});return t?c(n):c}function Be(e){W.current=[],e();const t=se(W.current,e);return W.current=void 0,t}function Ge(e,t,s,n){if(typeof e=="function")return Be(e);const o=typeof t=="function"?t:ze(t,s,n);return Array.isArray(e)?Q(e,o):Q([e],([a])=>o(a))}function Q(e,t){const s=X(()=>[]);return se(e,()=>{s.length=0;const n=e.length;for(let o=0;o<n;o++)s[o]=e[o].get();return t(s)})}function ne(e,t,s){var n;if(typeof e=="string"){let o=document;s?((n=s[e])!==null&&n!==void 0||(s[e]=o.querySelectorAll(e)),e=s[e]):e=o.querySelectorAll(e)}else e instanceof Element&&(e=[e]);return Array.from(e||[])}function Re(e,t=100,s){const n=s({...e,keyframes:[0,t]}),o=Math.min(xe(n),ye);return{type:"keyframes",ease:a=>n.next(o*a).value/t,duration:be(o)}}function T(e){return typeof e=="object"&&!Array.isArray(e)}function oe(e,t,s,n){return typeof e=="string"&&T(t)?ne(e,s,n):e instanceof NodeList?Array.from(e):Array.isArray(e)?e:[e]}function J(e,t,s,n){var o;return typeof t=="number"?t:t.startsWith("-")||t.startsWith("+")?Math.max(0,e+parseFloat(t)):t==="<"?s:(o=n.get(t))!==null&&o!==void 0?o:e}const qe=(e,t,s)=>{const n=t-e;return((s-e)%n+n)%n+e};function Ke(e,t){return ve(e)?e[qe(0,e.length,t)]:e}function Ye(e,t,s){for(let n=0;n<e.length;n++){const o=e[n];o.at>t&&o.at<s&&(je(e,o),n--)}}function _e(e,t,s,n,o,a){Ye(e,o,a);for(let r=0;r<t.length;r++)e.push({value:t[r],at:we(o,a,n[r]),easing:Ke(s,r)})}function Qe(e,t){return e.at===t.at?e.value===null?1:t.value===null?-1:0:e.at-t.at}const Je="easeInOut";function Ue(e,{defaultTransition:t={},...s}={},n,o){const a=t.duration||.3,r=new Map,c=new Map,g={},x=new Map;let u=0,d=0,N=0;for(let E=0;E<e.length;E++){const y=e[E];if(typeof y=="string"){x.set(y,d);continue}else if(!Array.isArray(y)){x.set(y.name,J(d,y.at,u,x));continue}let[k,b,f={}]=y;f.at!==void 0&&(d=J(d,f.at,u,x));let h=0;const C=(v,w,S,M=0,O=0)=>{const p=$e(v),{delay:L=0,times:I=Se(p),type:P="keyframes",...ce}=w;let{ease:F=t.ease||"easeOut",duration:j}=w;const H=typeof L=="function"?L(M,O):L,z=p.length,B=Ne(P)?P:o==null?void 0:o[P];if(z<=2&&B){let K=100;if(z===2&&et(p)){const de=p[1]-p[0];K=Math.abs(de)}const Y={...ce};j!==void 0&&(Y.duration=Ce(j));const _=Re(Y,K,B);F=_.ease,j=_.duration}j??(j=a);const G=d+H,R=G+j;I.length===1&&I[0]===0&&(I[1]=1);const q=I.length-p.length;q>0&&ke(I,q),p.length===1&&p.unshift(null),_e(S,p,F,I,G,R),h=Math.max(H+j,h),N=Math.max(R,N)};if(Z(k)){const v=U(k,c);C(b,f,$("default",v))}else{const v=oe(k,b,n,g),w=v.length;for(let S=0;S<w;S++){b=b,f=f;const M=v[S],O=U(M,c);for(const p in b)C(b[p],Xe(f,p),$(p,O),S,w)}}u=d,d+=h}return c.forEach((E,y)=>{for(const k in E){const b=E[k];b.sort(Qe);const f=[],h=[],C=[];for(let w=0;w<b.length;w++){const{at:S,value:M,easing:O}=b[w];f.push(M),h.push(Ee(0,N,S)),C.push(O||"easeOut")}h[0]!==0&&(h.unshift(0),f.unshift(f[0]),C.unshift(Je)),h[h.length-1]!==1&&(h.push(1),f.push(null)),r.has(y)||r.set(y,{keyframes:{},transition:{}});const v=r.get(y);v.keyframes[k]=f,v.transition[k]={...t,duration:N,ease:C,times:h,...s}}}),r}function U(e,t){return!t.has(e)&&t.set(e,{}),t.get(e)}function $(e,t){return t[e]||(t[e]=[]),t[e]}function $e(e){return Array.isArray(e)?e:[e]}function Xe(e,t){return e&&e[t]?{...e,...e[t]}:{...e}}const Ze=e=>typeof e=="number",et=e=>e.every(Ze);function tt(e,t){return e in t}class it extends Ie{constructor(){super(...arguments),this.type="object"}readValueFromInstance(t,s){if(tt(s,t)){const n=t[s];if(typeof n=="string"||typeof n=="number")return n}}getBaseTargetFromProps(){}removeValueFromRenderState(t,s){delete s.output[t]}measureInstanceViewportBox(){return Ae()}build(t,s){Object.assign(t.output,s)}renderInstance(t,{output:s}){Object.assign(t,s)}sortInstanceNodePosition(){return 0}}function st(e){const t={presenceContext:null,props:{},visualState:{renderState:{transform:{},transformOrigin:{},style:{},vars:{},attrs:{}},latestValues:{}}},s=Me(e)?new Oe(t):new Ve(t);s.mount(e),V.set(e,s)}function nt(e){const t={presenceContext:null,props:{},visualState:{renderState:{output:{}},latestValues:{}}},s=new it(t);s.mount(e),V.set(e,s)}function ot(e,t){return Z(e)||typeof e=="number"||typeof e=="string"&&!T(t)}function re(e,t,s,n){const o=[];if(ot(e,t))o.push(De(e,T(t)&&t.default||t,s&&(s.default||s)));else{const a=oe(e,t,n),r=a.length;for(let c=0;c<r;c++){const g=a[c],x=g instanceof Element?st:nt;V.has(g)||x(g);const u=V.get(g),d={...s};"delay"in d&&typeof d.delay=="function"&&(d.delay=d.delay(c,r)),o.push(...Le(u,{...t,transition:d},{}))}}return o}function rt(e,t,s){const n=[];return Ue(e,t,s,{spring:Pe}).forEach(({keyframes:a,transition:r},c)=>{n.push(...re(c,a,r))}),n}function at(e){return Array.isArray(e)&&Array.isArray(e[0])}function lt(e){function t(s,n,o){let a=[];return at(s)?a=rt(s,n,e):a=re(s,n,o,e),new We(a)}return t}const ct=lt(),dt={some:0,all:1};function ut(e,t,{root:s,margin:n,amount:o="some"}={}){const a=ne(e),r=new WeakMap,c=x=>{x.forEach(u=>{const d=r.get(u.target);if(u.isIntersecting!==!!d)if(u.isIntersecting){const N=t(u);typeof N=="function"?r.set(u.target,N):g.unobserve(u.target)}else d&&(d(u),r.delete(u.target))})},g=new IntersectionObserver(c,{root:s,rootMargin:n,threshold:typeof o=="number"?o:dt[o]});return a.forEach(x=>g.observe(x)),()=>g.disconnect()}function mt(e,{root:t,margin:s,amount:n,once:o=!1}={}){const[a,r]=m.useState(!1);return m.useEffect(()=>{if(!e.current||o&&a)return;const c=()=>(r(!0),o?void 0:()=>r(!1)),g={root:t&&t.current||void 0,margin:s,amount:n};return ut(e.current,c,g)},[t,e,s,o,n]),a}const pt=m.memo(({value:e,suffix:t=""})=>{const s=m.useRef(null),n=mt(s,{once:!0,margin:"-100px"}),o=ie(0),a=Ge(o,r=>Math.round(r));return m.useEffect(()=>{if(n)return ct(o,parseInt(e),{duration:2,ease:"easeOut"}).stop},[n,o,e]),i.jsxs("div",{ref:s,className:"inline-flex items-center",children:[i.jsx(l.span,{children:a}),i.jsx("span",{className:"ml-1",children:t})]})}),gt=m.memo(({step:e,index:t})=>i.jsxs(l.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-100px"},transition:{duration:.5,delay:t*.2},className:"relative bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300",children:[i.jsxs("div",{className:"relative z-10",children:[i.jsx("div",{className:"text-4xl mb-6",children:e.icon}),i.jsx("h3",{className:"text-xl font-bold text-gray-900 mb-3",children:e.title}),i.jsx("p",{className:"text-gray-600",children:e.description})]}),t<3&&i.jsx("div",{className:"hidden md:block absolute top-1/2 -right-4 w-8 h-[2px] bg-blue-200 transform -translate-y-1/2"})]}));function ft(e){return D({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"8",r:"7"},child:[]},{tag:"polyline",attr:{points:"8.21 13.89 7 23 12 20 17 23 15.79 13.88"},child:[]}]})(e)}function ae(e){return D({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"20 6 9 17 4 12"},child:[]}]})(e)}function ht(e){return D({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"polyline",attr:{points:"12 6 12 12 16 14"},child:[]}]})(e)}function xt(e){return D({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"},child:[]},{tag:"circle",attr:{cx:"9",cy:"7",r:"4"},child:[]},{tag:"path",attr:{d:"M23 21v-2a4 4 0 0 0-3-3.87"},child:[]},{tag:"path",attr:{d:"M16 3.13a4 4 0 0 1 0 7.75"},child:[]}]})(e)}const yt=m.memo(({service:e,index:t})=>i.jsxs(l.article,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-100px"},transition:{duration:.5,delay:t*.2},whileHover:{y:-8,scale:1.02,transition:{duration:.3}},className:"bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300",children:[i.jsx(l.div,{className:"text-4xl mb-4",whileHover:{scale:1.2,rotate:[0,-10,10,0]},transition:{type:"spring",stiffness:300,duration:.6},children:e.icon}),i.jsx("h3",{className:"text-xl font-bold text-gray-900 mb-3",children:e.title}),i.jsx("p",{className:"text-gray-600 mb-6",children:e.description}),i.jsx("ul",{className:"space-y-2",children:e.features.map((s,n)=>i.jsxs(l.li,{className:"flex items-center text-gray-600",initial:{opacity:0,x:-10},whileInView:{opacity:1,x:0},viewport:{once:!0},transition:{delay:.5+n*.1},children:[i.jsx(ae,{className:"text-blue-600 mr-2 flex-shrink-0"}),i.jsx("span",{children:s})]},n))})]},e.id)),bt=m.memo(({faq:e,index:t})=>i.jsxs(l.div,{initial:{opacity:0,x:-50},whileInView:{opacity:1,x:0},transition:{duration:.5,delay:t*.1},whileHover:{scale:1.02,backgroundColor:"rgba(255, 255, 255, 0.9)"},className:"bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg",children:[i.jsx("h3",{className:"text-lg font-semibold text-gray-900 mb-2",itemProp:"name",children:e.question}),i.jsx("div",{itemScope:!0,itemProp:"acceptedAnswer",itemType:"https://schema.org/Answer",children:i.jsx("p",{className:"text-gray-600",itemProp:"text",children:e.answer})})]},t)),vt=[{id:1,title:"Web Development",description:"Creating modern, responsive websites and web applications",icon:"💻",features:["Custom Development","Responsive Design","SEO Optimization","Performance Tuning"]},{id:2,title:"Mobile Apps",description:"Native and cross-platform mobile solutions",icon:"📱",features:["iOS Development","Android Apps","React Native","App Store Optimization"]},{id:3,title:"Cloud Solutions",description:"Scalable and secure cloud infrastructure",icon:"☁️",features:["AWS/Azure","Cloud Migration","DevOps","Security"]},{id:4,title:"Digital Marketing",description:"Comprehensive digital marketing strategies",icon:"🎯",features:["SEO/SEM","Social Media","Content Strategy","Analytics"]}],wt=[{title:"Discovery",description:"We dive deep into understanding your business needs and goals to create the perfect solution.",icon:"🔍"},{title:"Strategy",description:"Developing a comprehensive roadmap to achieve your digital transformation objectives.",icon:"📋"},{title:"Development",description:"Building your solution using cutting-edge technology and best practices.",icon:"⚙️"},{title:"Launch",description:"Deploying your solution and ensuring everything runs perfectly.",icon:"🚀"}],jt=[{number:"500",label:"Projects Completed",icon:i.jsx(ft,{}),suffix:"+"},{number:"100",label:"Happy Clients",icon:i.jsx(xt,{}),suffix:"+"},{number:"10",label:"Years Experience",icon:i.jsx(ht,{}),suffix:"+"},{number:"24",label:"Support Available",icon:i.jsx(ae,{}),suffix:"/7"}],St=["React","Node.js","Python","AWS","Docker","Kubernetes"],Nt=[{question:"How long does a typical project take?",answer:"Project timelines vary based on complexity, but typically range from 4-12 weeks."},{question:"What is your pricing model?",answer:"We offer flexible pricing options including fixed-price and time-and-materials."},{question:"Do you provide ongoing support?",answer:"Yes, we offer various maintenance and support packages after project completion."}];A.div`
  position: relative;
  min-height: 100vh;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.9) 30%, rgba(0, 0, 0, 0.3) 100%),
    url('src/assets/img/white.webp');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  display: flex;
  align-items: center;
  padding: 0;
  overflow: hidden;
`;A.div`
  position: relative;
  width: 100%;
  max-width: 1400px;
  margin: 0;
  padding-left: 5%;
  
  @media (max-width: 1200px) {
    padding-left: 6%;
  }
  
  @media (max-width: 768px) {
    padding: 0 1.5rem;
    text-align: center;
  }
  opacity: 0;
  animation: fadeIn 1s ease-out forwards;
  
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;A.h1`
  font-size: 3rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 1rem;
`;A.h2`
  font-size: 2rem;
  font-weight: 500;
  color: #fff;
  margin-bottom: 2rem;
`;A.p`
  font-size: 1.2rem;
  font-weight: 400;
  color: #fff;
  margin-bottom: 2rem;
`;A.a`
  display: inline-block;
  padding: 0.75rem 1rem;
  font-size: 1.2rem;
  font-weight: 500;
  color: #fff;
  background-color: #007bff;
  border-radius: 0.25rem;
  text-decoration: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;const le={},kt=()=>{const e=Te();return i.jsxs(i.Fragment,{children:[i.jsx(ee,{context:le,children:i.jsxs(te,{children:[i.jsx("title",{children:"Professional Digital Services - Web, Mobile & Cloud Solutions"}),i.jsx("meta",{name:"description",content:"Transform your business with our comprehensive digital solutions. Expert web development, mobile apps, cloud solutions, and digital marketing services."}),i.jsx("meta",{name:"keywords",content:"web development, mobile apps, cloud solutions, digital marketing, SEO, React, Node.js"}),i.jsx("link",{rel:"canonical",href:"https://yourwebsite.com/services"}),i.jsx("meta",{property:"og:title",content:"Professional Digital Services - Web, Mobile & Cloud Solutions"}),i.jsx("meta",{property:"og:description",content:"Transform your business with our comprehensive digital solutions. Expert web development, mobile apps, cloud solutions, and digital marketing services."}),i.jsx("meta",{property:"og:type",content:"website"}),i.jsx("meta",{property:"og:url",content:"https://yourwebsite.com/services"}),i.jsx("meta",{name:"twitter:card",content:"summary_large_image"}),i.jsx("meta",{name:"twitter:title",content:"Professional Digital Services - Web, Mobile & Cloud Solutions"}),i.jsx("meta",{name:"twitter:description",content:"Transform your business with our comprehensive digital solutions. Expert web development, mobile apps, cloud solutions, and digital marketing services."}),i.jsx("script",{type:"application/ld+json",children:JSON.stringify({"@context":"https://schema.org","@graph":[{"@type":"WebPage","@id":"https://yourwebsite.com/services/#webpage",url:"https://yourwebsite.com/services/",name:"Professional Digital Services - Web, Mobile & Cloud Solutions",description:"Transform your business with our comprehensive digital solutions.",isPartOf:{"@id":"https://yourwebsite.com/#website"}},{"@type":"Organization","@id":"https://yourwebsite.com/#organization",name:"Your Company Name",url:"https://yourwebsite.com",logo:{"@type":"ImageObject",url:"https://yourwebsite.com/logo.png"}},{"@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":"https://yourwebsite.com/",name:"Home"}},{"@type":"ListItem",position:2,item:{"@id":"https://yourwebsite.com/services/",name:"Services"}}]},{"@type":"ItemList",itemListElement:[{"@type":"Service",name:"Web Development",description:"Creating modern, responsive websites and web applications",offers:{"@type":"Offer",availability:"https://schema.org/InStock"}},{"@type":"Service",name:"Mobile Apps",description:"Native and cross-platform mobile solutions",offers:{"@type":"Offer",availability:"https://schema.org/InStock"}},{"@type":"Service",name:"Cloud Solutions",description:"Scalable and secure cloud infrastructure",offers:{"@type":"Offer",availability:"https://schema.org/InStock"}},{"@type":"Service",name:"Digital Marketing",description:"Comprehensive digital marketing strategies",offers:{"@type":"Offer",availability:"https://schema.org/InStock"}}]}]})})]})}),i.jsxs("div",{className:"relative min-h-[120vh] bg-cover bg-center bg-fixed overflow-hidden",style:{backgroundImage:"linear-gradient(165deg, rgba(37, 99, 235, 0.95) 0%, rgba(37, 99, 235, 0.4) 25%, rgba(0, 0, 0, 0) 50%), url('src/assets/img/white.webp')"},children:[i.jsx("div",{className:"container mx-auto px-6 min-h-screen flex items-center relative z-10 pt-32",children:i.jsxs("div",{className:"grid lg:grid-cols-12 gap-12 items-center",children:[i.jsx("div",{className:"lg:col-span-7 space-y-8",children:i.jsxs(l.div,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:1,ease:"easeOut"},className:"space-y-6",children:[i.jsxs(l.div,{className:"inline-flex items-center bg-white/90 backdrop-blur-sm rounded-full px-4 py-2",whileHover:{scale:1.05},children:[i.jsx("span",{className:"text-blue-600 mr-2",children:"★"}),i.jsx("span",{className:"text-gray-800 text-sm font-medium",children:"Trusted by Fortune 500 Companies"})]}),i.jsxs("h1",{className:"text-5xl lg:text-7xl font-bold text-gray-900 leading-tight",children:["Elevate Your ",i.jsx("br",{}),i.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600",children:"Digital Presence"})]}),i.jsx("h2",{className:"text-xl lg:text-2xl text-gray-700 max-w-xl leading-relaxed",children:"Transform your business with cutting-edge technology solutions designed for the modern digital landscape."}),i.jsx("div",{className:"flex flex-col sm:flex-row gap-4 pt-6",children:i.jsxs(l.button,{whileHover:{scale:1.02},whileTap:{scale:.98},onClick:()=>e("/contact"),className:"px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-lg font-semibold shadow-lg shadow-blue-500/25 flex items-center justify-center group cursor-pointer",children:["Get Started",i.jsx("svg",{className:"w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:i.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M13 7l5 5m0 0l-5 5m5-5H6"})})]})}),i.jsx("div",{className:"grid grid-cols-3 gap-8 pt-12 border-t border-gray-200 mt-12",children:[{number:"500+",label:"Projects Completed"},{number:"98%",label:"Client Satisfaction"},{number:"24/7",label:"Expert Support"}].map((t,s)=>i.jsxs(l.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.5+s*.1},className:"text-center",children:[i.jsx("div",{className:"text-2xl lg:text-3xl font-bold text-gray-900 mb-2",children:t.number}),i.jsx("div",{className:"text-sm text-gray-600",children:t.label})]},s))})]})}),i.jsx("div",{className:"lg:col-span-5 hidden lg:block",children:i.jsx("div",{className:"grid grid-cols-2 gap-4 relative",children:[{icon:"⚡",title:"Lightning Fast",desc:"Optimized Performance"},{icon:"🛡️",title:"Enterprise Security",desc:"Bank-Grade Protection"},{icon:"🔄",title:"Scalable Solutions",desc:"Grow with Confidence"},{icon:"💡",title:"Innovation First",desc:"Cutting-edge Tech"}].map((t,s)=>i.jsxs(l.div,{initial:{opacity:0,x:20},animate:{opacity:1,x:0},transition:{delay:.8+s*.1},whileHover:{y:-5,scale:1.02},className:"bg-white/90 backdrop-blur-md rounded-xl p-6 hover:bg-white/95 transition-all duration-300",children:[i.jsx("div",{className:"text-3xl mb-3",children:t.icon}),i.jsx("h3",{className:"text-gray-900 font-semibold mb-1",children:t.title}),i.jsx("p",{className:"text-gray-600 text-sm",children:t.desc})]},s))})})]})}),i.jsx(l.div,{initial:{opacity:0},animate:{opacity:1},transition:{delay:2},className:"absolute bottom-12 left-1/2 transform -translate-x-1/2",children:i.jsxs(l.div,{animate:{y:[0,10,0]},transition:{repeat:1/0,duration:1.5},className:"text-white/60 flex flex-col items-center gap-2 cursor-pointer hover:text-white/80 transition-colors",children:[i.jsx("span",{className:"text-sm font-medium",children:"Explore More"}),i.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:i.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M19 14l-7 7m0 0l-7-7m7 7V3"})})]})})]}),i.jsx("section",{"aria-label":"Our Services",className:"py-20 px-4",children:i.jsxs("div",{className:"max-w-7xl mx-auto",children:[i.jsxs(l.div,{className:"text-center mb-16",initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.8},children:[i.jsx("h2",{className:"text-4xl md:text-5xl font-bold text-gray-900 mb-4",children:"Our Services"}),i.jsx("div",{className:"w-20 h-1 bg-blue-600 mx-auto mb-6"}),i.jsx("p",{className:"text-xl text-gray-600 max-w-2xl mx-auto",children:"Comprehensive digital solutions tailored to your business needs"})]}),i.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8",children:vt.map((t,s)=>i.jsx(yt,{service:t,index:s},t.id))})]})}),i.jsx("section",{"aria-label":"Company Statistics",className:"py-16 bg-gray-50",children:i.jsx("div",{className:"max-w-7xl mx-auto px-4",children:i.jsx("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-8",children:jt.map((t,s)=>i.jsxs(l.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-100px"},transition:{duration:.5,delay:s*.1},className:"text-center group",children:[i.jsx(l.div,{className:"text-blue-600 text-2xl mb-4 mx-auto",whileHover:{scale:1.2},transition:{type:"spring",stiffness:400,damping:10},children:t.icon}),i.jsx("div",{className:"text-3xl font-bold text-gray-900 mb-2",children:i.jsx(pt,{value:t.number,suffix:t.suffix})}),i.jsx(l.div,{className:"text-gray-600",initial:{opacity:0},whileInView:{opacity:1},viewport:{once:!0},transition:{delay:.5+s*.1},children:t.label})]},s))})})}),i.jsx("section",{"aria-label":"Our Work Process",className:"py-24 px-4",children:i.jsxs("div",{className:"max-w-7xl mx-auto",children:[i.jsxs(l.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.8},className:"text-center mb-16",children:[i.jsx("h2",{className:"text-3xl font-bold text-gray-900 mb-4",children:"How We Work"}),i.jsx("p",{className:"text-gray-600 max-w-2xl mx-auto",children:"Our proven process ensures successful project delivery"})]}),i.jsx("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-8",children:wt.map((t,s)=>i.jsx(gt,{step:t,index:s},s))})]})}),i.jsx("section",{"aria-label":"Technologies",className:"py-16 bg-gray-50",children:i.jsxs("div",{className:"max-w-7xl mx-auto px-4",children:[i.jsxs("div",{className:"text-center mb-12",children:[i.jsx("h2",{className:"text-3xl font-bold text-gray-900 mb-4",children:"Technologies We Use"}),i.jsx("p",{className:"text-gray-600",children:"Latest tools and frameworks for optimal results"})]}),i.jsx("div",{className:"grid grid-cols-2 md:grid-cols-6 gap-8",children:St.map((t,s)=>i.jsx(l.div,{whileHover:{scale:1.05},className:"bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow text-center",children:i.jsx("span",{className:"text-gray-900 font-medium",children:t})},s))})]})}),i.jsx("section",{"aria-label":"Frequently Asked Questions",className:"py-20 px-4",children:i.jsxs("div",{className:"max-w-3xl mx-auto",children:[i.jsx("h2",{className:"text-3xl font-bold text-gray-900 mb-4 text-center",children:"Frequently Asked Questions"}),i.jsx("div",{className:"space-y-6",itemScope:!0,itemType:"https://schema.org/FAQPage",children:Nt.map((t,s)=>i.jsx(bt,{faq:t,index:s},s))})]})})]})},Et=m.memo(kt),Ct=m.memo(()=>i.jsxs(ee,{context:le,children:[i.jsxs(te,{children:[i.jsx("title",{children:"Professional Digital Services - Web, Mobile & Cloud Solutions"}),i.jsx("meta",{name:"description",content:"Transform your business with our comprehensive digital solutions. Expert web development, mobile apps, cloud solutions, and digital marketing services."}),i.jsx("meta",{name:"keywords",content:"web development, mobile apps, cloud solutions, digital marketing, SEO, React, Node.js"}),i.jsx("link",{rel:"canonical",href:"https://yourwebsite.com/services"}),i.jsx("meta",{property:"og:title",content:"Professional Digital Services - Web, Mobile & Cloud Solutions"}),i.jsx("meta",{property:"og:description",content:"Transform your business with our comprehensive digital solutions. Expert web development, mobile apps, cloud solutions, and digital marketing services."}),i.jsx("meta",{property:"og:type",content:"website"}),i.jsx("meta",{property:"og:url",content:"https://yourwebsite.com/services"}),i.jsx("meta",{name:"twitter:card",content:"summary_large_image"}),i.jsx("meta",{name:"twitter:title",content:"Professional Digital Services - Web, Mobile & Cloud Solutions"}),i.jsx("meta",{name:"twitter:description",content:"Transform your business with our comprehensive digital solutions. Expert web development, mobile apps, cloud solutions, and digital marketing services."}),i.jsx("script",{type:"application/ld+json",children:JSON.stringify({"@context":"https://schema.org","@graph":[{"@type":"WebPage","@id":"https://yourwebsite.com/services/#webpage",url:"https://yourwebsite.com/services/",name:"Professional Digital Services - Web, Mobile & Cloud Solutions",description:"Transform your business with our comprehensive digital solutions.",isPartOf:{"@id":"https://yourwebsite.com/#website"}},{"@type":"Organization","@id":"https://yourwebsite.com/#organization",name:"Your Company Name",url:"https://yourwebsite.com",logo:{"@type":"ImageObject",url:"https://yourwebsite.com/logo.png"}},{"@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":"https://yourwebsite.com/",name:"Home"}},{"@type":"ListItem",position:2,item:{"@id":"https://yourwebsite.com/services/",name:"Services"}}]},{"@type":"ItemList",itemListElement:[{"@type":"Service",name:"Web Development",description:"Creating modern, responsive websites and web applications",offers:{"@type":"Offer",availability:"https://schema.org/InStock"}},{"@type":"Service",name:"Mobile Apps",description:"Native and cross-platform mobile solutions",offers:{"@type":"Offer",availability:"https://schema.org/InStock"}},{"@type":"Service",name:"Cloud Solutions",description:"Scalable and secure cloud infrastructure",offers:{"@type":"Offer",availability:"https://schema.org/InStock"}},{"@type":"Service",name:"Digital Marketing",description:"Comprehensive digital marketing strategies",offers:{"@type":"Offer",availability:"https://schema.org/InStock"}}]}]})})]}),i.jsx(Et,{})]})),Mt=m.memo(Ct);export{Mt as default};
