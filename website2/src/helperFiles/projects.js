import React from 'react';
import "./project.css"
import { Card } from "./card"

export const ProjectsPage = () => {
    return (
        <>
            <div className='main-container' style={{ 
                backgroundImage: `url(${process.env.PUBLIC_URL}/webPics/shutterstock_514474840.webp)`, 
                backgroundSize: 'cover', 
                backgroundPosition: 'center', 
                backgroundRepeat: 'no-repeat'
                }}>
                <div className='card-container'>
                    {/* Project One */}
                    <Card
                        title="Real Estate Analysis"
                        description="The idea behind this project was to create a webscraper to
                        get information and throw that information into a machine learning model,
                        which will then run a mulitple linear regression to predict the price of
                        the house within the following 12 months. This was based on a multitude of
                        factors such as neighboring price, details of the house, estimated rehab budget
                        and 3 year history of sales within that area."
                        Language="Tools/Languages used: Python (ML Model),
                        HTML/CSS, C++ (webscraping)."
                        relativeImagePath="/webPics/realEstate.jpeg"
                    />
                    {/* Project Two */}
                    <Card
                        title="Beckers Research Lab"
                        description="This project works in partner with Vanderbilt's Department
                        of Computer Science. I currently work as a Student Resarcher in Thomas Beckers's
                        lab. The goal of this lab is to study the integration between machine learning 
                        and control theory in soft robotics. My role in this lab is developing the soft robot physical system and the repective integrated cyber-physical system.
                        as well as working as apart of a team to create a physics based machine learing model that acts as a feedback
                        loop for the robot to evaluate and adjust its current action relative to where it 
                        should be."
                        Language="Tools/Languages used: Python (ML Model). C++/MatLab (Cyber-Physical control system)"
                        relativeImagePath="/webPics/mlbackground.jpeg"
                    />
                    {/* Project Three */}
                    <Card
                        title="Zero-Knowledge dApp"
                        description="These two full stack projects are seperate but run using a similar tech stack. The first is a non-hackable voting
                        system utilizing Zero-Knowledge proofs built on the Aleo network. Backend and contracts are developed with Leo, with the
                        Puzzler SDKs connecting the frontend typescript react app to the chain. This is privacy is due to the underlying ZKSnarks
                        that allow for the validation of on-chain transactions without revealing any more inforamtion other than a solution and
                        a proof. The second of the two projects is a go-fish game that acts just as it sounds built again on the aleo chain and utilizing similar
                        technologies as the Voting dApp"
                        Language="Tools/Languages used: React (JS Framework), HTML/CSS, JavaScript (App development), Leo (Smart contract Development)"
                        relativeImagePath="/webPics/aleoImage2.webp"
                    />
                    {/* Project Three */}
                    <Card
                        title="VSVS IT Board"
                        description="As a member of the IT Board for one of Vanderbilt's largest campus organiozations
                        I was in charge of both the website development and making a software for automatically placing students with teachers
                        and createing a schedule for lessons based on the best time available to everyone. The first task was the website which is currently built off
                        of wordpress. The second task was the scheduler which takes information filled out on a google form."
                        Language="Tools/Languages used: WordPress, HMTL/CSS, JavaScript (Website Development), Python (Scheduler application)"
                        relativeImagePath="/webPics/vsvsLogo.png"
                    />
                    <div className='intro-text'>
                        <h1 className="top-text">Projects</h1>
                    </div>
                    <div className='time-bar' />
                </div>
            </div>
        </>
    );
};

export default ProjectsPage;