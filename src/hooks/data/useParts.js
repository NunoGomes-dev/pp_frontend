import { useQuery } from "react-query";
import api from "../../services/api";
import { queryBuilder } from "../../utils/queryBuilder";
import useToast from "../notifications/useToast";

export default function useParts({ currentPage = 1, filters = [] }) {
  const toast = useToast();
  const query = queryBuilder(filters);

  return useQuery(
    ["parts", `page=${currentPage}`, query],
    () =>
      api
        .get(
          `/parts?limit=${process.env.REACT_APP_PER_PAGE}&page=${currentPage}${query}`
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
