import { Navigate } from "react-router-dom";
import { auth } from "../firebase";

const ProtectedRoutes = ({ children }) => {
  const user = auth.currentUser;

  return user ? children : <Navigate to="/" />;
};

export default ProtectedRoutes;