// import React from 'react';
// import backgroundImage from '../assets/whiteBackground.png';
// import rightArrow from '../assets/rightArrow.png';
// import leftArrow from '../assets/leftBlack.png';
// import carImage from '../assets/ttt 1.png';
// import websiteIcon from '../assets/blackLaptop.png';
// import mobileIcon from '../assets/Group 102.png';
// import graphicIcon from '../assets/Group 103.png';
// import './WhiteSection.css';

// const WhiteSection = () => {
//   return (
//     <div
//       className="bg-white py-20"
//       style={{
//         backgroundImage: `url(${backgroundImage})`,
//         backgroundPosition: 'top left',
//         backgroundSize: 'cover',
//       }}
//     >
//       <div className="flex flex-col space-y-16 mb-10 px-16">
//         {/* Top Section with Text and Buttons */}
//         <div className="flex items-start justify-between ml-16 space-y-8">
//           {/* Left Text Section */}
//           <div className="flex flex-col items-start space-y-2 max-w-lg ml-16">
//             <span className="text-xl font-bold text-black">We Provide</span>
//             <h2 className="text-xl font-bold text-black">Awesome</h2>
//             <h3 className="text-xl font-bold text-[#111111]">Technologies</h3>
//             <p className="text-gray-500 mt-4">
//               We're skilled in both design <br />
//               and development, allowing <br />
//               us to create complex and <br />
//               customized web solutions <br />
//               for you.
//             </p>

//             {/* Buttons */}
//             <div className="flex space-x-4 mt-8">
//               {/* Left Arrow Button */}
//               <button className="w-12 h-12 rounded-full border-2 border-[#111111] text-[#111111] bg-white flex items-center justify-center hover:text-white hover:bg-[#111111] transition duration-300">
//                 <img src={leftArrow} alt="Left Arrow" className="w-4 h-4" />
//               </button>

//               {/* Right Arrow Button */}
//               <button className="w-12 h-12 rounded-full bg-[#111111] border border-[#111111] flex items-center justify-center hover:bg-white hover:text-[#111111] transition duration-300">
//                 <img src={rightArrow} alt="Right Arrow" className="w-4 h-4" />
//               </button>
//             </div>
//           </div>

//           {/* Blue Section with Square Containers */}
//           <div className="absolute right-0 w-2.6/4 h-60 bg-[#3A3A3A]   rounded-l-lg flex items-center justify-center px-20 py-4 space-x-4 ">
//             {/* Square Containers */}
//             <div className="bg-[#111111] rounded-lg w-40 h-52 flex flex-col  transform translate-y-[6rem] items-center justify-center shadow-lg mx-4">
//               <div className="bg-white p-4 rounded-lg ">
//                 <img
//                   src={websiteIcon}
//                   alt="Website Development"
//                   className="w-12 h-12"
//                 />
//               </div>
//               <p className="text-white font-semibold text-center mt-4">
//                 Website
//                 <span className="block">Development</span>
//               </p>
//             </div>

//             <div className="bg-white rounded-lg w-40 h-52 flex flex-col transform translate-y-[6rem] items-center justify-center shadow-lg transform -translate-x-3 hover:scale-105 transition duration-300">
//               <div className="bg-[#F4F4F4] p-4 rounded-lg">
//                 <img
//                   src={mobileIcon}
//                   alt="Mobile Development"
//                   className="w-12 h-12"
//                 />
//               </div>
//               <p className="text-gray-800 font-semibold text-center mt-4">
//                 Mobile
//                 <span className="block">Development</span>
//               </p>
//             </div>

//             <div className="bg-white l  rounded-lg w-40 h-52 flex flex-col transform translate-y-[6rem] items-center justify-center shadow-lg mx-4 hover:scale-105 transition duration-300">
//               <div className="bg-[#F4F4F4] p-4  rounded-lg">
//                 <img
//                   src={graphicIcon}
//                   alt="Graphic Designing"
//                   className="w-12 h-12"
//                 />
//               </div>
//               <p className="text-gray-800 font-semibold text-center mt-4">
//                 Graphic
//                 <span className="block">Designing</span>
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Car Image Section */}
//         <div className="flex items-center justify-center transform translate-y-[4rem]">
//           <img
//             src={carImage}
//             alt="Car"
//             className="w-3/4 object-cover rounded-lg"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WhiteSection;




