// import { Container } from "postcss";
import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import colorsharp from "../assets/img/color-sharp.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h1>Skills</h1>
              {/* <p>This is my skills set</p> */}
              <TrackVisibility>
                {({ isVisible }) => (
                  <div
                    className={
                      isVisible
                        ? "animate__animated animate__lightSpeedInRight"
                        : ""
                    }
                  >
                    <Carousel
                      responsive={responsive}
                      infinite={true}
                      className="skill-slider"
                    >
                      <div className="containerOn">
                        <div className="item">
                          <img
                            className="imageOn circular-mask"
                            src={meter1}
                            alt="img"
                          />
                          <h3 className="textOn">85%</h3>
                          <h5>Web Development</h5>
                        </div>
                      </div>
                      <div className="containerOn">
                        <div className="item">
                          <img
                            className="imageOn circular-mask"
                            src={meter2}
                            alt="img"
                          />
                          <h3 className="textOn ">77%</h3>
                          <h5>Mern-Stack Development</h5>
                        </div>
                      </div>
                      <div className="containerOn">
                        <div className="item">
                          <img
                            className="imageOn circular-mask"
                            src={meter3}
                            alt="img"
                          />
                          <h3 className="textOn">87%</h3>
                          <h5>Java</h5>
                        </div>
                      </div>
                      <div className="containerOn">
                        <div className="item">
                          <img
                            className="imageOn circular-mask"
                            src={meter3}
                            alt="img"
                          />
                          <h3 className="textOn">83%</h3>
                          <h5>Logo Design</h5>
                        </div>
                      </div>
                    </Carousel>
                  </div>
                )}
              </TrackVisibility>
              <TrackVisibility>
                {({ isVisible }) => (
                  <div
                    className={
                      isVisible
                        ? "animate__animated animate__lightSpeedInLeft"
                        : ""
                    }
                  >
                    <Carousel
                      responsive={responsive}
                      infinite={true}
                      className="skill-slider secondSlider"
                    >
                      <div className="containerOn">
                        <div className="item">
                          <img
                            className="imageOn circular-mask"
                            src={meter1}
                            alt="img"
                          />
                          <h3 className="textOn ">82%</h3>
                          <h5>Front-end Developer</h5>
                        </div>
                      </div>
                      <div className="containerOn">
                        <div className="item">
                          <img
                            className="imageOn circular-mask"
                            src={meter1}
                            alt="img"
                          />
                          <h3 className="textOn">87%</h3>
                          <h5>Python</h5>
                        </div>
                      </div>
                      <div className="containerOn">
                        <div className="item">
                          <img
                            className="imageOn circular-mask"
                            src={meter1}
                            alt="img"
                          />
                          <h3 className="textOn">84%</h3>
                          <h5>NodeJs</h5>
                        </div>
                      </div>
                    </Carousel>
                  </div>
                )}
              </TrackVisibility>
            </div>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-left"
        src={colorsharp}
        alt="color Sharp img"
      />
    </section>
  );
};
