import BodyWrapper from '@/app/bodyWrapper'
import React from 'react'

const Page = () => {

    return (
        <BodyWrapper>
            <div className="px-5 pb-6 md:pt-0 pt-5">
                <h2 className='md:text-3xl text-2xl md:font-semibold font-medium text-zinc-300'>About Me</h2>
                <div className="w-16 md:w-20 h-1.5 md:mt-3 rounded-full bg-zinc-800 mt-2"></div>
                <p className='text-zinc-400 mt-5 text-[15px]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur amet earum ipsam doloribus quibusdam aliquam aliquid labore quos commodi culpa, magnam, praesentium adipisci alias, reiciendis repellat expedita. Blanditiis, quae neque. <br /><br />
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci, odio, reprehenderit numquam hic placeat veritatis enim, officia architecto excepturi voluptatibus cum assumenda quos sit reiciendis nam sunt neque repellendus. Harum.
                </p>
                <div className="mt-5 bg-zinc-800 rounded-lg p-4">
                    <h2 className='text-xl tracking-wide font-medium text-zinc-300'>Experience</h2>
                    <div className="border-l-2 rounded-lg pt-1 border-zinc-700 pl-3 mt-4">
                        <h2 className='t ext-lg tracking-wide font-medium text-zinc-300'>Web designer</h2>
                        <p className='text-yellow-600 mt-1 text-xs'>2010 — 2013</p>
                        <p className='text-zinc-400 mt-2 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam eos blanditiis officia eligendi! Autem tenetur cumque voluptates iure et. Reiciendis totam placeat aliquam cupiditate commodi? Optio repellat eligendi doloremque facere.</p>
                    </div>
                    <div className="border-l-2 rounded-lg pt-1 border-zinc-700 pl-3 mt-8">
                        <h2 className='t ext-lg tracking-wide font-medium text-zinc-300'>Web designer</h2>
                        <p className='text-yellow-600 mt-1 text-xs'>2010 — 2013</p>
                        <p className='text-zinc-400 mt-2 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam eos blanditiis officia eligendi! Autem tenetur cumque voluptates iure et. Reiciendis totam placeat aliquam cupiditate commodi? Optio repellat eligendi doloremque facere.</p>
                    </div>

                </div>
                <div className="mt-5 bg-zinc-800 rounded-lg p-4">
                    <h2 className='text-xl tracking-wide font-medium text-zinc-300'>Education</h2>
                    <div className="border-l-2 rounded-lg pt-1 border-zinc-700 pl-3 mt-4">
                        <h2 className='t ext-lg tracking-wide font-medium text-zinc-300'>University</h2>
                        <p className='text-yellow-600 mt-1 text-xs'>currently Enrolled</p>
                        <p className='text-zinc-400 mt-2 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam eos blanditiis officia eligendi! Autem tenetur cumque voluptates iure et. Reiciendis totam placeat aliquam cupiditate commodi? Optio repellat eligendi doloremque facere.</p>
                    </div>
                    <div className="border-l-2 rounded-lg pt-1 border-zinc-700 pl-3 mt-8">
                        <h2 className='t ext-lg tracking-wide font-medium text-zinc-300'>Collage</h2>
                        <p className='text-yellow-600 mt-1 text-xs'>2020 — 2022</p>
                        <p className='text-zinc-400 mt-2 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam eos blanditiis officia eligendi! Autem tenetur cumque voluptates iure et. Reiciendis totam placeat aliquam cupiditate commodi? Optio repellat eligendi doloremque facere.</p>
                    </div>

                </div>
            </div>
        </BodyWrapper>
    )
}

export default Page