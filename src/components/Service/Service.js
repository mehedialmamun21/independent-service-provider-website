import { Link } from 'react-router-dom';

const Service = ({service}) => {
    const {packageName,img,price,description} = service;

    return (
        <div className='g-5 col-sm-12 col-md-6 col-lg-4'>
            <div class="card" style={{width: '18rem'}}>
    <img src={img} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Package : {packageName}</h5>
      <p class="card-text">Details : {description}</p>
      <h4>Price : {price}</h4>
      <Link to="/checkout"> <button className="btn btn-success btn-lg ml-auto"> Buy now </button> </Link>
    </div>
  </div>
        </div>
    );
};

export default Service;