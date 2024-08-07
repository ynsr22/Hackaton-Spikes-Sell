import React from 'react';

const Intro: React.FC = () => {
  return (
    <div className="flex items-center justify-center mt-[40px]">
      <div className="bg-custom-gradient w-[75%] sm:w-[50%] max-w-2xl md:w-[40%] lg:w-[29%] h-[25px] text-white p-1 rounded-[45px] shadow-md flex items-center justify-center">
        <span className="font-dmSans text-[13px] font-[700] leading-[15px]">
          Introducing a new online selling platform 🎉
        </span>
      </div>
    </div>
  );
};

export default Intro;
