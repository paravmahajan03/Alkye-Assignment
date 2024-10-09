import { Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import PropTypes from "prop-types"

export const ProtectedRoute = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem("userData"));

  useEffect(() => {
    const handleStorageChange = (event) => {
      if (event.key === "userData") {
        setIsAuthenticated(!!event.newValue);
      }
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return isAuthenticated ? children : <Navigate to="/" />;
};

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};
