import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="sticky-top">
        <Navbar className="bg-secondary fw-bolder">
          <Container>
            <Link to="/" style={{ textDecoration: "none", fontSize: "25px" }}>
              <i class="fa-solid fa-heart-pulse"></i> FitAhead
            </Link>
            <Nav className="ms-auto pt-2 gap-4">
              <Link to="/home" style={{ textDecoration: "none" }}>
                Home
              </Link>
              <Link to="/schedules" style={{ textDecoration: "none" }}>
                Scheduled Workouts
              </Link>
              <Link to="/completed" style={{ textDecoration: "none" }}>
                Completed Sessions
              </Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
    </>
  );
};

export default Header;
