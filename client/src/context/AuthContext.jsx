import { createContext, useState, useEffect, useContext } from "react";
import toast from "react-hot-toast";
import { axiosInstance } from "../config/axiosInstance";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchUser = async () => {
    setLoading(true);
    setError(null);
    try {
      const authToken = localStorage.getItem("authToken");
      const response = await axiosInstance.get("/users/profile", {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });
      setUser(response.data);
      console.log(response.data);
    } catch (err) {
      console.error("Error fetching user data", err);
      setError("Failed to fetch user data");
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  const registerUser = async (credentials) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axiosInstance.post("/auth/sign-up", credentials);
      setUser(response.data);
      toast.success("Registered successfully");
      localStorage.setItem("authToken", response.data.authToken);
      fetchUser();
    } catch (err) {
      console.error("Error registering", err);
      setError("Registration failed");
      toast.error("Registration failed");
    } finally {
      setLoading(false);
    }
  };

  const loginUser = async (credentials) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axiosInstance.post("/auth/sign-in", credentials);
      setUser(response.data);
      toast.success("Logged in successfully");
      localStorage.setItem("authToken", response.data.authToken);
      fetchUser();
    } catch (err) {
      console.error("Error logging in", err);
      setError("Login failed");
      toast.error("Login failed");
    } finally {
      setLoading(false);
    }
  };

  const logoutUser = async () => {
    setLoading(true);
    setError(null);
    try {
      await axiosInstance.post("/auth/sign-out");
      setUser(null);
      toast.success("Logged out successfully");
      localStorage.removeItem("authToken");
      fetchUser();
    } catch (err) {
      console.error("Error logging out", err);
      setError("Logout failed");
      toast.error("Logout failed");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        error,
        registerUser,
        loginUser,
        logoutUser,
        fetchUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  const {
    user,
    loading,
    error,
    registerUser,
    loginUser,
    logoutUser,
    fetchUser,
  } = context;

  return {
    user,
    loading,
    error,
    registerUser,
    loginUser,
    logoutUser,
    fetchUser,
  };
};
