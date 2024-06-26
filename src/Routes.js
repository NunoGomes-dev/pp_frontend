import { useContext } from "react";
import {
  Navigate,
  Route,
  Routes as Router,
  useLocation,
} from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import {
  Dashboard,
  SignIn,
  Providers,
  Storages,
  Parts,
  Inventory,
  Orders,
  Storage,
  Home,
  SignUp,
  Part,
  Provider,
} from "./pages";

const ProtectedRoute = ({ isPrivate, isSignIn, children }) => {
  const location = useLocation();
  const { isAuthenticated, isLoading } = useContext(AuthContext);

  if (isPrivate && !isAuthenticated && !isLoading) {
    return <Navigate to="/signin" state={{ from: location }} replace />;
  }
  if (isSignIn && isAuthenticated && !isLoading) {
    return <Navigate to="/dashboard" />;
  }
  return children;
};

const Routes = () => {
  return (
    <Router>
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute isPrivate>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/parts"
        element={
          <ProtectedRoute isPrivate>
            <Parts />
          </ProtectedRoute>
        }
      />
      <Route
        path="/parts/:id"
        element={
          <ProtectedRoute isPrivate>
            <Part />
          </ProtectedRoute>
        }
      />
      <Route
        path="/inventory"
        element={
          <ProtectedRoute isPrivate>
            <Inventory />
          </ProtectedRoute>
        }
      />
      <Route
        path="/orders"
        element={
          <ProtectedRoute isPrivate>
            <Orders />
          </ProtectedRoute>
        }
      />
      <Route
        path="/providers"
        element={
          <ProtectedRoute isPrivate>
            <Providers />
          </ProtectedRoute>
        }
      />
      <Route
        path="/providers/:id"
        element={
          <ProtectedRoute isPrivate>
            <Provider />
          </ProtectedRoute>
        }
      />
      <Route
        path="/storages"
        element={
          <ProtectedRoute isPrivate>
            <Storages />
          </ProtectedRoute>
        }
      />
      <Route
        path="/storages/:id"
        element={
          <ProtectedRoute isPrivate>
            <Storage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/"
        element={
          <ProtectedRoute isSignIn>
            <Home />
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
      <Route
        path="/signup"
        element={
          <ProtectedRoute isSignIn>
            <SignUp />
          </ProtectedRoute>
        }
      />
    </Router>
  );
};

export default Routes;
