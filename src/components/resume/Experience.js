import React from 'react';
import ResumeCard from './ResumeCard';
import {motion} from 'framer-motion';

function Experience() {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1, transition: {duration: .5}}} className="flex gap-20">
    <div>
    <div className="py-12 font-titleFont gap-20">
      <p className="text-sm text-designColor tracking-[4px]">2007 - 2023</p>
      <h2 className="text-4xl font-bold">Experience</h2>
    </div>
    <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-dark border-opacity-30 flex flex-col gap-10">
      <ResumeCard
        title="Pursuing B.Tech Computer Science and Engineering (AIML)"
        subtitle="Shri Ramdeobaba College of Engineering and Management"
        result="8.48/10"
        desc="Pursuing excellence in computer sciences, especially in Artificial Intelligence and Machine Learning. Also pursuing my honors degree in full stack web development."
      />
      <ResumeCard
        title="Higher Secondary Certificate in Science"
        subtitle="The Swaminarayan School"
        result="80.04/100"
        desc="Completed HSC with subjects maths, physics, chemistry, English, and computer science."
      />
      <ResumeCard
        title="Secondary School Certificate from CBSE board"
        subtitle="Khubchand Bajaj Central Public School"
        result="89/100"
        desc="Completed SSC with Maths, Science, Social Studies, English, and Hindi subjects."
      />
    </div>
    </div>


    <div>
    <div className="py-12 font-titleFont gap-20">
      <p className="text-sm text-designColor tracking-[4px]">2022 - 2023</p>
      <h2 className="text-4xl font-bold">Job Experience</h2>
    </div>
    <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-dark border-opacity-30 flex flex-col gap-10">
      <ResumeCard
        title="Data Analyst"
        subtitle="Solar Industries India Limited 10-2022 - 04-2023"
        result="Nagpur"
        desc="Worked on spend analysis, analyzed critical materials in supply chain material procurements. Gained experience working with pandas, numpy, powerbi, excel, plotly and much more."
      />
      <ResumeCard
        title="Computer Vision"
        subtitle="Freelancer 06-2023 - Present"
        result="Nagpur"
        desc="Working on computer vision projects such as object detection, segmentation, tracking for companies ."
      />
      <ResumeCard
        title="Machine Learning Lectures"
        subtitle="In co-operation with Progressia"
        result="Nagpur"
        desc="I share my knowledge with juniors on online and offline workshops. Take hands on machine learning and deep learning workshops."
      />
    </div>
    </div>


    </motion.div>
  );
}

export default Experience;
