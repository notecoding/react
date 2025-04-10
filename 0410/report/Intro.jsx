import React from 'react';

const Intro = ({ description }) => (
  <section style={{ padding: '20px' }}>
    <h2>회사 소개</h2>
    <p>{description}</p>
  </section>
);

export default Intro;
