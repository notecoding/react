import React, { useState } from 'react';

const History = () => {
  const [years] = useState([
    { year: 1999, event: '네이버 설립' },
    { year: 2002, event: '지식인 서비스 시작' },
    { year: 2013, event: 'LINE 3억 다운로드 달성' }
  ]);

  return (
    <section style={{ padding: '20px' }}>
      <h2>회사 연혁</h2>
      <ul>
        {years.map((item, index) => (
          <li key={index}>{item.year} - {item.event}</li>
        ))}
      </ul>
    </section>
  );
};

export default History;
