import { useMutation, useQueryClient } from "react-query";
import api from "../../services/api";

const fetch = (payload) => {
  return api.post(`/storages/`, payload).then((res) => res.data);
};

export default function usePostStorage(setIsOpen) {
  const q = useQueryClient();

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

    onSuccess: () => q.invalidateQueries(["storages"]),
    onSettled: () => q.invalidateQueries(["storages"]),
    onError: (error, payload, rollback) => {
      console.error("onError", error);
      if (rollback) rollback();
    },
  });
}
