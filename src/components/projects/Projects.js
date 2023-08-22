import React from 'react';
import Title from '../layouts/Title';
import ProjectCard from './ProjectCard';
import { ComputerVision, nlp } from '../../assets';

function Projects() {
  return (
    <section
      id="projects"
      className='w-full py-20 border-b-[1px] border-b-black'
    >
      <div className='flex justify-center text-center items-center'>
        <Title title="Take a look at what I do" description={"My projects"} />
      </div>

        <div className='grid grid-cols-3 gap-14'>
          <ProjectCard
            title="Computer Vision Projects"
            desc="In computer vision projects, I work on things like image processing, image classification, multiple class image classification, use of image processing libraries such as open cv to build tools to help with image related work."
            src={ComputerVision}
          />

          <ProjectCard
            title="NLP Projects"
            desc="Look at some of my natural language processing projects such as youtube comment summarizer and duplicate question pair finder. These work on deep learning and machine learning principles. You would definitely like them."
            src={nlp}
          />

          <ProjectCard
            title="Data Analysis Projects"
            desc="In data analysis projects I work on finding statistics and insights on stuff like spend analysis, sales analysis, supply chain management and find trends using available data."
            src={ComputerVision}
          />

          <ProjectCard
            title="Web Development Projects"
            desc="In web development projects I work on various web designs to make nice websites that have beautiful user interface and slick user experiences."
            src={ComputerVision}
          />

          <ProjectCard
            title="Animation Projects"
            desc="In animation projects I create animations for social messages, entertainment and publicity purpose. Animations are a great way to publicise ones products and gain audience."
            src={ComputerVision}
          />

          <ProjectCard
            title="Graphic Design"
            desc="In graphic desing I work on user interface related stuff like logos, characters and so on."
            src={ComputerVision}
          />
        </div>


    </section>

  );
}

export default Projects;
