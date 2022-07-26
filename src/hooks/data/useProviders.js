import { useQuery } from "react-query";
import api from "../../services/api";
import useToast from "../notifications/useToast";

const fetch = () => {
  return api.get("/providers").then((res) => res.data);
};

export default function useProviders() {
  const toast = useToast();

  return useQuery(["providers"], fetch, {
    onSuccess: () => {},
    onError: (error) => {
      console.log("error", error);
      toast({
        status: "error",
        title: "Ocorreu um erro",
        description: "Erro ao obter as fornecedores!",
      });
    },
  });
}
