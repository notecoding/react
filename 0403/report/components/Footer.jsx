// src/components/Footer.jsx
import React from 'react';

// 스타일 객체
const footerStyle = {
    backgroundColor: '#333',
    color: 'white',
    textAlign: 'center',
    padding: '10px',
    position: 'fixed',
    width: '100%',
    bottom: 0,
};

const Footer = () => (
    <footer style={footerStyle}>
        <p>© 2025 간단한 웹페이지</p>
    </footer>
);

export default Footer;
