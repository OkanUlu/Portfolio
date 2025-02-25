import React from 'react'
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { FaCode, FaLink } from "react-icons/fa6";
import { LuLightbulb } from "react-icons/lu";

const PARAGRAPH_CONTENT = [
  'I am a Computer Engineering graduate from Eskişehir Osmangazi University and am passionate about building responsive, modular components with React. I am proficient in HTML, CSS, and JavaScript and specialize in building dynamic, effective websites using tools like React, TailwindCSS, and Bootstrap 5.',
  'In addition, I have professional working knowledge in Docker, Kubernetes, Linux, Sci-kit learn, Pandas, Numpy, MongoDB, PostgreSQL, Shell Script and Git. When I\'m not coding, I unwind with video games and a good cup of coffee. I am dedicated to continuous learning and welcome new opportunities that align with my skills and passion.',
  'I am open to exciting positions - let\'s connect if you see a potential fit!'
];

const USED_SKILLS = ['React', 'Linux', 'Docker', 'Kubernetes', 'MongoDB', 'PostgreSQL', 'Shell Script', 'NginX', 'SCI-Kit Learn', 'JavaScript', 'Python', 'CPanel/WHM'];
const LEARNED_SKILLS = ['Redux', 'Tensorflow', 'Keras'];

const About = () => {
  return (
    <div id='about' className='w-full py-11 sm:pb-14'>
      <div className='w-full max-w-[1200px] mx-auto px-4 text-text dark:text-darkText'>
        <div className='flex flex-col items-center justify-center w-full mb-10'>
          <h2 className='header'>About Me</h2>
          <p className='sub-header'>An Introduction to Myself</p>
        </div>
        <div className='grid md:grid-cols-3 gap-14 md:gap-7 items-center'>
          {/* Beginning of Skills Container*/} 
          <div className='sm:min-w-[250px] row-start-2 md:row-start-1 flex flex-col p-3 bg-stone-200/50 dark:bg-gray-900'>
            <div id='skill-container-1' className='mb-7'>
              <div className='flex flex-row items-center mb-3 gap-2'>
                <div className='p-1 bg-primary dark:bg-primary rounded-sm text-darkText text-sm'>
                  <FaCode />
                </div>
                <h3 className='font-bold text-sm'>What I Use</h3>
              </div>
              <div className='flex flex-wrap text-xs'>
                {USED_SKILLS.map((item, index) => {
                  return (
                    <p key={index} className='px-3 py-1 my-2 mr-2 font-medium bg-secondary dark:bg-darkSecondary rounded-2xl'>{item}</p>
                  )
                })}
              </div>
            </div>
            <div id='skill-container-2'>
              <div className='flex flex-row items-center mb-3 gap-2'>
                <div className='p-1 bg-primary rounded-sm text-darkText text-sm'>
                  <LuLightbulb />
                </div>
                <h3 className='font-bold text-sm'>What I Have Learned</h3>
              </div>
              <div className='flex flex-wrap text-xs'>
                {LEARNED_SKILLS.map((item, index) => {
                  return (
                    <p key={index} className='px-3 py-1 my-2 mr-2  font-medium bg-secondary dark:bg-darkSecondary rounded-2xl'>{item}</p>
                  )
                })}
              </div>
            </div>
          </div>
          {/* End of Skills Container */}

          {/* About Me Paragraph */}
          <div className='md:col-span-2 paragraph'>
            {PARAGRAPH_CONTENT.map((item, index) => {
              return (
                <p className='mb-5'>
                  {item}
                </p>
              )
            })}
            <div className='flex flex-row gap-3 mt-7 items-end'>
              <div className='flex flex-row gap-1 text-2xl md:text-3xl text-gray-400 dark:text-gray-300'>
                <a href='https://www.linkedin.com/in/okan-ulu/' target='_blank' rel='noreferrer' className='hover:text-primary transition-colors duration-300'><FaLinkedin /></a>
                <a href='https://github.com/OkanUlu' target='_blank' rel='noreferrer' className='hover:text-primary transition-colors duration-300'><FaGithubSquare /></a>
              </div>
              <div className='w-fit text-sm md:text-base font-medium text-primary dark:text-darkPrimary  hover:cursor-pointer hover:underline hover:underline-offset-2 transtion-all duration-300'>
                <a href='mailto:contact@okanulu.com' className='flex flex-row items-center gap-1'>
                  <p>Let's Connect!</p>
                  <i><FaLink /></i>
                </a>
              </div>
            </div>
          </div>
          {/* End of About Me Paragraph */}
        </div>
      </div>
    </div>
  )
}

export default About