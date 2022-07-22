import { useQuery } from "react-query";
import api from "../../services/api";
import useToast from "../notifications/useToast";

export default function useParts({ currentPage = 1 }) {
  const toast = useToast();

  return useQuery(
    ["parts", `page=${currentPage}`],
    () =>
      api
        .get(
          `/parts?limit=${process.env.REACT_APP_PER_PAGE}&page=${currentPage}`
        )
        .then((res) => res.data),
    {
      onSuccess: () => {},
      onError: (error) => {
        console.log("error", error);
        toast({
          status: "error",
          title: "Ocorreu um erro!",
          description: "Erro ao obter peças!",
        });
      },
    }
  );
}

export const usePrefechParts = ({ currentPage }) => {};
