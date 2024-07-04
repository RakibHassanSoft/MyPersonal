import React from 'react';

import img1 from '../../../../public/Images/image1.png'
import img2 from '../../../../public/Images/image2.png'
import img3 from '../../../../public/Images/image3.png'
import ProjectCard from "./ProjectCard"
const ProjectsInslider = () => {

    const projects = [
        {
            id: 1,
            live_link: "https://example.com/live1",
            Github_LInk: "https://github.com/example/project1",
            about: "Description of Project 1",
            Name: "Project 1",
            image:img1
        },
        {
            id: 2,
            live_link: "https://example.com/live2",
            Github_LInk: "https://github.com/example/project2",
            about: "Description of Project 2",
            Name: "Project 2",
            image:img2
        },
        {
            id: 3,
            live_link: "https://example.com/live3",
            Github_LInk: "https://github.com/example/project3",
            about: "Description of Project 3",
            Name: "Project 3",
            image:img3
        }
    ]

    return (
        <div className='lg:w-8/12 m-auto mb-44 '>
            {/* <Header title1={"WORKING PROCESS"} title2={"LASTET WORKING PROJECT"} text={"Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit. Sint Ratione Reprehenderit"}> </Header> */}
            <div className=" grid  grid-cols-1  md:grid-cols-2 lg:grid-cols-3  gap-4">
                {
                    projects.map((project) => <ProjectCard key={project.id} project={project}></ProjectCard>)
                }

            </div>
        </div>
    );
};

export default ProjectsInslider;