import { createContext } from "react";

interface CommonContextType {
  testContext: string;
  setTestContext: (val: string) => void;
}
export const CommonContext = createContext<CommonContextType>({
  testContext: "",
  setTestContext: () => {},
});
