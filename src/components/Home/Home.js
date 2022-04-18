import React from "react";
import "./Home.css";
import { Card, CardGroup } from "react-bootstrap";

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to my "tution provider" website</h1>
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
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="card-individual">
            <Card.Img variant="top" src="images/service-2.jpg" />
            <Card.Body>
              <Card.Title>For High School Student</Card.Title>
              <Card.Text>
                This card has supporting text below as a natural lead-in to
                additional content.{" "}
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="card-individual">
            <Card.Img variant="top" src="images/service-3.jpg" />
            <Card.Body>
              <Card.Title>For College Student</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
      </div>
      <footer className="footer">
        <h2>This is footer</h2>
      </footer>
    </div>
  );
};

export default Home;
