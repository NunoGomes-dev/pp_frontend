import { useMutation } from "react-query";
import uploadApi from "../../services/uploadApi";
import useToast from "../notifications/useToast";

const fetch = (file) => {
  return uploadApi.post(`/upload`, file).then((res) => res.data);
};

export default function useUploadMedia(callback) {
  const toast = useToast();

  return useMutation((file) => fetch(file), {
    onSuccess: (file) => {
      if (callback) callback(file);
    },
    // onSettled: () => {},
    onError: (error, payload, rollback) => {
      console.log("onError", error);
      if (rollback) rollback();
      toast({
        status: "error",
        title: "Ocorreu um erro",
        description: "Erro ao dar upload",
      });
    },
  });
}
