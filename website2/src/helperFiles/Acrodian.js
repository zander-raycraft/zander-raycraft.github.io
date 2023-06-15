import React, { useRef, useState, useEffect } from "react";
import "./Acordian.css";

const faqs = [
  {
    id: 1,
    header: "Where am I from?",
    text: `I grew up in a small town called Dandridge, TN, about 40ish minutes east of
    Knoxville, TN. I attended Jefferson County High School, and am now living life up
    in Nashville, TN. Pretty much been in Tennessee all my life!`,
  },
  {
    id: 2,
    header: "What does my education look like?",
    text: `In grade school, I got a generalized education with a emphasis on buisness
    analytics and development. My alma matter was Jefferson County High School. I am
    currently a\n\njunior at Vanderbilt university, where I have been able to pursure
    my passion of technology, and am currently on track to double major in Computer
    Science and Cognitive Studies, with a minor in Engineeing Managment \nmeow meow meow`,
  },
  {
    id: 3,
    header: "What are some of my hobbies?",
    text: `When I am not tinkering with something, you can usually find me hanging out
    with friends. Some things I really like to do are spend time outdoors, either hiking
    or fly fishing. I love martial arts, I have a black belt in Muai Tai, and am apart
    of Vanderbilt's Jiujutsu intermural team. I love reading books and learning about new things,
    with topics ranging from space exploration to 1800s pirate escapades.`,
  },
  {
    id: 4,
    header: "What are my passions and goals?",
    text: `As a student I want to push myself to learn as much as I can. Recently I 
    have learned to hone in on what I am passionate about and really dive deep into 
    those. Some things that really spark my curiosity are technology, specifically
    software applications and development, and machine learning. My goal is to be
    able to create technologies that work towards solving everyday problems, such as
    affordable renewable energy. Outside of tech, I am really passionate about
    psychology and the understanding of then human mind, which can also be
    coupled with a passion for philosophy.`,
  },
];
const AccordionItem = (props) => {
  const contentEl = useRef(null);
  const { handleToggle, active, faq, index } = props;
  const { header, id, text } = faq;
  const { dropState } = useState("+")

  useEffect(() => {
    if (active === id) {
      contentEl.current.style.height = `${contentEl.current.scrollHeight}px`;
    } else {
      contentEl.current.style.height = "0px";
    }
  }, [active, id]);

  useEffect(() => {
    // Animate the item into position on mount
    contentEl.current.style.animation = `slide-in 0.5s ease-out ${index * 0.2}s`;
    contentEl.current.style.animationFillMode = "both";
  }, [index]);

  return (
    <div className="rc-accordion-card">
      <header
        className={active === id ? "active" : ""}
        onClick={() => handleToggle(id)}
      >
        <h2>{header}</h2>
        <span className="material-symbols-outlined">{ dropState }</span>
      </header>
      <div ref={contentEl} className={`collapse ${active === id ? "show" : ""}`}>
        <p>{text}</p>
      </div>
    </div>
  );
};

  

  export const Accordion = () => {
    const [active, setActive] = useState(null);
  
    const handleToggle = (index) => {
      if (active === index) {
        setActive(null);
      } else {
        setActive(index);
      }
    };
  
    return (
      <article>
        {faqs.map((faq, index) => {
          return (
            <AccordionItem
              key={index}
              index={index}
              active={active}
              handleToggle={handleToggle}
              faq={faq}
            />
          );
        })}
      </article>
    );
  };
  