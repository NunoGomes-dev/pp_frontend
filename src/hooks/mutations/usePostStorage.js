import { useMutation, useQueryClient } from "react-query";
import api from "../../services/api";
import useToast from "../notifications/useToast";

const fetch = (payload) => {
  return api.post(`/storages/`, payload).then((res) => res.data);
};

export default function usePostStorage(setIsOpen) {
  const q = useQueryClient();
  const toast = useToast();

  return useMutation((values) => fetch(values), {
    onMutate: (newStorage) => {
      const oldStorages = q.getQueryData(["storages"]);
      if (oldStorages)
        q.setQueryData(["storages"], ({ total, storages }) => {
          return {
            storages: [...storages, newStorage],
            total: total--,
          };
        });
      setIsOpen(false);
      return oldStorages;
    },

    onSuccess: () => {
      q.invalidateQueries(["storages"]);
      toast({
        status: "success",
        title: "Nova gaveta",
        description: "Gaveta criada com sucesso!",
      });
    },
    onSettled: () => q.invalidateQueries(["storages"]),
    onError: (error, payload, rollback) => {
      console.error("onError", error);
      if (rollback) rollback();
      toast({
        status: "error",
        title: "Ocorreu um erro",
        description: "Erro ao criar gaveta!",
      });
    },
  });
}
