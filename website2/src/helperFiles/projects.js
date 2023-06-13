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
                        title="Pickle"
                        description="Welcome to the stuff"
                        relativeImagePath="/webPics/IMG_0154.JPG"
                    />
                    {/* Project Two */}
                    <Card
                        title="Pickle"
                        description="Welcome to the stuff"
                        relativeImagePath="/webPics/IMG_0154.JPG"
                    />
                    {/* Project Three */}
                    <Card
                        title="Pickle"
                        description="Welcome to the stuff"
                        relativeImagePath="/webPics/IMG_0154.JPG"
                    />
                    {/* Project Three */}
                    <Card
                        title="Pickle"
                        description="Welcome to the stuff"
                        relativeImagePath="/webPics/IMG_0154.JPG"
                    />
                </div>
            </div>
        </>
    );
};

export default ProjectsPage;