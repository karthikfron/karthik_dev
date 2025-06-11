import React from 'react';
import SignupFormDemo from './signup-form-demo';
import { WorldMapDemo } from './magicui/World_Map';

const Contact = () => {
  return (
    <div id="contact" className="flex flex-col md:flex-row w-full  min-h-screen bg-black -mt-12 ">
      {/* Left: Contact Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center ">
        <SignupFormDemo />
      </div>

      {/* Right: World Map */}
      <div className="w-full md:w-1/2 flex items-center justify-center">
        <WorldMapDemo />
      </div>
    </div>
  );
};

export default Contact;
