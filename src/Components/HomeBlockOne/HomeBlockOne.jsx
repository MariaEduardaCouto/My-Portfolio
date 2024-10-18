import React, { useEffect, useRef, useLayoutEffect, useState } from "react";
import "./style.css";
import Hand from "../../assets/svg/hand.svg";
import Button from "../Button";
import { t } from "i18next";
// import Video from "../../../public/videos/videoAvatar.mp4";
import Placeholder from "../../assets/placeHolder.png";

import Speaker from "../../assets/svg/speaker.svg";
import SpeakerX from "../../assets/svg/speakerX.svg";

export default function HomeBlockOne() {
  const handRef = useRef(null);
  const nameRef = useRef(null);
  const frontRef = useRef(null);
  const h3Ref = useRef(null);

  const videoRef = useRef(null); 
  const [isMuted, setIsMuted] = useState(true);
  const [videoPlayed, setVideoPlayed] = useState(false);

  const toggleSound = () => {
    setIsMuted(!isMuted);

 
    if (videoRef.current && !videoPlayed) {
      videoRef.current.play();
      setVideoPlayed(true); 
    }
  };
  

  useEffect(() => {
    const handElement = handRef.current;
    const nameElement = nameRef.current;
    const frontElement = frontRef.current;
    const h3Element = h3Ref.current;

    if (handElement && nameElement && frontElement && h3Element) {
      handElement.classList.add("wave");

      setTimeout(() => {
        handElement.classList.remove("wave");

        setTimeout(() => {
          nameElement.classList.add("highlight");

          setTimeout(() => {
            frontElement.classList.add("highlight");
          }, 300);
        }, 300);
      }, 1000);

      const handleMouseEnter = () => {
        handElement.classList.add("wave");
      };

      const handleMouseLeave = () => {
        handElement.classList.remove("wave");
      };

      h3Element.addEventListener("mouseenter", handleMouseEnter);
      h3Element.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        h3Element.removeEventListener("mouseenter", handleMouseEnter);
        h3Element.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, []);



  return (
    <section id="home" className=" section">
      <div className="main-content p-4 md:p-10 intro-content">
        <div className="intro-text-content w-[80%]">
          <h3 ref={h3Ref} className="title text-3xl">
            <img
              ref={handRef}
              src={Hand}
              alt="Hand Waving"
              className="hand-wave "
            />
            Hello, I'm{" "}
            <span ref={nameRef} className="name-highlight">
              Maria Eduarda Lima
            </span>
          </h3>
          <p className="subTile text-xl py-8">
            A{" "}
            <span ref={frontRef} className="front-highlight">
              Front-end developer
            </span>{" "}
            passionate about crafting innovative and functional designs. I
            create engaging web experiences with a strong focus on usability,
            performance, and clean code.
          </p>
          <Button text={t("contactMe")} />
        </div>
        <div className="intro-video">
          <video
            ref={videoRef}
            src="src/assets/videoAvatar.mp4"
            // autoPlay
            muted={isMuted}
            poster={Placeholder}
            playsInline
            preload="auto"
            className="w-full h-auto object-cover"
            // onCanPlay={() => videoRef.current.play()}
            onEnded={(e) => e.target.removeAttribute("loop")} 
          />
      
          <div className="sound-button-container mt-4 flex justify-center">
            <button
              onClick={toggleSound}
              className="flex items-center px-4 py-2 rounded-full bg-[#8B00FF] text-white hover:bg-[#7000CC] transition-all duration-300"
            >
              <img
                src={isMuted ? SpeakerX : Speaker} 
                alt={isMuted ? "Sound Off" : "Sound On"}
                className="w-5 h-5 "
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
