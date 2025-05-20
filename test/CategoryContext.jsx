// 📁 src/context/CategoryContext.jsx

import React, { createContext, useState, useEffect } from 'react';
import axios from '../api/axios';

export const CategoryContext = createContext();

export const CategoryProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);

  const fetchCategories = async () => {
    try {
      const res = await axios.get('/categories');
      setCategories(res.data.data);
    } catch (err) {
      console.error('카테고리 불러오기 실패:', err);
    }
  };

  const createCategory = async ({ name }) => {
    await axios.post('/categories', { name });
    fetchCategories();
  };

  const updateCategory = async (id, { name }) => {
    await axios.put(`/categories/${id}`, { name });
    fetchCategories();
  };

  const deleteCategory = async (id) => {
    await axios.delete(`/categories/${id}`);
    fetchCategories();
  };

  const reorderCategories = async (draggedId, newOrder) => {
    await axios.post('/categories/reorder', { draggedId, newOrder });
    fetchCategories();
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <CategoryContext.Provider
      value={{
        categories,
        fetchCategories,
        createCategory,
        updateCategory,
        deleteCategory,
        reorderCategories,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};
