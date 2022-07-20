import api from "../services/api";
import uploadApi from "../services/uploadApi";

export const setAxiosAuth = (auth) => {
  if (!auth) return null;
  api.defaults.headers.Authorization = auth;
  uploadApi.defaults.headers.Authorization = auth;
  return;
};

export const deleteAxiosAuth = () => {
  delete api.defaults.headers.Authorization;
  delete uploadApi.defaults.headers.Authorization;
  return;
};
