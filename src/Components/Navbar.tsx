import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full md:p-7 p-5'>
        <ul className='flex items-center md:gap-6 gap-3 w-full justify-between'>
            <li><Link href={"/"} className='text-nowrap'>Skills</Link></li>
            <li><Link href={"/about"} className='text-nowrap'>About</Link></li>
            <li><Link href={"/work"} className='text-nowrap'>My Work</Link></li>
            <li><Link href={"/contact"} className='text-nowrap'>Contact</Link></li>
        </ul>
    </div>
  )
}

export default Navbar