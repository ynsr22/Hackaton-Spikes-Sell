import React from 'react';
import Billet from '../images/feature-icone/billet.png';
import Boite from '../images/feature-icone/boite.png';
import Coeur from '../images/feature-icone/heart.png';
import Www from '../images/feature-icone/www.png';

interface Feature {
  imgSrc: string;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    imgSrc: Billet,
    title: 'Save time & Reduce cost',
    description: 'Building your own online store, shopping cart, checkout, and licensing is time-consuming',
  },
  {
    imgSrc: Boite,
    title: 'More features',
    description: 'We simplify all that by combining all of the features and solutions you need to sell',
  },
  {
    imgSrc: Coeur,
    title: 'Sell your popular product more',
    description: 'Designed from the ground up to be easy to use and quick to set up for sellers',
  },
  {
    imgSrc: Www,
    title: 'Sell it across the Globe',
    description: 'Expand into new global markets with ease when you automatically display popular pricing',
  },
];

const FeatureItem: React.FC<Feature> = ({ imgSrc, title, description }) => (
  <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left space-y-4 md:space-y-0 md:space-x-4">
    <img src={imgSrc} alt={title} className="w-12 h-12 md:w-16 md:h-16 mt-2" />
    <div>
      <h3 className="text-dmSans font-[700] text-[14px] md:text-[16px] leading-[18px] md:leading-[20.3px] text-black mb-2">{title}</h3>
      <p className="text-dmSans font-[500] text-[12px] w-[80%] sm:w-[100%] md:text-[14px] leading-[16px] md:leading-[17.4px] text-[#626262] mx-auto text-center md:text-justify">{description}</p>
    </div>
  </div>
);

const Features: React.FC = () => {
  return (
    <div className="container max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-black font-delaGothicOne font-[400] text-[24px] md:text-[32px] leading-[28px] md:leading-[36.26px] mb-8 text-center">Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {features.map((feature, index) => (
          <FeatureItem key={index} {...feature} />
        ))}
      </div>
    </div>
  );
};

export default Features;