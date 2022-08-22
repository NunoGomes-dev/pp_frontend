import { useMutation, useQueryClient } from "react-query";
import api from "../../services/api";
import useToast from "../notifications/useToast";

export default function usePutOrder(reset) {
  const q = useQueryClient();
  const toast = useToast();

  return useMutation(
    ({ id, ...payload }) =>
      api.put(`/orders/${id}`, payload).then((res) => res.data),
    {
      onMutate: (data) => {
        reset(data);
        const old = q.getQueryData(["orders", data.id]);
        if (old) q.setQueryData(["orders", data.id], () => data);
        return old;
      },
      onSuccess: ({ id }) => {
        q.invalidateQueries(["orders", id]);
        toast({
          status: "success",
          title: "Editar Encomenda",
          description: "Encomenda editada com sucesso!",
        });
      },
      onError: (error, p, rollback) => {
        console.error("onError", error);
        if (rollback) rollback();
        toast({
          status: "error",
          title: "Ocorreu um erro",
          description: "Erro ao editar a encomenda!",
        });
      },
    }
  );
}
