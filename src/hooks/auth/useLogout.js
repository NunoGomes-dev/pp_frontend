import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import api from "../../services/api";

export const useLogout = () => {
  const navigate = useNavigate();
  const { setUser, setIsAuthenticated } = useContext(AuthContext);

  return () => {
    localStorage.removeItem("Peça@Peça:token");
    setUser(null);
    setIsAuthenticated(false);
    delete api.defaults.headers.Authorization;
    navigate("/signin", { replace: true });
  };
};
