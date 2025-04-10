import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header.jsx';
import Intro from './components/Intro.jsx';
import Vision from './components/Vision.jsx';
import ServiceList from './components/ServiceList.jsx';
import History from './components/History.jsx';
import Footer from './components/Footer.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));

const services = ['검색', '뉴스', '블로그', '쇼핑', '페이', 'LINE'];
const introText = '네이버는 최고의 기술 기업으로, 검색 포털뿐 아니라 다양한 분야에서 서비스를 제공하고 있습니다.';

root.render(
  <React.StrictMode>
    <Header companyName="NAVER" />
    <Intro description={introText} />
    <Vision />
    <ServiceList services={services} />
    <History />
    <Footer />
  </React.StrictMode>
);
