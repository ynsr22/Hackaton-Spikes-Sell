import { useState, useEffect, useRef, useCallback } from 'react';
import { ReactNode } from 'react';
import CircularProgress from './sub-components/CircularProgress';
import '../styles/dash.css';

import avatar1 from '../images/avatar/avatar1.png';
import avatar2 from '../images/avatar/avatar6.png';
import avatar3 from '../images/avatar/avatar5.png';
import avatar4 from '../images/avatar/avatar4.png';
import Bag from '../images/carousel-icone/bag.svg';
import Cart from '../images/carousel-icone/cart.svg';
import Triangle from '../images/carousel-icone/triangle.svg';
import Graph from '../images/carousel-icone/graph.svg';

// Constantes
const CARD_WIDTH = 324;
const NUM_CARDS = 6;

// Composant Card extrait
const Card = ({ children, position }: { children: ReactNode, position: number }) => (
  <div
    className="bg-white rounded-[10px] shadow-md p-4 m-2 w-[300px] h-[193px] absolute transition-none"
    style={{ transform: `translateX(${position}px)` }}
  >
    {children}
  </div>
);

// Composants pour chaque carte
const ManageStoreCard = () => (
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
);

const UserStatsCard = () => (
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
);

const SalesGraphCard = () => (
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
);

const Carousel = () => {
  const [cardPositions, setCardPositions] = useState(
    Array.from({ length: NUM_CARDS }, (_, i) => i * CARD_WIDTH)
  );
  const animationRef = useRef<number | null>(null);

  const cards = [
    <ManageStoreCard key="card-1" />,
    <UserStatsCard key="card-2" />,
    <SalesGraphCard key="card-3" />,
  ];

  const extendedCards = [...cards, ...cards];

  const animate = useCallback(() => {
    setCardPositions(prevPositions =>
      prevPositions.map((pos) => {
        const newPos = pos - 1;
        return newPos < -CARD_WIDTH ? (NUM_CARDS - 1) * CARD_WIDTH : newPos;
      })
    );
    animationRef.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [animate]);

  return (
    <div className="relative w-[90%] sm:w-[68%] h-[275px] mx-auto mt-[75px]">
      {/* Blurred Ellipse */}
      <div className="blurred-ellipse3"></div>
      {/* White sheet */}
      <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-[43px] w-[85%] h-[95%] bg-white rounded-[25px] opacity-20"></div>
      <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-[30px] w-[90%] h-[95%] bg-white rounded-[25px] opacity-50"></div>
      <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-[15px] w-[95%] h-[95%] bg-white rounded-[25px] opacity-80"></div>
      {/* Gradient rectangle */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#314EE7] to-[#FE9C9C] rounded-[25px] p-6 flex items-center justify-center">
        <div className="relative w-full h-full overflow-hidden">
          {extendedCards.map((card, index) => (
            <Card key={index} position={cardPositions[index]}>
              {card}
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;