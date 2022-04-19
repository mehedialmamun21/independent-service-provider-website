import React from "react";
import "./Home.css";
import {Card, CardGroup} from "react-bootstrap";
import {Link} from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <h1 className="home-title">Welcome to my "Tuition Provider" website</h1>

      <div className="banner-section">
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                className="d-block w-100"
                src="https://previews.123rf.com/images/dizanna/dizanna1703/dizanna170301113/74323831-hand-writing-tuition-with-marker-concept-background.jpg"
                alt="First slide"
              />
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>

      <div className="service-section">
        <h3>Our Services : </h3>
        <div>
          <CardGroup className="cards">
            <Card className="card-individual ">
              <Card.Img variant="top" src="images/service-1.jpg" />
              <Card.Body>
                <Card.Title className="fw-bold">
                  For Primary School Student
                </Card.Title>
                <Card.Text>
                  Provide Best quality tution with extra care and affections.
                </Card.Text>
                <p>price : 3000/=</p>
                <Link to="/checkout">
                  <button className="btn btn-success btn-lg ml-auto">
                    Book now
                  </button>
                </Link>
              </Card.Body>
            </Card>
            <Card className="card-individual">
              <Card.Img variant="top" src="images/service-2.jpg" />
              <Card.Body>
                <Card.Title>For High School Student</Card.Title>
                <Card.Text>
                  Provide high quality tution service for high school student.
                </Card.Text>
                <p>price : 4000/=</p>
                <Link to="/checkout">
                  <button className="btn btn-success btn-lg ml-auto">
                    Book now
                  </button>
                </Link>
              </Card.Body>
            </Card>
            <Card className="card-individual">
              <Card.Img variant="top" src="images/service-3.jpg" />
              <Card.Body>
                <Card.Title>For College Student</Card.Title>
                <Card.Text>
                  Provide creative knowledge as well as academic improvement for
                  higher secondary students.
                </Card.Text>
                <p>price : 5000/=</p>
                <Link to="/checkout">
                  <button className="btn btn-success btn-lg ml-auto">
                    Book now
                  </button>
                </Link>
              </Card.Body>
            </Card>
          </CardGroup>
        </div>
      </div>

      <div className="footer-section">
        <footer>
          <div className="footer-text">
            <h2>
              Everything is possible with right information and guidelines.
            </h2>
            <small>
              © copyright : All rights are reserved by "Tution Provider"
            </small>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Home;
