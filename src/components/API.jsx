import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API = '9742a534ac4ccb4bac2b38742811ffe0'

const params = {
  params: {
    api_key: API,
    language: 'en-US',
  },
};


export const fetchTrendingMovies = async () => {
  const resp = await axios.get(`/trending/movie/day`,params);
  return resp.data;
};


export const fetchSearchMovies = async (query) => {
  const resp = await axios.get(`/search/movie?query=${query}`,params);
 return resp.data
};

export const fetchMoreDetails = async (id ) => {
  const resp = await axios.get(`/movie/${id}`,params);
  return resp.data;
};

export const fetchCast = async (id) => {
  const resp = await axios.get(`movie/${id}/credits?`, params);
  return resp.data;
};


export const fetchReviews = async (movieId ) => {
  const resp = await axios.get(`movie/${movieId}/reviews?`, params);
  return resp.data;
};

