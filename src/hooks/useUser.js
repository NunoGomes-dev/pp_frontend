import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function useUser() {
  const { user } = useContext(AuthContext);
  return user;
}
