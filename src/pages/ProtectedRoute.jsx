import { useAuth } from "../context/AuthContext";

const ProtectedRoute = ({ element }) => {
  const { user, isLoading, error } = useAuth();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return user ? (
    element
  ) : (
    <div className="flex items-center justify-center h-full text-secondary-600">
      Please Login
    </div>
  );
};

export default ProtectedRoute;
