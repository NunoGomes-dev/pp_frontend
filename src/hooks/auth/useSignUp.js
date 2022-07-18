import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";

const fetch = (values) => {
  return api.post("/users/register", values).then((res) => res.data);
};

export default function useSignUp() {
  const navigate = useNavigate();

  return useMutation((values) => fetch(values), {
    onSuccess: () => {
      navigate("/signin");
    },
    onError: (error, payload, callback) => {
      if (callback) callback();
    },
  });
}
