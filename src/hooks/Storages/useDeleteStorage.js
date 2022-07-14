import { useMutation, useQueryClient } from "react-query";
import api from "../../services/api";

const fetch = ({ id }) => {
  return api.delete(`/storages/${id}`).then((res) => res.data);
};

export default function useDeleteStorage() {
  const q = useQueryClient();
  return useMutation((values) => fetch(values), {
    onMutate: ({ id }) => {
      const old = q.getQueryData(["storages"]);
      if (old)
        q.setQueryData(["storages"], ({ total, storages }) => {
          return {
            storages: [...storages.filter((s) => s.id !== id)],
            total: total--,
          };
        });
      return old;
    },
    onSuccess: () => {
      q.invalidateQueries(["storages"]);
    },
    onSettled: () => {
      q.invalidateQueries(["storages"]);
    },
    onError: (error, payload, rollback) => {
      console.error("onError", error);
      if (rollback) rollback();
    },
  });
}
