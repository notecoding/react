import React, { useState } from 'react';

const Vision = () => {
  const [showVision, setShowVision] = useState(false);

  return (
    <section style={{ padding: '20px', backgroundColor: '#f0f0f0' }}>
      <h2>비전</h2>
      <button onClick={() => setShowVision(!showVision)}>
        {showVision ? '비전 숨기기' : '비전 보기'}
      </button>
      {showVision && (
        <p>
          네이버는 기술과 혁신으로 더 나은 세상을 만듭니다.
        </p>
      )}
    </section>
  );
};

export default Vision;
