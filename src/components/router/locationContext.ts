import { createContext } from "preact";

export const LocationContext = createContext<URL | undefined>(undefined);
