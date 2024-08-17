import { createContext, useState, useContext } from "react";
import toast from "react-hot-toast";
import { axiosInstance } from "../config/axiosInstance";

export const PropertiesContext = createContext();

export const PropertiesProvider = ({ children }) => {
  const [properties, setProperties] = useState([]);
  const [myProperties, setMyProperties] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchProperties = async (query = "") => {
    setLoading(true);
    setError(null);
    try {
      const response = await axiosInstance.get(
        `/properties${query ? `?${query}` : ""}`
      );
      setProperties(response.data);
    } catch (err) {
      console.error("Error fetching properties", err);
      setError("Failed to fetch properties");
    } finally {
      setLoading(false);
    }
  };

  const fetchMyProperties = async (hostId) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axiosInstance.get(`/properties?hostId=${hostId}`);
      setMyProperties(response.data);
    } catch (err) {
      console.error("Error fetching my properties", err);
      setError("Failed to fetch my properties");
    } finally {
      setLoading(false);
    }
  };

  const addProperty = async (propertyData) => {
    setLoading(true);
    setError(null);

    const formData = new FormData();
    Object.keys(propertyData).forEach((key) => {
      formData.append(key, propertyData[key]);
    });

    try {
      const response = await axiosInstance.post("/properties/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setProperties((prevProperties) => [...prevProperties, response.data]);
      setMyProperties((prevProperties) => [...prevProperties, response.data]);
      toast.success("Property added successfully");
    } catch (err) {
      console.error("Error adding property", err);
      setError("Failed to add property");
      toast.error("Failed to add property");
    } finally {
      setLoading(false);
    }
  };

  const updateProperty = async (id, propertyData) => {
    setLoading(true);
    setError(null);

    const formData = new FormData();
    Object.keys(propertyData).forEach((key) => {
      formData.append(key, propertyData[key]);
    });

    try {
      const response = await axiosInstance.put(`/properties/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setProperties((prevProperties) =>
        prevProperties.map((property) =>
          property.id === id ? response.data : property
        )
      );
      setMyProperties((prevProperties) =>
        prevProperties.map((property) =>
          property.id === id ? response.data : property
        )
      );
      toast.success("Property updated successfully");
    } catch (err) {
      console.error("Error updating property", err);
      setError("Failed to update property");
      toast.error("Failed to update property");
    } finally {
      setLoading(false);
    }
  };

  const deleteProperty = async (id) => {
    setLoading(true);
    setError(null);
    try {
      await axiosInstance.delete(`/properties/${id}`);
      setProperties((prevProperties) =>
        prevProperties.filter((property) => property.id !== id)
      );
      setMyProperties((prevProperties) =>
        prevProperties.filter((property) => property.id !== id)
      );
      toast.success("Property deleted successfully");
    } catch (err) {
      console.error("Error deleting property", err);
      setError("Failed to delete property");
      toast.error("Failed to delete property");
    } finally {
      setLoading(false);
    }
  };

  return (
    <PropertiesContext.Provider
      value={{
        properties,
        myProperties,
        loading,
        error,
        fetchProperties,
        fetchMyProperties,
        addProperty,
        updateProperty,
        deleteProperty,
      }}
    >
      {children}
    </PropertiesContext.Provider>
  );
};

export const useProperties = () => {
  const context = useContext(PropertiesContext);
  if (context === undefined) {
    throw new Error("useProperties must be used within a PropertiesProvider");
  }

  const {
    properties,
    myProperties,
    loading,
    error,
    fetchProperties,
    fetchMyProperties,
    addProperty,
    updateProperty,
    deleteProperty,
  } = context;

  return {
    properties,
    myProperties,
    loading,
    error,
    fetchProperties,
    fetchMyProperties,
    addProperty,
    updateProperty,
    deleteProperty,
  };
};
