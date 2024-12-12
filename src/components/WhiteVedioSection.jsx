import React, { useState } from 'react';
import laptop from '../assets/Group 4273206490.png';
import outdoor from '../assets/outdoor.png';
import garden from '../assets/garden.png';
import group from '../assets/group.png';
import study from '../assets/study.png';
import button from '../assets/Buttonblack.png'; // Corrected the import path for the button image
import Slider from 'react-slick'; // Importing react-slick for the slider functionality
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { motion } from 'framer-motion';

const WhiteVedioSection = () => {
  const [playingVideo, setPlayingVideo] = useState(null);

  // Video Data
  const videoData = [
    { thumbnail: outdoor, videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4" },
    { thumbnail: garden, videoUrl: "https://www.w3schools.com/html/movie.mp4" },
    { thumbnail: group, videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4" },
    { thumbnail: study, videoUrl: "https://www.w3schools.com/html/movie.mp4" },
  ];

  // Slider settings for small screen
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="bg-[#FFFFFF] py-20 mt-8">
      {/* Main Text and Image Section */}
      <div className="flex flex-col md:flex-row  justify-between gap-[8rem]">
        {/* Text Section */}
        <div className="md:w-1/2 flex justify-end pl-6 md:ml-[6rem] text-left md:text-left"> {/* Center text on small screens */}
          <motion.div
            initial={{ opacity: 0, y: -100 }} // Upar se start kare
            whileInView={{ opacity: 1, y: 0 }} // Apni position par aa jaye
            transition={{ duration: 0.8, ease: "easeOut" }} // Tezi se neeche aaye
          >
            <p className="text-[#232323] mr-[6rem] font-semibold text-xl sm:text-4xl">
              HOW WE MAKE <span className="text-[#111111]">BETTER</span>
            </p>
            <ul className="mt-4 space-y-6 text-xs sm:text-[16px] font-semibold ml-[2rem] tetetete list-disc list-inside">
              <li className="text-[#A39898]">
                Observation, of the goal market and designed advertising &<br />
                marketing approach format in accordance with the requirement.
              </li>
              <li className="text-[#A39898]">
                Divide the fundamental goal into small goals, and comply<br />
                with the calendar thus for intention achievement.
              </li>
              <li className="text-[#A39898]">
                Analysis of advertising and monitoring in the element for the<br />
                ROI, create an income funnel consequently and observe until<br />
                achievement.
              </li>
            </ul>
          </motion.div>
        </div>
        {/* Laptop Image */}
        <motion.div
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.9 }}

          // initial={{opacity: 0, x: 70}}
          // whileInView={{opacity: 12, x: 10}}
          // transition={{duration : 1}}

          className="flex justify-center    md:w-1/2 mt-8 md:mt-0 sm:display hidden md:block ">
          <img
            src={laptop}
            alt="Laptop"
            className="w-[420px] max-w-lg object-contain"
          />
        </motion.div>
      </div>

      {/* Video Section with Play Buttons */}
      <div className="flex justify-center flex-wrap gap-4 mt-20  md:mt-8">
        {/* Slider for small screens */}
        <div className="w-full md:hidden px-3 md:px-0">
          <Slider {...sliderSettings}>
            {videoData.map((item, index) => (
              <div
                key={index}
                className="relative w-full flex items-center justify-center group transition-transform transform hover:scale-105"
              >
                {playingVideo === index ? (
                  <video
                    className="absolute w-full h-full object-contain rounded-lg"
                    controls
                    autoPlay
                    src={item.videoUrl}
                    onEnded={() => setPlayingVideo(null)} // Reset state when video ends
                  />
                ) : (
                  <>
                    <img
                      src={item.thumbnail}
                      alt={`Thumbnail ${index + 1}`}
                      className="object-contain rounded-lg opacity-90 group-hover:opacity-100 transition-opacity"
                    />
                    <div className="absolute inset-0 bg-white opacity-5 group-hover:opacity-0 transition-opacity"></div>
                    <img
                      src={button}
                      alt="Play Button"
                      className="absolute w-12 h-12 md:w-14 md:h-14 cursor-pointer transition-transform transform hover:scale-110"
                      onClick={() => setPlayingVideo(index)}
                    />
                  </>
                )}
              </div>
            ))}
          </Slider>
        </div>

        {/* For larger screens */}
        <div className="hidden md:flex justify-center flex-wrap gap-4 mt-20">
          {videoData.map((item, index) => (
            <div
              key={index}
              className="relative w-52 h-52 flex items-center justify-center group transition-transform transform hover:scale-105"
            >
              {playingVideo === index ? (
                <video
                  className="absolute w-full h-full object-contain rounded-lg"
                  controls
                  autoPlay
                  src={item.videoUrl}
                  onEnded={() => setPlayingVideo(null)} // Reset state when video ends
                />
              ) : (
                <>
                  <img
                    src={item.thumbnail}
                    alt={`Thumbnail ${index + 1}`}
                    className="object-contain rounded-lg opacity-90 group-hover:opacity-100 transition-opacity"
                  />
                  <div className="absolute inset-0 bg-white opacity-5 group-hover:opacity-0 transition-opacity"></div>
                  <img
                    src={button}
                    alt="Play Button"
                    className="absolute w-12 h-12 md:w-14 md:h-14 cursor-pointer transition-transform transform hover:scale-110"
                    onClick={() => setPlayingVideo(index)}
                  />
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhiteVedioSection;






// import React, { useState } from 'react';
// import laptop from '../assets/Group 4273206490.png';
// import outdoor from '../assets/outdoor.png';
// import garden from '../assets/garden.png';
// import group from '../assets/group.png';
// import study from '../assets/study.png';
// import button from '../assets/Buttonblack.png'; // Play button image
// import Slider from 'react-slick'; // React-slick for slider
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// const WhiteVideoSection = () => {
//   const [playingVideo, setPlayingVideo] = useState(null);

//   // Video Data
//   const videoData = [
//     { thumbnail: outdoor, videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4" },
//     { thumbnail: garden, videoUrl: "https://www.w3schools.com/html/movie.mp4" },
//     { thumbnail: group, videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4" },
//     { thumbnail: study, videoUrl: "https://www.w3schools.com/html/movie.mp4" },
//   ];

//   // Slider settings for small screen
//   const sliderSettings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//   };

//   return (
//     <div className="bg-[#FFFFFF] py-20 mt-8">
//       {/* Main Text and Image Section */}
//       <div className="flex flex-col md:flex-row justify-between gap-[8rem]">
//         {/* Text Section */}
//         <div className="md:w-1/2 flex justify-end pl-6 md:ml-[6rem] text-left">
//           <div>
//             <p className="text-[#232323] mr-[6rem] font-bold text-sm sm:text-lg">
//               HOW WE MAKE <span className="text-[#111111]">BETTER</span>
//             </p>
//             <ul className="mt-4 space-y-6 text-sm sm:text-[14px] ml-[2rem] list-disc list-inside">
//               <li className="text-[#A39898]">
//                 Observation, of the goal market and designed advertising &<br />
//                 marketing approach format in accordance with the requirement.
//               </li>
//               <li className="text-[#A39898]">
//                 Divide the fundamental goal into small goals, and comply<br />
//                 with the calendar thus for intention achievement.
//               </li>
//               <li className="text-[#A39898]">
//                 Analysis of advertising and monitoring in the element for the<br />
//                 ROI, create an income funnel consequently and observe until<br />
//                 achievement.
//               </li>
//             </ul>
//           </div>
//         </div>
//         {/* Laptop Image */}
//         <div className="flex justify-center md:w-1/2 mt-8 md:mt-0 sm:hidden md:block">
//           <img
//             src={laptop}
//             alt="Laptop"
//             className="w-[370px] max-w-lg object-contain"
//           />
//         </div>
//       </div>

//       {/* Video Section with Play Buttons */}
//       <div className="flex justify-center flex-wrap gap-4 mt-20 md:mt-8">
//         {/* Slider for small screens */}
//         <div className="w-full md:hidden">
//           <Slider {...sliderSettings}>
//             {videoData.map((item, index) => (
//               <div
//                 key={index}
//                 className="relative w-full flex items-center justify-center group transition-transform transform hover:scale-105"
//               >
//                 {playingVideo === index ? (
//                   <video
//                     className="absolute w-full h-full object-contain rounded-lg z-20"
//                     controls
//                     autoPlay
//                     src={item.videoUrl}
//                     onEnded={() => setPlayingVideo(null)} // Reset state when video ends
//                   />
//                 ) : (
//                   <>
//                     <img
//                       src={item.thumbnail}
//                       alt={`Thumbnail ${index + 1}`}
//                       className="object-contain rounded-lg opacity-90 group-hover:opacity-100 transition-opacity"
//                     />
//                     <div className="absolute inset-0 bg-white opacity-5 group-hover:opacity-0 transition-opacity"></div>
//                     <img
//                       src={button}
//                       alt="Play Button"
//                       className="absolute w-12 h-12 z-30 cursor-pointer transition-transform transform hover:scale-110"
//                       onClick={() => setPlayingVideo(index)}
//                     />
//                   </>
//                 )}
//               </div>
//             ))}
//           </Slider>
//         </div>

//         {/* For larger screens */}
//         <div className="hidden md:flex justify-center flex-wrap gap-4 mt-20">
//           {videoData.map((item, index) => (
//             <div
//               key={index}
//               className="relative w-52 h-52 flex items-center justify-center group transition-transform transform hover:scale-105"
//             >
//               {playingVideo === index ? (
//                 <video
//                   className="absolute w-full h-full object-contain rounded-lg z-20"
//                   controls
//                   autoPlay
//                   src={item.videoUrl}
//                   onEnded={() => setPlayingVideo(null)} // Reset state when video ends
//                 />
//               ) : (
//                 <>
//                   <img
//                     src={item.thumbnail}
//                     alt={`Thumbnail ${index + 1}`}
//                     className="object-contain rounded-lg opacity-90 group-hover:opacity-100 transition-opacity"
//                   />
//                   <div className="absolute inset-0 bg-white opacity-5 group-hover:opacity-0 transition-opacity"></div>
//                   <img
//                     src={button}
//                     alt="Play Button"
//                     className="absolute w-12 h-12 z-30 cursor-pointer transition-transform transform hover:scale-110"
//                     onClick={() => setPlayingVideo(index)}
//                   />
//                 </>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WhiteVideoSection;
