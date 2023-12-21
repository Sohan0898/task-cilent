import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";

import { ScaleLoader } from "react-spinners";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <ScaleLoader color="#3F77C4" loading={loading} size={30} />
      </div>
    );
  }

  if (user) {
    return children;
  }

  return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default PrivateRoute;