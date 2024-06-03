import { useContext } from "react";
import { AuthContext } from "./Provider/ClientProvider";

export function useAuth() {
  return useContext(AuthContext);
}
