import React from 'react';
import Hero from './Hero';
import DownloadCV from './DownloadCV';
import Skills from './Skills';
import Portfolio from './Portfoleo';
import Title from './Title';
import ProjectsInslider from './Projects/ProjectsInslider';
import Contract from './Contract';
import Education from './Education';
import "./style.css"
const Home = () => {
    return (
        <div className=''>
            <div className=''>
                <div className='anchor' id='hero'></div>
                <Hero></Hero>
            </div>
    

            <div className=''>
                <div className='anchor' id='myCv'></div>
                <Title title={"My CV"}></Title>
                <DownloadCV></DownloadCV>
            </div>

            <div className=''>
                <div className='anchor' id='skills'></div>
                <Title title={"Skills"}></Title>
                <Portfolio></Portfolio>
                <Skills></Skills>
            </div>

            <div className=''>
                <div className='anchor' id='projects'></div>
                <Title title={"Projects"}></Title>
                <ProjectsInslider></ProjectsInslider>
            </div>

            <div className=''>
                <div className='anchor' id='education'></div>
                <Title title={"Education"}></Title>
                <Education></Education>
            </div>

            <div className=''>
                <div className='anchor' id='contract'></div>
                <Title title={"Contract"}></Title>
                <Contract></Contract>
            </div>
        </div>
    );
};

export default Home;
