import axios from 'axios';

const REACT_APP_API_URL = process.env.REACT_APP_API_URL;

const axiosApi = axios.create({
  baseURL: REACT_APP_API_URL,
});

axios.interceptors.request.use(function (config) {
  return config;
});

axiosApi.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
);

export async function get(url, config) {
  return await axiosApi
    .get(url, {
      ...config,
    })
    .then((response) => response.data);
}

export async function post(url, config) {
  return await axiosApi
    .post(url, {
      ...config,
    })
    .then((response) => response.data);
}

export async function del(url, config) {
  return await axiosApi
    .delete(url, {
      ...config,
    })
    .then((response) => response);
}

export async function patch(url, config) {
  return await axiosApi
    .patch(url, {
      ...config,
    })
    .then((response) => response.data);
}