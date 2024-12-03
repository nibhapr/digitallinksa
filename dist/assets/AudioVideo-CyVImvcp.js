import{m as l,r as h,j as e,H as g,a as p,K as u,O as x,P as f,Q as b,T as j,L as v}from"./index-D_66owGy.js";import{d as i}from"./styled-components.browser.esm-o2nQv5vL.js";const w=i.div`
  position: relative;
  min-height: 100vh; // Changed from 120vh for better mobile view
  background: linear-gradient(165deg, 
    rgba(37, 99, 235, 0.95) 0%, 
    rgba(37, 99, 235, 0.4) 25%, 
    rgba(0, 0, 0, 0) 50%),
    url('src/assets/img/audio/audiovideomain.webp');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  display: flex;
  align-items: center;
  padding: 2rem 0; // Added padding for mobile
  overflow: hidden;

  @media (max-width: 768px) {
    min-height: 100vh;
    background-attachment: scroll; // Better performance on mobile
    padding: 6rem 1rem 2rem 1rem; // Added top padding for mobile header
    background: linear-gradient(165deg, 
      rgba(37, 99, 235, 0.98) 0%, 
      rgba(37, 99, 235, 0.7) 50%, 
      rgba(37, 99, 235, 0.4) 100%),
      url('src/assets/img/audio/audiovideomain.webp');
  }
`,y=i(l.div)`
  position: relative;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 5%;
  z-index: 10;
  
  @media (max-width: 1200px) {
    padding: 0 6%;
  }
  
  @media (max-width: 768px) {
    padding: 0 1.5rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`,S=i.span`
  display: block;
  font-size: 0.875rem;
  color: #ffffff; // Changed for better visibility
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 3px;
  font-weight: 500;
  position: relative;
  padding-left: 45px;
  
  @media (max-width: 768px) {
    font-size: 0.75rem;
    padding-left: 0;
    margin-bottom: 1rem;
    
    &:before {
      display: none;
    }
  }
`,A=i.span`
  display: block;
  font-size: 3.5rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 1.5rem;
  line-height: 1.1;
  max-width: 600px;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    line-height: 1.2;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`,V=i.p`
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.9);
  margin: 1.5rem 0 2.5rem;
  max-width: 450px;
  line-height: 1.6;
  font-weight: 400;
  
  @media (max-width: 768px) {
    font-size: 1rem;
    margin: 1rem auto 2rem;
    text-align: center;
    padding: 0 1rem;
  }
`,C=i(v)`
  display: inline-flex;
  align-items: center;
  padding: 1rem 2.5rem;
  background-color: #ffffff;
  border: none;
  color: #2563eb;
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  border-radius: 50px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
    background-color: #f8fafc;
  }

  @media (max-width: 768px) {
    padding: 0.875rem 2rem;
    font-size: 0.9rem;
    width: 100%;
    justify-content: center;
    max-width: 300px;
  }
`,z=i(l.div)`
  display: inline-flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 0.75rem 1.5rem;
  border-radius: 50px;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    padding: 0.625rem 1.25rem;
    margin-bottom: 1.5rem;
  }
`,k=i.section`
  padding: 6rem 0;
  background: #f8faff;
  
  @media (max-width: 768px) {
    padding: 3rem 0;
  }
`,P=i.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 5%;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  @media (max-width: 768px) {
    padding: 0 1.5rem;
  }
`,D=i.div`
  h2 {
    color: #60a5fa;
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
    font-weight: 600;
    
    @media (max-width: 768px) {
      font-size: 1.8rem;
      text-align: center;
    }
  }
  
  p {
    color: #64748b;
    font-size: 1rem;
    line-height: 1.8;
    margin-bottom: 1.5rem;
  }
  
  @media (max-width: 768px) {
    h2 {
      font-size: 1.8rem;
      text-align: center;
    }
    
    p {
      font-size: 0.9rem;
      text-align: center;
    }
  }
`,T=i.img.attrs({loading:"lazy"})`
  width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 20px 40px rgba(0,0,0,0.1);
`,E=i.section`
  padding: 6rem 5%;
  background: #fafcff;
  text-align: center;
  
  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }
`,m=i.h2`
  color: #60a5fa;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  text-align: center;
  
  @media (max-width: 768px) {
    font-size: 1.8rem;
    margin-bottom: 2rem;
  }
