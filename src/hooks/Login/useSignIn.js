import { useContext } from "react";
import { useMutation } from "react-query";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import api from "../../services/api";

const fetch = (values) => {
  return api.post("/users/sign-in", values).then((res) => res.data);
};

export default function useSignIn() {
  const navigate = useNavigate();
  const location = useLocation();
  const { setUser, setIsAuthenticated } = useContext(AuthContext);

  const onSuccess = (data) => {
    localStorage.setItem("Peça@Peça:token", JSON.stringify(data.accessToken));
    api.defaults.headers.Authorization = `Bearer_pp ${data.accessToken}`;
    setUser(data.user);
    setIsAuthenticated(true);
    navigate(location.state?.from?.pathname || "/", { replace: true });
  };
  const onError = (error) => {
    console.log("singin error", error);
  };

  return useMutation((values) => fetch(values), {
    onSuccess: onSuccess,
    onError: onError,
  });
}
