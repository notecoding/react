import React, { useState } from 'react';

const Footer = () => {
  const [clicks, setClicks] = useState(0);

  return (
    <footer style={{ padding: '20px', textAlign: 'center', backgroundColor: '#222', color: '#aaa' }}>
      <p onClick={() => setClicks(clicks + 1)} style={{ cursor: 'pointer' }}>
        ⓒ 2025 NAVER Corp. | 클릭 수: {clicks}
      </p>
    </footer>
  );
};

export default Footer;
