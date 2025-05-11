import React from "react";
import { Col, Container, FloatingLabel, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <hr />
      <Container>
        <Row>
          <Col>
            <h3 className="text-info fw-bolder">
              <i class="fa-solid fa-heart-pulse"></i> FitAhead
            </h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure
              incidunt mollitia laboriosam voluptate doloremque maiores
              consequatur, ea iste blanditiis necessitatibus ab, esse deserunt
              quam cupiditate nisi tempora inventore! Distinctio, dolorum?
            </p>
            <div className="ex-links d-flex justify-content-evenly">
              <Link className="border rounded-circle p-2 py-1 text-info">
                <i class="fa-brands fa-facebook fw-bolder fs-5"></i>
              </Link>
              <Link className="border rounded-circle p-2 py-1 text-danger">
                <i class="fa-brands fa-instagram fw-bolder fs-5"></i>
              </Link>
              <Link className="border rounded-circle p-2 py-1 text-dark">
                <i class="fa-brands fa-x-twitter fw-bolder fs-5"></i>
              </Link>
              <Link className="border rounded-circle p-2 py-1 text-danger">
                <i class="fa-brands fa-youtube fw-bolder fs-5"></i>
              </Link>
            </div>
          </Col>
          <Col>
            <h3 className="text-info fw-bolder">LINKS</h3>
            <div className="links d-flex flex-column">
              <Link to="/home" style={{ textDecoration: "none" }} className="text-dark">
                              Home
                            </Link>
               <Link to="/schedules" style={{ textDecoration: "none" }} className="text-dark">
                              Scheduled Workouts
                            </Link>
              <Link to="/completed" style={{ textDecoration: "none" }} className="text-dark">
                              Completed Sessions
                            </Link>
            </div>
          </Col>
          <Col className="d-flex flex-column">
            <h3 className="text-info fw-bolder">Contact Info</h3>
            <Link style={{ textDecoration: "none" }} className=" text-dark">
              <i class="fa-solid fa-phone-volume text-dark"></i> +1 (555)
              123-4567
            </Link>
            <Link style={{ textDecoration: "none" }} className=" text-dark">
              <i class="fa-solid fa-envelope text-dark"></i>{" "}
              gymbook.support@gmail.com
            </Link>
            <Link style={{ textDecoration: "none" }} className=" text-dark">
              <i class="fa-solid fa-location-dot text-dark"></i> GymBook HQ, 123
              Fitness Street, Trivandrum, Kerala, India - 695001
            </Link>
          </Col>
          <Col>
            <h3 className="text-info fw-bolder">Reach Out</h3>
            <Form>
              <FloatingLabel
                controlId="floatingName"
                label="Full Name"
                className="mb-3"
              >
                <Form.Control type="text" placeholder="John Doe" />
              </FloatingLabel>

              <FloatingLabel
                controlId="floatingEmail"
                label="Email address"
                className="mb-3"
              >
                <Form.Control type="email" placeholder="name@example.com" />
              </FloatingLabel>

              <FloatingLabel controlId="floatingTextarea" label="Your Message">
                <Form.Control
                  as="textarea"
                  placeholder="Leave a comment here"
                  style={{ height: "100px" }}
                />
              </FloatingLabel>
              <button className="btn w-100 rounded btn-primary mt-2">
                Send
              </button>
            </Form>
          </Col>
        </Row>
      </Container>
      <hr />
    </>
  );
};

export default Footer;
