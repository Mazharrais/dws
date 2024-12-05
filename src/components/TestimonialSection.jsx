// import React from 'react';
// import leftBtn from '../assets/blackleft.png';
// import rightBtn from '../assets/blackright.png';
// import boy from '../assets/suitBoy.png';
// import button from '../assets/Buttonblack.png';
// import playStore from '../assets/playStore.png';
// import apple from '../assets/apple.png';
// import rightArrow from '../assets/rightBlackArrow.png';

// const TestimonialSection = () => {
//   return (
//     <div className="bg-[#3A3A3A] w-[100%] h-[24rem] py-8 flex items-center justify-center mt-[12rem] mb-[15rem]">
//       {/* Left Arrow Button */}
//       <img
//         src={leftBtn}
//         alt="Left Button"
//         className="hover:scale-105 w-[50px] transition-transform duration-200 cursor-pointer "
//       />

//       {/* Main Content Section */}
//       <div className="relative flex flex-row items-center">
//         {/* Boy Image */}
//         <img src={boy} alt="Boy" className="w-[28rem] h-[34rem] ml-[4.5rem]" />

//         {/* Play Button on Top of Boy Image */}
//         <img
//           src={button}
//           alt="Play Button"
//           className="absolute left-[16rem] transform hover:scale-110 transition-transform duration-200 cursor-pointer w-[4rem]"
//         />

//         {/* Text and Buttons Container */}
//         <div className="flex flex-col items-center ml-8">
//           {/* Testimonial Text */}
//           <p className="text-white text-3xl text-center font-semibold leading-tight">
//             Testimonials That
//           </p>

//           {/* "Speak To" Text - Starts from the bottom of "Testimonials That" */}
//           <p className="text-white text-3xl  font-semibold leading-tight mt-[-0.5rem]">
//             <span className="text-white  ml-[2rem]">Speak To </span>
//             <span className="text-[#FFFFFF]">Our Results</span>
//           </p>

//           {/* Project Description */}
//           <p className="text-white text-center  mt-4">
//             Project Name: Ezee Solution <br />
//             <span className='ml-[1rem]'> Provide: Website & Application  </span>
//              </p>

//           {/* Visit Website Button */}
//           <button className="bg-[#FFFFFF] text-black rounded-full px-8 py-4 mt-6 flex items-center gap-2 hover:bg-[#4B5563] transition-colors duration-200">
//             Visit The Website
//             <img src={rightArrow} alt="Right Arrow" className="w-4 h-4" />
//           </button>

//           {/* App Store Buttons */}
//           <div className="flex gap-4 mt-6">
//             <button className="bg-white text-[#232323] border-2 border-gray-200 rounded px-4 ml-[4rem] py-2 flex items-center gap-2 hover:bg-gray-100 transition-colors duration-200">
//               <img src={playStore} alt="Play Store" className="w-5 h-5" />
//               Google Play
//             </button>
//             <button className="bg-white text-[#232323] border-2 border-gray-200 rounded px-4  py-2 flex items-center gap-2 hover:bg-gray-100 transition-colors duration-200">
//               <img src={apple} alt="App Store" className="w-5 h-5" />
//               App Store
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Right Arrow Button */}
//       <img
//         src={rightBtn}
//         alt="Right Button"
//         className="hover:scale-105 transition-transform duration-200 cursor-pointer ml-[4rem] w-[50px]"
//       />
//     </div>
//   );
// };

// export default TestimonialSection;








import React, { useRef, useState } from 'react';
import './TestinomialSection.css';
import leftBtn from '../assets/blackleft.png';
import rightBtn from '../assets/blackright.png';
import boy from '../assets/suitBoy.png';
import button from '../assets/Buttonblack.png';
import playStore from '../assets/playStore.png';
import apple from '../assets/apple.png';
import rightArrow from '../assets/rightBlackArrow.png';
import vid from "../assets/vid.mp4"

const TestimonialSection = () => {
  const [isRun,setIsRun] = useState(false)
  const videoRef = useRef(null);
  const handlePlay = () => {
    if (videoRef.current&&!isRun) {
      videoRef.current.play(); // Play the video
      setIsRun(true)
    }
    if (videoRef.current&&isRun) {
      videoRef.current.pause(); // Play the video
      setIsRun(false)
    }
  };
  return (
    <div className="testimonial-section">
      {/* Left Arrow Button */}
      <img src={leftBtn} alt="Left Button" className="arrow-button" />

      {/* Main Content Section */}
      <div className="main-content">
        {/* Boy Image */}
        {/* <img src={boy} alt="Boy" className="boy-image" /> */}

        {/* Play Button on Top of Boy Image */}
        <video src={vid} className="boy-image" ref={videoRef} onPause={()=>setIsRun(false)} controls={isRun} ></video>
        {!isRun&&<img src={button} alt="Play Button" onClick={handlePlay} className="play-button" />}

        {/* Text and Buttons Container */}
        <div className="text-container ">
          {/* Testimonial Text */}
          <p className="testimonial-text">Testimonials That</p>
          <p className="testimonial-text1 ">
            <span>Speak To </span>
            <span>Our Results</span>
          </p>

          {/* Project Description */}
          <p className="project-description">
            Project Name: Ezee Solution <br />
            <span>Provide: Website & Application</span>
          </p>

          {/* Visit Website Button */}
          <button className="website-button">
            Visit The Website
            <img src={rightArrow} alt="Right Arrow" />
          </button>

          {/* App Store Buttons */}
          <div className="store-buttons">
            <button className="store-button">
              <img src={playStore} alt="Play Store" />
              Google Play
            </button>
            <button className="store-button">
              <img src={apple} alt="App Store" />
              App Store
            </button>
          </div>
        </div>
      </div>

      {/* Right Arrow Button */}
      <img src={rightBtn} alt="Right Button" className="arrow-button" />
    </div>
  );
};

export default TestimonialSection;