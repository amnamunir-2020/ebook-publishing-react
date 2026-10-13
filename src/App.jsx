import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import ContactForm from './components/ContactForm'
import About from './components/About'
import LogoCarousel from './components/LogoCarousel'
import BookCarousel from './components/BookCarousel'
import WhatWePublish from './components/WhatWePublish'
import WhyAuthors from './components/WhyAuthors'
import Process from './components/Process'
import PublishingServices from './components/PublishingServices'
import CTA from './components/CTA'
import WhoHandle from './components/WhoHandle'
import FAQForm from './components/FAQForm'
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";


function App() {
  return (
    <>
      <Header />
      <Hero />
      <ContactForm />
      <About />
       <LogoCarousel />
       <BookCarousel />
       <WhatWePublish />
       <WhyAuthors />     
       <Process />
       <PublishingServices />
        <CTA />
        <WhoHandle />
        <FAQForm />
         <Testimonials />
          <Footer />
    </>
  )
}

export default App