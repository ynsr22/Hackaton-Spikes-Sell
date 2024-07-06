import React from 'react';
import CircularProgress from './CircularProgress';
import Bag from '../../images/Carrousel-icone/bag.svg';
import Cart from '../../images/Carrousel-icone/cart.svg';

export const ManageStoreCard = React.memo(() => (
    <div>
      <h2 className="font-inter font-[500] text-[15.29px] leading-[22.94px] tracking-[-0.02em] text-[#0A071B] text-center mb-[10px]">Manage your store</h2>
      <div className="flex items-start justify-between">
        <div className="flex-grow">
          <div className="flex items-center ml-[6px] mb-[15px]">
            <div className="w-[49.71px] h-[49.71px] bg-[#EC9D40] rounded-full bg-opacity-10 relative flex items-center justify-center">
              <img src={Bag} className="w-5 h-5" alt="Bag Icon" />
            </div>
            <div className="ml-2 flex flex-col">
              <div className="w-[123.31px] bg-gray-200 h-[10.51px] rounded-[47.79px] mb-[10px] opacity-[70%]"></div>
              <div className="w-[68.82px] bg-gray-200 h-[10.51px] rounded-[47.79px] opacity-[70%]"></div>
            </div>
          </div>
          <div className="flex items-center ml-[6px]">
            <div className="w-[49.71px] h-[49.71px] bg-[#F073A4] rounded-full bg-opacity-10 relative flex items-center justify-center">
              <img src={Cart} className="w-5 h-5" alt="Cart Icon" />
            </div>
            <div className="ml-2 flex flex-col">
              <div className="w-[123.31px] bg-gray-200 h-[10.51px] rounded-[47.79px] mb-[10px] opacity-[70%]"></div>
              <div className="w-[68.82px] bg-gray-200 h-[10.51px] rounded-[47.79px] opacity-[70%]"></div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center mt-[0.5px]">
          <CircularProgress size={48.75} strokeWidth={8} percentage={80} />
          <div className="mt-[16.5px]">
            <CircularProgress size={48.75} strokeWidth={8} percentage={25} />
          </div>
        </div>
      </div>
    </div>
  ));