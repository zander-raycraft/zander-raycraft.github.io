import React, { useEffect, useState, useRef } from "react";

const Typewriter = () => {
  const [text, setText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const words = ["Programmer"];
  const delay = 200;
  const loopDelay = 2000;
  const animateRef = useRef(true);

  useEffect(() => {
    animateRef.current = true;
    animateText();
    return () => {
      animateRef.current = false;
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor((prevShowCursor) => !prevShowCursor);
    }, 500);

    return () => {
      clearInterval(cursorTimer);
    };
  }, []);

  const animateText = () => {
    if (!animateRef.current) {
      return;
    }

    words.forEach((word, index) => {
      animateWord(word, index);
    });
  };

  const animateWord = (word, index) => {
    let currentWord = "";
    let wordIndex = 0;
    const wordTimer = setInterval(() => {
      if (!animateRef.current) {
        clearInterval(wordTimer);
        return;
      }

      currentWord = word.substring(0, wordIndex + 1);
      setText(currentWord);
      wordIndex++;

      if (wordIndex === word.length) {
        clearInterval(wordTimer);
        setTimeout(() => {
          deleteWord(word, index);
        }, delay * 3);
      }
    }, delay);
  };

  const deleteWord = (word, index) => {
    let currentWord = word;
    const deleteTimer = setInterval(() => {
      if (!animateRef.current) {
        clearInterval(deleteTimer);
        return;
      }

      currentWord = currentWord.substring(0, currentWord.length - 1);
      setText(currentWord);

      if (currentWord === "") {
        clearInterval(deleteTimer);
        if (index === words.length - 1) {
          setTimeout(() => {
            setText("");
            animateText();
          }, loopDelay);
        }
      }
    }, delay / 2);
  };

  return (
    <div>
      <h3>
        {text}
        {showCursor && <span className="cursor-line">|</span>}
      </h3>
    </div>
  );
};

export default Typewriter;