import { Navigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Guard = ({ children }) => {
  const token = JSON.parse(localStorage.getItem("token"));
  if (token) {
    return children;
  }
  return <Navigate to="/login" />;
};

export default Guard;
