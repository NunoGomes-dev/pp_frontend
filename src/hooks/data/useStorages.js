import { useQuery } from "react-query";
import api from "../../services/api";
import useToast from "../notifications/useToast";

const fetchStorages = () => {
  return api.get("/storages").then((res) => res.data);
};

export default function useStorages() {
  const toast = useToast();

  return useQuery(["storages"], fetchStorages, {
    onSuccess: () => {},
    onError: (error) => {
      console.log("error", error);
      toast({
        status: "error",
        title: "Ocorreu um erro",
        description: "Erro ao obter as gavetas!",
      });
    },
  });
}
