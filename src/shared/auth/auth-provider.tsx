import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import Swal from "sweetalert2";

export interface AuthContextType {
  token: string | null;
  user: User | null;
  signIn: (user: AuthData) => Promise<void>;
  signOut: () => void;
}

export interface User {
  id: number;
  email: string;
}

export interface AuthData {
  email: string;
  password: string;
}

const AuthContext = createContext<AuthContextType>(null!);

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [token, setToken] = useState<string | null>(
    localStorage.getItem("token")
  );
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const validateToken = () => {
      if (token) {
        setUser(
          localStorage.getItem("user")
            ? JSON.parse(localStorage.getItem("user") as string)
            : null
        );
      } else {
        setToken(null);
        setUser(null);
      }
    };

    validateToken();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const signIn = async (data: AuthData) => {
    if (data.email && data.password) {
      const fakeToken = "fake-jwt-token-123456";
      const userData = { id: 1, email: data.email };

      setToken(fakeToken);
      setUser(userData);

      localStorage.setItem("token", fakeToken);
      localStorage.setItem("user", JSON.stringify(userData));
    } else {
      Swal.fire(
        "Usuario o contraseña incorrectos.",
        "Vuelve a intentar",
        "error"
      );
    }
  };

  const signOut = () => {
    setUser(null);
    setToken(null);
    localStorage.clear();
  };

  const value = { token, user, signIn, signOut };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;

export const useAuth = () => useContext(AuthContext);
