import React from 'react';
import Slider from 'react-slick';
import roof from '../assets/roof.png';
import mobile from '../assets/mobile.png';
import paint from '../assets/paint.png';
import rightArrow from '../assets/greyright.png';

const ExploreSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024, // Screens smaller than 1024px
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const blogItems = [
    {
      img: mobile,
      date: '19.jan.2022',
      title: 'Understanding Smart Home Systems & Maintenance',
      description:
        'Discover the ultimate guide to troubleshooting common smart home issues. From connectivity problems to device malfunctions, we provide step-by-step solutions...',
      tags: ['Plumbing', 'Architecture', 'Maintenance'],
    },
    {
      img: roof,
      date: '19.feb.2023',
      title: 'The Ultimate Guide to Home Repairs and Renovations',
      description:
        'Discover the ultimate guide to troubleshooting common smart home issues. From connectivity problems to device malfunctions, we provide step-by-step solutions...',
      tags: ['Plumbing', 'Architecture', 'Maintenance'],
    },
    {
      img: paint,
      date: '19.Mar.2024',
      title: 'Painting Techniques for a Kitchen Refresh',
      description:
        'Discover the ultimate guide to troubleshooting common smart home issues. From connectivity problems to device malfunctions, we provide step-by-step solutions...',
      tags: ['Plumbing', 'Architecture', 'Maintenance'],
    },
  ];

  return (
    <div className='bg-[#FFFFFF] mb-12'>
      <p className='text-[#232323] text-center text-2xl  font-bold'>
        Explore Insights In{' '}
        <span className='text-[#232323] font-bold'>Our Blog</span>
      </p>
      <p className='text-[#615c5c] text-center mt-4 text-sm'>
        Find lots of insights and information on our blog. Explore, learn, and get inspired today.
      </p>

      {/* Responsive Blog Section */}
      <div className='mt-8'>
        <div className='hidden lg:flex justify-center gap-6 flex-wrap'>
          {/* Large screen layout */}
          {blogItems.map((item, index) => (
            <div
              key={index}
              className='flex flex-col items-start p-4 rounded-lg w-[300px]'
            >
              <img
                src={item.img}
                alt={item.title}
                className='mb-2 transition-transform transform hover:scale-105 w-full h-40 object-cover rounded-lg'
              />
              <p className='text-[#545971] text-xs'>{item.date}</p>
              <p className='text-[#232323] text-base font-bold mt-2 leading-tight'>
                {item.title.split(' ').slice(0, 3).join(' ')} <br />
                {item.title.split(' ').slice(3).join(' ')}
              </p>
              <p className='text-[#545971] mt-2 text-[10px] leading-relaxed'>
                {item.description}
              </p>
              <div className='flex gap-2 mt-2'>
                {item.tags.map((tag, tagIndex) => (
                  <button
                    key={tagIndex}
                    className='text-[#545971] rounded-full bg-[#F3F5F9] px-3 py-1 text-xs transition-colors hover:bg-[#e2e8f0]'
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Slider for Small Screens */}
        <div className='lg:hidden'>
          <Slider {...settings}>
            {blogItems.map((item, index) => (
              <div
                key={index}
                className='flex flex-col items-start p-4 rounded-lg w-[300px] mx-auto'
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className='mb-2 transition-transform transform hover:scale-105 w-full h-40 object-cover rounded-lg'
                />
                <p className='text-[#545971] text-xs'>{item.date}</p>
                <p className='text-[#232323] text-base font-bold mt-2 leading-tight'>
                  {item.title.split(' ').slice(0, 3).join(' ')} <br />
                  {item.title.split(' ').slice(3).join(' ')}
                </p>
                <p className='text-[#545971] mt-2 text-[10px] leading-relaxed'>
                  {item.description}
                </p>
                <div className='flex gap-2 mt-2 flex-wrap'>
                  {item.tags.map((tag, tagIndex) => (
                    <button
                      key={tagIndex}
                      className='text-[#545971] rounded-full bg-[#F3F5F9] px-3 py-1 text-xs transition-colors hover:bg-[#e2e8f0]'
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </Slider>

        </div>
      </div>

      {/* View More Section */}
      <div className="flex justify-center items-between text-sm mt-8 space-x-2">
        <p className="text-[#615c5c] transition-colors hover:text-[#e2e8f0]">
          View More
        </p>
        <img
          src={rightArrow}
          alt="Arrow"
          className="transition-transform transform hover:translate-x-2"
        />
      </div>

    </div>
  );
};

export default ExploreSection;
