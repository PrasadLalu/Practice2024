import { Navigate, Outlet } from "react-router-dom";
import auth from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const PrivateRoute = () => {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return <p>Loading...</p>;
  }

  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
