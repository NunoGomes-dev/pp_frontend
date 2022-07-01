import { createContext, useEffect, useState } from "react";
import api from "../services/api";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storagedUser = localStorage.getItem("Peça@Peça:user");
    const storagedToken = localStorage.getItem("Peça@Peça:token");

    if (storagedToken && storagedUser) {
      setUser(JSON.parse(storagedUser));
      api.defaults.headers.Authorization = `Bearer ${storagedToken}`;
    }
  }, []);

  // const handleRefreshToken = () => {};

  const handleLogin = async ({ email, password }) => {
    setIsLoading(true);
    try {
      const res = await api.post("/users/sign-in", {
        email: email,
        password: password,
      });

      setUser(res.data.user);
      api.defaults.headers.Authorization = `Bearer_pp ${res.data.accessToken}`;
      setIsAuthenticated(true);
      setIsLoading(false);
    } catch (error) {
      setUser(null);
      setIsAuthenticated(false);
      setIsLoading(false);
    }
    setIsLoading(false);
  };
  const handleLogout = () => {
    setUser(null);
    setIsAuthenticated(false);
    sessionStorage.removeItem("Peça@Peça:user");
    sessionStorage.removeItem("Peça@Peça:token");
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, isLoading, user, handleLogin, handleLogout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
