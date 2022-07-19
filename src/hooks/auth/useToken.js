import jwtDecode from "jwt-decode";
import { useLocation, useNavigate } from "react-router-dom";
import Toast from "../../components/UI/Alerts/Toast";
import api from "../../services/api";

const next = (token, user, setUser, setIsAuthenticated, navigate, location) => {
  localStorage.setItem("Peça@Peça:token", token);
  api.defaults.headers.Authorization = `Bearer_pp ${JSON.parse(token)}`;
  setUser({ ...user });
  setIsAuthenticated(true);
  navigate(location.pathname || "/dashboard", { replace: true });
};

const logout = (setUser, setIsAuthenticated, navigate) => {
  localStorage.removeItem("Peça@Peça:token");
  setUser(null);
  setIsAuthenticated(false);
  delete api.defaults.headers.Authorization;
  navigate("/", { replace: true });
  Toast({
    status: "warning",
    title: "Sessão expirada",
    description: "A sua sessão expirou, inicie sessão novamente!",
  });
};

export default function useToken(token, setUser, setIsAuthenticated) {
  const location = useLocation();
  const navigate = useNavigate();

  return () => {
    try {
      const { exp, iat, ...user } = jwtDecode(token);
      if (exp * 1000 < new Date().getTime()) {
        logout(setUser, setIsAuthenticated, navigate);
      } else {
        next(token, user, setUser, setIsAuthenticated, navigate, location);
      }
    } catch (error) {
      console.log(error);
      logout(setUser, setIsAuthenticated, navigate);
    }
  };
}
