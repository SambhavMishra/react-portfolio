import React from 'react';
import { PortfolioImage2 } from '../../assets';
const RightBanner = () => {
    return (
        <div className='w-1/2  flex justify-center items-center relative'>
            <img
                className='w-[580px] h-[680px] z-10'
                src={PortfolioImage2} alt="PortfolioImage2" />
            <div className='absolute bottom-0 w-[500px] h-[500px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center'>
            </div>
        </div>
    );
}

export default RightBanner;
