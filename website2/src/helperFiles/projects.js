import React from 'react';
import "./project.css"
import { Card } from "./card"

export const ProjectsPage = () => {
    return (
        <>
            <div className='main-container'>
            {/* <img
                src={process.env.PUBLIC_URL + "/webPics/waveBack.avif"}
                alt="firstImage"
                className="backImage"
                /> */}
                <Card 
                    title={"Pickle"} 
                    description={"Welcome to the stuff"}
                    realtiveImagePath={"/webPics/abBlack.jpeg"}
                />
            </div>
        </>
    );
};

export default ProjectsPage;