import React, { useState } from 'react';
import backgroundImage from '../assets/whiteBackground.png';
import rightArrow from '../assets/rightArrow.png';
import leftArrow from '../assets/leftBlack.png';
import carImage from '../assets/ttt 1.png';
import websiteIcon from '../assets/blackLaptop.png';
import mobileIcon from '../assets/Group 102.png';
import graphicIcon from '../assets/Group 103.png';
import './WhiteSection.css';

const WhiteSection = () => {
  const [activeSection, setActiveSection] = useState(0); // 0: Website, 1: Mobile, 2: Graphic Designing

  const handleArrowClick = (direction) => {
    if (direction === 'right') {
      setActiveSection((prev) => (prev + 1) % 3); // Moves right: 0 -> 1 -> 2 -> 0
    } else if (direction === 'left') {
      setActiveSection((prev) => (prev - 1 + 3) % 3); // Moves left: 0 -> 2 -> 1 -> 0
    }
  };

  return (
    <div
      id="services"
      className="white-section"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="flex flex-col space-y-16 mb-10 px-16 chnageWihteEctions">
        {/* Top Section with Text and Buttons */}
        <div className="flex items-start justify-between space-y-8">
          {/* Left Text Section */}
          <div className="text-containerLeft" style={{ marginLeft: '7rem' }}>
            <h2 className="text-2xl md:text-4xl font-[600] text-black">We Provide</h2>
            <h2 className="text-2xl md:text-4xl font-[600] text-black">Awesome</h2>
            <h3 className="text-2xl md:text-4xl font-[600] text-[#111111]">Technologies</h3>
            <p className="text-gray-500 md:text-sm font-semibold mt-4">
              We're skilled in both design <br />
              and development, allowing <br />
              us to create complex and <br />
              customized web solutions <br />
              for you.
            </p>

            {/* Buttons */}
            <div className="buttons">
              <button
                className="button border-2 border-[#111111] bg-white hover:bg-[#111111] hover:text-white"
                onClick={() => handleArrowClick('left')}
              >
                <img src={leftArrow} alt="Left Arrow" className="w-4 h-4" />
              </button>
              <button
                className="button bg-[#111111] text-white hover:bg-white hover:text-[#111111]"
                onClick={() => handleArrowClick('right')}
              >
                <img src={rightArrow} alt="Right Arrow" className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Blue Section with Square Containers */}
          <div className="blue-section">
            {/* Website Development Square */}
            <div
              className={`square-container translate-y-[6rem]  ${
                activeSection === 0 ? 'bg-[#111111] text-white' : 'bg-white text-gray-800'
              }`}
              >
              <div className="bg-white p-4 rounded-lg">
                <img
                  src={websiteIcon}
                  alt="Website Development"
                  className="w-5 h-5 sm:w-16 sm:h-16 "
                />
              </div>
              <p className="mt-4 sm:mt-4 text-center">
                Website
                <span className="block">Development</span>
              </p>
            </div>

            {/* Mobile Development Square */}
            <div
              className={`square-container translate-y-[6rem] ${
                activeSection === 1 ? 'bg-[#111111] text-white' : 'bg-white text-gray-800'
              }`}
            >
              <div className="bg-[#F4F4F4] p-4 rounded-lg">
                <img
                  src={mobileIcon}
                  alt="Mobile Development"
                  className="w-5 h-5 sm:w-16 sm:h-16"
                />
              </div>
              <p className="mt-4 text-center">
                Mobile
                <span className="block">Development</span>
              </p>
            </div>

            {/* Graphic Designing Square */}
            <div
              className={`square-container translate-y-[6rem] ${
                activeSection === 2 ? 'bg-[#111111] text-white' : 'bg-white text-gray-800'
              }`}
            >
              <div className="bg-[#F4F4F4] p-4 rounded-lg">
                <img
                  src={graphicIcon}
                  alt="Graphic Designing"
                  className="w-5 h-5 sm:w-16 sm:h-16"
                />
              </div>
              <p className="mt-4 text-center">
                Graphic
                <span className="block">Designing</span>
              </p>
            </div>
          </div>
        </div>

        {/* Car Image Section */}
        <div className="flex items-center justify-center ">
          <img src={carImage} alt="Car" className="car-image" />
        </div>
      </div>
    </div>
  );
};

export default WhiteSection;
