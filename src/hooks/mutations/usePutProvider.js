import { useMutation, useQueryClient } from "react-query";
import api from "../../services/api";
import useToast from "../notifications/useToast";

const fetch = (data) => {
  const { id, ...payload } = data;
  return api.put(`/providers/${id}`, payload).then((res) => res.data);
};

export default function usePutProvider(reset) {
  const q = useQueryClient();
  const toast = useToast();

  return useMutation((values) => fetch(values), {
    onMutate: (data) => {
      reset(data);
      const old = q.getQueryData(["providers", data.id]);
      if (old) q.setQueryData(["providers", data.id], () => data);
      return old;
    },
    onSuccess: ({ id }) => {
      q.invalidateQueries(["providers", id]);
      toast({
        status: "success",
        title: "Editar Fornecedor",
        description: "Fornecedor editado com sucesso!",
      });
    },
    onError: (error, p, rollback) => {
      console.error("onError", error);
      if (rollback) rollback();
      toast({
        status: "error",
        title: "Ocorreu um erro",
        description: "Erro ao editar o fornecedor!",
      });
    },
  });
}
