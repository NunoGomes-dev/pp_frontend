import { useMutation, useQueryClient } from "react-query";
import api from "../../services/api";

const fetch = ({ id }) => {
  return api.delete(`/storages/${id}`).then((res) => res.data);
};

export default function useDeleteStorage() {
  const queryClient = useQueryClient();
  return useMutation((values) => fetch(values), {
    onMutate: (data) => {
      console.log("data", data);
    },
    onSuccess: (data) => {
      console.log("feito", data);
      queryClient.invalidateQueries(["storages"]);
    },
    onError: (error, newData, rollback) => {
      console.error(error);
      if (rollback) rollback();
    },
    onSettled: () => {
      queryClient.invalidateQueries(["storages"]);
    },
  });
}
