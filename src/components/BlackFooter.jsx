// import React from 'react';
// import desk from '../assets/deskWhite.png';
// import whatsapp from '../assets/whatsapp.png';
// import facebook from '../assets/facebook.png';
// import youtube from '../assets/youtube.png';
// import linkedIn from '../assets/linkedin.png';
// import instagram from '../assets/instagram.png';

// const BlackFooter = () => {
//     return (
//         <div className="bg-[#232323] p-6 mt-[2rem]  flex justify-center space-x-[2.5rem] space-y-6 pb-20 flex-col sm:flex-row sm:space-y-0 sm:space-x-[2.5rem] sm:items-start sm:text-left text-center">
//             {/* Logo Section */}
//             <div className="flex flex-col items-center sm:items-start mt-8">
//                 <img className="w-[65%] py-2" src={desk} alt="Desk Logo" />
//             </div>

//             {/* About the Company Section */}
//             <div className="flex flex-col items-center py-[2rem] sm:py-[2rem] sm:items-start space-y-4 sm:space-y-0 sm:text-left">
//                 <h2 className="text-[#FFFFFF] font-bold text-lg">About the Company</h2>
//                 <p className="text-[#FFFFFF] font-semibold text-xs space-y-1">
//                     An ultimate platform for <br />
//                     all your business ideas <br />
//                     and growth. We believe <br />
//                     in high quality work, <br />
//                     therefore we provide <br />
//                     24/7 support to our global <br />
//                     customers.
//                 </p>
//             </div>

//             {/* Get Started Section */}
//             <div className="flex flex-col items-center py-[2rem] sm:py-[2rem] sm:items-start space-y-4 sm:space-y-0 sm:text-left">
//                 <h2 className="text-[#FFFFFF] font-bold text-lg">Get Started</h2>
//                 <ul className="text-[#FFFFFF] font-semibold text-xs space-y-1">
//                     <li>Home</li>
//                     <li>About Us</li>
//                     <li>Technologies</li>
//                     <li>Portfolio</li>
//                     <li>Industries</li>
//                     <li>Contact Us</li>
//                     <li>Blog</li>
//                     <li>Get a Quote</li>
//                 </ul>
//             </div>

//             {/* Services Section */}
//             <div className="flex flex-col items-center py-[2rem] sm:py-[2rem] sm:items-start space-y-4 sm:space-y-0 sm:text-left">
//                 <h2 className="text-[#FFFFFF] font-bold text-lg">Services</h2>
//                 <ul className="text-[#FFFFFF] font-semibold text-xs space-y-1">
//                     <li>Website Development</li>
//                     <li>Mobile Application</li>
//                     <li>Graphics Designing</li>
//                     <li>Video Animation</li>
//                     <li>Digital Marketing</li>
//                     <li>Content Writing</li>
//                     <li>Domain And Hosting</li>
//                     <li>Support</li>
//                 </ul>
//             </div>

//             {/* Contact Section */}
//             <div className="flex flex-col items-center py-[2rem] sm:py-[2rem] sm:items-start space-y-3 ml-2">
//                 <h2 className="text-[#FFFFFF] font-bold text-lg">Contact</h2>
//                 <div className="flex items-center space-x-2 text-xs">
//                     <img className="w-4 h-4" src={whatsapp} alt="WhatsApp" />
//                     <p className="text-[#FFFFFF] font-semibold">+1 234 529-786</p>
//                 </div>
//                 <div className="flex items-center space-x-2 text-xs">
//                     <img className="w-4 h-4" src={facebook} alt="Facebook" />
//                     <p className="text-[#FFFFFF] font-semibold">/deskWorkSol</p>
//                 </div>
//                 <div className="flex items-center space-x-2 text-xs">
//                     <img className="w-4 h-4" src={youtube} alt="YouTube" />
//                     <p className="text-[#FFFFFF] font-semibold">/deskWorkSol</p>
//                 </div>
//                 <div className="flex items-center space-x-2 text-xs">
//                     <img className="w-4 h-4" src={linkedIn} alt="LinkedIn" />
//                     <p className="text-[#FFFFFF] font-semibold">/deskWorkSol</p>
//                 </div>
//                 <div className="flex items-center space-x-2 text-xs">
//                     <img className="w-4 h-4" src={instagram} alt="Instagram" />
//                     <p className="text-[#FFFFFF] font-semibold">/deskWorkSol</p>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default BlackFooter;



// 2nd row




// import React, { useState } from 'react';
// import desk from '../assets/deskWhite.png';
// import whatsapp from '../assets/whatsapp.png';
// import facebook from '../assets/facebook.png';
// import youtube from '../assets/youtube.png';
// import linkedIn from '../assets/linkedin.png';
// import instagram from '../assets/instagram.png';

// const BlackFooter = () => {
//   const [showAbout, setShowAbout] = useState(false); // For toggling About section
//   const [showGetStarted, setShowGetStarted] = useState(false); // For toggling Get Started section
//   const [showServices, setShowServices] = useState(false); // For toggling Services section
//   const [showContact, setShowContact] = useState(false); // For toggling Contact section

