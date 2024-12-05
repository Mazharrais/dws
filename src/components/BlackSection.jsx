import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import rideApp from '../assets/Rectangle 11.png';
import shoeEcom from '../assets/Rectangle 11 (1).png';
import healthApp from '../assets/Rectangle 11 (2).png';
import logisApp from '../assets/Rectangle 11 (5).png';
import entertain from '../assets/Rectangle 11 (4).png';
import walletApp from '../assets/Rectangle 11 (3).png';

const BlackSection = () => {
  const [selectedButton, setSelectedButton] = useState('Applications');

  // Background colors for each container
  const backgroundColors = {
    rideApp: '#FFFFFF',
    shoeEcom: ['#F5E9F1', '#EBF4F8', '#F7E3E2'],
    healthApp: ['#F4E8E3', '#F3EFF6', '#EEE0F9'],
    logisApp: ['#E7F3F2', '#EBF4F8', '#DFEEF9'],
    entertain: ['#E7F3F2', '#EBF4F8', '#DFEEF9'],
    walletApp: ['#F4E8E3', '#F3EFF6', '#EEE0F9'],
  };

  // Project years
  const projectYears = [
    'May - July 2020',
    'May - July 2021',
    'May - July 2021',
    'May - July 2022',
    'May - July 2023',
    'May - July 2024',
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };



  return (
    <div className="bg-[#3A3A3A] py-14 md:py-20">
      <h1 className="text-[#FFFFFF] text-center mb-4 text-2xl sm:text-2xl font-bold">
        Project Portfolio
      </h1>
      <p className="text-[#f0ebeb] text-center mb-8 text-[10px] sm:text-lg">
        If you want to discuss your upcoming project with our customer support
        <span className="block">
          team, call us now. Let's connect and resolve all your queries promptly.
        </span>
      </p>


      <div className="hidden sm:flex flex-nowrap justify-center gap-1 sm:gap-2 mb-8 overflow-x-auto">
  {['All', 'Websites', 'Applications', 'Logo Design', 'Branding', 'Video Animation'].map((label) => (
    <button
      key={label}
      className={`px-2 sm:px-6 py-1 sm:py-2 rounded-full border border-[#FFFFFF] transition-all text-xs sm:text-base ${
        selectedButton === label
          ? 'bg-[#FFFFFF] text-[#000000]'
          : 'bg-[#3A3A3A] text-[#FFFFFF] hover:bg-[#FFFFFF] hover:text-[#000000]'
      }`}
      onClick={() => setSelectedButton(label)}
    >
      {label}
    </button>
  ))}
</div>


      {/* Grid layout for the containers */}
<div className="py-8 px-4 sm:px-6 lg:px-24">
  {/* Slider for Small Screens */}
  <div className="block sm:hidden">
    <Slider {...settings}>
      {[rideApp, shoeEcom, healthApp, logisApp, entertain, walletApp].map((image, index) => {
        const bgColor =
          index === 0
            ? backgroundColors.rideApp
            : index === 1
              ? backgroundColors.shoeEcom[0]
              : index === 2
                ? backgroundColors.healthApp[0]
                : index === 3
                  ? backgroundColors.logisApp[0]
                  : index === 4
                    ? backgroundColors.entertain[0]
                    : backgroundColors.walletApp[0];

        return (
          <div
            key={index}
            className="w-full h-[450px] rounded-lg overflow-hidden shadow-lg relative"
            style={{ backgroundColor: bgColor }}
          >
            <img
              src={image}
              alt={`Project ${index + 1}`}
              className="h-3/5 w-full object-cover"
            />
            <div
              className="absolute bottom-0 left-0 right-0 p-4 rounded-b-lg"
              style={{
                color: '#000000', // Black text color
                backgroundColor: bgColor, // Dynamic background on small screen
              }}
            >
              <p className="text-xs">{projectYears[index]}</p>
              <h2 className="mt-8 text-lg font-semibold">Project {index + 1}</h2>
              <p className=" text-sm leading-6">
                Expedita laborum suscipit sequi et nobis voluptas fuga placeat.
                Omnis est ratione. Repellendus recusandae a.
              </p>
            </div>
          </div>
        );
      })}
    </Slider>
  </div>

  {/* Grid for Medium and Larger Screens */}
  <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-4 md:gap-y-6">
    {[rideApp, shoeEcom, healthApp, logisApp, entertain, walletApp].map((image, index) => {
      const bgColor =
        index === 0
          ? backgroundColors.rideApp
          : index === 1
            ? backgroundColors.shoeEcom[0]
            : index === 2
              ? backgroundColors.healthApp[0]
              : index === 3
                ? backgroundColors.logisApp[0]
                : index === 4
                  ? backgroundColors.entertain[0]
                  : backgroundColors.walletApp[0];

      return (
        <div
          key={index}
          className="w-[90%] h-[450px] rounded-lg overflow-hidden shadow-lg hover:scale-105 transform transition-transform relative"
          style={{ backgroundColor: bgColor }}
        >
          <img
            src={image}
            alt={`Project ${index + 1}`}
            className="h-3/5 w-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 p-4 rounded-b-lg" style={{ color: '#000000' }}>
            <p className="text-xs">{projectYears[index]}</p>
            <h2 className="mt-1 text-xl font-semibold">Project {index + 1}</h2>
            <p className="mt-2 text-md leading-6">
              Expedita laborum suscipit sequi et nobis voluptas fuga placeat.
              Omnis est ratione. Repellendus recusandae a.
            </p>
          </div>
        </div>
      );
    })}
  </div>
</div>

      <div className="mt-8 md:mt-12 text-center">
        <p className="text-[#f0ebeb] py-4 px-6 md:px-8 text-sm md:text-lg cursor-pointer hover:underline">
          View All Projects
        </p>
      </div>
    </div>
  );
};

