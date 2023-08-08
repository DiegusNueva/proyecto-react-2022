
import { createContext, useEffect, useState } from "react";


const UserContext = createContext({ children });

const UserContextProvider = () => {

    const [usuario, setUsuario] = useState({})
    useEffect(() => {
        setUsuario({
            name: "Diego Alonso",
            registered: "22/Agosto/2022"
        })
    }, [])

  
  return <UserContext.Provider value={usuario}>{children}</UserContext.Provider>;
};

export {UserContext, UserContextProvider}
