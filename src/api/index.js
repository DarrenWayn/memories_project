import axios from 'axios'

const url = 'http://localhost:5001/posts'

export const fetchPosts = () => axios.get(url)
export const createPost = (newPosts) => axios.post(url, newPosts)

// const API = axios.create({ baseURL: "http://localhost:5001" })
// export const fetchPosts = () => API.get("/posts")