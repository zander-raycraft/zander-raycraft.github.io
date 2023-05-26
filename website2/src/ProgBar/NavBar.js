import "./styles.css";
import "./traingleStyle.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect } from "react";

export const PersonalPage = () => {
  //Making the background for the page
  const triangleBase = 48;

  const container = document.querySelector(".triangle-container");

  const instantiateGrid = () => {
    container.innerHTML = '';
    const width = document.body.clientWidth;
    const heigth = document.body.clientHeight * 0.4;

    let columns = Math.ceil(width / (triangleBase * 2)) + 1;
    let rows = Math.ceil(heigth / triangleBase * 1.733);
    container.style.setProperty('--columns', columns);

    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < columns; x++) {
        createTriangleSet(x + y * columns, x, y);
      }
    }
  }

  const createTriangleSet = (index, column, row) => {
    let el = document.createElement("div");
    el.classList.add("triangle-set");
    if (row % 2 === 0) el.classList.add("triangle-set--offset");
    
    container.appendChild(el);
  }

  window.onresize = () => {
    instantiateGrid();
  }

  instantiateGrid();
  const glow = document.body.querySelector("#glow")

  window.addEventListener('mousemove', (event) => {
    glow.style.top = event.pageY + "px";
    glow.style.left = event.pageX + "px";
  });
   
  
  //Creating the moving progress bar
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
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css"></link>
      <progress max="100" value="0"></progress>
      <nav>
        <h1>Zander <span>Raycraft</span></h1>
        <div className="hamburgerMenu">

        </div>
      </nav>
      <div class="hero">
        <div id="glow"></div>
        <div class="triangle-container"></div>
        <h1>Zander Raycraft</h1>
      </div>
      <div className="container">
        <section></section>
        <section></section>
        <section></section>
      </div>
    </>
  );
};