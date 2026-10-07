import React from 'react';
import ServiceCard from './ServiceCard';

const ServiceList = ({ services }) => {
  return (
    <section className="services container">
      <h2>Доступные услуги и подписки</h2>
      <div className="services-grid">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </section>
  );
};

export default ServiceList;