import React, { useState } from 'react';

const SimplePage = () => {
  // 메시지 상태 관리
  const [message, setMessage] = useState('');

  // 버튼 클릭 시 메시지 변경 함수
  const changeMessage = () => {
    setMessage('버튼이 클릭되었습니다!');
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f0f8ff', textAlign: 'center', padding: '50px' }}>
      <h1 style={{ color: '#333' }}>환영합니다!</h1>
      <p style={{ color: '#555' }}>이것은 간단한 웹페이지입니다.</p>
      <button 
        onClick={changeMessage} 
        style={{
          padding: '10px 20px',
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          fontSize: '16px',
          cursor: 'pointer',
          borderRadius: '5px'
        }}
      >
        메시지 변경
      </button>
      <p style={{ fontSize: '18px', color: '#333', marginTop: '20px' }}>
        {message}
      </p>
    </div>
  );
};

export default SimplePage;
