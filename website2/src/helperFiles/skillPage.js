import React from "react";
import "./skillPage.css";
import { FaTools, FaAngleDoubleRight } from 'react-icons/fa';
import { DiTerminal } from 'react-icons/di';



export const SkillPage = () => {
    return (
        <>
            <div className="mainContainer">
                <img
                src={process.env.PUBLIC_URL + "/webPics/shutterstock_514474840.webp"}
                alt="firstImage"
                className="backImage"
                />
                <h1 className="skills">Skills</h1>
                <h1 className="shadowSkill">Skills</h1>
                <div className="section-one">
                </div>
                <div className="section-two">
                    <h1><FaTools/> Tools</h1>
                    <h2><span><FaAngleDoubleRight /></span> React, Vite, express.JS, Prisma</h2>
                    <h2><span><FaAngleDoubleRight /></span> Git</h2>
                    <h2><span><FaAngleDoubleRight /></span> AWS</h2>
                    <h2><span><FaAngleDoubleRight /></span> Figma</h2>
                    <h2><span><FaAngleDoubleRight /></span> FireBase, MongoDB, mySQL</h2>
                </div>
                <div className="section-three">
                    <h1><DiTerminal /> Systems</h1>
                    <h2><span><FaAngleDoubleRight /></span> MacOS/Linux</h2>
                    <h2><span><FaAngleDoubleRight /></span> Windows</h2>
                    
                </div>
            </div>
        </>
    );
};

export default SkillPage;