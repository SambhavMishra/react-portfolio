import React from "react";
import Title from "../layouts/Title";
import ResumeCard from "./ResumeCard";

const Resume = () => {
  return (
    <section id="resume" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title title="LEARN MORE ABOUT ME" description="My Resume" />
      </div>
      <div className="mt-14 w-1/2 h-[1000px] border-l-[6px] border-l-dark border-opacity-30 flex flex-col gap-10">
        <ResumeCard
          title="Pursuing B.Tech Computer Science and Engineering (AIML)"
          subtitle="Shri Ramdeobaba College of Engineering and Management"
          result="8.44/10"
          desc="Pursuing excellence in computer sciences, especially in Artificial Intelligence and Machine Learning. Also learning web development, cloud computing, version management, and blockchain."
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
    </section>
  );
};

export default Resume;





















// import React from "react";
// import Title from "../layouts/Title";
// import ResumeCard from "./ResumeCard";

// const Resume = () => {
//   return (
//     <section id="resume" className="w-full py-20 border-b-[1px] border-b-black">
//       <div className="flex justify-center items-center text-center">
//         <Title title="LEARN MORE ABOUT ME" description="My Resume" />
//       </div>
//       <div>
//         <ul className="w-full grid grid-cols-4">
//           <li className="resumeli">Education</li>
//           <li className="resumeli">Professional skills</li>
//           <li className="resumeli">Experience</li>
//           <li className="resumeli">Achievements</li>
//         </ul>
//       </div>
//       <div className="py-12 font-titleFont">
//         <p className="text-sm text-designColor tracking-[4px]">2017-2023</p>
//         <h2 className="text-4xl font-bold">Education Quality</h2>
//       </div>
//       <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-dark border-opacity-30 flex flex-col-10 gap-10">
//         <ResumeCard
//         title = "Pursuing B.Tech Computer Science and Engineering (AIML)"
//         subtitle = "Shri Ramdeobaba College of Engineering and Management"
//         result = "8.44/10"
//         desc = "Pursuing excellence in computer sciences, especially in Artificial Intelligence and Machine Learning. Also learning web development, cloud computing, version management and blockchain."
//         />
//         <ResumeCard
//         title = "Higher Secondary Certificate in Science"
//         subtitle = "The Swaminarayan School"
//         result = "80.04/100"
//         desc = "Completed HSC with subjects maths, physics, chemistry, english and computer science."
//         />
//         <ResumeCard
//         title = "Secondary School Certificate from CBSE board"
//         subtitle = "Khubchand Bajaj Central Public School"
//         result = "89/100"
//         desc = "Completed SSC with Maths, Science, Social Studies, English and Hindi subjects."
//         />
//       </div>
//     </section>
//   );
// };

// export default Resume;



