import { createContext, useContext, useState } from "react";
// import { reducer } from "./reducer";

const AppContext = createContext(null);
const AppProvider = ({ children }) => {
  const [data, setData] = useState([]);

  return (
    <AppContext.Provider value={{ data, setData }}>
      {children}
    </AppContext.Provider>
  );
};

// custom hook
const useGlobalContext = () => useContext(AppContext);

export { useGlobalContext, AppProvider };
