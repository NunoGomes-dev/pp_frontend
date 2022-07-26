import { useQuery } from "react-query";
import api from "../../services/api";
import useToast from "../notifications/useToast";

const fetchById = (id) => {
  return api.get(`/storages/${id}?include=parts`).then((res) => res.data);
};

export default function useStorageId(id, reset) {
  const toast = useToast();

  return useQuery(["storages", id], () => fetchById(id), {
    enabled: !!id,
    refetchOnWindowFocus: false,
    onSuccess: (data) => {
      reset(data);
    },
    onError: (error) => {
      console.log("error", error);
      toast({
        status: "error",
        title: "Ocorreu um erro!",
        description: "Erro ao obter gaveta",
      });
    },
  });
}
