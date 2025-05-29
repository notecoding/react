// src/pages/Mypage.js

import React from 'react';
import { Navigate } from 'react-router-dom';

function Mypage() {
  const isLoggedIn = false; // 예시: 실제 로그인 상태를 불러와야 함

  if (!isLoggedIn) {
    return <Navigate to="/login" replace={true} />;
  }

  return (
    <div>
      마이 페이지
    </div>
  );
}

export default Mypage;
