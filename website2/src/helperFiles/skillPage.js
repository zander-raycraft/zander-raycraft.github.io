import React from "react";
import "./skillPage.css";
import { Progress } from "./progress"
import { FaTools, FaAngleDoubleRight } from 'react-icons/fa';
import { DiTerminal } from 'react-icons/di';
import { BsCodeSlash } from "react-icons/bs";



export const SkillPage = () => {
    return (
        <>
            <div className="mainContainer">
                <img
                src={process.env.PUBLIC_URL + "/webPics/abBlack.jpeg"}
                alt="firstImage"
                className="backImage"
                />
                <h1 className="skills">Skills</h1>
                <div className="section-one">
                <h1><BsCodeSlash /> Languages</h1>
                    <Progress text="C++" percentage={80} />
                    <Progress text="Rust" percentage={40} />
                    <Progress text="JavaScript/TypeScript" percentage={75} />
                    <Progress text="Python" percentage={60} />
                    <Progress text="HTML/CSS" percentage={80} />
                </div>
                <div className="section-two">
                    <h1><FaTools/> Tools</h1>
                    <h2><span><FaAngleDoubleRight /></span> React, Vite, Prisma</h2>
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