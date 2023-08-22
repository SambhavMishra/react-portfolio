import React from "react";
import Title from "../layouts/Title";
import Education from "./Education";
import Skills from "./Skills"
import Achievements from "./Achievements";
import Experience from "./Experience";
import { useState } from "react";



const Resume = () => {
  const [educationData, setEducationData] = useState(true);
  const [skillData, setSkillData] = useState(false);
  const [experienceData, setExperienceData] = useState(false);
  const [achievementsData, setAchievementsData] = useState(false);


  return (
    <section id="resume" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title title="LEARN MORE ABOUT ME" description="My Resume" />
      </div>
      <div>
        <ul className="w-full grid grid-cols-4">

          <li 
          onClick = {() =>  
          setEducationData(true) &
          setSkillData(false) &
          setExperienceData(false) &
          setAchievementsData(false)
          } 
          className={`${educationData ? "border-designColor rounded-lg" : "border-dark"} resumeli`}>Education
          </li>

          <li 
          onClick = {() =>  
          setEducationData(false) &
          setSkillData(true) &
          setExperienceData(false) &
          setAchievementsData(false)
          } 
          className={`${skillData ? "border-designColor rounded-lg" : "border-dark"} resumeli`}>
          Professional Skills
          </li>

          <li 
          onClick={() => 
          setEducationData(false) &
          setSkillData(false) &
          setExperienceData(true) &
          setAchievementsData(false)
          } 
          className={`${experienceData ? "border-designColor rounded-lg" : "border-dark"} resumeli`}>
          Experience
          </li>

          <li 
          onClick={() => 
          setEducationData(false) &
          setSkillData(false) &
          setExperienceData(false) &
          setAchievementsData(true)
          } 
          className={`${achievementsData   ? "border-designColor rounded-lg" : "border-dark"} resumeli`}>
          Achievements
          </li>

        </ul>
      </div>

      {
        educationData && <Education/>
      }

      {
        skillData && <Skills/>
      }

      {
        experienceData && <Experience/>
      }

      {
        achievementsData && <Achievements/>
      }
      
    </section>
  );
};

export default Resume;




















