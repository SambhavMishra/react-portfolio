import React from 'react';
import {useTypewriter} from 'react-simple-typewriter';
import {FaInstagram, FaLinkedin, FaTwitter, FaGithub} from "react-icons/fa"
import { SiPython, SiTensorflow, SiNumpy, SiPandas } from 'react-icons/si';

function LeftBanner() {
    const [text] = useTypewriter({
        words: ["Machine Learning Engineer.", "Web developer.", "Data Analyst."],
        loop: true,
        typeSpeed: 20,
        deleteSpeed: 10,
        delaySpeed: 2000,
    });
  return (
    <div className='w-1/2 flex flex-col  gap-20'>
    <div className='flex flex-col  gap-3'>
        <h4 className='text-2xl font-normal'>Hey there,</h4>
        <h1 className='text-6xl font-bold text-white'>
            Hi, I am {" "}
            <span className='text-designColor capitalize'>Sambhav Mishra</span>
        </h1>
        <h2 className='text-4xl font-bold text-white'>
            a <span className='text-designColor'>{text}</span>
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
        I delve into the fascinating world of machine learning and utilize a diverse range of techniques including classification, regression, and clustering. My primary objective is to develop intelligent models that possess the ability to learn from vast amounts of data, thereby alleviating the need for laborious human involvement in various complex tasks. 
        </p>
    </div>
    <div className='flex justify-between'>
        <div>
        <h2 className='text-base uppercase font-titleFont mb-4'>
            Find me in
        </h2>
        <div className="flex gap-4">
            <span className="bannerIcon">
                <FaLinkedin/>
            </span>
            <span className="bannerIcon">
                <FaGithub/>
            </span>
            <span className="bannerIcon">
                <FaInstagram/>
            </span>
            <span className="bannerIcon">
                <FaTwitter/>
            </span>
        </div>
        </div>
        <div>
        <h2 className='text-base uppercase font-titleFont mb-4'>
            Best skills on
        </h2>
        <div className="flex gap-4">
            <span className="bannerIcon">
                <SiPython/>
            </span>
            <span className="bannerIcon">
                <SiNumpy/>
            </span>
            <span className="bannerIcon">
                <SiPandas/>
            </span>
            <span className="bannerIcon">
                <SiTensorflow/>
            </span>
            </div>
        </div>
    </div>
</div>
  );
}

export default LeftBanner;
