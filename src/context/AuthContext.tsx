import { jwtDecode } from "jwt-decode";
import { createContext, useContext, useState,  useEffect, type ReactNode } from "react";


interface AuthContextType {
  token: string | null;
  userInfo: any;
  login: (token: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [token, setToken] = useState<string | null>(localStorage.getItem("token"));
  const [userInfo, setUserInfo] = useState<any>(null);

  useEffect(() => {
    if (token) {
      const decoded = jwtDecode<any>(token);
      setUserInfo(decoded);
    }
  }, [token]);

  const login = (newToken: string) => {
    localStorage.setItem("token", newToken);
    setToken(newToken);
    const decoded = jwtDecode<any>(newToken);
    setUserInfo(decoded);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
    setUserInfo(null);
  };

  return (
    <AuthContext.Provider value={{ token, userInfo, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};
