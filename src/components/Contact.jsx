import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import contactImg from "../assets/img/contact-img.svg";
import { Col, Row, Container } from "react-bootstrap";

export const Contact = () => {
  const form = useRef();
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});
  const [mailSent, setMailSent] = useState(false);

  const onFormUpdate = (category, value) => {
    setFormDetails({ ...formDetails, [category]: value });
  };

  const handleSubmitDummy = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "Application/json;charset=utf-8",
      },
      body: JSON.stringify(formDetails),
    });
    setButtonText("Send");
    let result = response.json();
    setFormDetails(formInitialDetails);
    if (result.code === 200) {
      setStatus({ success: true, message: "Message Sent Succesfully" });
    } else {
      setStatus({
        success: false,
        message: "Something went wrong, please try again later",
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    emailjs
      .sendForm(
        "service_xvg28q7",
        "template_685gfs6",
        form.current,
        "_0UvBbpQ0yE2nP-Y6"
      )
      .then(
        (result) => {
          setMailSent(true);
          setStatus({ success: true, message: "Message Sent Succesfully" });
          setButtonText("Send");
          e.target.reset();
          setFormDetails(formInitialDetails);
          //   console.log(result.text);
        },
        (error) => {
          console.log(error.text);
          setStatus({
            success: false,
            message: "Something went wrong, please try again later",
          });
        }
      );
    // console.log(mailSent);
    // if (mailSent === true) {
    //   setStatus({ success: true, message: "Message Sent Succesfully" });
    // } else {
    //   setStatus({
    //     success: false,
    //     message: "Something went wrong, please try again later",
    //   });
    // }
  };
  return (
    <section>
      <Container className="contact" id="connect">
        <Row className="align-items-center">
          <Col md={6}>
            <img src={contactImg} />
          </Col>
          <Col md={6}>
            <h2>Get In Touch</h2>
            <form ref={form} onSubmit={handleSubmit}>
              <Row>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    value={formDetails.firstName}
                    placeholder="First Name"
                    name="first_name"
                    onChange={(e) => onFormUpdate("firstName", e.target.value)}
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    value={formDetails.lastName}
                    placeholder="Last Name"
                    name="last_name"
                    onChange={(e) => onFormUpdate("lastName", e.target.value)}
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="email"
                    value={formDetails.email}
                    placeholder="Email"
                    name="user_email"
                    onChange={(e) => onFormUpdate("email", e.target.value)}
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="number"
                    value={formDetails.phone}
                    placeholder="Phone Number"
                    name="user_phone"
                    onChange={(e) => onFormUpdate("phone", e.target.value)}
                  />
                </Col>
                <Col>
                  <textarea
                    row="6"
                    value={formDetails.message}
                    placeholder="Message"
                    name="message"
                    onChange={(e) => onFormUpdate("message", e.target.value)}
                  />
                  <button type="submit">
                    <span>{buttonText}</span>
                  </button>
                </Col>
                {status.message && (
                  <Col>
                    <p
                      className={
                        status.success === false ? "danger" : "Success"
                      }
                    >
                      {status.message}
                    </p>
                  </Col>
                )}
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
