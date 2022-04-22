import React from 'react';
import Service from '../Service/Service'
import './Services.css'

import service1 from '../../images/service-1.jpg';
import service2 from '../../images/service-2.jpg';
import service3 from '../../images/service-3.jpg'

const services = [
    {
        id:1, packageName:'For Primary School Student', img:service1, price:'3000/=', description:'Provide Best quality tution with extra care and affections.'
    },
    {
        id:2, packageName:'For High School Student', img:service2, price:'4000/=', description:'Provide high quality tution service for high school student.'
    },
    {
        id:3, packageName:'For College Student', img:service3, price:'5000/=', description : 'Provide creative knowledge as well as academic improvement for HSC students.'
    }
] 

const Services = () => {
    return (
        <div className='container'>
            <h2 className='text-center mt-5'>My Services are following : </h2>
            <div className="row">
                {
                    services.map(service => <Service
                        key={service.id}
                        service = {service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;