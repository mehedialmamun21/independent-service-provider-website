import React, { useState } from "react";
import { Carousel } from "react-bootstrap";

import './Checkout.css'

import banner1 from '../../images/checkA.jpg'

import banner3 from '../../images/checkC.jpg'

const Checkout = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div className="checkout-details">
      <h2>Please Checkout your booking..</h2>
      <h3> ordered package quantity : 01 </h3>


      <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner1}
          alt="First slide"
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

      
    </div>
  );
};

export default Checkout;
