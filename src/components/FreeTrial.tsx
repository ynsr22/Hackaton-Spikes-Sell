import React from 'react';

const ArrowIcon: React.FC = () => (
  <svg width="18" height="11" viewBox="0 0 18 11" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M0.926392 6.57024H14.1615L11.0125 9.67222L12.3488 11L17.9264 5.50572L12.3488 0L11.0125 1.32778L14.1499 4.40687H0.926392V6.57024Z" fill="white"/>
  </svg>
);

const FreeTrialCard: React.FC = () => {
  return (
    <div className="flex justify-center bg-gray-100 py-8 mt-[-20px]">
      <div className="flex items-center justify-center font-manrope p-4 bg-white rounded-lg shadow-custom2 space-x-4 w-fit">
        <div>
          <h3 className="text-[#314EE7] font-[700] text-[18px] leading-[32px] tracking-[-2%]">Try for free</h3>
          <p className="text-[#242424] text-opacity-80 font-[600] text-[14px] leading-[23.1px]">*No credit card required</p>
        </div>
        <button 
          className="flex items-center justify-center w-[58px] h-[58px] bg-[#314EE7] rounded-full hover:bg-[#FE9C9C] transition-colors duration-200"
          aria-label="Start free trial"
        >
          <ArrowIcon />
        </button>
      </div>
    </div>
  );
};

export default FreeTrialCard;