`,M=i.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 2rem;
  max-width: 1400px;
  margin: 0 auto;
  
  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`,d=h.memo(i.div`
  background: #ffffff;
  padding: 2rem 1.5rem;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(96, 165, 250, 0.05);
  transition: transform 0.3s ease;
  border: 1px solid rgba(96, 165, 250, 0.08);
  
  &:hover {
    background: #fafcff;
    box-shadow: 0 15px 35px rgba(96, 165, 250, 0.08);
  }
  
  svg {
    font-size: 2.5rem;
    color: #60a5fa;
    margin-bottom: 1.5rem;
  }
  
  h3 {
    color: #60a5fa;
    font-size: 1.2rem;
    margin-bottom: 1rem;
    font-weight: 600;
  }
  
  p {
    color: #64748b;
    font-size: 0.9rem;
    line-height: 1.6;
  }
  
  @media (max-width: 768px) {
    padding: 1.5rem;
    
    svg {
      font-size: 2rem;
    }
    
    h3 {
      font-size: 1.1rem;
    }
    
    p {
      font-size: 0.85rem;
    }
  }
`),H=i.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;
  max-width: 1400px;
  margin: 0 auto;
  padding: 4rem 0;
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    padding: 2rem 1.5rem;
  }
`,n=i.div`
  background: #ffffff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(96, 165, 250, 0.05);
  transition: all 0.3s ease;
  
  &:hover {
    background: #fafcff;
    box-shadow: 0 8px 30px rgba(96, 165, 250, 0.08);
  }
`,t=i.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }
  
  ${n}:hover & img {
    transform: scale(1.05);
  }
`,s=i.div`
  padding: 1.5rem;
  
  h3 {
    color: #60a5fa;
    font-size: 1.3rem;
    margin-bottom: 0.8rem;
    font-weight: 600;
  }
  
  p {
    color: #64748b;
    font-size: 0.95rem;
    line-height: 1.6;
  }
`,I=i.section`
  padding: 6rem 5%;
  background: #fafcff;
  
  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }
`,$=i.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  max-width: 1400px;
  margin: 0 auto;
  
  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`,a=i.div`
  background: #ffffff;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(96, 165, 250, 0.03);
  transition: all 0.3s ease;
  position: relative;
  
  &:hover {
    background: #fafcff;
    box-shadow: 0 8px 30px rgba(96, 165, 250, 0.06);
  }
  
  &::before {
    content: "${c=>c.$number}"; // Changed from number to $number
    position: absolute;
    top: -15px;
    left: -15px;
    width: 40px;
    height: 40px;
    background: #60a5fa;
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    font-size: 1.2rem;
  }
  
  @media (max-width: 768px) {
    padding: 1.5rem;
    text-align: center;
    
    &::before {
      left: 50%;
      transform: translateX(-50%);
    }
  }
`,o=i.h3`
  color: #60a5fa;
  font-size: 1.3rem;
  margin-bottom: 1rem;
  font-weight: 600;
`,r=i.p`
  color: #64748b;
  font-size: 0.95rem;
  line-height: 1.6;
`,q=i.section`
  background: #f8faff;
  padding: 6rem 5%;
  
  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }
