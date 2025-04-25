import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa'; // Add necessary icons

const Footer = () => {
  return (
    <footer className="bg-blue-950 py-8 text-center text-white ">
      <p>© 2025 Siri Dasari. All rights reserved.</p>
      {/* Contact Links */}
      <div className="mt-4 flex justify-center gap-6">
        <a href="mailto:dasarisiri23@gmail.com" className="hover:text-gray-300">
          <FaEnvelope size={24} />
        </a>
        <a href="https://linkedin.com/in/siri-dasari-464b42230" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
          <FaLinkedin size={24} />
        </a>
        <a href="https://github.com/siri-job" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
          <FaGithub size={24} />
        </a>
        <a href="https://www.instagram.com/siridasari1/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
          <FaInstagram size={24} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;

