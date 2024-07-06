import React from 'react';
import Icon from '../images/logo/logo_black.svg';

const footerLinks = [
  { href: "#", text: "Home" },
  { href: "#", text: "Agencies" },
  { href: "#", text: "About" },
  { href: "#", text: "My Shortlist" },
];

const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col md:flex-row w-full md:w-[68%] items-center justify-between p-4 mt-10 mb-[20px] mx-auto space-y-4 md:space-y-0">
      <div className="flex items-center space-x-2">
        <img src={Icon} alt="Sell Logo" className="w-4 h-4 rotate-180" />
        <span className="text-[#0A071B] font-dmSans font-[700] text-[14px] leading-[20.3px]">Sell</span>
      </div>
      <nav className="flex flex-wrap justify-center md:justify-end space-x-6">
        {footerLinks.map((link, index) => (
          <a 
            key={index} 
            href={link.href} 
            className="text-[#0A071B] font-inter font-[600] text-[10px] leading-[14.5px] hover:underline"
          >
            {link.text}
          </a>
        ))}
      </nav>
    </footer>
  );
};

export default Footer;