import React from 'react'
import Image from 'next/image'

const Footer = () => {
    return (
        <div>
            {/* Footer */}
            <footer className="w-full text-center p-4 mt-12">
                <div className="flex justify-center space-x-4 mb-4">
                    <a href="#" className="hover:text-yellow-500">GitHub</a>
                    <a href="#" className="hover:text-yellow-500">LinkedIn</a>
                    <a href="#" className="hover:text-yellow-500">Email</a>
                </div>
                <p className="text-gray-600">&copy; Maryam Shahid 2024</p>
                <div>
                <Image
                    src="/yello footer.png"
                    alt="Full width image"
                    layout="responsive"
                    width={1920}
                    height={1080}
                    className="w-full h-auto object-cover"

                />
            </div>
            </footer>


        </div>
    )
}

export default Footer
