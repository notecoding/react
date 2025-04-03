// src/components/Header.jsx
import React from 'react';

// 스타일 객체
const headerStyle = {
    backgroundColor: '#4CAF50',
    color: 'white',
    textAlign: 'center',
    padding: '20px',
};

const Header = () => (
    <header style={headerStyle}>
        <h1>간단한 웹페이지</h1>
    </header>
);

export default Header;
