import React from "react";
import {Link} from "react-router-dom";

const ServiceDetail = () => {
  return (
    <div>
      <h2>Welcome to service detail section</h2>
      <div className="text-center">
        <Link to="/checkout">
          <button className="btn btn-primary">Proceed Checkout</button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceDetail;
