import React from 'react';
import Title from '../layouts/Title';
import ProjectCard from './ProjectCard';
import { ComputerVisionFinal3 } from '../../assets';

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
            src={ComputerVisionFinal3}
          />

          <ProjectCard
            title="Natural Language Processing Projects"
            desc="In natural language processing, I work on using nlp tools to come with solutions such as chatbots, question answering systems, sentiment analysis and so on."
            src={ComputerVisionFinal3}
          />

          <ProjectCard
            title="Data Analysis Projects"
            desc="In data analysis projects I work on finding statistics and insights on stuff like spend analysis, sales analysis, supply chain management and find trends using available data."
            src={ComputerVisionFinal3}
          />

          <ProjectCard
            title="Web Development Projects"
            desc="In web development projects I work on various web designs to make nice websites that have beautiful user interface and slick user experiences."
            src={ComputerVisionFinal3}
          />

          <ProjectCard
            title="Animation Projects"
            desc="In animation projects I create animations for social messages, entertainment and publicity purpose. Animations are a great way to publicise ones products and "
            src={ComputerVisionFinal3}
          />

          <ProjectCard
            title="Graphic Design"
            desc="In graphic desing I work on user interface related stuff like logos, characters and so on."
            src={ComputerVisionFinal3}
          />
        </div>


    </section>

  );
}

export default Projects;
