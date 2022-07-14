import { createContext, useEffect, useState } from "react";
import useRefreshToken from "../hooks/Login/useRefreshToken";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  const { mutate } = useRefreshToken(setUser, setIsAuthenticated);

  useEffect(() => {
    const token = localStorage.getItem("Peça@Peça:token");

    if (token) {
      mutate({
        token: JSON.parse(token),
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        user,
        setUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
