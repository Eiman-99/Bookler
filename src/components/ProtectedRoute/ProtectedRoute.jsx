import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const user = useSelector((state) => state.auth.currentUser);
  return user ? children : <Navigate to="/login" replace />;
}

export default ProtectedRoute;
