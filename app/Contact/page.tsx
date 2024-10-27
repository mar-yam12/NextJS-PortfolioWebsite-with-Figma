import { Button } from '@/components/ui/button'
import React from 'react'

const page = () => {
    return (
        <div id='contact' className='bg-gray-50'>
            <div className="w-full max-w-lg mx-auto p-4 mt-12 ">
                <h1 className="text-4xl font-bold mb-2 text-center">Contact</h1>
                <hr className='bg-yellow-700 text-yellow-700 h-1 r w-14 justify-self-center' />
                <form className="mt-4 space-y-4 ">
                    <label htmlFor="name" className="block text-sm text-black">Name</label>
                    <input id="name" name="name" type="text" className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400" />
                    <label htmlFor="email" className="block text-sm text-black">Email</label>
                    <input id="email" name="email" type="email" className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400" />
                    <label htmlFor="message" className="block text-sm text-black">Message</label>
                    <textarea id="message" name="message" className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400" rows={4}></textarea>

                    <Button variant={'secondary'} className=" bg-yellow-500 text-white font-semibold hover:bg-yellow-200 hover:text-black"> Send </Button>

                </form>
            </div>
        </div>
    )
}

export default page
