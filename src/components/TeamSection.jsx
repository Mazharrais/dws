// import React from 'react';
// import aziz from '../assets/Aziz MughL.png';
// import friend1 from '../assets/pic2.png';
// import friend2 from '../assets/pic3.png';
// import friend3 from '../assets/pic4.png';

// const TeamSection = () => {
//   return (
//     <div className="flex flex-col items-center mt-[4rem]">
//       {/* Heading Section */}
//       <p className="text-[#232323] text-3xl font-bold mb-6">
//         Meet Our <span className="text-[#232323]">Team</span>
//       </p>

//       {/* Images Section */}
//       <div className="flex justify-center mt-14 flex-wrap">
//         {/* First Image with Hover Effect */}
//         <div className="relative w-[24vw] h-54 group">
//           {/* Image with Hover Effect */}
//           <img
//             src={aziz}
//             alt="Team Member"
//             className="w-[24vw] h-54 transform transition duration-300 group-hover:scale-105 group-hover:opacity-80"
//           />

//           {/* Overlay Text */}
//           <div className="absolute inset-0 mt-[6rem] flex flex-col items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//             <p className="text-xl text-[#232323] font-bold mb-4">
//               "Challenges are <br /> stepping stones <br /> to greatness."
//             </p>
//             {/* Additional Text Below the Image */}
//             <p className="text-[#232323] mt-[6rem] font-bold">
//               Aziz Mughal <br />
//               <span className="text-[#232323]">CEO</span>
//             </p>
//           </div>
//         </div>

//         {/* Other Team Member Images */}
//         <img
//           src={friend1}
//           alt="Team Member"
//           className="w-[24vw] h-54 transform transition duration-300 hover:scale-105 hover:opacity-80"
//         />
//         <img
//           src={friend2}
//           alt="Team Member"
//           className="w-[24vw] h-54 transform transition duration-300 hover:scale-105 hover:opacity-80"
//         />
//         <img
//           src={friend3}
//           alt="Team Member"
//           className="w-[24vw] h-54 transform transition duration-300 hover:scale-105 hover:opacity-80"
//         />
//       </div>
//     </div>
//   );
// };

// export default TeamSection;




import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './TeamSection.css'; // Existing CSS

import aziz from '../assets/Aziz MughL.png';
import friend1 from '../assets/pic2.png';
import friend2 from '../assets/pic3.png';
import friend3 from '../assets/pic4.png';

const TeamSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // 1 image at a time on small screens
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 485, // Apply settings only for small screens
        settings: {
          dots: true,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className="team-container">
      <p className="team-heading">Meet Our <span>Team</span></p>

      {/* Large Screen */}
      <div className="large-screen">
        <div className="team-image-container">
          <img src={aziz} alt="Team Member" className="team-image" />
        </div>
        <div className="team-image-container">
          <img src={friend1} alt="Team Member" className="team-image" />
        </div>
        <div className="team-image-container">
          <img src={friend2} alt="Team Member" className="team-image" />
        </div>
        <div className="team-image-container">
          <img src={friend3} alt="Team Member" className="team-image" />
        </div>
      </div>

      {/* Responsive Slider for Small Screens */}
      <div className="responsive-screen">
        <Slider {...settings}>
          <div>
            <img src={aziz} alt="Team Member" className="team-image" />
          </div>
          <div>
            <img src={friend1} alt="Team Member" className="team-image" />
          </div>
          <div>
            <img src={friend2} alt="Team Member" className="team-image" />
          </div>
          <div>
            <img src={friend3} alt="Team Member" className="team-image" />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default TeamSection;
