import React, { useState } from 'react';

const LastEmail: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEmail('');
  };  

  return (
    <div className="flex w-[90%] sm:w-[68%] h-auto sm:h-[281px] mx-auto flex-col items-center justify-center mt-2 rounded-[25px] bg-white p-6 max-w-4xl">
      <h2 className="text-center font-delaGothicOne font-[400] text-[24px] sm:text-[32px] leading-[30px] sm:leading-[46.34px] text-[#0A071B]">
        Be the first to know about new features, special offers, and more.
      </h2>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-[10px] w-full max-w-md mt-6">
        <label htmlFor="email" className="sr-only">Email address</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your best email address"
          required
          className="flex-grow p-5 text-dmSans font-[500] text-[14px] leading-[20.3px] text-opacity-50 rounded-[8px] h-[50px] bg-[#F7F7F7] outline-none focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button 
          type="submit"
          className="bg-[#314EE7] text-white w-full sm:w-[165px] text-dmSans font-[700] text-[14px] leading-[20.3px] p-2 rounded-[8px] hover:bg-[#FE9C9C] transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Join waitlist
        </button>
      </form>
    </div>
  );
};

export default LastEmail;