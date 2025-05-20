// 📁 src/context/PostContext.jsx
import React, { createContext, useState, useEffect } from 'react';
import axios from '../api/axios';

export const PostContext = createContext();

export const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    try {
      const res = await axios.get('/posts');
      setPosts(res.data.data);
    } catch (err) {
      console.error('게시글 불러오기 실패:', err);
    }
  };

  const getPost = async (id) => {
    const res = await axios.get(`/posts/${id}`);
    return res.data;
  };

  const createPost = async (data) => {
    const res = await axios.post('/posts', data);
    fetchPosts();
    return res.data;
  };

  const updatePost = async (id, data) => {
    await axios.put(`/posts/${id}`, data);
    fetchPosts();
  };

  const deletePost = async (id) => {
    await axios.delete(`/posts/${id}`);
    fetchPosts();
  };

  const toggleLike = async (id) => {
    await axios.post(`/posts/${id}/like`);
    fetchPosts();
  };

  return (
    <PostContext.Provider
      value={{
        posts,
        fetchPosts,
        getPost,
        createPost,
        updatePost,
        deletePost,
        toggleLike,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};
