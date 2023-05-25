import "./styles.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect } from "react";

export const PersonalPage = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to("progress", {
      value: 100,
      scrollTrigger: {
        scrub: 0.5,
      },
    });
  }, []);

  return (
    <>
      <progress max="100" value="0"></progress>
      <nav>
        <h1>Zander <span>Raycraft</span></h1>
        <div className="hamburgerMenu">
          
        </div>
      </nav>
      <div className="container">
        <section></section>
        <section></section>
        <section></section>
      </div>
    </>
  );
};