//   return (
//     <div id="contact" className="bg-[#232323] p-6 mt-[2rem] flex justify-center pb-20 flex-col sm:flex-row sm:items-start sm:text-left text-center sm:space-x-[2.5rem] space-x-0 space-y-4 sm:space-y-0">

//       {/* Logo Section */}
//       <div className="flex flex-col items-center sm:items-start mt-8">
//         <img className="w-[100%] sm:w-[80%] py-2" src={desk} alt="Desk Logo" />
//       </div>

//       {/* About the Company Section */}
//       <div className="flex flex-col items-start py-[1rem] sm:py-[2rem] space-y-3 sm:space-y-4 sm:pl-4">
//         <h2 
//           className="text-[#FFFFFF] font-bold text-lg  flex items-center cursor-pointer" 
//           onClick={() => setShowAbout(!showAbout)}>
//           <i className="fas fa-arrow-down mr-2"></i> 
//           About the Company
//         </h2>
//         <div 
//           className={`text-[#FFFFFF] font-semibold text-xs sm:text-hide ${showAbout ? 'block' : 'hidden'} sm:block`}>
//           An ultimate platform for <br />
//           all your business ideas <br />
//           and growth. We believe <br />
//           in high quality work, <br />
//           therefore we provide <br />
//           24/7 support to our global <br />
//           customers.
//         </div>
//       </div>

//       {/* Get Started Section */}
//       <div className="flex flex-col items-start py-[1rem] sm:py-[2rem] space-y-3 sm:space-y-4 sm:pl-4">
//         <h2 
//           className="text-[#FFFFFF] font-bold text-lg cursor-pointer flex items-center" 
//           onClick={() => setShowGetStarted(!showGetStarted)}>
//           <i className="fas fa-arrow-down mr-2"></i> 
//           Get Started
//         </h2>
//         <div 
//           className={`text-[#FFFFFF] font-semibold text-xs sm:text-hide ${showGetStarted ? 'block' : 'hidden'} sm:block`}>
//           <ul className="space-y-1">
//             <li>Home</li>
//             <li>About Us</li>
//             <li>Technologies</li>
//             <li>Portfolio</li>
//             <li>Industries</li>
//             <li>Contact Us</li>
//             <li>Blog</li>
//             <li>Get a Quote</li>
//           </ul>
//         </div>
//       </div>

//       {/* Services Section */}
//       <div className="flex flex-col items-start py-[1rem] sm:py-[2rem] space-y-3 sm:space-y-4 sm:pl-4">
//         <h2 
//           className="text-[#FFFFFF] font-bold text-lg cursor-pointer flex items-center" 
//           onClick={() => setShowServices(!showServices)}>
//           <i className="fas fa-arrow-down mr-2"></i> 
//           Services
//         </h2>
//         <div 
//           className={`text-[#FFFFFF] font-semibold text-xs sm:text-hide ${showServices ? 'block' : 'hidden'} sm:block`}>
//           <ul className="space-y-1">
//             <li>Website Development</li>
//             <li>Mobile Application</li>
//             <li>Graphics Designing</li>
//             <li>Video Animation</li>
//             <li>Digital Marketing</li>
//             <li>Content Writing</li>
//             <li>Domain And Hosting</li>
//             <li>Support</li>
//           </ul>
//         </div>
//       </div>

//       {/* Contact Section */}
//       <div className="flex flex-col items-start py-[1rem] sm:py-[2rem] space-y-3 sm:space-y-4 sm:pl-4">
//         <h2 
//           className="text-[#FFFFFF] font-bold text-lg cursor-pointer flex items-center" 
//           onClick={() => setShowContact(!showContact)}>
//           <i className="fas fa-arrow-down mr-2"></i> 
//           Contact
//         </h2>
//         <div 
//           className={`text-[#FFFFFF] font-semibold text-xs sm:text-hide ${showContact ? 'block' : 'hidden'} sm:block`}>
//           <div className="flex items-center space-x-2">
//             <img className="w-4 h-4" src={whatsapp} alt="WhatsApp" />
//             <p className="text-[#FFFFFF] font-semibold">+1 234 529-786</p>
//           </div>
//           <div className="flex items-center space-x-4 space-y-2">
//             <img className="w-4 h-4" src={facebook} alt="Facebook" />
//             <p className="text-[#FFFFFF] font-semibold">/deskWorkSol</p>
//           </div>
//           <div className="flex items-center space-x-4 space-y-2">
//             <img className="w-4 h-4" src={youtube} alt="YouTube" />
//             <p className="text-[#FFFFFF] font-semibold">/deskWorkSol</p>
//           </div>
//           <div className="flex items-center space-x-4 space-y-2">
//             <img className="w-4 h-4" src={linkedIn} alt="LinkedIn" />
//             <p className="text-[#FFFFFF] font-semibold">/deskWorkSol</p>
//           </div>
//           <div className="flex items-center space-x-4 space-y-2">
//             <img className="w-4 h-4" src={instagram} alt="Instagram" />
//             <p className="text-[#FFFFFF] font-semibold">/deskWorkSol</p>
//           </div>
//         </div>
//       </div>

