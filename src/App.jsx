
import './App.css'
import { Routes, Route } from 'react-router-dom'

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
import Testimonials from "./components/Testimonials"
import Footer from "./components/Footer"

import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'
import Reviews from './pages/Reviews'
import TermsConditions from './pages/TermsConditions'
import PrivacyPolicy from './pages/PrivacyPolicy'
import Services from './pages/Services'

function HomePage() {
  return (
    <> 
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

    </>
  )
}


function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
     <Route path="/about-us" element={<AboutUs />} />
     <Route path="/contact-us" element={<ContactUs />} />
       <Route path="/reviews" element={<Reviews />} />
        <Route path="/terms-and-conditions" element={<TermsConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/services" element={<Services />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App



