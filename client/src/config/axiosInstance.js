import axios from "axios";
import { useAuth } from "../context/AuthContext";

const backendURL = import.meta.env.VITE_BACKEND_URL;
const baseURL = `${backendURL}/api`;
const { token } = useAuth();

export const axiosInstance = axios.create({
  baseURL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
});
