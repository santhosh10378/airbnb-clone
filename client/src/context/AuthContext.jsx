import { createContext, useState, useEffect, useContext } from "react";
import toast from "react-hot-toast";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("authToken"));
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchUser = async () => {
    setLoading(true);
    setError(null);
    try {
      const authToken = localStorage.getItem("authToken");
      const response = await axios.get("/users/profile", {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
        withCredentials: true,
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
      const response = await axios.post("/auth/sign-up", credentials, {
        withCredentials: true,
      });
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
      const response = await axios.post("/auth/sign-in", credentials, {
        withCredentials: true,
      });
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
      await axios.post("/auth/sign-out", {
        withCredentials: true,
      });
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
        token,
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
    token,
  } = context;

  return {
    user,
    loading,
    error,
    registerUser,
    loginUser,
    logoutUser,
    fetchUser,
    token,
  };
};
