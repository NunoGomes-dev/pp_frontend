import { useMutation, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import useToast from "../notifications/useToast";

const fetch = (payload) => {
  return api.post(`/providers`, payload).then((res) => res.data);
};

export default function usePostProvider() {
  const q = useQueryClient();
  const toast = useToast();
  const navigate = useNavigate();

  return useMutation((values) => fetch(values), {
    onMutate: (newProvider) => {
      const oldProviders = q.getQueryData(["providers"]);
      if (oldProviders)
        q.setQueryData(["providers"], ({ total, providers }) => {
          return {
            providers: [...providers, newProvider],
            total: total--,
          };
        });
      return oldProviders;
    },
    onSuccess: () => {
      q.invalidateQueries(["providers"]);
      navigate("/providers");
      toast({
        status: "success",
        title: "Novo Fornecedor",
        description: "Fornecedor criado com sucesso!",
      });
    },
    onError: (error, payload, rollback) => {
      console.error("onError", error);
      if (rollback) rollback();
      toast({
        status: "error",
        title: "Ocorreu um erro",
        description: "Erro ao criar fornecedor!",
      });
    },
  });
}
