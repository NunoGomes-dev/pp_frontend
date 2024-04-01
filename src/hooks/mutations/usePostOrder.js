import { useMutation, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import useToast from "../notifications/useToast";

export default function usePostOrder() {
  const q = useQueryClient();
  const toast = useToast();
  const navigate = useNavigate();

  return useMutation(
    (payload) => api.post(`/orders`, payload).then((res) => res.data),
    {
      onMutate: (newOrder) => {
        const oldOrders = q.getQueryData(["orders"]);
        if (oldOrders)
          q.setQueryData(["orders"], ({ total, orders }) => {
            return {
              orders: [...orders, newOrder],
              total: total--,
            };
          });
        return oldOrders;
      },

      onSuccess: () => {
        q.invalidateQueries(["orders"]);
        navigate("/orders");
        toast({
          title: "Nova Encomenda",
          status: "success",
          description: "Encomenda criada com sucesso!",
        });
      },
      onError: (error, p, rollback) => {
        console.log("onError", error);
        if (rollback) rollback();
        toast({
          status: "error",
          title: "Ocorreu um erro",
          description: "Erro ao criar encomenda!",
        });
      },
    }
  );
}
