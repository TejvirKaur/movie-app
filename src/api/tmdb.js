import axios from 'axios';

export const TMDB_BASE = 'https://api.themoviedb.org/3';
export const TMDB_API_KEY = 'a9afede7fac6f17d0ff8bfe7c02dd33b'; 

const api = axios.create({
  baseURL: TMDB_BASE,
  params: { api_key: TMDB_API_KEY }, 
});

export const fetchList = async (typeGroup, subtype, page = 1) => {
  const path = `/${typeGroup}/${subtype}`;
  const res = await api.get(path, { params: { page } });
  return res.data; 
};


export const search = async (searchType, query, page = 1) => {
  const path = `/search/${searchType}`;
  const res = await api.get(path, { params: { query, page } });
  return res.data;
};


export const getDetails = async (typeGroup, id) => {
  const path = `/${typeGroup}/${id}`;
  const res = await api.get(path);
  return res.data;
};
