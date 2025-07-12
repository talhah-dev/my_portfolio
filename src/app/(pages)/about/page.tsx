import BodyWrapper from '@/app/bodyWrapper'
import Link from 'next/link'
import React from 'react'

const Page = () => {

    return (
        <BodyWrapper>
            <div className="px-5 pb-6 lg:pt-0 pt-5">
                <h2 className='lg:text-3xl text-2xl lg:font-semibold font-medium text-zinc-300'>About Me</h2>
                <div className="w-16 lg:w-20 h-1.5 lg:mt-3 rounded-full bg-zinc-800 mt-2"></div>
                <p className='text-zinc-400 mt-5 text-[15px]'>I am Full Stack Developer. I have successfully completed approximately 140+ projects on <Link href={"https://www.fiverr.com/ammar_khalidd"} target='_blank' className='font-medium underline text-green-600'>Fiverr</Link> within the given time frame with 5 star rating. I am able to work well in a team environment. Additionally, I am currently enrolled in a Bachelor of Computer Science.
                </p>
                <div className="mt-5 bg-zinc-800 rounded-lg p-4">
                    <h2 className='text-xl tracking-wide font-medium text-zinc-300'>Experience</h2>
                    <div className="border-l-2 rounded-lg pt-1 border-zinc-700 pl-3 mt-4">
                        <h2 className="text-lg tracking-wide font-medium text-zinc-300">Fiverr (Freelancing)</h2>
                        <p className="text-yellow-600 mt-1 text-xs">3+ Years</p>
                        <p className="text-zinc-400 mt-2 text-sm">Working as a Full Stack Developer on Fiverr, delivering high-quality web solutions to international clients.</p>
                    </div>

                    <div className="border-l-2 rounded-lg pt-1 border-zinc-700 pl-3 mt-8">
                        <h2 className="text-lg tracking-wide font-medium text-zinc-300">Instructor at TechZone</h2>
                        <p className="text-yellow-600 mt-1 text-xs">2025</p>
                        <p className="text-zinc-400 mt-2 text-sm">Teaching MERN stack development to aspiring developers at TechZone, fostering strong foundations and real-world skills.</p>
                    </div>

                    <div className="border-l-2 rounded-lg pt-1 border-zinc-700 pl-3 mt-8">
                        <h2 className="text-lg tracking-wide font-medium text-zinc-300">Mean3 Company</h2>
                        <p className="text-yellow-600 mt-1 text-xs">2024</p>
                        <p className="text-zinc-400 mt-2 text-sm">Worked as a Frontend Developer specializing in React, contributing to modern UI/UX for scalable web applications.</p>
                    </div>

                    <div className="border-l-2 rounded-lg pt-1 border-zinc-700 pl-3 mt-8">
                        <h2 className="text-lg tracking-wide font-medium text-zinc-300">Arif Group of Companies</h2>
                        <p className="text-yellow-600 mt-1 text-xs">2023 – 2024</p>
                        <p className="text-zinc-400 mt-2 text-sm">Served as a MERN Stack Developer, building full-stack website for a business needs.</p>
                    </div>

                </div>
                <div className="mt-5 bg-zinc-800 rounded-lg p-4">
                    <h2 className='text-xl tracking-wide font-medium text-zinc-300'>Education</h2>
                    <div className="border-l-2 rounded-lg pt-1 border-zinc-700 pl-3 mt-4">
                        <h2 className="text-lg tracking-wide font-medium text-zinc-300">University</h2>
                        <p className="text-yellow-600 mt-1 text-xs">Currently Enrolled</p>
                        <p className="text-zinc-400 mt-2 text-sm">Pursuing a Bachelors degree in Computer Science (BSCS), currently in the 6th semester, gaining hands-on experience in software development and system design.</p>
                    </div>

                    <div className="border-l-2 rounded-lg pt-1 border-zinc-700 pl-3 mt-8">
                        <h2 className="text-lg tracking-wide font-medium text-zinc-300">College</h2>
                        <p className="text-yellow-600 mt-1 text-xs">2020 — 2022</p>
                        <p className="text-zinc-400 mt-2 text-sm">Completed intermediate education at Army Public College COD.</p>
                    </div>

                </div>
            </div>
        </BodyWrapper>
    )
}

export default Page