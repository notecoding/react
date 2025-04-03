// src/components/Section.jsx
import React from 'react';

// 스타일 객체
const sectionStyle = {
    padding: '20px',
};

const Section = () => (
    <section style={sectionStyle}>
        <h2>환영합니다!</h2>
        <p>이것은 간단한 HTML과 CSS로 만든 웹페이지입니다. 페이지는 기본적인 레이아웃과 스타일을 가지고 있습니다.</p>
    </section>
);

export default Section;
