import { createContext, useEffect, useState } from "react";

const UserContext = createContext();

const UserContextProvider = ({ children }) => { // Pasa 'children' como prop
  const [usuario, setUsuario] = useState({});
  
  useEffect(() => {
    setUsuario({
      name: "Diego Alonso MOLINA",
      registered: "22/Agosto/2022"
    });
  }, []);
  
  return (
    <UserContext.Provider value={usuario}>
      {children} {/* Utiliza 'children' dentro del componente */}
    </UserContext.Provider>
  );
};

export { UserContext, UserContextProvider };

