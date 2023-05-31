import React from 'react';

function ProjectCard({ title, desc, src }) {
    return (
        <div >
            <div className='w-full px-12 py-10 rounded-lg shadow-shadowOne flex flex-col items-center bg-gradient-to-r from-bodyColor to-[#221e22] group hover:bg-gradient-to-b hover:from-black hover:to-[#1e2024] transition-colors duration-1000' style={{height:"450px"}}>
                <div className='w-full h-[80%] overflow-hidden rounded-lg'>
                    <img
                        className='w-full h-60 object-cover group-hover:scale-110 duration-300'
                        src={src} alt="src" />
                </div>
                <div className='w-full mt-5 flex flex-col gap-6'>
                    <div className='w-full mt-5 '>
                        <h3 className='text-base uppercase text-designColor font-normal'>{title}</h3>
                    </div>
                </div>
                <div>
                    <p className='text-sm tracking-wide mt-3 hover:text-gray-100 duration-300'>{desc}</p>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;
