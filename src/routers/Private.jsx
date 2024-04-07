import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../hooks/AuthProvider";
import PropTypes from "prop-types";

const Private = ({ children }) => {
  
  const { user, loader } = useContext(AuthContext);
  const location = useLocation();

  if (loader) {
    return (
      <div className="py-12 flex justify-center h-screen">
        <p>Loading.....</p>
      </div>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate state={location.pathname} to="/login"></Navigate>;
};
Private.propTypes = {
    children: PropTypes.node,
  };
export default Private;
