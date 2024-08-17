import axios from "axios";
import { useAuth } from "../context/AuthContext";

const backendURL = import.meta.env.VITE_BACKEND_URL;
const baseURL = `${backendURL}/api`;

export const useAxiosInstance = () => {
  const { token } = useAuth();

  const axiosInstance = axios.create({
    baseURL,
    withCredentials: true,
    headers: {
      "Content-Type": "application/json",
      Authorization: token ? `Bearer ${token}` : undefined,
    },
  });

  return axiosInstance;
};
