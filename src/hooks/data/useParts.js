import { useQuery } from "react-query";
import api from "../../services/api";
import useToast from "../notifications/useToast";

const fetchParts = () => {
  return api.get("/parts").then((res) => res.data);
};

export default function useParts() {
  const toast = useToast();
  return useQuery(["parts"], fetchParts, {
    onSuccess: () => {},
    onError: (error) => {
      console.log("error", error);
      toast({
        status: "error",
        title: "Ocorreu um erro!",
        description: "Erro ao obter peças!",
      });
    },
  });
}
