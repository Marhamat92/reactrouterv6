import { createContext, useContext, useEffect, useState } from "react";

const context = createContext();

export const useAuth = () => {
  return useContext(context);
}

const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || false);


  const data = {
    user,
    setUser
  }

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user])


  return (
    <context.Provider value={data}>
      {children}
    </context.Provider>
  )
}


export default AuthProvider
