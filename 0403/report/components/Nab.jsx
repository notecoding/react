// src/components/Nav.jsx
import React from 'react';

// 스타일 객체
const navStyle = {
    backgroundColor: '#333',
    overflow: 'hidden',
};

const navLinkStyle = {
    float: 'left',
    display: 'block',
    color: 'white',
    padding: '14px 20px',
    textAlign: 'center',
    textDecoration: 'none',
};

const Nav = () => (
    <nav style={navStyle}>
        <a href="#home" style={navLinkStyle}>홈</a>
        <a href="#about" style={navLinkStyle}>소개</a>
        <a href="#contact" style={navLinkStyle}>연락처</a>
    </nav>
);

export default Nav;
