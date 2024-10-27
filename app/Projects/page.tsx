import React from 'react';

const projects = [
  {
    name: 'Resume',
    description: 'I created this project to explore...',
    image: '/1.jpg',
    buttonText: 'View Project',
  },
  {
    name: 'Student ID Card',
    description: 'This project showcases a student ID...',
    image: '/4.jpg',
    buttonText: 'View Project',
  },
  {
    name: 'Countdown Timer',
    description: 'A countdown timer created with...',
    image: '/5.jpg',
    buttonText: 'View Project',
  },
];

const Projects: React.FC = () => {
  return (
    <div id='project' className="bg-gray-50 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-2">Projects</h1>
        <hr className='bg-yellow-700 text-yellow-700 h-1 r w-14 justify-self-center' /> <br />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 w-full max-w-6xl px-4 ">
          {projects.map((project, index) => (
            <><div className="md:flex-shrink-0">
              <img
                className="h-80 w-full object-fill shadow-yellow-100 shadow-lg"
                src={project.image}
                alt={project.name} />
            </div><div key={index} className="bg-white shadow-yellow-100 place-content-center shadow-lg rounded-lg overflow-hidden">

                <div className="md:flex place-content-center">
                  <div className="p-6">
                    <h1 className="text-2xl font-bold mb-2">{project.name}</h1>
                    <p className="text-gray-700">{project.description}</p>
                    <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                      {project.buttonText}
                    </button>
                  </div>
                </div>
              </div></>

          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