`,B=()=>e.jsxs(g,{children:[e.jsxs(p,{children:[e.jsx("title",{children:"Audio Visual Solutions in Dubai | Professional AV Systems & Integration"}),e.jsx("meta",{name:"description",content:"Transform your space with state-of-the-art audio visual solutions in Dubai. Professional AV consulting, design, installation & maintenance services for businesses."}),e.jsx("meta",{name:"keywords",content:"audio visual solutions dubai, AV systems, AV integration, audio video solutions, meeting room solutions, smart classroom, auditorium solutions"}),e.jsx("link",{rel:"canonical",href:"https://yourwebsite.com/audio-video"}),e.jsx("meta",{property:"og:title",content:"Audio Visual Solutions in Dubai | Professional AV Systems"}),e.jsx("meta",{property:"og:description",content:"Transform your space with state-of-the-art audio visual solutions in Dubai. Professional AV consulting, design, installation & maintenance services."}),e.jsx("meta",{property:"og:url",content:"https://yourwebsite.com/audio-video"}),e.jsx("meta",{property:"og:type",content:"website"})]}),e.jsx(w,{children:e.jsxs(y,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:1,ease:"easeOut"},children:[e.jsxs(z,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.5},children:[e.jsx("span",{className:"text-blue-400 mr-2",children:"★"}),e.jsx("span",{className:"text-white/90 text-sm font-medium",children:"Leading AV Solutions Provider"})]}),e.jsxs("h1",{children:[e.jsx(S,{children:"Professional Audio Visual Solutions Dubai"}),e.jsx(A,{children:"Transform Spaces Through Advanced AV Technology"})]}),e.jsx(V,{children:"Elevate your environment with state-of-the-art audiovisual solutions. We blend innovative technology with refined design for exceptional experiences."}),e.jsx(l.div,{whileHover:{scale:1.02},whileTap:{scale:.98},className:"w-full flex justify-center",children:e.jsxs(C,{to:"/contact",children:["Get Started",e.jsx(l.span,{className:"ml-2 inline-block",animate:{x:[0,5,0]},transition:{repeat:1/0,duration:1.5},children:"→"})]})})]})}),e.jsxs("main",{children:[e.jsx(k,{children:e.jsxs(P,{children:[e.jsxs(D,{children:[e.jsx("h2",{children:"Leading Audio Video Solutions Provider in Dubai"}),e.jsx("p",{children:"In today's fast-paced digital age, audio-visual solutions have become an essential part of business operations. From engaging presentations in boardrooms to immersive audio experiences at concerts and events, AV technology has revolutionized the way we communicate and connect with our environment."}),e.jsx("p",{children:"AV solutions, or audio-visual systems, combine audio and visual components to create a seamless multimedia experience. These systems are utilized across various sectors, including business, education, entertainment, and communication. As a trusted audio-visual equipment supplier in Dubai, GS-IT provides cutting-edge AV solutions that foster dynamic, real-time interactions. Through advanced AV technology, we help create immersive experiences that engage, inform, and inspire audiences."})]}),e.jsx(T,{src:"src/assets/img/audio/audioright.webp",alt:"Professional Audio Visual Setup in Dubai Meeting Room"})]})}),e.jsxs(E,{children:[e.jsx(m,{children:"AV Solutions that Elevate Engagement"}),e.jsxs(M,{children:[e.jsxs(d,{children:[e.jsx(u,{}),e.jsx("h3",{children:"AV Consulting Services"}),e.jsx("p",{children:"Collaborating with clients to assess their audio-video needs and enhance existing technology for improved performance and efficiency."})]}),e.jsxs(d,{children:[e.jsx(x,{}),e.jsx("h3",{children:"AV Design Services"}),e.jsx("p",{children:"Delivering tailored AV designs that ensure seamless integration and optimal functionality within the client's infrastructure."})]}),e.jsxs(d,{children:[e.jsx(f,{}),e.jsx("h3",{children:"AV Programming"}),e.jsx("p",{children:"Developing custom control systems and intuitive interfaces for easy and efficient operation of AV systems."})]}),e.jsxs(d,{children:[e.jsx(b,{}),e.jsx("h3",{children:"AV Installation & Integration"}),e.jsx("p",{children:"Providing professional installation and seamless integration of AV equipment, ensuring smooth functionality and full regulatory compliance."})]}),e.jsxs(d,{children:[e.jsx(j,{}),e.jsx("h3",{children:"AV Support & Maintenance"}),e.jsx("p",{children:"Offering ongoing support and maintenance services to address any client concerns and ensure consistent, high-performance operation of AV systems."})]})]})]}),e.jsxs(q,{children:[e.jsx(m,{children:"Explore Our Innovative Audio Video Solutions"}),e.jsxs(H,{children:[e.jsxs(n,{children:[e.jsx(t,{children:e.jsx("img",{src:"/src/assets/img/audio/Meeting Room Solutions.webp",alt:"Meeting Room Solutions"})}),e.jsxs(s,{children:[e.jsx("h3",{children:"Meeting Room Solutions"}),e.jsx("p",{children:"Optimize meetings and collaboration in rooms of all sizes with cutting-edge solutions from our comprehensive product suite, designed to enhance communication and boost productivity."})]})]}),e.jsxs(n,{children:[e.jsx(t,{children:e.jsx("img",{src:"/src/assets/img/audio/Smart Classroom Solutions.webp",alt:"Smart Classroom Solutions"})}),e.jsxs(s,{children:[e.jsx("h3",{children:"Smart Classroom Solutions"}),e.jsx("p",{children:"Transform education with smart devices like interactive whiteboards, video walls, and advanced audio systems, fostering a dynamic and engaging modern learning environment."})]})]}),e.jsxs(n,{children:[e.jsx(t,{children:e.jsx("img",{src:"/src/assets/img/audio/Auditorium Solutions.webp",alt:"Auditorium Solutions"})}),e.jsxs(s,{children:[e.jsx("h3",{children:"Auditorium Solutions"}),e.jsx("p",{children:"Enhance audience engagement during large-scale events and presentations with enterprise-grade projection screens, powerful sound systems, and state-of-the-art lighting techniques."})]})]}),e.jsx(n,{children:e.jsxs(t,{children:[e.jsx("img",{src:"/src/assets/img/audio/BGM Solutions.webp",alt:"BGM Solutions"}),e.jsxs(s,{children:[e.jsx("h3",{children:"BGM Solutions"}),e.jsx("p",{children:"Create the perfect ambiance in any space with strategically placed background music systems, featuring high-quality speakers and advanced music players designed to set the ideal mood."})]})]})}),e.jsxs(n,{children:[e.jsx(t,{children:e.jsx("img",{src:"/src/assets/img/audio/PA and VA Systems.webp",alt:"PA and VA Systems"})}),e.jsxs(s,{children:[e.jsx("h3",{children:"PA and VA Systems"}),e.jsx("p",{children:"Deliver clear and reliable communication across large areas with innovative and versatile Public Address and Voice Alarm systems, ideal for metro stations, stadiums, and institutions."})]})]}),e.jsxs(n,{children:[e.jsx(t,{children:e.jsx("img",{src:"/src/assets/img/audio/Home Cinema.webp",alt:"Home Cinema"})}),e.jsxs(s,{children:[e.jsx("h3",{children:"Home Cinema"}),e.jsx("p",{children:"Enjoy the ultimate cinematic experience at home with state-of-the-art home theater systems featuring high-definition displays, high-fidelity sound, and immersive lighting setups."})]})]}),e.jsxs(n,{children:[e.jsx(t,{children:e.jsx("img",{src:"/src/assets/img/audio/Command & Control Center Solutions.webp",alt:"Command & Control Center Solutions"})}),e.jsxs(s,{children:[e.jsx("h3",{children:"Command & Control Center Solutions"}),e.jsx("p",{children:"Centralized AV systems tailored to the unique requirements of control centers, enhancing operational efficiency through real-time monitoring and seamless communication."})]})]}),e.jsxs(n,{children:[e.jsx(t,{children:e.jsx("img",{src:"/src/assets/img/audio/LED & Video Wall Solutions.webp",alt:"LED & Video Wall Solutions"})}),e.jsxs(s,{children:[e.jsx("h3",{children:"LED & Video Wall Solutions"}),e.jsx("p",{children:"High-impact visual displays designed to captivate audiences, ideal for dynamic presentations, information sharing, and visually striking branding."})]})]}),e.jsxs(n,{children:[e.jsx(t,{children:e.jsx("img",{src:"/src/assets/img/audio/Crisis Management Solutions.webp",alt:"Crisis Management Solutions"})}),e.jsxs(s,{children:[e.jsx("h3",{children:"Crisis Management Solutions"}),e.jsx("p",{children:"Effectively manage emergencies with reliable audiovisual solutions, including advanced communication systems, real-time data displays, and fully equipped control centers for rapid response."})]})]})]})]}),e.jsxs(I,{children:[e.jsx(m,{children:"Streamlined AV Installation Process for Maximum Efficiency"}),e.jsxs($,{children:[e.jsxs(a,{$number:"1",children:[" ",e.jsx(o,{children:"AV Consulting"}),e.jsx(r,{children:"Collaborating closely with clients to understand their unique audiovisual requirements, we provide tailored and effective recommendations."})]}),e.jsxs(a,{$number:"2",children:[" ",e.jsx(o,{children:"Solution Design"}),e.jsx(r,{children:"Developing a detailed plan that includes the layout, components, and implementation strategy for a fully customized AV system."})]}),e.jsxs(a,{$number:"3",children:[" ",e.jsx(o,{children:"Estimation"}),e.jsx(r,{children:"Delivering transparent and detailed cost estimates with clear project timelines for client review and approval."})]}),e.jsxs(a,{$number:"4",children:[" ",e.jsx(o,{children:"Project Execution"}),e.jsx(r,{children:"Ensuring seamless installation by skilled GS-IT technicians, executed with precision and adherence to the approved plan."})]}),e.jsxs(a,{$number:"5",children:[" ",e.jsx(o,{children:"Quality Check"}),e.jsx(r,{children:"Conducting thorough performance evaluations of the installed AV systems to guarantee optimal functionality and efficiency."})]}),e.jsxs(a,{$number:"6",children:[" ",e.jsx(o,{children:"Documentation and Training"}),e.jsx(r,{children:"Providing user manuals, comprehensive documentation, and training sessions to ensure proper handling and management of AV equipment."})]}),e.jsxs(a,{$number:"7",children:[" ",e.jsx(o,{children:"Maintenance"}),e.jsx(r,{children:"Offering regular system check-ups, updates, and prompt troubleshooting to keep AV systems running smoothly and reliably"})]})]})]})]})]});export{B as default};
