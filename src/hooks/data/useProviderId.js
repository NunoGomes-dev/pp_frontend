import { useQuery } from "react-query";
import api from "../../services/api";
import useToast from "../notifications/useToast";

export default function useProviderId(id, reset) {
  const toast = useToast();

  return useQuery(
    ["providers", id],
    () => api.get(`/providers/${id}`).then((res) => res.data),
    {
      enabled: id && id !== "new",
      refetchOnWindowFocus: false,
      onSuccess: (data) => reset(data),
      onError: (error) => {
        console.log("error", error);
        toast({
          status: "error",
          title: "Ocorreu um erro!",
          description: "Erro ao obter o fornecedor",
        });
      },
    }
  );
}
