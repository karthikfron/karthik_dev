// components/Follow.jsx
import React, { useState } from 'react';
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconMail
} from '@tabler/icons-react';

const Follow = () => {
  const [showLinks, setShowLinks] = useState(false);

  const toggleLinks = () => setShowLinks(!showLinks);

  return (
    <div className="mt-4 flex flex-col items-center">
      <button
        onClick={toggleLinks}
        className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full shadow-md hover:scale-105 transition"
      >
        {showLinks ? 'Hide Socials' : 'Follow Me'}
      </button>

      {showLinks && (
        <div className="flex gap-4 mt-4">
          <a href="https://github.com/karthikfron" target="_blank" rel="noopener noreferrer">
            <IconBrandGithub className="w-6 h-6 text-white hover:text-gray-400" />
          </a>
          <a href="https://linkedin.com/in/karthikmokara?" target="_blank" rel="noopener noreferrer">
            <IconBrandLinkedin className="w-6 h-6 text-white hover:text-blue-400" />
          </a>
          <a href="https://twitter.com/dotenvk?" target="_blank" rel="noopener noreferrer">
            <IconBrandTwitter className="w-6 h-6 text-white hover:text-blue-300" />
          </a>
          <a href="karthikmokara1@email.com">
            <IconMail className="w-6 h-6 text-white hover:text-red-300" />
          </a>
        </div>
      )}
    </div>
  );
};

export default Follow;
