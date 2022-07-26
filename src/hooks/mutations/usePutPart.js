import { useMutation, useQueryClient } from "react-query";
import api from "../../services/api";
import useToast from "../notifications/useToast";

const fetch = (data) => {
  const { id, ...payload } = data;
  return api.put(`/parts/${id}`, payload).then((res) => res.data);
};

export default function usePutPart(reset) {
  const q = useQueryClient();
  const toast = useToast();

  return useMutation((values) => fetch(values), {
    onMutate: (data) => {
      reset(data);
      const old = q.getQueryData(["parts", data.id]);
      if (old) q.setQueryData(["parts", data.id], () => data);
      return old;
    },
    onSuccess: ({ id }) => {
      q.invalidateQueries(["parts", id]);
      toast({
        status: "success",
        title: "Editar Peça",
        description: "Peça editada com sucesso!",
      });
    },
    onSettled: ({ id }) => {
      q.invalidateQueries(["parts", id]);
    },
    onError: (error, payload, rollback) => {
      console.error("onError", error);
      if (rollback) rollback();
      toast({
        status: "error",
        title: "Ocorreu um erro",
        description: "Erro ao editar a peça!",
      });
    },
  });
}
