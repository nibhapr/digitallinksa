import{b as E,s as O,c as H,d as T,r as m,j as e,m as a,R,H as V,a as M,N as B,L as P}from"./index-D_66owGy.js";import{d as h}from"./styled-components.browser.esm-o2nQv5vL.js";import{S as X}from"./SEO-1zNV-upR.js";function G(t){t.values.forEach(r=>r.stop())}function I(t,r){[...r].reverse().forEach(o=>{const c=t.getVariant(o);c&&O(t,c),t.variantChildren&&t.variantChildren.forEach(l=>{I(l,r)})})}function W(t,r){if(Array.isArray(r))return I(t,r);if(typeof r=="string")return I(t,[r]);O(t,r)}function D(){const t=new Set,r={subscribe(n){return t.add(n),()=>void t.delete(n)},start(n,o){const c=[];return t.forEach(l=>{c.push(E(l,n,{transitionOverride:o}))}),Promise.all(c)},set(n){return t.forEach(o=>{W(o,n)})},stop(){t.forEach(n=>{G(n)})},mount(){return()=>{r.stop()}}};return r}function U(){const t=H(D);return T(t.mount,[]),t}const $=U;var k=new Map,f=new WeakMap,C=0,F=void 0;function q(t){return t?(f.has(t)||(C+=1,f.set(t,C.toString())),f.get(t)):"0"}function _(t){return Object.keys(t).sort().filter(r=>t[r]!==void 0).map(r=>`${r}_${r==="root"?q(t.root):t[r]}`).toString()}function J(t){const r=_(t);let n=k.get(r);if(!n){const o=new Map;let c;const l=new IntersectionObserver(i=>{i.forEach(s=>{var d;const x=s.isIntersecting&&c.some(u=>s.intersectionRatio>=u);t.trackVisibility&&typeof s.isVisible>"u"&&(s.isVisible=x),(d=o.get(s.target))==null||d.forEach(u=>{u(x,s)})})},t);c=l.thresholds||(Array.isArray(t.threshold)?t.threshold:[t.threshold||0]),n={id:r,observer:l,elements:o},k.set(r,n)}return n}function Y(t,r,n={},o=F){if(typeof window.IntersectionObserver>"u"&&o!==void 0){const d=t.getBoundingClientRect();return r(o,{isIntersecting:o,target:t,intersectionRatio:typeof n.threshold=="number"?n.threshold:0,time:0,boundingClientRect:d,intersectionRect:d,rootBounds:d}),()=>{}}const{id:c,observer:l,elements:i}=J(n),s=i.get(t)||[];return i.has(t)||i.set(t,s),s.push(r),l.observe(t),function(){s.splice(s.indexOf(r),1),s.length===0&&(i.delete(t),l.unobserve(t)),i.size===0&&(l.disconnect(),k.delete(c))}}function L({threshold:t,delay:r,trackVisibility:n,rootMargin:o,root:c,triggerOnce:l,skip:i,initialInView:s,fallbackInView:d,onChange:x}={}){var u;const[g,v]=m.useState(null),w=m.useRef(),[y,A]=m.useState({inView:!!s,entry:void 0});w.current=x,m.useEffect(()=>{if(i||!g)return;let b;return b=Y(g,(z,N)=>{A({inView:z,entry:N}),w.current&&w.current(z,N),N.isIntersecting&&l&&b&&(b(),b=void 0)},{root:c,rootMargin:o,threshold:t,trackVisibility:n,delay:r},d),()=>{b&&b()}},[Array.isArray(t)?t.toString():t,g,c,o,l,i,n,d,r]);const j=(u=y.entry)==null?void 0:u.target,S=m.useRef();!g&&j&&!l&&!i&&S.current!==j&&(S.current=j,A({inView:!!s,entry:void 0}));const p=[v,y.inView,y.entry];return p.ref=p[0],p.inView=p[1],p.entry=p[2],p}const K=({children:t})=>e.jsx(a.button,{className:`px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 \r
               text-white rounded-full font-medium transform transition \r
               hover:scale-105 hover:shadow-lg`,children:t}),Q=({children:t})=>e.jsx(a.button,{className:`px-8 py-4 border border-purple-200 text-gray-700 \r
               rounded-full font-medium transform transition \r
               hover:border-purple-400 hover:shadow-lg`,children:t}),Z=({end:t,duration:r=2e3})=>{const[n,o]=m.useState(0),[c,l]=L({threshold:.5,triggerOnce:!0});return m.useEffect(()=>{if(l){let i,s;const d=x=>{i||(i=x);const u=x-i,g=Math.min(u/r,1),v=Math.floor(t*g);o(v),u<r&&(s=requestAnimationFrame(d))};return s=requestAnimationFrame(d),()=>{s&&cancelAnimationFrame(s)}}},[t,r,l]),e.jsx("span",{ref:c,children:n})},ee=h.div`
  position: relative;
  min-height: 120vh;
  background: linear-gradient(165deg, 
    rgba(37, 99, 235, 0.95) 0%, 
    rgba(37, 99, 235, 0.4) 25%, 
    rgba(0, 0, 0, 0) 50%),
    url('src/assets/img/white.webp');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  overflow: hidden;
`,te=h.div`
  position: relative;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 24px;
  min-height: 100vh;
  display: flex;
  align-items: center;
  z-index: 10;
  padding-top: 128px;

  @media (max-width: 768px) {
    padding: 128px 24px 0;
    text-align: center;
  }
`,ie=h.span`
  display: block;
  font-size: 0.875rem;
  color: #2563eb;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 3px;
  font-weight: 500;
  position: relative;
  padding-left: 45px;
  
  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    width: 30px;
    height: 1px;
    background: linear-gradient(90deg, #2563eb, transparent);
    transform: scaleX(0);
    animation: lineGrow 0.8s ease-out 0.5s forwards;
  }
  
  @keyframes lineGrow {
    to { transform: scaleX(1); }
  }
  
  @media (max-width: 768px) {
    font-size: 0.75rem;
    padding-left: 0;
    margin-bottom: 0.5rem;
    
    &:before {
      display: none;
    }
  }
`,re=h.span`
  display: block;
  font-size: 3.5rem;
  font-weight: 500;
  color: #1e293b;
  margin-bottom: 1.5rem;
  line-height: 1.1;
  max-width: 600px;
  background: linear-gradient(120deg, #1e293b, #2563eb);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: -0.5px;
  
  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
`,se=h.p`
  font-size: 1rem;
  color: #334155;
  margin: 1.5rem 0 2.5rem;
  max-width: 450px;
  line-height: 1.6;
  font-weight: 400;
  letter-spacing: 0.2px;
  opacity: 0;
  animation: fadeIn 1s ease-out 0.3s forwards;
  
  @media (max-width: 768px) {
    font-size: 0.9rem;
    margin: 1rem auto 2rem;
    text-align: center;
  }
`,ae=h(a.div)`
  display: flex;
  justify-content: flex-start;
  opacity: 0;
  animation: fadeUp 1s ease-out 0.9s forwards;

  @media (max-width: 640px) {
    justify-content: center;
  }
`,ne=h(P)`
  padding: 1.2rem 3rem;
  font-size: 0.95rem;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  border: 2px solid rgba(37, 99, 235, 0.3);
  border-radius: 4px;
  color: #2563eb;
  text-decoration: none;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  background: white;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      120deg,
      transparent,
      rgba(37, 99, 235, 0.1),
      transparent
    );
    transition: 0.5s;
  }

  &:hover {
    transform: translateY(-3px);
    border-color: rgba(37, 99, 235, 0.8);
    box-shadow: 0 10px 20px rgba(37, 99, 235, 0.1);

    &::before {
      left: 100%;
    }
  }
`,de=()=>{const[t,r]=m.useState(!1),n=$(),[o,c]=L({threshold:.1,triggerOnce:!0});m.useEffect(()=>{const i=()=>{r(window.innerWidth<768)};return i(),window.addEventListener("resize",i),()=>window.removeEventListener("resize",i)},[]),m.useEffect(()=>{c&&n.start("visible")},[n,c]);const l={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.8,ease:"easeOut"}}};return R.memo(()=>e.jsx(a.div,{initial:{height:0},animate:{height:"auto"},exit:{height:0},className:"lg:hidden"})),e.jsxs(V,{children:[e.jsx(X,{title:"About Us | Lovosis Technology",description:"Learn about Lovosis Technology's journey, mission, and vision for the future.",keywords:"Lovosis Technology, about us, mission, vision, team"}),e.jsx(M,{children:e.jsx("script",{type:"application/ld+json",children:JSON.stringify({"@context":"https://schema.org","@graph":[{"@type":"Organization","@id":"https://www.lovosistech.com/#organization",name:"Lovosis Technology",url:"https://www.lovosistech.com",logo:{"@type":"ImageObject",url:"https://www.lovosistech.com/logo.png",width:112,height:112},sameAs:["https://www.facebook.com/lovosistech","https://www.linkedin.com/company/lovosistech","https://twitter.com/lovosistech"],contactPoint:{"@type":"ContactPoint",telephone:"+971-XXX-XXXX",contactType:"customer service",areaServed:"AE",availableLanguage:["en","ar"]}},{"@type":"AboutPage","@id":"https://www.lovosistech.com/about/#webpage",url:"https://www.lovosistech.com/about/",name:"About Us | Lovosis Technology",isPartOf:{"@id":"https://www.lovosistech.com/#website"},about:{"@id":"https://www.lovosistech.com/#organization"},description:"Learn about Lovosis Technology's journey, mission, and vision for the future.",breadcrumb:{"@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":"https://www.lovosistech.com/",name:"Home"}},{"@type":"ListItem",position:2,item:{"@id":"https://www.lovosistech.com/about/",name:"About Us"}}]}}]})})}),e.jsx(ee,{children:e.jsx(te,{children:e.jsx("div",{className:"grid lg:grid-cols-12 gap-12 items-center",children:e.jsx("div",{className:"lg:col-span-7 space-y-8",children:e.jsxs(a.div,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:1,ease:"easeOut"},className:"space-y-6",children:[e.jsxs(a.div,{className:"inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2",whileHover:{scale:1.05},children:[e.jsx("span",{className:"text-blue-400 mr-2",children:"★"}),e.jsx("span",{className:"text-white/90 text-sm font-medium",children:"Trusted by Fortune 500 Companies"})]}),e.jsxs("h1",{children:[e.jsx(ie,{children:"About Our Company"}),e.jsx(re,{children:"Transforming Ideas Into Digital Reality"})]}),e.jsx(se,{children:"We are dedicated to delivering innovative solutions that drive real business growth and transformation. Our expertise and commitment to excellence set us apart in the digital landscape."}),e.jsx(ae,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.8,duration:.8},children:e.jsx(ne,{to:"/service",children:"Our Services"})})]})})})})}),e.jsxs("div",{className:"min-h-screen bg-white overflow-hidden relative",children:[e.jsxs("div",{className:"fixed inset-0 -z-10",children:[e.jsx(a.div,{animate:{y:[-10,10],x:[-10,10],rotate:[0,360]},transition:{duration:t?15:20,repeat:1/0,ease:"linear"},className:`absolute top-[20%] right-[10%] w-[200px] h-[200px] \r
                       md:w-[500px] md:h-[500px]\r
                       bg-gradient-to-r from-gray-50 to-blue-50/30 \r
                       rounded-full blur-[50px] md:blur-[100px]`}),e.jsx(a.div,{animate:{y:[10,-10],x:[10,-10],rotate:[360,0]},transition:{duration:t?20:25,repeat:1/0,ease:"linear"},className:`absolute bottom-[20%] left-[10%] w-[250px] h-[250px] \r
                       md:w-[600px] md:h-[600px]\r
                       bg-gradient-to-r from-blue-50/30 to-gray-50 \r
                       rounded-full blur-[50px] md:blur-[100px]`})]}),e.jsx(B,{}),e.jsxs("section",{className:"relative min-h-screen flex items-center py-16 md:py-24 px-4 md:px-8",children:[e.jsx("div",{className:"absolute inset-0 -z-10",children:e.jsx(a.div,{animate:{rotate:360,scale:[1,1.1,1]},transition:{duration:t?15:20,repeat:1/0,ease:"linear"},className:`absolute top-1/4 right-1/4 w-[200px] md:w-[500px] h-[200px] md:h-[500px] \r
                         bg-gradient-to-r from-purple-300/20 to-blue-300/20 rounded-full blur-3xl`})}),e.jsx("div",{className:"container mx-auto max-w-7xl",children:e.jsxs("div",{className:"flex flex-col lg:flex-row gap-12 md:gap-16 items-center",children:[e.jsxs(a.div,{ref:o,initial:"hidden",animate:n,variants:l,className:"w-full lg:w-1/2 order-2 lg:order-1",children:[e.jsxs("h1",{className:`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold \r
                             tracking-tight leading-tight text-gray-800 mb-6 md:mb-8`,children:[e.jsx(a.span,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.2,duration:.8},className:"block",children:"Our Overview"}),e.jsx(a.span,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.4,duration:.8},className:`block text-transparent bg-clip-text bg-gradient-to-r \r
                             from-purple-600 to-blue-600`,children:"& History"})]}),e.jsx(a.p,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.6,duration:.8},className:`text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed \r
                           max-w-2xl`,children:"Our unwavering dedication to our clients' success has paid off – we're thrilled to announce that our digital marketing efforts have been recognized with both a nomination and an award. At our core, we strive for excellence in everything we do."}),e.jsxs(a.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.8,duration:.8},className:"mt-8 flex flex-col sm:flex-row gap-4",children:[e.jsx(K,{children:"Learn More"}),e.jsx(Q,{children:"Our Services"})]})]}),e.jsxs(a.div,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},transition:{duration:.8},whileHover:{scale:1.02},className:"w-full lg:w-1/2 order-1 lg:order-2",children:[e.jsx(a.div,{className:"relative rounded-3xl overflow-hidden shadow-2xl",whileHover:{boxShadow:"0 20px 40px rgba(0,0,0,0.1)"},transition:{duration:.3},children:e.jsxs("div",{className:"relative aspect-w-16 aspect-h-12 md:aspect-h-9",children:[e.jsx(a.img,{src:"src/assets/img/hero.webp",alt:"Growth Chart 2023",className:"w-full h-full object-cover",initial:{scale:1.1},animate:{scale:1},transition:{duration:1.2,ease:"easeOut"},loading:"lazy"}),e.jsx(a.div,{className:"absolute inset-0 bg-gradient-to-tr",initial:{opacity:0},animate:{opacity:1},transition:{duration:.8},style:{background:"linear-gradient(to top right, rgba(147, 51, 234, 0.2), transparent, transparent)"}})]})}),e.jsx(a.div,{className:`absolute -z-10 -right-2 md:-right-4 -bottom-2 md:-bottom-4 \r
                            w-full h-full rounded-3xl bg-gradient-to-r \r
                            from-purple-200 to-blue-200`,initial:{opacity:0,x:20},animate:{opacity:.5,x:0},transition:{duration:.8,delay:.2},whileHover:{opacity:.7}})]})]})})]}),e.jsx("section",{className:"py-24 bg-white relative overflow-hidden",children:e.jsx("div",{className:"container mx-auto px-4",children:e.jsx(a.div,{className:"max-w-7xl mx-auto",children:e.jsxs("div",{className:"grid md:grid-cols-2 gap-16 items-center",children:[e.jsxs(a.div,{whileHover:{scale:1.02},className:`relative p-8 md:p-12 rounded-3xl bg-white border border-gray-100 shadow-sm\r
                            hover:shadow-xl transition-all duration-300`,children:[e.jsx("div",{className:"absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-400/10 to-blue-400/10 rounded-full blur-2xl"}),e.jsx("h3",{className:"text-3xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent",children:"Our Vision"}),e.jsx("p",{className:"text-gray-600 leading-relaxed mb-8",children:"To revolutionize digital experiences through innovative solutions that empower businesses to thrive in an ever-evolving digital landscape."}),e.jsx("div",{className:"flex flex-wrap gap-4",children:["Innovation","Excellence","Growth"].map((i,s)=>e.jsx("span",{className:"px-4 py-2 rounded-full text-sm font-medium bg-white shadow-sm border border-gray-100",children:i},s))})]}),e.jsxs(a.div,{whileHover:{scale:1.02},className:`relative p-8 md:p-12 rounded-3xl bg-white border border-gray-100 shadow-sm\r
                            hover:shadow-xl transition-all duration-300`,children:[e.jsx("div",{className:"absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-2xl"}),e.jsx("h3",{className:"text-3xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent",children:"Our Mission"}),e.jsx("p",{className:"text-gray-600 leading-relaxed mb-8",children:"To deliver exceptional digital solutions that drive measurable results, fostering lasting partnerships with our clients through innovation and dedication."}),e.jsx("div",{className:"flex flex-wrap gap-4",children:["Client Success","Innovation","Partnership"].map((i,s)=>e.jsx("span",{className:"px-4 py-2 rounded-full text-sm font-medium bg-white shadow-sm border border-gray-100",children:i},s))})]})]})})})}),e.jsxs("section",{className:"py-24 bg-gray-50/50 relative",children:[e.jsx("div",{className:"absolute inset-0 -z-10",children:e.jsx(a.div,{animate:{rotate:-360,scale:[1,1.2,1]},transition:{duration:25,repeat:1/0,ease:"linear"},className:`absolute bottom-1/4 left-1/4 w-[400px] h-[400px] \r
                         bg-gradient-to-r from-cyan-200/20 to-blue-200/20 \r
                         rounded-full blur-3xl`})}),e.jsx("div",{className:"container mx-auto px-4",children:e.jsxs(a.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},className:"max-w-7xl mx-auto",children:[e.jsx("h2",{className:"text-4xl md:text-5xl font-bold text-center mb-8",children:"Why Choose Us"}),e.jsx("p",{className:"text-gray-600 text-center max-w-3xl mx-auto mb-20",children:"We combine innovation with reliability to deliver exceptional digital solutions that drive real business growth and transformation."}),e.jsx("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-8",children:[{icon:"💡",title:"Innovative Solutions",description:"Cutting-edge technology and creative approaches to solve complex business challenges.",color:"from-purple-600 to-indigo-600"},{icon:"🚀",title:"Rapid Deployment",description:"Swift implementation and deployment strategies to get your solutions up and running quickly.",color:"from-indigo-600 to-blue-600"},{icon:"🛠️",title:"Scalable Architecture",description:"Build solutions that grow with your business, ensuring long-term sustainability.",color:"from-blue-600 to-cyan-600"},{icon:"🤝",title:"Dedicated Support",description:"24/7 expert support and maintenance to keep your systems running smoothly.",color:"from-cyan-600 to-teal-600"},{icon:"📊",title:"Data-Driven Insights",description:"Advanced analytics and reporting to make informed business decisions.",color:"from-teal-600 to-green-600"},{icon:"🔒",title:"Enterprise Security",description:"Top-tier security measures to protect your valuable business assets.",color:"from-green-600 to-emerald-600"}].map((i,s)=>e.jsxs(a.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{delay:s*.1},whileHover:{y:-5},className:`bg-white rounded-2xl p-8 shadow-sm border border-gray-100 \r
                              hover:shadow-xl transition-all duration-300`,children:[e.jsx("div",{className:"mb-6 text-4xl",children:i.icon}),e.jsx("h3",{className:`text-xl font-bold mb-4 bg-gradient-to-r ${i.color} 
                                  bg-clip-text text-transparent`,children:i.title}),e.jsx("p",{className:"text-gray-600 leading-relaxed",children:i.description}),e.jsx(a.div,{className:"mt-6",whileHover:{scale:1.05},children:e.jsxs("a",{href:"#",className:`inline-flex items-center text-sm font-medium 
                                  bg-gradient-to-r ${i.color} bg-clip-text text-transparent`,children:["Learn more",e.jsx("svg",{className:`ml-2 w-4 h-4 bg-gradient-to-r ${i.color} bg-clip-text`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})})]})})]},s))})]})})]}),e.jsxs("section",{className:"py-24 bg-white relative overflow-hidden",children:[e.jsx("div",{className:"absolute inset-0 -z-10",children:e.jsx(a.div,{animate:{rotate:180,scale:[1,1.15,1]},transition:{duration:30,repeat:1/0,ease:"linear"},className:`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 \r
                         w-[500px] h-[500px] bg-gradient-to-r from-blue-200/30 to-cyan-200/30 \r
                         rounded-full blur-3xl`})}),e.jsx("div",{className:"container mx-auto px-4 relative",children:e.jsx("div",{className:"max-w-7xl mx-auto",children:e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8",children:[{number:500,label:"Clients Worldwide",icon:"🌍",suffix:"+"},{number:98,label:"Client Retention",icon:"🤝",suffix:"%"},{number:150,label:"Team Members",icon:"👥",suffix:"+"},{number:25,label:"Countries Served",icon:"🌐",suffix:"+"}].map((i,s)=>e.jsxs(a.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{delay:s*.1},whileHover:{y:-5},className:"relative group",children:[e.jsx("div",{className:`absolute inset-0 bg-gradient-to-r from-blue-300/20 to-cyan-300/20 \r
                                  rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity`}),e.jsxs("div",{className:`relative bg-white rounded-2xl p-8 \r
                                  border border-gray-100 shadow-sm \r
                                  hover:shadow-xl transition-all duration-300`,children:[e.jsx("div",{className:"text-4xl mb-4",children:i.icon}),e.jsxs("div",{className:`text-4xl font-bold mb-2 bg-gradient-to-r from-blue-500 to-cyan-500 \r
                                    bg-clip-text text-transparent`,children:[e.jsx(Z,{end:i.number}),i.suffix]}),e.jsx("div",{className:"text-blue-900/70",children:i.label})]})]},s))})})})]}),e.jsx("section",{className:"py-12 md:py-24 relative",children:e.jsx("div",{className:"container mx-auto px-4 sm:px-6 lg:px-8",children:e.jsxs("div",{className:"max-w-7xl mx-auto text-center",children:[e.jsx(a.h2,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},className:`text-3xl sm:text-4xl md:text-5xl font-bold mb-8 md:mb-12 \r
                           text-gray-800 px-4`,children:"Global Presence"}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8",children:[{region:"Americas",offices:5,clients:200,icon:"🌎",gradient:"from-blue-500 to-blue-600"},{region:"Europe",offices:3,clients:150,icon:"🌍",gradient:"from-blue-400 to-blue-500"},{region:"Asia Pacific",offices:4,clients:150,icon:"🌏",gradient:"from-blue-500 to-blue-600"}].map((i,s)=>e.jsxs(a.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{delay:t?s*.1:s*.2,duration:.5},whileHover:t?{}:{y:-5},className:`bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 \r
                              shadow-lg border border-blue-100 hover:shadow-xl \r
                              transition-all duration-300 mx-4 sm:mx-0`,children:[e.jsx("div",{className:"text-3xl md:text-4xl mb-3 md:mb-4",children:i.icon}),e.jsx("h3",{className:`text-xl md:text-2xl font-bold mb-3 md:mb-4 
                                   bg-gradient-to-r ${i.gradient} 
                                   bg-clip-text text-transparent`,children:i.region}),e.jsxs("div",{className:"space-y-2 md:space-y-3",children:[e.jsxs("p",{className:`text-gray-600 flex items-center justify-center gap-2 \r
                                   text-sm md:text-base`,children:[e.jsx("span",{className:"font-semibold",children:i.offices}),"Global Offices"]}),e.jsxs("p",{className:`text-gray-600 flex items-center justify-center gap-2 \r
                                   text-sm md:text-base`,children:[e.jsxs("span",{className:"font-semibold",children:[i.clients,"+"]}),"Active Clients"]})]})]},s))})]})})})]})]})};export{de as default};