//     </div>
//   );
// };

// export default BlackFooter;




//  3rd row




import React, { useState } from 'react';
import './BlackFooter.css'; // Import the CSS file
import logo from '../assets/deskWhite.png';
import whatsapp from '../assets/whatsapp.png';
import facebook from '../assets/facebook.png';
import youtube from '../assets/youtube.png';
import linkedIn from '../assets/linkedin.png';
import instagram from '../assets/instagram.png';

const BlackFooter = () => {
  const [showAbout, setShowAbout] = useState(true);
  const [showGetStarted, setShowGetStarted] = useState(true);
  const [showServices, setShowServices] = useState(true);
  const [showContact, setShowContact] = useState(true);

  return (
    <div id="contact">
      {/* Logo Section */}
      <img
        src={logo}
        alt="Deskwork Contact Logo"
        className="contact-logo"
      />


      {/* About Section */}
      <div className="section">
        <h2 className="section-heading" onClick={() => setShowAbout(!showAbout)}>
          <i className="fas fa-arrow-down"></i> About the Company
        </h2>
        <div className={`section-content ${showAbout ? 'block' : ''}`}>
          An ultimate platform for <br />
          all your business ideas <br />
          and growth. We believe <br />
          in high-quality work, <br />
          therefore we provide <br />
          24/7 support to our global <br />
          customers.
        </div>
      </div>

      {/* Get Started Section */}
      <div className="section">
        <h2 className="section-heading" onClick={() => setShowGetStarted(!showGetStarted)}>
          <i className="fas fa-arrow-down"></i> Get Started
        </h2>
        <div className={`section-content ${showGetStarted ? 'block' : ''}`}>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Technologies</li>
            <li>Portfolio</li>
            <li>Industries</li>
            <li>Contact Us</li>
            <li>Blog</li>
            <li>Get a Quote</li>
          </ul>
        </div>
      </div>

      {/* Services Section */}
      <div className="section">
        <h2 className="section-heading" onClick={() => setShowServices(!showServices)}>
          <i className="fas fa-arrow-down"></i> Services
        </h2>
        <div className={`section-content ${showServices ? 'block' : ''}`}>
          <ul>
            <li>Website Development</li>
            <li>Mobile Application</li>
            <li>Graphics Designing</li>
            <li>Video Animation</li>
            <li>Digital Marketing</li>
            <li>Content Writing</li>
            <li>Domain And Hosting</li>
            <li>Support</li>
          </ul>
        </div>
      </div>

      {/* Contact Section */}
      <div className="section">
        <h2 className="section-heading" onClick={() => setShowContact(!showContact)}>
          <i className="fas fa-arrow-down"></i> Contact Us
        </h2>
        <div className={`section-content ${showContact ? 'block' : ''}`}>
          <div className="contact-call " alt="Callnow :">

            <p>Callnow : +1 234 529-786</p>
          </div>
          <div className="contact-call " alt="Emailnow :">

            <p>Email : info@deskworksol.com</p>
          </div>
          <div className="contact-call " alt="Address :">

            <p>Address : Gulshan-e-Jamal Rashid <br /> Minhas Road  Near Kia Motors Cantonment <br /> Shopping Mall  3rd Floor Office #30</p>
          </div>

          <div>
  <p style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
    Social Media:
    <a href="https://www.facebook.com/deskworksol/" target="_blank" rel="noopener noreferrer">
      <img src={facebook} alt="Facebook" style={{ width: '15px', height: '15px' }} />
    </a>
    <a href="https://www.instagram.com/deskworksol/" target="_blank" rel="noopener noreferrer">
      <img src={instagram} alt="Instagram" style={{ width: '15px', height: '15px' }} />
    </a>
    <a href="https://www.linkedin.com/company/deskworksol/" target="_blank" rel="noopener noreferrer">
      <img src={linkedIn} alt="LinkedIn" style={{ width: '15px', height: '15px' }} />
    </a>
    <a href="https://www.youtube.com/@deskworksol9386" target="_blank" rel="noopener noreferrer">
      <img src={youtube} alt="YouTube" style={{ width: '15px', height: '15px' }} />
    </a>
  </p>
</div>









          {/* <div className="contact-item">
            <img className="contact-icon" src={whatsapp} alt="WhatsApp" />
            <p>+1 234 529-786</p>
          </div> */}
          {/* <div className="contact-item">
            <img className="contact-icon" src={youtube} alt="YouTube" />
            <p>/deskWorkSol</p>
          </div> */}
        </div>
      </div>

      {/*  Social Media section */}

      {/* <div className="social-container">
  <p className="social-title">Social Media:</p>
  <div className="social-icons">
    <img src={facebook} alt="Facebook" className="icon" />
    <img src={instagram} alt="Instagram" className="icon" />
    <img src={linkedIn} alt="LinkedIn" className="icon" />
  </div>
</div> */}










    </div>
  );
};

export default BlackFooter;
