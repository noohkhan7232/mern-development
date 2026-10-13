import { createContext, useState } from "react";

// 1) Create Context
export const GlobalContext = createContext();
export function ApplicationContext({ children }) {
  const userName = "Priyanshu";
  const age = 21;

  const [count, setCount] = useState(0);

  return (
    <>
      {/* 2) Provide Context */}
      <GlobalContext.Provider value={{ userName, age, count, setCount }}>
        {children}
      </GlobalContext.Provider>
    </>
  );
}
