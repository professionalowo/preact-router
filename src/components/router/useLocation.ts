import { useContext } from "preact/hooks";
import { LocationContext } from "./locationContext";

export const useLocation = () => {
  const context = useContext(LocationContext);
  if (!context) throw new Error("useLocation must be used inside a Router");
  return context;
};
