import React from 'react';
import Title from '../layouts/Title';
import Card from './Card';
import { FaGlobe } from "react-icons/fa";
import { BsDatabaseCheck, BsFillCloudCheckFill } from "react-icons/bs";
import { AiFillRobot } from "react-icons/ai";
import {  SiProgress } from "react-icons/si";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";

function Features() {
  return (
    <section id="features" 
    // className='w-full py-20 mx-auto border-b-[1px] border-b-gray gap-20'
    className='w-full  pt-10 pb-5 bg-black mx-auto  justify-between items-center font-titleFont border-b-[1px] border-b-gray'
    >
     <Title title="Features" description="What I offer"/>

     <div className="grid grid-cols-3 gap-20">
        <Card
        title="Data Preprocessing"
        des = "Preprocesing the data so that the machine learning models can be trained more easily, efficiently and produce better results."
        icon = {<BsDatabaseCheck/>}
        />
        <Card 
        title = "Model Training"
        des = "Training the model by using the given data and applying machine learning algorithms on them."
        icon = {<AiFillRobot/>}
        />
        <Card
        title = "Model Validation"
        des = "Validating if the trained machine learning model is trained properly and what can improved in the given models."
        icon = {<IoCheckmarkDoneCircleSharp/>}
        />
        <Card
        title = "Web Development"
        des = "Creating websites that are attractive, easy to use and responsive"
        icon = {<FaGlobe/>}
        />
        <Card
        title = "Deployment"
        des = "Deploying the created application on internet so that the people can see and use them."
        icon = {<BsFillCloudCheckFill/>  }
        />
        <Card
        title = "Search Engine Optimization"
        des = "Performing search engine optimization on the product so that the users can easily find the product and enjoy it."  
        icon = {<SiProgress/>}
        />
     </div>
    </section>
  );
}

export default Features;
