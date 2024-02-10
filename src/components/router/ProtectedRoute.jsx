import { Navigate } from "react-router-dom";
import SharedLayout from "../../pages/SharedLayout";
import { useAuth } from "../../context/AuthContext";

const ProtectedRoute = () => {
  const { error } = useAuth(); // Access authentication status
  if (error) {
    // Redirect if not authenticated
    return <Navigate to="/" />;
  }
  // Render the layout if authenticated
  return <SharedLayout />;
};

export default ProtectedRoute;