export default BlackSection;








// import React, { useState } from 'react';
// import Slider from "react-slick"
// import rideApp from '../assets/Rectangle 11.png';
// import shoeEcom from '../assets/Rectangle 11 (1).png';
// import healthApp from '../assets/Rectangle 11 (2).png';
// import logisApp from '../assets/Rectangle 11 (5).png';
// import entertain from '../assets/Rectangle 11 (4).png';
// import walletApp from '../assets/Rectangle 11 (3).png';
// import "./BlackSection.css"

// const BlackSection = () => {
//   const [selectedButton, setSelectedButton] = useState('Applications');

//   const backgroundColors = {
//     rideApp: '#FFFFFF',
//     shoeEcom: ['#F5E9F1', '#EBF4F8', '#F7E3E2'],
//     healthApp: ['#F4E8E3', '#F3EFF6', '#EEE0F9'],
//     logisApp: ['#E7F3F2', '#EBF4F8', '#DFEEF9'],
//     entertain: ['#E7F3F2', '#EBF4F8', '#DFEEF9'],
//     walletApp: ['#F4E8E3', '#F3EFF6', '#EEE0F9'],
//   };

//   const projectYears = [
//     'May - July 2020',
//     'May - July 2021',
//     'May - July 2021',
//     'May - July 2022',
//     'May - July 2023',
//     'May - July 2024',
//   ];

//   // Slider settings
//   const sliderSettings = {
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     responsive: [
//       {
//         breakpoint: 485,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//           arrows: true,
//         },
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 2,
//           arrows: true,
//         },
//       },
//       {
//         breakpoint: 1400,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 3,
//           arrows: true,
//         },
//       },
//     ],
//     gap:10
//   };

//   return (
//     <div className="black-section">
//       <h1 className="heading">Project Portfolio</h1>
//       <p className="subheading">
//         If you want to discuss your upcoming project with our customer support
//         team, call us now. Let's connect and resolve all your queries promptly.
//       </p>

//       <div className="button-container">
//         {['All', 'Websites', 'Applications', 'Logo Design', 'Branding', 'Video Animation'].map((label) => (
//           <button
//             key={label}
//             className={`button ${selectedButton === label ? 'selected' : ''}`}
//             onClick={() => setSelectedButton(label)}
//           >
//             {label}
//           </button>
//         ))}
//       </div>

//       {/* Slick Slider */}
//     <div style={{ padding:"0 100px"}} className='cus-con'>
//     <Slider {...sliderSettings} >
//         {[rideApp, shoeEcom, healthApp, logisApp, entertain, walletApp].map((image, index) => {
//           const bgColor =
//             index === 0
//               ? backgroundColors.rideApp
//               : index === 1
//               ? backgroundColors.shoeEcom[0]
//               : index === 2
//               ? backgroundColors.healthApp[0]
//               : index === 3
//               ? backgroundColors.logisApp[0]
//               : index === 4
//               ? backgroundColors.entertain[0]
//               : backgroundColors.walletApp[0];

//           return (
//             <div key={index} className="slider-item" style={{ backgroundColor: bgColor }}>
//               <img src={image} alt={`Project ${index + 1}`} className="slider-image" />
//               <div className="slider-text">
//                 <p className="project-year">{projectYears[index]}</p>
//                 <h2 className="project-title">Project {index + 1}</h2>
//                 <p className="project-description">
//                   Expedita laborum suscipit sequi et nobis voluptas fuga placeat. Omnis est
//                   ratione. Repellendus recusandae a.
//                 </p>
//               </div>
//             </div>
//           );
//         })}
//       </Slider>
//     </div>

//       <div className="view-all">
//         <p className="view-all-text">View All Projects</p>
//       </div>
//     </div>
//   );
// };

// export default BlackSection;





//////// Third Section


