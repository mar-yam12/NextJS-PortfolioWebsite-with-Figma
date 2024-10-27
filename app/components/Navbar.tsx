'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className=' bg-gray-50'>
        <div className='flex flex-col md:flex-row lg:flex-row justify-around m-0'>
            <Link href={'/'}>
            <Image 
            src="/logo.png"
            alt="logo"
            width={200}
            height={0}

          /></Link>
 
         {/*menu  */}
         <div className='navbar'>
            
            <ul className='flex space-x-10 text-black pt-6'>
                <li>
                <a href="/About" className="text-black hover:text-yellow-500 font-bold transition-all duration-300 border-b-2 border-transparent hover:border-white">About</a>
                </li>
                <li>
                <a href="#project" className="text-black hover:text-yellow-500 font-bold transition-all duration-300 border-b-2 border-transparent hover:border-white">Projects</a>
                </li>
                <li>
                <a href="#contact" className="text-black hover:text-yellow-500 font-bold transition-all duration-300 border-b-2 border-transparent hover:border-white">Contact</a>
                </li>
                
            </ul>
        </div>
    </div>
    </nav>
  )
}

export default Navbar
