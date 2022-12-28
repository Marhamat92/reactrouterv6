import { createContext, useContext, useState } from "react";

const context = createContext();

export const useAuth = () => {
  return useContext(context);
}

const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(false);


  const data = {
    user,
    setUser
  }

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setUser(JSON.parse(user));
    }
  }, [])


  return (
    <context.Provider value={data}>
      {children}
    </context.Provider>
  )
}


export default AuthProvider
