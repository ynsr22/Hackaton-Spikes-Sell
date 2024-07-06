import React from 'react';
import Bag from '../../images/Carrousel-icone/bag.svg';
import avatar1 from '../../images/avatar/avatar1.png';
import avatar2 from '../../images/avatar/avatar6.png';
import avatar3 from '../../images/avatar/avatar5.png';
import avatar4 from '../../images/avatar/avatar4.png';
import Triangle from '../../images/Carrousel-icone/triangle.svg';

export const UserStatsCard = React.memo(() => (
    <div>
      <div className="flex-grow">
        <div className="flex items-center justify-between ml-[6px] mb-[15px]">
          <div className="flex items-center">
            <div className="w-[49.71px] h-[49.71px] bg-[#EC9D40] rounded-full bg-opacity-10 relative flex items-center justify-center">
              <img src={Bag} className="w-5 h-5" alt="Bag Icon" />
            </div>
            <div className="ml-2 flex flex-col">
              <div className="w-[123.31px] bg-gray-200 h-[10.51px] rounded-[47.79px] mb-[10px] opacity-[70%]"></div>
              <div className="w-[68.82px] bg-gray-200 h-[10.51px] rounded-[47.79px] opacity-[70%]"></div>
            </div>
          </div>
          <div className="text-xl font-inter font-[700] text-[#0A071B] text-[22.94px] leading-[22.94px] tracking-[-2%] mr-[-21px]">27k</div>
          <img src={Triangle} alt="Triangle Icon" className="w-3 h-2" />
        </div>
      </div>
      <div className="mt-20 flex justify-center items-center gap-2">
        <img src={avatar1} alt="User avatar 1" className="w-10 h-10 bg-[#F9CF7F] rounded-full border-2 border-white object-cover" />
        <img src={avatar2} alt="User avatar 2" className="w-10 h-10 bg-[#F49392] rounded-full border-2 border-white object-cover" />
        <img src={avatar3} alt="User avatar 3" className="w-10 h-10 bg-[#1E9896] rounded-full border-2 border-white object-cover" />
        <img src={avatar4} alt="User avatar 4" className="w-10 h-10 bg-[#E6BF9F] rounded-full border-2 border-white object-cover" />
        <div className="w-10 h-10 bg-[#E9EEF6] rounded-full flex items-center justify-center border-2 border-white">
          <span className="font-inter font-[500] text-[13.7px] leading-[16.58px] text-[#242424]">12k+</span>
        </div>
      </div>
    </div>
  ));
