import { createContext } from "react";
import { ContextProps } from "./constInterface";


interface ProgressContextInitialValue {
  lastTime: string;
  status: string;
}

const initialValue = {
  lastTime: "09/10/2022",
  status: "In progress",
};

export const ProgressContext =
  createContext<ProgressContextInitialValue>(initialValue);

const ProgressContextProvider = ({
  children,
}: ContextProps) => {
  return (
    <ProgressContext.Provider value={initialValue}>
      {children}
    </ProgressContext.Provider>
  );
};

export default ProgressContextProvider;
