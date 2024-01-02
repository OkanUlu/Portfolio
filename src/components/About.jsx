import React from 'react';
import { FaLinkedin, FaGithubSquare, FaCode, FaLink } from "react-icons/fa";
import { LuLightbulb } from "react-icons/lu";

const PARAGRAPH_CONTENT = [
  'I am a Computer Engineering graduate from Eskişehir Osmangazi University and am passionate about building responsive, modular components with React. I am proficient in HTML, CSS, and JavaScript and specialize in building dynamic, effective websites using tools like React, TailwindCSS, and Bootstrap 5.',
  'In addition, I have professional working knowledge in Docker, Kubernetes, Linux, Sci-kit learn, Pandas, Numpy, MongoDB, PostgreSQL, Shell Script and Git. When I\'m not coding, I unwind with video games and a good cup of coffee. I am dedicated to continuous learning and welcome new opportunities that align with my skills and passion.',
  'I am open to exciting positions - let\'s connect if you see a potential fit!'
];

const USED_SKILLS = ['React', 'Linux', 'Docker', 'Kubernetes', 'MongoDB', 'PostgreSQL', 'Shell Script', 'SCI-Kit Learn', 'JavaScript', 'Python'];
const LEARNED_SKILLS = ['Redux', 'Tensorflow', 'Keras'];

const SkillContainer = ({ icon, title, skills }) => (
  <div className='mb-7'>
    <div className='flex flex-row items-center mb-3 gap-2'>
      <div className='p-1 bg-primary rounded-sm text-white text-base sm:text-lg'>
        {icon}
      </div>
      <h3 className='font-bold text-lg sm:text-xl'>{title}</h3>
    </div>
    <div className='flex flex-wrap text-sm sm:text-base'>
      {skills.map((item, index) => (
        <p key={index} className='px-4 py-2 my-2 mr-2 font-medium bg-secondary rounded-2xl'>{item}</p>
      ))}
    </div>
  </div>
);

const About = () => (
  <div className='w-full pb-14'>
    <div className='w-full max-w-[1200px] mx-auto px-4'>
      <div className='flex flex-col items-center justify-center w-full mb-2 sm:mb-6 md:mb-14'>
        <h2 className='font-bold min-w-fit text-2xl sm:text-3xl md:text-4xl text-text mb-1'>About Me</h2>
        <p className='text-base sm:text-lg'>An Introduction to Myself</p>
      </div>
      <div className='grid md:grid-cols-3 gap-14 md:gap-7'>
        <div className='sm:min-w-[250px] row-start-2 md:row-start-1 flex flex-col p-3 bg-stone-200/50 '>
          <SkillContainer icon={<FaCode />} title='What I Use' skills={USED_SKILLS} />
          <SkillContainer icon={<LuLightbulb />} title='What I Have Learned' skills={LEARNED_SKILLS} />
        </div>
        <div className='md:col-span-2 text-sm xs:text-base sm:text-lg mt-6'>
          {PARAGRAPH_CONTENT.map((item, index) => (
            <p key={index} className='mb-5'>
              {item}
            </p>
          ))}
          <div className='flex flex-row gap-3 mt-7 items-end'>
            <div className='flex flex-row gap-2 text-2xl md:text-3xl text-gray-400'>
              <a href='https://www.linkedin.com/in/okan-ulu/' target='_blank' rel='noreferrer' aria-label='LinkedIn' className='hover:text-primary transition-colors duration-300'>
                <FaLinkedin />
              </a>
              <a href='https://github.com/OkanUlu' target='_blank' rel='noreferrer' aria-label='GitHub' className='hover:text-primary transition-colors duration-300'>
                <FaGithubSquare />
              </a>
            </div>
            <div className='w-fit text-base md:text-lg font-medium text-primary  hover:cursor-pointer hover:underline hover:underline-offset-2 transtion-all duration-300'>
              <a href='mailto:contact@okanulu.com' className='flex flex-row items-center gap-1'>
                <p>Let's Connect!</p>
                <i><FaLink /></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default About;
