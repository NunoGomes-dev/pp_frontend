import { useQuery } from "react-query";
import api from "../../services/api";

const fetchStorages = () => {
  return api.get("/storages").then((res) => res.data);
};

export default function useStorages() {
  const onSuccess = (data) => {
    console.log("data", data);
  };
  const onError = (error) => {
    console.log("error", error);
  };

  return useQuery(["storages"], fetchStorages, {
    onSuccess: onSuccess,
    onError: onError,
  });
}
