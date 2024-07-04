import React, { useEffect, useState } from 'react';
import Title from './Title';

const Skills = () => {
 
    const [items, setItems] = useState([
        {
            id: 1,
            title: 'Finished SSC',
            description: 'Satkhira PN High School, Satkhira, Khulna',
        },
        {
            id: 2,
            title: 'Completed HSC',
            description: 'Satkhira Government College',
        },
        {
            id: 3,
            title: 'MERN Stack Courses',
            description: 'Programming Hero and Ostad Platform',
        },
        {
            id: 4,
            title: 'Studying CSE',
            description: 'Private University in Dhaka',
        },
        {
            id: 5,
            title: 'Projects',
            description: 'Various web development projects focusing on the MERN stack.',
        },
    ]);

    useEffect(() => {
        // Fetch or process data here if needed
    }, []);
    return (
        <div className="bg-black text-white 
          p-4 md:p-8 ">
            
            <div className="">

                <div className='md:w-9/12 lg:w-8/12 mx-auto'>
 
                </div>
            </div>
            
        </div>
    );
};

export default Skills;
