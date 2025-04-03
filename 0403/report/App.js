// src/App.js
import React from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import Section from './components/Section';
import Footer from './components/Footer';

// 스타일 객체
const bodyStyle = {
    fontFamily: 'Arial, sans-serif',
    margin: 0,
    padding: 0,
    backgroundColor: '#f0f0f0',
};

const App = () => (
    <div style={bodyStyle}>
        <Header />
        <Nav />
        <Section />
        <Footer />
    </div>
);

export default App;
