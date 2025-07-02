import BodyWrapper from '@/app/bodyWrapper'
import Image from 'next/image'
import React from 'react'

const Skill = () => {

    const skills = [
        { name: 'React', icon: '/react.svg' },
        { name: 'Node Js', icon: '/nodedotjs.svg' },
        { name: 'Express Js', icon: '/express.svg' },
        { name: 'Next Js', icon: '/nextdotjs.svg' },
        { name: 'C', icon: '/c.svg' },
        { name: 'Docker', icon: '/docker.svg' },
        { name: 'C++', icon: '/cplusplus.svg' },
        { name: 'Git', icon: '/git.svg' },
        { name: 'Github', icon: '/github.svg' },
        { name: 'javascript', icon: '/javascript.svg' },
        { name: 'Python', icon: '/python.svg' },
        { name: 'MongoDB', icon: '/mongodb.svg' },
        { name: 'Three Js', icon: '/threedotjs.svg' },
        { name: 'Typescript', icon: '/typescript.svg' },
        { name: 'Zod', icon: '/zod.svg' },
        { name: 'HTML5', icon: '/html5.svg' },
        { name: 'CSS3', icon: '/css.svg' },
        { name: 'Bootstarp', icon: '/bootstrap.svg' },
        { name: 'Clerk', icon: '/clerk.svg' },
        { name: 'Cloudinary', icon: '/cloudinary.svg' },
        { name: 'Tailwind', icon: '/tailwindcss.svg' },
        { name: 'Firebase', icon: '/firebase.svg' },
    ];

    return (
        <BodyWrapper>
            <div className="px-5 pb-6 md:pt-0 pt-5">
                <h2 className='md:text-3xl text-2xl md:font-semibold font-medium text-zinc-300'>My skills</h2>
                <div className="w-16 md:w-20 h-1.5 md:mt-3 rounded-full bg-zinc-800 mt-2"></div>
                <div className="grid xl:grid-cols-7 lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-3 md:mt-8 mt-6">

                    {
                        skills.map((skill, index) => (
                            <div key={index} className="w-full flex-col gap-3 flex items-center justify-center bg-zinc-800 p-5 rounded-lg">
                                <Image width={60} height={60} src={skill.icon} className='invert mx-auto' alt={`${skill.name} logo`} />
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