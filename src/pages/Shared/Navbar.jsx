import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiShoppingCart } from "react-icons/fi";
import image1 from "../../../public/Images/black.jpg";
 import "../Home/style.css"
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenService, setIsOpenService] = useState(false);
    const user = true;

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const handleMouseLeave = () => {
        setIsOpenService(false);
    };

    const handleServiceClick = () => {
        setIsOpenService(false);
    };

    const toggleServiceMenu = () => {
        setIsOpenService(!isOpenService);
    };

    const handleSmoothScroll = (e, targetId) => {
        e.preventDefault();
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const list1 = (
        <>
            <Link
                to="/#hero"
                onClick={(e) => handleSmoothScroll(e, 'hero')}
                className="pb-2 hover:text-green-500 focus:outline-none border-b-2 hover:border-b-green-500 transition-colors duration-500"
            >
                ABOUT
            </Link>
            <Link
                href="/#myCv"
                onClick={(e) => handleSmoothScroll(e, 'myCv')}
                className="pb-3 hover:text-green-500 focus:outline-none border-b-2 hover:border-b-green-500 transition-colors duration-500"
            >
                My CV
            </Link>
            <Link
                href="#skills"
                onClick={(e) => handleSmoothScroll(e, 'skills')}
                className="pb-2 hover:text-green-500 focus:outline-none border-b-2 hover:border-b-green-500 transition-colors duration-500"
            >
                SKILLS
            </Link>
            <Link
                href="#projects"
                onClick={(e) => handleSmoothScroll(e, 'projects')}
                className="pb-2 hover:text-green-500 focus:outline-none border-b-2 hover:border-b-green-500 transition-colors duration-500"
            >
                PROJECTS
            </Link>
            <Link
                href="#education"
                onClick={(e) => handleSmoothScroll(e, 'education')}
                className="pb-2 hover:text-green-500 focus:outline-none border-b-2 hover:border-b-green-500 transition-colors duration-500"
            >
                EDUCATION
            </Link>
            <Link
                href="#contract"
                onClick={(e) => handleSmoothScroll(e, 'contract')}
                className="pb-2 hover:text-green-500 focus:outline-none border-b-2 hover:border-b-green-500 transition-colors duration-500"
            >
                CONTACT
            </Link>
        </>
    );

    const list2 = (
        <>
            <Link
                to="/#hero"
                onClick={(e) => handleSmoothScroll(e, 'hero')}
                className="block mb-4 hover:text-green-500 focus:outline-none"
            >
                ABOUT
            </Link>
            <div className="relative mb-4">
                <Link
                    href="#myCv"
                    onClick={(e) => handleSmoothScroll(e, 'myCv')}
                    className="block hover:text-green-500 focus:outline-none w-full text-left"
                >
                    My CV
                </Link>
            </div>
            <Link
                href="#skills"
                onClick={(e) => handleSmoothScroll(e, 'skills')}
                className="block mb-4 hover:text-green-500 focus:outline-none"
            >
                SKILLS
            </Link>
            <Link
                href="#projects"
                onClick={(e) => handleSmoothScroll(e, 'projects')}
                className="block mb-4 hover:text-green-500 focus:outline-none"
            >
                PROJECTS
            </Link>
            <Link
                href="#education"
                onClick={(e) => handleSmoothScroll(e, 'education')}
                className="block mb-4 hover:text-green-500 focus:outline-none"
            >
                EDUCATION
            </Link>
            <Link
                href="#contract"
                onClick={(e) => handleSmoothScroll(e, 'contract')}
                className="block mb-4 hover:text-green-500 focus:outline-none"
            >
                CONTACT
            </Link>
        </>
    );

    return (
        <div>
            <nav className={`fixed z-10 font-serif flex w-full items-center justify-between p-4 bg-black text-white bg-[url('${image1}')]`}>
                <Link to={"/"} className="text-2xl">Logo</Link>
                <div className="block lg:hidden" onClick={toggleSidebar}>
                    <button className="text-3xl focus:outline-none">☰</button>
                </div>
                <div className="hidden lg:flex justify-center space-x-4">
                    {list1}
                </div>
                <div className="hidden lg:flex items-center space-x-4">
                    {user ? (
                        <>
                            <div>
                                <img
                                    src="https://i.ibb.co/FYYm113/Firefly-20240613131632-2.png"
                                    alt="Avatar"
                                    className="w-12 h-12 rounded-full"
                                />
                            </div>
                           
                        </>
                    ) : (
                        <>
                            <Link to="/register" className="hover:underline">REGISTER</Link>
                            <Link to="/login" className="hover:underline">LOGIN</Link>
                        </>
                    )}
                </div>
            </nav>

            <div
                className={`fixed top-0 left-0 h-fit mt-16 z-10 bg-gray-800 text-white w-64 p-6 transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
            >
                <button className="text-3xl mb-4 focus:outline-none" onClick={toggleSidebar}>×</button>
                {list2}
            </div>
        </div>
    );
};

export default Navbar;


