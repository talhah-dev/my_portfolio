import BodyWrapper from '@/app/bodyWrapper'
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

const Page = () => {

    const project = [
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
        { name: 'HTML5', icon: '/html5.svg' },
        { name: 'CSS3', icon: '/css.svg' },
        { name: 'Bootstarp', icon: '/bootstrap.svg' },
        { name: 'Clerk', icon: '/clerk.svg' },
        { name: 'Cloudinary', icon: '/cloudinary.svg' },
    ];

    return (
        <BodyWrapper>
            <div className="px-5 pb-6 md:pt-0 pt-5">
                <h2 className='md:text-3xl text-2xl md:font-semibold font-medium text-zinc-300'>My Recent Work <span className='font-medium text-sm text-yellow-600'>({project.length}+ Projects)</span></h2>
                <div className="w-16 md:w-20 h-1.5 md:mt-3 rounded-full bg-zinc-800 mt-2"></div>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 md:mt-8 mt-6">
                    {
                        project.map((project, index) => (
                            <div key={index} className="w-full bg-zinc-800 p-2 rounded-lg">
                                <Image width={60} height={60} src={"/talha.png"} className='mx-auto bg-red-500 w-full rounded-lg h-60' alt={`${project.name}`} />
                                <p className='text-zinc-500 font-medium text-sm mt-3 px-2 line-clamp-2'>{project.name} Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem molestiae corrupti sapiente velit quidem obcaecati id, ducimus quibusdam ut, quo quae expedita quisquam perferendis assumenda facere quas, autem numquam commodi!</p>

                                <div className="flex px-2 mt-5 pb-2 text-sm text-zinc-300 items-center gap-3">
                                    <Link href={"/"} className='hover:text-zinc-500 transition-all duration-500'>Live Preview</Link>
                                    {/* |<Link href={"/"} className='flex items-center gap-1 hover:gap-2 transition-all duration-500'>Read More <IoIosArrowForward /></Link> */}
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </BodyWrapper>
    )
}

export default Page