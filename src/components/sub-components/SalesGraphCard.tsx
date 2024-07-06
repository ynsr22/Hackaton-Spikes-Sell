import React from 'react';
import Triangle from '../../images/Carrousel-icone/triangle.svg';
import Graph from '../../images/Carrousel-icone/graph.svg';

export const SalesGraphCard = React.memo(() => (
    <div>
      <div className="flex items-center">
        <div className="font-inter font-[700] text-[28.68px] leading-[34.71px] tracking-[-2%] text-[#0A071B]">$ 7,285k</div>
        <img src={Triangle} alt="Triangle Icon" className="w-3 h-2 ml-1" />
      </div>
      <div className="absolute bg-[#EEEEEF] text-[#242424] w-[64.04px] h-[40.1px] font-dmSans text-center rounded-tl-lg rounded-tr-lg rounded-bl-lg flex items-center justify-center translate-x-[190px] translate-y-[-5px]">
        +10%
      </div>
      <img src={Graph} className="w-full mt-8" alt="Graph" />
    </div>
));