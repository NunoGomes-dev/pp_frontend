import { useMutation } from "react-query";
import { useLocation, useNavigate } from "react-router-dom";
import api from "../services/api";

const fetch = ({ token }) => {
  return api
    .post("/users/refreshToken", { accessToken: token })
    .then((res) => res.data);
};

export default function useRefreshToken(setUser, setIsAuthenticated) {
  const navigate = useNavigate();
  const location = useLocation();

  const onSuccess = (data) => {
    localStorage.setItem("Peça@Peça:token", JSON.stringify(data.accessToken));
    api.defaults.headers.Authorization = `Bearer_pp ${data.accessToken}`;
    setUser(data.user);
    setIsAuthenticated(true);
    navigate(location.pathname, { replace: true });
  };
  const onError = (error) => {
    console.log("singin error", error);
    navigate("/signin", { replace: true });
  };

  return useMutation((values) => fetch(values), {
    onSuccess: onSuccess,
    onError: onError,
  });
}
