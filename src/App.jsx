// import React from 'react';
// import './App.css';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Blackbar from './components/Blackbar';
// import BlackSection from './components/BlackSection';
// import BlueSection from './components/BlueSection';
// import BoySection from './components/BoySection';

// import ExploreSection from './components/ExploreSection';
// import Navbar from './components/Navbar';
// import PinkSection from './components/PinkSection';
// import SmallSection from './components/SmallSection';
// import TeamSection from './components/TeamSection';
// import TestimonialSection from './components/TestimonialSection';
// import ToolsSection from './components/ToolsSection';
// import WhiteSection from './components/WhiteSection';
// import WhiteVedioSection from './components/WhiteVedioSection';
// import BlackFooter from './components/BlackFooter';
// import CopyrightSection from './components/CopyrightSection';
// // import { Route, Routes } from 'react-router-dom';
// // import Home from './components/Home';


// function App() {
  

//   return (
//     <>
//       <Blackbar />
//       <Navbar />
//       <BlueSection />
//       <SmallSection />
//       <WhiteSection />
//       <BlackSection />
//       <PinkSection />
//       <WhiteVedioSection />
//       <BoySection />
//       <ToolsSection />
//       <TeamSection />
//       <TestimonialSection />
//       <ExploreSection />
//        <BlackFooter />
//        <CopyrightSection />
//     </>
//   )
// }

// export default App;




import { Routes, Route } from "react-router-dom";
import Blackbar from "./components/Blackbar";
import Navbar from "./components/Navbar";
import BlackFooter from "./components/BlackFooter";
import CopyrightSection from "./components/CopyrightSection";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Technologies from "./Pages/Technologies";
import Contact from "./Pages/Contact";
import Quote from "./Pages/GetaQuote";
import More from "./Pages/More";

function App() {
  return (
    <div>
      {/* Common Components */}
      <Blackbar />
      <Navbar />

      {/* Routes for Pages */}
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/services" element={<Services />} />
        <Route path="/technologies" element={<Technologies />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/quote" element={<Quote />} />
        <Route path="/more" element={<More />} />
      </Routes>

      {/* Common Footer */}
      <BlackFooter />
      <CopyrightSection />
    </div>
  );
}

export default App;
