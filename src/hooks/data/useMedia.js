import { useQuery } from "react-query";
import uploadApi from "../../services/uploadApi";
import useToast from "../notifications/useToast";

const fetch = () => {
  return uploadApi.get("/").then((res) => res.data);
};

export default function useParts() {
  const toast = useToast();

  return useQuery(["media"], fetch, {
    onSuccess: () => {},
    onError: (error) => {
      console.log("error", error);
      toast({
        status: "error",
        title: "Ocorreu um erro!",
        description: "Erro ao obter os conteúdos multimédia!",
      });
    },
  });
}
