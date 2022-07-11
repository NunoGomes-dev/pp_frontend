import { createContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import api from "../services/api";
import pp_logo from "../assets/pp_logo.png";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("Peça@Peça:token");

    if (token) {
      api.defaults.headers.Authorization = `Bearer_pp ${JSON.parse(token)}`;
      handleRefreshToken({
        token: JSON.parse(token),
        path: location.pathname,
      });
    }
    setIsLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleRefreshToken = async ({ token, path }) => {
    setIsLoading(true);
    try {
      const res = await api.post("/users/refreshToken", {
        accessToken: token,
      });
      api.defaults.headers.Authorization = `Bearer_pp ${res.data.accessToken}`;
      localStorage.setItem(
        "Peça@Peça:token",
        JSON.stringify(res.data.accessToken)
      );

      setUser(res.data.user);
      setIsAuthenticated(true);
      navigate(path, { replace: true });
    } catch (err) {
      console.log(err);
      navigate("/signin", { replace: true });
    }
    setIsLoading(false);
  };

  const handleLogin = async ({ email, password }) => {
    setIsLoading(true);
    try {
      const res = await api.post("/users/sign-in", {
        email: email,
        password: password,
      });

      localStorage.setItem(
        "Peça@Peça:token",
        JSON.stringify(res.data.accessToken)
      );
      api.defaults.headers.Authorization = `Bearer_pp ${res.data.accessToken}`;
      setUser(res.data.user);
      setIsAuthenticated(true);
      navigate(location.state?.from?.pathname || "/", { replace: true });
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("Peça@Peça:token");
    setUser(null);
    setIsAuthenticated(false);
    delete api.defaults.headers.Authorization;
    navigate("/signin", { replace: true });
  };

  if (isLoading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          width: "100%",
          background: "#ddba92",
        }}
      >
        <div style={{ width: "30%" }}>
          <img
            src={pp_logo}
            alt="Peça a Peça"
            style={{ height: "100%", boxSizing: "100%" }}
          />
        </div>
      </div>
    );
  }

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, isLoading, user, handleLogin, handleLogout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
