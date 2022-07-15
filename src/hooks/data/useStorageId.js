import { useQuery } from "react-query";
import api from "../../services/api";

const fetchById = (id) => {
  return api.get(`/storages/${id}?include=parts`).then((res) => res.data);
};

export default function useStorageId(id, reset) {
  return useQuery(["storages", id], () => fetchById(id), {
    enabled: !!id,
    refetchOnWindowFocus: false,
    onSuccess: (data) => {
      reset(data);
    },
    onError: (error) => {
      console.log("error", error);
    },
  });
}
