import BodyWrapper from '@/app/bodyWrapper'
import React from 'react'

const Page = () => {

    return (
        <BodyWrapper>
            <div className="px-5 pb-6 md:pt-0 pt-5">
                <h2 className='md:text-3xl text-2xl md:font-semibold font-medium text-zinc-300'>Contact Me</h2>
                <div className="w-16 md:w-20 h-1.5 md:mt-3 rounded-full bg-zinc-800 mt-2"></div>
                <div className="grid md:grid-cols-2 grid-cols-1 gap-3 md:mt-8 mt-6">
                    <input type="text" placeholder='Enter Name' className='w-full rounded-lg border border-zinc-700 p-3 bg-transparent' />
                    <input type="email" placeholder='Enter Email' className='w-full rounded-lg border border-zinc-700 p-3 bg-transparent' />
                    <textarea placeholder='Message' rows={5} className='w-full md:col-span-2 rounded-lg border border-zinc-700 p-3 bg-transparent' />
                    <button className='w-full font-medium transition-all duration-500 hover:opacity-60  rounded-lg bg-white text-black text-center p-3 md:col-span-2'>Send Message</button>
                </div>
                <div className="mt-5 md:mt-8">
                    <iframe className='w-full grayscale brightness-50 h-80 rounded-lg' src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3619.039042704875!2d67.10544807401315!3d24.89664984381109!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjTCsDUzJzQ3LjkiTiA2N8KwMDYnMjguOSJF!5e0!3m2!1sen!2s!4v1751865494755!5m2!1sen!2s" loading="lazy"></iframe>
                </div>
            </div>
        </BodyWrapper>
    )
}

export default Page