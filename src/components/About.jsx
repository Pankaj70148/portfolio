import React from "react";
import "./style/About.css";
// import photo from "./../assets/images/photo.png"
function About() {
  return (
    <>
      <div>
        <div className="about">
          <h2>About Me</h2>
          <h1 className="highlight">Know More</h1>
          <hr />
          <div className="content">
            <div className="info">
              <p>
                {/* <img src={} alt="Mypicture" /> */}
                My name is <span className="highlight">Pankaj Singh</span>
                currently persuing B.Tech. i will be graduate in 2024 from Sharda University
                greater noida with degree
                in computer science and engineer. i'm
                <span className="highlight"> MERN </span> stack developer. i'm
                very passionate about web developement and programming my goal
                is to become software engineer.in my free time i like to work
                on projects. i'm currently looking for full-time{" "} entry-level{" "} 
                <span className="highlight">SOFTWARE ENGINEERING</span> or{" "}
                <span className="highlight">WEB DEVELOPMENT</span>{" "}
                opportunities.
              </p>
              <hr />
              <h1 className="highlight">Education</h1>
              <hr />
              <div className="education">
                <span id="college-name">
                  <h4 className="highlight">B.TECH(CSE)</h4>
                  <span>
Sharda University         <br />
                    2020-2024
                  </span>
                  <br />
                </span>
              </div>
              <hr />
              <h1 className="highlight">Certificates</h1>
              <hr />
              <div id="certification">
                
                <span>
                  <p>Course : Nodejs  <br /> 
                  Mode : Online <br />
                  Offered through : Scaler Topics</p>
                </span>
                <span>
                  <p>Course : SQL Database Foundation <br /> 
                  Mode : Online <br />
                  Offered through : Oracle</p>
                </span>
                <span>
                  <p>Course : Full Stack Web development <br /> 
                  Mode : Online<br />
                  Offered through : Techplement Company</p>
                </span>
                <span>
                  <p>Course : Essential Google Cloud Infrastructure: Foundation<br/>
                  Mode : Online <br />
                  Offered through : Coursera</p>
                </span>
              </div>
              <hr />
              <p id="fixed-background"></p>
              <h1 className="highlight">Projects</h1>
              <hr />

              <div className="projects">
                <span className="project">
                  <h4 className="highlight">E-commerce Website</h4>
                  <span className="project-description">
                    It is a ecommerce web application used to buy and sell your product thjrough online integrated with real time payment system 
                  </span>{" "}
                  <br />
                  <a
                    className="btn btn-success"
                    href=" "
                    target={"_blank"} rel="noreferrer"
                  >
                    Visit
                  </a>
                </span>
                <span className="project">
                  <h4 className="highlight">Chat app</h4>
                  <span>
                    It is chat application used to  send and receve a real time messages .
                  </span>
                  <br />
                  <a className="btn btn-success" href="https://realtime-chatapp-r90m.onrender.com">
                    Visit
                  </a>
                </span>

                <span className="project">
                  <h4 className="highlight">Ecommere Dashboard</h4>
                  <span>
                  It is a ecommerce website Dashboard  application used to  List the product and update the product and delete the product of your item. 
                  </span>
                  <br />
                  <a className="btn btn-success" href="https://realtime-chatapp-r90m.onrender.com">
                    Visit
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
