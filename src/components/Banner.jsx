import React from "react";
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket } from "@fortawesome/free-solid-svg-icons";
import { faFaceSmileWink } from "@fortawesome/free-regular-svg-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleteing, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(200 - Math.random() * 100);
  const toRotate = [
    "Web Developer",
    "Web Designer",
    "Mern Stack Developer",
    "Full Stack Developer",
    "UI/UX Designer",
  ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleteing
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);
    setText(updatedText);
    if (isDeleteing) {
      setDelta((prevDelta) => prevDelta / 1.2);
    }

    if (!isDeleteing && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(250 - Math.random() * 100);
    } else if (isDeleteing && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(250 - Math.random() * 100);
    }
  };

  const handleClick = () => {
    const connectSection = document.getElementById("connect");
    if (connectSection) {
      // Scroll to the top position of the "connect" section
      window.scrollTo({
        top: connectSection.offsetTop,
        behavior: "smooth", // Optional: Adds smooth scrolling animation
      });
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible
                      ? "animate__animated animate__lightSpeedInRight"
                      : ""
                  }
                >
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>
                    {`Hi I'm Sangram`}
                    <span className="wrap"> {text}</span>
                  </h1>
                  <p>
                    Hello there! I'm Sangram Maitra, a passionate web developer
                    and currently a 4th-year student pursuing a Bachelor's
                    degree in Information Technology at Heritage Institute of
                    Technology, Kolkata.
                  </p>
                  <p>
                    Let's Embark on the Web-Development Journey together.
                    <FontAwesomeIcon
                      icon={faRocket}
                      size="2xl"
                      style={{
                        color: "#ffffff",
                        paddingLeft: "7px",
                        paddingRight: "7px",
                      }}
                    />
                    <FontAwesomeIcon
                      icon={faFaceSmileWink}
                      size="2xl"
                      style={{ color: "#ffffff" }}
                    />
                  </p>
                  <button onClick={() => handleClick()}>
                    Lets Connect
                    <ArrowRightCircle size={25} />
                  </button>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="Header Img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
