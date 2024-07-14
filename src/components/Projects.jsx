
import React from "react";
import copeople from '../assets/capturecloud.png'
import yumi from '../assets/yumi.png'
import Footer from './Footer'

const ProjectCard = ({ image, title, description, git, technologies,live }) => {
    return (
        <div className="max-w-sm sm:max-w-sm md:max-w-sm bg-gray-900 border border-neutral-100 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            
            {title ==='Capture Cloud' && <a href="#">
                <img className="w-full rounded-t-lg h-auto object-cover " src={copeople} alt="" />
            </a>}
            {title ==='Yumi Chat' && <a href="#">
                <img className="w-full rounded-t-lg h-auto object-cover " src={yumi} alt="" />
            </a>}
            <div className="p-4 sm:p-6">
                <a href="#">
                    <h5 className="text-2xl sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-white bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-pink-500">{title}</h5>
                </a>
                <p className="font-normal text-sm sm:text-base md:text-lg text-gray-300 dark:text-gray-400">{description}</p>
            </div>
            <div className='m-2 sm:m-4 lg:m-6 flex justify-between'>
                <div className='flex flex-wrap gap-2 pl-1'>
                    {technologies.map((tag, index) => (
                        <p
                            key={`${index}-${tag}`}
                            className='text-[14px] text-blue-500'
                        >
                            #{tag}
                        </p>
                    ))}
                </div>
                <a href={git} className="text-red-300 border border-gray-200 rounded-lg shadow p-1 sm:p-2 lg:p-3 hover:text-green-500 duration-300 ">GitHub</a>
               <div className="flex flex-wrap gap-2 pl-2">
               {live && (
                <a href={live} className="text-red-300 border border-gray-200 rounded-lg shadow p-1 sm:p-2 lg:p-3 hover:text-green-500 duration-300 gap-2">LIVE</a>
               )} 
               </div>
            </div>
        </div>
    );
};
  
const Projects = () => {
    return (
        <div className="bg-black">
            <div className="flex flex-wrap gap-7 justify-center items-center m-12 p-12">
                {project.map((item, index) => (
                    <ProjectCard
                        key={index}
                        image={item.image}
                        title={item.title}
                        description={item.description}
                        links={item.links}
                        git={item.git}
                        live={item.live}
                        technologies={item.technologies}
                    />
                ))}
            </div>
            <Footer/>
        </div>
    );
}


export const project = [
    {
        title:'Capture Cloud',
        description:'Capture Cloud is a dynamic web application I crafted using React, Cloudinary, NextJs, Typescript. This project allows user to store there image on cloud, edit there image using Cloudinary AI feature and much more.',
        image: {copeople},
        git:'https://github.com/gauravpatill79/CaptureCloud',
        technologies:['ReactJS','Cloudinary','NextJs','Typescript']
    },
    {
        title:'Yumi Chat',
        description:'Capture Cloud is a dynamic web application I crafted using React, Cloudinary, NextJs, Typescript. This project allows user to store there image on cloud, edit there image using Cloudinary AI feature and much more.',
        image: {yumi},
        git:'https://github.com/gauravpatill79/YuMi-chat-app',
        live:"https://yumiping.netlify.app/",
        technologies:['ReactJS','Typescript','Firebase']
    },
   
]

export default Projects