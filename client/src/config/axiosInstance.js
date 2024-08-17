import axios from "axios";

const backendURL = import.meta.env.VITE_BACKEND_URL;
const baseURL = `${backendURL}/api`;

export const axiosInstance = axios.create({
  baseURL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});
