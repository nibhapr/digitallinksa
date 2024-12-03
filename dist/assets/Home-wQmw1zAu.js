import{R as f,j as e,m as r,H as u,r as c,a as h,u as S}from"./index-D_66owGy.js";import{S as z}from"./SEO-1zNV-upR.js";import{d as g,m as I}from"./styled-components.browser.esm-o2nQv5vL.js";import{e as O}from"./index-DpmFZVTh.js";import T from"./Clients-DEPj5bqE.js";const w=({children:t,variant:i="primary",size:a="md",className:s="",icon:l,loading:o=!1,disabled:n=!1,...d})=>{const m="inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 relative overflow-hidden",p={sm:"px-4 py-2 text-sm min-w-[100px]",md:"px-6 py-2.5 text-base min-w-[120px]",lg:"px-8 py-3 text-lg min-w-[140px]"},x={primary:`
      bg-gradient-to-r from-gray-900 to-gray-700 text-white hover:from-gray-800 hover:to-gray-600 
      shadow-md hover:shadow-lg active:shadow-inner disabled:from-gray-400 disabled:to-gray-300
      backdrop-filter backdrop-blur-sm`,secondary:`
      bg-white text-gray-800 border border-gray-200 hover:bg-gray-50 
      hover:border-gray-300 active:bg-gray-100 disabled:bg-gray-50 disabled:text-gray-400
      shadow-sm hover:shadow`,outline:`
      border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white 
      active:bg-gray-900 disabled:border-gray-300 disabled:text-gray-300
      shadow-sm hover:shadow-md`},b={hover:{scale:1.015,transition:{duration:.2,ease:"easeInOut"}},tap:{scale:.985},disabled:{scale:1,opacity:.65}},v={repeat:1/0,ease:"linear",duration:1};return e.jsxs(r.button,{className:`
        ${m}
        ${p[a]}
        ${x[i]}
        ${n?"cursor-not-allowed":"cursor-pointer"}
        ${s}
      `,variants:b,whileHover:!n&&!o?"hover":void 0,whileTap:!n&&!o?"tap":void 0,animate:n?"disabled":"default",disabled:n||o,...d,children:[o?e.jsx(r.span,{className:"w-5 h-5 border-2 border-white border-t-transparent rounded-full",animate:{rotate:360},transition:v}):e.jsxs(e.Fragment,{children:[l&&e.jsx("span",{className:"mr-2",children:l}),t]}),e.jsx(r.div,{className:"absolute inset-0 bg-white mix-blend-soft-light",initial:{opacity:0},whileHover:{opacity:.1}})]})};w.displayName="Button";f.memo(w);const H=(t,i=2e3)=>{const[a,s]=c.useState(0);return c.useEffect(()=>{let l,o;const n=d=>{l||(l=d);const m=d-l;if(m<i){const p=Math.min(t,m/i*t);s(p),o=requestAnimationFrame(n)}else s(t)};return o=requestAnimationFrame(n),()=>cancelAnimationFrame(o)},[t,i]),a},A=g.section`
  position: relative;
  min-height: 100vh;
  background: linear-gradient(165deg, rgba(37, 99, 235, 0.95) 0%, rgba(37, 99, 235, 0.4) 25%, rgba(0, 0, 0, 0) 50%),
    url('src/assets/img/white.webp');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  display: flex;
  align-items: center;
  padding: 0;
  overflow: hidden;
`,E=()=>{const t={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.6}}},i=f.memo(({stat:d,index:m})=>{const p=d.number.includes("%"),x=d.number.includes("/"),b=d.number.includes("+"),v=parseInt(d.number.replace(/[^0-9]/g,"")),k=H(v),C=()=>{if(x)return"24/7";let y=Math.round(k);return p?`${y}%`:b?`${y}+`:y};return e.jsxs(r.li,{variants:o,whileHover:{scale:1.05,boxShadow:"0 15px 30px rgba(0, 0, 0, 0.08)",y:-8,background:"linear-gradient(45deg, rgba(255, 255, 255, 0.95), rgba(249, 250, 251, 0.98))"},className:"text-center p-4 rounded-xl bg-white shadow-sm transition-all duration-300 border border-sky-100",children:[e.jsx(r.div,{initial:{scale:.5},animate:{scale:1},transition:{delay:.5+m*.2},className:"text-3xl font-bold bg-gradient-to-r from-sky-800 to-blue-600 bg-clip-text text-transparent",children:C()}),e.jsx("div",{className:"text-sky-900 font-medium mt-1",children:d.label})]},m)}),a=f.useMemo(()=>[{number:"98%",label:"Success Rate"},{number:"24/7",label:"Support"},{number:"100+",label:"Countries"}],[]),s={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.2,delayChildren:.3}}},l={hidden:{x:-60,opacity:0},visible:{x:0,opacity:1,transition:{duration:.8}}},o={hidden:{scale:.8,opacity:0},visible:{scale:1,opacity:1,transition:{duration:.6}}},n={initial:{backgroundPosition:"-200%"},animate:{backgroundPosition:"200%",transition:{repeat:1/0,duration:4,ease:"linear"}}};return e.jsxs(u,{children:[e.jsx(z,{title:"Lovosis Technology - Innovative Solutions for Your Business",description:"Discover Lovosis Technology's innovative solutions to take your business to the next level. Our proven strategies have helped over 500+ businesses achieve remarkable growth in the digital landscape.",keywords:"Lovosis Technology, digital transformation, business growth, innovative solutions"}),e.jsx("script",{type:"application/ld+json",children:JSON.stringify({"@context":"https://schema.org","@graph":[{"@type":"WebSite","@id":"https://www.lovosistech.com/#website",url:"https://www.lovosistech.com",name:"Lovosis Technology",description:"Innovative Solutions for Your Business",publisher:{"@id":"https://www.lovosistech.com/#organization"}},{"@type":"Organization","@id":"https://www.lovosistech.com/#organization",name:"Lovosis Technology",url:"https://www.lovosistech.com",logo:{"@type":"ImageObject",url:"https://www.lovosistech.com/logo.png"},sameAs:["https://www.linkedin.com/company/lovosistech","https://twitter.com/lovosistech"],aggregateRating:{"@type":"AggregateRating",ratingValue:"4.9",reviewCount:"500",bestRating:"5"}},{"@type":"Service",serviceType:"Digital Transformation",provider:{"@id":"https://www.lovosistech.com/#organization"},areaServed:{"@type":"Country",name:"Global"},hasOfferCatalog:{"@type":"OfferCatalog",name:"Digital Services",itemListElement:[{"@type":"Offer",itemOffered:{"@type":"Service",name:"Business Analytics",description:"Advanced analytics solutions for business optimization"}},{"@type":"Offer",itemOffered:{"@type":"Service",name:"Process Automation",description:"Seamless automation solutions for increased efficiency"}}]}},{"@type":"WebPage","@id":"https://www.lovosistech.com/#webpage",url:"https://www.lovosistech.com",name:"Lovosis Technology - Innovative Solutions for Your Business",description:"Discover Lovosis Technology's innovative solutions to take your business to the next level.",isPartOf:{"@id":"https://www.lovosistech.com/#website"},about:{"@id":"https://www.lovosistech.com/#organization"},breadcrumb:{"@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":"https://www.lovosistech.com/",name:"Home"}}]}}]})}),e.jsx(A,{"aria-label":"Hero Section",children:e.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 lg:pt-32 pb-16 relative",children:[e.jsxs("div",{className:"flex flex-col lg:flex-row items-center gap-12 lg:gap-12",children:[e.jsxs(r.article,{variants:s,initial:"hidden",animate:"visible",className:"flex-1 text-center lg:text-left space-y-8 sm:space-y-8 pt-8 sm:pt-0",children:[e.jsxs(r.h1,{variants:t,className:"text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-4 sm:mb-6",children:[e.jsx(r.span,{variants:n,initial:"initial",animate:"animate",className:"bg-gradient-to-r from-sky-800 via-blue-600 to-sky-800 bg-[length:200%_auto] bg-clip-text text-transparent",children:"Transform Your"}),e.jsx("br",{}),e.jsxs("span",{className:"text-gray-900 relative",children:["Digital Future",e.jsx(r.span,{"aria-hidden":"true",className:"absolute -bottom-2 left-0 w-full h-2 bg-sky-100 -z-10",initial:{scaleX:0},animate:{scaleX:1},transition:{delay:1,duration:.8}})]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx(r.p,{variants:t,className:"text-base sm:text-lg md:text-xl text-sky-900 max-w-xl mx-auto lg:mx-0",children:"Discover our innovative solutions to take your business to the next level. Our proven strategies have helped over 500+ businesses achieve remarkable growth in the digital landscape."}),e.jsx(r.p,{variants:t,className:"text-sm sm:text-base md:text-lg text-sky-800/80 max-w-xl mx-auto lg:mx-0",children:"We specialize in cutting-edge digital transformation, delivering customized strategies that drive growth and enhance your market presence. With a track record of 98% client satisfaction and average ROI improvement of 150%."}),e.jsx(r.p,{variants:t,className:"text-sm sm:text-base md:text-lg text-sky-800/80 max-w-xl mx-auto lg:mx-0",children:"From advanced analytics to seamless automation, our comprehensive suite of services helps businesses optimize operations, increase efficiency, and achieve sustainable success in today's competitive landscape."})]})]}),e.jsx(r.div,{variants:l,className:"flex-1 lg:block mt-12 lg:mt-0",children:e.jsx("img",{src:"src/assets/img/hero.webp",alt:"Transform Your Business",className:"w-full h-[300px] lg:h-auto object-cover rounded-lg shadow-lg",loading:"lazy"})})]}),e.jsx(r.div,{variants:s,initial:"hidden",animate:"visible",className:"mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8",children:a.map((d,m)=>e.jsx(i,{stat:d,index:m},m))})]})})]})},L=()=>{const t=[{id:1,src:"src/assets/img/logo/Barco.jpg",alt:"Company 1"},{id:2,src:"src/assets/img/logo/bose.webp",alt:"Company 2"},{id:3,src:"src/assets/img/logo/CTC.jpg",alt:"Company 3"},{id:4,src:"src/assets/img/dahua/dahua.webp",alt:"Company 4"},{id:5,src:"src/assets/img/logo/Epson.webp",alt:"Company 5"},{id:6,src:"src/assets/img/logo/furman.jpg",alt:"Company 6"},{id:7,src:"src/assets/img/logo/link.webp",alt:"Company 7"},{id:8,src:"src/assets/img/logo/logo.webp",alt:"Company 8"},{id:9,src:"src/assets/img/logo/logoneutrik.webp",alt:"Company 9"},{id:10,src:"src/assets/img/logo/Megvii_logo.webp",alt:"Company 10"},{id:11,src:"src/assets/img/logo/qsc.webp",alt:"Company 11"},{id:12,src:"src/assets/img/logo/Poland.webp",alt:"Company 12"},{id:13,src:"src/assets/img/logo/Ruijie.webp",alt:"Company 13"},{id:14,src:"src/assets/img/logo/seagate-logo-text",alt:"Company 14"},{id:15,src:"src/assets/img/logo/Shuru Logo.webp",alt:"Company 15"},{id:16,src:"src/assets/img/logo/unv.webp",alt:"Company 16"},{id:17,src:"src/assets/img/logo/westerndigital.webp",alt:"Company 17"}],i=[...t,...t];return e.jsxs(e.Fragment,{children:[e.jsxs(h,{children:[e.jsx("title",{children:"Our Partners - Leading Technology Companies"}),e.jsx("meta",{name:"description",content:"Trusted by leading companies in technology, security and audio-visual solutions. Partners include Barco, Bose, Dahua, Epson and more."}),e.jsx("meta",{name:"keywords",content:"technology partners, security solutions, audio visual partners"}),e.jsx("meta",{property:"og:type",content:"website"}),e.jsx("meta",{property:"og:title",content:"Our Technology Partners"}),e.jsx("meta",{property:"og:description",content:"Partnering with world-leading technology companies"}),e.jsx("script",{type:"application/ld+json",children:JSON.stringify({"@context":"https://schema.org","@type":"Organization",name:"Your Company Name",url:"https://www.yourcompany.com",partner:t.map(a=>({"@type":"Organization",name:a.alt,image:a.src})),brand:t.map(a=>({"@type":"Brand",name:a.alt,logo:a.src})),aggregateRating:{"@type":"AggregateRating",ratingValue:"4.9",reviewCount:"500"}})})]}),e.jsxs("section",{className:"py-16 bg-blue-50",children:[e.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[e.jsx("h2",{className:"text-center text-4xl font-bold text-gray-900 mb-12",children:"Trusted by leading companies"}),e.jsx("div",{className:"overflow-hidden",children:e.jsx("div",{className:"flex will-change-transform",style:{animation:"carousel 20s cubic-bezier(0.4, 0.0, 0.2, 1) infinite"},children:i.map(a=>e.jsx("div",{className:"flex-shrink-0 w-[150px] mx-4",children:e.jsx("div",{className:"bg-white p-4 rounded-xl h-24 flex items-center justify-center",children:e.jsx("img",{className:"h-16 w-auto object-contain",src:a.src,alt:a.alt,loading:"lazy"})})},`${a.id}-${Math.random()}`))})})]}),e.jsx("style",{children:`
            @keyframes carousel {
              0% { transform: translate3d(0, 0, 0); }
              100% { transform: translate3d(-50%, 0, 0); }
            }
          `})]})]})};function Y({title:t,titleId:i,...a},s){return c.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:s,"aria-labelledby":i},a),t?c.createElement("title",{id:i},t):null,c.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"}))}const R=c.forwardRef(Y);function B({title:t,titleId:i,...a},s){return c.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:s,"aria-labelledby":i},a),t?c.createElement("title",{id:i},t):null,c.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M10.05 4.575a1.575 1.575 0 1 0-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 0 1 3.15 0v1.5m-3.15 0 .075 5.925m3.075.75V4.575m0 0a1.575 1.575 0 0 1 3.15 0V15M6.9 7.575a1.575 1.575 0 1 0-3.15 0v8.175a6.75 6.75 0 0 0 6.75 6.75h2.018a5.25 5.25 0 0 0 3.712-1.538l1.732-1.732a5.25 5.25 0 0 0 1.538-3.712l.003-2.024a.668.668 0 0 1 .198-.471 1.575 1.575 0 1 0-2.228-2.228 3.818 3.818 0 0 0-1.12 2.687M6.9 7.575V12m6.27 4.318A4.49 4.49 0 0 1 16.35 15m.002 0h-.002"}))}const M=c.forwardRef(B);function P(){const[t,i]=c.useState(""),[a,s]=c.useState(""),l=o=>{o.preventDefault(),O.sendForm("service_a90ekme","template_bj8vqj2",o.target,"Y9tHCORXy0k8LD77j").then(n=>{console.log(n.text),s("Subscription successful!")},n=>{console.log(n.text),s("Subscription failed. Please try again.")}),i("")};return e.jsxs(u,{children:[e.jsxs(h,{children:[e.jsx("title",{children:"Lovosis"}),e.jsx("meta",{name:"description",content:"Subscribe to our weekly newsletter for cutting-edge insights, transformative strategies, and innovation updates. Join our community of forward-thinking professionals."}),e.jsx("meta",{name:"keywords",content:"newsletter, digital excellence, weekly updates, innovation insights, business transformation"}),e.jsx("meta",{property:"og:type",content:"website"}),e.jsx("meta",{property:"og:title",content:"Subscribe to Our Innovation Newsletter"}),e.jsx("meta",{property:"og:description",content:"Get weekly doses of inspiration and innovation insights delivered to your inbox."}),e.jsx("script",{type:"application/ld+json",children:JSON.stringify({"@context":"https://schema.org","@graph":[{"@type":"WebPage","@id":"https://yourwebsite.com/newsletter/#webpage",url:"https://yourwebsite.com/newsletter/",name:"Newsletter Subscription | Your Company Name",description:"Subscribe to our weekly newsletter for cutting-edge insights and innovation updates."},{"@type":"NewsletterService",name:"Innovation Insights Newsletter",description:"Weekly newsletter featuring digital excellence insights and transformative strategies",provider:{"@type":"Organization",name:"Your Company Name"},offers:{"@type":"Offer",price:"0",priceCurrency:"USD"},frequency:"Weekly",category:"Technology & Innovation"},{"@type":"Organization","@id":"https://yourwebsite.com/#organization",name:"Your Company Name",url:"https://yourwebsite.com",logo:{"@type":"ImageObject",url:"https://yourwebsite.com/logo.png"}}]})})]}),e.jsxs("div",{className:"relative isolate overflow-hidden bg-blue-50 py-16 sm:py-24 lg:py-32",children:[e.jsx("div",{className:"mx-auto max-w-7xl px-6 lg:px-8",children:e.jsxs("div",{className:"mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2",children:[e.jsxs("div",{className:"max-w-xl lg:max-w-lg",children:[e.jsx("h2",{className:"text-4xl font-semibold tracking-tight text-blue-900 animate-fade-in hover:scale-105 transition-transform duration-300",children:"Subscribe to our newsletter"}),e.jsx("p",{className:"mt-4 text-lg text-blue-600",children:"🚀 Step into the future of digital excellence! Join our constellation of innovators where we blend cutting-edge insights with transformative strategies. Get ready for weekly doses of inspiration that turn ambitious dreams into remarkable realities."}),e.jsxs("form",{onSubmit:l,className:"mt-6 flex max-w-md gap-x-4 group",children:[e.jsx("label",{htmlFor:"email-address",className:"sr-only",children:"Email address"}),e.jsx("input",{id:"email-address",name:"email",type:"email",required:!0,placeholder:"Enter your email",autoComplete:"email",value:t,onChange:o=>i(o.target.value),className:"min-w-0 flex-auto rounded-md border-0 bg-white px-3.5 py-2 text-blue-900 shadow-sm ring-1 ring-inset ring-blue-200 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm/6 animate-slide-in hover:shadow-lg transition-shadow duration-300 focus:scale-105 transform"}),e.jsx("button",{type:"submit",className:"flex-none rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 hover:scale-110 hover:rotate-2 active:scale-95 transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600",children:"Subscribe"})]}),a&&e.jsx("p",{className:"mt-4 text-blue-600",children:a})]}),e.jsxs("dl",{className:"grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2",children:[e.jsxs("div",{className:"flex flex-col items-start animate-fade-in group",children:[e.jsx("div",{className:"rounded-md bg-white p-2 ring-1 ring-blue-100 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-lg transition-all duration-300",children:e.jsx(R,{"aria-hidden":"true",className:"size-6 text-blue-600 group-hover:text-blue-700"})}),e.jsx("dt",{className:"mt-4 text-base font-semibold text-blue-900 group-hover:translate-x-2 transition-transform duration-300",children:"Weekly articles"}),e.jsx("dd",{className:"mt-2 text-base/7 text-blue-600 group-hover:text-blue-700 transition-colors duration-300",children:"✨ Unlock a treasury of innovation! Each week, dive into carefully crafted content that bridges the gap between visionary thinking and practical excellence."})]}),e.jsxs("div",{className:"flex flex-col items-start animate-fade-in group",children:[e.jsx("div",{className:"rounded-md bg-white p-2 ring-1 ring-blue-100 group-hover:scale-110 group-hover:-rotate-3 group-hover:shadow-lg transition-all duration-300",children:e.jsx(M,{"aria-hidden":"true",className:"size-6 text-blue-600 group-hover:text-blue-700"})}),e.jsx("dt",{className:"mt-4 text-base font-semibold text-blue-900 group-hover:translate-x-2 transition-transform duration-300",children:"No spam"}),e.jsx("dd",{className:"mt-2 text-base/7 text-blue-600 group-hover:text-blue-700 transition-colors duration-300",children:"🛡️ Quality is our promise! Experience a curated flow of pure inspiration - where every word matters, every insight counts, and every message sparks innovation."})]})]})]})}),e.jsx("div",{"aria-hidden":"true",className:"absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6 hover:blur-2xl transition-all duration-700",children:e.jsx("div",{style:{clipPath:"polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"},className:"aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-blue-100 to-blue-50 opacity-30 animate-pulse hover:opacity-40 transition-opacity duration-700"})})]})]})}const j=I`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,D=g.main`
  width: 100%;
  padding: 60px 20px;
  min-height: 100vh;
  background: linear-gradient(165deg, 
    rgba(37, 99, 235, 0.95) 0%, 
    rgba(37, 99, 235, 0.4) 25%, 
    rgba(0, 0, 0, 0) 50%),
    url('src/assets/img/white.webp');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;

  @media (max-width: 768px) {
    padding: 40px 16px;
  }
`,$=g.header`
  text-align: center;
  margin-bottom: 50px;
  animation: ${j} 0.8s ease-out;

  h1 {
    font-size: 2.8rem;
    color: #1a237e;
    font-weight: 700;
    margin-bottom: 16px;
  }

  p {
    color: #000000;
    font-size: 1.1rem;
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.6;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 2rem;
    }
    p {
      font-size: 1rem;
    }
  }
`,V=g.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 30px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`,N=g.article`
  background: #ffffff;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 25px rgba(0, 0, 0, 0.03);
  transition: all 0.3s ease;
  animation: ${j} 0.8s ease-out;
  border: 1px solid #f8f9fa;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.06);
  }
`,W=g.div`
  position: relative;
  padding-top: 60%;
  overflow: hidden;
`,F=g.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;

  ${N}:hover & {
    transform: scale(1.1);
  }
`,Z=g.div`
  padding: 24px;

  h2 {
    font-size: 1.4rem;
    color: #2d3748;
    margin-bottom: 12px;
    font-weight: 600;
  }

  p {
    color: #718096;
    line-height: 1.6;
    margin-bottom: 20px;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`,q=g.div`
  display: flex;
  align-items: center;
  gap: 16px;
  font-size: 0.9rem;
  color: #718096;
`,_=g.button`
  background-color: #f8f9fa;
  color: #4A5568;
  padding: 10px 22px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.9rem;
  transition: all 0.2s ease;

  &:hover {
    background-color: #718096;
    color: white;
  }
`,J=()=>{const[t]=c.useState([{id:1,title:"AI in Surveillance",content:"Utilizes computer software programs that analyze the audio and images from video surveillance cameras in order to recognize humans, vehicles, objects, attributes, and events",image:"src/assets/img/blog/AI in Surveillance_1.webp"},{id:2,title:"Artificial intelligence of things (AIoT)",content:"Is the combination of artificial intelligence (AI) technologies with the Internet of things (IoT) infrastructure to achieve more efficient IoT operations, improve human-machine interactions and enhance data management and analytics.",image:"src/assets/img/blog/AIoT_1.webp"},{id:3,title:"IT Ecosystem Infrastructure",content:"Deals with the IT hardware (compute, storage, net), operating systems, basic services and platforms (virtualisation) for cloud services. The overall infrastructure approach is determined by quality (e.g. availability), security and economic efficiency",image:"src/assets/img/blog/IT Ecosystem Infrastructure_1.webp"}]),i=S(),a=s=>{i(`/blog/${s.id}`)};return e.jsxs(u,{children:[e.jsxs(h,{children:[e.jsx("title",{children:"Latest Blog Articles | Your Blog"}),e.jsx("meta",{name:"description",content:"Discover insights from our experts on web development, scalability, and design."}),e.jsx("meta",{name:"keywords",content:"blog, articles, web development, scalability, design"})]}),e.jsxs(D,{children:[e.jsxs($,{children:[e.jsx("h1",{children:"Latest Articles"}),e.jsx("p",{children:"Insights from our expert team"})]}),e.jsx(V,{children:t.map((s,l)=>e.jsxs(N,{$index:l,children:[e.jsx(W,{children:e.jsx(F,{src:s.image,alt:s.title,loading:l>0?"lazy":"eager"})}),e.jsxs(Z,{children:[e.jsx("h2",{children:s.title}),e.jsxs(q,{children:[e.jsx("span",{children:s.date}),e.jsx("span",{children:s.author})]}),e.jsx("p",{children:s.content}),e.jsx(_,{onClick:()=>a(s),children:"Read More"})]})]},s.id))})]})]})},ee=()=>e.jsxs(u,{children:[e.jsxs(h,{children:[e.jsx("title",{children:"Home | Your Company Name"}),e.jsx("meta",{name:"description",content:"Welcome to Your Company Name. Discover our innovative solutions and services. Stay updated with our latest news and insights."}),e.jsx("meta",{name:"keywords",content:"home, Your Company Name, innovative solutions, services, news, insights"}),e.jsx("meta",{property:"og:type",content:"website"}),e.jsx("meta",{property:"og:title",content:"Home | Your Company Name"}),e.jsx("meta",{property:"og:description",content:"Discover our innovative solutions and services. Stay updated with our latest news and insights."}),e.jsx("script",{type:"application/ld+json",children:JSON.stringify({"@context":"https://schema.org","@graph":[{"@type":"WebPage","@id":"https://yourwebsite.com/#webpage",url:"https://yourwebsite.com",name:"Home | Your Company Name",description:"Welcome to Your Company Name. Discover our innovative solutions and services. Stay updated with our latest news and insights."},{"@type":"Organization","@id":"https://yourwebsite.com/#organization",name:"Your Company Name",url:"https://yourwebsite.com",logo:{"@type":"ImageObject",url:"https://yourwebsite.com/logo.png"}}]})})]}),e.jsxs("div",{children:[e.jsx(E,{}),e.jsx(T,{}),e.jsx(J,{}),e.jsx(L,{}),e.jsx(P,{})]})]});export{ee as default};
