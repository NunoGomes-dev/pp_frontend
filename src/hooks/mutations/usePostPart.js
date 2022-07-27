import { useMutation, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import useToast from "../notifications/useToast";

const fetch = (payload) => {
  console.log(payload);
  return api.post(`/parts`, payload).then((res) => res.data);
};

export default function usePostPart() {
  const q = useQueryClient();
  const toast = useToast();
  const navigate = useNavigate();

  return useMutation((values) => fetch(values), {
    onMutate: (newPart) => {
      const oldParts = q.getQueryData(["parts"]);
      if (oldParts)
        q.setQueryData(["parts"], ({ total, parts }) => {
          return {
            parts: [...parts, newPart],
            total: total--,
          };
        });
      return oldParts;
    },

    onSuccess: () => {
      q.invalidateQueries(["parts"]);
      navigate("/parts");
      toast({
        title: "Nova Peça",
        status: "success",
        description: "Peça criada com sucesso!",
      });
    },
    onSettled: () => q.invalidateQueries(["parts"]),
    onError: (error, p, rollback) => {
      console.log("onError", error);
      if (rollback) rollback();
      toast({
        status: "error",
        title: "Ocorreu um erro",
        description: "Erro ao criar peça!",
      });
    },
  });
}
