import axios from 'axios';

const url = 'http://localhost:5000/posts';
const coinUrl = 'http://localhost:5000/coins';

export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost);
export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);
export const deletePost = (id) => axios.delete(`${url}/${id}`);
export const addSharesPost = (id) => axios.patch(`${url}/${id}/addSharesPost`);
export const getCoinData = (id) => axios.get(`${coinUrl}/${id}`);