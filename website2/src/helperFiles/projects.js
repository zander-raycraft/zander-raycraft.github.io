import React from 'react';
import "./project.css"
import { Card } from "./card"

export const ProjectsPage = () => {
    return (
        <>
            <div className='main-container'>
                <div className='card-container'>
                    {/* Project One */}
                    <Card
                        title="Real Estate Analysis"
                        description="Welcome to the stuff"
                        relativeImagePath="/webPics/realEstate.jpeg"
                    />
                    {/* Project Two */}
                    <Card
                        title="Beckers Research Lab"
                        description="Welcome to the stuff"
                        relativeImagePath="/webPics/mlbackground.jpeg"
                    />
                    {/* Project Three */}
                    <Card
                        title="MyStar Health tracker"
                        description="Welcome to the stuff"
                        relativeImagePath="/webPics/healthImage.jpeg"
                    />
                    {/* Project Three */}
                    <Card
                        title="Placeholder for Current Project"
                        description="Welcome to the stuff"
                        relativeImagePath="/webPics/AE91CF11-A476-4D7B-BD7C-52EB0C1064DA.JPG"
                    />
                </div>
            </div>
        </>
    );
};

export default ProjectsPage;