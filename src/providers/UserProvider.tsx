import { useEffect, useState, createContext, useContext, ReactNode } from "react";
import { v4 } from "uuid";
import { User } from "../Types/interfaces";

interface UserContextType {
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
  order: string;
}

const initialUserValues: User = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  addressLine1: "",
  city: "",
  state: "",
  country: "",
  zipCode: "",
};

const UserContext = createContext({} as UserContextType);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User>(initialUserValues);
  const [order, setOrder] = useState("");

  useEffect(() => {
    setOrder(v4());
  }, []);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        order,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
