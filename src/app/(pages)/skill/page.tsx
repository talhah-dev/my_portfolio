import BodyWrapper from '@/app/bodyWrapper'
import Image from 'next/image'
import React from 'react'

const Skill = () => {

    const skills = [
        { name: 'React', icon: '/react.svg' },
        { name: 'Node Js', icon: '/nodedotjs.svg' },
        { name: 'Express Js', icon: '/express.svg' },
        { name: 'Next Js', icon: '/nextdotjs.svg' },
        { name: 'Redux', icon: '/redux.png' },
        { name: 'Docker', icon: '/docker.svg' },
        { name: 'MongoDB', icon: '/mongodb.svg' },
        { name: 'Typescript', icon: '/typescript.svg' },
        { name: 'javascript', icon: '/javascript.svg' },
        { name: 'Github', icon: '/github.svg' },
        { name: 'Git', icon: '/git.svg' },
        { name: 'Tailwind', icon: '/tailwindcss.svg' },
        { name: 'Firebase', icon: '/firebase.svg' },
        { name: 'AWS', icon: '/aws.png' },
        { name: 'C', icon: '/c.svg' },
        { name: 'C++', icon: '/cplusplus.svg' },
        { name: 'Python', icon: '/python.svg' },
        { name: 'Three Js', icon: '/threedotjs.svg' },
        { name: 'Zod', icon: '/zod.svg' },
        { name: 'Sass', icon: '/sass.png' },
        { name: 'HTML5', icon: '/html5.svg' },
        { name: 'CSS3', icon: '/css.svg' },
        { name: 'Bootstarp', icon: '/bootstrap.svg' },
        { name: 'Clerk', icon: '/clerk.svg' },
        { name: 'Cloudinary', icon: '/cloudinary.svg' },
    ];

    return (
        <BodyWrapper>
            <div className="px-5 pb-6 lg:pt-0 pt-5">
                <h2 className='lg:text-3xl text-2xl lg:font-semibold font-medium text-zinc-300'>Tech Stack</h2>
                <div className="w-16 lg:w-20 h-1.5 lg:mt-3 rounded-full bg-zinc-800 mt-2"></div>
                <div className="grid xl:grid-cols-7 lg:grid-cols-5 lg:grid-cols-3 grid-cols-2 gap-3 lg:mt-8 mt-6">

                    {
                        skills.map((skill, index) => (
                            <div key={index} className="w-full flex-col gap-3 flex items-center justify-center bg-zinc-800 p-5 rounded-lg">
                                <Image width={60} height={60} src={skill.icon} className='invert brightness-0 mx-auto' alt={`${skill.name} logo`} />
                                <p className='text-zinc-500 text-nowrap text-center font-medium text-sm'>{skill.name}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </BodyWrapper>
    )
}

export default Skill