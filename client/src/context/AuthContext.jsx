import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();

  const PORT = 'http://localhost:8080';
  
  const value = {
    currentUser,
    setCurrentUser,
    PORT
  };

  return (
    <AuthContext.Provider value= { value }>
      {children}
    </AuthContext.Provider>
  )
}