import jwtDecode from "jwt-decode";
import { useLocation, useNavigate } from "react-router-dom";
import { deleteAxiosAuth, setAxiosAuth } from "../../utils/axiosAuth";
import useToast from "../notifications/useToast";

const next = (token, user, setUser, setIsAuthenticated, navigate, location) => {
  localStorage.setItem("Peça@Peça:token", token);
  setAxiosAuth(`Bearer_pp ${JSON.parse(token)}`);
  setUser({ ...user });
  setIsAuthenticated(true);
  navigate(location.pathname || "/dashboard", { replace: true });
};

const logout = (setUser, setIsAuthenticated, navigate, toast) => {
  localStorage.removeItem("Peça@Peça:token");
  setUser(null);
  setIsAuthenticated(false);
  deleteAxiosAuth();
  navigate("/", { replace: true });
  toast({
    status: "warning",
    title: "Sessão expirada",
    description: "A sua sessão expirou, inicie sessão novamente!",
  });
};

export default function useToken(token, setUser, setIsAuthenticated) {
  const location = useLocation();
  const navigate = useNavigate();
  const toast = useToast();

  return () => {
    try {
      const { exp, iat, ...user } = jwtDecode(token);
      if (exp * 1000 < new Date().getTime()) {
        logout(setUser, setIsAuthenticated, navigate, toast);
      } else {
        next(token, user, setUser, setIsAuthenticated, navigate, location);
      }
    } catch (error) {
      console.log(error);
      logout(setUser, setIsAuthenticated, navigate, toast);
    }
  };
}
