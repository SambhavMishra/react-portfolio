import React from 'react';
import LeftBanner from './LeftBanner';
import RightBanner from './RightBanner';


function Banner() {
  return (
    <section id="home" className='w-full  pt-10 pb-5 bg-black mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray'>
        <LeftBanner/>
        <RightBanner/>
    </section>
  );
}

export default Banner;
