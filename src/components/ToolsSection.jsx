import React from 'react';
import js from '../assets/javascript.svg';
import ts from '../assets/typescript.svg';
import rt from '../assets/react.svg';
import nt from '../assets/icon-nextjs.svg';
import nd from '../assets/icon-nodejs.svg';
import ex from '../assets/icon-express.svg';
import ns from '../assets/icon-nest.svg';
import soc from '../assets/icon-socket.svg';
import sql from '../assets/icon-postgresql.svg';
import mg from '../assets/icon-mongodb.svg';
import sss from '../assets/icon-sass.svg';
import tl from '../assets/icon-tailwindcss.svg';
import fg from '../assets/icon-figma.svg';
import cp from '../assets/icon-cypress.svg';
import sb from '../assets/icon-storybook.svg';
import gt from '../assets/icon-github.svg';

const ToolsSection = () => {
  return (
    <div id="tech" className="mt-[4rem] mb-[6rem]">
      {/* Heading Section */}
      <p className="text-[#232323] text-2xl font-bold text-center">
        The <span className="text-[#232323]">Expertise</span>,
        <span className="block mt-2 text-2xl">Tools, And Technologies</span>
      </p>

      {/* Icons Section */}
      <div className="flex flex-col items-center mt-[4rem] space-y-10">
        {/* First Row of Icons */}
        <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-8 text-[#4B5563] gap-6 sm:gap-[2rem] md:gap-[2rem]">
          {[
            { src: js, alt: "JavaScript" },
            { src: ts, alt: "TypeScript" },
            { src: rt, alt: "React" },
            { src: nt, alt: "Next.js" },
            { src: nd, alt: "Node.js" },
            { src: ex, alt: "Express.js" },
            { src: ns, alt: "Nest.js" },
            { src: soc, alt: "Socket.io" },
          ].map(({ src, alt }) => (
            <div className="flex flex-col items-center hover:scale-110 transform transition-all duration-300" key={alt}>
              <img src={src} alt={alt} className="h-6 w-6 sm:h-8 sm:w-8" />
              <p className="mt-2 text-xs sm:text-lg">{alt}</p>
            </div>
          ))}
        </div>

        {/* Second Row of Icons */}
        <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-8 text-[#4B5563] gap-3 sm:gap-[2rem] md:gap-[1.2rem]">
          {[
            { src: mg, alt: "MongoDB" },
            { src: sss, alt: "Sass" },
            { src: tl, alt: "Tailwind CSS" },
            { src: fg, alt: "Figma" },
            { src: cp, alt: "Cypress" },
            { src: sql, alt: "PostgreSQL" },
            { src: sb, alt: "Storybook" },
            { src: gt, alt: "GitHub" },
          ].map(({ src, alt }) => (
            <div className="flex flex-col items-center hover:scale-110 transform transition-all duration-300" key={alt}>
              <img src={src} alt={alt} className="h-6 w-6 sm:h-8 sm:w-8" />
              <p className="mt-2 text-xs sm:text-lg">{alt}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ToolsSection;
