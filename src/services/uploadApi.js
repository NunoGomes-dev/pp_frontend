import axios from "axios";

const uploadApi = axios.create({
  baseURL: process.env.REACT_APP_UPLOAD_URL || "http://localhost:5000",
});

export default uploadApi;
