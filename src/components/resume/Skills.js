import React from 'react';
import { motion } from 'framer-motion';

function Skills() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: .5 } }} className="flex gap-20">
      <div className='w-1/2'>
        <div className="py-12 font-titleFont gap-20">
          <p className="text-sm text-designColor tracking-[4px]">2007 - 2023</p>
          <h2 className="text-4xl font-bold">Machine Learning and AI</h2>
        </div>
        <div className="mt-8 w-full flex flex-col gap-6">
          <div className='overflow-x-hidden'>
            <p className='text-sm uppercase font-medium'>Python</p>
            <motion.span 
            initial = {{x: "-100%", opacity: 0}}
            animate = {{x: 0, opacity: 1}}
            transition={{duration: 0.5, delay: 0.5}}
            className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
              <motion.span className='w-full h-full bg-gradient-to-r from-red via-sky to-blue rounded-md relative'>
              <motion.span className='absolute -top-9 right-0'>100%</motion.span>
              </motion.span>
            </motion.span>
          </div>

          <div className='overflow-x-hidden'>
            <p className='text-sm uppercase font-medium'>Statistics</p>
            <motion.span 
                        initial = {{x: "-100%", opacity: 0}}
                        animate = {{x: 0, opacity: 1}}
                        transition={{duration: 0.5, delay: 0.5}}
            className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
              <motion.span className='w-[90%] h-full bg-gradient-to-r from-red via-sky to-blue rounded-md relative'>
              <motion.span className='absolute -top-9 right-0'>90%</motion.span>
              </motion.span>
            </motion.span>
          </div>

          <div className='overflow-x-hidden'>
            <p className='text-sm uppercase font-medium'>Python</p>
            <motion.span 
                        initial = {{x: "-100%", opacity: 0}}
                        animate = {{x: 0, opacity: 1}}
                        transition={{duration: 0.5, delay: 0.5}}
            className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
              <motion.span className='w-full h-full bg-gradient-to-r from-red via-sky to-blue rounded-md relative'>
              <motion.span className='absolute -top-9 right-0'>100%</motion.span>
              </motion.span>
            </motion.span>
          </div>

          <div className='overflow-x-hidden'>
            <p className='text-sm uppercase font-medium'>Python</p>
            <motion.span 
                        initial = {{x: "-100%", opacity: 0}}
                        animate = {{x: 0, opacity: 1}}
                        transition={{duration: 0.5, delay: 0.5}}
            className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
              <motion.span className='w-full h-full bg-gradient-to-r from-red via-sky to-blue rounded-md relative'>
              <motion.span className='absolute -top-9 right-0'>100%</motion.span>
              </motion.span>
            </motion.span>
          </div>

          <div className='overflow-x-hidden'>
            <p className='text-sm uppercase font-medium'>Python</p>
            <motion.span 
                        initial = {{x: "-100%", opacity: 0}}
                        animate = {{x: 0, opacity: 1}}
                        transition={{duration: 0.5, delay: 0.5}}
            className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
              <motion.span className='w-full h-full bg-gradient-to-r from-red via-sky to-blue rounded-md relative'>
              <motion.span className='absolute -top-9 right-0'>100%</motion.span>
              </motion.span>
            </motion.span>
          </div>
        </div>
      </div>





      <div className='w-1/2'>
        <div className="py-12 font-titleFont gap-20">
          <p className="text-sm text-designColor tracking-[4px]">2022 - 2023</p>
          <h2 className="text-4xl font-bold">Web Development</h2>
        </div>
        <div className="mt-8 w-full flex flex-col gap-6">
          <div className='overflow-x-hidden'>
            <p className='text-sm uppercase font-medium'>Python</p>
            <motion.span 
                        initial = {{x: "-100%", opacity: 0}}
                        animate = {{x: 0, opacity: 1}}
                        transition={{duration: 0.5, delay: 0.5}}
            className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
              <motion.span className='w-full h-full bg-gradient-to-r from-red via-sky to-blue rounded-md relative'>
              <motion.span className='absolute -top-9 right-0'>100%</motion.span>
              </motion.span>
            </motion.span>
          </div>

          <div className='overflow-x-hidden'>
            <p className='text-sm uppercase font-medium'>Statistics</p>
            <motion.span 
                        initial = {{x: "-100%", opacity: 0}}
                        animate = {{x: 0, opacity: 1}}
                        transition={{duration: 0.5, delay: 0.5}}
            className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
              <motion.span className='w-[90%] h-full bg-gradient-to-r from-red via-sky to-blue rounded-md relative'>
              <motion.span className='absolute -top-9 right-0'>90%</motion.span>
              </motion.span>
            </motion.span>
          </div>

          <div className='overflow-x-hidden'>
            <p className='text-sm uppercase font-medium'>Python</p>
            <motion.span 
                        initial = {{x: "-100%", opacity: 0}}
                        animate = {{x: 0, opacity: 1}}
                        transition={{duration: 0.5, delay: 0.5}}              

            className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
              <motion.span className='w-full h-full bg-gradient-to-r from-red via-sky to-blue rounded-md relative'>
              <motion.span className='absolute -top-9 right-0'>100%</motion.span>
              </motion.span>
            </motion.span>
          </div>

          <div className='overflow-x-hidden'>
            <p className='text-sm uppercase font-medium'>Python</p>
            <motion.span 
                        initial = {{x: "-100%", opacity: 0}}
                        animate = {{x: 0, opacity: 1}}
                        transition={{duration: 0.5, delay: 0.5}}
            className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
              <motion.span className='w-full h-full bg-gradient-to-r from-red via-sky to-blue rounded-md relative'>
              <motion.span className='absolute -top-9 right-0'>100%</motion.span>
              </motion.span>
            </motion.span>
          </div>

          <div className='overflow-x-hidden'>
            <p className='text-sm uppercase font-medium'>Python</p>
            <motion.span 
                        initial = {{x: "-100%", opacity: 0}}
                        animate = {{x: 0, opacity: 1}}
                        transition={{duration: 0.5, delay: 0.5}}
            className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
              <motion.span className='w-full h-full bg-gradient-to-r from-red via-sky to-blue rounded-md relative'>
              <motion.span className='absolute -top-9 right-0'>100%</motion.span>
              </motion.span>
            </motion.span>
          </div>
        </div>
      </div>


    </motion.div>
  );
}

export default Skills;
