import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import StudentText from "../helperFiles/typewriter";
import { Accordion } from "../helperFiles/Acrodian";
import { SkillPage } from "../helperFiles/skillPage";
import "./styles.css";
import "./seg2.css"

export const PersonalPage = () => {
  //make a change
  const progressRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const progress = progressRef.current;
    const container = document.querySelector(".container");

    const updateProgress = () => {
      const scrollHeight = container.scrollHeight - container.clientHeight;
      const scrollTop = container.scrollTop;
      const progressValue = (scrollTop / scrollHeight) * 100;
      progress.value = progressValue;
    };

    container.addEventListener("scroll", updateProgress);

    ScrollTrigger.create({
      trigger: container,
      start: "top top",
      end: "bottom bottom",
      onUpdate: updateProgress,
    });

    return () => {
      container.removeEventListener("scroll", updateProgress);
    };
  }, []);

  return (
    <>
      <progress
        ref={progressRef}
        className="progress"
        max="100"
        value="0"
      ></progress>
      <nav>
        <h2>
          Zander <span>Raycraft</span>
        </h2>
        <StudentText />
        <div className="hamburgerMenu"></div>
      </nav>
      <div className="container">
        <div className="firstSegment">
          <div className="backImage">
            <img
              src={process.env.PUBLIC_URL + "/webPics/gold-triangle.jpeg"}
              alt="firstImage"
              className="backImage"
            />
          </div>
          <div className="imageContainer">
            <img src={process.env.PUBLIC_URL + "/webPics/DSC00127.jpg"} alt="firstImage" className="firstImage"/>
            <img src={process.env.PUBLIC_URL + "/webPics/IMG_4385.jpg"} alt="secondImage" className="secondImage"/>
            <img src={process.env.PUBLIC_URL + "/webPics/IMG_0154.jpg"} alt="thirdImage" className="thirdImage"/>
          </div>
          <div className="aboutme-container">
            <h3>I'm Zander,</h3>
            <h4 className="shadow">I'm Zander</h4>
            <h1 className="secondText">Student and Software developer</h1>
            <h5 className="secondShadow">Student <span>and</span> Software developer</h5>
            <Accordion className="acordian"/>
          </div>
        </div>
        <div className="second-segment">
          <SkillPage />

        </div>
        <div className="segment"></div>
      </div>
    </>
  );
};
