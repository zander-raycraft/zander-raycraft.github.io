import React from "react";
import "./skillPage.css";
import { FaTools, FaAngleDoubleRight } from 'react-icons/fa';



export const SkillPage = () => {
    return (
        <>
            <div className="mainContainer">
                <img
                src={process.env.PUBLIC_URL + "/webPics/shutterstock_514474840.webp"}
                alt="firstImage"
                className="backImage"
                />
                <div className="section-one">
                </div>
                <div className="section-two">
                    <h1><FaTools/> Tools</h1>
                    <h2><span><FaAngleDoubleRight /></span> React, Vite</h2>
                    <h2><span><FaAngleDoubleRight /></span> Git</h2>
                    <h2><span><FaAngleDoubleRight /></span> AWS</h2>
                    <h2><span><FaAngleDoubleRight /></span> Figma</h2>
                    <h2><span><FaAngleDoubleRight /></span> FireBase, MongoDB, mySQL</h2>
                </div>
                <div className="section-three"></div>
            </div>
        </>
    );
};

export default SkillPage;