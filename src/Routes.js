import { useContext } from "react";
import {
  Navigate,
  Route,
  Routes as Router,
  useLocation,
} from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import { About, Dashboard, SignIn } from "./pages";

const RequireAuth = ({ children }) => {
  const location = useLocation();
  const { isAuthenticated } = useContext(AuthContext);

  if (!isAuthenticated) {
    return <Navigate to="/signin" state={{ from: location }} replace />;
  }

  return children;
};

const Routes = () => {
  return (
    <Router>
      <Route path="/signin" element={<SignIn />} />
      <Route
        path="/about"
        element={
          <RequireAuth>
            <About />
          </RequireAuth>
        }
      />
      <Route
        path="/"
        element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        }
      />
    </Router>
  );
};

export default Routes;
