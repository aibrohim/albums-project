import { createContext, useEffect, useState } from "react";
import App from "../App";
import UnauthApp from "../unauth-app";

export const AuthContext = createContext();

const AuthProvider = () => {
  const [token, setToken] = useState(localStorage.getItem("token"));

  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token)
    }
  }, [token]);

  return (
    <AuthContext.Provider value={{ token, setToken }}>
      {token ? <App /> : <UnauthApp />}
    </AuthContext.Provider>
  )
};

export default AuthProvider;