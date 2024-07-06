import React, { useState } from 'react';
import avatar1 from '../images/avatar/avatar1.png';
import avatar2 from '../images/avatar/avatar2.png';
import avatar3 from '../images/avatar/avatar3.png';
import avatar4 from '../images/avatar/avatar4.png';

const Avatar: React.FC<{ src: string; bg: string }> = ({ src, bg }) => (
  <img src={src} alt="User avatar" className={`w-8 h-8 ${bg} rounded-full border-2 border-white object-cover`} />
);

const HeroSection: React.FC = () => {
  const [email, setEmail] = useState('');

  const avatars = [
    { src: avatar1, bg: "bg-[#F9CF7F]" },
    { src: avatar2, bg: "bg-[#4DA8CC]" },
    { src: avatar3, bg: "bg-[#F09B83]" },
    { src: avatar4, bg: "bg-[#E6BF9F]" },
  ];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEmail('');
  };

  return (
    <div className="flex items-center justify-center mt-5 text-center p-6">
      <div className="w-[80%] sd:w-1/2">
        <h1 className="font-bold text-black mb-4 font-delaGothicOne font-400 text-[30px] leading-[35px] md:text-[48px] md:leading-[54.38px]">
          Best way to sell<br /> your digital product
        </h1>
        <p className="text-[#626262] mb-6 font-dmSans font-[500] text-[10px] leading-[16px] md:text-[14px] md:leading-[20.3px]">
          Go from Zero to Hero with a simple platform that helps<br /> creators like you sell their digital products online.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row items-center justify-center md:space-x-2 space-y-2 md:space-y-0 mb-6">
          <label htmlFor="email" className="sr-only">Email address</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your best email address"
            required
            className="w-full md:w-[42%] h-[50px] pl-[15px] gap-1 rounded-[8px] bg-[rgb(250,250,250)] sm:bg-[rgb(247,247,247)] focus:outline-none placeholder:text-black placeholder:opacity-60 placeholder:font-dmSans placeholder:font-500 placeholder:text-[14px] placeholder:leading-[20.3px] text-black focus:ring-2 focus:ring-blue-500"
          />
          <button type="submit" className="w-full md:w-[25%] p-3 rounded-[8px] bg-[#314EE7] text-white hover:bg-[#FE9C9C] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500" aria-label="Try it out">
            Try it out
          </button>
        </form>
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-2">
          <div className="flex -space-x-4">
            {avatars.map((avatar, index) => (
              <Avatar key={index} {...avatar} />
            ))}
            <div className="w-8 h-8 bg-[#E7EAFF] rounded-full border-2 border-white flex items-center justify-center">
              <span className="font-inter font-[700] text-[8px] leading-[9.68px] text-[#314EE7]">100+</span>
            </div>
          </div>
          <span className="font-dmSans font-[500] text-[12px] sm:text-[14px] leading-[13.02px] text-center sm:text-justify text-opacity-50 text-black">
            <span className="font-bold text-opacity-100 text-justify text-black">More than 100+</span> users are selling their products<br /> online with simple & easy ways
          </span>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
