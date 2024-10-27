'use client'
import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'


const Herosection = () => {
  return (
    <div >
         <div className="flex flex-col md:flex-row lg:flex-row items-center justify-between bg-gray-50 px-12 lg:px-20 ">
        <div className="max-w-lg">
          <h2 className="text-yellow-500 uppercase">Web Developer</h2>
          <h1 className="text-5xl font-extrabold ">Hello! My name is <br/> Maryam Shahid</h1><br />
          <p className="text-gray-500">
            I am a Web Developer, expert in HTML, CSS, JavaScript, TypeScript, Tailwind CSS, Next.js.
            I am learning Artificial Intelligence and am also a Graphic Designer and WordPress Developer.
          </p> <br />
          <div className="space-x-4">
            <Button variant={'secondary'} className=" bg-yellow-500 text-white font-semibold hover:bg-yellow-200 hover:text-black "> Project</Button>
            <Button variant={'outline'} className='hover:bg-yellow-200'>LinkedIn</Button>
          </div>
        </div>

        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div>
            <Image
              src="/bg.png"
              alt="Maryam Shahid"
              width={500}
              height={100}
            />
          </div>
        </div>
      </div>

    </div>
  )
}

export default Herosection
