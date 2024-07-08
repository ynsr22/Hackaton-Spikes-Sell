// Import React
import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { ReactNode } from 'react';

// Import du style
import '../styles/dash.css';

// Import des cartes
import { ManageStoreCard } from './sub-components/ManageStoreCard';
import { UserStatsCard } from './sub-components/UserStatsCard';
import { SalesGraphCard } from './sub-components/SalesGraphCard';

// Constantes
const CARD_WIDTH = 324;
const NUM_CARDS = 6;
const ANIMATION_SPEED = 1;
const FRAME_DURATION = 16;

// Types
interface CardProps {
  children: ReactNode;
  position: number;
}

// Composant Cartes
const Card = React.memo(({ children, position }: CardProps) => (
  <div
    className="bg-white rounded-[10px] shadow-md p-4 m-2 w-[300px] h-[193px] absolute transition-none"
    style={{ transform: `translateX(${position}px)` }}
    role="region"
    aria-label="Card Content"
  >
    {children}
  </div>
));

// Animation Carrousel
const Carrousel = () => {
  const [isAnimating, setIsAnimating] = useState(true);
  const animationRef = useRef<number | null>(null);
  const lastFrameTimeRef = useRef<number | null>(null);
  const positionsRef = useRef(Array.from({ length: NUM_CARDS }, (_, i) => i * CARD_WIDTH));

  const cards = useMemo(() => [
    <ManageStoreCard key="card-1" />,
    <UserStatsCard key="card-2" />,
    <SalesGraphCard key="card-3" />,
  ], []);

  const extendedCards = useMemo(() => [...cards, ...cards], [cards]);

  const animate = useCallback((timestamp: number) => {
    if (!lastFrameTimeRef.current) lastFrameTimeRef.current = timestamp;
    const deltaTime = timestamp - lastFrameTimeRef.current;

    if (deltaTime >= FRAME_DURATION) {
      positionsRef.current = positionsRef.current.map((pos) => {
        const newPos = pos - ANIMATION_SPEED;
        return newPos < -CARD_WIDTH ? (NUM_CARDS - 1) * CARD_WIDTH : newPos;
      });

      setCardPositions([...positionsRef.current]);
      lastFrameTimeRef.current = timestamp;
    }

    if (isAnimating) {
      animationRef.current = requestAnimationFrame(animate);
    }
  }, [isAnimating]);

  useEffect(() => {
    if (isAnimating) {
      animationRef.current = requestAnimationFrame(animate);
    }
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [animate, isAnimating]);

  const [cardPositions, setCardPositions] = useState(positionsRef.current);

  const handleMouseEnter = () => {
    setIsAnimating(false);
  };

  const handleMouseLeave = () => {
    setIsAnimating(true);
  };

  return (
    <div
      className="relative w-[90%] sm:w-[68%] h-[275px] mx-auto mt-[75px] max-w-4xl"
    >
      <div className="blurred-ellipse3"></div>

      {/* Rectangle blanc */}
      <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-[43px] w-[85%] h-[95%] bg-white rounded-[25px] opacity-20 max-w-3xl"></div>
      <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-[30px] w-[90%] h-[95%] bg-white rounded-[25px] opacity-50 max-w-4xl"></div>
      <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-[15px] w-[95%] h-[95%] bg-white rounded-[25px] opacity-80 max-w-5xl"></div>

      {/* Rectangle gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#314EE7] to-[#FE9C9C] rounded-[25px] py-[33px] flex items-center justify-center max-w-5xl"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            role="region"
            aria-label="Carousel">
  <div className="relative w-full h-full overflow-hidden">
    {extendedCards.map((card, index) => (
      <Card key={index} position={cardPositions[index % NUM_CARDS]}>
        {card}
      </Card>
    ))}

  </div>
  <div className="rounded-l-[25px] absolute inset-y-0 left-0 w-[100px] bg-gradient-to-r from-[#314EE7] to-transparent pointer-events-none"></div>
  <div className="rounded-r-[25px] absolute inset-y-0 right-0 w-[100px] bg-gradient-to-l from-[#FE9C9C] to-transparent pointer-events-none"></div>

</div>
    </div>
  );
};

export default Carrousel;
