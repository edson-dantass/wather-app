import React, { createContext, useState, useContext } from "react";
import { PROP_EXMAPLE, TypeWatherContext } from "../config/types/WatherTypes";

const WatherContext = createContext<TypeWatherContext>({
  wather: PROP_EXMAPLE,
  setWather: () => {},
});

export const WatherContextProvider: React.FC = ({ children }) => {
  const [wather, setWather] = useState(PROP_EXMAPLE);
  return <WatherContext.Provider value={{ wather, setWather }}>{children}</WatherContext.Provider>;
};

export function useWather() {
  const context = useContext(WatherContext);
  const { wather, setWather } = context;
  return { wather, setWather };
}
