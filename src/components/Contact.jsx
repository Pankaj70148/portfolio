import React from "react";
import insta from "./../assets/images/insta.png";
import linkedin from "./../assets/images/linkedin.png";
import mail from "./../assets/images/mail.png";
import phone from "./../assets/images/phone.png";
import github from "./../assets/images/github.png";
import "./style/Contact.css";
function Contact() {
  return (
    <div className="get-in-touch">
      <div className="info">
        <hr />
        <h1>Get In Touch</h1>
        <div className="contact">
          <span className="app">
            <a href="https://www.linkedin.com/in/pankaj-singh-2128b6229/">
              <img src={linkedin} alt="linkedin" />
            </a>
            <a href="https://github.com/Pankaj70148">
              <img src={github} alt="github" />
            </a>

            <a href="pankajsingh00203@gmail.com">
              <img src={mail} alt="email" />
            </a>
            <a href="8874103590">
              <img src={phone} alt="phone" />
            </a>
            <a href="">
              <img src={insta} alt="instagram" />
            </a>
          </span>
          <span className="contact-detail">
            <i>
              Anand nagar MaharajGanj Near Gorakhpur <br />
               Uttar Pradesh
              <br />
              <a href="pankajsingh00203@gmail.com">
                pankajsingh00203@gmail.com
              </a>
            </i>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Contact;
