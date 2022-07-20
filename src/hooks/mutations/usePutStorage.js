import { useMutation, useQueryClient } from "react-query";
import api from "../../services/api";
import useToast from "../notifications/useToast";

const fetch = (data) => {
  const { id, parts, ...payload } = data;
  return api.put(`/storages/${id}`, payload).then((res) => res.data);
};

export default function usePutStorage(reset) {
  const q = useQueryClient();
  const toast = useToast();

  return useMutation((values) => fetch(values), {
    onMutate: (data) => {
      reset(data);
      const old = q.getQueryData(["storages", data.id]);
      if (old) q.setQueryData(["storages", data.id], () => data);
      return old;
    },
    onSuccess: ({ id }) => {
      q.invalidateQueries(["storages", id]);
      toast({
        status: "success",
        title: "Editar Gaveta",
        description: "Gaveta editada com sucesso!",
      });
    },
    onSettled: ({ id }) => {
      q.invalidateQueries(["storages", id]);
    },
    onError: (error, payload, rollback) => {
      console.error("onError", error);
      if (rollback) rollback();
      toast({
        status: "error",
        title: "Ocorreu um erro",
        description: "Erro ao editar a gaveta!",
      });
    },
  });
}
