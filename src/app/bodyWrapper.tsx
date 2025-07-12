"use client"
import Navbar from '@/Components/Navbar';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { FaGithub, FaWhatsapp } from 'react-icons/fa';
import { GrLocation } from 'react-icons/gr';
import { HiOutlineMail } from 'react-icons/hi';
import { ToastContainer } from 'react-toastify';

interface BodyWrapperProp {
    children: React.ReactNode;
}

const BodyWrapper: React.FC<BodyWrapperProp> = ({ children }) => {
    return (
        <>
        <ToastContainer />
        <div className="flex lg:flex-row flex-col items-center lg:justify-center lg:gap-6 gap-3 h-screen max-w-7xl w-full mx-auto lg:p-5 p-3">
            <div className="lg:max-w-[23%] bg-zinc-900 p-3 rounded-2xl w-full lg:h-[85vh] leftBar lg:overflow-auto">
                <div className="flex lg:flex-col gap-5 flex-row items-center">
                    <div className="bg-zinc-800 flex items-center justify-center pt-4 lg:w-full w-28 rounded-2xl">
                        <Image alt='profile' className='lg:w-full -scale-x-100 w-28 lg:h-64 h-24 object-cover rounded-2xl object-top' src={"/download.png"} width={250} height={250} />
                    </div>
                    <div className="lg:text-center">
                        <h1 className='lg:text-2xl text-xl capitalize font-medium'>Muhammad Talha</h1>
                        <p className='text-sm text-zinc-400 mt-2'>Full Stack Developer</p>
                        <Link href={"/"} className='block text-center px-3 hover:bg-zinc-700 transition-all duration-500 text-nowrap text-sm text-zinc-300 py-2 rounded-lg mt-4 border border-zinc-700'>Download Resume</Link>
                    </div>
                </div>
                <div className="w-full h-0.5 lg:block hidden bg-zinc-700 rounded-full my-8"></div>

                <div className="lg:block hidden">
                    <a href='https://github.com/talhah-dev' target='_blank' className="flex items-center gap-4 cursor-pointer hover:bg-zinc-950 transition-all duration-500 p-2 rounded-xl">
                        <div className="w-14 h-14 bg-zinc-950 rounded-lg flex items-center justify-center">
                            <FaGithub className='text-3xl text-zinc-400' />
                        </div>
                        <div className="">
                            <p className='text-sm text-zinc-400'>Github</p>
                            <p className='font-medium mt-1 text-zinc-300'>talhah-dev</p>
                        </div>
                    </a>
                    <a href='mailto:talha18513@gmail.com' className="flex items-center mt-2 gap-4 cursor-pointer hover:bg-zinc-950 transition-all duration-500 p-2 rounded-xl">
                        <div className="w-14 h-14 bg-zinc-950 rounded-lg flex items-center justify-center">
                            <HiOutlineMail className='text-3xl text-zinc-400' />
                        </div>
                        <div className="">
                            <p className='text-sm text-zinc-400'>Email</p>
                            <p className='font-medium mt-1 text-zinc-300'>talha18513@gmail.com</p>
                        </div>
                    </a>
                    <a href='https://wa.me/03152666263' className="flex items-center gap-4 cursor-pointer mt-2 hover:bg-zinc-950 transition-all duration-500 p-2 rounded-xl">
                        <div className="w-14 h-14 bg-zinc-950 rounded-lg flex items-center justify-center">
                            <FaWhatsapp className='text-3xl text-zinc-400' />
                        </div>
                        <div className="">
                            <p className='text-sm text-zinc-400'>Phone / Whatsapp</p>
                            <p className='font-medium mt-1 text-zinc-300'>0315-2666263</p>
                        </div>
                    </a>
                    <a href='https://maps.app.goo.gl/cEk58yVjL3measU66' target='_blank' className="flex items-center gap-4 cursor-pointer mt-2 hover:bg-zinc-950 transition-all duration-500 p-2 rounded-xl">
                        <div className="w-14 h-14 bg-zinc-950 rounded-lg flex items-center justify-center">
                            <GrLocation className='text-3xl text-zinc-400' />
                        </div>
                        <div className="">
                            <p className='text-sm text-zinc-400'>Address</p>
                            <p className='font-medium mt-1 text-zinc-300'>Navy Colony, Karachi</p>
                        </div>
                    </a>
                </div>
            </div>
            <div className="lg:max-w-[77%] bg-zinc-900 rounded-2xl w-full ">
                <div className="scrollbar-hide overflow-auto pb-10 lg:h-[85vh] h-[75vh] ">
                    <div className="lg:max-w-sm lg:static fixed z-50 bottom-0 left-0 w-full bg-zinc-800 ml-auto rounded-tr-2xl rounded-tl-2xl lg:rounded-tl-none lg:rounded-bl-3xl">
                        <Navbar />
                    </div>
                    {children}
                </div>
            </div>
        </div>
        </>
    )
}

export default BodyWrapper