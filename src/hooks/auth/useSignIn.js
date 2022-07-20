import { useContext } from "react";
import { useMutation } from "react-query";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import api from "../../services/api";
import { setAxiosAuth } from "../../utils/axiosAuth";
import useToast from "../notifications/useToast";

const fetch = (values) => {
  return api.post("/users/sign-in", values).then((res) => res.data);
};

export default function useSignIn() {
  const toast = useToast();
  const navigate = useNavigate();
  const location = useLocation();
  const { setUser, setIsAuthenticated } = useContext(AuthContext);

  return useMutation((values) => fetch(values), {
    onSuccess: (data) => {
      localStorage.setItem("Peça@Peça:token", JSON.stringify(data.accessToken));
      setAxiosAuth(`Bearer_pp ${data.accessToken}`);
      setUser(data.user);
      setIsAuthenticated(true);
      navigate(location.state?.from?.pathname || "/dashboard", {
        replace: true,
      });
      toast({
        status: "success",
        title: "Sessão iniciada com sucesso",
        description: "Bem vindo!",
      });
    },
    onError: (error, payload, callback) => {
      console.log("singin error", error);
      toast({
        status: "error",
        title: "Iniciar sessão",
        description: "Erro ao iniciar sessão!",
      });
      if (callback) callback();
    },
  });
}
