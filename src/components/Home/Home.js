import React, { useState } from "react";
import "./Home.css";
import { Carousel } from "react-bootstrap";

import banner1 from '../../images/banner-1.jpg'
import banner2 from '../../images/banner-2.png'
import banner3 from '../../images/banner-3.png'
import Services from "../Services/Services";
import Rechart from "../Rechart/Rechart";

const Home = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (

    <div className="home">

      <h3>Welcome to <span className="web-title">"Tution Provider"</span> </h3>

      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={banner1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Best Quality and Accuracy</h3>
            <p>You may get a great support with professionalism.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={banner2}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Consistency first priority</h3>
            <p>Punctuality and timeliness is my teaching key and success since 10 years.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={banner3}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Integrity of my professionalism</h3>
            <p>
              Persistent feedback you will get at any time by questioning me.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>


      <Services></Services>


      {/* <div className="additional-portion">
      <h2>Statistics : <small>(pie-chart)</small> </h2>
      <div className="rechart-part">
          <Rechart></Rechart>
      </div>
    </div> */}

    </div>
  );
};

export default Home;
