import React from "react";
import userImg from "../assets/img/Sangram_img.jpeg";
import "animate.css";
import TrackVisibility from "react-on-screen";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/github.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const About = () => {
  const openTab = (event, tabname) => {
    var tablinks = document.getElementsByClassName("tab-links");
    var tabcontents = document.getElementsByClassName("tab-contents");
    for (let tablink of tablinks) {
      tablink.classList.remove("active-link");
    }
    for (let tabcontent of tabcontents) {
      tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
  };

  // const PDF_FILE_URL = "../assets/sangram-cv.pdf";
  // const downloadFileAtUrl = (url) => {
  //   const fileName = url.split("/").pop();
  //   const aTag = document.createElement("a");
  //   aTag.href = url;
  //   aTag.setAttribute("download", fileName);
  //   document.body.appendChild(aTag);
  //   aTag.click();
  //   aTag.remove();
  // };

  const PDF_FILE_NAME = "sangram-cv.pdf"; // Make sure the file name matches the actual file
  const PDF_FILE_URL = process.env.PUBLIC_URL + "/" + PDF_FILE_NAME;

  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="about-col-1">
            <img src={userImg} alt="User Image" />
          </div>
          <div className="about-col-2">
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible
                      ? "animate__animated animate__lightSpeedInLeft"
                      : ""
                  }
                >
                  <h1 className="sub-title">About me</h1>
                  <p>
                    Hello, I am Sangram Maitra, a passionate web developer
                    dedicated to honing my skills and staying up-to-date with
                    the latest trends and technologies. As a web developer, I am
                    committed to delivering exceptional user experiences and
                    creating innovative solutions that elevate businesses
                    online.
                  </p>
                  <div className="tab-titles">
                    <p
                      className="tab-links active-link"
                      onClick={(e) => {
                        openTab(e, "education");
                      }}
                    >
                      Educations
                    </p>
                    <p
                      className="tab-links"
                      onClick={(e) => {
                        openTab(e, "experience");
                      }}
                    >
                      Experiences
                    </p>
                    <p
                      className="tab-links"
                      onClick={(e) => {
                        openTab(e, "personal-details");
                      }}
                    >
                      Personal Details
                    </p>
                  </div>
                  <div className="tab-contents active-tab" id="education">
                    <ul>
                      <li>
                        <span>2016</span>
                        <br />
                        Class X From Andal Estern Railway High School
                      </li>
                      <li>
                        <span>2018</span>
                        <br />
                        Class XII From Andal High School
                      </li>
                      <li>
                        <span>2021</span>
                        <br />
                        Diploma From Bengal College Of Polytechnic
                      </li>
                      <li>
                        <span>2024(Ongoing)</span>
                        <br />
                        B.Tech From Heritage Institute Of Technology
                      </li>
                    </ul>
                  </div>
                  <div className="tab-contents" id="experience">
                    <ul>
                      <li>
                        <span>Full Stack Development</span>
                        <br />
                        Completed A Full-Stack Development Course Of Angela Yu
                      </li>
                      <li>
                        <span>Web-Devlopment Internship</span>
                        <br />
                        Completed A WebDevelopment Internship From Lets Grow
                        More
                      </li>
                      <li>
                        <span>Python Internship</span>
                        <br />
                        Completed A Python Internship From UpSkills
                      </li>
                      <li>
                        <span>MS Office</span>
                        <br />
                        Completed A MS office Course From Webel
                      </li>
                    </ul>
                  </div>
                  <div className="tab-contents" id="personal-details">
                    <ul>
                      <li>
                        <span>Email</span>
                        <br />
                        iamsangram2000@gmail.com
                      </li>
                      <li>
                        <span>Phone Number</span>
                        <br />
                        8250455810
                      </li>
                      {/* <li>
                        <span className="other-Connection">
                          Other Connection
                        </span>
                        <br />
                        <br />
                        <div className="social-icon">
                          <a href="https://www.linkedin.com/in/sangram-maitra-6a617b22a/">
                            <img src={navIcon1} alt="" />
                          </a>
                          <a href="https://github.com/Sangram-Maitra">
                            <img src={navIcon2} className="gitHub-img" alt="" />
                          </a>
                          <a href="https://www.instagram.com/sangram_maitra/">
                            <img src={navIcon3} alt="" />
                          </a>
                        </div>
                      </li> */}
                      <li>
                        <span>My CV</span>
                        <br />
                        <br />
                        <a
                          // onClick={() => {
                          //   downloadFileAtUrl(PDF_FILE_URL);
                          // }}
                          href={PDF_FILE_URL}
                          download
                          className="btn btn2"
                        >
                          Download Cv
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </TrackVisibility>
          </div>
        </div>
      </div>
    </div>
  );
};
