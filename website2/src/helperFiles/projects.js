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
                        and control theory in soft robotics. My role in this lab is developing the soft robot
                        as well as working to create a physics based machine learing model that acts as a feedback
                        loop for the robot to evaluate and adjust its current action relative to where it 
                        should be. Another task is improving the labs testing software to allow for a more accurate 
                        rendering and anlysis of data."
                        Language="Tools/Languages used: Python (ML Model). C++/MatLab (Analysis software)"
                        relativeImagePath="/webPics/mlbackground.jpeg"
                    />
                    {/* Project Three */}
                    <Card
                        title="MyStar Health tracker"
                        description="The WebApp project is a tracker for someones mental and physical health. 
                        The idea behind this is the user creates an account and fills out a form of their current fitness
                        levels and their goal fitness levels. They are then given a basic workout plan to start from. 
                        As the user logs their workouts and progress, the workout plan re-evaluates what is best for them 
                        to best meet their goals. There is a second section that focuses on mental health where the user
                        fils out a daily for, logging how they felt throughout the day. They can look at their history and if they
                        opt into it, they can have simple advice generated for them with the aim of helping with whatever their mental 
                        state is."
                        Language="Tools/Languages used: React (JS Framework), Netlify (web hosting), HTML/CSS, JavaScript (App development)"
                        relativeImagePath="/webPics/healthImage.jpeg"
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
                        <h1 className="bottom-text">Projects</h1>
                    </div>
                    <div className='time-bar' />
                </div>
            </div>
        </>
    );
};

export default ProjectsPage;