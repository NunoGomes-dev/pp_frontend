import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { deleteAxiosAuth } from "../../utils/axiosAuth";
import useToast from "../notifications/useToast";

export const useLogout = () => {
  const toast = useToast();
  const navigate = useNavigate();
  const { setUser, setIsAuthenticated } = useContext(AuthContext);

  return () => {
    localStorage.removeItem("Peça@Peça:token");
    setUser(null);
    setIsAuthenticated(false);
    deleteAxiosAuth();
    toast({
      status: "success",
      title: "Sessão terminada com sucesso",
      description: "Obrigado!",
    });
    navigate("/", { replace: true });
  };
};
