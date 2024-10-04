import React, { useRef } from "react";
import Typewriter from "typewriter-effect";
import "./style/Header.css";
import Navbar from "./Navbar";
function Header() {
  const introArray = useRef([
    "PANKAJ SINGH",
    "WEB DEVELOPER",
    "PROGRAMMER",
  ]);
  return (
    <>
      <div className="container-fluid header"></div>
      <div className="header-content">
        <Navbar/>
        <div className="short-intro">
          <h1 id="welcome">Welcome</h1>
          <h2>
            Hi I Am{" "}
            <span id="intro-highlight">
              <Typewriter
                options={{
                  loop: true,
                  delay:90
                }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString(introArray.current[0])
                    .pauseFor(2000)
                    .deleteAll()
                    .typeString(introArray.current[1])
                    .pauseFor(2000)
                    .deleteAll()
                    .typeString(introArray.current[2])
                    .pauseFor(2000)
                    .deleteAll()
                    .typeString(introArray.current[1])
                    .start();
                }}
              />
            </span>
          </h2>
          <h6>Lived In Greater Noida NCR India</h6>
        </div>
      </div>
    </>
  );
}

export default Header;
