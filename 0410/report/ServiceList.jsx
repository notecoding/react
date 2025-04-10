import React from 'react';

const ServiceList = ({ services }) => (
  <section style={{ padding: '20px' }}>
    <h2>주요 서비스</h2>
    <ul>
      {services.map((service, index) => (
        <li key={index}>{service}</li>
      ))}
    </ul>
  </section>
);

export default ServiceList;
