// import React from 'react';
// import backgroundImg from '../assets/Rectangle 85.png';
// import rocket from '../assets/rocket.png';
// import boy from '../assets/laptopMan.png';
// import rightArrow from '../assets/rightBlackArrow.png';
// import './BoySection.css';

// const BoySection = () => {
//   return (
//     <div
//       className="relative bg-[#111111] flex items-center justify-start py-14 pl-4"
//       style={{
//         backgroundImage: `url(${backgroundImg})`,
//         backgroundRepeat: 'no-repeat',
//         backgroundBlendMode: 'overlay',
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         height: '60vh',
//       }}
//     >
//       <div className="flex flex-row items-start justify-center gap-[8rem] text-white w-full px-4">
//         {/* Rocket Image */}
//         <div className="flex flex-col items-start mt-[5rem]">
//           <img
//             src={rocket}
//             alt="Rocket"
//             className="w-[14rem] h-[14rem] mb-4 mt-10"
//           />
//         </div>

//         {/* Text Section */}
//         <div className="text-left mt-16 mt-[10rem]">
//           <p className="font-semibold text-center text-2xl mb-6">
//             Let's Build
//             <br /> Something Great
//             <br />
//             <span className="text-[#FFFFFF]">Together</span>
//           </p>

//           <button className="bg-[#FFFFFF] text-black flex items-center rounded-full py-3 px-6 translate-x-4 hover:bg-[#F4F4F4]">
//             Contact Us
//             <img src={rightArrow} alt="Right Arrow" className="ml-3 w-5 h-5" />
//           </button>
//         </div>

//         {/* Boy Image */}
//         <div>
//           <img
//             src={boy}
//             alt="Boy with Laptop "
//             className="w-[270px] h-[440px] translate-y-[-3rem]"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BoySection;






import React from 'react';
import backgroundImg from '../assets/Rectangle 85.png';
import rocket from '../assets/rocket.png';
import boy from '../assets/laptopMan.png';
import rightArrow from '../assets/rightBlackArrow.png';
import './BoySection.css';

const BoySection = () => {
  return (
    <div
      className="boy-section"
      style={{
        backgroundImage: `url(${backgroundImg})`,
      }}
    >
      <div className="boy-section-content">
        {/* Rocket Image */}
        <div className="boy-section-rocket">
          <img src={rocket} alt="Rocket" />
        </div>

        {/* Text Section */}
        <div className="boy-section-text">
          <p>
            Let's Build
            <br /> Something Great
            <br />
            <span>Together</span>
          </p>

          <button className="boy-section-button">
            Contact Us
            <img src={rightArrow} alt="Right Arrow" />
          </button>
        </div>

        {/* Boy Image */}
        <div className="boy-section-boy">
          <img src={boy} alt="Boy with Laptop" />
        </div>
      </div>
    </div>
  );
};

export default BoySection;







