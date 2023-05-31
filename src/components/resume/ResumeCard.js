import React from 'react';

function ResumeCard({ title, subtitle, result, desc }) {
  return (
    <div className='w-full h-1/3 group flex'>
      <div className='w-10 h-[6px] bgOpacity mt-16 relative'>
        <span className='absolute w-5 h-5 rounded-full -top-2 -left-3 flex justify-center items-center bg-dark bg-opacity-60'>
          <span className='w-3 h-3 rounded-full bg-bodyColor inline-flex group-hover:bg-designColor duration-300'></span>
        </span>
      </div>
      <div className='w-full bg-dark bg-opacity-20 hover:bg-opacity-30 duration-300 rounded-lg px-10 flex flex-col justify-center gap-19 shadow-shadowOne'>
        <div className='flex justify-between items-center my-6'>
          <div>
            <h3 className='text-2xl font-semibold group-hover:text-white duration-300'>{title}</h3>
            <p className='text-sm mt-2 text-gray-300 group-hover:text-white duration-300'>
              {subtitle}
            </p>
          </div>
        <div>
          <p className='w-20 h-10 text-designColor bg-dark bg-opacity-25 rounded-lg flex justify-center items-center shaddow-shadowOne text-sm font-medium'>{result}</p>
        </div>
        </div>
        <p>{desc}</p>
      </div>
    </div>
  );
}

export default ResumeCard;