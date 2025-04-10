import React from 'react';

const Header = ({ companyName }) => (
  <header style={{ padding: '20px', backgroundColor: '#03c75a', color: 'white' }}>
    <h1>{companyName}</h1>
  </header>
);

export default Header;
