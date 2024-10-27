import Image from 'next/image';
import Navbar from '../components/Navbar';
import Contact from "../Contact/page"

export default function About() {
    return (
        <><Navbar />
            <div className="flex flex-col md:flex-row items-center justify-between bg-gray-50 px-12 lg:px-20 ">

                {/* Main Content */}
                <div className="w-full max-w-4xl mx-auto p-4 mt-8">
                    <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-12">
                        {/* About Me Section */}
                        <div className="text-center md:text-left">
                            <h1 className="text-4xl font-bold">About me</h1>
                            <p className="mt-4 text-gray-700">
                                I am a Web Developer. I am expert in HTML, CSS, JavaScript, TypeScript, Tailwind CSS, Next.js.
                                I am learning Artificial Intelligence also. I am also a Graphic Designer and WordPress Developer.
                            </p>
                            <button className="mt-4 bg-yellow-400 text-white px-6 py-2 rounded hover:bg-yellow-500">
                                Resume
                            </button>
                        </div>
                        {/* Profile Image */}
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <Image
                                src="/bg.png"
                                alt="Maryam Shahid"
                                width={500}
                                height={100}/>
                        </div>

                    </div>
                </div>




          {/* Footer */}
                {/* <footer className="w-full text-center p-4 mt-12">
              <div className="flex justify-center space-x-4 mb-4">
                  <a href="#" className="hover:text-yellow-500">GitHub</a>
                  <a href="#" className="hover:text-yellow-500">LinkedIn</a>
                  <a href="#" className="hover:text-yellow-500">Email</a>
              </div>
              <p className="text-gray-600">&copy; Maryam Shaiful 2024</p>
          </footer> */}
            </div>
            <Contact />
        </>

    );
}