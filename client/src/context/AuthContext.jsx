import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const PORT = 'http://localhost:8080';
  
  const value = {
    currentUser,
    setCurrentUser,
    loading,
    setLoading,
    error,
    setError,
    PORT
  };

  return (
    <AuthContext.Provider value= { value }>
      {!loading && children}
    </AuthContext.Provider>
  )
}