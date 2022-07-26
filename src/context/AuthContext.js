import { createContext, useEffect, useState } from "react";
import useToken from "../hooks/auth/useToken";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [firstLoading, setFirstLoading] = useState(true);
  const handleToken = useToken(
    localStorage.getItem("Peça@Peça:token") || null,
    setUser,
    setIsAuthenticated
  );

  useEffect(() => {
    const token = localStorage.getItem("Peça@Peça:token");

    if (token) {
      handleToken();
    }
    setFirstLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        user,
        setUser,
        firstLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
