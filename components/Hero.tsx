import React from 'react'
import '../app/globals.css';
import { MeteorDemo } from './magicui/meteors';
import { Spotlight } from './ui/spotlight';
import { TypewriterEffectSmoothDemo } from './magicui/TypeWriter';
import Button from './ui/Button';
import Follow from './Followers/Followe'

const Hero = () => {
  return (
    <div id="hero" className="min-h-screen w-full px-4 md:px-16 lg:px-72 py-10 md:py-32 relative bg-black  w-screen bg-grid-8-s-2-neutral-950">

      {/* Background Spotlight */}
      <Spotlight className="absolute top-16 left-10 md:left-32 md:top-20 h-screen" fill="white" />
      <div className="relative flex flex-col items-center">
        <img
          className="rounded-full h-32 w-32 md:h-36 md:w-36 lg:h-44 lg:w-44 object-cover border-4 border-white"
          src="https://i.pinimg.com/736x/48/9b/5a/489b5aa4d508ef3e18e9eecdfc50a63d.jpg"
          alt="profile_pic"
        />
        <div className="mt-2">
          <Follow />
        </div>
      </div>

      {/* Floating Button + Meteor Effect */}
      <div className="flex flex-col items-center justify-center mt-6 mb-10 z-10 relative">
        <div className="mb-4 text-center">
          <Button />
        </div>
        <MeteorDemo />
      </div>

      {/* Horizontal Line */}
      <div className="border-t border-gray-600 w-full mb-6"></div>

      {/* Profile & Bio like Instagram layout */}

      <div className="flex justify-start  flex-col sm:flex-row sm:items-center  gap-6 sm:gap-10 text-white">



        {/* 📄 Bio Section */}
        <div className="text-center sm:text-left max-w-md mx-auto sm:mx-0">
          <p className="text-base sm:text-lg font-medium">
            I’m a <span className="text-indigo-400 font-semibold animate-pulse">21-year-old 🧠</span> B-Tech student and <span className="text-blue-400 font-semibold">frontend developer 🚀</span>.
          </p>
          <p className="text-sm text-gray-300">
            Building projects only for my own use case. Passionate about UI/UX and interactivity.
          </p>
        </div>
      </div>


      {/* Typewriter */}
      <div className="mt-12">
        <TypewriterEffectSmoothDemo />
      </div>
    </div>
  );
};

export default Hero;
