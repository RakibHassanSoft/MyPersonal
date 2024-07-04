import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faFacebook, faJs, faTwitter, faLinkedin, faReact, faNodeJs, faPython } from '@fortawesome/free-brands-svg-icons';
import { DiMysql } from "react-icons/di";
import { SiMongodb } from "react-icons/si";
import img1 from '../../../public/Images/image1.png'
import img2 from '../../../public/Images/image2.png'
import img3 from '../../../public/Images/image3.png'

const Portfolio = () => {

    const projects = [
        {
            id: 0,
            live_link: "https://effulgent-platypus-036e0d.netlify.app/",
            Github_LInk: "https://github.com/RakibHassanSoft/Product4u",
            about: "The Product Hunt Website excels with its user-friendly authentication options and robust community engagement features. Its tailored dashboards empower administrators while fostering interactive product discovery and feedback mechanisms",
            Name: "Product Hunt",
            image: img2
        },
        {
            id: 1,
            live_link: "https://spontaneous-pithivier-261152.netlify.app/",
            Github_LInk: "https://github.com/example/project3",
            about: "Our property sales website offers intuitive tools for seamless transactions and personalized real estate solutions.Empower your property sales journey with our platform's user-friendly features and comprehensive support for buyers and sellers alike",
            Name: "Property Sell",
            image: img2
        },
        {
            id: 2,
            live_link: "https://voluble-puppy-45b389.netlify.app/",
            Github_LInk: "https://github.com/RakibHassanSoft/Library",
            about: "Our Library Management Website offers robust features like user-friendly authentication, book management, and interactive dashboards tailored for seamless library resource management.Explore our MERN stack application designed for efficient book borrowing, user management, and librarian oversight, ensuring a comprehensive experience for all library stakeholders",
            Name: "Library Management",
            image: img3
        }
    ]
    return (
        <div className="bg-black text-white min-h-screen">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">

                {/* Portfolio Header */}
                <h1 className="text-3xl font-bold text-center mb-8">My Portfolio</h1>

                {/* Project Showcase */}
                <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-3">
          
                    {
                        projects.map((project) =>
                            // single project  
                        //id, live_link,Github_LInk, about,Name,image
                        /*
                         */
                            <div key={project.id} className="bg-gray-800 rounded-lg shadow-md overflow-hidden transform transition-transform hover:-translate-y-1 flex flex-col justify-between">
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold mb-2">{project.Name}</h3>
                                    <p className="text-gray-300 mb-4">{project.about}</p>
                                </div>
                                <div className="flex justify-between items-center p-6 bg-gray-700">
                                    <a href={project.live_link} live_link className="text-green-500 hover:underline" target="_blank" rel="noopener noreferrer">View Project</a>
                                    <a href={project.Github_LInk} className="text-green-500 hover:underline" target="_blank" rel="noopener noreferrer">GitHub Repository</a>
                                </div>
                            </div>
                        )
                    }



                </div>


                {/* About Me Section */}
                <div className="mt-8">
                    <h2 className="text-2xl font-bold mb-4">About Me</h2>
                    <p className="text-gray-300 mb-4">I am Md Raibhul Islam, a frontend developer passionate about creating interactive and user-friendly web applications. I have experience with JavaScript, React, Node.js, and various frontend technologies.</p>
                    <p className="text-gray-300 mb-4">Feel free to <a href="mailto:youremail@example.com" className="text-green-500 hover:underline">contact me</a> for collaborations or job opportunities.</p>
                </div>

                {/* Skills Section */}
                <div className="mt-8">
                    <h2 className="text-2xl font-bold mb-4">Skills</h2>
                    <div className="flex flex-wrap gap-4">
                        <ProgrammingLanguageIcon icon={faHtml5} name="HTML5" />
                        <ProgrammingLanguageIcon icon={faCss3Alt} name="CSS3" />
                        <ProgrammingLanguageIcon icon={faJs} name="JavaScript" />
                        <ProgrammingLanguageIcon icon={faReact} name="React" />
                        <ProgrammingLanguageIcon icon={faNodeJs} name="Node.js" />
                        <ProgrammingLanguageIcon icon={faPython} name="Python" />
                        <div className='flex gap-4'>
                            <span className='flex justify-center items-center gap-1'> <DiMysql />MySQL</span>
                            <span className='flex justify-center items-center'> <SiMongodb className='text-green-400' /> MongoDB</span>
                        </div>
                    </div>
                </div>
                {/* github  */}
                <div className="mt-8">
                    <h2 className="text-3xl font-bold text-green-500">GitHub Stats</h2>
                    <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-4">
                        <img src="https://github-readme-stats.vercel.app/api?username=RakibHassanSoft&theme=vue-dark&show_icons=true&hide_border=true&count_private=true" alt="GitHub Stats" />
                        <img src="https://github-readme-streak-stats.herokuapp.com/?user=RakibHassanSoft&theme=vue-dark&hide_border=true" alt="GitHub Streak" className="mt-4" />
                        <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=RakibHassanSoft&theme=vue-dark&show_icons=true&hide_border=true&layout=compact" alt="Top Languages" className="mt-4" />
                    </div>
                </div>

                {/* Testimonials Section */}
                <div className="mt-8">
                    <h2 className="text-2xl font-bold mb-4">Testimonials</h2>
                    <div className="bg-gray-800 rounded-lg shadow-md p-6">
                        <p className="text-gray-300 mb-4">"Raibhul's attention to detail and creativity in web development is exceptional. His projects speak volumes about his skills and dedication."</p>
                        <p className="font-semibold">- John Doe, CEO at Example Company</p>
                    </div>
                </div>



            </div>
        </div>
    );
};


// Programming Language Icon Component
const ProgrammingLanguageIcon = ({ icon, name }) => (
    <div className="flex items-center space-x-2">
        <FontAwesomeIcon icon={icon} className="text-green-500 text-lg" />
        <span className="text-gray-300">{name}</span>
    </div>
);

export default Portfolio;
