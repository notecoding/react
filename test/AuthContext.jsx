// 📁 src/context/AuthContext.jsx

import React, { createContext, useState, useEffect } from 'react';
import axios from '../api/axios';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const login = async ({ username, password }) => {
    setLoading(true);
    try {
      const res = await axios.post('/auth/login', { username, password });
      const { token, user } = res.data;

      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));
      setUser(user);
    } catch (err) {
      throw new Error('로그인 실패');
    } finally {
      setLoading(false);
    }
  };

  const register = async ({ name, username, password }) => {
    setLoading(true);
    try {
      await axios.post('/auth/register', { name, username, password });
    } catch (err) {
      throw new Error('회원가입 실패');
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  };

  useEffect(() => {
    const stored = localStorage.getItem('user');
    if (stored) setUser(JSON.parse(stored));
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
