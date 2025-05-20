// 📁 src/App.js

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// ✅ 페이지
import Home from './pages/Home';
import MainBoard from './pages/MainBoard';
import WriteForm from './pages/WriteForm';
import PostDetail from './pages/PostDetail';
import Profile from './pages/Profile';

// ✅ 컴포넌트
import Header from './components/Header';
import LoginModal from './components/LoginModal';
import RegisterModal from './components/RegisterModal';
import SearchModal from './components/SearchModal';
import CategoryManagementModal from './components/CategoryManagementModal';

// ✅ Context
import { AuthProvider } from './context/AuthContext';
import { PostProvider } from './context/PostContext';
import { CategoryProvider } from './context/CategoryContext';

// ✅ 스타일
import './styles/styles.css'; // 전체 공통 스타일 파일 (선택)

function App() {
  const [loginOpen, setLoginOpen] = useState(false);
  const [registerOpen, setRegisterOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [categoryOpen, setCategoryOpen] = useState(false);

  return (
    <AuthProvider>
      <PostProvider>
        <CategoryProvider>
          <Router>
            {/* 상단 헤더 */}
            <Header
              toggleLoginModal={() => setLoginOpen(true)}
              toggleRegisterModal={() => setRegisterOpen(true)}
              toggleSearchModal={() => setSearchOpen(true)}
              toggleCategoryModal={() => setCategoryOpen(true)}
            />

            {/* 페이지 라우팅 */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/board/:categoryName" element={<MainBoard />} />
              <Route path="/write" element={<WriteForm />} />
              <Route path="/edit/:id" element={<WriteForm />} />
              <Route path="/post/:id" element={<PostDetail />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>

            {/* 모달들 */}
            {loginOpen && (
              <LoginModal
                onClose={() => setLoginOpen(false)}
                onSwitchToRegister={() => {
                  setLoginOpen(false);
                  setRegisterOpen(true);
                }}
              />
            )}

            {registerOpen && (
              <RegisterModal
                onClose={() => setRegisterOpen(false)}
                onSwitchToLogin={() => {
                  setRegisterOpen(false);
                  setLoginOpen(true);
                }}
              />
            )}

            {searchOpen && <SearchModal onClose={() => setSearchOpen(false)} />}

            {categoryOpen && <CategoryManagementModal onClose={() => setCategoryOpen(false)} />}
          </Router>
        </CategoryProvider>
      </PostProvider>
    </AuthProvider>
  );
}

export default App;
