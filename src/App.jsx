import React from 'react'
import './App.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Blackbar from './components/Blackbar'
import BlackFooter from './components/BlackFooter'
 import BlackSection from './components/BlackSection'
import BlueSection from './components/BlueSection'
import BoySection from './components/BoySection'
import CopyrightSection from './components/CopyrightSection'
import ExploreSection from './components/ExploreSection'
import Navbar from './components/Navbar'
import PinkSection from './components/PinkSection'
import SmallSection from './components/SmallSection'
import TeamSection from './components/TeamSection'
import TestimonialSection from './components/TestimonialSection'
import ToolsSection from './components/ToolsSection'
import WhiteSection from './components/WhiteSection'
import WhiteVedioSection from './components/WhiteVedioSection'

function App() {
  

  return (
    <>
      <Blackbar />
      <Navbar />  
      <BlueSection />
      <SmallSection />
      <WhiteSection />
      <BlackSection />
      <PinkSection />
      <WhiteVedioSection />
      <BoySection />
      <ToolsSection />
      <TeamSection />
      <TestimonialSection />
      <ExploreSection />
      <BlackFooter />
      <CopyrightSection />
    </>
  )
}

export default App
