import axios from "axios";
import { getCookie } from "cookies-next";

const http = axios.create({
  baseURL: "https://linktree.haruthya.my.id/api",
  headers: {
    Accept: "application/json",
  },
});

// set token to header
http.interceptors.request.use(
  async (config) => {
    const token = await getCookie("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default http;
