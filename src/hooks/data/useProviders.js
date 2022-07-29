import { useQuery } from "react-query";
import api from "../../services/api";
import { queryBuilder } from "../../utils/queryBuilder";
import useToast from "../notifications/useToast";

export default function useProviders({ currentPage, filters }) {
  const toast = useToast();
  const query = queryBuilder(filters);

  return useQuery(
    ["providers", currentPage ? `page=${currentPage}` : null, query || null],
    () =>
      api
        .get(
          `/providers?${
            currentPage
              ? `limit=${process.env.REACT_APP_PER_PAGE}&page=${currentPage}`
              : ""
          }${query || ""}`
        )
        .then((res) => res.data),
    {
      onError: (error) => {
        console.log("error", error);
        toast({
          status: "error",
          title: "Ocorreu um erro",
          description: "Erro ao obter as fornecedores!",
        });
      },
    }
  );
}
