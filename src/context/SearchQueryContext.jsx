import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SearchQueryContext = createContext();

export const SearchQueryProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState({
    propertyType: null,
    location: null,
    adults: null,
    children: null,
    infants: null,
    pets: null,
    startDate: null,
    endDate: null,
    minPrice: null,
    maxPrice: null,
    amenities: [],
  });

  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams();

    Object.entries(searchQuery).forEach(([key, value]) => {
      if (
        value !== null &&
        value !== undefined &&
        value.length !== 0 &&
        value !== "" &&
        value !== 0 &&
        !Number.isNaN(value)
      ) {
        params.set(key, value);
      } else {
        params.delete(key);
      }
    });

    navigate(`/?${params.toString()}`);
  }, [JSON.stringify(searchQuery), navigate]);

  return (
    <SearchQueryContext.Provider value={{ searchQuery, setSearchQuery }}>
      {children}
    </SearchQueryContext.Provider>
  );
};

export const useSearchQuery = () => {
  return useContext(SearchQueryContext);
};
