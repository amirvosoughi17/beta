"use client"
import {
  createContext,
  FC,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { fetchUser, logout } from "@/utils/user";

interface User {
  id: number;
  email: string;
  messages : string[]
}

interface UserContextProps {
  user: User | null;
  loading: boolean;
  logout: () => void;
}

const UserContext = createContext<UserContextProps | undefined>(undefined);

export const UserProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUser = async () => {
      const userInfo = await fetchUser();
      setUser(userInfo);
      setLoading(false);
    };

    loadUser();
  }, []);

  const handleLogout = async () => {
    await logout();
    setUser(null); 
  };

  return (
    <UserContext.Provider value={{ user, loading, logout: handleLogout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
