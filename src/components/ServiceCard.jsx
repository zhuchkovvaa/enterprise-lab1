import React from 'react';

const ServiceCard = ({ service }) => {
  return (
    <div className="card">
      <div className="card-img-wrapper">
        <img src={service.image} alt={service.title} />
      </div>
      <h3>{service.title}</h3>
      <p>{service.description}</p>
      <button className="btn-outline">Подробнее</button>
    </div>
  );
};

export default ServiceCard;