import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import useToast from "../notifications/useToast";

const fetch = (values) => {
  return api.post("/users/register", values).then((res) => res.data);
};

export default function useSignUp() {
  const navigate = useNavigate();
  const toast = useToast();

  return useMutation((values) => fetch(values), {
    onSuccess: () => {
      navigate("/signin");
      toast({
        status: "success",
        title: "Registo",
        description: "Conta criada com sucesso!",
      });
    },
    onError: (error, payload, callback) => {
      console.log(error);
      toast({
        status: "error",
        title: "Registo",
        description: "Erro ao registar",
      });
      if (callback) callback();
    },
  });
}
