import { useMutation, useQueryClient } from "react-query";
import api from "../../services/api";

const fetch = (payload) => {
  return api.post(`/storages/`, payload).then((res) => res.data);
};

export default function usePostStorage() {
  const q = useQueryClient();

  return useMutation((values) => fetch(values), {
    onMutate: (newStorage) => {
      const old = q.getQueryData(["storages"]);
      if (old) q.setQueryData(["storages"], (old) => [...old, newStorage]);
      return old;
    },
    onSuccess: () => q.invalidateQueries(["storages"]),
    onSettled: () => q.invalidateQueries(["storages"]),
    onError: (error, payload, rollback) => {
      console.error("onError", error);
      if (rollback) rollback();
    },
  });
}
