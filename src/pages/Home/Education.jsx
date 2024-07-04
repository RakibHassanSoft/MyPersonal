import React from 'react';

const Education = () => {
    return (
        <div className="w-8/12 mx-auto px-4 sm:px-6 lg:px-8 mt-10 mb-44" >
            <div className="relative mt-8">
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-4 border-green-500"></div>
                <ul className="space-y-8">
                    <li className="relative">
                        <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-500 h-6 w-6 rounded-full"></div>
                        <div className="ml-8 md:ml-16 pl-4 pr-4 py-2 bg-gray-800 text-white rounded-md shadow-lg">
                            <h3 className="text-xl font-bold">Finished SSC</h3>
                            <p className="mt-2">Satkhira PN High School, Satkhira, Khulna</p>
                        </div>
                    </li>
                    <li className="relative">
                        <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-500 h-6 w-6 rounded-full"></div>
                        <div className="ml-8 md:ml-16 pl-4 pr-4 py-2 bg-gray-800 text-white rounded-md shadow-lg">
                            <h3 className="text-xl font-bold">Completed HSC</h3>
                            <p className="mt-2">Satkhira Government College</p>
                        </div>
                    </li>
                    <li className="relative">
                        <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-500 h-6 w-6 rounded-full"></div>
                        <div className="ml-8 md:ml-16 pl-4 pr-4 py-2 bg-gray-800 text-white rounded-md shadow-lg">
                            <h3 className="text-xl font-bold">MERN Stack Courses</h3>
                            <p className="mt-2">Programming Hero and Ostad Platform</p>
                        </div>
                    </li>
                    <li className="relative">
                        <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-500 h-6 w-6 rounded-full"></div>
                        <div className="ml-8 md:ml-16 pl-4 pr-4 py-2 bg-gray-800 text-white rounded-md shadow-lg">
                            <h3 className="text-xl font-bold">Studying CSE</h3>
                            <p className="mt-2">Private University in Dhaka</p>
                        </div>
                    </li>
                    <li className="relative">
                        <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-500 h-6 w-6 rounded-full"></div>
                        <div className="ml-8 md:ml-16 pl-4 pr-4 py-2 bg-gray-800 text-white rounded-md shadow-lg">
                            <h3 className="text-xl font-bold">Projects</h3>
                            <p className="mt-2">Various web development projects focusing on the MERN stack.</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Education;
