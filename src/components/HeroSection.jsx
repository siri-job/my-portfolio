import React from 'react';

function HeroSection() {
  return (
    <section
      id="home"
      className="flex flex-col md:flex-row items-center justify-between bg-gradient-to-br from-purple-300 via-pink-200 to-blue-300 h-screen relative pt-26 px-16 mb-0"
    >

      <div className="absolute top-0 left-0 w-1/4 h-1/4 bg-yellow-300 opacity-40 rounded-full transform -translate-x-1/4 z-0"></div>
      <div className="absolute bottom-0 right-0 w-1/5 h-1/4 bg-pink-400 opacity-40 rounded-full transform  z-0"></div>
      <div className="absolute top-1/4 right-1/4 w-1/5 h-1/5 bg-blue-400 opacity-30 rounded-full transform translate-x-1/4 z-0"></div>
      <div className="absolute bottom-1/4 left-1/4 w-1/5 h-1/5 bg-purple-400 opacity-30 rounded-full transform translate-x-1/4 translate-y-1/4 z-0"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/4 h-32 bg-green-400 opacity-30 rounded-b-full transform z-0"></div>
      <div className="absolute bottom-0 left-0 w-1/6 h-[150px] bg-orange-400 opacity-30 rounded-t-full transform  z-0"></div>

      {/* Left Logo Circle */}
      <div className="z-10 w-full md:w-1/2 h-full flex items-center justify-center md:static bottom-0 md:bottom-auto order-2 md:order-1">
        <div className="relative w-[250px] h-[250px] md:w-[350px] md:h-[350px]">
          {/* React logo */}
          <img
            src="https://media0.giphy.com/media/eNAsjO55tPbgaor7ma/giphy.gif"
            className="w-20 h-20 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
            alt="React"
          />
          {/* Other logos */}
          <img
            src="https://static-00.iconduck.com/assets.00/redux-icon-256x238-ag4i1e52.png"
            className="w-16 h-16 absolute left-1/2 top-0 transform -translate-x-1/2"
            alt="Redux"
          />
          <img
            src="https://media0.giphy.com/media/ln7z2eWriiQAllfVcn/giphy.gif"
            className="w-16 h-16 absolute right-0 top-1/4 transform -translate-y-1/2"
            alt="JavaScript"
          />
          <img
            src="https://media1.giphy.com/media/XAxylRMCdpbEWUAvr8/giphy.gif"
            className="w-16 h-16 absolute right-1/4 bottom-0 transform translate-x-1/2"
            alt="HTML"
          />
          <img
            src="https://raw.githubusercontent.com/beingabeer/beingabeer/master/logo/css.gif"
            className="w-16 h-16 absolute left-1/4 bottom-0 transform -translate-x-1/2"
            alt="CSS"
          />
          <img
            src="https://img.icons8.com/plasticine/512/tailwind_css.png"
            className="w-16 h-16 absolute left-0 top-1/4 transform -translate-y-1/2"
            alt="Tailwind"
          />
        </div>
      </div>

      {/* Right Text Section */}
      <div className="relative z-10 text-center text-white w-full md:w-1/2 pr-2 mb-0 md:mb-0 order-1 md:order-2">
        <h1 className="text-4xl md:text-7xl font-extrabold leading-snug">
         <span className="text-red-400 font-serif block">Welcome</span>
         <span className="text-blue-400 font-sans block">to</span>
         <span className="text-green-400 opacity-50 font-cursive block">SiriFolio🌈</span>
         {/* <span className="text-yellow-500 font-mono block">A Glimpse into my World.</span> */}
       </h1>

        {/* Tagline */}
        <p className="text-xl md:text-xl font-bold text-yellow-600 font-mono block mt-4 sm:text-sm">
          - A Glimpse into my World 🎨🦋
        </p>
      </div>

    </section>
  );
}

export default HeroSection;
