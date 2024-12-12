import React, { useState } from 'react';
import logo from '../assets/deskWorkBlack.png'; // Update with your logo path
import searchIcon from '../assets/blackSearch.png'; // Update with your search icon path
import { Link } from 'react-scroll';
import "./Navbar.css"


const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [search, setSearch] = useState('');

  const handleSearch = () => {
    // Logic to navigate based on the input
    if (search === 'home') {
      document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
    } else if (search === 'about') {
      document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
    } else if (search === 'services') {
      document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
    } else if (search === 'tech') {
      document.getElementById('tech')?.scrollIntoView({ behavior: 'smooth' });
    } else if (search === 'contact') {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      alert('Invalid section. Try "home", "about", "services", "tech", or "contact".');
    }
    // Clear the search input after performing the search
    setSearch('');
  };

  return (
    <nav className="bg-white text-black p-2 resNav">
      <div className="container mx-auto flex justify-between items-center md:px-6">
        {/* Logo Section */}
        <div className="flex items-center space-x-4">
          <img
            src={logo}
            alt="Deskwork Solution Logo"
            className="w-[8rem] h-auto ml-4 md:ml-[140px]"
          />
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex font-semibold gap-4 text-[12px] text-[13px] space-x-1">
          <Link to="home" smooth={true} duration={500} className="hover:text-gray-700 text-[#111111] cursor-pointer">
            Home
          </Link>
          <Link to="about" smooth={true} duration={500} className="hover:text-gray-700 text-[#A39898] cursor-pointer">
            About Us
          </Link>
          <Link to="services" smooth={true} duration={500} className="hover:text-gray-700 text-[#A39898] cursor-pointer">
            Services
          </Link>
          <Link to="tech" smooth={true} duration={500} className="hover:text-gray-700 text-[#A39898] cursor-pointer">
            Technologies
          </Link>
          <Link to="contact" smooth={true} duration={500} className="hover:text-gray-700 text-[#A39898] cursor-pointer">
            Contact Us
          </Link>
          <Link to="#" smooth={true} duration={500} className="hover:text-gray-700 text-[#A39898] cursor-pointer">
            Get a Quote
          </Link>
          <Link to="#" smooth={true} duration={500} className="hover:text-gray-700 text-[#A39898] cursor-pointer">
            More
          </Link>
        </div>

        {/* Search Input */}
        <div className="hidden md:flex items-center mr-[8rem] border border-gray-300 rounded-md overflow-hidden">
          <input
            type="text"
            placeholder="Search"
            className="p-1 pl-2 w-[10rem] outline-none"
            value={search}
            onChange={(e) => setSearch(e.target.value.toLowerCase())}
          />
          <img
            src={searchIcon}
            alt="Search Icon"
            className="w-5 h-5 p-1 mr-1 cursor-pointer"
            onClick={handleSearch}
          />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex justify-between">
          <button
            className="text-black flex flex-column justify-between h-5 w-6 focus:outline-none"
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className=" w-full h-0.5 bg-black"></span>
            <span className=" w-full h-0.5 bg-black"></span>
            <span className=" w-full h-0.5 bg-black"></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white text-black text-center space-y-3 p-2">
          <Link to="home" className="block py-2 hover:text-gray-700 font-bold rounded-md  bg-zinc-400 cursor-pointer">
            Home
          </Link>
          <Link to="about" className="block py-2 hover:text-gray-700 font-bold cursor-pointer">
            About Us
          </Link>
          <Link to="services" className="block py-2 hover:text-gray-700 font-semibold cursor-pointer">
            Services
          </Link>
          <Link to="tech" className="block py-2 hover:text-gray-700 font-semibold cursor-pointer">
            Technologies
          </Link>
          <Link to="contact" className="block py-2 hover:text-gray-700 font-semibold cursor-pointer">
            Contact Us
          </Link>
          <Link to="#" className="block py-2 hover:text-gray-700 font-semibold cursor-pointer">
            Get a Quote
          </Link>
          <Link to="#" className="block py-2 hover:text-gray-700 font-semibold cursor-pointer">
            More
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;





//  second code




// import React, { useState } from 'react';
// import './Navbar.css';
// import logo from '../assets/deskWorkBlack.png'; // Update with your logo path
// import searchIcon from '../assets/blackSearch.png'; // Update with your search icon path
// import './Navbar.css';
// import { Link } from 'react-scroll';

// const Navbar = () => {
//   const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [search, setSearch] = useState('');

//   const handleSearch = () => {
//     if (search === 'home') {
//       document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
//     } else if (search === 'about') {
//       document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
//     } else if (search === 'services') {
//       document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
//     } else if (search === 'tech') {
//       document.getElementById('tech')?.scrollIntoView({ behavior: 'smooth' });
//     } else if (search === 'contact') {
//       document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
//     } else {
//       alert('Invalid section. Try "home", "about", "services", "tech", or "contact".');
//     }
//     setSearch('');
//   };

//   return (
//     <nav className="navbar">
//       <div className="navbar-container">
//         <div>
//           <img src={logo} alt="Deskwork Solution Logo" className="logo" />
//         </div>
//         <div className="desktop-nav">
//           <Link to="home" smooth={true} duration={500}>Home</Link>
//           <Link to="about" smooth={true} duration={500}>About Us</Link>
//           <Link to="services" smooth={true} duration={500}>Services</Link>
//           <Link to="tech" smooth={true} duration={500}>Technologies</Link>
//           <Link to="contact" smooth={true} duration={500}>Contact Us</Link>
//           <Link to="#">Get a Quote</Link>
//           <Link to="#">More</Link>
//         </div>
//         <div className="search-container">
//           <input
//             type="text"
//             placeholder="Search"
//             className="search-input"
//             value={search}
//             onChange={(e) => setSearch(e.target.value.toLowerCase())}
//           />
//           <img
//             src={searchIcon}
//             alt="Search Icon"
//             className="search-icon"
//             onClick={handleSearch}
//           />
//         </div>
//         <div className="mobile-menu-button" onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}>
//           <span></span>
//           <span></span>
//           <span></span>
//         </div>
//       </div>
//       {isMobileMenuOpen && (
//         <div className="mobile-menu">
//           <Link to="home">Home</Link>
//           <Link to="about">About Us</Link>
//           <Link to="services">Services</Link>
//           <Link to="tech">Technologies</Link>
//           <Link to="contact">Contact Us</Link>
//           <Link to="#">Get a Quote</Link>
//           <Link to="#">More</Link>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;
