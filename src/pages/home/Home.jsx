import React from 'react'
import './home.css'
import MainHeader from '../../components/MainHeader'
import Programs from '../../components/Programs'
import Values from '../../components/Values'
import FAQs from '../../components/FAQs'
import Testimonials from '../../components/Testimonials'
import Footer from '../../components/Footer'
function Home() {
  return (
    <div>
      <MainHeader/>
      <Programs/>
      <Values/>
      <FAQs/>
      <Testimonials/>
    </div>
  )
}

export default Home