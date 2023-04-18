import axios from "axios";
import { getCookie } from "cookies-next";

const http = axios.create({
  baseURL: "http://127.0.0.1:8000/api/",
  headers: {
    Accept: "application/json",
    Authorization: "Bearer " + getCookie("token"),
  },
});

export default http;
