import { useContext } from "react";
import {
  Navigate,
  Route,
  Routes as Router,
  useLocation,
} from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import { About, Dashboard, SignIn } from "./pages";

const ProtectedRoute = ({ isPrivate, isSignIn, children }) => {
  const location = useLocation();
  const { isAuthenticated, isLoading } = useContext(AuthContext);

  if (isPrivate && !isAuthenticated && !isLoading) {
    return <Navigate to="/signin" state={{ from: location }} replace />;
  }
  if (isSignIn && isAuthenticated && !isLoading) {
    return <Navigate to="/" />;
  }

  return children;
};

const Routes = () => {
  return (
    <Router>
      <Route
        path="/about"
        element={
          <ProtectedRoute isPrivate>
            <About />
          </ProtectedRoute>
        }
      />
      <Route
        path="/"
        element={
          <ProtectedRoute isPrivate>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/signin"
        element={
          <ProtectedRoute isSignIn>
            <SignIn />
          </ProtectedRoute>
        }
      />
    </Router>
  );
};

export default Routes;
